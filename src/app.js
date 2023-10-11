import express from 'express';
import platilloRoutes from './routes/platillos.routes.js';
import categoriaRoutes from './routes/categorias.routes.js'; 
import admplatilloroutes from './routes/adm.platillo.routes.js'; 
const app = express();

// Middlewares
app.use(express.json());

// Agregar rutas
app.use(platilloRoutes);
app.use(categoriaRoutes); 
app.use(admplatilloroutes); 

export default app;
