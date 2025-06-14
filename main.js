let numeridisp = 0;
let misuratore = 0;

for(let i = 1; i <= 20; i++){
    if(i % 2 == 0){
        console.log(i);
    }else{
        numeridisp = numeridisp + i
        misuratore ++
    }               
}

console.log(`Numero di numeri dispari = ${numeridisp}`);
console.log(`Misuratore = ${misuratore}`);
console.log(`Media dei numeri dispari = ${numeridisp / misuratore}`);


