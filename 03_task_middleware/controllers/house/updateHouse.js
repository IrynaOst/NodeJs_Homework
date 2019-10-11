const { provider } = require('../../dataBase');

module.exports = async (req, res) => {
    const {id, square, city, price} = req.body;
    const query = `UPDATE house SET square = ?, city = ?, price = ? WHERE id = ${id}`;

    await provider.promise().query(query, [square, city, price]);

    res.redirect(`/houses/${id}`);
}