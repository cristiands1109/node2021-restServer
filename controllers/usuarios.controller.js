const { response, request } = require('express')

// Usuarios GET
const usuariosGET = (req = request, resp = response) => {

    const params = req.query;

    resp.json({
        ok: true,
        msg: 'app GET',
        data: 'controller',
        params
    })
}


// Usuarios POST
const usuarioPOST = (req = request, resp = response) => {

    const body = req.body;

    resp.json({
        ok: true,
        msg: 'app POST',
        data: 'controller',
        body
    })
}

// Usuarios PUT
const usuariosPUT = (req = request, resp = response) => {

    const id = req.params.userID;

    resp.json({
        ok: true,
        msg: 'app PUT',
        data: 'controller',
        id
    })
}

// Usuarios PATCH
const usuariosPATCH = (req, resp = response) => {
    resp.json({
        ok: true,
        msg: 'app PATCH',
        data: 'controller'
    })
}

// Usuarios DELETE
const usuariosDELETE = (req, resp = response) => {
    resp.json({
        ok: true,
        msg: 'app DELETE',
        data: 'controller'
    })
}

module.exports = {
    usuariosGET,
    usuarioPOST,
    usuariosPUT,
    usuariosPATCH,
    usuariosDELETE
}