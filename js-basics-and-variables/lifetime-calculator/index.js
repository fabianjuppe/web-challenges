console.clear();

/*
Let's calculate some interesting facts based on a user's age! 
The program expects the user to provide their age as a numerical input. 
The code for receiving this input is provided below.

Calculate the following:
1. The total number of days the person has lived.
2. The estimated number of remaining days, assuming an average life span of 80 years.
3. The percentage of life already lived, in relation to the expected life span.
4. The cumulative number of days the person has spent sleeping, assuming an average of 8 hours of sleep per day.

Log each result with a clear and descriptive message. 
Hint: You can combine text and variables using the `+` operator.

💡 For simplicity, ignore leap years.
*/

const currentAge = Number(process.argv[2]); // This takes the `<age>` entered in the command `node index.js <age>`.
console.log("Your current age is: " + currentAge);

const totalDaysLived = currentAge * 365;
console.log("You have lived a total of " + totalDaysLived + " days!");

const remainingDays = 80 * 365 - totalDaysLived;
console.log("You have approximately " + remainingDays + " days left to live!");

const percentageOfLife =
    (totalDaysLived / (remainingDays + totalDaysLived)) * 100;
console.log(
    "You have approximately lived " + percentageOfLife + " % of your life!",
);

const daysSleeping = totalDaysLived / 3;
console.log("You have been asleep for " + daysSleeping + " days of your life!");
