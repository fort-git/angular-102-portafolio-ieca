function despertar () {
  const hora = new Date()

  console.log('Comienza el dia', hora.toLocaleString())

  setTimeout(() => {
    console.log('callback')
    comer()
  }, 4000)
}

function comer () {
  const hora = new Date()

  console.log('Comida', hora.toLocaleString())

  setTimeout(() => {
    console.log('callback')
    trabajar()
  }, 2000)
}

function trabajar () {
  const hora = new Date()

  console.log('Trabajar', hora.toLocaleString())

  setTimeout(() => {
    console.log('Esperando un nuevo dia')
    //despertar() //? SE VUELVE A EJECUTAR TODA LA RUTINA
  }, 8000)
}

despertar()
