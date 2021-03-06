// Update with your config settings.

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/gtd.sqlite3'
    },
    useNullAsDefault: true,
    migrations: {
      tableName: 'dbmigrations'
    },
    seeds: {
      directory: './database/seeds'
    }
  }
}
