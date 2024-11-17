//js for managing leaves counter and log outfit popup
var leaves = 0;
const confirm_button = document.getElementById('confirm-button');
confirm_button.addEventListener("click", () => {
    leaves += 5;
    updateLeaves();
    token_modal.style.display = 'flex';
    token_modal.style.justifyContent = 'center';
    token_modal.style.alignItems = 'center';
});

function updateLeaves() {
    document.getElementById('leaves').innerHTML = leaves;
}

const token_modal = document.getElementById('token-modal');
window.onclick = function(event) {
    if (event.target ==  token_modal) {
        token_modal.style.display = 'none';
    }
}