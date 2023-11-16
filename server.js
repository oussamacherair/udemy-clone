
import {createProxyMiddleware} from 'http-proxy-middleware'
import express from 'express';
import cors from 'cors'
const app = express ();
const corsOptions = {
    origin: 'http://localhost:5173', // Replace with your React app's URL
    optionsSuccessStatus: 200, // Some legacy browsers (IE11) may not understand a 204 status
  };
app.use(cors(corsOptions))
app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://www.udemy.com/api-2.0',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/api-2.0',
      },
      headers: {
        'Access-Control-Allow-Origin': '*', // Set the appropriate CORS headers
        // Add any other headers as needed
      },
    })
  );

const port =3000 ; // Choose a port that is different from your Vite dev server
app.listen(port, () => {
  console.log(`Proxy server is running on port ${port}`);
});