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
  fun_career(data.career); // career means calling Career . here 'data' means json file name
  fun_education(data.education);  //abstract function
  fun_achievements(data.achievements);
  fun_skills(data.skills);

});

var div2=document.getElementById("child2");

// Career objective

function fun_career(career_obj){

  var heading1=document.createElement("h2");
    heading1.textContent="Career Objective";//appending heading to div2
    div2.appendChild(heading1);


    var horz=document.createElement("hr");//giving underline to heading
    heading1.appendChild(horz);


    var inf=document.createElement("p");//displaying the context of career objective
    inf.classList.add("bigger_font");
    div2.appendChild(inf);
    inf.textContent=career_obj.info;
}


//education details

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


//achievements
function fun_achievements(achieve){

  var heading2=document.createElement("h2");
    heading2.textContent="Achievements";//appending heading to div2
    div2.appendChild(heading2);


    var horz=document.createElement("hr");//giving underline to heading
    heading2.appendChild(horz);


     var ul=document.createElement("ul");
     div2.appendChild(ul);


    for(var i=0;i<achieve.length;i++)
    {
      var listItem3=document.createElement("li");//appending this list to ul list
      // listItem3.style.fontWeight="550";
      listItem3.style.fontSize="25px";
      listItem3.innerHTML=achieve[i].name;
      ul.appendChild(listItem3);

    }

}

//technicalskills

function fun_skills(tech){

  var heading3=document.createElement("h2");
    heading3.textContent="Technical Skills";//appending heading to div2
    div2.appendChild(heading3);


    var horz=document.createElement("hr");//giving underline to heading
    heading3.appendChild(horz);

    var tr="";


     var table=document.createElement("table");//creating table tag

     div2.appendChild(table);

     for(i=0;i<tech.length;i++){
       tr+="<tr><td>"+tech[i].name+"</td><td>"+tech[i].data+"</td></tr>";
}

table.innerHTML=tr;
table.border="2";
}
