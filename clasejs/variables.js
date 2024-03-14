var dorsal = 10
let estado = true //PUEDE SER REASIGNADA - TIENE ALCANCE BLOQUE
const appName = 'calendarapp' //NO PUEDE SER REASIGNADA TIENE ALCANCE BLOQUE

const data = function () {
  return 100
}

function ejemploScope () {
  if (true) {
    var variableVar = 'Variable var(alcance de funcion)'
    let variableLet = 'Variable let(alcance de bloque)'
    const variableConst = 'Variable const(alcance de bloque)'
  }

  console.log(`variableVar: ${variableVar}`)
  //console.log(`variableLe: ${variableLet}`)
  //console.log(`variableConst: ${variableConst}`)
}

function detectaPosicionJugador (jugador, dorsal = true) {
  if (jugador === 'DEL') {
    console.info('ATACANTE')
  } else if (jugador === 'DFC') {
    console.info('DEFENSOR')
  } else {
    if (jugador === 'DT' || jugador === 'POR') {
      jugador === 'DT' ? console.log('DIRIGE') : console.log('PROTEGE')

      if (!dorsal) {
        console.log('EL jugador utiliza traje')
      }
    }
  }
}

console.error(dorsal, '  ----- ', appName)
console.error(data())
ejemploScope()

detectaPosicionJugador('DFC', false)
detectaPosicionJugador('DT')

//BUCLES

function cicloFor () {
  for (let i = 0; i < 5; i++) {
    console.log(`Numero del bucle For: ${i}`)
  }
}

cicloFor()

function cicloWhile () {
  let contador = 11

  while (contador > 0) {
    contador--

    if (contador == 7) {
      continue
    }

    if (contador == 2) {
      continue
    }

    console.log('Contador: ', contador)
  }
}

cicloWhile()

function sentenciaSwitch (calificacion) {
  switch (true) {
    case calificacion >= 7 && calificacion <= 8:
      console.log('APROBADO')
      break

    default:
      console.log('REPROBADO')

      break
  }
}

sentenciaSwitch(5)
