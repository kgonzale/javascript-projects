const totalTip = () => {
  const input = document.getElementById("userInput").value;
  const service = document.getElementById("serviceQuality").value;

  if (input > 0 && service > 0) {
    const tipTotal = input * service;
    document.getElementById("calculation").innerHTML = tipTotal;
  }
};

document.getElementById("calculate").onclick = () => {
  totalTip();
};
