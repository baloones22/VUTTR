module.exports = {
  dialect:'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'traine',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
}
