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




function change(){
  document.getElementById("demo").innerHTML = "I Chenged";
}

////////////////////////////////////////////////appendChild.html
var pTag ,text, divTag ,hTag ,bodyTag , text2, text3;
pTag = document.createElement("p");
text = document.createTextNode("This is a appendChild example");
pTag.appendChild(text);
divTag = document.getElementById("show");
divTag.appendChild(pTag);

hTag = document.createElement("h1");
text2 = document.createTextNode("hello world");
hTag.appendChild(text2);
bodyTag = document.getElementById("append");
bodyTag.appendChild(hTag);
bodyTag.removeChild(hTag);

text3 = document.createTextNode("Do not mind,everything will be great!")
pTag.replaceChild(text3,text);


////////////////////////////////////////////////////todo.html

function addItem(){
   var inputData, todoPTag , todoTask, todoTaskTag , result;

   inputData = document.getElementById("todoInput").value;

   if (inputData == ""){
      alert("لطفا فعالیت های خود را وارد نمایید.")
   }else {
   document.getElementById("todoInput").value  = ""; //clear input after submit
   todoPTag = document.createElement("p");
   todoTaskTag = document.createElement("span");
   todoTask = document.createTextNode(inputData);

   console.log(inputData)

   todoTaskTag.appendChild(todoTask);

   todoPTag.appendChild(todoTaskTag);

   result = document.getElementById("result");

   result.appendChild(todoPTag)

   var remTag = document.createElement("span");

   var rem = document.createTextNode("حذف");

   remTag.appendChild(rem);

   todoPTag.appendChild(remTag);

   todoPTag.addEventListener("click" , taskDone);

   function taskDone() {
      todoTaskTag.style.textDecoration = "line-through";
   }

   var remove = document.createAttribute("onclick");
   remove.value = "this.parentNode.remove();";
   remTag.setAttributeNode(remove)
}

}

 
