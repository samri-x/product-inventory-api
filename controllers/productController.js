const products = require("../data/products");

const getAllProducts = (req, res) => {
    res.json(products);
};

const getProductById = (req, res) => {
    const id = Number(req.params.id);

    const product = products.find((item) => item.id === id);

    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    res.json(product);
};

const createProduct = (req, res) => {
    const { name, price, quantity, category } = req.body;

    if (
        !name ||
        typeof price !== "number" ||
        price < 0 ||
        typeof quantity !== "number" ||
        quantity < 0 ||
        !category
    ) {
        return res.status(400).json({
            message: "Invalid product data"
        });
    }

    const newProduct = {
        id: products.length + 1,
        name,
        price,
        quantity,
        category
    };

    products.push(newProduct);

    res.status(201).json(newProduct);
};

const updateProduct = (req, res) => {
    const id = Number(req.params.id);

    const product = products.find((item) => item.id === id);

    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    const { name, price, quantity, category } = req.body;

    if (
        !name ||
        typeof price !== "number" ||
        price < 0 ||
        typeof quantity !== "number" ||
        quantity < 0 ||
        !category
    ) {
        return res.status(400).json({
            message: "Invalid product data"
        });
    }

    product.name = name;
    product.price = price;
    product.quantity = quantity;
    product.category = category;

    res.status(200).json(product);
};

const deleteProduct = (req, res) => {
    const id = Number(req.params.id);

    const productIndex = products.findIndex((item) => item.id === id);

    if (productIndex === -1) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    products.splice(productIndex, 1);

    res.json({
        message: "Product deleted successfully"
    });
};

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};