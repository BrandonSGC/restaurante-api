import express from 'express';
import platilloRoutes from './routes/platillos.routes.js';


const app = express();

// Middlewares
app.use(express.json());

app.use(platilloRoutes);


export default app;