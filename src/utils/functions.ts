// puro vainilla javascript
// no puedo usar tipos o types


// function
function setName(name: string){

    console.log(name);
}

setName('Ernesto');

// arrow functions =>  / -> / =>
// ES6 ≠> arrow functions
const printLastName = (lastName: string) => {
    console.log(lastName);
};

printLastName('Martinez');

// implicita
const getLastName = () => 'Escobar';

console.log(getLastName())

// explicita
const getLastNameExplicit = () => {
    // mas procesos
    return 'Escobar';
};

console.log(getLastNameExplicit());

// ES6
// destructuring
//const [] = useState();

const array = [1,2,3];
void array;
//const uno = array[0];
//const tres = array[2];

//console.log(uno, tres);

    const [uno, dos, tres] = [1,2,3,4,5,6,7];

    console.log(uno, dos, tres );


    const obj = {
        name: 'Gabriel',
        lastName: 'Martinez'
    }

    console.log(obj.name); 
    console.log(obj.lastName);

    const {
        name,
        lastName
    } = {
        name: 'Ernesto',
        lastName: 'Escobar'
    };

    console.log(name);
    console.log(lastName);

    // Promises
    
    const promise = (name: string) => new Promise((_resolve, reject)=> {

        setTimeout(()=> {
            // async process
            // 3 segundos
            /*
            resolve({
                result: 'hola mundo ' + name
            });
            */
            reject({
                message: 'error ' + name,
                code: 12
            });
        }, 3000);
        
    });

    // then y catch
    promise('Ernesto')
        .then((response: any) => console.log(response.result))
        .catch(error => console.log(error.message));

    // async y await
    async function getName() {
        try{
            const response: any = await promise('Manuel');
            // no se pasa a esta linea hasta que se resuelva la promisa
            console.log(response.result);
        }catch(error: any){
            console.log(error.message);
        }
        
    } 

    getName();

    // javascript
    // const y let
    // no se recomienda mutar objetos / arreglos
    let jobName = 'k2i';
    jobName = 'pwc';
    console.log(jobName);

    const arr:any = [];
    console.log(arr);
    arr.push(1);
    console.log(arr);

    const ob = {} as any;
    console.log(ob);
    ob.name = 'ernesto';
    console.log(ob); 

    // codigo menos a legible y mas propenso a errores
    // sirve para que react sepa cuando cambio el estado


    // direccion1 -> [1,2,3,4,5]
    // arr1 = direccion1
    // arr2 = arr1

    let arr1 = [1,2,3,4,5];

    let arr2 = arr1;

    arr1.push(8);

    console.log(arr1);
    console.log(arr2);

    // arr2 -> arr1 ->  []
    // arr3 ->  copia de arr2 y despues nueva referencia []
    
    // spread operator
    let arr3 = [...arr2, 7];

    console.log(arr1);
    console.log(arr2);
    console.log(arr3);

    let obj1 = {};
    let obj2: any = obj1;

    obj2.name = 'Ernesto';

    console.log(obj1);
    console.log(obj2);


    let obj3 = { ...obj2, lastName: 'Martinez'};

    console.log(obj1);
    console.log(obj2);
    console.log(obj3);


    // referencias a funciones

