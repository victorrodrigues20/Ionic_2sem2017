"use strict";

class CategoriaBusiness{
    findAll(callbackCategoria){
        callbackCategoria(global.categorias);
    }
}

module.exports = new CategoriaBusiness();