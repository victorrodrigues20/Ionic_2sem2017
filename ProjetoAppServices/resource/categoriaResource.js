"use strict";
class CategoriaResource {
    findAll(req, res, next) {
        this.categoriaBusiness = require("../business/categoriaBusiness");
        this.categoriaBusiness.findAll(function callbackCategoria(rows){
            res.json(rows);
            next();
        });
    }
}

module.exports = new CategoriaResource();