// Ask user for full name
let fullName = prompt("Enter your full name:").trim();

// Split into parts
let parts = fullName.split(/\s+/);

// Extract first & last
let firstName = parts[0];
let lastName = parts[parts.length - 1];

// Create initials from all parts
let initials = parts.map(p => p[0].toUpperCase()).join("");

// Output
console.log("First Name: " + firstName);
console.log("Last Name: " + lastName);
console.log("Initials: " + initials);
