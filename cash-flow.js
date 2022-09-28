
let family = {
  incomes: [400, 500, 1000, 1500],
  expenses: [55, 109, 490, 300, 2400]
}

function sum(array){
  let total = 0;
  for(let i of array){
    total += i;
  }

  return total
}

function calculateBalance(){
  const calculateIncomes = sum(family.incomes);
  const calculateExpenses = sum(family.expenses);

  const total = calculateIncomes - calculateExpenses

  const itsOk = total > 0;
  let balanceText = "negative";

  if(itsOk){
    balanceText = "positive";
    let msg = document.getElementById("message");
    msg.style.backgroundColor = "#53c253"
  }

  document.getElementById("incomes").innerHTML = calculateIncomes
  document.getElementById("expenses").innerHTML = calculateExpenses
  document.getElementById("balance").innerHTML = total
  document.getElementById("message").innerHTML = `Your balance is ${balanceText}`
}
calculateBalance()
