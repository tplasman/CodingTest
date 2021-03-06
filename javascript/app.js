//dice rolling app javascript

function rollDice(sides) {
    var sum = 0;

    //get sides of dice from user
    var sides = document.getElementById("sides").value;
    //get amount of dice from user
    var amount = document.getElementById("amount").value;

    //reguiring values to work or giving alert error
    if (sides > 0 && amount > 0) {
        for (var i = 0; i < amount; i++) {
            //random number generator
            var rolls = 1 + Math.floor(Math.random() * sides);
            sum += rolls;
        }
    } else if (sides <= 0) {
        alert("Enter how many sides on the dice!")
    } else {
        alert("Enter how many dice are being rolled!")
    }

    //update the UI
    document.getElementById("total").innerHTML = sum;

}

//reset button
function init() {
    document.getElementById("sides").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("total").innerHTML = 0;
}
