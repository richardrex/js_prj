function lesson1_1(){
    let apples;
    apples = 4;
    apples = "four";


    let eggs = 3;
    let text = "Number of eggs: ";
    let combination = text + eggs;

    let num1 = 2;
    let num2 = "5";
    let sum = num1 + num2;

    document.getElementById("1").innerHTML = sum;

};
function lesson1_2(){
    //let vs const
    let value = "some value";
    value = "changed value";

    const val = "value";
    // val = "some other value";
    document.getElementById("2").innerHTML = val;
}

function lesson1_3(){
    //CONDITIONAL LOGIC
    //if...else
    const isWeekend = true;
    let action;

    if (isWeekend) {
        action = "Go to pub";
    } else {
        action = "Go to school";
    }
    document.getElementById("3").innerHTML = action;
    // == vs ===
    const equalSignVal = "5";
    if (equalSignVal == 5) {
        console.log("Variable contains value 5");
        alert("Variable contains value 5")
    }

    if (equalSignVal === 5) {
        console.log("Variable contains value 5 and is type number");
        alert("Variable contains value 5 and is type number")
    }

    console.log(isWeekend);
    document.getElementById("4").innerHTML = isWeekend;
}

function lesson1_4(){
    //ternary operator
    let ternaryAction;
    ternaryAction = isWeekend ? "Go to pub" : "Go to school";
    document.getElementById("5").innerHTML = ternaryAction;
    console.log(ternaryAction);
}

function lesson1_5(){
    //switch
    const dayOfWeek = prompt("What is the day today?");;
    let dayAction;

    switch (dayOfWeek) {
        case "Monday":
            dayAction = "Work";
            break;
        case "Tuesday":
            dayAction = "School";
            break;
        case "Wednesday":
            dayAction = "Road trip";
            break;
        case "Thursday":
            dayAction = "School";
            break;
        case "Friday":
            dayAction = "Party";
            break;
        case "Saturday":
            dayAction = "Hangover";
            break;
        case "Sunday":
            dayAction = "Family time";
            break;
        default:
            dayAction = "No match found";
    }
    document.getElementById("6").innerHTML = dayAction;

}

function lesson1_6(){
    //FUNCTIONS
    //function declaration
    function sumDeclaration(a, b) {
        return a + b;
    }
    sumDeclaration(2, 3); //sečte 2 + 3 a vrátí hodnotu 5

    //function expression

    const sumExpression = function (a, b) {
        return a + b;
    };
    document.getElementById("7").innerHTML = sumExpression(2, 3);
    console.log(sumExpression(2, 3));

    const arrowExpression = (a, b) => a + b;

    const arrowAddFive = (a) => a + 5;
    document.getElementById("8").innerHTML = arrowExpression;
    document.getElementById("9").innerHTML = arrowAddFive;
}

function lesson1_7(){
    //Hoisting
    hoistedFunction();

    function hoistedFunction() {
        return "hello from hoisted function";
    }
    document.getElementById("10").innerHTML = hoistedFunction();

    // notHoistedFunction(); //error - Cannot access function before its initialization

    const notHoistedFunction = () => {
        return "hello from not hoisted function";
    };
    document.getElementById("11").innerHTML = notHoistedFunction()



    //Default parameter value
    function defaultParam(a, b = ", hello from default parameter") {
        return a + b;
    }
    document.getElementById("12").innerHTML = defaultParam(a = prompt("Input a?"))

    defaultParam("Students");

    document.getElementById("13").innerHTML = defaultParam("Students");
}

function lesson1_8(){
    //ARRAYS
    //Array declaration
    const cities = ["Prague", "Budapest", "Moscow", "London"];
    const carBrands = new Array("BWM", "Audi", "Škoda");

    //Access to array values
    console.log(cities[0]);
    document.getElementById("14").innerHTML = cities[0]

    //Get length of citties array
    console.log(cities.length); //returns 4
    document.getElementById("15").innerHTML = cities.length
    //Array value mutation
    cities[0] = "Paris";
    console.log(cities);
    document.getElementById("16").innerHTML = cities

    //Add value to end
    cities.push("Berlin");
    console.log(cities);
    document.getElementById("17").innerHTML = cities
    //Remove value from end
    cities.pop();
    console.log(cities);
    document.getElementById("18").innerHTML = cities

    //Add to beginning
    cities.unshift("Tokyo");
    console.log(cities);
    document.getElementById("19").innerHTML = cities

    //Remove from beginning
    cities.shift();
    console.log(cities);
    document.getElementById("20").innerHTML = cities

    //Find item position by its value
    console.log(cities.indexOf("Budapest"));
    document.getElementById("21").innerHTML = cities.indexOf("Budapest")
}

