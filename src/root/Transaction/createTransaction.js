const { Transaction } = require('../../db/sequelize')

  
module.exports = (app) => {
  app.post('/api/InsertTransaction', (req, res) => {

  
   Transaction.create({
    montant_a_recevoir:+req.body.montant_a_recevoir,
    montantTotal:+req.body.montantTotal,
    status:req.body.status,
    paysDest:req.body.paysDest,
    frais:+req.body.frais,
    paysOrigine:req.body.paysOrigine,
    DeviceDest:req.body.DeviceDest,
    DeviceOrigine:req.body.DeviceOrigine,
    DEVISEId:+req.body.DEVISEId,
    CLIENTId:+req.body.CLIENTId,
    UserId:+req.body.UserId,
    
  

    })
    return res.json('issertion Transaction success')
    
   
   
  })
}