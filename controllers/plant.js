const express = require('express');
//Creating a Router (Collection of Routes)
const router = express.Router();
const fetch = require('node-fetch');
require('dotenv').config();

router.get('/', (req,res)=> {
  (async () => {
    const response = await fetch(`https://trefle.io/api/v1/plants?token=${process.env.API_KEY}`);
    const json = await response.json();
    console.log(json.length)
      res.send(json);
  })()


})
// router.get('/kingdoms', (req,res)=> {
//   (async () => {
//     const response = await fetch(`https://trefle.io/api/v1/kingdoms?token=${process.env.API_KEY}`);
//     const json = await response.json();
//       res.send(json);
//   })()
//
//
// })
router.get('/:pageNumber', (req,res)=> {
  (async () => {
    const response = await fetch(`https://trefle.io/api/v1/plants?page=${req.params.pageNumber}&&token=${process.env.API_KEY}`);
    const json = await response.json();
    console.log(json)
      res.send(json);
  })()


})






//search for one plant by
router.get('/species/:search', (req,res) => {
  (async () => {
    const response = await fetch(`https://trefle.io/api/v1/species/search?q=${req.params.search}&&token=${process.env.API_KEY}`);
    const json = await response.json();
      res.send(json);
  })()
})

//search by common name or scientific name
router.get('/plant/:search', (req,res) => {
  (async () => {
    const response = await fetch(`https://trefle.io/api/v1/species/search?q=${req.params.search}&&token=${process.env.API_KEY}`);
    const json = await response.json();
    console.log(json)
      res.send(json);
  })()
})


module.exports = router;
