
//Exercise 1 Write a JavaScript program to capitalize the first letter of each word of a given string.
function capitalize(str)
{
    return str.charAt(0).toUpperCase() + str.slice(1);
}


//Exercise 2: Write a JavaScript program to find the largest of three given integers.

function max(num1,num2,num3)
{
	if(num1>num2 && num1>num3){
        return num1;
    }

    else if(num2>num1 && num2>num3){
        return num2;
    }

    else{
        return num3;
    }   
}

//Exercise 3: Write a JavaScript program to move last three character to the start of a given string. The string length must be greater or equal to three.
function Right(str){

    if(str.length<=3){
        return "Try a workd with more than 3 characters";
    }   
    else{

        

        let theFirst = str.slice(-3);
        let theLast = str.slice(0,str.length-3);
        

        return theFirst + theLast;

    }
    
}


//Exercise 4: Write a JavaScript program to find the type of angle (acute, obtuse, right, straight) given its measure in degrees.

function angle_Type(angle)
{
    if(angle<90){
        return "Acute angle";
    }
    else if(angle==90){
        return "Right angle";
    }
    else if(angle<180){
        return "Obtuse angle";
    }
    else if(angle==180){
        return "Straight angle";
    }
    else{
        return "Invalid angle";
    }
}



console.log("exercise 1: Capitalize the first letter of each word of a given string.");
console.log(capitalize("hello world"));
console.log(capitalize("javaScript"));

console.log("exercise 2: Find the largest of three given integers.");
console.log(max (1,0,1));
console.log(max (0,-10,-20));
console.log(max (1000,510,440));

console.log("exercise 3: Move last three character to the start of a given string. The string length must be greater or equal to three.");
console.log(Right("Python"));
console.log(Right("JavaScript"));
console.log(Right("Hi"));

console.log("exercise 4: Find the type of angle (acute, obtuse, right, straight) given its measure in degrees.");
console.log(angle_Type(47));
console.log(angle_Type(90));
console.log(angle_Type(145));
console.log(angle_Type(180));
console.log(angle_Type(360));






