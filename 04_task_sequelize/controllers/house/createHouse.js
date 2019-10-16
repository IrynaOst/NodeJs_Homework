const {provider} = require('../../dataBase');

module.exports = async (req, res) => {
    try {
        const {square, city, price} = req.body;
        const query = `INSERT INTO house(square, city, price) VALUES (?, ?, ?)`;
        
        const results = await provider.promise().query(query, [square, city, price]);
        const houseId = results[0].insertId;

        res.redirect(`houses/${houseId}`);
    } catch (e) {
        res.json(e.message);
    }
    
}