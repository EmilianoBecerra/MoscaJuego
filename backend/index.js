import express from 'express';
import { createServer } from 'node:http';
import cors from 'cors';
import usuarioRoutes from './routes/usuarios.js';
import jugadoresRoutes from './routes/jugadores.js'
import mesasRoutes from './routes/mesas.js';
import partidaRoutes from "./routes/partida.js"

const app = express();
const server = createServer(app);
app.use(cors());
app.use(express.json());

app.use('/api/usuarios', usuarioRoutes);
app.use('/api/mesas', mesasRoutes);
app.use('/api/jugadores', jugadoresRoutes);
app.use("/api/partida", partidaRoutes);


app.listen(3000, () => {
    console.log('Server corriendo en el puerto 3000');
})