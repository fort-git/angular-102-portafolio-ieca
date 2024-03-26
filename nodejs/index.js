const http = require('http')

const hostname = 'localhost'
const PORT = 4200

const server = http.createServer(async (request, response) => {
  //Consultar un sevicio externo(API)
  response.writeHead(200, { 'Content-Type': 'application/json' })

  try {
    console.log('Obteniendo datos :~ ....')

    const responseFetch = await fetch(
      'https://jsonplaceholder.typicode.com/todos'
    )

    console.log(responseFetch)
    //Lo transforma en json
    const json = await responseFetch.json()

    console.log('Presentando data ::::: ')

    response.end(JSON.stringify(json))
  } catch (error) {
    console.error(error)
    response.writeHead(500, { 'Content-type': 'text/plain' })
    response.end('Error: ' + error.message)
  }
})

server.listen(PORT, hostname, () => {
  console.log(`Server running at http://${hostname}:${PORT}/`)
})
/*const http = require('http')

const hostname = '127.0.0.1'
const port = 4000

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello Worlds :::: \n')
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
*/
