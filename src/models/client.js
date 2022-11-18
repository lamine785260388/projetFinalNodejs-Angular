module.exports = (sequelize, DataTypes) => {
    return sequelize.define('CLIENT', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nom_emetteur: {
        type: DataTypes.STRING,

      },
      
      prenom_emetteur: {
        type: DataTypes.STRING,
      },
      emailemetteur: {
        type: DataTypes.STRING,
      },
      phone_emetteur: {
        type: DataTypes.INTEGER,
       },
       dateNaissance_emetteur: {
        type: DataTypes.DATEONLY,
       },
       lieuNaissance_emetteur: {
        type: DataTypes.STRING,
       },
       role:{
        type:DataTypes.STRING,
       }
       

    })
  }