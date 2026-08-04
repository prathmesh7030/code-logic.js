let btn1 = document.querySelector("#btn1");

btn1.addEventListener("click", () => {
    console.log("button1 was clicked - Handler 1");
});

btn1.addEventListener("click", () => {
    console.log("button1 was clicked - Handler 2");
});


const handler3 =() => {
    console.log("button1 was clicked - Handler3");
};

btn1.addEventListener("click", handler3);

btn1.removeEventListener("click", handler3);


btn1.addEventListener("click", () => {
    console.log("button1 was clicked - Handler 4");
});