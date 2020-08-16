# A Public Health Forum - Health Base

## Overview
The purpose of the website is to provide a platform for the public to share and exchange thoughts, curing experience and the latest public health-related information online. Through sharing, patients can get advice from others and non-patient users can check prevention information.

## Deployed Example Page
[Heroku APP](https://fast-hamlet-67471.herokuapp.com/)

## Getting Started
### Clone our project

`git clone https://github.com/csc309-summer-2020/team08.git`

### Setup
1. Create and run local MongoDB in the root directory of the repo, and this requires the installation of MongoDB. Run the following commands in an separate terminal window: 
    ```
    mkdir mongo-data
    mongod --dbpath mongo-data
    ```
    
2. Install all dependencies. In the root directory of the repo, run:
    ```
    npm run setup
    ```

3. Build the React app and start an Express server on `localhost:3000`. In the root directory of the repo, run:

    ```
    npm run build-run
    ```
    
4. Alternatively, run `npm run start` in the root directory which only start the Express server without building the client.

5. Optionally, run the following command according to developing environment will provide more debug information:

   ```
   # Windows CMD
   set DEBUG=* && npm run serve
   
   # Windows Powershell
   $env:DEBUG='*';npm run serve
   
   # MacOS or Linux
   export DEBUG=* && npm run serve
   ```

   See the documentation of [*debug*](https://www.npmjs.com/package/debug) library for more details.

## How to use
### Welcome Page
+ This page is the first page a user/guest will see once they open the web application. In this page, guest/user/admin could choose to **register** an account, **login** as a user or **continue to visit as a guest** and start browsing. There are two initial accounts for demonstrating purposes. 
  + Standard user: 
    + username: user
    + password: user
  + Administrator: 
    + username: admin
    + password: admin

### Register Page
+ This page lets a guest visitor setup a new account by providing the username and password. Once complete, guest will be registered as a user in this web application and redirect to the Main Page.

### Login Page
+ The page lets a user's/admin's log in. Once logging in, he will be redirected to the Main Page. Guests can choose to register an account here as well.

### Top Bar (App Bar): 
+ Top bar locates at the top of every sub pages.

+ On the left side of the bar, there is a menu open button. The menu contains three buttons: **MAIN PAGE**, **DASHBOARD** and **TOPICS**. Every user/admin/guest can redirect to the Main Page by using MAIN PAGE button or to Post Overview Page by TOPICS button. The dashboard button will only redirect users and admin to the Dashboard. If a guest clicks the button, he will be redirected to the Login Page. 

+ Beside the menu button, we have a Health Base Link and a search box. The Health Base works the same as the Main Page button. For the search box, we plan to implement it in Phase 2 since it needs to call the server.

+ Users' username and the icon are displayed on the right side of the Top Bar. Users can click their username to go to their Dashboard Page. For guests, the Top Bar will display "Guest" with a default user icon, and they will be redirect to the Login Page by clicking.

### User/Guest Main Page (Homepage)
+ Once a guest registers successfully, or a user logs in successfully, or a guest chooses to keep visiting as a guest, the page will be redirected to the main page.

#### The Main Page

+ **Main Featured Content**: the content can be news or other related public health information chosen by the admin. Right now we put a piece of news in this part. People can keep reading the detailed content of the news by clicking **Continue reading...** at bottom of this part.

+ **Topics**: The topics are displayed under the Main Featured Content. People can go to the posts overview page by clicking the **TOPICS** button. We also put some hot topics displayed under it. Now we put COVID-19 and FEVER here. People can view the detailed posts on these topics by clicking them.

+ **Other News**: This part locates on the left side under the **Topics**. The contents are also chosen by the admin. It can be used for other purposes, but we would like it to display news. People can view detailed news by clicking them.


### Dashboard
+ This page will display some personal information about the account. They can edit their personal information by using the **EDIT** button under the information and **SAVE** button to save changes. If user want to change their avatar image, they can use the **UPLOAD AVATAR** button and upload an image. 
+ Under the buttons, there's a verification box. This box is for present some proofed information by admins. For users who want to be verified as a doctor or some other identity, they could upload certain documents for verification. 

+ The user login history locates at the bottom of the page. 

### Post Overview Page
+ People can view this page by using the **Topics** button on the Main Page. The page will display all current topics in the application. User and admin can create a new topic by using **Create** button as well(Must with a picture when creating, the picture can be uploaded by **Upload** button). However, two topics with the same name are not allowed.

+ People can choose their interested topic and view the detailed content by clicking the topic.

+ The topic itself contains two buttons, a **Like** button and a **Delete** button. All Admins/Users/Guests can use this button.

+ Admins have permission to delete all the topics. Users can only delete their own topics. Guests cannot delete any of the topics.  

### Post Page
+ This is the detail page for topics in the post overview page. The topic's title will be displayed on the top of the page. The posts will display below. Every post has **Like** and **Delete** button. They work the same as the buttons on the topic.

+ People can view the comments of each post by clicking the post.

+ User and admin can create a new post by using the rich text-editor at bottom of the page.

### Comment Page
+ This page has a similar structure and functions as a post page. The difference is that the owner of the current post can delete all the comments. Normal users can only delete the comments made by themselves.

## Routing On Server

Here is an overview of the routes:
+ POST on "/login": 
  + The route is used for handling login request.
  + Expected request body: `{username: string, password: string}`
  + Expected result: `status: 200 with {current: string, role: string}` or `status: 404`
+ GET on "/logout":
  + The route is used for handling logout request.
  + Expected request body: `{}`
  + Expected result: `status: 200`
+ GET on "/verify":
  + The route is used for checking session timeout.
  + Expected request body: `{}`
  + Expected result: `status: 200 with {current: string, role: string}` or `status: 401`
+ POST on "/register":
  + The route is used for handling user registration request.
  + Expected request body: `{username: string, password: string}`
  + Expected result: `status: 200 with {current: string, role: string}` or `status: 500`
+ GET on "/topics":
  + The route is used for obtaining all topics from database.
  + Expected request body: `{}`
  + Expected result: `status: 200` with `{topics}`
+ GET on "/posts/:topic":
  + The route is used for obtaining all posts under current topic.
  + Expected request parameter: 
    + topic: topic title
  + Expected request body: `{}`
  + Expected result: `status: 200` with `{posts}`
+ GET on "/comments/:topic/:postid":
  + The route is used for obtaining all comments under current post.
  + Expected request parameters: 
    + 1.topic: topic title 
    + 2.postid: post.id (not mongo object id)
  + Expected request body: `{}`
  + Expected result: `status: 200` with `{comments}`
+ POST on "/topics":
  + The route is used for creating a new topic in database.
  + Expected request body: `{username: string, title: string, img: base64 string data }`
  + Expected result: `status: 200` or `status: 409` if the new topic has already been created.
+ POST on "/posts":
  + The route is used for creating a new post under current topic in database.
  + Expected request body: `{username: string, content: string, topic: string (topic title)}`
  + Expected result: `status: 200`
+ POST on "/comments":
  + The route is used for creating a new comment under current post in database.
  + Expected request body: `{username: string, content: string, topic: string (topic title), postid: number (post.id not mongo object id) }`
  + Expected result: `status: 200`
+ POST on "/likes/:type":
  + The route is used for adding 1 likes count for each topic/post/comment object in database.
  + Expected request parameters: 
    + type: "topic"/"post"/"comment" 
  + type = "topic"
    + Expected request body: target topic object`{title: string, likes: number, img: base64 string data, creatorUsername: string, creatorId: userid (mongo object id), posts: [post objects]}`
    + Expected result: `status: 200` with target `topic` object
  + type = "post"
    + Expected request body: `{id: number (post.id not mongo object id), topic: string (topic title)}`
    + Expected result: `status: 200` with target `topic` object
  + type = "comment"
    + Expected request body: `{id: number (comment.id not mongo object id), topic: string (topic title), postid: number (post.id not mongo object id)}`
    + Expected result: `status: 200` with target `topic` object
+ DELETE on "/topics":
  + The route is used for deleting a topic in database.
  + + Expected request body: target topic object`{title: string, likes: number, img: base64 string data, creatorUsername: string, creatorId: userid (mongo object id), posts: [post objects]}`
  + Expected result: `status: 200` with target `topic` object
+ DELETE on "/posts":
  + The route is used for deleting a post under current topic in database.
  + Expected request body: `{id: number (post.id not mongo object id), topic: string (topic title)}`
  + Expected result: `status: 200` with target `topic` object
+ DELETE on "/comments":
  + The route is used for deleting a comment under current post in database.
  + Expected request body: `{id: number (comment.id not mongo object id), topic: string (topic title), postid: number (post.id not mongo object id)}`
  + Expected result: `status: 200` with target `topic` object
+ DELETE on "/likes/:type":
  + The route is used for removing 1 likes count for each topic/post/comment object in database.
  + Expected request parameters: 
    + type: "topic"/"post"/"comment" 
  + type = "topic"
    + Expected request body: target topic object `{(title: string, likes: number, img: base64 string data, creatorUsername: string, creatorId: userid (mongo object id), posts: [post objects]}`
    + Expected result: `status: 200`
  + type = "post"
    + Expected request body: `{id: number (post.id not mongo object id), topic: string (topic title)}`
    + Expected result: `status: 200`
  + type = "comment"
    + Expected request body: `{id: number (comment.id not mongo object id), topic: string (topic title), postid: number (post.id not mongo object id)}`
    + Expected result: `status: 200`
+ PATCH on "/user/:id":
  + The route is used for handling user infomation update.
  + Expected request body: `{email: String, gender: String, phone: String, address: String}`
  + Expected result: `status: 200 with {email: String, gender: String, phone: String, address: String}`
+ GET on "/dashboard/data/:id":
  + The route is used for obtaining user infomation from database.
  + Expected request body: `{}`
  + Expected result: `status: 200` with `{email: String, gender: String, phone: String, address: String}`
+ Others: Handled by React


## Sources
Material-UI demos: <br>
https://material-ui.com <br>
Material-UI example templates: <br>
https://github.com/mui-org/material-ui/tree/master/docs/src/pages/getting-started/templates

## Copyright
The project is implemented by CSC309 2020 Summer Team08
