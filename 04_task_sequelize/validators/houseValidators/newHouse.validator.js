module.exports = houseObj => {
    const {square, city, price} = houseObj;

    if (!square || !city || !price) {
        throw new Error('House object is not valid');
    }
}