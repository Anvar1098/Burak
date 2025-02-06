import OrderItemModel from "../schema/OrderItem.model";
import OrderModel from "../schema/Order.model";
import {
  Order,
  OrderInquiry,
  OrderItemInput,
  OrderUpdateInput,
} from "../libs/types/order";
import { Member } from "../libs/types/member";
import { shapeIntoMongooseObjectId } from "../libs/config";
import { HttpCode, Message } from "../libs/Errors";
import Errors from "../libs/Errors";
import { ObjectId } from "mongoose";
import { OrderStatus } from "../libs/enums/order.enum";
import MemberService from "./Member.service";

class OrderService {
  private readonly orderModel;
  private readonly orderItemModel;
  private readonly memberService;

  constructor() {
    this.orderModel = OrderModel;
    this.orderItemModel = OrderItemModel;
    this.memberService = new MemberService();
  }

  public async createOrder(                       // Order va uning soyasi => orderItem (pasdagi private mantiq)
    member: Member,
    input: OrderItemInput[]
  ): Promise<Order> {
    const memberId = shapeIntoMongooseObjectId(member._id);  // memberID => login bolgan user
    const amount = input.reduce((accumulator: number, item: OrderItemInput) => {
      return accumulator + item.itemPrice * item.itemQuantity;
    }, 0);
    const delivery = amount < 100 ? 5 : 0;

    try {
      const newOrder: Order = await this.orderModel.create({
        orderTotal: amount + delivery,
        orderDelivery: delivery,
        memberId: memberId,
      });
      const orderId = newOrder._id;
      console.log("orderId:", newOrder._id);
      await this.recordOrderitem(orderId, input);

      //TODO: create order item
      return newOrder;
    } catch (err) {
      console.log("ERROR, model: createOrder", err);
      throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
    }
  }

  private async recordOrderitem(      // Faqat class ichida ishlatamiz shuni uchun private
    orderId: ObjectId,                // Shuningdek orderga tegishli bolgan mantiqlani boshqa collectionga saqlayapmiz (Soya algaritmi)
    input: OrderItemInput[]
  ): Promise<void> {
    const promisedList = input.map(async (item: OrderItemInput) => {
      item.orderId = orderId;
      item.productId = shapeIntoMongooseObjectId(item.productId);
      return await this.orderItemModel.create(item);
    });

    console.log("promisedList:", promisedList);
    // promisedList => [Pending1, Pending2, Pending3]
   
   
    const orderItemsState = await Promise.all(promisedList);
    // Tayyor orderlarni beradi => [orderItem1, orderItem2, orderItem3] yani kuttirib pendingdan tayyor natijani berdi
  }

  public async getMyOrders(
    member: Member,
    inquiry: OrderInquiry
  ): Promise<Order[]> {
    const memberId = shapeIntoMongooseObjectId(member._id);
    const matches = { memberId: memberId, orderStatus: inquiry.orderStatus };

    const result = await this.orderModel
      .aggregate([
        { $match: matches },
        { $sort: { updateAt: -1 } },
        { $skip: (inquiry.page - 1) * inquiry.limit },
        { $limit: inquiry.limit },
        // [order1._id, order2._id, order3._id]
        {
          $lookup: {
            from: "orderItems",
            localField: "_id",
            foreignField: "orderId",
            as: "orderItems", 
          },
        },
        // [order1+orderItems, order2+orderItems, order3+orderItems] => yani order boyitildi
        {
          $lookup: {
            from: "products",
            localField: "orderItems.productId",
            foreignField: "_id",
            as: "productData",
          },
        },
        // [order1+productData, order2+productData, order3+productData] => 
      ])
      .exec();
    if (!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);
    return result;
  }

  public async updateOrder(
    member: Member,
    input: OrderUpdateInput
  ): Promise<Order> {
    const memberId = shapeIntoMongooseObjectId(member._id),
       orderId = shapeIntoMongooseObjectId(input.orderId),
       orderStatus = input.orderStatus;

    const result = await this.orderModel
    .findOneAndUpdate(
      { 
        memberId: memberId,
        _id: orderId, 
      },
      { orderStatus: orderStatus },
      { new: true }
    )  
    .exec();

    if (!result) throw new Errors(HttpCode.NOT_MODIFIED, Message.UPDATE_FAILED);

    if(orderStatus === OrderStatus.PROCESS) {
      await this.memberService.addUserPoint(member, 1);
    }
    return result;
  }
}

export default OrderService;
