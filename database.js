const { Client } = require('pg');

const client = new Client({
    user: 'gen_user',
    host: '81.200.153.65',
    database: 'default_db',
    password: 'na:$rE,ZY3SA_i',
    port: 5432,
});
client.connect();
module.exports = client;
