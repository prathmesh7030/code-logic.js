let divs = document.querySelectorAll(".box");

console.dir(divs[0]);

let idx = 1;
for(div of divs) {
    div .innerText = `new unique value ${idx}`;
    idx++;
}