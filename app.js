const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json({
        status: "success",
        message: "Welcome to my DevSecOps CI/CD Pipeline!",
        version: "1.0.0"
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
