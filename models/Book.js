// 1 IMPORTACIONES
const mongoose = require ("mongoose")

//2 SCHEMA
const bookSchema = mongoose.Schema ({
    title: String,
    description: String,
    author: String,
    rating: Number
},
{
    timestamps: true // establece la fecha en la que fue creado
})


//3 MODELO 
const Book = mongoose.model("Book", bookSchema)


//4 EXPORTACION
module.exports= Book

