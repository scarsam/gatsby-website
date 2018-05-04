---
path: "/jquery-project"
date: "2018-05-04"
title: "jQuery, a review site"
---

For my jQuery project I decide to put together a review site. The main requirement for this project was to show that we could handle Ajax requests 
and display new data without reloading the browser. This could be done through Ajax and even more easily through some jQuery methods hides some of the abstraction into it’s methods. 

The project had to have an API powered by Rails which would send back the data that was requested by the Ajax calls. 
The respond would then later be appended to the DOM through jQuery without reloading the page. My idea was pretty simple but I wanted to focus on the core of the application and that was to write the Ajax calls and handle the response from the API. 
An user could read login, then post and review from that logged in user and of course also read other reviews. 

The Ajax request would get an response from the backend which would use an serializer to send back the response as an formated JSON. 
I could then take that JSON response and create an object in the front-end inside some HTML which I then append to the DOM. 

I felt like the project itself wasn’t the most challenging and it felt like there is some quirks of using jQuery to handle the response, 
there is a lot of clearing divs in order to append some new content but also to make sure click events don’t collide or bubble up on each other. 
My hope is that there is a better and more efficient way of appending content from an API but I’m not sure yet..
