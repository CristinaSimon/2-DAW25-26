import express from 'express';
import cors from 'cors';
import { PORT } from './config.js';

// Importación de rutas individuales
import { categoriasRoutes } from './routes/categorias.route.js';
import { marcasRoutes } from './routes/marcas.route.js';
import { clientesRoutes } from './routes/clientes.route.js';
import { reservasRoutes } from './routes/reservas.route.js';
import { vehiculosRoutes } from './routes/vehiculos.route.js';

const app = express();

const corsOption = {
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
    credentials: true
};
app.use(cors(corsOption));
app.use(express.json());

// Registro de rutas de la API
app.use('/api', categoriasRoutes);
app.use('/api', marcasRoutes);
app.use('/api', clientesRoutes);
app.use('/api', reservasRoutes);
app.use('/api', vehiculosRoutes);

app.get('/', (req, res) => {
    res.json({
        message: 'API REST Alquiler de Vehículos - Examen RA7 AJAX',
    });
});

app.use((req, res) => {
    res.status(404).json({ message: 'Ruta no encontrada' });
});


app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:4000`);
});
