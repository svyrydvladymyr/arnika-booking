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
        //get date registration
        let dateRegFull = new Date();
        let dateReg = dateRegFull.getFullYear() + "-" + SE.readyMonth(dateRegFull) + "-" + SE.readyDay(dateRegFull);
        toSend.prototype.datazaizdu = dateReg;
        //replace (-) and push to prototipe
        let idReplace = idF.replace(/[\-]/gi, "");
        toSend.prototype[idReplace] = value;



        console.log(readyObg.__proto__.datazaizdu);
        console.log(readyObg.__proto__.addname);
        console.log(readyObg.__proto__.addsurname);
        console.log(readyObg.__proto__.addtel);
        console.log(readyObg.__proto__.addnomer);
        console.log(readyObg.__proto__.addstartdata);
        console.log(readyObg.__proto__.addkilk);
        console.log(readyObg);
    };

    //function for clear obgect prototype and icon true
    let clearObg = function(){
        let readyObg = new toSend(); 
        console.log(readyObg);

        
        toSend.prototype.datazaizdu = "";
        toSend.prototype.addname = "";
        SE.$("add-name").value = "";
        toSend.prototype.addsurname = "";
        SE.$("add-surname").value = "";
        toSend.prototype.addtel = "";
        SE.$("add-tel").value = "";
        toSend.prototype.addnomer = "";
        SE.$("add-nomer").value = "";
        toSend.prototype.addstartdata = "";
        SE.$("add-start-data").value = "";
        toSend.prototype.addkilk = "";


        SE.$("add-kilk").value = "";
        SE.$("name-true").style.display = "none";
        SE.$("surname-true").style.display = "none";
        SE.$("tel-true").style.display = "none";
        SE.$("room-true").style.display = "none";

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
        clearObg:clearObg

    };
})();