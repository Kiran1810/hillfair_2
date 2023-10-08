/** 
 * @swagger
 * components:
 *   schemas:
 *      userSchema:
 *         type:  object
 *         properties:
 *          email:
 *            type:string
 *            description:email id of the user
 *          password:
 *            type:string
 *            description:strong password
 *          bio:
 *            type:string
 *            description:about the user
 *          post:
 *            type:
 *            description:
 *          name:
 *             type:string
 *             description:username for the userfeed
 */
 
       
/**
 * @swagger
 * /users:
 *  post:
 *      tags: ['Users2']
 *      summary: creates a new user
 *      requestBody:
 *          required: true
 *          content: 
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                        email:
 *                          type:string
 *                          description:email id of the user
 *                        password:
 *                          type:string
 *                          description:strong password
 *                        bio:
 *                          type:string
 *                          description:about the user
 *                        post:
 *                          type:string
 *                          description:the post by the users
 *                        name:
 *                          type:string
 *                          description:username for the userfeed                  
 *      responses:
 *          '201':    
 *              description: all users with usernames
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          items:
 *                              $ref: '#/components/schemas/User' 
 *          '400':
 *              description: could not add data!     
*/


/**
 * @swagger
 * /users/exist/{email}:
 *  get:
 *      tags: ['Users2']
 *      summary: checks if user with given user exists or not
 *      parameters:
 *          - in: path
 *            name: email
 *            schema:
 *              type: string
 *              required: true
 *      responses:
 *          '201':    
 *              description: successfully executed.
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          items:
 *                              $ref: '#/components/schemas/User' 
 *          '500':
 *              description: something went wrong
*/


/**
 * @swagger
 * /users/{emailId}:
 *  get:
 *      tags: ['Users2']
 *      summary: Returns the user with given firebaseId
 *      parameters:
 *          - in: path
 *            name: emailId
 *            schema:
 *              type: string
 *              required: true
 *      responses:
 *          '200':    
 *              description: A single user
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          items:
 *                              $ref: '#/components/schemas/User' 
 *          '404':
 *              description: user does not exist
*/


 