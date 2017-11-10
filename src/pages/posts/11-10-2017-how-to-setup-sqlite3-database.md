---
path: "/how-to-setup-sqlite3-database"
date: "2017-11-10"
title: "How to set up a sqlite3 database"
---


One of the more common projects for people who are trying to learn how to code is a CRUD application. CRUD stands for Create Read Update Delete and creating an application with these actions are a good exercise to start getting used to a database. This will be a quick guide on how to get your tables up and running in Sqlite. 

The database interactions will be handles through ActiveRecord which let you query the database its methods. To setup ActiveRecord and a Sqlite database we first need to include some gems inside our `gemfile`. Here we have `gem 'activerecord', :require => 'active_record'`, `gem 'sqlite3'` and `gem 'rake'`. We then store our ActiveRecord database configuration inside our environment:
<script src="https://gist.github.com/scarsam/887788187ccea774fd9860dfb4efedba.js"></script>

Now it’s time to write our first migrations. You can generate a migration inside your console through Rake with rake `db:create_migration NAME=name_of_migration` This will create a file like this:
<script src="https://gist.github.com/scarsam/ee141b759b06499964d24a3dd5103277.js"></script>

Inside `def change` we specify what columns and datatypes we want in our table columns. An example would be:
<script src="https://gist.github.com/scarsam/70683b317dcd281583ffae2f69f8c1a3.js"></script>

This would create a table for `users` with the columns `name` and `age`. When we feel ready with our migration we need to actually migrate the table into our database. This will be done through Rake once again, `rake db:migrate`. This will move our created table into a `schema.rb` file which will store all of our migrated tables.
<script src="https://gist.github.com/scarsam/3c7e0a4e3b45199ffb24272838059f92.js"></script>

Now we need to create a model for this table. When creating a table we pluralize the table name while we create the model we singularize the name. This because each row in the table will be a single object (user) in this case inside our `users` table.
<script src="https://gist.github.com/scarsam/cff68c7957f954194766b835ea9f6d0e.js"></script>

To play around with the database outside Rails I highly recommend the `gem tux`. This will load up an console environment which have access to the database. Inside your console just run `tux` after you’ve installed the `gem`. Now in our console we can perform CRUD actions which got included in ActiveRecord.
<script src="https://gist.github.com/scarsam/fb9f78382193f9c86e4a525fce0ce5bb.js"></script>

We we type `.save` we save the instance to our table as a new row. We can now access this instance through querying our database through our ORM ActiveRecord.
<script src="https://gist.github.com/scarsam/a7fab029a65ccf9be5f993411f05019b.js"></script>

ActiveRecord gives us the power to query our database through methods instead of raw SQL queries, which is a lot easier on the eye. I hope this helps you get familiar with setting up a simple database interaction inside Ruby.

