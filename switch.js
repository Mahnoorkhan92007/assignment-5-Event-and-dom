document.write("<h1>Power</h1>")

function power(a, b) {
    var result = 1;
    for (var i = 0; i < b; i++) {
        result *= a
    }

    return result;

}

document.write(power(2, 3));


//point 2
document.write("<h1>Check Year</h1>")

function wheather() {

    var user = +prompt("what year you check a Leap Year.. ")
    var year = ""
    if (user === null || isNaN(user) || user === 0) {

        year += "plz Enter a number."
    }
    else if (user % 4 === 0 && user % 400 === 0 && user % 100 !== 0) {
        year += "This is a Leap Year"
    } else {
        year += "This is not a Leap Year"
    }
    document.write(year);
}
wheather()


//point 3
document.write("<h1>Check Area</h1>")

function area(a, b, c) {
    var s = (a + b + c) / 2

    function find() {

        var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

        return area;

    }

    return find();

}


var araefind = area(4, 8, 6)
document.write("Area of the triangle: " + araefind)

//point 4
document.write("<h1>Check Marks</h1>")

function main() {
    var mark1 = 80
    var mark2 = 40
    var mark3 = 60

    function percentage() {
        var marks = mark1 + mark2 + mark3
        var percentage = (marks / 300) * 100
        return percentage;
    }



    function average() {

        var marks1 = mark1 + mark2 + mark3;

        var average1 = marks1 / 3
        return average1

    }

    var perc = percentage();
    var avg = average();

    document.write("Percentage: " + perc + "%<br>");
    document.write("Average Marks: " + avg);


}

main()
//point 5

document.write("<h1>Check Indexof</h1>")

function custom(indexof, target) {
    var result2 = ""
    for (var i = 0; i < indexof.length; i++) {
        var find1 = indexof[i];

        if (find1 === target) {
            return i
        }
    }

    return -1
}


var a = custom("mahnoor", "h")

document.write(a)


//point 6
document.write("<h1>Delete Vowels</h1>")

function vowels(sentence) {

    var v = "AEIOUaeiou";
    var result = "";

    for (var i = 0; i < sentence.length; i++) {
        var find3 = sentence[i];
        if (v.indexOf(find3) === -1) {
            result += find3;
        }

    }
    return result;
}


var del = vowels("Mahnoor Khan")
document.write("Modified Sentence: " + del);

//point 7

document.write("<h1>SWITCH STATEMENT</h1>")

function occurences(sentence1) {

    var vowels = "AEIOUaeiou";
    var count = 0;
    for (var i = 0; i < sentence1.length; i++) {
        var s = sentence1[i];
        var nextChar = sentence1[i + 1]

        switch (true) {
            case vowels.indexOf(s) !== -1 && vowels.indexOf(nextChar) !== -1:
                count++;
                break;

        }

    }

    return count;
}


var o = occurences("Pleases read this application and give me gratuity");
document.write("Number of consecutive vowels: " + o);


//point 8

document.write("<h1>distance between two cities (in km.)</h1>")

function meter(distance1) {

    var meters = distance1 * 1000;
    return meters;
}

function feet(distance1) {
    var meters = meter(distance1);
    return meters * 3.28084;
}

function inches(distance1) {
    var feetValue = feet(distance1);
    return feetValue * 12;
}

function centimeters(distance1) {
    var inchesValue = inches(distance1);
    return inchesValue * 2.54;
}

var distance = 20;

document.write("Distance in meters: " + meter(distance) + "<br>");
document.write("Distance in feet: " + feet(distance) + "<br>");
document.write("Distance in inches: " + inches(distance) + "<br>");
document.write("Distance in centimeters: " + centimeters(distance) + "<br>");

//point 9
document.write("<h1>Overtime Pay Calculation</h1>");

function fractionalpart(hoursWorked) {

    var overtimeRate = 12;
    var regularHours = 40;
    var overtimeHours = 0;
    var overtimePay = 0;

    if (hoursWorked > regularHours) {
        overtimeHours = hoursWorked - regularHours;
        overtimePay = overtimeHours * overtimeRate;
    }

    return overtimePay;
}


var pay = fractionalpart(50);
document.write("Total Overtime Pay for 45 hours worked is: Rs. " + pay + "<br>");


//point 10

document.write("<h1>currency notes of denominations</h1>")


var amount = +prompt("Enter amount To Withdraw in hundreds:");
function dominations(amount) {

    var notes100 = Math.floor(amount / 100);
    amount = amount % 100;


    var notes50 = Math.floor(amount / 50);
    amount = amount % 50



    var notes10 = Math.floor(amount / 10);
    amount = amount % 10;

    return {
        notes100: notes100,
        notes50: notes50,
        notes10: notes10
    };

}
var result = dominations(amount);


alert("The Amount to Withdraw is: " + amount + "\n" +
    "100 denomination notes: " + result.notes100 + "\n" +
    "50 denomination notes: " + result.notes50 + "\n" +
    "10 denomination notes: " + result.notes10);

document.write("You will have:<br>");
document.write("100 denomination notes: " + result.notes100 + "<br>");
document.write("50 denomination notes: " + result.notes50 + "<br>");
document.write("10 denomination notes: " + result.notes10 + "<br>");