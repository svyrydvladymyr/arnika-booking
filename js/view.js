let VW = (function(){

    //function for change login button
    let buttonLogin = function(){
        let logIn = SE.$("send-login-close");
        if (logIn.classList == "click-login-close"){
            logIn.classList = "click-login-open";
            SE.setSettings("ВХІД");
        } else if(logIn.classList == "click-login-open"){
            let inputLogin = SE.$("login").value;
            let inputPassword = SE.$("password").value;
            //chack on empty login and password and show message
            if ((inputLogin == "") && (inputPassword == "")){
                SE.setMessage("autoriz-message-wrap", "table", "#b62b2b", "Логін і пароль не можуть бути пустими!!!");
            } else if ((inputLogin == "")) {
                SE.setMessage("autoriz-message-wrap", "table", "#b62b2b", "Логін не може бути пустим!!!");
            } else if ((inputPassword == "")) {
                SE.setMessage("autoriz-message-wrap", "table", "#b62b2b", "Пароль не може бути пустим!!!");
            } else{
                //chack access to DB
                SE.auditLoginPromise(inputLogin, inputPassword)
                    .then(SE.checkUserPromise)
                    .then(SE.send)
                    .then(VW.viewAfterLogin)
                    .then(VW.makeDOM)
                    .then(SE.setDaysToCalendar)
                    .catch((err) => {console.error(err)});
            }
        } else if (logIn.classList == "click-login-exit"){
            logIn.classList = "click-login-close";
            SE.setSettings("ВХІД");
            SE.$("content").style.display = "none";
            SE.$("demo-wrap").style.display = "none";
            //clear session
            sessionStorage.arnikalogin = "";
            sessionStorage.arnikapassword = "";
        }
    };
    
    //function for create DOM after autorisation
    let viewAfterLogin = function(responses){
        //check on true response
        if (responses == "[]"){SE.setMessage("autoriz-message-wrap", "table", "#b62b2b", "Не вірний логін або пароль");} 
        //cut first and last symbol in Object
        let res = SE.cutSimbolInObgect(responses);      
        return new Promise(function(resolve, reject){
            if (res != ""){
                let myObj = JSON.parse(res);
                SE.$("demo").innerHTML = `${myObj.surname} ${myObj.name}`;
                //get admin name and push to prototype
                let admin = `${myObj.surname} ${myObj.name}`;
                toSend.prototype.admin = admin;
                //if get accesses set session
                sessionStorage.arnikalogin = myObj.login;
                sessionStorage.arnikapassword = myObj.password;
                //if get accesses show hidden DOM
                resolve();
            } else {
                reject("Помилка авторизації!!!");
            }
        });    
    };

    //function for create DOM
    let makeDOM = function(){
        let logIn = SE.$("send-login-close");
        logIn.classList = "click-login-exit";
        SE.setSettings("ВИХІД");
        SE.setMessage("autoriz-message-wrap", "none", "autoriz-message", "", "");
        SE.$("content").style.display = "contents";
        //set info about user after one seccond
        let timeOut = () => {SE.$("demo-wrap").style.display = "flex";};
        setTimeout(timeOut, 1000);
        return new Promise((resolve) => {resolve()});
    };
    
    //change tab one an clear all for tab two
    let clikTabOne = function(){
        SE.$("tab1").classList.add("activ");
        SE.$("tab2").classList.remove("activ");
        setTimeout(() => {SE.$("tab-text-one").style.display = "table";},500);
        SE.$("tab-text-two").style.display = "none";
        SE.getJson("json/packageTwo.json");
        SE.$("add-nomer").max = 12;
        sessionStorage.arnikatabs = "two";
        CLEAR.clearTabs();
        CLEAR.clearObg();
        CLEAR.clearValue();
        CLEAR.clearIcon();
        SE.setDaysToCalendar();    
        SE.$("list-zvit-wrap").innerHTML = "";
        //reload period list 
        setTimeout(() => {SE.reloadPeriod()}, 1000);
        setTimeout(() => {SE.$("list-zvit-wrap").innerHTML = "";}, 800); 
    };

    //change tab two and clear all for tab one
    let clikTabTwo = function(){
        SE.$("tab1").classList.remove("activ");
        SE.$("tab2").classList.add("activ");
        setTimeout(() => {SE.$("tab-text-two").style.display = "table";},500);
        SE.$("tab-text-one").style.display = "none";
        SE.getJson("json/packageThree.json");
        SE.$("add-nomer").max = 15;
        sessionStorage.arnikatabs = "three";
        CLEAR.clearTabs();
        CLEAR.clearObg();
        CLEAR.clearValue();
        CLEAR.clearIcon();
        SE.setDaysToCalendar();      
        SE.$("list-zvit-wrap").innerHTML = "";
        //reload period list 
        setTimeout(() => {SE.reloadPeriod()}, 1000);
        setTimeout(() => {SE.$("list-zvit-wrap").innerHTML = "";}, 800);
    };

    //chenge color background
    let chengeBG = function(id, color){
        localStorage.bgColor = color;
        SE.$(id).style.backgroundColor = color;
        (color == "#2b2b2b") ? SE.$("footer").style.color = "#ffffff" : SE.$("footer").style.color = "#111111";
    };
    
    //check on true or error in input on change, cut all incorrect, show message
    let checkCut = function(idF, errorF, trueF, reg){
        if (SE.$(idF).value == ""){
            SE.iconON(errorF, trueF, "false");
        } else {
            //chack on incorrect and show message and icon
            SE.incorrectCheck(idF, reg, function(){
                if(SE.$(idF).value == ""){
                    SE.iconON(errorF, trueF, "false");
                    SE.setMessage(`message-${idF}`, "table", "#111111", "Не може бути пустим!");
                    SE.$("send").removeEventListener("click", SE.sendToDB);
                    SE.$("send").style.background = "linear-gradient(to bottom right, #000000, #d3d3d3, #000000)";
                    SE.$("send").style.cursor = "no-drop";
                    SE.readyToSend(idF, "");
                } else {
                    //phone exclusion
                    if (SE.$(idF).id == "add-tel"){ 
                        if (SE.$(idF).value.length != 9) {
                            SE.iconON(errorF, trueF, "false");
                            SE.setMessage(`message-${idF}`, "table", "#11111", "Не коректний номер!");
                            SE.$("send").removeEventListener("click", SE.sendToDB);
                            SE.readyToSend(idF, "");
                        } else {
                            SE.readyToSend(idF, SE.$(idF).value);
                            SE.$("send").addEventListener("click", SE.sendToDB); 
                        }
                    } else {
                        SE.iconON(errorF, trueF, "true");
                        SE.setMessage(`message-${idF}`, "none", "", "");
                        SE.readyToSend(idF, SE.$(idF).value);
                        SE.$("send").addEventListener("click", SE.sendToDB); 
                    }
                    SE.$("send").addEventListener("click", SE.sendToDB); 
                }
            }); 
        }
    };
    
    //check on true or error in input on input and show message
    let checkTest = function(idF, errorF, trueF, reg){
        if (new RegExp(reg, "gi").test(SE.$(idF).value) == true){
            SE.iconON(errorF, trueF, "true");
            SE.setMessage(`message-${idF}`, "none", "", "");
        } else {
            SE.iconON(errorF, trueF, "false");
            if (SE.$(idF).id == "add-tel"){
                SE.setMessage(`message-${idF}`, "table", "#111111", "Тільки цифри!");
                SE.$("send").removeEventListener("click", SE.sendToDB);
                SE.$("send").style.background = "linear-gradient(to bottom right, #000000, #d3d3d3, #000000)";
                SE.$("send").style.cursor = "no-drop";
            } else {
                SE.setMessage(`message-${idF}`, "table", "#111111", "Тільки букви!");
                SE.$("send").removeEventListener("click", SE.sendToDB);
                SE.$("send").style.background = "linear-gradient(to bottom right, #000000, #d3d3d3, #000000)";
                SE.$("send").style.cursor = "no-drop";
            }
        }
    };

    //check on empty in select input and show message
    let checkTestS = function(idF, errorF, trueF){
        let b = SE.$(idF);
        let gгest = b.options[b.selectedIndex].text;
        if (gгest != ""){
            SE.iconON(errorF, trueF, "true");
            SE.readyToSend(idF, SE.$(idF).value);
        } else {
            SE.iconON(errorF, trueF, "false");
            SE.readyToSend(idF, "");
        }
    };

    //show busy room in booking form 
    let GetRoom = function(responses){
        if (responses != "[]"){
            let res = SE.cutSimbolInObgect(responses); 
            return new Promise(function(resolve){
                if (res != ""){
                    let myRoom = JSON.parse(res);
                    let createDate = new Date(myRoom.data_zaizdu);
                    let resulrDate = SE.readyDay(createDate) + " - " + SE.readyMonth(createDate) + " - " + createDate.getFullYear();
                    resolve(resulrDate);
                }
            });
        } 
    };

    //show price for rooms
    let getPrice = function(responses){
        if (responses != "[]"){
            let res = SE.cutSimbolInObgect(responses);          
            if (res != ""){
                let myObj = JSON.parse(res);
                toSend.prototype.price = parseInt(`${myObj.price}`);
                SE.setMessage("message-price", "table", "green", `${myObj.price}`);  
            } 
        }             
    };

    //show message after check nomer, date and kilk inputs
    let chackNomDateKilk = function(blok){
        if ((SE.$(blok).validity) && (!SE.$(blok).validity.valid)){
            SE.setMessage(`message-${blok}`, "table", "#111111", "Не коректне значення!");
            SE.setMessage("message-room", "none", "", "");
            SE.iconON("room-error", "room-true", "false");
            SE.readyToSend(blok, "");
        } else {
            if ((SE.$(blok).value == "")) {
                SE.setMessage(`message-${blok}`, "table", "#111111", "Не може бути пустим!");
                SE.setMessage("message-room", "none", "", "");
                SE.iconON("room-error", "room-true", "false");
                SE.readyToSend("add-nomer", "");
                SE.readyToSend("add-start-data", "");
                SE.readyToSend("add-kilk", "");
            } else {
                SE.setMessage(`message-${blok}`, "none", "", "");
                SE.checkRoom();
            }
        }
    };    

    //show callback after add to DB
    let addToDB = function(){
        SE.setMessage("autoriz-message-wrap", "none", "", ""); 
        SE.$("send").style.background = "linear-gradient(to bottom right, #000000, #d3d3d3, #000000)";
        SE.$("send").style.cursor = "no-drop";
        SE.$("icon-send").style.display = "table";
        SE.$("send_persent").style.display = "table";        
        SE.persent();
        //show message about add to DB
        setTimeout(function(){
            SE.$("icon-send").style.display = "none";
            SE.$("send_persent").style.display = "none";
            SE.setMessage("message-send", "table", "green", "Запис додано!");
        }, 2000);
        //clear message about add to DB and clear form 
        setTimeout(function(){
            SE.$("send").addEventListener("click", SE.sendToDB);
            SE.setMessage("message-send", "none", "", "");
            SE.setMessage("message-price", "none", "", "");
            CLEAR.clearObg();
            CLEAR.clearValue();
            CLEAR.clearIcon();
        }, 4000); 
    };

    //for get busy room
    let getBusyRoom = function(resBusyRoom){
        let {responses, busyDte} = resBusyRoom;
        if (responses != "[]"){
            //trim obgect
            let trimObg = responses.trim();
            let myObj = JSON.parse(trimObg);
            //seted label for all days about how many days are busy
            if (myObj.length != 0){SE.$(busyDte).innerHTML += `<span class="kilk-busy-room">${myObj.length}</span>`;}
        }  
    };

    //get rooms to list for edit
    let getRoomCalendar = function(responses){
        if (responses != "[]"){
            //trim obgect
            let trimObg = responses.trim();
            let myObj = JSON.parse(trimObg);
            //if list not empty, push to calendar list
            if (myObj.length != 0){
                SE.$("list-zvit-wrap").innerHTML = `<div class="list-zvit-title">
                <p>Прізвище</p><p>Імя</p><p>Кімн.</p><p>Статус</p><p></p></div>`;
                let v = document.getElementsByClassName("far fa-edit");
                //iteration for show booking list                        
                let status;
                for(let i = 0; i < myObj.length; i++){
                    //add color to message about status
                    (myObj[i].status == "rezerv") ? status = `<span style="text-shadow: 0px 0px 2px yellow;">Резерв.</span>` :
                    (myObj[i].status == "pay") ? status = `<span style="text-shadow: 0px 0px 1px #00a500; color:green;">Оплач.</span>` : console.log();
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
                        SE.getEditList(this)
                            .then(SE.send)
                            .then((responses) => {
                                if (responses != "[]"){
                                    trimObg = responses.trim();
                                    myObj = JSON.parse(trimObg);
                                    //set to form and to update prototype
                                    VW.setToUpdate(myObj); 
                                    SE.addToUpdareProto(myObj);
                                } else {
                                    console.log(responses); 
                                };
                            })
                            .catch((err) => {console.error(err)});
                    });
                }  
            } else {
                SE.$("list-zvit-wrap").style.display = "none";
                SE.$("list-zvit-wrap").innerHTML = "";
            }                 
        } 
    };  

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
        (myObj[0].tip == "guest") ? SE.$("edit-list-guest").innerHTML = "Відвідувач" : SE.$("edit-list-guest").innerHTML = "Працівник";
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

    //get rooms to list for period
    let showRoomPeriod = function(response){
        if (response != "[]"){
            //trim obgect
            let trimObg = response.trim();
            let myObj = JSON.parse(trimObg);
            //if list not empty, push to period list
            if (myObj.length != 0){
                SE.$("list-zvit-wrap-period").innerHTML = `<div class="list-zvit-title-period">
                                                    <p><label for="last_name" class="container2" style="left:3px;">
                                                        Прізвище <input type="radio" 
                                                                name="id-sort" 
                                                                id="last_name" 
                                                                style="width: 16px; margin: 2px -17px; color: red; position: absolute;" 
                                                                value="last_name">
                                                            <span class="checkmark2"></span>
                                                        </label>
                                                    </p>
                                                    <p>Імя</p>
                                                    <p><label for="nomer_kimn" class="container2">
                                                        Кім <input type="radio" 
                                                                name="id-sort" 
                                                                id="nomer_kimn" 
                                                                style="width: 16px; margin: 2px -17px; color: red; position: absolute;" 
                                                                value="nomer_kimn">
                                                            <span class="checkmark2"></span>
                                                        </label>
                                                    </p>
                                                    <p><label for="data_zaizdu" class="container2">
                                                        Дата<input type="radio" 
                                                                name="id-sort" 
                                                                id="data_zaizdu" 
                                                                style="width: 16px; margin: 2px -17px; color: red; position: absolute;" 
                                                                value="data_zaizdu">
                                                            <span class="checkmark2"></span>
                                                        </label>
                                                    </p>
                                                    <p>Ціна</p>
                                                    <p>Гість</p>
                                                    <p>Статус</p>
                                                    <p></p></div>`;
                let v = document.getElementsByClassName("far fa-edit");
                let status, guest, sorts;
                //get sort from session
                sorts = sessionStorage.sortuvannia;
                //sort obgect 
                (sorts == "data_zaizdu") ? SE.sortList(myObj, "data_zaizdu") :
                (sorts == "last_name") ? SE.sortList(myObj, "last_name") : SE.sortList(myObj, "nomer_kimn");
                //iteration for show booking list
                for(let i = 0; i < myObj.length; i++){
                    //add color to message about status
                    (myObj[i].status == "rezerv") ? status = `<span style="text-shadow: 0px 0px 2px yellow;">Резерв.</span>` :
                    (myObj[i].status == "pay") ? status = `<span style="text-shadow: 0px 0px 1px #00a500; color:green;">Оплач.</span>` :
                    status = `<span style="text-shadow: 0px 0px 1px #ff0000; color: #922c2c;">Видал.</span>`;
                    //add color to message about guest
                    (myObj[i].tip == "guest") ? guest = `<span>Гість</span>` : guest = `<span style="text-shadow: 0px 0px 1px #111111; color:#111111;">Праців.</span>`;
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
                // if ((myObj[i].status === 'pay') || (myObj[i].status === 'rezerv')){

                // }
                for(let i = 0; i < myObj.length; i++){
                    console.log(myObj[i].status);
                    if ((myObj[i].status === 'pay') || (myObj[i].status === 'rezerv')){
                        v[i].addEventListener("click", function(){
                            SE.getEditList(this)
                            .then(SE.send)
                            .then((responses) => {
                                if (responses != "[]"){
                                    let trimObg = responses.trim();
                                    let myObj = JSON.parse(trimObg);
                                    //set to form and to update prototype
                                    VW.setToUpdate(myObj); 
                                    SE.addToUpdareProto(myObj);
                                } else {
                                    console.error(responses); 
                                };
                            })
                            .catch((err) => {console.error(err)});
                        });
                        if (myObj[i].status == "pay"){sumSum += myObj[i].price;}
                    } else if (myObj[i].status === 'del'){
                        v[i].style.display = 'none';
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
    };   
    
    //update DB
    let updateToDB = function(response){
        let trimRes = response.trim(); 
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
                //add listener for select day
                SE.listenerToCalendar();
                //clear update prototipe
                CLEAR.clearUpdatePrototipe();
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
            console.error(this.responseText);
        } 
    };    

    return {
        makeDOM,
        buttonLogin,
        clikTabOne,
        clikTabTwo,
        chengeBG,
        checkCut,
        checkTest,
        checkTestS,
        setToUpdate,
        viewAfterLogin,
        GetRoom,
        getPrice,
        addToDB,
        getBusyRoom,
        getRoomCalendar,
        showRoomPeriod,
        updateToDB,
        chackNomDateKilk
    };

})();