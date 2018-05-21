---
path: "/hoisting-scope-in-javascript"
date: "2018-05-21"
title: "Hoisting and Scope in JavaScript"
---

Today I’m going to go over some of the features of Javascript that could be hard to grasp. Mainly because some of this things happens under the “hood” of javascript during the parsing and execution phase. I will also cover some the new block scope with let and const that got introduces in ES6.


### Hoisting

Hoisting is a fundamental concept to understand how JavaScript actually works. The JavaScript engine has two phases, one parsing phase and one execution phase. During the parsing phase the engine sets up memory space and hoists your variables and function declarations.

The engine acts like it’s moving all the declarations on top of it’s current scope. To illustrate this I have created a `hoisting()` below:

<script src="https://gist.github.com/scarsam/4b8aad8b77a4f06d49e5b92c3f0aaae1.js"></script>

During the parsing phase this will actually be interrupted like this:

<script src="https://gist.github.com/scarsam/ef78250363407ffda5bd30ce1149c08d.js"></script>

What we can see here is that the variable x is defined in the parsing phase. And during the execution phase the JavaScript engine assigns the value to the variable. This concept is important to understand why we’re getting an undefined value sometimes. Take a look at this example below:

<script src="https://gist.github.com/scarsam/2a8108277b7becdace4907daf1dec4b8.js"></script>

The reason why this is happening is because during the parsing phase it first declare the variable x at the top of it’s scope without assigning it a value, therefor it returns undefined. Undefined is not the same as not declared, the variable itself is declared but it doesn't have any value until the execution phase and that’s is why we still can `console.log(x)` without getting an error. This is how the engine is interpreting the code:

<script src="https://gist.github.com/scarsam/49cd7f3602ed817953858beee40a5e92.js"></script>

Here is another example:

<script src="https://gist.github.com/scarsam/66b86d7363d412d45948eb7883e47358.js"></script>

During the parsing phase this code is going to look like this:

<script src="https://gist.github.com/scarsam/555570a85b6403fd0a15154ad3cd17dd.js"></script>

Function declarations also get hoisted lets take a look at a few examples below:

<script src="https://gist.github.com/scarsam/cab142fa8d4b5725eac3ae22c72f9dfb.js"></script>

This works because function declarations and it’s function block gets hoisted exactly like variables. During the parsing phase this code is going to look like this:

<script src="https://gist.github.com/scarsam/4b7e6d637ed1ed6516fa86043bb925b7.js"></script>

JavaScript also have something called function expression that can be named or anonymous and passed to a variable. An example of an function expression would be the following:

<script src="https://gist.github.com/scarsam/6cf1ad8e0b6cc1d3b2bb33499a61dc27.js"></script>

The big difference between function declaration which you saw in the previous example and function expressions is that function declaration gets hoisted together with its function block while function expressions doesn’t get hoisted. This function expression will get evaluated like this in the parsing phase:

<script src="https://gist.github.com/scarsam/5fafc0063ebcf2ba655281e0eacca171.js"></script>

Same goes if we would have name our function expression, like this:

<script src="https://gist.github.com/scarsam/cb7b18fbd450fa05b2cdd31f16d297c6.js"></script>

A general rule of thumb to avoid any confusion that could be caused by variable and function declaration hoisting is to always declare and initialize our variable and functions before we use them.

### Order of precedence

Something to keep in mind when declaring JavaScript functions and variables is the order of precedence.

1. Variable assignment takes precedence over function declaration
2. Function declarations take precedence over variable declarations

Here is an example of variable assignment over function declaration:

<script src="https://gist.github.com/scarsam/e8394626b4548119462fc61460d3e596.js"></script>

While on we’re seeing something else when it comes to a variable declaration.

<script src="https://gist.github.com/scarsam/ed8b937bf4698f1bee8965c7a776f4c4.js"></script>

### ES6 let and const

The two new keywords let and const have introduces something called block scope for our variable declarations. As previously with the var keyword all variables get declared at the top of it’s block with the undefined value. If we take a look how let handles this we will see a different error message

<script src="https://gist.github.com/scarsam/b637cee591132819afffb041433120e9.js"></script>

This is to tell us that we should declare our variables before initializing them. When using the keyword const to declare a variable we get an even more strict error message to remind us to declare and assign a value before using our variable

<script src="https://gist.github.com/scarsam/284c54ee6e0f1a58d779427bbb6d5df4.js"></script>

### Scope

In JavaScript there is two types of scopes:

- Global Scope
- Local Scope

If you define a variable inside a function it’s an local scope while variables outside functions are on the global scope. Each time you invoke a function you create a new function scope.

An example on the global scope is the follow:

<script src="https://gist.github.com/scarsam/c549464c48e77363e5f14a3fb7518f84.js"></script>

Local scope is defined inside a function block. This is good for having the same variable names inside multiple functions, this can be done because each function is creating it’s own scope.

<script src="https://gist.github.com/scarsam/0b75498fccb8cc2cc2af24d7de34d772.js"></script>

Block statements (if, switch, for and while) doesn’t create their own scopes. So variables inside one of those statements will remain in the scope they were executed in.

<script src="https://gist.github.com/scarsam/8bcd2588d6e53c0740d3df775999f581.js"></script>

With `let` and `const` introduced in ES6 we have the power of creating a local scope inside an block statement like the following:

<script src="https://gist.github.com/scarsam/c28e96dc15986eaf8674eb0bd39b5687.js"></script>