function lesson1_9(){
    //OBJECTS

    const car = {
        type: "BMW", //string
        color: "black", //string
        kilometers: 197087, //number
        wasCrashed: true, //boolean
        drive: function () {
            //method
            //some logic, so car can drive
        },
        stop: function () {
            //method
            //some logic so car can stop
        },
    };

    console.log(car.type);
    document.getElementById("22").innerHTML = car.type

    car.type = "Audi";

    console.log(car.type);
    document.getElementById("23").innerHTML = car.type

    car["type"] = "Mercedes";

    console.log(car.type);
    document.getElementById("24").innerHTML = car.type
    car.fuelType = "gasoline";

    console.log(car);
    document.getElementById("25").innerHTML = car
    delete car.type;

    console.log(car);
    document.getElementById("26").innerHTML = car
    //????


}

function lesson1_10(){
    //Destructuring
    //Array destructuring
    const games = ["God of War", "Mafia", "Company of Heroes", "Fortnite"];

    games[0]; //God of War
    games[1]; //Mafia
    games[2]; //Company of Heroes

    const [game1, game2, game3] = games;

    game1; //God of War
    game2; //Mafia
    game3; //Company of Heroes

    //object destructuring
    const game = {
        name: "Company of Heroes",
        genre: "Strategy",
        price: "5 euro",
    };

    const { name, genre, price } = game;

    console.log(name);
    console.log(genre);
    console.log(price);
    document.getElementById("27").innerHTML = name
    document.getElementById("28").innerHTML = genre
    document.getElementById("29").innerHTML = price


}
function lesson1_11(){
    const mathProblem1 = {
        operand1: 6,
        operand2: 2,
        operator: "/",
    };

    function solveMathProblem({ operand1, operand2, operator }) {
        let result;
        switch (operator) {
            case "/":
                result = operand1 / operand2;
                break;
            case "*":
                result = operant1 * operand2;
                break;
        }
        return result;
    }
    console.log(solveMathProblem(mathProblem1));
    document.getElementById("30").innerHTML = solveMathProblem(mathProblem1)

}
function lesson1_12(){
    const sports = ["football", "ice-hockey", "tennis"];
    console.log(sports);
    document.getElementById("31").innerHTML = sports
    console.log(...sports);
    alert(...sports);
    const someString = "Rainbow";
    console.log(...someString);
    alert(...someString);

}
function lesson1_13(){
    const books = ["book1", "book2", "book3"];
    const otherBooks = ["book4", "book5", "book6"];
    const allBooks = [books, otherBooks];
    const books1 = ["book1", "book2", "book3"];
    const otherBooks1 = ["book4", "book5", "book6"];
    const allBooks1 = [...books, ...otherBooks];
    const allBooks2 = [...books, "value in the middle", ...otherBooks];
    alert(allBooks2)
}
function lesson1_14(){
    //Concatenation of objects
    const mainColors = { brightRed: "#e55039", waterfallBlue: "#38ada9" };
    const accentColors = { lightGrey: "#778ca3", swanWhite: "#f7f1e3" };
    const fullPalette = { ...mainColors, ...accentColors };
//{brightRed: "#e55039", waterfallBlue: "#38ada9", lightGrey: "#778ca3",swanWhite: "#f7f1e3"}
    alert(JSON.stringify(fullPalette, null, 4));

    const fruits = ["apple", "strawberry", "orange", "lemon"];
    const fruitsCopy = fruits;
    const realFruitsCopy = [...fruits];
    alert(JSON.stringify(realFruitsCopy, null, 4));

    //Object copy
    const artist = {
        nickName: "Eminem",
        realName: "Marshall Bruce Matthers III.",
        genre: "Hip-hop",
    };
    const artistCopy = { ...artist };
    alert(JSON.stringify(artistCopy, null, 4));
}
function lesson1_15(){
    //Var vs let/const
    var varScoped = "hello from var";
    function varScopeFunction() {
        var varInsideFunction = "hello from function";
        if (true) {
            var varInsideBlock = "Hello from var if block";
        }
        document.getElementById("32").innerHTML =varScoped; //Global variable, so it's accessible
        document.getElementById("33").innerHTML =varInsideFunction; //Accessible, because it's called inside a function where it is declared as well
        console.log(varInsideBlock); //Accessible as well, because it's still in same function, even though it is in if block
            }
    document.getElementById("34").innerHTML = varScopeFunction();
    document.getElementById("35").innerHTML =varScoped; //Global variable - accessible
    document.getElementById("36").innerHTML =varInsideFunction; //Called outside a function where it is declared - not accessible
    document.getElementById("37").innerHTML = varInsideBlock; //Not accessible as well
}

function lesson1_16(){
    //Ask about Var/Let/Const section
}



