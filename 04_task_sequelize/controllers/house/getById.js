module.exports = (req, res) => {
    const house = req.house;
    
    res.render('houseProfile', house);
}