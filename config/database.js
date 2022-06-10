// const path = require('path');

// module.exports = ({ env }) => ({
//   connection: {
//     client: 'sqlite',
//     connection: {
//       filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
//     },
//     useNullAsDefault: true,
//   },
// });
// module.exports = ({ env }) => ({
//   defaultConnection: "default",
//   connection: {
//     default: {
//       client: "postgres",
//       connection: {
//         host: env("DATABASE_HOST", "localhost"),
//         port: env.int("DATABASE_PORT", 5432),
//         database: env("DATABASE_NAME", "ecommerce-store"),
//         user: env("DATABASE_USERNAME", "postgres"),
//         password: env("DATABASE_PASSWORD", "komail"),
//       },
//     },
//   },
// });
module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "localhost"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "store"),
      user: env("DATABASE_USERNAME", "postgres"),
      password: env("DATABASE_PASSWORD", "19arid832"),
      schema: env("DATABASE_SCHEMA", "public"), // Not required
      ssl: env("DATABASE_SSL", false),
    },
    debug: false,
  },
});
