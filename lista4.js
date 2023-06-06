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


//vetor.push(elemento)--> insere na ultima posição do vetor//
//vetor.includes(elemento)--> verifica se o elemento esta contido no vetor//
//vetor.indexOf(elemento)--> informa a posição do elemento dentro do vetor, caso
//não encontrado informa o valor de -1

function exe05(){
    let vetlog=[]; let vetling=[]
    for(let i=0;i<10;i++){
        vetlog[i]=Number(prompt(`Informe o código do curso de lógica do aluno ${i+1}: `))
    }
    for(let i=0;i<10;i++){
        vetling[i]=Number(prompt(`Informe o código do curso de linguagem do aluno ${i+1}: `))
    }
    // verificar alunos que fazem ambas as diciplinas
    let comum=[]
    for(let i=0;i<10;i++){
        if(vetling.includes(vetlog[i])){ // se o vetlog[i] esta incluido no
            //letling -> verifica se esta em linguagem tambem
            comum.push(vetlog[i]) // adiciona o valor de vetlog[i] na ultima poição do comum
    }
    console.log(`Alunos que fazem ambas ${comum}`)
}
}

function exe06(){
    let salario = []; let nome = [] 
    for(let i=0;i<5;i++){
    nome[i] = Number(prompt(`Nome ${i+1}: `))
    salario[i] = Number(prompt(`Salário: `))
    }

    let maior = salario[0]; let menor = salario[0]//assume que o menor valor seja o primeiro
    for(let i=0;i<30;i++){
        if(salario[i]>maior){
            maior = salario[i]
        }
        if(salario[i]<menor){
            menor = salario[i]
        }
    }
    let nomemaior=nome(salario.indexOf(maior))
    let nomemenor=nome(salario.indexOf(menor))
    console.log(`${nomemaior} vai receber o salário ${maior}`)
    console.log(`${nomemenor} vai receber o salário ${menor}`)
}
