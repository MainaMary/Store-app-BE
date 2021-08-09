import express from 'express';
import routes from './modules'
const app = express();

app.use(
  express.urlencoded({
    limit: '50mb',
    extended: true,
  }),
);

app.use(express.json());

routes(app)

// catch all routers
app.use('*', (req, res) =>
  res.status(404).json({
    message: 'Not Found. Use /api/v1 to access the api',
  }),
);

export default app;