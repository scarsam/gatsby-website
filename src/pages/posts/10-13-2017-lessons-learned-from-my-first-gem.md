---
path: "/lessons-from-my-first-gem"
date: "2017-10-13"
title: "lessons learned from my first gem!"
---


So since my launching my first ruby gem I’ve already learned a few lessons. Here is an quick update what have happened since I first launched my gem. So my `crypto_market` gem have been launched for a bit over a week with around 1500 downloads, which have been amazing to see. I even got a issues opened on my repo to solve a bug. But the first real problem occurred after a few days when the API I was fetching data crashed, I didn’t do enough research into the API and I didn’t realize that this API was hosted as a side project by someone. 

I now had to refactor my gem with a new API luckily coinmarketcap had one which I probably should have used from the start. Changing the API wasn’t that bad and I only had to make a few tweaks in order for the gem to start working again. 

Now I was facing another problem. The data I was getting this time was a lot more, so many cryptocurrencies that the users terminal wasn’t able to show them all.. So now I had to find a way to load my coins in batches. After asking for help on stack overflow I got some suggested to try the `each_slice` method which would return an `Array` of sub `Arrays`, after that I would be able to iterate over the smaller Arrays and print out the name of the coins in smaller batches, stop after each sub Array and ask for user input. 
<script src="https://gist.github.com/scarsam/3db3306565ed5b27543ca99a74dd8107.js"></script>

The problem I now had was that I was including my user interactions logic with my printing coins method which I wanted to separate. After finding out a way to continue my `Array` iteration I figured out that I could call the method with a block through `yield`. 
<script src="https://gist.github.com/scarsam/028075d0f140fce8e10463ae1b18ac38.js"></script>

This would help me separate the UI part of the method to the `Class` that was handling all the user interactions. The outcome of all this is probably a way better user experience and hopefully a more stable data source.
<script src="https://gist.github.com/scarsam/141c0c4c7180037a36216ed34845fd4c.js"></script>