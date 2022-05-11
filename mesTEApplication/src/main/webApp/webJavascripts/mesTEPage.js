//Declaring class varables which are DOM attributes
var userId = "";
var userName = "" ;
var is_Terminal_User_flag = 0 ;   // Default set is as false
var is_application_selected_flag =  1;  // 0 for Collegue Id, and 1 for Application
var packageInitialize = "<option>Select Package</option><option value='SelectAll'>Select All</option>";
var applicationInitialize = "<option>Select Application</option><option value='SelectAll'>Select All</option>";
var packageNam = ""
var application = ""
var package_selected = "" ;
var collegueId = "";
var select = document.querySelector('#package_Selection');
var final_application_list_Intialize = [];
var final_application_list = final_application_list_Intialize;
var packageName = "";
var loginId = "TE457296";


// sumit form called ajax related to create rquest called from here
function submitForm(){
    alert("How are you");
    setDetails();
    createRequestAJAX();
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
    display(1);
    getPackageListAJAX();
}


function createRequestAJAX(){
	//var data = new FormData();
	//var data = new JSONObject();
	//data.put('userId', this.userId);
	//data.put('userName', this.userName);
	//data.put('isTerminalUserFlag', 1);
	//data.put('isApplicationSelectedFlag', this.is_application_selected_flag);
	//data.put('collegueId', this.collegueId);
	//data.put('packageName', this.packageName);
	//data.put('packageNameList', null);
	//data.put('applicationList', this.final_application_list);
	const data = {
		"loginId": this.loginId,
		'userId': this.userId,
		'userName': this.userName,
		'isTerminalUserFlag': is_Terminal_User_flag,
		'isApplicationSelectedFlag': this.is_application_selected_flag,
		'collegueId': this.collegueId,
		'packageName': this.packageName,
		'packageNameList': null,
		'applicationList': this.final_application_list
	}
	const data2 = {
 	"userId":"TS457274",
	"userName":"Chetan",
	"isTerminalUserFlag":1,
 	"isApplicationSelectedFlag":1,
	"collegueId": " ",
	"packageName":"CAR",
	"packageNameList": null,
	"applicationList":["Foryuner","Activa"]
	}
	
	console.log(typeof data);
	
	
	//for (var pair of data.entries()) {
    //console.log(pair[0]+ ', ' + pair[1]); 
	//}
	
	var xhttp = new XMLHttpRequest();
	xhttp.open("POST", "http://localhost:8085/Request/createRequest", false);
  	xhttp.setRequestHeader("Content-type", "application/json");
    
  	xhttp.send(JSON.stringify(data));

 	xhttp.onreadystatechange = function() {
    	if (this.readyState == 4 && this.status == 200) {
		console.log("Suuccessully created object");
		}
	
	}
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
		final_application_list = final_application_list_Intialize;
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
	
        collegueId = document.getElementById("Colleague_Id").value;
        collegue_application_list_selected = "";

    }    

}


function checkTerminalUser(){
	 userId = document.getElementById("Input_UserID").value;
	if (userId.includes("KY")){
		is_Terminal_User_flag = 1;
		document.getElementById("UserInfo").innerHTML = "Terminal User Selected";
	}
	else if (userId.includes("TE")){
		is_Terminal_User_flag = 0;
		document.getElementById("UserInfo").innerHTML = "Web User Selected";
	}
	else{
		is_Terminal_User_flag = 3;
		document.getElementById("UserInfo").innerHTML = "Invalid User Selected";
	}
	
}

function getPackageListAJAX() {
  packageNam = packageInitialize
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
	var packageList = null;
    if (this.readyState == 4 && this.status == 200) {
	packageList = JSON.parse(this.response)['object']
	console.log(packageList);
	for(var i = 0 ; i < packageList.length; i++){
        packageNam += "<option value=" + packageList[i] + ">"  + packageList[i]  + "</option>"
       }
      
    }
	console.log(packageNam);
	document.getElementById("package_Selection").innerHTML = packageNam;
	return;
    
  };
  xhttp.open("GET", "http://localhost:8085/Request/getPackageListFromDB", false);
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.send();
}


function getApplicationListAJAX() {
  packageName = document.getElementById("package_Selection").value;
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





function getUserDetails(){
    document.getElementById("Input_UserName").value = "Chetan Zambare"
}

function getColleagueDetails(){
    document.getElementById("Input_ColleagueName").value = "Rohit Zambare"
}



function display(isSelected){
    //console.log("Inside dispalya method")
    is_application_selected_flag  = isSelected;
    changeBlock();
    return;
}
function changeBlock(){
		document.getElementById("app_Selection").innerHTML = applicationInitialize;
    //console.log(selection)
    if (is_application_selected_flag  == 0){
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