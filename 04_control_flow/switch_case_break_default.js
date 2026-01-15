let day=2
switch(day){
    case 1:
        console.log("sunday");
        break;
    case 2:
        console.log("monday");
        break;
    case 3:
        console.log("tuesday");
        break;
    default:
        console.log("enter 1,2 or 3 only");
}

let month="Apr";

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("February");
        break;
    case "Mar":
        console.log("March");
        break;
    case "Apr":
        console.log("April");
        break;

    default:
        console.log("Invalid month");
        break;
}

let pric = 700;

switch (true) {
    case pric > 1000:
        console.log("I'll come back");
        break;

    case pric > 750:
        console.log("Thinking to buy");
        break;

    case pric > 500:
        console.log("Kharid hi leta hu");
        break;

    default:
        console.log("Ab itna sasta kahi nhi milega");
}

