# Forum Store
A full stack web oriented furniture store that determines the client's style and customizes the store for that style. This store provides a chat for communicating with other buyers with a similar style.  

![](./public/images/forum-store.jpg)  


## Instructions
1. Visit the [Forum Store](https://forumstore.herokuapp.com/) website. 
2. Select the room that best suits your style.
3. Note the new webpage of furniture products for the selected style.
4. At the bottom of the page, sign up to join the chat. Or there is a guest signin Username: guest, Password: guest.
5. Enter a question or comment and select send. This comment will be broadcast to the other shoppers.
6. Select the Logout button to logout.
7. Select a product to see more information.
8. Select the Add To Cart button.
9. Select the shopping cart in the upper right side of the page to see the cart.

## Technology
* The server uses Handlebars templates to present the data to the client. It makes use of Handlebar's partial views  and Handlebar Helpers.
* The app follows the Model View Controller design pattern.
* The server uses  Sequelize JS for Object Relational Mapping.
* This app uses a MySQL database to persist the user data and the store's products.
* The app is deployed on Heroku.
* The HTML uses Materialize CSS libraries.
* The client uses JQuery libraries to assist with chat functionality.
* The server uses the Express Node package to handle server-side listening and handling requests from the client.
* The app uses the Socket .io Node package to provide the chat functionality.
* The app saves the chat to a file using the Fs Node package.
* The app uses Passport and Bcrypt-nodejs Node packages for local authentication.




