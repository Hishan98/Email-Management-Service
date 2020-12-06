## About.
Node.js is an open-source, cross-platform, back-end, JavaScript runtime environment that executes JavaScript code outside a web browser and this project is a Node.js based REST API back-end service which runs locally on port 2010 that delivers emails between 8 AM to 5 PM and stores them in a collection on Mongo DB.

## Used Packages.

  - **express** - Handle routes.
  - **nodemon** - Restart server.
  - **crypto** - Random number genarator.
  - **dotenv** - Secure passwords and etc.
  - **nodemailer** - Send mails.
  - **mongoose** - Store data in Mongo DB.
  
## End Points.

- Post Request: http://localhost:2010/v1/emails
- Get Request: http://localhost:2010/v1/emails/ **:email id**
- Delete Request: http://localhost:2010/v1/emails/ **:email id**

## How to run.

To run this project you need to install Node js on your computer. you can learn it from this video. After installing Node js you have to open cmd and go to this project folder using 
```cd "Project Path"```
then simply type
```javascript
npm start
```
and hit enter. Then you can use an API testing tool like Postman to test this API. 
You need to pass these parameters to send a mail
```javascript
{
    "to": "Recevers@gmail.com",
    "content": "You are awesome!",
    "subject": "awesome!"
}
```
copy id from the response of POST Request then use it to check GET and DELETE Requests.


## Test Results.

### Post Request

![Post Req](https://user-images.githubusercontent.com/38062467/101287314-8a424680-3815-11eb-8688-3464010626dd.PNG)

### Get Request
![Get Req](https://user-images.githubusercontent.com/38062467/101287324-9c23e980-3815-11eb-804c-c7d342e56ae0.PNG)

### Delete Request
![Delete Req](https://user-images.githubusercontent.com/38062467/101287326-9e864380-3815-11eb-8af5-715b2eae8459.PNG)

### Mongo DB
![Mongo DB](https://user-images.githubusercontent.com/38062467/101287328-a0500700-3815-11eb-9b9b-150fb4917ae8.PNG)

### Email
![email](https://user-images.githubusercontent.com/38062467/101287503-9bd81e00-3816-11eb-9133-c3d53eb18063.PNG)
