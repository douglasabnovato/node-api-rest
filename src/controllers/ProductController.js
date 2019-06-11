const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    async index(req, res){
        const products = await Product.find();//executa a próxima linha após esse retorno

        return res.json(products);
    }
}