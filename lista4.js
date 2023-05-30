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
