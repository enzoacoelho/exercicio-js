# Exercício – Validação de Cadastro de Usuário (JavaScript)

## Objetivo

Neste exercício você irá praticar conceitos básicos de **JavaScript**, incluindo:

- Tipos de dados
- Variáveis
- Operadores de comparação
- Operadores lógicos
- Funções
- Manipulação de objetos

O objetivo é implementar algumas funções que validam se um **cadastro de usuário é válido**.

Este código também será utilizado no **próximo módulo**, onde criaremos **testes automatizados com Jest**.

---

# Cenário

Um sistema possui um cadastro de usuários e precisa validar algumas regras antes de considerar o cadastro válido.

As regras são:

- O usuário deve ter **18 anos ou mais**
- O email deve conter **"@"**
- O usuário deve estar **ativo**

---

# Desafio

No arquivo `usuario.js`, algumas funções estão incompletas.

Você deverá implementar as seguintes funções:

## verificarMaiorIdade

Esta função deve retornar:

- `true` se a idade for **maior ou igual a 18**
- `false` caso contrário

---

## usuarioAtivo

Esta função deve verificar se o usuário está ativo.

Ela deve retornar:

- `true` se o usuário estiver ativo
- `false` caso contrário

---
## Como executar o exercício

1. Abra o terminal

2. Acesse a pasta do projeto


cd nome-da-pasta-do-projeto


3. Execute o arquivo JavaScript com Node.js


node usuario.js


---

## Resultado esperado

Após implementar corretamente as funções, o resultado no console deve ser parecido com este:


Usuário 1 válido? true

Usuário 2 válido? false