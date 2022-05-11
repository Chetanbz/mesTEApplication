


var tableHeader= "<table><tr><th>Request No</th><th>UserId</th><th>User Name</th><th>Package Name</th><th>Auto Approve Applications</th><th>Approved Application </th><th>Rjected Application </th><th>Login User</th><th>Created Date</th></tr>"

var tableContent ;
var count = 0;

window.onload = function(){
	//getAllRequestInfo();
}

function callgetPendingRequestInfo(){
	if (count%2 == 0){
		getPendingRequestInfo();
	}
	else{
		document.getElementById('pending_Approval_requestTable').innerHTML = "";
		tableContent = "";
	}
	count++;
}

function getPendingRequestInfo(){
	var xhttp = new XMLHttpRequest();
	tableContent = tableHeader;
	xhttp.onreadystatechange = function() {
	var requestList = null;
    if (this.readyState == 4 && this.status == 200) {
		requestList = JSON.parse(this.response)['object']
		console.log(requestList);
		
		for(var i = 0 ; i < requestList.length; i++){
			var reqObject = requestList[i]; 
			tableContent += "<tr><td>" + reqObject['mesTERequestAccessId'] + "</td><td>" + reqObject['userId'] +
			                 "</td><td>"+reqObject['userName'] + "</td><td>" + reqObject['packageName'] + 
                             "</td><td>"+reqObject['applicationStatus']['autoApproveApplications'].toString() +
                             "</td><td>"+reqObject['applicationStatus']['approveApplications'].toString() +
                             "</td><td>"+reqObject['applicationStatus']['rejectedApplicatios'].toString() +
                             "</td><td>"+reqObject['loginId'] +
                             "</td><td>"+reqObject['localDate']

			console.log(reqObject['applicationList']['autoApproveApplications']);
			console.log(requestList[i]);
			console.log(reqObject['userId']);
       		}
	   }
	}
	
	
	xhttp.open("GET", "http://localhost:8085/Request/get", false);
  	xhttp.setRequestHeader("Content-type", "application/json");
  	xhttp.send();

    
	document.getElementById('pending_Approval_requestTable').innerHTML = tableContent;
   
}