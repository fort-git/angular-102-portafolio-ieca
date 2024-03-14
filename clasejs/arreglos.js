var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var arr2 = [1000, 2000, 3000, 400, 500]
var animals = ['ant', 'bison', 'camel', 'duck', 'elephant']

function arrayFuncionalidadBasica () {
  console.log(arr[0])

  arr[0] = 500
  console.log(arr[0])
}

arrayFuncionalidadBasica()

function metodosArray () {
  arr.push(666)

  const firstElement = animals.shift()
  const lastElement = arr.pop()
  const allElements = arr.concat(arr2)

  arr.unshift(700, 800)

  console.info('Elemento eliminado ', lastElement)
  console.log('ARREGLO :: ', arr)
  console.log('TODOS LOS ELEMENTOS :: ', allElements)
  console.log('LISTA ANIMALES :: ', animals)
  console.log('ANIMAL ELIMINADO :: ', firstElement)

  console.log('ANIMALES :: ', animals.slice(2))
  console.log('ANIMALES :: ', animals.slice(2, 4))
  console.log('ANIMALES :: ', animals.slice(-1))
}

metodosArray()

function metodosArray2 () {
  const months = ['Jan', 'March', 'April', 'June']

  //INSERT INDEX 1
  months.splice(1, 0, 'Feb')
  console.log('MESES :: ', months)

  //REPLACE INDEX 4
  months.splice(4, 1, 'May')
  console.log('MESES :: ', months)

  //ELIMINA EL ELEMENTO CON INDEX 0
  months.splice(0, 1)
  console.log('MESES :: ', months)
}

metodosArray2()
