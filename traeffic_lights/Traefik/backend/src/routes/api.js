const express = require('express');
const { getTrafficData } = require('../controllers/traffic');

const setApiRoutes = (app) => {
    const router = express.Router();

    router.get('/traffic', getTrafficData);

    app.use('/api', router);
};

module.exports = setApiRoutes;