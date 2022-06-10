var saludo = "Hello";
let no = "no";
const si = "si";

function saludar(){
    console.log(saludo);
    console.log(no);
    console.log(si);
}

saludar();

const holamundo = () =>{

    const hello = 'Hola';
    console.log(hello);

};

holamundo();
console.log(hello);


const functionScope = () =>{

    var scope = "i am global";
    
    const func = () =>{

        return scope

    }

    console.log(func());

};