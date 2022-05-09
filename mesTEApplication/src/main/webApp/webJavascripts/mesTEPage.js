//Declaring class varables which are DOM attributes
var userId = "";
var userName = "" ;
var is_Terminal_User_flag = 0 ;   // Default set is as false
var is_application_selected_flag = 0 ;
var packageInitialize = "<option>Select Package</option><option value='SelectAll'>Select All</option>";
var applicationInitialize = "<option>Select Application</option><option value='SelectAll'>Select All</option>";
var package = ""
var application = ""
var package_selected = "" ;

var collegueId = "";
var select = document.querySelector('#package_Selection');
var final_application_list = [];

//document.getElementById("SubmitButton").addEventListener("click", submit);

// sumit form called ajax related to create rquest called from here
function submitForm(){
    alert("How are you");
    setDetails();
}

// this wll set final application list which will be passed while creating request.


function applicationSelected(){
    if (is_application_selected_flag == 0){
        final_application_list = application_list_selected;
    }else{
        final_application_list = collegue_application_list_selected;
    }
}

window.onload = function(){
    //var selection = 1;
    //document.getElementById("Application_Selection").style.display = "block"
    //document.getElementById("Colleague_Id_Selection").style.display = "none" 
    display(1);
    getPackageListAJAX();
    //document.getElementById("package_Selection").innerHTML = package
}
function getPackage(){
    //var package_list = ["Car","Scooty", "Bike", "Cycle","Skate","Aeroplane"];
    var package_list =  getPackageListAJAX();
    for(var i = 0 ; i < package_list.length; i++){
        package += "<option value=" + package_list[i] + ">"  + package_list[i]  + "</option>"
    }
    //getPackageList();
    return;
}

function getPackageListAJAX() {
  package = packageInitialize
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
	var packageList = null;
    if (this.readyState == 4 && this.status == 200) {
	packageList = JSON.parse(this.response)['object']
	console.log(packageList);
	for(var i = 0 ; i < packageList.length; i++){
        package += "<option value=" + packageList[i] + ">"  + packageList[i]  + "</option>"
       }
      
    }
	console.log(package);
	document.getElementById("package_Selection").innerHTML = package;
	return;
    
  };
  xhttp.open("GET", "http://localhost:8085/Request/getPackageListFromDB", false);
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.send();
}

function getApplicationListAJAX() {
  var packageName = document.getElementById("package_Selection").value;
  var applicationlink = "http://localhost:8085/Request/getApplicationListFromDB/" + packageName +"/" +  is_Terminal_User_flag;
  console.log(applicationlink);
  application = applicationInitialize 
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", applicationlink, true);
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.send();

  xhttp.onreadystatechange = function() {
	var applicationList = null;
	//console.log(this.readyState);
	//console.log(this.this.status);
    if (this.readyState == 4 && this.status == 200) {
	applicationList = JSON.parse(this.response)['object']
	console.log(applicationList);
	for(var i = 0 ; i < applicationList.length; i++){
        application += "<option value=" + applicationList[i] + ">"  + applicationList[i]  + "</option>"
       }
      
    }
    document.getElementById("app_Selection").innerHTML = application;
	return;
    
  };

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
		document.getElementById("app_Selection").innerHTML = applicationInitialize;
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