const inputFileButton = document.getElementById("inputfilebutton");
inputFileButton.addEventListener("click", clickFileButton);

const inputNumberButton = document.getElementById("inputnumberbutton");
inputNumberButton.addEventListener("click", clickNumberButton);

function clickFileButton(){
    arquivo = document.getElementById("inputfile");

    var fr=new FileReader();

    try{
        fr.readAsText(arquivo.files[0]);
        fr.onload=function(){
            info = fr.result; 
            document.getElementById('output').textContent=fr.result;
        }  
    }
    catch(erro){
        console.log(erro);
        alert(erro);
    }
    finally{
        alert("Obrigado pela visita");
    }
    
    
}

function clickNumberButton(){

   document.getElementById('outputnumber').innerHTML = "  "
   number = document.getElementById("inputnumber").value// .value traz um valor 
   
   if( number>5==true && number<10==true){
         }

     try {
         if( number>5==false || number<10== false ) throw (' Informe um valor maior que 5 e menor que 10')
         } 

     catch (error) {
         document.getElementById('outputnumber').innerHTML = error
         console.log("Erro "+error)
         }
   
    try{
        if (number == '') throw 'Informe um valor';
        
         }
    catch(erro){
        document.getElementById("outputnumber").innerHTML = erro;
       
         }
    
    finally{
        alert('O número escolhido foi  '+number)
        alert('Obrigada pela visita')
         }

    console.log(number)
    }

