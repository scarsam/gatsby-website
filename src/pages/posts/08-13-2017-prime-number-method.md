---
path: "/prime"
date: "2017-08-13"
title: "Improving my prime method"
---

After a few hours of testing a finally got some working code. First I had to find any rules that would define a prime number, so after some research I found that prime numbers are divisible by itself and 1. After a lot of testing I realized that can write my program to check for all the numbers between 1 and itself instead. So instead of testing for a primer number we tested if it was not a prime number and by that I also was able to tell if the number was a prime number.

1. Start by returning false if the number is less than 2 (remember we want to check the numbers in between 1 and the `num`.
2. Iterate with the range selector to check all numbers between 2 and up to num (Important note is that we don’t check the `num` itself just up to `num`, this can be achieved with the three dots … inside the range class.
3. Iterate over the numbers inside the range class and check if  `num`  is divisible by `n`. `.zero?` is the same as writing `(num % n) == 0`
4. We use the `.none?` method which returns true if the block never returns true for all elements. So if the number never is divisible by anything in between 1 and itself we know it’s a prime number and therefor `none?` will return true.

By using `return false if num < 2` I was able to get rid of the `if else` statement and made it easier to read it code. Also was able to get rid of `return false` if by using `.none?`, I realized that nesting logic makes it harder to understand the code.
##### Cleaner solution
<script src="https://gist.github.com/scarsam/384fbaf6834575782a1080c9510c5bea.js"></script>

##### First solution
<script src="https://gist.github.com/scarsam/ab8aeb7e6b2f1b03b780ed0ee030b58c.js"></script>