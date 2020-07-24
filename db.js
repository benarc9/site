var mysql = require('mysql');

class DatabaseConnection{

    constructor(){
        this.connection = mysql.createConnection({
            host: 'localHost',
            user: 'ben',
            password: '2'
        });
    }

    connect(){
        this.connection.connect((err) => {
            if (err) throw err;
            console.log("Connected to database successfully!");
        });
    }
}

module.exports = DatabaseConnection;