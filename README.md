# A Public Health Forum

## Overview
The purpose of the website is to provide a platform for the public to share and exchange thoughts, curing experience and latest public health related infomation online. Through sharing, patients can get reliable advice and healthy people can start putting prevention first.

## Getting Started
### Clone our project

`git clone https://github.com/csc309-summer-2020/team08.git`

### Dependencies
`npm install`

### Run App
`npm start`

## How to use
### Welcome Page
+ This page is the first page a user/guest will see once they open the web application. In this page, guest/user/admin could choose to **register** an account, **login** as a user or **continue to visit as a guest**.

### Register Page
+ This page requires a guest visitor to set a username and a password. Once he complete, he will be registered as a user in this web application and redirect to the Main Page.

### Login Page
+ The page requires a user's/admin's username and password to log in. Once logging in, he will be redirect to the Main Page. Guests can choose to register an account here as well.

### Top Bar(App Bar): 
+ Top Bar will locates in the top of every sub pages.

+ On the left side of the bar, there is a menu open button. The menu contains two buttons: **MAIN PAGE** and **DASHBOARD**. Every user/admin/guest can redirect to the Main Page by using Main Page button. Dashboard button will only redirect user and admin to the Dashboard. If a guest clicks the button, he will be redirected to the Login Page. 

+ Besides menu open button, we have a Health Base button and a search box. The Health Base works the same as the Main Page button. For the search box, we plan to implement it in Phase 2.

+ Users' username and icon will be displayed on the right side of the Top Bar. Users can click their username to go to their Dashboard Page. For guests, the Top Bar will only display "Guest" without icon and the redirect function will redirect them to the Log in Page.

### User/Guest Main Page (Homepage)
+ Once a guest registers successfully or a user logs in successfully or a guest chooses to keep visiting as a guest, the page will be redirect to here --- Main Page.

#### The Main Page contains 4 parts:

+ **Main Featured Content**: the content can be news or other related public health information chosen by admin. Right now we put a news in this part. People can keep reading the detail content of the news by clicking **Continue reading...** at bottom of this part.

+ **Topics**: The topics are displayed under the Main Featured Content. People can go to the PostOverview Page by click **TOPIC** button. We also put some hot topics displayed under. Now we put COVID-19 and FEVER here. People can view the detail posts inthese topic by clicking them.

+ **Other News**: This part locates in the left bottom of the page. The contents are also chosen by admin. It can be used for other purposes, but we would like it to display news. People can view the detail news by clicking them.

+ **Active Users**: Some active users will be displayed here. If they are verified bt admin, the verified information will also be displayed.

### Dashboard
+ This page will display some personal infomation of user or admin. They can edit their personal information by using **EDIT** button under the inforamtion and **SAVE** button to save changes.
+ Under the buttons, there's a verification box. This box is for users who want to be verified as a doctor identity to upload certain documents to admin. The whole functionality will be complete in Phase 2.

+ The user login history locates in the bottom of the page.

### Post Overview Page
+ People can view this page by using **Topic** button in the Main Page. The page will display all current topics in the web application. User and admin can create new topic by using **Create** button as well(Must with a picture when creating, picture can be uploaded by **Upload** button). However, two topics with same name are not allowed.

+ People can choose their interested topic and view the detail content by clicking the topic.

+ The topic itself contains two buttons, a **Like** button and a **Delete** button. Like button's record function will be fixed in Phase 2, it may require database. All Admin/User/Guest can use this button.

+ Admins have permission to delete all the topics. Users can only delete their own topics. Guest cannot delete any of the topics.  

### Post Page
+ This is the detail page for topics in the Post Overview Page. The topic's title will be displayed on the top of the page. The posts will display under. Every posts have **Like** and **Delete** button. They work the same as the buttons in the topic.

+ People can view the comments of each post by clicking the post.

+ User and admin can create new post by using the rich text-editor at bottom of the page.

### Comment Page
+ This page has similar structure and functions as post page. The difference is that the owner of current post can delete all the comments. Normal users can only delete their own comments.

## Copyright
The project is implemented by CSC309 2020 Summer Team08
