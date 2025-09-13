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

// Customer Details
customers[1].purchases.push("SHOES");
    customers.forEach(customer => {
        console.log(`Name: ${customer.name}`);
        console.log(`Email: ${customer.email}`);
    console.log(`Total Purchases: ${customer.purchases.length}`);
    console.log('-------------------');
    });

