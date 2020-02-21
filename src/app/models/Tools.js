const Sequelize = require('sequelize');
const { Model } = require('sequelize')

class Tools extends Model {
  static init(sequelize) {
    super.init({
      title: Sequelize.STRING,
      link: Sequelize.STRING,
      description: Sequelize.STRING,
      tags: Sequelize.ARRAY(Sequelize.RANGE(Sequelize.STRING)),
    },
      {
        sequelize,
      }
    );
      return this;
  }
}
module.exports = Tools;
