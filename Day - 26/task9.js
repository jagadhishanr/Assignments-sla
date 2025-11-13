function greet(name, greeting = "Hello") {
  return `${greeting}, ${name}!`;
}

console.log(greet("Alice"));         
console.log(greet("Bob", "Welcome"));
