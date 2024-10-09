import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import opiskelijaRoutes from './src/routes/opiskelijaRoutes';
import opettajaRoutes from './src/routes/opettajaRoutes';
import kurssiRoutes from './src/routes/kurssiRoutes';
import arviointiRoutes from './src/routes/arviointiRoutes';

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/opiskelijat', opiskelijaRoutes);
app.use('/api/opettajat', opettajaRoutes);
app.use('/api/kurssit', kurssiRoutes);
app.use('/api/arvioinnit', arviointiRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
    
export default app;