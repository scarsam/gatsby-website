---
path: "/oo-advanced-class-methods"
date: "2017-08-27"
title: "Object Oriented - Advanced Class Methods"
---

This lab took a while for me to figure out. I still feel that I haven’t grasped OOP yet but the more I get exposed to it the more confident I feel. After passing the first tests I was able to move on further down the lab without much trouble. Something to point out was that I was able to finished the lab but not in the best possible way, so I revisited it based on looking through other students solutions and found a smart way to code it. It was mainly the use of class variables vs using the explicit receiver (self). By doing this if in the future the `@@all` will change I won't need to go through all of the code to change it. So for this lab I had to build class methods that interact on the class data of `@@all` and provide the rest of our program with a semantic API on the Song class with methods such as `Song.find_or_create_by_name("Blank Space")`.

1. First one was to create a `Song.create` class constructor. Whenever you run this method it will instantiate a new instance with `self.new` and save that instance to the variable `new_song`. I then push that object into the `@@all` class `Array`. I end with returning the object.

2. The second class constructor I created was `Song.new_by_name(name)`. With this class constructor you can create a new song with a name, very similar to the first one but this one also adds a name to the song. I use `self.new` again and assign the new instance to a variable, I then assign the `argument` to the instance method `@name` through `new_song.name = name`.

3. The third class constructor `Song.create_by_name` had the same functionality as `Song.new_by_name(name)` but this one also pushed the object to the class variable `@@all`.

4. The fourth method was going to be a class finder called `Song.find_by_name`. It should accept the string name of a song and returns the matching instance of the song with that name. Here I was looping through the class variable `@@all` and using the enumerable `detect` to return the matching object that had a matching string.

5. The fifth method was going to prevent duplicate songs being created that actually represent the same song (based on the song name), I had to build a `Song.find_or_create_by_name` class method. Here I was able to utilize the previously built class constructors and finders. I basically ran `create_by_name(name)` unless I wasn’t able to return something from `find_by_name(name)`.

6. The sixth class method `Song.alphabetical` had to return all the songs in ascending (a-z) alphabetical order. This was accomplished by looping through the `@@all` `Array` and using the enumerable `sort_by!` to return an alphabetized `Array`.

7. The seventh class construct I created was going to accept a filename in the format of " - .mp3", for example "Taylor Swift - Blank Space.mp3". Given `Song.new_from_filename("Taylor Swift - Blank Space.mp3")`, the constructor should return a new Song instance with the song name set to Blank Space and the artist_name set to Taylor Swift. I started off by splitting the `filename` variable into an `Array` including the artist and song name, this was done with some regex `/\s[-]\s|.mp3/`. This returned an `Array` with `["Taylor Swift", "Blank Space"]`. I then created a new instance and assigned that object to the variable `new_song`. I was able to assign the `Array` values to the instance variables `@name` and `@artist_name`. And return the new object.

8. The eighth class construct was using the `Song.new_from_filename(filename)` to return a new song that I stored in a variable and later pushed to the class variable `@@all`.

9. The last class method had to clear the `Array` this can be done through `.clear` method on the `Array`.

##### Solution
<script src="https://gist.github.com/scarsam/caf04ff4fee0a9675675b39ba8351774.js"></script>
