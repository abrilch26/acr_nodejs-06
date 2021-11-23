//1. IMPORTACIONES
const express = require ("express")
const router = express.Router() // estableciendo en instancia el manejo del ruteo

const indexcontroller = require ("./../controllers/indexController.js")

//2. RUTAS DE LA URL BASE
router.get("/ejemplo", (req, res) => {
    res.send("ESTÁS EN EL EJEMPLO")
})

router.get("/", (req, res) => {
    res.send("ESTÁS EN EL HOME")
})

//3. EXPORTACIONES
module.exports = router