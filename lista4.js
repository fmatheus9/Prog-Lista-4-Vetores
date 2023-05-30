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
