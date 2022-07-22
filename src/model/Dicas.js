import bd from '../database/bd.js'

let idDica = 0

export default class Dicas {
    constructor (txtDica){
        this.idDica = idDica++
        this.txtDica = txtDica
    }

    recebeDica = (dicas)=>{
        dicas = input('Adicionar dicas: ')
        bd.dicas.push(dicas)
    }
    
    devolveDica = ()=>{
        return bd.dicas.sort()
    }
}
