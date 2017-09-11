---
path: "/oo-kickstarter"
date: "2017-09-10"
title: "Object Oriented - Kickstarter"
---

In this lab, I had to create a very, very simple version of Kickstarter. It was going to have the two classes Projects and Backers (and no concept of money at all), and they needed to interact with one another in a realistic way. 

##### We want our interface to work something like this:
<script src="https://gist.github.com/scarsam/c5242f7577004ce8fce5f3c1268be65b.js"></script>

So I started off with my Backer class. It was going to initialize with a @name and an empty instance Array. Calling back_project(title) on the instance of a Backer class would push in the instance into the instance of the Project's  Array that got initialized when creating an instance of Project. It would also take the Project object and push it into Backer instance's Array. The Project class would do something very similar but the opposite. Push the Project  instance into the Backer ‘s instance’s Array  and also push the Backer instance into the Project @backers Array.

##### Solution
<script src="https://gist.github.com/scarsam/b43343dbd7a54a102c7eb33ee6488f35.js"></script>