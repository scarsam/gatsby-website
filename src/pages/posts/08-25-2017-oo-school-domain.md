---
path: "/oo-school-domain"
date: "2017-08-25"
title: "Object Oriented - School Domain"
---

So for this lab we had to write a domain model, which is a representation of a real-world concept but in software. This domain model was fairly simple and it is representing a school.

1. First I defined an initialize method, which will be called every time we initialize a new object. We tell the new object to be initialized with a `name` that gets saved in an instance variable and a instance variable holding an empty hash.

2. We then defined an instance method called `add_student(name, grade)` which can only be called on the new object.
    - This instance method will be called with two variables `name` and `grade`. First we create the `key` inside the hash pointing to `grade` which holds the `value` of an empty `Array`. We then push in the `name` variable into the `Array` inside the `@roster` `hash`.

3. I then defined the instance method `grade(grade)` which will return the `Array` if there is an key in `@roster` matching the variable `grade`.

4. Lastly I defined an instance method called `sort` which returns `@roster` and alphabetize all the names inside the `Array`. This was achieved by iterating through the `hash` values and using `(&:sort!)` which is a shorthand for `{ |x,y| y <=> x }`.

##### Solution
<script src="https://gist.github.com/scarsam/99cb984b7fe93e24b624ed7f8f11a86f.js"></script>  

