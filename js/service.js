let SE = (function(){

    // function for get id node
    let $ = function(val) {
        return getid = document.getElementById(val);
    };

    // function for get object from (*.json) file
    let getJson = function(namefile) {
        var file = new XMLHttpRequest();
        file.onreadystatechange = function() {
            if (file.readyState === 4 && file.status == "200") {
                let data = JSON.parse(file.responseText);
                //set innerHTML
                for (let id in data) {if (SE.$(id)) {SE.$(id).innerHTML = data[id]}}
                //set placeholder
                for (let id in data.placeholder) {if (SE.$(id)) {SE.$(id).placeholder = data.placeholder[id]}}
                //set innerHTML to label
                for (let id in data.label) {if (SE.$(id)) {SE.$(id).innerHTML = data.label[id]}}
            }
        };
        file.open("GET", namefile, true);
        file.send(null);
    };    

    // function for set parametrs
    let setSettings = function(enter){
        SE.$("enter-open").innerHTML = enter;
        if (sessionStorage.arnikatabs == "two"){
            SE.getJson("json/packageTwo.json");
            SE.$("add-nomer").max = 12;
        } else if (sessionStorage.arnikatabs == "three"){
            SE.getJson("json/packageThree.json");
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

    //for cut [] in obgects
    let cutSimbolInObgect = function(responses){
        let trimObg, getLength, res;
        trimObg = responses.trim();
        getLength = trimObg.length-1; 
        res = trimObg.slice(1, getLength);
        return res;
    }; 

    //date format day
    let readyDay = function(fullDate){
        let finDay, createDate;
        createDate = new Date(fullDate);
        if ((createDate.getDate() >= 1) && (createDate.getDate() <= 9)) {            
            return finDay = "0" + createDate.getDate();
        } else {
            return finDay = createDate.getDate();
        }
    };  

    //date format month
    let readyMonth = function(fullDate){    
        let createDate;
        createDate = new Date(fullDate);
        if ((createDate.getMonth() >= 0) && (createDate.getMonth() <= 8)) {
            return finMonth = "0" + (createDate.getMonth()+1);
        } else if (createDate.getMonth() == 9){            
            return finMonth = 10;
        } else if (createDate.getMonth() == 10){            
            return finMonth = 11;
        } else if (createDate.getMonth() == 11){            
            return finMonth = 12;
        }            
    };     

    //make AJAX request
    let send = function(objUrlSend){
        let {obj, urlSend} = objUrlSend;
        return new Promise(function(resolve, reject){
            dbParam = JSON.stringify(obj);
            xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    let responses = this.responseText;
                    (responses != "[]") ? resolve(responses) : reject("Помилка авторизації!!!");
                }
            };
            xmlhttp.open("GET", urlSend + dbParam, true);
            xmlhttp.send();
        });
    };

//_CHACK_LOGIN_AND_PASSWORD_++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    //audit login and password
    let auditLoginPromise = function(login, password){
        return new Promise((resolve, reject) => {
            ((login != "") && (password != "")) ? resolve({"login":login, "password":password}) : reject("Помилка авторизації!!!");
            }
        );          
    };

    //create obgect for send to server
    let checkUserPromise = function(LoginPassword){
        let {login, password} = LoginPassword;
        let resLogin = login.replace(new RegExp(REG.exp().loginCut, "gi"), '');
        let resPassword = password.replace(new RegExp(REG.exp().passwordCut, "gi"), '');
        return new Promise((resolve, reject) => {
            //check on true and create object for send to backend
            let obj = { "login":login, "password":password};
            ((new RegExp(REG.exp().loginTest, "gi").test(resLogin)) && (new RegExp(REG.exp().passwordTest, "gi").test(resPassword))) ?
            resolve({"obj":obj, "urlSend":"php/enter.php?x="}) :
            reject("Помилка авторизації!!!");
        });         
    };

    //error autorization
    let errorAutorization = function(){
        console.error("Виникла помилка авторизації!!!");
        logIn.classList = "click-login-close";
        SE.setSettings("ВХІД");
        SE.$("content").style.display = "none";
        SE.$("demo-wrap").style.display = "none";
        sessionStorage.arnikalogin = "";
        sessionStorage.arnikapassword = "";
    }

//_CHACK_FORM_++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    // function for get room on this date
    let getRoom = function(roomDate){
        let {numRoom, resDate} = roomDate;
        (sessionStorage.arnikatabs == "two") ? urlGetRoom = "php/getroomTwo.php?x=" : 
        sessionStorage.arnikatabs == "three" ? urlGetRoom = "php/getroomThree.php?x=" : 
        console.error("Помилка авторизації!!!");  
        let obj = {"room":numRoom, 
                    "date":resDate, 
                    "login":sessionStorage.arnikalogin, 
                    "password":sessionStorage.arnikapassword};
        return new Promise((resolve, reject) => {
            ((sessionStorage.arnikalogin != "") && (sessionStorage.arnikapassword != "")) ? 
            resolve({"obj":obj, "urlSend":urlGetRoom}) : 
            reject("Помилка авторизації!!!");
        });
    };  

    // function for get price
    let getPrice = function(room){
        let obj = {"room":room, 
                   "login":sessionStorage.arnikalogin, 
                   "password":sessionStorage.arnikapassword};
        //select get request
        (sessionStorage.arnikatabs == "two") ? urlPrice = "php/priceTwo.php?x=" : 
        (sessionStorage.arnikatabs == "three") ? urlPrice = "php/priceThree.php?x=" : SE.errorAutorization();        
        return new Promise((resolve, reject) => {
            ((sessionStorage.arnikalogin != "") && (sessionStorage.arnikapassword != "")) ? 
            resolve({"obj":obj, "urlSend":urlPrice}) : 
            reject("Помилка авторизації!!!");
        });
    };

    // function for check rooms
    let checkRoom = function(){
        let numRoom = SE.$("add-nomer").value;
        let dateStart = SE.$("add-start-data").value;
        let kilkDay = SE.$("add-kilk").value;
        if ((numRoom != "") && (dateStart != "") & (kilkDay != "")){
            SE.auditLoginPromise(sessionStorage.arnikalogin, sessionStorage.arnikapassword)
                .then(SE.checkUserPromise)
                .then(function(){
                    let day = 0;
                    for(let i = 0; i < kilkDay; i++){
                        let result = new Date(dateStart);
                        //add day
                        let nextday = new Date(result.getFullYear(),result.getMonth(),result.getDate()+day);
                        day = day + 1;
                        //format date
                        let resDate = nextday.getFullYear() + "-" + SE.readyMonth(nextday) + "-" + SE.readyDay(nextday);
                        //run function for get room on this date
                        SE.getRoom({"numRoom":numRoom, "resDate":resDate})
                            .then(SE.send)
                            .then(VW.GetRoom)
                            .then((resulrDate) => {
                                SE.messageRoom("message-room", "table", "#111111", resulrDate);
                                SE.iconON("room-error", "room-true", "false");
                                //clear points in prototype
                                SE.readyToSend("add-nomer", "");
                                SE.readyToSend("add-start-data", "");
                                SE.readyToSend("add-kilk", "");
                            })
                            .then(() => {SE.setMessage("message-price", "none", "", "")})
                            .catch((err) => {console.error(err)});
                    } 
                    //show true on icon
                    SE.iconON("room-error", "room-true", "true");
                })
                .catch((err) => {console.error(err)});
            //clear message
            SE.setMessage("message-room", "none", "", "Кімната зайнята на:");            
            //if all true, push to obgect prototype 
            SE.readyToSend("add-nomer", SE.$("add-nomer").value);
            SE.readyToSend("add-start-data", SE.$("add-start-data").value);
            SE.readyToSend("add-kilk", SE.$("add-kilk").value);
            //get price
            SE.getPrice(SE.$("add-nomer").value)
                .then(SE.send)
                .then(VW.getPrice)
                .catch((err) => {console.error(err)});
        } else {
            //show false on icon
            SE.iconON("room-error", "room-true", "false");
            SE.getPrice(SE.$("add-nomer").value)
                .then(SE.send)
                .then(VW.getPrice)
                .catch((err) => {console.error(err)});
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

//_ADD_TO_DB_++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

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
        if (((sendReadyObg.addname != "") && (sendReadyObg.addname != undefined)) && 
        ((sendReadyObg.addsurname != "") && (sendReadyObg.addsurname != undefined)) && 
        ((sendReadyObg.addtel != "") && (sendReadyObg.addtel != undefined)) && 
        (sendReadyObg.addnomer != "") && 
        (sendReadyObg.addstartdata != "") && 
        (sendReadyObg.addkilk != "") && 
        (sendReadyObg.addstatusgгest != "") && 
        (sendReadyObg.addstatuszamovl != "")){
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
        if ((sendReadyObg.addname == "") || (sendReadyObg.addname == undefined) ||
        (sendReadyObg.addsurname == "") || (sendReadyObg.addsurname == undefined) || 
        (sendReadyObg.addtel == "") || (sendReadyObg.addtel == undefined) ||
        (sendReadyObg.addnomer == "") || 
        (sendReadyObg.addstartdata == "") || 
        (sendReadyObg.addkilkSend == "") || 
        (sendReadyObg.addstatusgгest == "") || 
        (sendReadyObg.addstatuszamovl == "")){
            SE.setMessage("message-send", "table", "red", "Всі поля мають бути заповнені!!!");
        } else {
            SE.auditLoginPromise(sessionStorage.arnikalogin, sessionStorage.arnikapassword)
                .then(SE.checkUserPromise)
                .then(SE.addToDB)
                .then(() => {setTimeout(() => {SE.setDaysToCalendar()}, 4000)})
                .catch((err) => {console.error(err)});
        }
    };

    // function for add to DB
    let addToDB = function(){
        SE.$("send").removeEventListener("click", SE.sendToDB);
        let obj, priseResult, urlToDB, dbParam, xmlhttp;
        //set price for guest or worker
        (sendReadyObg.addstatusgгest == "worker") ? priseResult = sendReadyObg.price / 2 : priseResult = sendReadyObg.price;
        //set url for send
        (sessionStorage.arnikatabs == "two") ? urlToDB = "php/addToDbTwo.php?x=" : 
        (sessionStorage.arnikatabs == "three") ? urlToDB = "php/addToDbThree.php?x=" : SE.errorAutorization();        
        //make iteration 
        let day = 0;
        for(let i = 0; i < sendReadyObg.addkilk; i++){
            let startdata = new Date(sendReadyObg.addstartdata);
            //add day
            let nextday = new Date(startdata.getFullYear(),startdata.getMonth(),startdata.getDate()+day);
            day = day + 1;
            //format date
            let resDateDZ = nextday.getFullYear() + "-" + SE.readyMonth(nextday) + "-" + SE.readyDay(nextday);
            obj = { "name":sendReadyObg.addname, 
                    "surname":sendReadyObg.addsurname, 
                    "tel":sendReadyObg.addtel, 
                    "number":sendReadyObg.addnomer, 
                    "dz":resDateDZ, 
                    "kilk":sendReadyObg.addkilk, 
                    "price":priseResult, 
                    "buking":sendReadyObg.addstatuszamovl, 
                    "tip":sendReadyObg.addstatusgгest, 
                    "admin":sendReadyObg.admin, 
                    "datazapovn":sendReadyObg.registr, 
                    "login":sessionStorage.arnikalogin, 
                    "password":sessionStorage.arnikapassword};
            dbParam = JSON.stringify(obj);
            xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {                    
                    SE.setMessage("autoriz-message-wrap", "none", "", ""); 
                    (this.responseText.trim() == "") ? VW.addToDB() : SE.setMessage("message-send", "table", "red", `${this.responseText}`);
                }
            };
            xmlhttp.open("GET", urlToDB + dbParam, true);
            xmlhttp.send();
        };            
    };

//_CALENDAR_++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    //persent in load spiner
    let persent = function(){
        var start = 1;
        var id = setInterval(frame, 10);
        function frame() {
            if (start >= 100) { 
                clearInterval(id);
            } else {
                start++; 
                SE.$("send_persent").innerHTML = `${start}%...`;
            }
        }
    };

    //for set present date
    let presentDate = function(){
        let calDate = new Date();
        SE.$("cal-year").value = calDate.getFullYear();
        SE.$("cal-mounth").value = SE.readyMonth(calDate);
    };

    //request for select day
    let selectDayRequest = function(dates){
        let PresentDayUrl, obj;
        obj = { "dz":dates, 
                "login":sessionStorage.arnikalogin, 
                "password":sessionStorage.arnikapassword};
        SE.$("list-zvit-wrap").style.display = "table";
        (sessionStorage.arnikatabs == "two") ? PresentDayUrl = "php/getRoomCalTwo.php?x=" : 
        (sessionStorage.arnikatabs == "three") ? PresentDayUrl =  "php/getRoomCalThree.php?x=" : SE.errorAutorization();
        return new Promise((resolve) => {resolve({"obj":obj, "urlSend":PresentDayUrl})});
    }    

    //for select present day
    let selectPresentDay = function(){
        let presDayShowNew = new Date();
        let presDayShow = presDayShowNew.getFullYear() + "-" + SE.readyMonth(presDayShowNew) + "-" + presDayShowNew.getDate();
        if (SE.$(presDayShow)){
            SE.$(presDayShow).style.border = "1px solid red";
            SE.$(presDayShow).style.backgroundColor = "#fffbd2";
            //set url for select present day
            SE.auditLoginPromise(sessionStorage.arnikalogin, sessionStorage.arnikapassword)
                .then(SE.checkUserPromise)
                .then(() => {return new Promise((resolve) => {resolve(presDayShow)})})
                .then(SE.selectDayRequest)
                .then(SE.send)
                .then(VW.getRoomCalendar)
                .catch((err) => {console.error(err)});
        }
    };    

    //for select day
    let selectDay = function(el){
        let cell = el;
        let v = document.getElementsByClassName("full-day");
        for(let i = 0; i < v.length; i++){SE.$(v[i].id).classList.remove("cal-activ");}
        SE.$(cell.id).classList.add("cal-activ");
        SE.auditLoginPromise(sessionStorage.arnikalogin, sessionStorage.arnikapassword)
            .then(SE.checkUserPromise)
            .then(() => {return new Promise((resolve) => {resolve(cell.id)})})
            .then(SE.selectDayRequest)
            .then(SE.send)
            .then(VW.getRoomCalendar)
            .catch((err) => {console.error(err)});
    };  

    //for get busy room
    let getBusyRoom = function(busyDte){
        let urlBusy, obj;
        obj = { "dz":busyDte, 
                "login":sessionStorage.arnikalogin, 
                "password":sessionStorage.arnikapassword}; 
        (sessionStorage.arnikatabs == "two") ? urlBusy = "php/busyRoomTwo.php?x=" : 
        (sessionStorage.arnikatabs == "three") ? urlBusy = "php/busyRoomThree.php?x=" : SE.errorAutorization();
        return new Promise((resolve) => {resolve({"obj":obj,"urlSend":urlBusy})});
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
        (numFirstDayB == 0) ? numFirstDay = 7 : numFirstDay = firstDay.getDay();
        //get last day of mounth
        let kilkDay = lastDay.getDate();
        //add empty cell       
        for (let i=1; i < numFirstDay; i++){SE.$("cal-body").innerHTML += `<p class="empty-day"></p>`;}
        //add cell  
        for (let i=1; i <= kilkDay; i++){
            SE.$("cal-body").innerHTML += `<p class="full-day" id="${calYear}-${calMounth}-${i}"">${i}</p>`;
            let busyDte = `${calYear}-${calMounth}-${i}`;
            SE.getBusyRoom(busyDte)
                .then(SE.send)
                .then((responses) => {return new Promise((resolve) => {resolve({"responses":responses, "busyDte":busyDte})})})
                .then(VW.getBusyRoom)
                .catch((err) => {console.error(err)})
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
        SE.listenerToCalendar();
        SE.selectPresentDay();
    };

    //for set date in calendar, on change selected month or year
    let changeYearOrMounth = function(){
        SE.setDaysToCalendar();
        SE.$("list-zvit-wrap").innerHTML = "";
        //for select day and add eventListener to cell
        SE.listenerToCalendar();
    }

    //for select day and add eventListener to cell
    let listenerToCalendar = function(){
        let v = document.getElementsByClassName("full-day");
        for(let i = 0; i < v.length; i++){v[i].addEventListener("click", function(){SE.selectDay(this)})}
    }

//_UPDATE_FORM_++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    //show form for edit
    let getEditList = function(el){
        let obj, urlGtList;
        SE.$("edit-wrap").style.display = "flex";
        SE.$("edit-exit").addEventListener("click", () => {SE.$("edit-wrap").style.display = "none";});
        //get variables from attributes node
        obj = { "lastname":el.getAttribute("editsurname"), 
                "firstname":el.getAttribute("editname"), 
                "nomerkimn":el.getAttribute("editnomer"), 
                "telephone":el.getAttribute("edittel"), 
                "kilkdniv":el.getAttribute("editkilk"), 
                "login":sessionStorage.arnikalogin, 
                "password":sessionStorage.arnikapassword};
        //set url for show form for edit
        (sessionStorage.arnikatabs == "two") ? urlGtList = "php/getForUpdateTwo.php?x=" :
        (sessionStorage.arnikatabs == "three") ? urlGtList = "php/getForUpdateThree.php?x=" : SE.errorAutorization();
        return new Promise((resolve) => {resolve({"obj":obj, "urlSend":urlGtList})});
    };

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

    //reload period list
    let reloadPeriod = function(){
        let listZ, listPO, listStatus, urlPeriodSend, obj;
        listZ = SE.$("id-z").value;
        listPO = SE.$("id-po").value;
        //get status from radio
        let radios = document.getElementsByName('id-status');
        for (let i = 0, length = radios.length; i < length; i++){
            if (radios[i].checked){listStatus = radios[i].value; break}
        };
        //show period list
        SE.$("list-zvit-wrap").innerHTML = "";
        SE.$("list-zvit-wrap-period").style.display = "table";
        obj = { "listZ":listZ, 
                "listPO":listPO, 
                "listStatus":listStatus, 
                "login":sessionStorage.arnikalogin, 
                "password":sessionStorage.arnikapassword};
        (sessionStorage.arnikatabs == "two") ? urlPeriodSend = "php/listPeriodTwo.php?x=" :
        (sessionStorage.arnikatabs == "three") ? urlPeriodSend = "php/listPeriodThree.php?x=" : SE.errorAutorization();
        if ((listZ != "") && (listPO != "")){
            SE.auditLoginPromise(sessionStorage.arnikalogin, sessionStorage.arnikapassword)
                .then(SE.checkUserPromise)
                .then(() => {return new Promise((resolve) => {resolve({"obj":obj,"urlSend":urlPeriodSend})})})
                .then(SE.send)
                .then(VW.showRoomPeriod)
                .catch((err) => {console.error(err)});
        };  
    };

    //update DB
    let updateToDB = function(){
        let obj, urlUpdateToDB;
        (sessionStorage.arnikatabs == "two") ? urlUpdateToDB = "php/upToDBTwo.php?x=" :
        (sessionStorage.arnikatabs == "three") ? urlUpdateToDB = ("php/upToDBThree.php?x=") : SE.errorAutorization();
        obj = {"statusUp":protoUpdate.status, 
               "adminregUp":protoUpdate.adminreg, 
               "dateregUp":protoUpdate.datereg, 
               "surnameUp":protoUpdate.lastname, 
               "nameUp":protoUpdate.firstname, 
               "telUp":protoUpdate.telephone, 
               "nomerUp":protoUpdate.nomerkimn, 
               "kilkUp":protoUpdate.kilkdniv, 
               "datazapisuUp":protoUpdate.datazapisu, 
               "login":sessionStorage.arnikalogin, 
               "password":sessionStorage.arnikapassword};
        SE.auditLoginPromise(sessionStorage.arnikalogin, sessionStorage.arnikapassword)
            .then(SE.checkUserPromise)
            .then(() => {return new Promise((resolve) => {resolve({"obj":obj,"urlSend":urlUpdateToDB})})})
            .then(SE.send)
            .then(VW.updateToDB)
            .catch((err) => {console.error(err)});
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

    return {
        $, 
        getJson,
        setSettings,
        setMessage,
        messageRoom,
        cutSimbolInObgect,
        incorrectCheck,
        iconON,
        readyDay,
        readyMonth,
        readyToSend,
        sendToDB,
        presentDate,
        setDaysToCalendar,
        addToUpdareProto,
        updateToDB,
        reloadPeriod,
        sortList,
        auditLoginPromise,
        checkUserPromise,
        send,
        checkRoom,
        getRoom,
        getPrice,
        addToDB,
        persent,
        getBusyRoom,
        selectPresentDay,
        selectDay,
        getEditList,
        changeYearOrMounth,
        listenerToCalendar,
        selectDayRequest,
        errorAutorization
    };
})();