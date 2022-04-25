const Sequelize = require('sequelize');

const sequelize = new Sequelize('prueba', 'root', 'juju', {
  host: 'localhost',
  dialect: 'mariadb' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  }) 
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  class Persona extends Sequelize.Model {}
  Persona.init({
    firstName: Sequelize.STRING,
    lastName:Sequelize.STRING
  }, { sequelize, modelName: 'users' });

const Model = Sequelize.Model;
class User extends Model {}
User.init({
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING
  }
}, {
  sequelize,
  modelName: 'user'
});
/* crea usuario*/
sequelize.sync()
  .then(() => Persona.create({
    firstName: 'Juan Carlos',
    lastName: 'Rodriguez'
  }))
  .then(jane => {
    console.log(jane.toJSON());
  });
  /*creo otro*/ 
  sequelize.sync()
  .then(() => Persona.create({
    firstName: 'Roberto',
    lastName: 'Carlos'
  }))
  .then(jane => {
    console.log(jane.toJSON());
  });

//actualizo registro 1
User.update({ firstName: "Toallita" }, {
  where: {
    lastName: 'Lina'
  }
}).then(() => {
  console.log("Done");
});
//actualizo otro registro
User.update({ firstName: "Larisa" }, {
    where: {
      lastName: 'Riquelme'
    }
  }).then(() => {
    console.log("Done");
  });
