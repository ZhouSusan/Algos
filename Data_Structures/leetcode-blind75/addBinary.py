class Solution: 
    def addBinary(self, a:str, b:str) -> str:
        result= ""
        carry = 0
        #when we are adding the characters two, we are starting at then end of the strings 
        #So, we are going to reverse the strings, so we can compute the digits in order

        a = a[::-1]
        b = b[::-1]

        #we are going to loop through the longest string
        for i in range(max(len(a), len(b))):
            #we are going to add digit by digit 
            #but if one sting is shorter than the other, we trat an index out of bounds by setting its default to 0
            #We can convert the integer of the string to a int by taking the ASC value of that string int minus the ACII value of 0
                #So, if the character is 0, this will computer to the interger 0
                #if the character is one, it will convert the integer 1
            digitA = ord(a[i]) - ord("0") if i < len(a) else 0
            digitB = ord(b[i]) - ord("0") if i < len(b) else 0
            
            total = digitA + digitB + carry 
            char = str(total % 2)#this is binary(base2), so we mod by 2
            result = char + result #add to beginning of string
            carry = total//2 #update carry

        if carry:
            #if carry is non-sero, then we add "1" to beginning of the result
            result = "1" + result
        return result