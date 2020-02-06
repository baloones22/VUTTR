module.exports = {
  dialect:'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'tools',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
}
