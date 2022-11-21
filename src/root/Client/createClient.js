const { Client } = require('../../db/sequelize')
const bcrypt=require('bcrypt')
  
module.exports = (app) => {
  app.post('/api/InsertClient', (req, res) => {

  
   Client.create({
    nom_client:req.body.nom_client,
    prenom_client:req.body.prenom_client,
    emailclient:req.body.emailclient,
    phone_client:req.body.phone_client,
    dateNaissance_client:req.body.dateNaissance_client,
    lieuNaissance_client:req.body.lieuNaissance_client,
    role:req.body.role,

    })
    return res.json('issertion client success')
    
   
   
  })
}