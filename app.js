let fs = require('fs');
let peliculas = require('./peliculas');
let mensajeNode = fs.readFileSync(__dirname + "/mensaje.txt", "utf-8")

console.log(mensajeNode)
console.log("-----------------------------")
peliculas.forEach((pelicula) => {
    console.log("Película:", pelicula.id),
    console.log("Calificación:", pelicula.rating),
    console.log("Premios:", pelicula.awards),
    console.log("Duración:", pelicula.length),
    console.log("Precio:", pelicula.price),
    console.log("Género:", pelicula.genre)
    console.log("-----------------------------")

})
