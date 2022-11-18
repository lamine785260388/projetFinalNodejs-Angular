const { Sequelize, DataTypes } = require('sequelize')
const UserModel=require('../models/user')
const bcrypt=require('bcrypt')
const TransactionModel=require('../models/transaction')
const PaiementModel=require('../models/paiement')
const ClientModel=require('../models/client')
const DeviseModel=require('../models/devise')
const paysModel=require('../models/Pays')
const agenceModel=require('../models/agence')
const SousAgenceModel=require('../models/SousAgence')
const BalanceModel=require('../models/balance')
const sequelize = new Sequelize('nodejsangular', 'root', '', {
  host: 'localhost',
  dialect: 'mariadb',
  dialectOptions: {
    timezone: 'Etc/GMT-2',
  },
  logging: false
})
  
const User=UserModel(sequelize,DataTypes)
const Transaction=TransactionModel(sequelize,DataTypes)
const Paiement=PaiementModel(sequelize,DataTypes)
const Client=ClientModel(sequelize,DataTypes)
  const Devise=DeviseModel(sequelize,DataTypes)
  const Pays=paysModel(sequelize,DataTypes)
  const Agence=agenceModel(sequelize,DataTypes)
  const SousAgence=SousAgenceModel(sequelize,DataTypes)
  const Balance=BalanceModel(sequelize,DataTypes)
const initDb = () => {
  return sequelize.sync({force: true}).then(_ => {
  
    bcrypt.hash('lamine',10)
    .then(hash=>User.create({
      username:'lamine',
     
      password:hash
    })
    .then(user=>console.log(user.toJSON()))

    )
   
    console.log('La base de donnée a bien été initialisée !')
  })
}


  
module.exports = { 
  initDb,User,Transaction,Paiement,Client,Devise,Agence,Pays,SousAgence
}