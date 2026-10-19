// ==========================================
// 1.  IF / ELSE IF
// ==========================================
let age = 20;

if (age > 17) {
  console.log("Welcome to the casino.");
} else if (age < 0) {
  console.log("You cannot be negative years old.");
} else {
  console.log("You are not old enough to enter the site.");
}

// ==========================================
// 2. SWITCH STATEMENT
// ==========================================
let day;
day = "Thursday";

switch (day) {
  case "Monday":
    console.log("It is 07:00. Time to get up!");
    break;
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
    console.log("It is 06:00. Time to get up!");
    break;
  case "Friday":
    console.log("It is 07:30. Time to get up!");
    break;
  case "Saturday":
    console.log("It is 08:00. Time to get up!");
    break;
  case "Sunday":
    console.log("It is 08:00. Time to get up!");
    break;
}

// ==========================================
// 3. TERNARY OPERATOR
// ==========================================
let userAge = 20;
let message = userAge >= 18 ? "You are an adult." : "You are a minor.";
console.log(message);

// ==========================================
// 4. FUNCTIONS & TERNARY RETURN
// ==========================================
function isValidEmail(email) {
  return email.includes("@") ? true : false;
}

console.log("Email check:", isValidEmail("jane@example.com")); 

// ==========================================
// 5. ASSIGNMENT: isValidPassword FUNCTION
// ==========================================
function isValidPassword(password, username) {
  if (password.length < 8) {
    return false;
  }

  if (password.includes(' ')) {
    return false;
  }

  if (password.includes(username)) {
    return false;
  }

  return true;
}

console.log(isValidPassword('Alex9999', 'alex'));
console.log(isValidPassword('Alex999', 'alex'));       

console.log(isValidPassword('Alex99', 'alex')); 
console.log(isValidPassword('Alex 9999', 'alex')); 