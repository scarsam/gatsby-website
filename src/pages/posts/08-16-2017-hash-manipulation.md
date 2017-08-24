---
path: "/hash-manipulation"
date: "2017-08-16"
title: "Hash Manipulation"
---

This lab was suppose to be challenging but for some reason I felt it went a lot smoother than the previous prime and hash iteration labs. The goal was to do a number of different manipulations on the holiday_hash below:
<script src="https://gist.github.com/scarsam/594303fb554f5e68210a27f9c2dbcdb5.js"></script>

1. The first assignment asked you to return the second element in the 4th of July array. Which will return "BBQ", so to pass the test we had to add another string to the beginning of the `Array` to make "BBQ" the second item in the `Array`. This was done by using `.unshift` on the array to add an item in this case a string in the beginning of the Array.
    ##### Solution
    <script src="https://gist.github.com/scarsam/fef0dd5af42827d89ea6c93165fe5bfe.js"></script>

2. The second assignment asked you to pass in an argument to both Christmas and New Year's `Array`
    ##### Solution
    <script src="https://gist.github.com/scarsam/00a8c026e023de7d9d76e051233b612a.js"></script>

3. The third assignment asked you to create a new holiday by passing in arguments from the method. I started of by creating a new `hash` and then assigning the `Array` from the argument to the empty `hash`.
    ##### Solution
    <script src="https://gist.github.com/scarsam/50e9d0cfd347ed9b364c7ed1d9c97ea5.js"></script>

4. The fourth assignment was probably the most challenging one and it asked you to iterate through the `holiday_hash` and print out the readout accordingly to the layout below. I had to iterate through the nested hash with `.each`.
    - **1st loop** Iterating with variables inside the loop gave me access to the `key` and `value` of the first layer hash. Manipulating `seasons` in this case will print out the symbol `:winter`. So I had to convert the symbol to a string which can be done with `.to_s` and I also had to capitalize text which can be done with `.capitalize`, these two can be combined to `seasons.to_s.capitalize`. I then used string interpolation `#{seasons.to_s.capitalize}` to print it out.
    
    - **2nd loop** In this loop I went one layer down and iterated on the holidays variable with `holiday` and `item`. These would return the symbol `:christmas` and the array `["Lights", "Wreath"]`. For `holiday` I wanted to as in the previous loop convert the symbol to a string with `.to_s` then split the string to remove the underscore with `.split('_')` which creates an array like this `["christmas"]`. After that I wanted to manipulate the array which I can do with `.map` and use `(&:capitalize)` which is the same way of writing `{ |x| x.capitalize }`. This would return an capitalized array like this `["Christmas"]` then I'm ending it by converting the array to a string with `.join(' ')`. For the `item` variable I could simply join the array with `item.join(', ')`. All the new values got assigned to a variables which I was printing the value through string interpolation.
    ##### Solution
    <script src="https://gist.github.com/scarsam/6e5b00502893fcd1c5dd8e6fcc6106bb.js"></script>

5. The fifth and last assignment asked you to return an `Array` of symbols where the item list included the string "BBQ". I started of with creating an empty `Array` outside my loop which I wanted to store my symbols in. After that I nested two `.each` loops to get down to the `item` specific level. At this level I was looking at the `item` `Array` which would include the string"BBQ". I checked with an `if statement` if the `Array` did `.include?("BBQ")` and if it did it would push `<<` in the symbol `holiday` into the `Array`. I ended the loop by return the `bbq_array`.
    ##### Solution
    <script src="https://gist.github.com/scarsam/67c6f99f5f4edace2934ff042c12136b.js"></script>