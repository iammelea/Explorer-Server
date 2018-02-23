const ExplorerServer = require('../ExplorerServer');

var explorerServer = new ExplorerServer(false);

explorerServer.cleanDatabase((error) => {

  if (error) {
    return console.error(error);
  }

  console.log('ExplorerServer> Successfully cleaned database.');
});
