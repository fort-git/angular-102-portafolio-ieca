/*OPERACIONES ASINCRONAS
- ES6(2015)
- Manejo de Errores
*/

var diasTranscurridos = 0

function despertar () {
  return new Promise((resolve, reject) => {
    hora = new Date()
    console.log('Comienza el dia', hora.toLocaleString())

    if (diasTranscurridos === 5) {
      reject('Es fin de semana')
    }

    setTimeout(() => {
      resolve()
    }, 1500)
  })
}

function comer () {
  return new Promise((resolve, reject) => {
    hora = new Date()
    console.log('Comida', hora.toLocaleString())

    setTimeout(() => {
      resolve()
    }, 1500)
  })
}

function trabajar () {
  return new Promise((resolve, reject) => {
    hora = new Date()
    console.log('Trabajar', hora.toLocaleString())

    setTimeout(() => {
      resolve()
    }, 1500)
  })
}
//despertar().then(comer).then(trabajar).then(despertar)

function inicio () {
  diasTranscurridos += 1
  console.log(`Dia ${diasTranscurridos}:`)
  despertar()
    .then(comer)
    .then(trabajar)
    .then(inicio)
    .catch(alerta => {
      //? ESTE CATCH FUNCIONA PARA TODAS LAS PROMESAS
      console.error(alerta)
    })
}

inicio()
