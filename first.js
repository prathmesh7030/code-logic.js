let btn1 = document.querySelector("#btn1");

btn1.addEventListener("click", (evt) => {
    console.log("button1 was clicked");
    console.log(evt);
    console.log(evt.type);
});

let div = document.querySelector("div");

