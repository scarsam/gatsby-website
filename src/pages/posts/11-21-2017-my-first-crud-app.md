---
path: "/my-first-crud-app"
date: "2017-11-21"
title: "My first CRUD app"
---


So I’ve finally finished my first self made CRUD application. CRUD stands for create, read, update and delete if you didn’t know it’s an application with a database relation that let the user create content, read content, update/edit the content and delete their content. My application was built in a framework called Sinatra which is a RACK based framework that will come with some pre-written methods to help you out building your web application, by using Sinatra you get access to methods like `get` and `post`. 

My application was following the `MVC` pattern (model, view and controller). In the `MVC` pattern we have the model which stores data and represents a row in the database, it will contain class and instance methods that can be used on this class. The view represents the user interface and displaying the data. And the controller can update and manipulate the state of the model and also decide what should be display in the represented view.

The project is deployed on Heroku to make it accessible for the rest of the world. Starting of a project like this I usually like to take some notes and map out the different database tables and their relationships. My project would require a Users table and a Reviews table, the associations between these would be a `User has_many :reviews` and `Review belongs_to :user`.  Trying to map a real world examples often makes it easier to create these relationships, this is not a very complicated associations but they can be and trying to keep them close to the real world will make it easier.
<script src="https://gist.github.com/scarsam/0e4b32888fb5026561f75d6f38a83a80.js"></script>

After I’m done with setting up the tables I create the models for each table and their active record associations. This should be enough for me to test out and making sure the tables and relationships are setup correctly, which can be tested through a gem called `tux` which will load your environment so you can play around and create objects and their associations. What I did was to create a database seed file which you can execute through rake `db:seed`, which executed my `seeds.rb` file with the following created objects and associations.
<script src="https://gist.github.com/scarsam/cb0c511f7a59d83526b6c64b854a1b32.js"></script>

Now it’s time to start creating the routes. Following REST design pattern is basically a convention to make urls more predictable and helpful for the user and other developers working on your code. The resource is usually an object containing data that you can run CRUD actions on. Then there is the HTTP methods that define which action that should be performed on these resources. An example would be `GET /reviews`, in this case we have the HTTP method `GET` and the resource `/reviews`, by following the REST design we know that this page will render a list of all of the reviews without seeing the rest of the code.
<script src="https://gist.github.com/scarsam/1b23add9be7a8b7f039fd45bfadaeae6.js"></script>

The routes will now point to a view that will render this data in nicely semantic way through HTML. With `.erb` (Embedded Ruby) we can display our objects inside our HTML and manipulate/style these elements to make the user interface more friendly. We can also create forms to create/update and delete new resources in the database through the HTTP methods POST/PATCH and DELETE, if we would like to create an new review object we would create a form with the POST method which would instantiate a new object inside the controller.
<script src="https://gist.github.com/scarsam/7d28c07ac012c3a325744fb402d4ce1a.js"></script>

I will follow up this blog post with how I got my projected hosted on Heroku and also the very long process of getting my assets to load once I got it deployed on Heroku, stay tuned for part 2.

