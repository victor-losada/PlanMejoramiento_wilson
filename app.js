import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'; 
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs'

import loginUser from './src/routes/validarRoute.js';
import clientes from './src/routes/clienteRouter.js';
import producto from './src/routes/productosRouter.js';
import facturas from './src/routes/facturaRoute.js';
import listarFac from './src/routes/infoFacturRouter.js';
import detaproduct from './src/routes/detalleProduRouter.js';
import masVendidos from './src/routes/cincoProdRouter.js';
import venVendedor from './src/routes/vendidosVendedorRouter.js';

const app = express();

app.use(bodyParser.json());
app.use(cors()); 

app.use('/ingreso', loginUser);
app.use('/cliente', clientes);
app.use('/productos', producto);
app.use('/factura', facturas);
app.use('/listfac', listarFac);
app.use('/detaproducto', detaproduct);
app.use('/productoscinco', masVendidos);
app.use('/vendedor', venVendedor);

const swaggerDocument = YAML.load('./openapi.yaml');
app.use('/documento', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

