require('dotenv').config();

const express = require('express');
const { Pool } = require('pg');
const app = express();
const PORT = process.env.PORT || 3000;

const pool = new Pool({
    user: process.env.USERNAME,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT,
  });

  app.get('/api/ocorrencias', async (req, res) => {
    const client = await pool.connect();
    try {
      const result = await client.query('SELECT * FROM ocorrencia');
      res.json(result.rows);
    } finally {
      client.release();
    }
  });

  app.post('/api/ocorrencias', async (req, res) => {
    const { titulo_ocorrencia, data_ocorrencia, hora, localizacao } = req.body;
    const client = await pool.connect();
    try {
      const result = await client.query( 'INSERT INTO ocorrencia(titulo_ocorrencia, data_ocorrencia, hora, localizacao) VALUES($1, $2, $3, $4) RETURNING *',
      [titulo_ocorrencia, data_ocorrencia, hora, localizacao]);
      res.json(result.rows[0]);
    } finally {
      client.release();
    }
  });

  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });