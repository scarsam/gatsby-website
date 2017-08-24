---
path: "/oo-counting-sentences"
date: "2017-08-23"
title: "Object Oriented - Counting Sentences"
---

In this lab, we had to add a few instance methods to Ruby's String class. This is something you generally want to avoid for built-in classes, and this is especially true if you work with other people. But in this case, we're not overwriting any methods. The practice of adding methods to or altering Ruby's built in classes is called monkey patching.

1. The first three instance method we had to write was to determine what the final character in a string was. We had to use `self` in this case to make sure it referred to the string we were calling this instance method on.
    
    ##### Solution
    <script src="https://gist.github.com/scarsam/adedcfd3c232bb0dd8dfc36188cdb3e8.js"></script>

2. The last one should be able to call a count_sentences method on a string, and get back a, well, count of sentences in that string. In other words:
  <script src="https://gist.github.com/scarsam/4535ab60b70cf4c45d0f4af7adfbcd2d.js"></script> 
    
   So the solution I worked on did include some Regex to check for the characters that can help us tell when there is a sentence so exclamation point, question marks and punctuation. We split the string on these characters will which return an `Array` with all the sentences.
    
   Splitting this sentence "This, well, is a sentence. This is too!! And so is this, I think? Woo...” We would end up with an array that contains empty strings. So the remove empty strings inside the `Array` I used `.reject(&:empty?)`. Reject will return the existing `Array` minus the given block that is not true. In this case it wouldn’t include the empty strings inside my `Array`.
    
   ##### Solution
    <script src="https://gist.github.com/scarsam/11cb8b122a4ee51bf6d0aaed4153a545.js"></script>   

