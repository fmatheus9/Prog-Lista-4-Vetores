function ex01(){
let vet=[]; let vetp=[]; let veti=[]
for(let i=0;i<5;i++){
    vet[i] = Number(prompt(`Informe o ${i+1}º valor:`))
}
for(let i=0;i<5;i++){
    if(vet[i]%2==0){
        vetp.push(vet[i])
    }
    else{
        veti.push(vet[i])
    }
}
console.log(`Qtde de pares ${vetp.length} - ${vetp}`)
console.log(`Qtde de ímpares ${veti.length} - ${veti}`)
}

function ex02(){
let vet=[]; let vet2=[]; let vet3=[]; let vet23=[]
for(let i=0;i<5;i++){
    vet[i]=Number(prompt(`Informe o ${i+1}º valor:`))
}
for(let i=0;i<5;i++){
    if(vet[i]%2==0 && vet[i]%3==0){
        vet23.push(vet[i])
    }
    if(vet[i]%2==0){
        vet2.push(vet[i])
    }
    if(vet[i]%3==0){
        vet3.push(vet[i])
    }
}
console.log(`Número de valores multiplos de 3 e 2 = ${vet23.length}, sendo eles: ${vet23}`)
console.log(`Número de valores multiplos de 2 = ${vet2.length}, sendo eles: ${vet2}`)
console.log(`Número de valores multiplos de 3 = ${vet3.length}, sendo eles: ${vet3}`)   
}

function ex03(){
                        //=-=-=PRIMEIRA PARTE=-=-=//
    //DECLARAÇÃO DE VARIÁVEIS//
    let vetcodigos=[]; let vetestoque=[];
    //ENTRADA DE DADOS//
    for(let i=5;i<5;i++){
        vetcodigos[i]=Number(prompt(`Entre com o código do ${i+1}º produto: `))
        vetestoque[i]=Number(prompt(`Informe a quantidade do produto ${i+1} em estoque:`))
    }

                        //=-=-=TERCEIRA PARTE=-=-=//
    let cliente = Number(prompt("Informe o código do cliente."))
    while(cliente!=0){

                        //=-=-=SEGUNDA PARTE=-=-=//
    //ENTRA COM O CÓDIGO E A QUANTIDADE DESEJADA//
    let achou = false
    let codigo=Number(prompt(`Informe o código do produto para a compra: `))
    let quantidade=Number(prompt(`Informe a quantidade desejada do produto: `))
    //VERIFICA SE O CÓDIGO EXISTE//
    for(let i=0;i<5;i++){
        if(codigo==vetcodigos[i]){
            achou = true
            if(vetcodigos>=quantidade){
            vetestoque[i]=vetestoque-quantidade // ATUALIZA O ESTOQUE
            }
            else{
                alert("Quantidade insuficiente.")
            }
        }
        if(!achou){
            alert("Produto não existe")
        }
    }
    cliente = Number(prompt("Informe o código do cliente. Digite 0 para encerrar."))
}
}
