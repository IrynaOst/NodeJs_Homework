const {provider} = require('../../dataBase');

module.exports = async (req, res) => {
    const {name, email, password} = req.body;
    const query = `INSERT INTO user(name, email, password) VALUES (?, ?, ?)`;
    
    let results = await provider.promise().query(query, [name, email, password]);
    let userId = results[0].insertId;

    res.redirect(`users/${userId}`);
}