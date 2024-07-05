const readline = require("readline");

function calculatePAYE(grossSalary) {
  let annualGrossSalary = grossSalary * 12;
  let paye;

  if (annualGrossSalary <= 288000) {
    paye = grossSalary * 0.1;
  } else if (annualGrossSalary <= 388000) {
    paye = 24000 * 0.1 + (grossSalary - 24000) * 0.25;
  } else if (annualGrossSalary <= 6000000) {
    paye = 24000 * 0.1 + 8333 * 0.25 + (grossSalary - 32333) * 0.3;
  } else if (annualGrossSalary <= 9600000) {
    paye =
      24000 * 0.1 + 8333 * 0.25 + 467667 * 0.3 + (grossSalary - 500000) * 0.325;
  } else {
    paye =
      24000 * 0.1 +
      8333 * 0.25 +
      467667 * 0.3 +
      300000 * 0.325 +
      (grossSalary - 800000) * 0.35;
  }

  return paye;
}

function calculateNHIF(grossSalary) {
  switch (true) {
    case grossSalary <= 5999:
      return 150;
    case grossSalary <= 7999:
      return 300;
    case grossSalary <= 11999:
      return 400;
    case grossSalary <= 14999:
      return 500;
    case grossSalary <= 19999:
      return 600;
    case grossSalary <= 24999:
      return 750;
    case grossSalary <= 29999:
      return 850;
    case grossSalary <= 34999:
      return 900;
    case grossSalary <= 39999:
      return 950;
    case grossSalary <= 44999:
      return 1000;
    case grossSalary <= 49999:
      return 1100;
    case grossSalary <= 59999:
      return 1200;
    case grossSalary <= 69999:
      return 1300;
    case grossSalary <= 79999:
      return 1400;
    case grossSalary <= 89999:
      return 1500;
    case grossSalary <= 99999:
      return 1600;
    default:
      return 1700;
  }
}

function calculateNSSF(grossSalary) {
  let tier1 = Math.min(grossSalary, 7000) * 0.06;
  let tier2 = Math.min(Math.max(grossSalary - 7000, 0), 29000) * 0.06;
  return tier1 + tier2;
}

function calculateNetSalary(basicSalary, benefits) {
  let grossSalary = basicSalary + benefits;
  let paye = calculatePAYE(grossSalary);
  let nhif = calculateNHIF(grossSalary);
  let nssf = calculateNSSF(grossSalary);

  let netSalary = grossSalary - paye - nhif - nssf;
  return {
    grossSalary: grossSalary,
    paye: paye,
    nhif: nhif,
    nssf: nssf,
    netSalary: netSalary,
  };
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter your basic salary: ", (basicSalaryInput) => {
  const basicSalary = parseFloat(basicSalaryInput);

  if (isNaN(basicSalary)) {
    console.log("Invalid input for basic salary. Please enter a number.");
    rl.close();
    return;
  }

  rl.question("Enter your benefits: ", (benefitsInput) => {
    const benefits = parseFloat(benefitsInput);

    if (isNaN(benefits)) {
      console.log("Invalid input for benefits. Please enter a number.");
      rl.close();
      return;
    }

    const salaryDetails = calculateNetSalary(basicSalary, benefits);
    console.log(`\nGross Salary: Ksh ${salaryDetails.grossSalary}`);
    console.log(`PAYE: Ksh ${salaryDetails.paye}`);
    console.log(`NHIF: Ksh ${salaryDetails.nhif}`);
    console.log(`NSSF: Ksh ${salaryDetails.nssf}`);
    console.log(`Net Salary: Ksh ${salaryDetails.netSalary}`);

    rl.close();
  });
});
