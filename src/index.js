const { ExpressServer } = require("./server");

const PORT = process.env.PORT || 3000;
const app = ExpressServer();
app.listen(PORT, () => {
    console.log("Server running on port", PORT);
});