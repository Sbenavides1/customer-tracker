// Coding Challenge 03a

// Customer Records
let customers = [
    {
        name: "Maria Gomzalez",
        email: "Maria.Gonzalez@gmail",
        purchases: ["HOODIE", "SHIRT", "SHOES"]
    },
    {
        name: "Ashley Wilson", 
        email: "Ashley.Wilson@gmail", 
        purchases: ["HOODIE", "SHIRT"]
    },
    {
        name: "John Martinez", 
        email: "John.Martinez@gmail", 
        purchases: ["HOODIE"]
    }
];
//Create new customer
customers.push({
    name: "Sofia Benavides", 
    email: "Sofia.Benavides@gmail", 
    purchases: ["HOODIE", "SHIRT", "SHOES", "HAT"]
});
// Add/ Remove Email and purchases
customers[0].email = "Maria.Gonzalez@gmail.com"
customers[1].purchases.push("SHOES");
