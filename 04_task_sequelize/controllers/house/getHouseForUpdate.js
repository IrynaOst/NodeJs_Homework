module.exports =  (req, res) => {
    try {
        const house = req.house;

        res.render(`updateHouse`, house);
    } catch (e) {
        res.json(e.message);
    }
    
}