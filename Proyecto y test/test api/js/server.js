const express = require('express');
const fetch = require('node-fetch');
const fetch = require('node-fetch');

const cors = require('cors');

const app = express();
app.use(cors());

app.get('/producto/:barcode', async (req, res) => {
  const barcode = req.params.barcode;
  console.log('Código de barras recibido:', barcode);

  const url = `https://world.openfoodfacts.org/api/v0/product/${barcode}.json`;

  try {
    const response = await fetch(url);
    console.log('Respuesta de Open Food Facts:', response.status);

    if (!response.ok) {
      console.error('Error en respuesta de Open Food Facts:', response.status);
      return res.status(500).json({ error: 'Error en la API de Open Food Facts' });
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error al conectar con la API:', error);
    res.status(500).json({ error: 'Error al conectar con la API' });
  }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor proxy funcionando en http://localhost:${PORT}`));
