let AJAX = (function(){

    // function for get object from (*.json) file
    let getJson = function(namefile) {
        var file = new XMLHttpRequest();
        file.onreadystatechange = function() {
            if (file.readyState === 4 && file.status == "200") {
                let data = JSON.parse(file.responseText);
                //set innerHTML
                for (let id in data) {
                    if (SE.$(id)){    
                        SE.$(id).innerHTML = data[id];
                    }
                }
                //set placeholder
                for (let id in data.placeholder) {  
                    if (SE.$(id)){    
                        SE.$(id).placeholder = data.placeholder[id];
                    }
                }
                //set innerHTML to label
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

    // function for check rooms
    let checkRoom = function(){
        let numRoom = SE.$("add-nomer").value;
        let dateStart = SE.$("add-start-data").value;
        let kilkDay = SE.$("add-kilk").value;
        if ((numRoom != "") && (dateStart != "") & (kilkDay != "")){
            SE.auditLogin(sessionStorage.arnikalogin, sessionStorage.arnikapassword, function(){
                AJAX.checkUser(sessionStorage.arnikalogin, sessionStorage.arnikapassword, function(){
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
                    //show true on icon
                    SE.iconON("room-error", "room-true", "true");
                });
            });
            //clear message
            SE.setMessage("message-room", "none", "", "Кімната зайнята на:");            
            //if all true, push to obgect prototype 
            SE.readyToSend("add-nomer", SE.$("add-nomer").value);
            SE.readyToSend("add-start-data", SE.$("add-start-data").value);
            SE.readyToSend("add-kilk", SE.$("add-kilk").value);
            //get price
            AJAX.getPrice(SE.$("add-nomer").value);
        } else {
            //show false on icon
            SE.iconON("room-error", "room-true", "false");
            AJAX.getPrice(SE.$("add-nomer").value);
        }
    };  

    // function for get room on this date
    let getRoom = function(room, date){
        let obj, dbParam, xmlhttp, myRoom, trimObg, getLength, res, urlGetRoom;
        //select get request
        if (sessionStorage.arnikatabs == "two"){
            urlGetRoom = "php/getroomTwo.php?x=";
        } else if(sessionStorage.arnikatabs == "three"){
            urlGetRoom = "php/getroomThree.php?x=";
        }  
        obj = { "room":room, "date":date, "login":sessionStorage.arnikalogin, "password":sessionStorage.arnikapassword};
        dbParam = JSON.stringify(obj);
        xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                if (this.responseText != "[]"){
                    //trim obgect
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
                        setTimeout(function(){
                            SE.setMessage("message-price", "none", "", ""); 
                        }, 100);
                        SE.setMessage("message-price", "none", "", "");
                        setTimeout(function(){
                            SE.messageRoom("message-room", "table", "#111111", resulrDate);
                        }, 200);
                        SE.iconON("room-error", "room-true", "false");
                        //clear points in prototype
                        SE.readyToSend("add-nomer", "");
                        SE.readyToSend("add-start-data", "");
                        SE.readyToSend("add-kilk", "");
                    } 
                }                            
            }
        };
        xmlhttp.open("GET", urlGetRoom + dbParam, true);
        xmlhttp.send();            
    }; 

    // function for get price
    let getPrice = function(room){
        let obj, dbParam, xmlhttp, myObj, trimObg, getLength, res, urlPrice;
        obj = {"room":room, "login":sessionStorage.arnikalogin, "password":sessionStorage.arnikapassword};
        //select get request
        if (sessionStorage.arnikatabs == "two"){
            urlPrice = "php/priceTwo.php?x=";
        } else if(sessionStorage.arnikatabs == "three"){
            urlPrice = "php/priceThree.php?x=";
        }       
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
                    if (res != ""){
                        myObj = JSON.parse(res);
                        //get admin name and push to prototype
                        let price = `${myObj.price}`;
                        let priceParse = parseInt(price);
                        toSend.prototype.price = priceParse;
                        SE.setMessage("message-price", "table", "green", `${price}`);  
                    } 
                }  else {
                    console.log(this.responseText);
                }
            }
        };
        xmlhttp.open("GET", urlPrice + dbParam, true);
        xmlhttp.send();            
    }; 

  
    // function for add to DB
    let addToDB = function(){
        SE.$("send").removeEventListener("click", SE.sendToDB);
        let obj, dbParam, xmlhttp, priseResult, priceOrigin, urlToDB;
        //st price for guest or worker
        if (sendReadyObg.addstatusgгest == "worker"){
            priceOrigin = sendReadyObg.price;
            priseResult = priceOrigin / 2;
        } else {
            priseResult = sendReadyObg.price;
        }
        //set url for send
        if (sessionStorage.arnikatabs == "two"){
            urlToDB = "php/addToDbTwo.php?x=";
        } else if(sessionStorage.arnikatabs == "three"){
            urlToDB = "php/addToDbThree.php?x=";
        }
        //make iteration   
        let day = 0;
        for(let i = 0; i < sendReadyObg.addkilk; i++){
            let startdata = new Date(sendReadyObg.addstartdata);
            //add day
            let nextday = new Date(startdata.getFullYear(),startdata.getMonth(),startdata.getDate()+day);
            day = day + 1;
            //format date
            let resDateDZ = nextday.getFullYear() + "-" + SE.readyMonth(nextday) + "-" + SE.readyDay(nextday);
            obj = { "name":sendReadyObg.addname, "surname":sendReadyObg.addsurname, "tel":sendReadyObg.addtel, "number":sendReadyObg.addnomer, "dz":resDateDZ, "kilk":sendReadyObg.addkilk, "price":priseResult, "buking":sendReadyObg.addstatuszamovl, "tip":sendReadyObg.addstatusgгest, "admin":sendReadyObg.admin, "datazapovn":sendReadyObg.registr, "login":sessionStorage.arnikalogin, "password":sessionStorage.arnikapassword};
            dbParam = JSON.stringify(obj);
            xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {    
                    SE.setMessage("autoriz-message-wrap", "none", "", ""); 
                    let trimRes = this.responseText.trim(); 
                    //show information after add to DB                       
                    if (trimRes == "") {
                        SE.$("send").style.background = "linear-gradient(to bottom right, #000000, #d3d3d3, #000000)";
                        SE.$("send").style.cursor = "no-drop";
                        SE.$("icon-send").style.display = "table";
                        //show message about add to DB
                        setTimeout(function(){
                            SE.$("icon-send").style.display = "none";
                            SE.setMessage("message-send", "table", "green", "Запис додано!");
                        }, 2000);
                        //clear message about add to DB and clear form 
                        setTimeout(function(){
                            SE.$("send").addEventListener("click", SE.sendToDB);
                            SE.setMessage("message-send", "none", "", "");
                            SE.setMessage("message-price", "none", "", "");
                            SE.clearObg();
                            SE.clearValue();
                            SE.clearIcon();
                            //update calendar
                            SE.setDaysToCalendar();
                        }, 4000); 
                    }  else {
                        SE.setMessage("message-send", "table", "red", `${this.responseText}`);
                    }       
                }
            };
        xmlhttp.open("GET", urlToDB + dbParam, true);
        xmlhttp.send();
        }             
    };  
    
    //for get busy room
    let getBusyRoom = function(busyDte, urlBusy){
        let obj, dbParam, xmlhttp, trimObg, myObj;
        obj = { "dz":busyDte, "login":sessionStorage.arnikalogin, "password":sessionStorage.arnikapassword};
        dbParam = JSON.stringify(obj);
        xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {    
                if (this.responseText != "[]"){
                    //trim obgect
                    trimObg = this.responseText.trim();
                    myObj = JSON.parse(trimObg);
                    //seted label for all days about how many days are busy
                    if (myObj.length != 0){
                        SE.$(busyDte).innerHTML += `<span class="kilk-busy-room">${myObj.length}</span>`; 
                    }
                }  else {
                    // console.log(this.responseText);
                }                 
            }
        };
        xmlhttp.open("GET", urlBusy + dbParam, true);
        xmlhttp.send();
    }; 

    //get rooms to list for edit
    let getRoomCalendar = function(date, urlDate){
        let obj, dbParam, xmlhttp, trimObg, myObj;
        obj = { "dz":date, "login":sessionStorage.arnikalogin, "password":sessionStorage.arnikapassword};
        dbParam = JSON.stringify(obj);
        xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {    
                if (this.responseText != "[]"){
                    //trim obgect
                    trimObg = this.responseText.trim();
                    myObj = JSON.parse(trimObg);
                    //if list not empty, push to calendar list
                    if (myObj.length != 0){
                        SE.$("list-zvit-wrap").innerHTML = `<div class="list-zvit-title">
                                                            <p>Прізвище</p>
                                                            <p>Імя</p>
                                                            <p>Кімн.</p>
                                                            <p>Статус</p>
                                                            <p></p></div>`;
                        let v = document.getElementsByClassName("far fa-edit");
                        //iteration for show booking list                        
                        let status;
                        for(let i = 0; i < myObj.length; i++){
                            //add color to message about status
                            if (myObj[i].status == "rezerv"){
                                status = `<span style="text-shadow: 0px 0px 2px yellow;">Резерв.</span>`;
                            } else if (myObj[i].status == "pay"){
                                status = `<span style="text-shadow: 0px 0px 1px #00a500; color:green;">Оплач.</span>`;
                            }
                            //push to calendar list and to noda atributes 
                            SE.$("list-zvit-wrap").innerHTML += `<div class="list-zvit-body">
                                                                    <p>${myObj[i].last_name}</p>
                                                                    <p>${myObj[i].first_name}</p>
                                                                    <p>${myObj[i].nomer_kimn}</p>
                                                                    <p>${status}</p>
                                                                    <p>
                                                                        <i class='far fa-edit' 
                                                                            style='font-size:18px; cursor:pointer;' 
                                                                            editsurname="${myObj[i].last_name}" 
                                                                            editname="${myObj[i].first_name}"
                                                                            editnomer="${myObj[i].nomer_kimn}" 
                                                                            edittel="${myObj[i].telephone}"
                                                                            editkilk="${myObj[i].kilk_dniv}"
                                                                            editguest="${myObj[i].tip}">
                                                                        </i>
                                                                    </p>
                                                                </div>`;
                        }
                        //add listener to all edit button
                        for(let i = 0; i < myObj.length; i++){
                            v[i].addEventListener("click", function(){
                                VW.getEditList(this);
                            });
                        }  
                    } else {
                        SE.$("list-zvit-wrap").style.display = "none";
                        SE.$("list-zvit-wrap").innerHTML = "";
                    }                 
            }
        }
        };
        xmlhttp.open("GET", urlDate + dbParam, true);
        xmlhttp.send();
    };     

    //for set to update form
    let setToEdit = function(upSurame, upName, upNomer, upTel, upKilk, urlUpdate){
        let obj, dbParam, xmlhttp, trimObg, myObj;
        obj = { "lastname":upSurame, "firstname":upName, "nomerkimn":upNomer, "telephone":upTel, "kilkdniv":upKilk, "login":sessionStorage.arnikalogin, "password":sessionStorage.arnikapassword};
        dbParam = JSON.stringify(obj);
        xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {   
                if (this.responseText != "[]"){
                    trimObg = this.responseText.trim();
                    myObj = JSON.parse(trimObg);
                    //set to form and to update prototype
                    VW.setToUpdate(myObj); 
                    SE.addToUpdareProto(myObj);
                } else {
                    console.log(this.responseText); 
                };
            }
        };   
        xmlhttp.open("GET", urlUpdate + dbParam, true);
        xmlhttp.send();                 
    };
    
    //update DB
    let upToDB = function(urlUp){
        let obj, dbParam, xmlhttp;
        obj = {"statusUp":protoUpdate.status, "adminregUp":protoUpdate.adminreg, "dateregUp":protoUpdate.datereg, "surnameUp":protoUpdate.lastname, "nameUp":protoUpdate.firstname, "telUp":protoUpdate.telephone, "nomerUp":protoUpdate.nomerkimn, "kilkUp":protoUpdate.kilkdniv, "datazapisuUp":protoUpdate.datazapisu, "login":sessionStorage.arnikalogin, "password":sessionStorage.arnikapassword};
        dbParam = JSON.stringify(obj);
        xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {    
                let trimRes = this.responseText.trim(); 
                //show info if true update                       
                if (!isNaN(trimRes)) {
                    SE.$("send-update").classList.remove("activ-up");
                    SE.$("send-update").removeEventListener("click", SE.updateToDB);
                    SE.$("edit-wrap").style.display = "none";
                    SE.$("edit-wrap-message").style.display = "flex";
                    SE.$("icon-send-up").style.display = "table";
                    //update calendar
                    setTimeout(function(){
                        SE.setDaysToCalendar();
                        SE.$("list-zvit-wrap").innerHTML = "";
                        //for select day
                        let v = document.getElementsByClassName("full-day");
                        for(let i = 0; i < v.length; i++){
                            v[i].addEventListener("click", function(){
                                VW.selectDay(this);
                            });
                        }
                        //clear update prototipe
                        toUpdate.prototype.lastname = "";
                        toUpdate.prototype.firstname = "";
                        toUpdate.prototype.telephone = "";
                        toUpdate.prototype.nomerkimn = "";
                        toUpdate.prototype.kilkdniv = "";
                        toUpdate.prototype.datazapisu = "";
                        toUpdate.prototype.status = "";
                        toUpdate.prototype.adminreg = "";
                        toUpdate.prototype.datereg = "";
                        //clear and show message about update 
                        SE.$("icon-send-up").style.display = "none";
                        SE.$("message-send-up").style.display = "table";
                        //reload period list 
                        SE.reloadPeriod(); 
                    }, 2000);
                    //hidden all message about update
                    setTimeout(function(){
                        SE.$("edit-wrap-message").style.display = "none";
                        SE.$("message-send-up").style.display = "none";
                    }, 4000);
                }  else {
                    console.log(this.responseText);
                }                 
            }
        };
        xmlhttp.open("GET", urlUp + dbParam, true);
        xmlhttp.send();
    };    

    //get rooms to list for period
    let getRoomPeriod = function(listZ, listPO, listStatus, sorts, urlPeriod){
        let obj, dbParam, xmlhttp, trimObg, myObj;
        obj = { "listZ":listZ, "listPO":listPO, "listStatus":listStatus, "login":sessionStorage.arnikalogin, "password":sessionStorage.arnikapassword};
        //show period list
        SE.$("list-zvit-wrap").innerHTML = "";
        SE.$("list-zvit-wrap-period").style.display = "table";
        //parse obgect
        dbParam = JSON.stringify(obj);
        xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {    
                if (this.responseText != "[]"){
                    //trim obgect
                    trimObg = this.responseText.trim();
                    myObj = JSON.parse(trimObg);
                    //if list not empty, push to period list
                    if (myObj.length != 0){
                        SE.$("list-zvit-wrap-period").innerHTML = `<div class="list-zvit-title-period">
                                                            <p><label for="last_name" class="container2" style="left:3px;">Прізвище<input type="radio" name="id-sort" id="last_name" style="width: 16px; margin: 2px -17px; color: red; position: absolute;" value="last_name"><span class="checkmark2"></span></label></p>
                                                            <p>Імя</p>
                                                            <p><label for="nomer_kimn" class="container2">Кім<input type="radio" name="id-sort" id="nomer_kimn" style="width: 16px; margin: 2px -17px; color: red; position: absolute;" value="nomer_kimn"><span class="checkmark2"></span></label></p>
                                                            <p><label for="data_zaizdu" class="container2">Дата<input type="radio" name="id-sort" id="data_zaizdu" style="width: 16px; margin: 2px -17px; color: red; position: absolute;" value="data_zaizdu"><span class="checkmark2"></span></label></p>
                                                            <p>Ціна</p>
                                                            <p>Гість</p>
                                                            <p>Статус</p>
                                                            <p></p></div>`;
                        let v = document.getElementsByClassName("far fa-edit");
                        let status, guest;
                        //sort obgect 
                        if (sorts == "data_zaizdu"){
                            SE.sortList(myObj, "data_zaizdu");
                        } else if (sorts == "last_name"){
                            SE.sortList(myObj, "last_name");
                        } else {
                            SE.sortList(myObj, "nomer_kimn");
                        };  
                        //iteration for show booking list
                        for(let i = 0; i < myObj.length; i++){
                            //add color to message about status
                            if (myObj[i].status == "rezerv"){
                                status = `<span style="text-shadow: 0px 0px 2px yellow;">Резерв.</span>`;
                            } else if (myObj[i].status == "pay"){
                                status = `<span style="text-shadow: 0px 0px 1px #00a500; color:green;">Оплач.</span>`;
                            } else if (myObj[i].status == "del"){
                                status = `<span style="text-shadow: 0px 0px 1px #ff0000; color: #922c2c;">Видал.</span>`;
                            }
                            //add color to message about guest
                            if (myObj[i].tip == "guest"){
                                guest = `<span>Гість</span>`;
                            } else if (myObj[i].tip == "worker"){
                                guest = `<span style="text-shadow: 0px 0px 1px #111111; color:#111111;">Праців.</span>`;
                            }
                            //push to periodlist and to node atributes 
                            SE.$("list-zvit-wrap-period").innerHTML += `<div class="list-zvit-body-period">
                                                                    <p>${myObj[i].last_name}</p>
                                                                    <p>${myObj[i].first_name}</p>
                                                                    <p>${myObj[i].nomer_kimn}</p>
                                                                    <p>${myObj[i].data_zaizdu}</p>
                                                                    <p>${myObj[i].price}</p>
                                                                    <p>${guest}</p>
                                                                    <p>${status}</p>
                                                                    <p>
                                                                        <i class='far fa-edit' 
                                                                            style='font-size:18px; cursor:pointer;' 
                                                                            editsurname="${myObj[i].last_name}" 
                                                                            editname="${myObj[i].first_name}"
                                                                            editnomer="${myObj[i].nomer_kimn}" 
                                                                            edittel="${myObj[i].telephone}"
                                                                            editkilk="${myObj[i].kilk_dniv}"
                                                                            editguest="${myObj[i].tip}">
                                                                        </i>
                                                                    </p>
                                                                </div>`;
                        }
                        //add listener to all edit button
                        let sumSum = 0;
                        for(let i = 0; i < myObj.length; i++){
                            v[i].addEventListener("click", function(){
                                VW.getEditList(this);
                            });
                            if (myObj[i].status == "pay"){
                                sumSum += myObj[i].price;
                            }
                        } 
                        //shoe message sum for period
                        if (sumSum != 0){
                            SE.$("sum-sum").innerHTML = `Сума за вибраний вами період`;
                            SE.$("sum-sum-rez").innerHTML = `<span>${sumSum}грн.</span>`;

                        } else {
                            SE.$("sum-sum").innerHTML = "";
                            SE.$("sum-sum-rez").innerHTML = "";
                        }
                        //iteration all sort radio and add eventListenet
                        let radioss = document.getElementsByName('id-sort');
                        for(let i = 0; i < radioss.length; i++){
                            radioss[i].addEventListener("change", function(){
                                //check sort radio and set value to sesion
                                let sort = document.getElementsByName('id-sort');                                
                                for (let i = 0; i < sort.length; i++){
                                    if (sort[i].checked){
                                        let sortID = sort[i].id;
                                        sessionStorage.sortuvannia = sortID;
                                        break;
                                    }
                                }
                                SE.reloadPeriod();
                            });               
                        };
                        //set radio to sort
                        SE.$(sessionStorage.sortuvannia).checked = true;                        
                    } else {
                        SE.$("list-zvit-wrap-period").style.display = "none";
                        SE.$("list-zvit-wrap-period").innerHTML = "";
                        SE.$("sum-sum").innerHTML = "";
                        SE.$("sum-sum-rez").innerHTML = "";
                    }                 
            }
        }
        };
        xmlhttp.open("GET", urlPeriod + dbParam, true);
        xmlhttp.send();
    };    

    return {
        getJson:getJson,
        checkUser:checkUser,
        checkRoom:checkRoom,
        getRoom:getRoom,
        getPrice:getPrice,
        addToDB:addToDB,
        getBusyRoom:getBusyRoom,
        getRoomCalendar:getRoomCalendar,
        setToEdit:setToEdit,
        upToDB:upToDB,
        getRoomPeriod:getRoomPeriod
    };
})();