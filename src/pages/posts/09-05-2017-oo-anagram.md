---
path: "/oo-anagram"
date: "2017-09-05"
title: "Object Oriented - Anagram"
---

I wrote a program that, given a word and a list of possible anagrams, selects the correct one(s). My class, `Anagram` should take a word on initialization, and instances should respond to a `match` method that takes an array of possible anagrams. It should return all matches in an array. If no matches exist, it should return an empty array.

In other words, given: `"listen"` and `%w(enlists google inlets banana)` the program should return `["inlets"]`. I started of with initializing the new object with a `@word` that we wanted to check against the array. Using the `.select` method on the `Array` would return the matching results in a new `Array`. I iterated through each word with the `|word|` array splitting up each letter into an `Array` and sorted it. I then compared this `Array` to another `Array` that also was sorted and split up letter by letter.  Comparing these two sorted `Array`'s now would return the word if it was matching.

##### Solution
<script src="https://gist.github.com/scarsam/e26844c2f844ce11c38b47c928a03a56.js"></script>
