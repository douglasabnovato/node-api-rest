const mongoose = require('mongoose');
const Product = mongoose.model('Product');

module.exports = {
    async index(req, res){
        const products = await Product.paginate({}, { page : 1, limit : 10});
        return res.json(products);
    },   
    async show(req, res){
        const product = await Product.findById(req.params.id);
        return res.json(product);
    },
    async store(req, res){
        const product = await Product.create(req.body);
        return res.json(product);
    },
    async update(req, res){
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new : true});
        return res.json(product);
    },

    async destroy(req, res){
        const product = await Product.findOneAndRemove(req.params.id);
        return res.send();
    }

};