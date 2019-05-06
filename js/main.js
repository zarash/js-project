function show (){
     var income = document.getElementById("income").value;
     var outcome = document.getElementById("outcome").value;
     if (Number(income) > Number(outcome)){
        document.getElementById("demo").innerHTML = 'shoma kamkharj hastid' ;
     }else if (Number(income) == Number(outcome)){
        document.getElementById("demo").innerHTML = 'mosavi' ;  
     }else {
        document.getElementById("demo").innerHTML = 'shoma pppooooor khard hastid' ; 
     }
     
}





