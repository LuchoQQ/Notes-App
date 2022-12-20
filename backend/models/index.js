const { Sequelize, DataTypes } = require("sequelize");

require("dotenv").config();
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    { host: "localhost", dialect: "mysql" }
);

sequelize
    .authenticate()
    .then(() => {
        console.log("Connection has been established successfully.");
    })
    .catch((err) => {
        console.error("Unable to connect to the database:", err);
    });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.category = require("./Category.js")(sequelize, DataTypes);
db.note = require("./Note.js")(sequelize, DataTypes);

/* db.sequelize.query('SET FOREIGN_KEY_CHECKS = 0')
.then(function(){
    return sequelize.sync({ force: true });
})
.then(function(){
    return sequelize.query('SET FOREIGN_KEY_CHECKS = 1')
})
.then(function(){
    console.log('Database synchronised.');
}, function(err){
    console.log(err);
}); */

db.sequelize.sync({
    force: false,
});

db.note.belongsToMany(db.category, {
    through: "note_category",
    as: "categories",
    foreignKey: "noteId",
});

module.exports = db;
