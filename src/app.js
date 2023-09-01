const express = require("express");
const app = express();
const PORT = 8080;

// Array de productos
const productos = [
    {
        id: "Producto 1",
        descripción: "Descripción del producto 1",
        precio: 10.000,
        imagen: "image1.jpg",
        codigo: "P1",
        stock: 50,
    },
    {
        id: "Producto 2",
        descripción: "Descripción del producto 2",
        precio: 20.000,
        imagen: "image2.jpg",
        codigo: "P2",
        stock: 30,
    },
    {
        id: "Producto 3",
        descripción: "Descripción del producto 3",
        precio: 35.000,
        imagen: "image3.jpg",
        codigo: "P3",
        stock: 15,
    },
];

app.get("/bienvenida", (req, res) => {
    const htmlResponse = `<p style="color:blue;">¡Bienvenido!</p>`;
    res.send(htmlResponse);
});

// Ruta para obtener todos los productos
app.get("/productos", (req, res) => {
    res.json(productos);
});

// Ruta para filtrar productos por código
app.get("/productos/codigo/:codigo", (req, res) => {
    const { codigo } = req.params;
    const productosFiltrados = productos.filter((producto) => producto.codigo === codigo);
    res.json(productosFiltrados);
});

// Ruta para filtrar productos por precio máximo
app.get("/productos/precio/:precioMaximo", (req, res) => {
    const { precioMaximo } = req.params;
    const productosFiltrados = productos.filter((producto) => producto.precio <= parseInt(precioMaximo));
    res.json(productosFiltrados);
});

// Ruta para obtener un producto por su ID
app.get("/productos/:id", (req, res) => {
    const { id } = req.params;
    const producto = productos.find((producto) => producto.id === parseInt(id));
    if (producto) {
        res.json(producto);
    } else {
        res.status(404).json({ mensaje: "Producto no encontrado" });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en ${PORT}`);
});
