//Recursions Questions 

/*
Before you work on the first recursion challenge, it's best that you solve these challenges first using Javascript (for now).  Although you could also approach these challenges using Python or Java, you'll get most of this module by doing this in Javascript as my videos, as well as video solutions, are all in Javascript.

Now, Javascript is the most popular programming languages for building web applications.  As all we developers are also expected to know some extent of Javascript, it is also a good common language to practice for technical interviews.  FYI, about 40% of jobs are Javascript related (with Python making up about 20% of job demand, Java anywhere from 10-15% of job demand, and other programming languages anywhere from 1%-5%).

You can switch the language by clicking on the language name next to 'Run & Save' button on the top right.

First Recursion Challenge
Using recursion, implement function sigma(num) that, given a number, returns the sum of all positive integers up to the given number (inclusive).

Ex: sigma(3) = 6 (or 1+2+3); sigma(5) = 15 (or 1+2+3+4+5).
*/

function sigma(n) {
    if (n === 0) {
        return n;
    }
    
    return n + sigma(n-1);
}

/*
Using recursion, write a function factorial(num) that, given a number, returns the product (multiplication) of all positive integers from 1 up to the given number (inclusive).
For example, factorial(3) = 6 (or 123); factorial(5) = 120 (or 12345).
For this challenge, do not worry about time-complexity of your code yet.
*/

function factorial(n) {
    if (n === 1) {
        return n;
    }
    
    return n * factorial(n-1); 
}