const { app } = require('./app');
const { SERVER_PORT } = require('./environnement');

const PORT = SERVER_PORT || 3000;

app.listen(PORT, () => console.log(`server listening on port ${PORT}`));
