// array é objeto, e objeto é objeto (usa typeof)

let irmao = {nome: 'Pedro', 
sexo: 'M',
peso: 50.2,
engordar(p=0){
    console.log('Engordou!')
    this.peso += p
}}

irmao.engordar(5)
console.log(`${irmao.nome} pesa ${irmao.peso}Kg`)