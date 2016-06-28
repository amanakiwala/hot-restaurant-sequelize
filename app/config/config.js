var Sequelize = require("sequelize");

// Lists out connection options
var source = {

    localhost: {
        port: 3306,
        host: 'localhost',
        user: 'root',
        database: "hottables"
    },
    jawsdb: {
        port: "Hot-restaurant",
        host: 'q3vtafztappqbpzn.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'sdu60csfge0zz6c9',
        password:'dmren5fc6lyt6mr0',
        database: "k69pxx78tkfuijkg"


    },
    


}

// Selects a connection (can be changed quickly as needed)
var selectedSource = source.jawsdb;

// Creates mySQL connection using Sequelize
var sequelize = new Sequelize(selectedSource.database, selectedSource.user, selectedSource.password, {
  host: selectedSource.host,
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },

});

// Exports the connection for other files to use
module.exports = sequelize;