/*Async/Await
 * Simplifica la ejecucion de promises, mejorar legibilidad de operaciones
 * ES8(2017)
 * Manejo de error
 *
 */

var diasTranscurridos = 0

function despertar () {
  return new Promise((resolve, reject) => {
    hora = new Date()
    console.log('Comienza el dia', hora.toLocaleString())

    if (diasTranscurridos === 7) {
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

async function inicio () {
  try {
    diasTranscurridos += 1
    console.log(`Dia ${diasTranscurridos}:`)

    await despertar()
    await comer()
    await trabajar()

    inicio()
  } catch (error) {
    console.error(error)
  }
}

inicio()
