// Objeto representando um usuário válido
// Este usuário deve passar na validação final
const usuario = {
  nome: "Carlos",
  idade: 20,
  email: "carlos@email.com",
  ativo: true
}

// Objeto representando um usuário inválido
// Este usuário NÃO deve passar na validação final
const usuarioInvalido = {
  nome: "Ana",
  idade: 16,
  email: "anaemail.com",
  ativo: false
}

// DESAFIO
function verificarMaiorIdade(idade) {
  if (idade >= 18) {
    return true
  } else {
    return false
  }

}

// DESAFIO
function validarEmail(email) {
  return email.includes("@")
}

// DESAFIO
function usuarioAtivo(usuario) {
  if (usuario.ativo === true) {
    return true
  } else {
    return false
  }
}

function validarCadastro(usuario) {

  const maiorIdade = verificarMaiorIdade(usuario.idade)
  const emailValido = validarEmail(usuario.email)
  const ativo = usuarioAtivo(usuario)

  return maiorIdade && emailValido && ativo
}

module.exports = {
  verificarMaiorIdade,
  validarEmail,
  usuarioAtivo,
  validarCadastro
}