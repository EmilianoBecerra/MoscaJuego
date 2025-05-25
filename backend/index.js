import express from 'express';
import { createServer } from 'node:http';
import cors from 'cors';
import usuariosRoutes from './routes/usuarios.js';


const app = express();
const server = createServer(app);
app.use(cors());
app.use(express.json());

app.use('/api/usuarios', usuariosRoutes);



app.listen(3000, () => {
    console.log('Server corriendo en el puerto 3000');
})