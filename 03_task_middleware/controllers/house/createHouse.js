const {provider} = require('../../dataBase');

module.exports = async (req, res) => {
    const {square, city, price} = req.body;
    const query = `INSERT INTO house(square, city, price) VALUES (?, ?, ?)`;
    
    let results = await provider.promise().query(query, [square, city, price]);
    let houseId = results[0].insertId;

    res.redirect(`houses/${houseId}`);
}