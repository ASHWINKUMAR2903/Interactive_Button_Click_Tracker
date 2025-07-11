# Interactive_Button_Click_Tracker
## Date: 11.07.25
## Objective:
To implement a counter using JavaScript closures and demonstrate how variables maintain their state across function calls, emphasizing the concepts of function scope and lexical closures.

## Tasks:

#### 1. Structure the HTML Layout:
Create a simple interface with:

A heading like ```<h1>ClickCounter</h1>```

A ```<button>``` labeled “Click Me”

A ```<p> or <div>``` to display the number of clicks

#### 2. Style with CSS:
Center the layout and apply padding and background color

Use large fonts for the click display

Add hover effects on the button

#### 3. Write JavaScript with Closure:
Create a function createCounter() that returns another function

The inner function should increment and return a count variable stored in the outer function’s scope

Use this closure to track how many times the button has been clicked

Update the DOM each time the button is clicked using the closure function
## HTML Code:
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>ClickCounter</title>
  <link rel="stylesheet" href="style.css" />
  <script src="script.js" defer></script>
</head>
<body>
  <div class="container">
    <h1>ClickCounter</h1>
    <button id="clickBtn">Click Me</button>
    <p id="countDisplay">Clicks: 0</p>
  </div>
</body>
</html>
```
## CSS Code:
```
body {
  font-family: Arial, sans-serif;
  background-color: #8aff6f;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.container {
  text-align: center;
  background: white;
  padding: 80px;
  border-radius: 12px;
  box-shadow: 0 0 22px rgba(0,0,0,0.4);
}

h1 {
  color: #1976d2;
  margin-bottom: 20px;
}

button {
  padding: 15px 30px;
  font-size: 18px;
  background-color: #42a5f5;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

button:hover {
  background-color: #1e88e5;
}

#countDisplay {
  margin-top: 20px;
  font-size: 24px;
  color: #333;
}
```
## JavaScript Code:
```
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
```
## Output:
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/412f639c-1c00-44a3-bc61-fdfa90f19065" />

## Result:
A mini module using JavaScript closure and scope is successfully implemented to build an interactive button click tracker that updates in real time without exposing internal variables.
