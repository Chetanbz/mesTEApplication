var userId = "";
var userName = "" ;
var is_Terminal_User_flag = 0 ;   // Default set is as false
var is_application_selected_flag = 0 ;
var package = "" 

var package_selected = "" ;

var collegueId = "";
var select = document.querySelector('#package_Selection');
var final_application_list = [];

//document.getElementById("SubmitButton").addEventListener("click", submit);

function submitForm(){
    alert("How are you");
    setDetails();
}

function applicationSelected(){
    if (is_application_selected_flag == 0){
        final_application_list = application_list_selected;
    }else{
        final_application_list = collegue_application_list_selected;
    }
}

window.onload = function(){
    var selection = 1;
    package = "" 
    document.getElementById("Application_Selection").style.display = "block"
    document.getElementById("Colleague_Id_Selection").style.display = "none" 
    getPackage();
    document.getElementById("package_Selection").innerHTML = package
}
function getPackage(){
    var package_list = ["Car","Scooty", "Bike", "Cycle","Skate","Aeroplane"];
    for(var i = 0 ; i < package_list.length; i++){
        package += "<option value=" + package_list[i] + ">"  + package_list[i]  + "</option>"
    }
    
    return;
}



function getApplication(){
    alert("How are you");
    var car_list = ["BMW","Maruti","Fortuner","Alto","Swift"];
    var bikelist = ["Apache","Royal Enfeild", "Cd100"];
    var scooty_list = ["Activa","Jupitor","I10"];
    var cycle_list = ["Hercules","BMX"];
    console.log("Application selected");
    console.log(document.getElementById("package_Selection").value);


}

function getUserDetails(){
    document.getElementById("Input_UserName").value = "Chetan Zambare"
}

function getColleagueDetails(){
    document.getElementById("Input_ColleagueName").value = "Rohit Zambare"
}

function setDetails(){
    console.log("Hello Submit");
    var app_check;
    userId = document.getElementById("Input_UserID").value;
    userName = document.getElementById("Input_UserName").value;
    app_check  = document.getElementById("Application_Box").checked;

    if (app_check){
        package_selected = document.getElementById("package_Selection").value;
        
        var count = 0;
        var app_list  = document.getElementById("app_Selection");
        for (var i = 0; i< app_list.options.length; i ++){
            if (app_list.options[i].selected === true){
                final_application_list[count] =  app_list.options[i].value;
                count++;
            }
        }
        console.log("Printing Final List");
        console.log(final_application_list.toString()); 
    }
    else{
        collegue_Id = document.getElementById("ColleagueId_Selection").value;
        collegue_application_list_selected = "";

    }    

}



function display(isSelected){
    //console.log("Inside dispalya method")
    selection = isSelected;
    changeBlock();
    return;
}
function changeBlock(){
    //console.log(selection)
    if (selection == 0){
        //console.log("Selection is zero, collegue selected");
        document.getElementById("Colleague_Id_Selection").style.display ="block";
        document.getElementById("Application_Selection").style.display ="none";
    } 
    else{
        //console.log("Application seletcted");
        document.getElementById("Application_Selection").style.display ="block";
        document.getElementById("Colleague_Id_Selection").style.display ="none";
    }
    return;
}