const add = document.querySelector("#add")
const sub = document.querySelector("#sub")

let count = 0;

function updateCounter() {
    document.querySelector(".number-counter").textContent = count;
}

sub.addEventListener("click", (event) => {
    event.preventDefault()
    count--;
    updateCounter()
});
add.addEventListener("click", (event) => {
    event.preventDefault()
    count++;
    updateCounter();
});