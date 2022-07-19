const allowedCors = [
  'https://project-by-tvmarko.nomoredomains.xyz',
  'http://project-by-tvmarko.nomoredomains.xyz',
  'https://api.project-by-tvmarko.nomoredomains.xyz',
  'http://api.project-by-tvmarko.nomoredomains.xyz',
  'http://localhost:3001',
];

module.exports = ((req, res, next) => {
  const { origin } = req.headers;
  const { method } = req;

  const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';
  const requestHeaders = req.headers['access-control-request-headers'];

  if (allowedCors.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
  }
  if (method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
    res.header('Access-Control-Allow-Headers', requestHeaders);
    return res.end();
  }

  return next();
});
