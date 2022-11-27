const http = require('https')
http
  .createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'application/json' })
    if (request.url === '/produto') {
      response.end(
        JSON.stringify({
          message: 'Rota de produto'
        })
      )
    }

    if (request.url === '/usuarios') {
      response.end(
        JSON.stringify({
          message: 'Rota usuarios'
        })
      )
    }

    response.end(
      JSON.stringify({
        message: 'Qualquer outra rota'
      })
    )
  })
  .listen(4003, () => console.log('Servidor esta rodando na porta 4003'))
