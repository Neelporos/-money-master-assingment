// Calculation Section 
const calculateButton = document.getElementById('calculate-btn');
calculateButton.addEventListener('click', function () {

    // Input Section 
    const totalIncome = document.getElementById('total-income').value;
    const foodCost = document.getElementById('food-cost').value;
    const rentCost = document.getElementById('rent-cost').value;
    const clothesCost = document.getElementById('clothes-cost').value;

    if (totalIncome < 0 || foodCost < 0 || rentCost < 0 || clothesCost < 0) {
        displayElement("error-massage")
        return;
    }

    // Calculate Section 
    const allCost = parseFloat(foodCost) + parseFloat(rentCost) + parseFloat(clothesCost);
    if (allCost > totalIncome) {
        displayElement("error-massage2")
        return;
    }
    const totalCost = document.getElementById('total-cost')
    totalCost.innerText = allCost;
    const balance = document.getElementById('balance');
    balance.innerText = totalIncome - allCost;

})


// Error Handling Function
function displayElement(id) {
    const errorMassage = document.getElementById(id);
    errorMassage.style.display = "block"
}


// Saveing Section 
const savingButton = document.getElementById("savaing-btn");
savingButton.addEventListener("click", function () {

    // Input Section 
    const savingInput = document.getElementById("saving-input").value;
    const totalIncome = document.getElementById('total-income').value;
    const totalCost = document.getElementById('total-cost').innerText;

    // Calculate Section
    if (savingInput > 0) {
        const savingAmountId = document.getElementById("saving-amount");
        const savingAmount = totalIncome * (savingInput / 100);
        const remaingBalance = totalIncome - totalCost - savingAmount;

        if (remaingBalance < 0) {
            displayElement("error-massage3")
            return;
        }
        savingAmountId.innerText = savingAmount;
        console.log(remaingBalance);
        const remaingBalanceId = document.getElementById('remaing-balance');
        remaingBalanceId.innerText = remaingBalance;
    }

    else {
        displayElement("error-massage")
    }

})
