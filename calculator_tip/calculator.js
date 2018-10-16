const tipCalculation = () => {
  const total = document.getElementById("userInput").value;
  const service = document.getElementById("serviceQuality").value;

  if (total > 0 && service > 0) {
    const totalTip = total * service;
    document.getElementById("showOutput").innerHTML = totalTip;
  }
};

document.getElementById("calculate").onclick = () => {
  tipCalculation();
};
