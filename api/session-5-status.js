const RELEASE_AT = '2026-09-25T19:00:00-05:00';

module.exports = (request, response) => {
  const now = new Date();
  const released = now.getTime() >= Date.parse(RELEASE_AT);
  response.setHeader('Cache-Control', 'no-store, max-age=0');
  response.setHeader('Content-Type', 'application/json; charset=utf-8');
  response.status(200).json({
    released,
    serverNow: now.toISOString(),
    releaseAt: RELEASE_AT,
    timezone: 'America/Lima'
  });
};
