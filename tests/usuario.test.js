const usuario = require('../src/usuario')

let usuarioBase;

beforeEach(() => {
    usuarioBase = {
        nome: "Enzo",
        idade: 20,
        email: "enzo@ebac.com",
        ativo: true
    }
});

describe('Validação de idade', () => {
    test('Verifica se usuário tem menos que 18 anos', () => {
        expect(usuario.verificarMaiorIdade(17)).toBe(false)
    });

    test('Verifica se usuário tem 18 anos', () => {
        expect(usuario.verificarMaiorIdade(18)).toBe(true)
    });

    test('Verifica se usuário tem mais que 18 anos', () => {
        expect(usuario.verificarMaiorIdade(25)).toBe(true)
    });

});

describe('Valição de email', () => {
    test('Deve validar se o email é valido', () => {
        expect(usuario.validarEmail('enzoteste@ebac.com')).toBe(true)
    });

    test('Deve validar se o email é invalido', () => {
        expect(usuario.validarEmail('enzotesteebac.com')).toBe(false)
    });

});

describe('Valição de usuários ativos', () => {

    test('Deve validar se usuário está ativo', () => {
        expect(usuario.usuarioAtivo(usuarioBase)).toBe(true)
    });

    test('Deve validar se usuário está inativo', () => {
        const usuarioInvalido = {
            ...usuarioBase,
            ativo: false
        }
        expect(usuario.usuarioAtivo(usuarioInvalido)).toBe(false)
    });

});

describe('Valição de cadastro - Utilizando Test Each', () => {

    const cenarios = [
        ["Deve validar cadastro para maior de idade, email válido, usuário ativo", {}, true], // true, true, true
        ["Deve invalidar cadastro para maior de idade, email inválido, usuário ativo", { email: 'enzoebac.com' }, false], // true, false, true
        ["Deve invalidar cadastro para maior de idade, email inválido, usuário inativo", { email: 'enzoebac.com', ativo: false }, false], // true, false, false
        ["Deve invalidar cadastro para maior de idade, email válido, usuário inativo", { ativo: false }, false], // true, true, false
        ["Deve invalidar cadastro paramenor de idade, email inválido, usuário inativo", { idade: 15, email: 'enzoebac.com', ativo: false }, false], // false, false, false
        ["Deve invalidar cadastro para menor de idade, email válido, usuário ativo", { idade: 15 }, false], // false, true, true
        ["Deve invalidar cadastro para menor de idade, email válido, usuário inativo", { idade: 15, ativo: false }, false], // false, true, false
        ["Deve invalidar cadastro para menor de idade, email inválido, usuário ativo", { idade: 15, email: 'enzoebac.com' }, false], // false, false, true

    ]

    test.each(cenarios)(
        "%s",
        (descricao, modificacoes, esperado) => {
            const usuarioTeste = { ...usuarioBase, ...modificacoes }
            expect(usuario.validarCadastro(usuarioTeste)).toBe(esperado)
        }
    )

});

describe('Valição de cadastro', () => {

    //true, true, true 
    test('Deve validar cadastro para maior de idade, email válido, usuário ativo', () => {
        expect(usuario.validarCadastro(usuarioBase)).toBe(true)
    });

    // true, false, true
    test('Deve invalidar cadastro para maior de idade, email inválido, usuário ativo', () => {
        const usuarioInvalido = {
            ...usuarioBase,
            email: 'enzoebac.com'
        }
        expect(usuario.validarCadastro(usuarioInvalido)).toBe(false)
    });

    // true, false, false
    test('Deve invalidar cadastro para maior de idade, email inválido, usuário inativo', () => {
        const usuarioInvalido = {
            ...usuarioBase,
            email: 'enzoebac.com',
            ativo: false
        }
        expect(usuario.validarCadastro(usuarioInvalido)).toBe(false)
    });

    // true, true, false
    test('Deve invalidar cadastro para maior de idade, email válido, usuário inativo', () => {
        const usuarioInvalido = {
            ...usuarioBase,
            ativo: false
        }
        expect(usuario.validarCadastro(usuarioInvalido)).toBe(false)
    });

    // false, false, false
    test('Deve invalidar cadastro para menor de idade, email inválido, usuário inativo', () => {
        const usuarioInvalido = {
            ...usuarioBase,
            idade: 15,
            email: 'enzoebac.com',
            ativo: false
        }
        expect(usuario.validarCadastro(usuarioInvalido)).toBe(false)
    });

    // false, true, true
    test('Deve invalidar cadastro para menor de idade, email válido, usuário ativo', () => {
        const usuarioInvalido = {
            ...usuarioBase,
            idade: 15
        }
        expect(usuario.validarCadastro(usuarioInvalido)).toBe(false)
    });

    // false, true, false
    test('Deve invalidar cadastro para menor de idade, email válido, usuário inativo', () => {
        const usuarioInvalido = {
            ...usuarioBase,
            idade: 15,
            ativo: false
        }
        expect(usuario.validarCadastro(usuarioInvalido)).toBe(false)
    });

    // false, false, true
    test('Deve invalidar cadastro para menor de idade, email inválido, usuário ativo', () => {
        const usuarioInvalido = {
            ...usuarioBase,
            idade: 15,
            email: 'enzoebac.com'

        }
        expect(usuario.validarCadastro(usuarioInvalido)).toBe(false)
    });


});