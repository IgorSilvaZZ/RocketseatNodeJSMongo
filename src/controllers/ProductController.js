const moongose = require('mongoose');

const Product = moongose.model('Product');

module.exports = {
    async index(req, res) {
        //Listar todos os produtos dentro de Products(tabela)
        //Só vai continuar a aplicação quando tiver todos os dados(await)
        const products = await Product.find();
        
        
        return res.json(products);
    },

    async show(req, res){
        const product = await Product.findById(req.params.id);

        return res.json(product);
    },

    async createProduct(req, res) {
        //Criando Produto
        const product = await Product.create(req.body);

        return res.json(product);
    },

    async update(req, res){
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(product);
    },

    async destroy(req, res){
        await Product.findByIdAndRemove(req.params.id);

        return res.send();
    }
};