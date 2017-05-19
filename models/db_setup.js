var fs = require('fs'); //File sync.
var sql = fs.readFileSync('db_schema.sql').toString();
var db = require('../routes/database');

//Create tables in db.
db.query(sql);

db.query('INSERT INTO unittypes (type, sprite, cost, damage, health, range, speed, movementtype) VALUES (\'infantry\', \'\', 1000, 1, 1, 1, 3, \'Foot\'), (\'mech\', \'\',3000, 2, 2, 1, 2, \'Foot\'), (\'recon\', \'\', 4000, 2, 2, 1, 8, \'Foot\'), (\'tank\', \'\', 7000, 4, 4, 1, 6, \'Foot\')');
