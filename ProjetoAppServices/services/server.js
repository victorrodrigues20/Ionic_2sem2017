var restify = require('restify');

var server = restify.createServer();

server.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

function listenOnPort() {
    console.log('Servidor executando em http://localhost:3014');
}

var categoriasResource = require('../resource/categoriaResource');
/**
 * GET - Resource Departamento
 */

server.get('/api/v1/categorias', categoriasResource.findAll);
server.listen(3014, listenOnPort);

global.categorias = [
    {
        id: 1,
        descricao: "Aventura"
    },
    {
        id: 2,
        descricao: "Academico"
    },
    {
        id: 3,
        descricao: "Terror"
    },
    {
        id: 4,
        descricao: "Comédia"
    },
    {
        id: 5,
        descricao: "Suspense"
    }
];