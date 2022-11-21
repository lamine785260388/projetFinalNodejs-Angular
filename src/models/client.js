module.exports = (sequelize, DataTypes) => {
    return sequelize.define('CLIENT', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nom_client: {
        type: DataTypes.STRING,

      },
      
      prenom_client: {
        type: DataTypes.STRING,
      },
      emailclient: {
        type: DataTypes.STRING,
      },
      phone_client: {
        type: DataTypes.INTEGER,
       },
       dateNaissance_client: {
        type: DataTypes.DATEONLY,
       },
       lieuNaissance_client: {
        type: DataTypes.STRING,
       },
       role:{
        type:DataTypes.STRING,
       }
       

    })
  }