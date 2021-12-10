function lesson2_1(){
    //LOOPS
    //example of first easy loop - log numbers from 1 to 10

    (function () {
        if (!console) {
            console = {};
        }
        let old = console.log;
        let logger = document.getElementById('log');
        console.log = function (message) {
            if (typeof message == 'object') {
                logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : String(message)) + '<br />';
            } else {
                logger.innerHTML += message + '<br />';
            }
        }
    })();
    for (let i = 1; i <= 10; i = i + 1) {
        console.log(i);


    }
    //for loop
    const cars = ["Audi A6", "Škoda superb 3", "BMW X6", "Audi R8"];

    for (let i = 0; i < cars.length; i++) {
        console.log(cars[i]); //first iteration i value - Audi A6
    }
    //while loop
    let i = 0;
    while (i < cars.length) {
        console.log(cars[i]);
        i++;
    }

    //while with break
    let j = 0;
    while (j < 5) {
        if (j === 2) {
            break;
        }
        console.log(j); // last log is: 1
        j++;
    }
    // console.log(j); //logs out 2

    //for with continue
    const numbers = [1, 3, 2, 5, 7, 10, 12];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            continue;
        }
        console.log(numbers[i]);
    }

    //do...while
    let number = 1;
    do {
        console.log(number);
        number++;
    } while (number < 1);

    //for...of
    for (const car of cars) {
        console.log(car);
    }

    //for...of string
    const iterateMe = "Rainbow";
    for (const letter of iterateMe) {
        console.log(letter);
    }

    //for...in
    const john = {
        name: "John",
        age: 28,
        job: "Teacher",
    };

    for (key in john) {
        console.log(key); //key
        console.log(john[key]); //value
    }







}

function lesson2_2(){
    (function () {
        if (!console) {
            console = {};
        }
        let old = console.log;
        let logger = document.getElementById('log');
        console.log = function (message) {
            if (typeof message == 'object') {
                logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : String(message)) + '<br />';
            } else {
                logger.innerHTML += message + '<br />';
            }
        }
    })();

    //EXECUTION CONTEXT


    function someFunc(ss) {
        console.log(arguments);
    }
    someFunc("hello");
    //console.log(this)


}

function lesson2_3(){

    //SCOPE
    /*
    function parentFunc() {
      const parentConst = "Hello from parent scope constant";
      childFunc();
    }

    function childFunc() {
      console.log(parentConst); // ReferenceError: parentConst is not defined
    }

    parentFunc(); */
    document.getElementById("1").innerHTML = "parentConst is not defined"



}

function lesson2_4(){
    (function () {
        if (!console) {
            console = {};
        }
        let old = console.log;
        let logger = document.getElementById('log');
        console.log = function (message) {
            if (typeof message == 'object') {
                logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : String(message)) + '<br />';
            } else {
                logger.innerHTML += message + '<br />';
            }
        }
    })();
    //CLOSURES

    function pFunc() {
        const string = "I have";
        function closureFunc(thing) {
            console.log(`${string} ${thing}`);
        }
        return closureFunc;
    }

    const callMeLater = pFunc();
    callMeLater("a pen"); //I have a pen
    callMeLater("an apple"); //I have an apple
    callMeLater("an apple pen"); //I have an apple pen

    callMeLater();
    callMeLater();
    callMeLater();
    callMeLater();
    callMeLater();
}

