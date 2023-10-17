document.addEventListener('keyup', function (event) {
									 
    var totalmarks = 0;
    var x = document.getElementsByClassName("marks");
    for(var i = 0; i<x.length; i++){
    
    if(x[i].value!='')	{
    
    if(parseFloat(x[i].value)>90)
    {
     document.getElementsByClassName("grade")[i].innerHTML='<mark class="col-green">Grade A</mark>';
    }
    else if(parseFloat(x[i].value)>80)
    {
     document.getElementsByClassName("grade")[i].innerHTML='<mark class="col-blue">Grade B</mark>';
    }
    else if(parseFloat(x[i].value)>70)
    {
     document.getElementsByClassName("grade")[i].innerHTML='<mark class="col-blue">Grade C</mark>';
    }
    else if(parseFloat(x[i].value)>60)
    {
     document.getElementsByClassName("grade")[i].innerHTML='<mark class="col-blue">Grade D</mark>';
    }
    else if(parseFloat(x[i].value)>50)
    {
     document.getElementsByClassName("grade")[i].innerHTML='<mark class="col-blue">Grade E</mark>';
    }
    else if(parseFloat(x[i].value)>40)
    {
     document.getElementsByClassName("grade")[i].innerHTML='<mark class="col-blue">Grade F</mark>';
    }		
    else if(parseFloat(x[i].value)>34)
    {
     document.getElementsByClassName("grade")[i].innerHTML='<mark class="col-blue">Grade G</mark>';
    }				
    else 
    {
     document.getElementsByClassName("grade")[i].innerHTML='<mark class="col-red">Fail</mark>';
    }
     totalmarks += parseFloat(x[i].value);
    }
    }
    
    document.getElementById('totalmarks').innerHTML='<mark>'+totalmarks +' / 500</mark>';
    
    var percentage = parseFloat(totalmarks)/5;
    
    document.getElementById('percentage').innerHTML='<mark>'+percentage +' %</mark>';
    
    if(parseFloat(percentage)>90)
    {
     document.getElementById("finalgrade").innerHTML='<mark class="col-green">Grade A</mark>';
    }
    else if(parseFloat(percentage)>80)
    {
     document.getElementById("finalgrade").innerHTML='<mark class="col-blue">Grade B</mark>';
    }
    else if(parseFloat(percentage)>70)
    {
     document.getElementById("finalgrade").innerHTML='<mark class="col-blue">Grade C</mark>';
    }
    else if(parseFloat(percentage)>60)
    {
     document.getElementById("finalgrade").innerHTML='<mark class="col-blue">Grade D</mark>';
    }
    else if(parseFloat(percentage)>50)
    {
     document.getElementById("finalgrade").innerHTML='<mark class="col-blue">Grade E</mark>';
    }
    else if(parseFloat(percentage)>40)
    {
     document.getElementById("finalgrade").innerHTML='<mark class="col-blue">Grade F</mark>';
    }		
    else if(parseFloat(percentage)>34)
    {
     document.getElementById("finalgrade").innerHTML='<mark class="col-blue">Grade G</mark>';
    }		
    else 
    {
     document.getElementById("finalgrade").innerHTML='<mark class="col-red">Fail</mark>';
    }
    });

    function Myprint(){
        window.print();
    }