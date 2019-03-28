let AJAX = (function(){

    // function for get object from (*.json) file
    let getJson = function(namefile) {
        var file = new XMLHttpRequest();
        file.onreadystatechange = function() {
            if (file.readyState === 4 && file.status == "200") {
                let data = JSON.parse(file.responseText);
                for (let id in data) {
                    if (SE.$(id)){    
                        SE.$(id).innerHTML = data[id];
                    }
                }
                for (let id in data.placeholder) {  
                    if (SE.$(id)){    
                        SE.$(id).placeholder = data.placeholder[id];
                    }
                }
                for (let id in data.label) {  
                    if (SE.$(id)){    
                        SE.$(id).innerHTML = data.label[id];
                    }
                }
            }
        };
        file.open("GET", namefile, true);
        file.send(null);
    };

    // function for autorisation
    let checkUser = function(login, password, funCall){
        let obj, dbParam, xmlhttp, myObj, trimObg, getLength, res;
            let resLogin = login.replace(new RegExp(REG.exp().loginCut, "gi"), '');
            let resPassword = password.replace(new RegExp(REG.exp().passwordCut, "gi"), '');
            //check on true and create object for send to backend
            if ((new RegExp(REG.exp().loginTest, "gi").test(resLogin)) && (new RegExp(REG.exp().passwordTest, "gi").test(resPassword))) {
                obj = { "login":login, "password":password};
            }
            dbParam = JSON.stringify(obj);
            xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    //check on true response
                    if (this.responseText = "[]"){
                        SE.setMessage("autoriz-message-wrap", "table", "#b62b2b", "Не вірний логін або пароль");
                    } 
                    //cut first and last symbol in Object
                    trimObg = this.responseText.trim();
                    getLength = trimObg.length-1; 
                    res = trimObg.slice(1, getLength);               
                    //parse Object
                    myObj = JSON.parse(res);
                    SE.$("demo").innerHTML = `${myObj.surname} ${myObj.name}`;
                    //if get accesses set session
                    sessionStorage.arnikalogin = myObj.login;
                    sessionStorage.arnikapassword = myObj.password;
                    //if get accesses show hidden DOM
                    funCall();                               
                }
            };
            xmlhttp.open("GET", "php/enter.php?x=" + dbParam, true);
            xmlhttp.send();
    }; 


    // function for get room on this date
    let getRoom = function(room, date){
        let obj, dbParam, xmlhttp, myRoom, trimObg, getLength, res;
            obj = { "room":room, "date":date};
            dbParam = JSON.stringify(obj);
            xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    if (this.responseText != "[]"){
                        trimObg = this.responseText.trim();
                        getLength = trimObg.length-1; 
                        res = trimObg.slice(1, getLength); 
                        //if result are not empty
                        if (res != ""){
                            myRoom = JSON.parse(res);
                            //create new date from result
                            let createDate = new Date(myRoom.data_zaizdu);
                            let finDay;
                            if ((createDate.getDate() >= 1) && (createDate.getDate() <= 9)) {
                                finDay = "0" + createDate.getDate();
                            } else {
                                finDay = createDate.getDate();
                            }
                            let resulrDate = finDay + " - " + ("0" + (createDate.getMonth()+1)) + " - " + createDate.getFullYear();
                            //show message if room not free
                            SE.messageRoom("message-room", "table", "#111111", resulrDate); 
                            SE.iconON("room-error", "room-true", "false");
                        } 
                    }                            
                }
            };
            xmlhttp.open("GET", "php/getroom.php?x=" + dbParam, true);
            xmlhttp.send();
    }; 

    // function for check rooms
    let checkRoom = function(){
        let numRoom = SE.$("add-nomer").value;
        let dateStart = SE.$("add-start-data").value;
        let kilkDay = SE.$("add-kilk").value;
        if ((numRoom != "") && (dateStart != "") & (kilkDay != "")){
            let day = 0;
            for(let i = 0; i < kilkDay; i++){
                let result = new Date(dateStart);
                //add day
                let nextday = new Date(result.getFullYear(),result.getMonth(),result.getDate()+day);
                day = day + 1;
                //format date
                let resDate = nextday.getFullYear() + "-" + ("0" + (nextday.getMonth() + 1)) + "-" + nextday.getDate();
                //run function for get room on this date
                AJAX.getRoom(numRoom, resDate);
            } 
            //clear message
            SE.setMessage("message-room", "none", "", "Кімната зайнята на:");
            //show true on icon
            SE.iconON("room-error", "room-true", "true");
        } else {
            //show false on icon
            SE.iconON("room-error", "room-true", "false");
        }
    };    

    return {
        getJson:getJson,
        checkUser:checkUser,
        checkRoom:checkRoom,
        getRoom:getRoom
    };
})();