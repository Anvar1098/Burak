/* Project Standards:
-Logging standards
-Naming Standards
 function, method, variable => Camel     goHome
 class => Pascal                         MemberService
 folder => Kebab
 css => Snake                            buton_style

*/

/**
 Request :
  1) Traditional API
  2) Rest API
  3) GraphQL API
 */

/**  
 Cookies :
  1) request join
  2) self destroy 
 */

/** 
 Validation :
  1) Frontend validation
  2) Backend validation
  3) Database validation
 */

  /**
   
    Why Extend Request or Response?

By default, Express’s Request and Response objects do not have custom properties like member, session, or file. If you are using:
	•	Authentication (e.g., JWT or sessions), you might add req.user or req.member.
	•	File Uploads (e.g., Multer), you might add req.file and req.files.
	•	Custom middleware, you might add your own properties for tracking request metadata.


   */