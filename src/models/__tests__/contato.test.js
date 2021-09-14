const mongoose = require('mongoose');
const Contato = require('../contato');

// jest.mock("mongoose")
describe("model -> contato", () => {
    describe('caso passe todos os parametros', () => {
            test("Não deve retornar um erro", () => {
            const mockContato = {
                "nome":"Roberta",
                "telefone":8133457818,
                "celular":8198747410,
                "email":"email@beta.com",
                "endereco": "Rua das Palmas"
            }
            const result = new Contato(mockContato)
            const err = result.validateSync()
            expect(err).toEqual(undefined)
        })
    })
    describe('Caso NÃO passe os parametro', () =>{
        test("'nome' deve resultar em erro", () => {
            const mockContato = {
                "telefone":8133457818,
                "celular":8198747410,
                "email":"email@beta.com",
                "endereco": "Rua das Palmas"
            }
            const result = new Contato(mockContato)
            const err = result.validateSync()
            expect(err.errors.nome).not.toEqual(undefined)
        })
            test("'telefone' deve resultar em erro", () => {
                const mockContato = {
                    "nome":"Roberta",
                    "celular":8198747410,
                    "email":"email@beta.com",
                    "endereco": "Rua das Palmas"
                }
                const result = new Contato(mockContato)
                const err = result.validateSync()
                expect(err.errors.telefone).not.toEqual(undefined) 
            })
            
            test("'celular' deve resultar em erro", () => {
                const mockContato = {
                    "nome":"Roberta",
                    "telefone":8133457818,
                    "email":"email@beta.com",
                    "endereco": "Rua das Palmas"
                }
                const result = new Contato(mockContato)
                const err = result.validateSync()
                expect(err.errors.celular).not.toEqual(undefined) 
            })
             test("'email' deve resultar em erro", () => {
                const mockContato = {
                    "nome":"Roberta",
                    "telefone":8133457818,
                    "celular":8198747410,
                    "endereco": "Rua das Palmas"
                }
                const result = new Contato(mockContato)
                const err = result.validateSync()
                expect(err.errors.email).not.toEqual(undefined) 
             })

             test("'enderco' deve resultar em erro", () => {
                const mockContato = {
                    "nome":"Roberta",
                    "telefone":8133457818,
                    "celular":8198747410,
                    "email":"email@beta.com",
                }
                const result = new Contato(mockContato)
                const err = result.validateSync()
                expect(err.errors.endereco).not.toEqual(undefined) 
             })

             

    })
    // const modelSpy = jest.spyOn(mongoose, "model")
    
});