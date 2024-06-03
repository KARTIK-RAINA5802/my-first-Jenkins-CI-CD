const express = require("express")

const app = express();

// Define a route
app.get('/', (req, res) => {
    res.send('Hello, Kartik!!, You made it..');
});

app.listen(3000, () => {
    console.log(`Server is running on http://localhost:3000`);
});
