---
path: "/prime"
date: "2017-08-13"
title: "Improving my prime method"
---

After a few hours of testing a finally got some code that passed the test. So we know that prime numbers are divisible by itself and 1, after a lot of testing I realized that can write my program to check for all the numbers between instead. If its divisible by something else outside 1 and itself we know that it’s not a prime and therefor we should return false. 

1. Start by returning false if the number is less than 2 (remember we want to check the numbers in between 1 and the `num`
2. Iterate with the range selector to check all numbers between 2 and up to `num` (Important note is that we don’t check the `num` itself just up to `num`, this can be achieved with the `…` inside the range class.
3. Iterate over the numbers inside the range class and check if  `num`  is divisible by `n`, if it returns zero we know it’s an prime number.
4. We use the `.none?` method which returns true if the block never returns true for all elements. So if the number never is divisible by anything in between 1 and itself we know it’s a prime number and therefor `none?` will return true.

By using `return false if` `num < 2` I was able to get rid of the `if else` statement and made it easier to read it code. Also was able to get rid of `return false if` by using `.none?`, I realized that nesting logic makes it harder to understand the code.
##### Cleaner solution
```
def prime?(num)
  return false if num < 2
  (2...num).none? { |n| (num % n).zero? }
end
```

##### First solution
```
def prime?(num)
  if num > 1
    (2...num).each { |n| return false if (num % n).zero? }
    true
  else
    false
  end
end
```