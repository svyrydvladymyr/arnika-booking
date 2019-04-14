let SE = (function(){
    // function for get id node
    let $ = function(val) {
        let getid = document.getElementById(val);
        return getid;
    };

    // function for set parametrs
    let setSettings = function(enter){
        SE.$("enter-open").innerHTML = enter;
        if (sessionStorage.arnikatabs == "two"){
            AJAX.getJson("json/packageTwo.json");
            SE.$("add-nomer").max = 12;
        } else if (sessionStorage.arnikatabs == "three"){
            AJAX.getJson("json/packageThree.json");
            SE.$("add-nomer").max = 15;
        }
    };

    // function for message
    let setMessage = function(box, boxstatus, color, message){
        SE.$(box).style.display = boxstatus;
        SE.$(box).innerHTML = `<p id="message">${message}</p>`;
        SE.$(box).style.color = color;
    };  
    
    // function for room message 
    let messageRoom = function(box, boxstatus, color, message){
        SE.$(box).style.display = boxstatus;
        SE.$(box).innerHTML += `<p id="message">${message}</p>`;
        SE.$(box).style.color = color;
    };

    //audit login
    let auditLogin = function(login, password, fun){
        if ((login != "") && (password != "")) {
            fun();
        }
    };

    //cut incorrect symbol 
    let incorrectCheck = function(val, reg, fun){
        let newReg = new RegExp(reg, "gi");
        let input = SE.$(val).value;
        let res = input.replace(newReg, '');
        if ((val == "add-name")||(val == "add-surname")){
            SE.$(val).value = res.charAt(0).toUpperCase() + res.slice(1);
            fun();
        } else {
            SE.$(val).value = res;
            fun();
        }
    };

    //change icon
    let iconON = function(errorF, trueF, on){
        if (on == "true"){
            SE.$(errorF).style.display = "none";
            SE.$(trueF).style.display = "table";
        } else if (on == "false") {
            SE.$(errorF).style.display = "table";
            SE.$(trueF).style.display = "none";
        }
    };

    //date format day
    let readyDay = function(fullDate){
        let finDay, createDate;
        createDate = new Date(fullDate);
        if ((createDate.getDate() >= 1) && (createDate.getDate() <= 9)) {
            finDay = "0" + createDate.getDate();
            return finDay;
        } else {
            finDay = createDate.getDate();
            return finDay;
        }
    };  

    //date format month
    let readyMonth = function(fullDate){    
        let finMonth, createDate;
        createDate = new Date(fullDate);
        if ((createDate.getMonth() >= 1) && (createDate.getMonth() <= 9)) {
            finMonth = "0" + (createDate.getMonth()+1);
            return finMonth;
        } else {
            finMonth = createDate.getMonth();
            return finMonth;
        }
    };

    //function for clear obgect prototype
    let clearObg = function(){
        toSend.prototype.registr = "";
        toSend.prototype.addname = "";
        toSend.prototype.addsurname = "";
        toSend.prototype.addtel = "";
        toSend.prototype.addnomer = "";
        toSend.prototype.addstartdata = "";
        toSend.prototype.addkilk = "";
        toSend.prototype.addstatusgгest = "";
        toSend.prototype.addstatuszamovl = "";
        toSend.prototype.price = "";
    };

    //function for clear value in inputs
    let clearValue = function(){
        SE.$("add-name").value = "";
        SE.$("add-surname").value = "";
        SE.$("add-tel").value = "";
        SE.$("add-nomer").value = "";
        SE.$("add-start-data").value = "";
        SE.$("add-kilk").value = "";
        SE.$("add-status-gгest").value = "";
        SE.$("add-status-zamovl").value = "";
    };

    //function for clear true icon
    let clearIcon = function(){
        SE.$("name-true").style.display = "none";
        SE.$("surname-true").style.display = "none";
        SE.$("tel-true").style.display = "none";
        SE.$("room-true").style.display = "none";
        SE.$("status-gгest-true").style.display = "none";
        SE.$("status-zamovl-true").style.display = "none";
        SE.$("name-error").style.display = "none";
        SE.$("surname-error").style.display = "none";
        SE.$("tel-error").style.display = "none";
        SE.$("room-error").style.display = "none";
        SE.$("status-gгest-error").style.display = "none";
        SE.$("status-zamovl-error").style.display = "none";
    };

    //function for clear tabs
    let clearTabs = function(){
        SE.setMessage("message-send", "none", "", "");
        SE.setMessage("message-price", "none", "", ""); 
        SE.setMessage("message-room", "none", "", "Кімната зайнята на:");
        SE.setMessage("message-add-name", "none", "", "");
        SE.setMessage("message-add-surname", "none", "", "");
        SE.setMessage("message-add-tel", "none", "", "");
        SE.setMessage("message-add-nomer", "none", "", "");
        SE.setMessage("message-add-start-data", "none", "", "");
        SE.setMessage("message-add-kilk", "none", "", "");
        SE.setMessage("message-add-status-grest", "none", "", "");
        SE.setMessage("message-add-status-zamovl", "none", "", "");
    }

    //function for make prototype for send obgect
    let readyToSend = function(idF, value){
        //get date registration and push to prototype
        let dateRegFull = new Date();
        let dateReg = dateRegFull.getFullYear() + "-" + SE.readyMonth(dateRegFull) + "-" + SE.readyDay(dateRegFull);
        toSend.prototype.registr = dateReg;
        //replace (-) and push to prototype
        let idReplace = idF.replace(/[\-]/gi, "");
        toSend.prototype[idReplace] = value;
        //for change button
        if ((sendReadyObg.addname != "") && (sendReadyObg.addsurname != "") && (sendReadyObg.addtel != "") && (sendReadyObg.addnomer != "") && (sendReadyObg.addstartdata != "") && (sendReadyObg.addkilk != "") && (sendReadyObg.addstatusgгest != "") && (sendReadyObg.addstatuszamovl != "")){
            SE.$("send").style.background = "linear-gradient(to bottom right, #0b380b, #53bb53, #0f480f)";
            SE.$("send").style.cursor = "pointer";
            SE.setMessage("message-send", "none", "", "");
            SE.$("send").addEventListener("click", SE.sendToDB); 
        } else {
            SE.$("send").style.background = "linear-gradient(to bottom right, #000000, #d3d3d3, #000000)";
            SE.$("send").style.cursor = "no-drop";
        }
    };

    //function for send to database
    let sendToDB = function(){
        if ((sendReadyObg.addname == "") || (sendReadyObg.addsurname == "") || (sendReadyObg.addtel == "") || (sendReadyObg.addnomer == "") || (sendReadyObg.addstartdata == "") || (sendReadyObg.addkilkSend == "") || (sendReadyObg.addstatusgгest == "") || (sendReadyObg.addstatuszamovl == "")){
            SE.setMessage("message-send", "table", "red", "Всі поля мають бути заповнені!!!");
        } else {
            let login = sessionStorage.arnikalogin; 
            let password = sessionStorage.arnikapassword; 
            //chack on true login and password
            SE.auditLogin(login, password, function(){
                AJAX.checkUser(login, password, function(){
                    AJAX.addToDB();        
                });
            });
        }
    };

    //for set present date
    let presentDate = function(){
        let calDate = new Date();
        let calMounth = SE.readyMonth(calDate);
        let calYear = calDate.getFullYear();
        SE.$("cal-year").value = calYear;
        SE.$("cal-mounth").value = calMounth;
    };

    //for set days in calendar
    let setDaysToCalendar  = function(){
        SE.$("cal-body").innerHTML = "";
        let calMounth = SE.$("cal-mounth").value;
        let calYear =  SE.$("cal-year").value;
        let firstDay = new Date(calYear, calMounth - 1, 1);
        let lastDay = new Date(calYear, calMounth, 0);
        //get first day of mounth
        let numFirstDayB = firstDay.getDay();
        if (numFirstDayB == 0){
            numFirstDay = 7;
        } else {
            numFirstDay = firstDay.getDay();
        }
        //get last day of mounth
        let kilkDay = lastDay.getDate();
        //add empty cell       
        for (let i=1; i < numFirstDay; i++){
            SE.$("cal-body").innerHTML += `<p class="empty-day"></p>`;
        }
        //add cell  
        for (let i=1; i <= kilkDay; i++){
            SE.$("cal-body").innerHTML += `<p class="full-day" id="${calYear}-${calMounth}-${i}"">${i}</p>`;
            let busyDte = `${calYear}-${calMounth}-${i}`;
            if (sessionStorage.arnikatabs == "two"){
                AJAX.getBusyRoom(busyDte, "php/busyRoomTwo.php?x=");
            } else if (sessionStorage.arnikatabs == "three"){
                AJAX.getBusyRoom(busyDte, "php/busyRoomThree.php?x=");
            }               
        }                   
        //add color for holidays     
        for (let i = 1; i <= kilkDay; i++){
            let getID = document.getElementsByClassName("full-day");
            let r = i - 1; 
            let idDay = getID[r].id;
            let makeDate = new Date(idDay);
            let getWeekDay = makeDate.getDay();
            //add color for saturday
            if (getWeekDay == 6) {
                let sat = calYear + "-" + calMounth + "-" + i;
                SE.$(sat).classList.add("set-color-holiday");
            }
            //add color for sunday
            if (getWeekDay == 0) {
                let sun = calYear + "-" + calMounth + "-" + i;
                SE.$(sun).classList.add("set-color-holiday");
            }  
        }
        //add eventListener to cell
        let v = document.getElementsByClassName("full-day");
        for(let i = 0; i < v.length; i++){
            v[i].addEventListener("click", function(){
                VW.selectDay(this);
            });
        }
        VW.selectPresentDay();
    }    

    //function for add variables to prototype
    let addToUpdareProto = function(protoUp){
        toUpdate.prototype.lastname = protoUp[0].last_name;
        toUpdate.prototype.firstname = protoUp[0].first_name;
        toUpdate.prototype.telephone = protoUp[0].telephone;
        toUpdate.prototype.nomerkimn = protoUp[0].nomer_kimn;
        toUpdate.prototype.kilkdniv = protoUp[0].kilk_dniv;
        toUpdate.prototype.datazapisu = protoUp[0].data_zapisu;
        toUpdate.prototype.status = protoUp[0].status;
        toUpdate.prototype.adminreg = SE.$("demo").innerHTML;
        let toDay = new Date();
        let resDateUp = toDay.getFullYear() + "-" + SE.readyMonth(toDay) + "-" + SE.readyDay(toDay);
        toUpdate.prototype.datereg = resDateUp;
    };    

    //update DB
    let updateToDB = function(){
        let login = sessionStorage.arnikalogin; 
        let password = sessionStorage.arnikapassword;
        //chack login and password 
        SE.auditLogin(login, password, function(){
            AJAX.checkUser(login, password, function(){
                if (sessionStorage.arnikatabs == "two"){
                    AJAX.upToDB("php/upToDBTwo.php?x=");
                } else if (sessionStorage.arnikatabs == "three"){
                    AJAX.upToDB("php/upToDBThree.php?x=");
                }
            });
        });
    }

    //reload period list
    let reloadPeriod = function(){
        let listZ = SE.$("id-z").value;
        let listPO = SE.$("id-po").value;
        //get status from radio
        let radios = document.getElementsByName('id-status');
        for (let i = 0, length = radios.length; i < length; i++){
            if (radios[i].checked){
                listStatus = radios[i].value;
                break;
            }
        }
        //get sort from session
        let sorts = sessionStorage.sortuvannia;
        if ((listZ != "") && (listPO != "")){
            SE.auditLogin(sessionStorage.arnikalogin, sessionStorage.arnikapassword, function(){
                AJAX.checkUser(sessionStorage.arnikalogin, sessionStorage.arnikapassword, function(){
                    if (sessionStorage.arnikatabs == "two"){
                        AJAX.getRoomPeriod(listZ, listPO, listStatus, sorts, "php/listPeriodTwo.php?x=");
                    } else if(sessionStorage.arnikatabs == "three"){
                        AJAX.getRoomPeriod(listZ, listPO, listStatus, sorts, "php/listPeriodThree.php?x=");
                    }                 
                });
            });
        };  
    };

    //function for sort
    let sortList = function(myObj, field){
        myObj.sort((a,b)=> {
            let objectFields =  Object.keys(a);
            if(objectFields.length === 0) return 0;
            let sortField = field in a ? field : objectFields[0];
            if(a[sortField] < b[sortField]) return -1;
            if(a[sortField] > b[sortField]) return 1;
            return 0;
        });   
    };

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
                    if (res != ""){
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
                }
            };
            xmlhttp.open("GET", "php/enter.php?x=" + dbParam, true);
            xmlhttp.send();
    };

    return {
        $:$, 
        setSettings:setSettings,
        setMessage:setMessage,
        messageRoom:messageRoom,
        auditLogin:auditLogin,
        incorrectCheck:incorrectCheck,
        iconON:iconON,
        readyDay:readyDay,
        readyMonth:readyMonth,
        readyToSend:readyToSend,
        clearObg:clearObg,
        clearValue:clearValue,
        clearIcon:clearIcon,
        sendToDB:sendToDB,
        clearTabs:clearTabs,
        presentDate:presentDate,
        setDaysToCalendar:setDaysToCalendar,
        addToUpdareProto:addToUpdareProto,
        updateToDB:updateToDB,
        reloadPeriod:reloadPeriod,
        sortList:sortList,
        checkUser:checkUser
    };
})();