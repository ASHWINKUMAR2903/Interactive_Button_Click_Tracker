function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
const counter = createCounter();

const btn = document.getElementById("clickBtn");
const display = document.getElementById("countDisplay");

btn.addEventListener("click", function () {
  const newCount = counter();
  display.textContent = `Clicks: ${newCount}`;
});
