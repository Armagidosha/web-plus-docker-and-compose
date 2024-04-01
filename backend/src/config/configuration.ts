export default () => ({
  db: {
    type: process.env.DB_TYPE,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    name: process.env.POSTGRES_DB,
  },
  jwt: {
    secret: process.env.JWTSECRET,
    ttl: process.env.TTL + "d",
  },
  host: {
    port: parseInt(process.env.POSTGRES_PORT) || 5432,
    hostname: process.env.POSTGRES_HOST || "127.0.0.1",
  },
  mode: process.env.MODE || "dev",
});
