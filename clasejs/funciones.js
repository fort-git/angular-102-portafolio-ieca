function validarPassword (pwd) {
  if (pwd.length <= 8) {
  }
}

const suma = (a, b) => {
  console.log('Suma : ', a + b)
}

suma(100, 50)

function Perfil (usuario, email) {
  this.usuario = usuario
  this.email = email
}

const perfil = new Perfil('Fortino', 'fortinom@gmail.com')

Perfil.prototype.resumen = function () {
  console.log(`Usuario ${this.usuario}`)
}

perfil.resumen()
