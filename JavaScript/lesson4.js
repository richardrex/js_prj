function lesson4_1(){
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
    function third() {
        console.log("Hello");
    }

    function second() {
        console.log("Hello from second");
        third();
    }

    function first() {
        console.log("Hello from first ");
        second();
    }

    first();


}


function lesson4_2(){
    //Code blocking example
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

    const btn = document.querySelector("#btn2");

    btn.addEventListener("click", () => console.log("btn clicked"));

    console.log("before loop");

    for (let i = 0; i < 30000; i++) {
        console.log(i);
    }

    console.log("after loop");


}


function lesson4_3(){
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
    const getUser = new Promise((resolve, reject) => {
        const user = { name: "Mark", age: 28, nationality: "UK" };
        setTimeout(() => {
            if (user) {
                resolve(user);
            } else {
                reject(new Error("User not found"));
            }
        }, 2000);
    });

    const getUserName = (user) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(user.name);
            }, 2000);
        });
    };

    //then/catch
    getUser
        .then((res) => getUserName(res))
        .then((name) => console.log(name))
        .catch((err) => console.log(err));

    //async/await
    const fetchUser = async () => {
        try {
            const res = await getUser;
            const name = await getUserName(res);
            console.log(name);
        } catch (e) {
            console.log(e);
        }
    };

    const test = fetchUser().then((res) => console.log(res));

    fetchUser()

    // example of non blocking then/catch
    const fetchUserThen = () => {
        let name;
        getUser
            .then((res) => getUserName(res))
            .then((n) => {
                name = n;
                console.log(name);
            })
            .catch((err) => console.log(err));
    };

    fetchUserThen();

    //Fetch API
    const fetchData = async () => {
        try {
            const response = await fetch(
                `http://jsonplaceholder.typicode.com/posts`,
                {
                    method: "GET",
                }
            );
        } catch (err) {
            console.log(err);
        }
    };

    fetchData();

}


function lesson4_4(){
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

    const getUser = new Promise((resolve, reject) => {
        const user = { name: "Mark", age: 28, nationality: "UK" };
        setTimeout(() => {
            if (user) {
                resolve(user);
            } else {
                reject(new Error("User not found"));
            }
        }, 2000);
    });
    const getUserName = (user) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(user.name);
            }, 2000);
        });
    };
    // example of non blocking then/catch
    const fetchUserThen = () => {
        let name;
        getUser
            .then((res) => getUserName(res))
            .then((n) => {
                name = n;
                console.log(name);
            })
            .catch((err) => console.log(err));
    };

    fetchUserThen();

    //Fetch API
    const fetchData = async () => {
        try {
            const response = await fetch(
                `http://jsonplaceholder.typicode.com/posts`,
                {
                    method: "GET",
                }
            );
        } catch (err) {
            console.log(err);
        }
    };

    fetchData();

}


function lesson4_5(){
    window.open("https://jsfiddle.net/RicRex420/s4npL9vj/5/","popup","popup").focus()

}