const seatsInput = document.getElementById("seats");
const busType = document.getElementById("busType");

let basePrice = 100; // Default for normal booking

// Check if popular route selected
window.onload = function () {
  const from = localStorage.getItem("fromCity");
  const to = localStorage.getItem("toCity");
  const price = localStorage.getItem("basePrice");

  if (from && to && price) {
    document.getElementById("from").value = from;
    document.getElementById("to").value = to;
    basePrice = parseInt(price);

    // Clear localStorage so next normal booking works normally
    localStorage.removeItem("fromCity");
    localStorage.removeItem("toCity");
    localStorage.removeItem("basePrice");
  }
};

seatsInput.addEventListener("input", calculatePrice);
busType.addEventListener("change", calculatePrice);

function calculatePrice() {
  let seats = seatsInput.value || 0;
  let type = busType.value;

  let price = seats * basePrice;

  if (type === "Non-AC Seater") price *= 1.0;
  if (type === "AC Seater") price *= 1.5;
  if (type === "Non-AC Sleeper") price *= 1.8;
  if (type === "AC Sleeper") price *= 2.2;
  if (type === "Deluxe Non-AC") price *= 1.2;
  if (type === "Deluxe AC") price *= 1.7;


  document.getElementById("price").innerText = price;
  document.getElementById("remaining").innerText = 40 - seats;
}