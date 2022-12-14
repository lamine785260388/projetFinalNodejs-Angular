const { Client } = require('../../db/sequelize')
const bcrypt=require('bcrypt')
  
module.exports = (app) => {
  app.post('/api/InsertClient', async (req, res) => {
    const client={
      nom_client:req.body.nom_client,
      prenom_client:req.body.prenom_client,
      emailclient:req.body.emailclient,
      phone_client:req.body.phone_client,
      dateNaissance_client:req.body.dateNaissance_client,
      lieuNaissance_client:req.body.lieuNaissance_client,
      role:req.body.role,
    }

  
    const [user, created] =  await Client.findOrCreate({
      where: { id: req.body.id },
      defaults: {
        id:req.body.id,
        nom_client:req.body.nom_client,
       prenom_client:req.body.prenom_client,
       phone:req.body.phone
      }
    });
    if(created){
      return res.json(user.id);
    }
    else{
      return res.json(user.id)
    }
    
   
   
  })
}