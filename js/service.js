let SE = (function(){
    // function for get id node
    let $ = function(val) {
        let getid = document.getElementById(val);
        return getid;
    };

    // function for set parametrs
    let setSettings = function(enter){
        SE.$("enter-open").innerHTML = enter;
        AJAX.getJson("json/package.json");
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
        let nameSend = readyObg.__proto__.addname;
        let surnameSend = readyObg.__proto__.addsurname;
        let telSend = readyObg.__proto__.addtel;
        let nomerSend = readyObg.__proto__.addnomer;
        let startdataSend = readyObg.__proto__.addstartdata;
        let kilkSend = readyObg.__proto__.addkilk;
        let statusgгestSend = readyObg.__proto__.addstatusgгest;
        let statuszamovlSend = readyObg.__proto__.addstatuszamovl;

        if ((nameSend != "") && (surnameSend != "") && (telSend != "") && (nomerSend != "") && (startdataSend != "") && (kilkSend != "") && (statusgгestSend != "") && (statuszamovlSend != "")){
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
        console.log(readyObg);        
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
    };

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
        variablesProto:variablesProto
    };
})();