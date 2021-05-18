const express = require('express');
const cors = require ('cors');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        // Paths de las rutas
        this.usuariosPATH = '/api/usuarios'

        // -----------------LLAMADA A LOS METODOS-----------------------------//

        // Middlewares - llamada del metodo
        this.middlewares();

        // Rutas de la aplicacion - llamada del metodo
        this.routes();
    }




    // Metodos

    middlewares() {

        // Confg CORS
        this.app.use(cors());

        // Lectura y parseo del body
        this.app.use(express.json());

        // Directorio publico
        this.app.use(express.static('public'))
    }

    routes () {

        this.app.use(this.usuariosPATH, require('../routes/usuarios.routes'));

    }

    listen() {
        this.app.listen( this.port, () => {
            console.log(`Servidor corriendo en el puerto: ${this.port}`);    
        });
    }



}

module.exports = Server;