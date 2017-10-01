---
path: "/my-first-gem"
date: "2017-09-30"
title: "Crypto Market, my first gem!"
---

So it’s been a while since I last posted..but today I have something special to share. My journey to create my first ever gem! And if you want you can even publish it on RubyGems.org which I decided to do. In this blog post I will go through how you can publish your own ruby gem and how my experience was. So creating a gem is actually a lot easier than you think thanks to Bundler. Bundler is most common for gem dependency management but as many don’t know it can also help out creating a boilerplate for you very own gem. By typing `bundle gem name_of_your_gem` Bundler creates all the files we need to later be able to publish our gem on RubyGems.org, to get a full guide I highly recommend reading through the Bundler [documentation](https://bundler.io/v1.13/guides/creating_gem) on how to create your own gem with Bundler.


So I decided to follow the latest crypto trends and make a gem that would print useful information about the biggest coins. After some research I found a good API that provided the information I was looking for. To to able to fetch and parse the data I had to use `net/http` and `json` which are included in the Ruby standard library so there is no need to install any additional gems. This would return a JSON object including the data I was going to use for my CLI program.
<script src="https://gist.github.com/scarsam/00a633ea1285e2157e98da26e952cf51.js"></script>

In order to make sure I only included coins with the full data set I decide to create a method to only include coins without any `nil?` or `?` values. This was done through my `validate_coin_data` class method.
<script src="https://gist.github.com/scarsam/2638cea2dc62f83159516618140be9ed.js"></script>

Inside my `CryptoMarket::Currencies` class is were most of the magic happens. I start by instantiating the new Currencies object with two instance methods, `@coin_data` which includes the validated data from my `CryptoMarket::Api` class and a `@coins` Array which will store all of the coins.
<script src="https://gist.github.com/scarsam/155184209c587636822bfd1ec7faef50.js"></script>

So besides a lot of methods to sort and display the data I want to go over how I instantiate `Coin` objects from my `CryptoMarket::Currencies` class. I start by looping through the `@coin_data` hash inside my `coin_attributes` method and select the attributes I want to use in my program. In this case I selected `symbol`, `price` and `change`, these will later be used to instantiate a new `Coin`.
<script src="https://gist.github.com/scarsam/36729502245a5aa12eec9ac14b60839f.js"></script>

Inside my `create_coins_from_attributes` method I loop through the Array that `coin_attributes` returned and call the `create_coin(coin)` method for each `Coin` inside the Array, for each loop `coin` will include a hash of all the selected attributes.
<script src="https://gist.github.com/scarsam/04e6f70739376e31aa5be3ed65071324.js"></script>

I then assign each all of the hash values to a variable which will get used to instantiate a new `Coin` object. In my method I use `.tap` to tap into the object when it’s instantiated and push it to the `coins` Array and then return the created object.
<script src="https://gist.github.com/scarsam/b25b04f8bc7658f3dbdea2ac6d255a31.js"></script>

Each coin will get instantiated with a `name`, `price` and `change`. The `change` value will also check if it’s larger than `0` and then add a `+` sign before it.
<script src="https://gist.github.com/scarsam/98466261d2ea17f24d83a79058608253.js"></script>

When I have all my `Coins` stored inside `CryptoMarket::Currencies` Array I can start creating methods to print and sort the data. One simple sorting method is `sort_by_price` which will look at the `coins` Array that includes a lot of instances of `Coins` and sort them with `sort_by` method and compare the `coin.price['usd']` value.
<script src="https://gist.github.com/scarsam/6f452fc9a6ce358612c5e8999ca11265.js"></script>

The `CryptoMarket::CLI` is where I put all of these methods together. This is where I create the user interface and decide which pats the user will be able to take. I create a navigation and useful text that will guide the user. One of these methods is a method called `nested_menu` which will show up for users when they’re inside another action. I decided to use another gem called `terminal-table` to get some nice structured tables printed out in my terminal.
<script src="https://gist.github.com/scarsam/bf1e48d3a3f9b62150f2cf4965edb976.js"></script>

Here the user will see a nice formatted table asking for two actions, 1 or 2. If the user enters number 1 they will be shown the `coin_search` method and the `nested_menu` method. If the user inputs number 2 the user will see the output from `navigation` method. If the user enters any other number they will see a nice help message and see the menu options once again.


This project has been a great learning process, and it really shows how important it is to think things through before you start. My project have changed a lot since I first started building and most of that could have been solved by specing out the requirements for myself in more detail before starting. Everything from the user interactions to finding the correct API, and I think this can be seen pretty well on my commits for this project [Github](https://github.com/scarsam/crypto_market/commits/master). But as I said, this has been great way to put the skills I've obtained so far and I'm already look forward to create another gem in the future. Don't forget to install and check out my [gem](https://rubygems.org/gems/crypto-market/versions/0.1.2). You can install it in your terminal through `gem install crypto-market` and to execute the program type `crypto-market`.