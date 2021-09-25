var index = 0;  
let list1 = document.getElementById('doggies');  
function fetchResult()  
{  
    console.log("hello")  
    var request=new XMLHttpRequest();  
    request.open('get','https://api.thedogapi.com/v1/breeds');  
    request.send();  
     request.onload=function(){  
        var arr = JSON.parse(request.response);  
       for(let i=0;i<10;i++)  
       {  
          let res = `<li src="${arr[i+index].image.url}"></li>`;  
          var str=arr[i+index].temperament; 
          const appendData = `  
         <li class="container-box"> 
     <div class="AddCard"> 
         <div class="imgBx"> 
             <img src="${arr[i+index].image.url}"/> 
         </div> 
         <div class="contentBx"> 
             <h2>Breed Name : ${arr[i+index].name} </h2> 
             <h3>Breed Life Span : ${arr[i+index].life_span} </h3> 
             <p>Temperament : ${str.substring(0,str.indexOf(','))} </p> 
         </div> 
     </div> 
 </li>` 
 list1.insertAdjacentHTML('afterbegin', appendData); 
       }  
       index++; 
     }  
    
  var bttttn = document.getElementById('display-more'); 
  bttttn.style.display="block"; 
}
document.getElementById("button").addEventListener("click", fetchResult);