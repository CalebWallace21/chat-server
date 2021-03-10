const express = require("express");
const messageC = require("./controllers/messages_controller")

const app = express();

app.use(express.json());
app.use(express.static(__dirname + '/../public/build'));

app.get("/api/messages", messageC.read);
app.post("/api/messages", messageC.create);
app.put("/api/messages/:id", messageC.update);
app.delete("/api/messages/:id", messageC.delete);

app.listen(3001, () => console.log('Landing in port 3001'))