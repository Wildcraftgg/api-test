const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Initialize the counter value
let counter = 1000000; // Starting value for the global counter

// Route to get the current counter value
app.get("/getCounter", (req, res) => {
    res.json({ counter });
});

// Route to decrease the counter
app.post("/decreaseCounter", (req, res) => {
    const { amount } = req.body;
    if (typeof amount === "number" && amount > 0) {
        counter -= amount; // Decrease the counter
        res.json({ counter }); // Send updated counter value
    } else {
        res.status(400).json({ error: "Invalid amount" });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
