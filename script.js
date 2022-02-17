const calculateButton = document.getElementById('calculate-btn');
// Calculation Section 
calculateButton.addEventListener('click', function () {
    // Error Handling


    //   All Cost 
    const foodCost = document.getElementById('food-cost').value;
    const rentCost = document.getElementById('rent-cost').value;
    const clothesCost = document.getElementById('clothes-cost').value;

    const allCost = parseFloat(foodCost) + parseFloat(rentCost) + parseFloat(clothesCost);

    const totalCost = document.getElementById('total-cost')
    totalCost.innerText = allCost;

    //  Balance Remaining
    const totalIncome = document.getElementById('total-income').value;
    const balance = document.getElementById('balance');
    balance.innerText = totalIncome - allCost;
})


const savingButton = document.getElementById("savaing-btn");
savingButton.addEventListener("click", function () {

    const savingInput = document.getElementById("saving-input").value;
    const totalIncome = document.getElementById('total-income').value;
    const totalCost = document.getElementById('total-cost').innerText;

    const savingAmountId = document.getElementById("saving-amount");
    const savingAmount = totalIncome * (savingInput / 100);

    savingAmountId.innerText = savingAmount;

    const remaingBalance = totalIncome - totalCost - savingAmount;

    console.log(remaingBalance);
    const remaingBalanceId = document.getElementById('remaing-balance');

    remaingBalanceId.innerText = remaingBalance;
})
