const express = require("express");
const app = express();
const db = require("./models");

const port = 3005;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const apiRoutes = require("./routes/apiRoutes");
app.use("/api", apiRoutes);

db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log('listening on :http//localhost:' + port);
    });
});