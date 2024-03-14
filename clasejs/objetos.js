const persona = {
  nombre: 'Fortino Bustamante Villafuerte',
  edad: 38,
  1: 'hola',
  perfil: { usuario: 'admin' },
  nacimiento: function () {
    const ahora = new Date()
    //console.log(`${this.nombre} nacio en ${ahora.getFullYear() - this.edad}`)
    return ahora.getFullYear() - this.edad
  }
}

console.error('PERSONA ::: ', persona)
console.error('Nombre ::: ', persona.nombre)
console.error('Edad ::: ', persona.nacimiento())

for (const clave in persona) {
  console.info(clave, ' : ', persona[clave])
}

/*
mapa clave-valor
clave puede utilizar multiples tipos de datos
clave son unicas
 */
function mapas () {
  const ubicaciones = new Map([['Guanajuato', { lat: 21.16, long: -101.89 }]])

  ubicaciones.set('Queretaro', { lat: 21.16, long: -101.89 })

  console.log(ubicaciones.get('Queretaro'))
  console.log(Array.from(ubicaciones))
}

mapas()
