const {provider} = require('../../dataBase');

module.exports = async (req, res) => {
    try {
        const {name, email, password} = req.body;
        const query = `INSERT INTO user(name, email, password) VALUES (?, ?, ?)`;
        
        const results = await provider.promise().query(query, [name, email, password]);
        const userId = results[0].insertId;

        res.redirect(`users/${userId}`);
    } catch (e) {
        res.json(e.message);
    }
    
}