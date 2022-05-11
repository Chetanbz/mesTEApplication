

export default class AjaxCall {
  
    constructor(){
	this.baseUrl = "http://localhost:8085/Request";
	this.serverLink = "";
     }
    
   demo(){
	console.log("Hello From Ajax Mathod");
    }

    getpackage(){
	    var packageString = ""
		var xhttp = new XMLHttpRequest();
		this.serverLink =  this.baseUrl +  "/getPackageListFromDB";
		
		xhttp.open("GET", this.serverLink, false);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.send();

    	xhttp.onreadystatechange = function() {
		var packageList = null;
    	if (this.readyState == 4 && this.status == 200) {
			packageList = JSON.parse(this.response)['object']
			console.log(packageList);
			for(var i = 0 ; i < packageList.length; i++){
        		packageString += "<option value=" + packageList[i] + ">"  + packageList[i]  + "</option>"
       		   }
    	}
		console.log(packageString);
		return packageString;
     	};
	  }



 getApplicationListAJAX() {
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
		}
 }


}