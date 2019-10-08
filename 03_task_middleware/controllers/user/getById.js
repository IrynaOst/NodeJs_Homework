module.exports = (req, res) => {
    const user = req.user;
    
    res.render('profile', user);
}