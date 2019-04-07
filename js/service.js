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

    //function for make prototipe for send obgect
    let readyToSend = function(idF, value){
        let readyObg = new toSend();
        //get date registration and push to prototype
        let dateRegFull = new Date();
        let dateReg = dateRegFull.getFullYear() + "-" + SE.readyMonth(dateRegFull) + "-" + SE.readyDay(dateRegFull);
        toSend.prototype.registr = dateReg;

        //replace (-) and push to prototype
        let idReplace = idF.replace(/[\-]/gi, "");
        toSend.prototype[idReplace] = value;
        //for change button
        let proto = SE.variablesProto();
        if ((proto.nameSend != "") && (proto.surnameSend != "") && (proto.telSend != "") && (proto.nomerSend != "") && (proto.startdataSend != "") && (proto.kilkSend != "") && (proto.statusgгestSend != "") && (proto.statuszamovlSend != "")){
            SE.$("send").style.background = "linear-gradient(to bottom right, #0b380b, #53bb53, #0f480f)";
            SE.$("send").style.cursor = "pointer";
            SE.setMessage("message-send", "none", "", "");
        } else {
            SE.$("send").style.background = "linear-gradient(to bottom right, #000000, #d3d3d3, #000000)";
            SE.$("send").style.cursor = "no-drop";
        }
        console.log(readyObg);
    };

    //function for clear obgect prototype
    let clearObg = function(){
        let readyObg = new toSend(); 
        // console.log(readyObg);        
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

    //get variables from prototype
    let variablesProto = function(){
        let readyObg = new toSend();
        let nameSend = readyObg.__proto__.addname;
        let surnameSend = readyObg.__proto__.addsurname;
        let telSend = readyObg.__proto__.addtel;
        let nomerSend = readyObg.__proto__.addnomer;
        let startdataSend = readyObg.__proto__.addstartdata;
        let kilkSend = readyObg.__proto__.addkilk;
        let statusgгestSend = readyObg.__proto__.addstatusgгest;
        let statuszamovlSend = readyObg.__proto__.addstatuszamovl;
        let registrSend = readyObg.__proto__.registr;
        let priceSend = readyObg.__proto__.price;
        let adminSend = readyObg.__proto__.admin;
        return {
            nameSend,
            surnameSend,
            telSend,
            nomerSend,
            startdataSend,
            kilkSend,
            statusgгestSend,
            statuszamovlSend,
            registrSend,
            priceSend,
            adminSend            
        };
    }

    //function for send to database
    let sendToDB = function(){
        let proto =  SE.variablesProto();
        if ((proto.nameSend == "") || (proto.surnameSend == "") || (proto.telSend == "") || (proto.nomerSend == "") || (proto.startdataSend == "") || (proto.kilkSend == "") || (proto.statusgгestSend == "") || (proto.statuszamovlSend == "")){
            SE.setMessage("message-send", "table", "red", "Всі поля мають бути заповнені!!!");
        } else {
            let login = sessionStorage.arnikalogin; 
            let password = sessionStorage.arnikapassword; 
            SE.auditLogin(login, password, function(){
                AJAX.checkUser(login, password, function(){
                    AJAX.addToDB(proto);        
                });
            });
        }
    }

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

    //for set present date
    let presentDate = function(){
        let calDate = new Date();
        let calMounth = SE.readyMonth(calDate);
        let calYear = calDate.getFullYear();
        SE.$("cal-year").value = calYear;
        SE.$("cal-mounth").value = calMounth;
    }

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

    //set info to form for updata
    let setToUpdate = function(myObj){
        SE.$("edit-list-surname").innerHTML = myObj[0].last_name;
        SE.$("edit-list-name").innerHTML = myObj[0].first_name;
        SE.$("edit-list-tel").innerHTML = `+380 ${myObj[0].telephone}`;
        SE.$("edit-list-nomer").innerHTML = myObj[0].nomer_kimn;
        SE.$("edit-list-kilk").innerHTML = myObj[0].kilk_dniv;
        SE.$("edit-list-price").innerHTML = myObj[0].price;
        let priceSum = myObj[0].kilk_dniv * myObj[0].price;
        SE.$("edit-list-sum").innerHTML = priceSum;
        if (myObj[0].tip == "guest"){
            SE.$("edit-list-guest").innerHTML = "Відвідувач";
        } else if (myObj[0].tip == "worker"){
            SE.$("edit-list-guest").innerHTML = "Працівник";
        }
        let listDate = [];
        SE.$("edit-list-date").innerHTML = "";
        for (let i = 0; i < myObj.length; i++){
            listDate.push(myObj[i].data_zaizdu);
            SE.$("edit-list-date").innerHTML += `${myObj[i].data_zaizdu}<br>`;
        }
        SE.$("update-list").value = myObj[0].status;
        SE.$("edit-admin").innerHTML = myObj[0].admin;
        SE.$("edit-date-zapisu").innerHTML = myObj[0].data_zapisu;
        if ((myObj[0].admin_updata != null) && (myObj[0].data_zmin != null)){
            SE.$("info-date-up").style.display = "block";
            SE.$("edit-admin-apdate").innerHTML = myObj[0].admin_updata;
            SE.$("edit-date-update").innerHTML = myObj[0].data_zmin;
        }
    }

    //clear info form
    let clearInfoForm = function(){
        SE.$("edit-list-surname").innerHTML = "";
        SE.$("edit-list-name").innerHTML = "";
        SE.$("edit-list-tel").innerHTML = "";
        SE.$("edit-list-nomer").innerHTML = "";
        SE.$("edit-list-kilk").innerHTML = "";
        SE.$("edit-list-price").innerHTML = "";
        SE.$("edit-list-sum").innerHTML = "";
        SE.$("edit-list-guest").innerHTML = "";
        SE.$("edit-list-date").innerHTML = "";
        SE.$("edit-admin").innerHTML = "";
        SE.$("edit-date-zapisu").innerHTML = "";
        SE.$("info-date-up").style.display = "none";
        SE.$("edit-admin-apdate").innerHTML = "";
        SE.$("edit-date-update").innerHTML = "";
    }

    //function for add to prototype
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

    //get variables from update prototype
    let varUp = function(){
        let protoUpdate = new toUpdate(); 
        let nameUp = protoUpdate.__proto__.firstname;
        let surnameUp = protoUpdate.__proto__.lastname;
        let telUp = protoUpdate.__proto__.telephone;
        let nomerUp = protoUpdate.__proto__.nomerkimn;
        let kilkUp = protoUpdate.__proto__.kilkdniv;
        let datazapisuUp = protoUpdate.__proto__.datazapisu;
        let statusUp = protoUpdate.__proto__.status;
        let adminregUp = protoUpdate.__proto__.adminreg;
        let dateregUp = protoUpdate.__proto__.datereg;
        return {
            nameUp,
            surnameUp,
            telUp,
            nomerUp,
            kilkUp,
            datazapisuUp,
            statusUp,
            adminregUp,
            dateregUp
        };
    }

    //update DB
    let updateToDB = function(){
        let Up = SE.varUp();
        let login = sessionStorage.arnikalogin; 
        let password = sessionStorage.arnikapassword;
        //chack login and password 
        SE.auditLogin(login, password, function(){
            AJAX.checkUser(login, password, function(){
                if (sessionStorage.arnikatabs == "two"){
                    AJAX.upToDB(Up.nameUp, Up.surnameUp, Up.telUp, Up.nomerUp, Up.kilkUp, Up.datazapisuUp, Up.statusUp, Up.adminregUp, Up.dateregUp, "php/upToDBTwo.php?x=");
                } else if (sessionStorage.arnikatabs == "three"){
                    AJAX.upToDB(Up.nameUp, Up.surnameUp, Up.telUp, Up.nomerUp, Up.kilkUp, Up.datazapisuUp, Up.statusUp, Up.adminregUp, Up.dateregUp, "php/upToDBThree.php?x=");
                }
            });
        });
    }

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
        variablesProto:variablesProto,
        sendToDB:sendToDB,
        clearTabs:clearTabs,
        presentDate:presentDate,
        setDaysToCalendar:setDaysToCalendar,
        setToUpdate:setToUpdate,
        clearInfoForm:clearInfoForm,
        addToUpdareProto:addToUpdareProto,
        varUp:varUp,
        updateToDB:updateToDB
    };
})();