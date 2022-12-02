function validate(){
    // Employee ID
    if(document.myForm.empId.value==""){
        document.getElementById("empIdErr").innerHTML = "Please enter your Employee ID";
        return false;
    }
    if(document.myForm.firstname.value==""){
        document.getElementById("firstnameErr").innerHTML = "Please enter your first name";
        return false;
    }

    if(document.myForm.lastname.value==""){
        document.getElementById("lastnameErr").innerHTML = "Please enter your last name";
        return false;
    }

    if(document.myForm.address.value==""){
        document.getElementById("addressErr").innerHTML = "Please enter your address";
        return false;
    }

    if(document.myForm.email.value==""){
        document.getElementById("emailErr").innerHTML = "Please enter your email";
        return false;
        } else {
            var regex = /^\S+@\S+\.\$+$/;
            if(regex.test(document.myForm.email.value)==false){
                alert("Please enter a valid email address");
                return false;
            }
        }

    if(document.myForm.contactnumber.value==""){
        document.getElementById("contactnumberErr").innerHTML = "Please enter your contact number";
        return false;
    }

    if(document.myForm.employeesalary.value==""){
        document.getElementById("employeesalaryErr").innerHTML = "Please enter your Employee Salary";
        return false;
    }

    if(document.myForm.employeeusername.value==""){
        document.getElementById("employeeusernameErr").innerHTML = "Please enter your Employee username";
        return false;
    }











}
