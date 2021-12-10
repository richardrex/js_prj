function lesson3_1(){
    const btn = document.getElementById("btn1"); //select button element and assign it to a variable
    const heading = document.getElementById("heading"); //select heading element and assign it to a variable

    console.log(btn);

    function setNewHeadingText(text) {
        heading.innerHTML = text; //changes text inside the h1 element
    }

    btn.addEventListener("click", () => setNewHeadingText("Hello students!"));
}

