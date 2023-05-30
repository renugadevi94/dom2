
 let container=document.getElementById('container');

let tab=document.createElement('table');
tab.setAttribute('id','mytable')
tab.setAttribute('class','mytab')
 container.appendChild(tab);

 let trow=document.createElement('tr');
 tab.appendChild(trow);

 let thead=document.createElement('th');
 thead.innerHTML='FirstName';
 trow.appendChild(thead);

 let thead1=document.createElement('th');
 thead1.innerHTML='LastName';
 trow.appendChild(thead1);

let thead2=document.createElement('th');
 thead2.innerHTML='Address';
 trow.appendChild(thead2);

 let thead3=document.createElement('th');
 thead3.innerHTML='Pincode';
 trow.appendChild(thead3);

 let thead4=document.createElement('th');
 thead4.innerHTML='Gender';
 trow.appendChild(thead4);

 let thead5=document.createElement('th');
 thead5.innerHTML='Food';
 trow.appendChild(thead5);

 let thead6=document.createElement('th');
 thead6.innerHTML='State';
 trow.appendChild(thead6);

 let thead7=document.createElement('th');
 thead7.innerHTML='Country';
 trow.appendChild(thead7);

function myFunction(){
  var tbl=document.getElementById("mytable");
  var row=tbl.insertRow();
  var cell1=row.insertCell();
  var cell2=row.insertCell();
  var cell3=row.insertCell();
  var cell4=row.insertCell();
  var cell5=row.insertCell();
  var cell6=row.insertCell();
  var cell7=row.insertCell();
  var cell8=row.insertCell();
  
  var check1=document.getElementById('check1')
  var check2=document.getElementById('check2')
       if(check1.checked==true)
      {
        cell5.innerHTML=document.getElementById('check1').value;
      }
     else if(check2.checked==true)
     {
       cell5.innerHTML=document.getElementById('check2').value;
     }
     
    
     var ch1=document.getElementById('ch1')
     var ch2=document.getElementById('ch2')
     var ch3=document.getElementById('ch3');
     var ch4=document.getElementById('ch4');
     var ch5=document.getElementById('ch5');
          if(ch1.checked==true && ch2.checked==true)
         {
           cell6.innerHTML=document.getElementById('ch1').value + " " + document.getElementById('ch2').value;
         }
        else if(ch2.checked==true && ch3.checked==true)
        {
          cell6.innerHTML=document.getElementById('ch2').value  + " " + document.getElementById('ch3').value;
        
        }
        else if(ch4.checked==true && ch5.checked==true)
        {
          cell6.innerHTML=document.getElementById('ch4').value  + " " + document.getElementById('ch5').value;
        
        }
    
    cell1.innerHTML=document.getElementById("fname").value;
   cell2.innerHTML=document.getElementById("lname").value;
   cell3.innerHTML=document.getElementById("details").value;
   cell4.innerHTML=document.getElementById("pin").value;
  
   cell7.innerHTML=document.getElementById("state").value;
   cell8.innerHTML=document.getElementById("country").value;

  
      }
  
  function resetForm(){
    document.getElementById("myform").reset();
  }
  tab.classList.add('table','bg-info',);
  td.classList.add('table','custom-bordered')







 
 
