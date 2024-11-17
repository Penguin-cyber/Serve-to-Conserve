//js for managing leaves counter and log outfit popup
var leaves = 0;
const confirm_button = document.getElementById('confirm-button');
document.getElementById('confirm-button').addEventListener("click", () => {
    console.log('clicked confirm');
    leaves += 5;
    updateLeaves();
});

function updateLeaves() {
    document.getElementById('leaves').innerHTML = leaves;
}
console.log('asiofjoas')