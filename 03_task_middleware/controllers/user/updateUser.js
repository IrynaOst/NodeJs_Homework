  const { provider } = require('../../dataBase');

module.exports = async (req, res) => {

    const {id, email, name, password} = req.body;
    const query = `UPDATE user SET email = ?, name = ?, password = ? WHERE id = ${id}`;

    await provider.promise().query(query, [email, name, password]);

    res.redirect(`users/${id}`)
};