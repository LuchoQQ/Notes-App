const app = require("./app");
const { sequelize } = require("./models/index");

const main = async () => {
    try {
        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
    } catch (error) {
        console.log("Unable to connect to the database:", error);
    }
};

main();
