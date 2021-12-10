function lesson5_1(){
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
    let number = 0;

    const increment = () => {
        number++;
    };

    const decrement = () => {
        number--;
    };
    increment();
    increment();
    decrement();
    console.log(number);
}
function clearContent(){
    document.getElementById('log').innerHTML = '';
}
function lesson5_2(){
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
    class Counter {
        #privateField;

        constructor(number) {
            this.number = number;
            this.#privateField = "something private";
        }

        increment() {
            this.number++;
            console.log(this.#privateField);
        }
        decrement() {
            this.number--;
        }
    }

    const counter1 = new Counter(0);
    console.log(counter1.number);
    counter1.increment();
    counter1.increment();
    counter1.increment();
    console.log(counter1.number);
   //console.log(counter1.#privateField); //error

}

function lesson5_3(){
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
    //EXAMPLE OF POLYMORPHISM
    class Animal {
        move() {
            console.log("run");
        }
    }

    class Dog extends Animal {}

    class Bird extends Animal {
        move() {
            console.log("fly");
        }
    }

    class Turtle extends Animal {
        move() {
            console.log("move veeery slowly");
        }
    }

    const dog1 = new Dog();
    const bird1 = new Bird();
    const turtle1 = new Turtle();
    dog1.move();
    bird1.move();
    turtle1.move();

}

function lesson5_4(){
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
    const strNumbers = {
        num1: "2",
    };

    const convertToNum = (obj) => {
        return { ...obj, num1: parseInt(obj.num1) };
    };

    const addToNum = (obj) => {
        return { ...obj, num1: obj.num1 + 5 };
    };

    console.log(addToNum(convertToNum(strNumbers)));


}

function lesson5_5(){
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
    const mafia = {
        genre: "Action-adventure",
        releaseDate: new Date("August, 28, 2002"),
        developer: "Illusion Softworks",
    };
    console.log({ ...mafia });
    const addDirector = (game, name) => {
        return {
            ...game,
            director: name,
        };
    };
    const mafiaWithDirector = addDirector(mafia, "Daniel Vávra");
    console.log(mafiaWithDirector);
    const nestedMafia = {
        genre: "Action-adventure",
        releaseDate: new Date("August, 28, 2002"),
        developer: "Illusion Softworks",
        director: {
            name: "Daniel Vávra",
            otherGames: "Kingdom Come: Deliverance",
        },
    };
    const addMoreDirectorInfo = (game, newInformation) => {
        return {
            ...nestedMafia,
            director: {
                ...nestedMafia.director,
                newInfo: newInformation,
            },
        };
    };

    console.log(
        addMoreDirectorInfo(nestedMafia, "some additional information")
    );
    console.log(nestedMafia);
}

function lesson5_6(){
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
    //custom map function implementation
    const arrs = [
        { name: "josh", age: 22 },
        { name: "angelica", age: 18 },
        { name: "Andrea", age: 38 },
    ];

    Array.prototype.customMap = function (callback) {
        const newArr = [];
        for (i = 0; i < this.length; i++) {
            newArr.push(callback(this[i], i, this));
        }
        return newArr;
    };
    console.log(arrs);
    const myown = arrs.customMap((item, index) => item.name);
    console.log(myown);
}

function lesson5_7(){
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
    //RECURSION
    //factorial
    const factorial = (num) => {
        if (num === 0) return 1;
        return num * factorial(num - 1);
    };

    console.log(factorial(4));

    const getNames = (arr) => {
        const newArr = [];

        const helper = (subArr) => {
            if (subArr.length === 0) return;
            newArr.push(subArr[0].name);
            helper(subArr.slice(1));
        };

        helper(arr);

        return newArr;
    };
    console.log(getNames(arrs));
}

function lesson5_8(){
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
    //IMPERATIVE VS DECLARATIVE
    //imperative example
    movies = ["Godfather", "Nemo", "Scarface", "Grown Ups", "Twilight"];

    movieToDelete = "Twilight";

    const imperativeRemove = (arr, toDel) => {
        const newArr = [];

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== toDel) newArr.push(arr[i]);
        }
        return newArr;
    };

    console.log(imperativeRemove(movies, movieToDelete));

    //declarative example
    const declarativeRemove = (arr, toDel) =>
        arr.filter((item) => item !== toDel);

    console.log(declarativeRemove(movies, movieToDelete));

}






