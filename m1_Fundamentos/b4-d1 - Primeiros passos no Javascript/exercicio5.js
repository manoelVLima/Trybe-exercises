const a = 50;
const b = 30;
const c = 90; 

let soma = a+b+c;

if(a<0 || b<0 || c<0){
    console.log("Há algum ângulo invalido");
} else{
    switch(soma){

        case 180:
        console.log(true)
        break;

        default:
            console.log(false)
}
}
