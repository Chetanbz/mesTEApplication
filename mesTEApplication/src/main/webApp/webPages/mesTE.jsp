<!DOCTYPE html> 
<html>
    <head>
        <link rel="stylesheet" href="/webCSS/mesTEPage.css">
        <script src="/webJavascripts/mesTEPage.js"></script>
        <title>mesTE Application Access</title>
    </head>
    <body>
        <form   >
            <div id = "UserIDInfo">
                <label for="UserId">UserID:</label>
                <input type="text" id="Input_UserID" name="Input_UserID">
                <a onclick="getUserDetails()" href="#"> GetUserDetails</a>
            </div>
            <div id = "UserNameInfo">
                <label for="UserName">UserName:</label>
                <input type="text" id="Input_UserName" name="Input_UserName"><br><br>
            </div>
            <div id = "checkBoxSelection">
                <input type="radio" id="Application_Box" name="Selection" checked onclick="display(1)" value="Application_Selection">
                <label for="Application_Box" title="Use can select Package and Application directly">Select Application</label>
                <input type="radio" id="colleagueId_Box" name="Selection" onclick="display(0)" value="ColleagueId_Selection">
                <label for="colleagueId_Box" title="User can get same application as his Colleague"> Select Colleague Id </label>
            </div>
            <div  id = "Application_Selection">
                <label for="package_Selection"  title="Selection Package for which you want access ex .. Andon, Terminal, MMLP">Select Package:</label>
                <select id="package_Selection" onchange="getApplicationListAJAX()" name="package_Selection" size="1">
                  
                </select>
                <label for="app_Selection" title="Select Application under mention package you can select All application or individaul Application " >Select Application:</label>
                <select id="app_Selection" multiple  name="app_Selection" size="4">

                </select>
            </div>
            <div id = "Colleague_Id_Selection">
                <label for="Colleague_Id" title="This will help to copy role from collegue Id">Select Colleague Id:</label>
                <input type="Colleague_Id" id="Colleague_Id" name="Colleague_Id">
                <a onclick="getColleagueDetails()" href="#"> Get_Colleague_Details</a>
                <div id = "ColleagueNameInfo">
                    <label for="ColleagueUserName">Colleague Name:</label>
                    <input type="text" id="Input_ColleagueName" name="Input_ColleagueName"><br><br>
                </div>

            </div>
            <div id="SubmitButton">
                <input type="button" onclick="submitForm()" class="Submit" value="Submit" >
                
            </div>
        
          </form>
          
        

    </body>



</html>



