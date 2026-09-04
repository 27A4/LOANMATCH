
function formatMoney(value) {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    maximumFractionDigits: 0
  }).format(value);
}

function calculateLoan() {
  const amount = Number(document.getElementById("amount").value);
  const annualRate = Number(document.getElementById("rate").value);
  const months = Number(document.getElementById("months").value);

  if (amount <= 0 || months <= 0 || annualRate < 0) {
    alert("Vui lòng nhập thông tin hợp lệ.");
    return;
  }

  const monthlyRate = annualRate / 100 / 12;
  let monthlyPayment;

  if (monthlyRate === 0) {
    monthlyPayment = amount / months;
  } else {
    monthlyPayment = amount * monthlyRate *
      Math.pow(1 + monthlyRate, months) /
      (Math.pow(1 + monthlyRate, months) - 1);
  }

  const total = monthlyPayment * months;
  const interest = total - amount;

  document.getElementById("monthly").textContent = formatMoney(monthlyPayment);
  document.getElementById("interest").textContent = formatMoney(interest);
  document.getElementById("total").textContent = formatMoney(total);
}

document.getElementById("calculateBtn").addEventListener("click", calculateLoan);
calculateLoan();
