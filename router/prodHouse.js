const express =require('express')
const router = express.Router()

router.get('/prodhouse',(req,res)=>{
  res.send('Halaman prod.House')
})

module.exports = router
