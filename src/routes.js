const express = require('express');
const routes = express.Router();
//const ProductController = require('./controllers/ProductController')

//primeira rota
routes.get("/", (req, res) => {
    /*Product.create({
        title: 'React Native',
        description: 'Build native apps with React',
        url: 'http://github.com/facebook/react-native'
    });
*/
    return res.send("Hello Rocketseat");
});


//routes.get('/products', ProductController.index);
//routes.post('products', ProductController.store);

module.exports = routes;