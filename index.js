// Type "Hello World" then press enter.
var robot = require("robotjs");

blueColors = [
    "4af0fe", "1b76f2", "14d8ff", "04d7fe", "05d7ff", "7b7ffe", "16c4f1", 
    "4c70f3", "4c71f4", "4b71f5", "2372eb", "91f3fb","01d8ff",
    "1784bf", "00fef8", "87b5fe", "31ecdc", "8ef6fe"
];
pinkColors = ["ff8dfb", "fe8cfb"];



// while loop
while(true) {
    //console.log(robot.getPixelColor(333,378));
    if (blueColors.includes(robot.getPixelColor(333, 378))) {
        robot.keyTap("f");
    }
}


//get color at spots where the notes hit

//if color in spots is in blueColors/ pink colors array
//press button

//TODO
//attach to gui 


