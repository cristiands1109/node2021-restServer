const { Router } = require('express');

// Importacion controllers de usuarios
const { usuariosGET, usuariosPUT, usuarioPOST, usuariosDELETE, usuariosPATCH } = require('../controllers/usuarios.controller');

const router = Router();


// GET
router.get('/', usuariosGET );

// POST
router.post('/', usuarioPOST);

// PUT
router.put('/:userID', usuariosPUT);

// PATCH
router.patch('/', usuariosPATCH);


// DELETE
router.delete('/', usuariosDELETE);


module.exports = router;