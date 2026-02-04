console.clear();

const first = true;
if (first) {
    // true
    console.log("The first behavior is: " + first);
}

const second = "Jane";
if (second) {
    //true
    console.log("The second behavior is: " + second);
}

const third = false;
if (third) {
    //false
    console.log("The third behavior is: " + third);
}

const fourth = "false";
if (fourth) {
    //true
    console.log("The fourth behavior is: " + fourth);
}

const fifth = "";
if (fifth) {
    //false
    console.log("The fifth behavior is: " + fifth);
}

const sixth = 1;
if (sixth) {
    //true
    console.log("The sixth behavior is: " + sixth);
}

const seventh = -1;
if (seventh) {
    //true
    console.log("The seventh behavior is: " + seventh);
}

const eighth = 0;
if (eighth) {
    //false
    console.log("The eighth behavior is: " + eighth);
}

const ninth = null;
if (ninth) {
    //false
    console.log("The ninth behavior is: " + ninth);
}

const tenth = undefined;
if (tenth) {
    //false
    console.log("The tenth behavior is: " + tenth);
}
