function refreshRating() {
  let ratings = ["⭐⭐⭐⭐⭐", "⭐⭐⭐⭐☆", "⭐⭐⭐☆☆"];
  let random = Math.floor(Math.random() * ratings.length);

  document.getElementById("stars").innerText = ratings[random];
}