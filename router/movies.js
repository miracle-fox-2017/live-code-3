const express =require('express')
const router = express.Router()

router.get('/movies',(req,res)=>{
  res.send('Halaman Movies')
})
module.exports = router
