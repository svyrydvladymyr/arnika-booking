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
                    
                    //get admin name and push to prototype
                    let admin = `${myObj.surname} ${myObj.name}`;
                    toSend.prototype.admin = admin;
                    
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
                let resDate = nextday.getFullYear() + "-" + SE.readyMonth(nextday) + "-" + SE.readyDay(nextday);
                //run function for get room on this date
                AJAX.getRoom(numRoom, resDate);
            } 
            //clear message
            SE.setMessage("message-room", "none", "", "Кімната зайнята на:");
            //show true on icon
            SE.iconON("room-error", "room-true", "true");
            //if all true, push to obgect prototype 
            SE.readyToSend("add-nomer", SE.$("add-nomer").value);
            SE.readyToSend("add-start-data", SE.$("add-start-data").value);
            SE.readyToSend("add-kilk", SE.$("add-kilk").value);
        } else {
            //show false on icon
            SE.iconON("room-error", "room-true", "false");

        }
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
                            let resulrDate = SE.readyDay(createDate) + " - " + SE.readyMonth(createDate) + " - " + createDate.getFullYear();
                            //show message if room not free
                            SE.messageRoom("message-room", "table", "#111111", resulrDate);
                            SE.iconON("room-error", "room-true", "false");
                            SE.readyToSend("add-nomer", "");
                            SE.readyToSend("add-start-data", "");
                            SE.readyToSend("add-kilk", "");
                        } 
                    }                            
                }
            };
            xmlhttp.open("GET", "php/getroom.php?x=" + dbParam, true);
            xmlhttp.send();
    }; 


    // function for autorisation
    let getPrice = function(room){
        let obj, dbParam, xmlhttp, myObj, trimObg, getLength, res;
            obj = {"room":room};           
            dbParam = JSON.stringify(obj);
            xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    //check on true response
                    // console.log(this.responseText);
                    if (this.responseText != "[]"){
                        //cut first and last symbol in Object
                        trimObg = this.responseText.trim();
                        getLength = trimObg.length-1; 
                        res = trimObg.slice(1, getLength);               
                        
                        //parse Object
                        myObj = JSON.parse(res);
                    
                        //get admin name and push to prototype
                        let price = `${myObj.price}`;
                        let priceParse = parseInt(price);
                        toSend.prototype.price = priceParse;
                        SE.setMessage("message-price", "table", "green", `${price}`);   
                    }  else {
                        console.log(this.responseText);
                    }
                }
            };
            xmlhttp.open("GET", "php/price.php?x=" + dbParam, true);
            xmlhttp.send();
    }; 

  
        // function for autorisation
        let addToDB = function(proto){
            let obj, dbParam, xmlhttp;
                obj = { "name":proto.nameSend, "surname":proto.surnameSend, "tel":proto.telSend, "number":proto.nomerSend, "dz":proto.startdataSend, "kilk":proto.kilkSend, "price":proto.priceSend, "buking":proto.statuszamovlSend, "tip":proto.statusgгestSend, "admin":proto.adminSend, "datazapovn":proto.registrSend};
                console.log(obj);
                dbParam = JSON.stringify(obj);
                xmlhttp = new XMLHttpRequest();
                xmlhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {    
                        SE.setMessage("autoriz-message-wrap", "none", "", ""); 
                        let trimRes = this.responseText.trim();
                        if (trimRes == "") {
                            SE.$("icon-send").style.display = "table";
                            setTimeout(function(){
                                SE.$("icon-send").style.display = "none";
                                SE.setMessage("message-send", "table", "green", "Запис додано!");
                            }, 2000);
                            setTimeout(function(){
                                SE.setMessage("message-send", "none", "", "");
                                SE.setMessage("message-price", "none", "", "");
                                SE.clearObg();
                                SE.clearValue();
                                SE.clearIcon();
                            }, 4000); 
                        }  else {
                            SE.setMessage("message-send", "table", "red", `${this.responseText}`);
                        } 
                    }
                };
                xmlhttp.open("GET", "php/addToDB.php?x=" + dbParam, true);
                xmlhttp.send();
        }; 

    return {
        getJson:getJson,
        checkUser:checkUser,
        checkRoom:checkRoom,
        getRoom:getRoom,
        getPrice:getPrice,
        addToDB:addToDB
    };
})();