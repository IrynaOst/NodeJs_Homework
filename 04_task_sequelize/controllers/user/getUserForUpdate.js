module.exports =  (req, res) => {
    try {
        const user = req.user;

        res.render(`updateUser`, user);
    } catch (e) {
        res.json(e.message);
    }
    
}