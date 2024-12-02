import sql from 'mssql';

const config: sql.config = {
    server: 'EKI',
    database: 'Koulu',
    options: {
        encrypt: true,
        trustServerCertificate: true
    },
    authentication: {
        type: 'ntlm',  // NTLM is used for Windows Authentication
        options: {
            domain: 'EKI',  // Ensure the correct domain is provided
            userName: 'erkki',  // Windows username
            password: '',  // Leave empty for Integrated Authentication
        }
    }
};
async function connectToDatabase() {
    try {
        // Create a connection pool
        const pool = await sql.connect(config);
        console.log('Connected to the SQL Server successfully!');
        
        // Example query
        const result = await pool.request().query('SELECT * FROM opiskelija;');
        console.log(result);

        // Close the pool connection
        await pool.close();
    } catch (err) {
        console.error('Error connecting to the database:', err);
    }
}

connectToDatabase();
