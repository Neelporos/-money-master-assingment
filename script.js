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



