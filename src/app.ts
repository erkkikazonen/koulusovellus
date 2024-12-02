import express from 'express';

import cors from 'cors';
import opiskelijaRoutes from './routes/opiskelijaRoutes';
import opettajaRoutes from './routes/opettajaRoutes';
import kurssiRoutes from './routes/kurssiRoutes';
import arviointiRoutes from './routes/arviointiRoutes';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use('/api/opiskelijat', opiskelijaRoutes);
app.use('/api/opettajat', opettajaRoutes);
app.use('/api/kurssit', kurssiRoutes);
app.use('/api/arvioinnit', arviointiRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
    
export default app;