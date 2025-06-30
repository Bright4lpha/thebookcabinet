const express = require("express");
const application = new express();
const PORT = 4000;
application.get("/", (req, res) => {
    res.send(
        `Hello from The Book Cabinet ! Your Node Express server is running on port ${PORT}`
    );
});
application.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