function lesson2_5(){

    (function () {
        if (!console) {
            console = {};
        }
        let old = console.log;
        let logger = document.getElementById('log');
        console.log = function (message) {
            if (typeof message == 'object') {
                logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : String(message)) + '<br />';
            } else {
                logger.innerHTML += message + '<br />';
            }
        }
    })();
    //Without Constructor

    const car1 = {
        brand: "BMW",
        color: "red",
        kilometers: 220320,
        wasCrashed: true,
    };

    const car2 = {
        brand: "Audi",
        color: "black",
        kilometers: 21003,
        wasCrashed: false,
    };

    //With constructor
    //Constructor
    function Car(brand, color, kilometers, wasCrashed) {
        this.brand = brand;
        this.color = color;
        this.kilometers = kilometers;
        this.wasCrashed = wasCrashed;
    }

    Car.prototype.stop = function () {
        console.log("Car stopped");
    };

    //Instance of Car
    const car3 = new Car("Škoda", "blue", 132032, false);
    //const car4 = new Car("Mercedes");
    console.log(car3.kilometers.toString());

    console.log(Car);

    //Prototype inheritance
    function SportCar(
        brand,
        color,
        kilometers,
        wasCrashed,
        driver,
        numberOfVictories
    ) {
        Car.call(this, brand, color, kilometers, wasCrashed); //inherits from Car constructor, and gets its arguments
        //.call here calls Car constructor with its "this" value and other arguments
        this.driver = driver;
        this.numberOfVictories = numberOfVictories;
    }

    SportCar.prototype = Object.create(Car.prototype); // creates new object constructor based on the prototype of Car constructor
    SportCar.prototype.constructor = SportCar; //assigns SportCar constructor, because Car constructor was assign in .create(), which is something we don't want

    SportCar.prototype.driveSuperFast = function () {
        //example of how to add a method to SportCar constructor
        console.log("Car is driving super fast");
    };

    const sportCar1 = new SportCar(
        "BMW",
        "blue",
        23212,
        true,
        "Some driver",
        4
    );

    console.log(sportCar1);



}

function lesson2_6(){
    (function () {
        if (!console) {
            console = {};
        }
        let old = console.log;
        let logger = document.getElementById('log');
        console.log = function (message) {
            if (typeof message == 'object') {
                logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : String(message)) + '<br />';
            } else {
                logger.innerHTML += message + '<br />';
            }
        }
    })();
    //Class
    class CarClass {
        constructor(brand, color, kilometers, wasCrashed) {
            this.brand = brand;
            this.color = color;
            this.kilometers = kilometers;
            this.wasCrashed = wasCrashed;
        }

        stop() {
            console.log("Car stopped");
        }
    }

    class SportCarClass extends CarClass {
        constructor(
            brand,
            color,
            kilometers,
            wasCrashed,
            driverName,
            numberOfVictories
        ) {
            super(brand, color, kilometers, wasCrashed); //You need to call this, when you have derived class with a constructor, which is exactly what we have here
            this.driverName = driverName;
            this.numberOfVictories = numberOfVictories;
        }
        driveSuperFast() {
            console.log("Drive super fast");
        }
    }

    const mySportCar = new SportCarClass(
        "Audi",
        "yellow",
        20132,
        false,
        "Some driver name",
        8
    );
    mySportCar.stop(); // Can call methods from parent class

    console.log(mySportCar);
}

function lesson2_7(){
    (function () {
        if (!console) {
            console = {};
        }
        let old = console.log;
        let logger = document.getElementById('log');
        console.log = function (message) {
            if (typeof message == 'object') {
                logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : String(message)) + '<br />';
            } else {
                logger.innerHTML += message + '<br />';
            }
        }
    })();
    //This keyword arrow function vs regular function

    const obj = {
        something: "some",
        someFunc: () => {
            console.log("hello");
            console.log(this.something); //refers to window
        },
    };

    obj.someFunc();

    class Item {
        constructor(name) {
            this.name = name;
        }

        logName() {
            setTimeout(() => {
                console.log(`${this.name}`); //returnes name value after 1 second
            }, 1000);
        }
    }

    let newObj = new Item("Some name");
    newObj.logName();

}

function lesson2_8(){
    (function () {
        if (!console) {
            console = {};
        }
        let old = console.log;
        let logger = document.getElementById('log');
        console.log = function (message) {
            if (typeof message == 'object') {
                logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : String(message)) + '<br />';
            } else {
                logger.innerHTML += message + '<br />';
            }
        }
    })();
    //higher order functions
    function callbackFunc() {
        return "Hello from callback";
    }

    function highFunc(callback) {
        const str = ", which is called from higher order function";
        console.log(`${callback()} ${str}`);
    }

    highFunc(callbackFunc);

    const numbersArr = [1, 3, 6, 8];

    const numbersSquared = numbersArr.map((number) => number * number);

    console.log(numbersSquared); // returns [1, 9, 36, 64]

    const filteredArr = numbersArr.filter((number) => number > 5); //returns [6, 8]

    console.log(filteredArr);
}

