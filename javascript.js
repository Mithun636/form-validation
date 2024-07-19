function validation(){
    var fname=document.valid.fname.value;
    var lname=document.valid.lname.value;
    var city=document.valid.city.value;
    var phno=document.valid.phno.value;
    var address=document.valid.address.value;
    if( (fname=="") || (fname==null))
     {
        alert("Please Enter the First Name");
        return false;
     }
    else if((lname=="") || (lname==null))
    {
        alert("Please Enter your Last Name");
        return false;
    }
    else if((city=="") || (city==null) )
        {
         alert("Please Enter your City"); 
         return false;  
        }
    else if((phno=="") || (phno==null) || (phno>=1 && phno<=10))
        {
            alert("Please Enter your Phone number");
            return false;  
        }
    else if((address=="") || (address==null))
        {
            alert("Please Enter your Address"); 
            return false;    
        }
    else{
        alert("Form Submitted Successfully !");
        return true;
    }
}