---
path: "/hash-iteration"
date: "2017-08-14"
title: "Improving my hash iteration method"
---

So another lab that took me a while to figure out. I never felt really happy about my solution because I had to hard code the compare value in this case one of the values from the hash to compare the other values to against it. After looking at some other examples I realized that there is a much better solution to solve this lab. Keep in mind that should be solved without using any of the `#keys`, `#values`, `#min`, `#sort`, or `#min_by` methods.

1. Start by setting the variables `min_key` and `min_val` to `nil`.
2. Iterate through the hash and check if the variable `min_val` is either `nil` or if the `value` argument is less than the variable `min_val`. In the first iteration we will return `true` to the `if statement` because `min_val` is equal to `nil`.
3. This will assign new values to `min_key` and `min_val` and continue the loop and compare the value and override the `min_key` and `min_val` if the `min_val` is less than value.
4. When the loop is done we return the `min_key` at the bottom of the method which has the lowest value associated with it.

By using `nil` as the compare value I can get rid of the hard coded variable I created in my first solution. I also don't need to check the number against itself which I do during the first loop in my first solution.

##### Cleaner solution
<script src="https://gist.github.com/scarsam/723d80bb114ec0c3fd06f18faf3c15b7.js"></script>

##### First solution
<script src="https://gist.github.com/scarsam/de11212179077e3df7d87d7e401c3f19.js"></script>