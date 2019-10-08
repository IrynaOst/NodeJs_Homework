module.exports = (req, res) => {
    const body = req.body;
    const houseId = houses.length + 1;
    body["houseId"] = houseId;
    houses.push(body);
    
    console.log(body);
    res.redirect(`/houses/${houseId}`);
}