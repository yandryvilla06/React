
export const operaciones=(numeros,setNumeros)=>{


 const {numero1,numero2}=numeros;

 const   handleChange=(e)=>{
        setNumeros({
            ...numeros,
            [e.target.name]: parseFloat( e.target.value) 
        })
     }
     


     const sumar= () =>numero1+numero2
     const restar=()=>numero1-numero2
     const multiplicar=()=>numero1*numero2
     const dividir= function(){
     
           if (numero1>numero2){
             
             return numero1/numero2
     
           }else if(numero1==numero2){
     
             return 0
           }else{
             return numero2/numero1
           }
     
     }


     return { handleChange,sumar,restar,dividir,multiplicar,numero1,numero2}



};