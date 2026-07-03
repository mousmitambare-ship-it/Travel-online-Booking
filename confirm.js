const params = new URLSearchParams(window.location.search);

document.getElementById("name").innerText = params.get("name");
document.getElementById("mobile").innerText = params.get("mobile");
document.getElementById("email").innerText = params.get("email");
document.getElementById("from").innerText = params.get("from");
document.getElementById("to").innerText = params.get("to");
document.getElementById("busType").innerText = params.get("busType");
document.getElementById("seats").innerText = params.get("seats");
document.getElementById("payment").innerText = params.get("payment");