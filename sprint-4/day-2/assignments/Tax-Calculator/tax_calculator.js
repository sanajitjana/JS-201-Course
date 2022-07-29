//tax calculate
let calculateTax = (incomes, savings) => {
  if (incomes >= 250000 && incomes <= 500000) {
    incomes = incomes - (savings * 50) / 100;
    return tax(incomes);
  } else if (incomes > 500000 && incomes <= 1000000) {
    incomes = incomes - (savings * 30) / 100;
    return tax(incomes);
  } else if (incomes > 1000000) {
    incomes = incomes - (savings * 10) / 100;
    return tax(incomes);
  } else {
    return "No tax applicable";
  }
};

function tax(incomes) {
  if (incomes < 250000) {
    return "No tax applicable";
  }
  if (incomes >= 250000 && incomes <= 500000) {
    return (incomes * 10) / 100;
  }
  if (incomes > 500000 && incomes <= 1000000) {
    return 50000 + ((incomes - 500000) * 20) / 100;
  }
  if (incomes > 1000000) {
    return 150000 + ((incomes - 1000000) * 30) / 100;
  }
}

export default calculateTax;
