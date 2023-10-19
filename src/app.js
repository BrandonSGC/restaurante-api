import express from 'express';
import platilloRoutes from './routes/platillos.routes.js';
import categoriaRoutes from './routes/categorias.routes.js';
import categoriasconplatillosRoutes from './routes/PlatillosconCategoria.routes.js'
import cors from 'cors'; // Importa el módulo 'cors'

const app = express();

// Middleware para habilitar CORS
app.use(cors());
// Middlewares
app.use(express.json());

// Agregar rutas
app.use(platilloRoutes);
app.use(categoriaRoutes);
app.use(categoriasconplatillosRoutes);

export default app;