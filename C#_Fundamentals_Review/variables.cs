using System;

namespace Variables
{
    class Program
    {
        static void Main(string[] args)
        {
            string name = "Susan";
            Console.WriteLine(name);

            int myNumber = 21;
            Console.WriteLine(myNumber);

            /*
            You can declare the a variable without assigning the value.
            Assign the value later.
            */

            int newNum;
            newNum = 1;
            Console.WriteLine(newNum);

            //overwriting a previous value
            newNum = 14;
            Console.WriteLine("newNum is " + newNum);

            //const variables are unchangeable and read-only
            const testString = "test";
            testString = "testtest";

            double myDecimal = 3.12D;
            Console.WriteLine(myDecimal);

            char myLetter = 'T';
            Console.WriteLine(myLetter);

            bool isItValid = true;
            Console.WriteLine(isItValid);
        }
    }
}