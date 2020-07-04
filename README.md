# A Public Health Forum - Health Base

## Overview
The purpose of the website is to provide a platform for the public to share and exchange thoughts, curing experience and the latest public health-related information online. Through sharing, patients can get advice from others and non-patient users can check prevention information.

## Getting Started
### Clone our project

`git clone https://github.com/csc309-summer-2020/team08.git`

### Dependencies
`npm install`

### Run App
`npm start`

## How to use
### Welcome Page
+ This page is the first page a user/guest will see once they open the web application. In this page, guest/user/admin could choose to **register** an account, **login** as a user or **continue to visit** as a guest and start browsing. **Note**: Standard User: username user, password: user; Admin user: username: admin, password: admin

### Register Page
+ This page requires a guest visitor to set a username and a password. Once he complete, he will be registered as a user in this web application and redirect to the Main Page.

### Login Page
+ The page requires a user's/admin's username and password to log in. Once logging in, he will be redirected to the Main Page. Guests can choose to register an account here as well.

### Top Bar(App Bar): 
+ TopBar will locates in the top of every sub pages.

+ On the left side of the bar, there is a menu open button. The menu contains three buttons: **MAIN PAGE**, **DASHBOARD** and **TOPICS**. Every user/admin/guest can redirect to the Main Page by using MAIN PAGE button or to Post Overview Page by TOPICS button. The dashboard button will only redirect users and admin to the Dashboard. If a guest clicks the button, he will be redirected to the Login Page. 

+ Besides the menu button, we have a Health Base Link and a search box. The Health Base works the same as the Main Page button. For the search box, we plan to implement it in Phase 2 since it needs to call the server.

+ Users' username and the icon will be displayed on the right side of the Top Bar. Users can click their username to go to their Dashboard Page. For guests, the Top Bar will display "Guest" with a default user icon and the redirect function will redirect them to the Login Page.

### User/Guest Main Page (Homepage)
+ Once a guest registers successfully or a user logs in successfully or a guest chooses to keep visiting as a guest, the page will be redirected to --- Main Page.

#### The Main Page contains 4 parts:

+ **Main Featured Content**: the content can be news or other related public health information chosen by the admin. Right now we put a piece of news in this part. People can keep reading the detailed content of the news by clicking **Continue reading...** at bottom of this part.

+ **Topics**: The topics are displayed under the Main Featured Content. People can go to the PostOverview Page by clicking the **TOPIC** button. We also put some hot topics displayed under it. Now we put COVID-19 and FEVER here. People can view the detailed posts on these topics by clicking them.

+ **Other News**: This part locates at the left side under the **Topics**. The contents are also chosen by the admin. It can be used for other purposes, but we would like it to display news. People can view detailed news by clicking them.

+ **Active Users**: Some active users will be displayed here. If they are verified bt admin, the verified information will also be displayed.

### Dashboard
+ This page will display some personal information about the account. They can edit their personal information by using the **EDIT** button under the information and **SAVE** button to save changes. If user want to change their avatar image, they can use the **UPLOAD AVATAR** button and upload an image. Notice that since we will have some requirements on the avatar image, all the avatar images related functions are hardcoded for now and will be completed in Phase 2.
+ Under the buttons, there's a verification box. This box is for present some proofed information by admin. For users who want to be verified as a doctor or some other identity, they could upload certain documents to admin for verification. The whole functionality will be complete in Phase 2.

+ The user login history locates at the bottom of the page. For the **See more history** part, it will be complete in Phase 2.

### Post Overview Page
+ People can view this page by using the **Topic** button on the Main Page. The page will display all current topics in the web application. User and admin can create a new topic by using **Create** button as well(Must with a picture when creating, the picture can be uploaded by **Upload** button). However, two topics with the same name are not allowed.

+ People can choose their interested topic and view the detailed content by clicking the topic.

+ The topic itself contains two buttons, a **Like** button and a **Delete** button. Like button record and count function will be completed in Phase 2 since it requires the database. All Admin/User/Guest can use this button.

+ Admins have permission to delete all the topics. Users can only delete their own topics. Guests cannot delete any of the topics.  

### Post Page
+ This is the detail page for topics in the Post Overview Page. The topic's title will be displayed on the top of the page. The posts will display under. Every post has **Like** and **Delete** button. They work the same as the buttons on the topic.

+ People can view the comments of each post by clicking the post.

+ User and admin can create a new post by using the rich text-editor at bottom of the page.

### Comment Page
+ This page has a similar structure and functions as a post page. The difference is that the owner of the current post can delete all the comments. Normal users can only delete the comments made by themselves.

## Copyright
The project is implemented by CSC309 2020 Summer Team08
