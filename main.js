function loadJson(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4 && xhr.status=="200"){
      callback(xhr.responseText);
    }
  }
   xhr.send(null);
}

loadJson("data.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
  fun_education(data.education);  //abstract function
});

var div2=document.getElementById("child2");
function fun_education(edu){


  var heading=document.createElement("h2");
  heading.textContent="Education Qualification";//appending heading to div2
  div2.appendChild(heading);


  var horz=document.createElement("hr");//giving underline to heading
  heading.appendChild(horz);


  var list=document.createElement("ul");//appending this list to div 2 section
  div2.appendChild(list);


  for(var i=0;i<edu.length;i++)
  {
    var listItem=document.createElement("li");//appending this list to ul list
    listItem.style.fontWeight="550";
    listItem.style.fontSize="25px";
    listItem.textContent=edu[i].degree;
    list.appendChild(listItem);


    var listItem1=document.createElement("p");
    listItem1.textContent=edu[i].institute;
    list.appendChild(listItem1);

    var listItem2=document.createElement("p");
    listItem2.textContent=edu[i].data;
    list.appendChild(listItem2);

  }
















}
