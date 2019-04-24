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
                    .catch(function(err){
                        console.log(err);
                    });
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
        if (responses == "[]"){
            SE.setMessage("autoriz-message-wrap", "table", "#b62b2b", "Не вірний логін або пароль");
        } 
        //cut first and last symbol in Object
        trimObg = responses.trim();
        getLength = trimObg.length-1; 
        res = trimObg.slice(1, getLength);   
        //parse Object
        return new Promise(function(resolve, reject){
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
                resolve();
            } else {
                reject("Не вірний логін або пароль...");
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
        let timeOut = () => {
            SE.$("demo-wrap").style.display = "flex";
        };
        setTimeout(timeOut, 1000);
        return new Promise(function(resolve){
            resolve();
        });
    };
    
    //change tab one an clear all for tab two
    let clikTabOne = function(){
        SE.$("tab1").classList.add("activ");
        SE.$("tab2").classList.remove("activ");
        setTimeout(function(){
            SE.$("tab-text-one").style.display = "table";
        },500);
        SE.$("tab-text-two").style.display = "none";
        AJAX.getJson("json/packageTwo.json");
        SE.$("add-nomer").max = 12;
        sessionStorage.arnikatabs = "two";
        SE.clearTabs();
        SE.clearObg();
        SE.clearValue();
        SE.clearIcon();
        SE.auditLogin(sessionStorage.arnikalogin, sessionStorage.arnikapassword, function(){
            AJAX.checkUser(sessionStorage.arnikalogin, sessionStorage.arnikapassword, function(){
                SE.setDaysToCalendar();
            });
        });
        SE.$("list-zvit-wrap").innerHTML = "";
        //reload period list 
            setTimeout(function(){
                SE.reloadPeriod(); 
            }, 1000);
            setTimeout(function(){
                SE.$("list-zvit-wrap").innerHTML = "";
            }, 800); 
    };

    //change tab two and clear all for tab one
    let clikTabTwo = function(){
        SE.$("tab1").classList.remove("activ");
        SE.$("tab2").classList.add("activ");
        setTimeout(function(){
            SE.$("tab-text-two").style.display = "table";
        },500);
        SE.$("tab-text-one").style.display = "none";
        AJAX.getJson("json/packageThree.json");
        SE.$("add-nomer").max = 15;
        sessionStorage.arnikatabs = "three";
        SE.clearTabs();
        SE.clearObg();
        SE.clearValue();
        SE.clearIcon();
        SE.auditLogin(sessionStorage.arnikalogin, sessionStorage.arnikapassword, function(){
            AJAX.checkUser(sessionStorage.arnikalogin, sessionStorage.arnikapassword, function(){
                SE.setDaysToCalendar();
            });
        });        
        SE.$("list-zvit-wrap").innerHTML = "";
        //reload period list 
        setTimeout(function(){
            SE.reloadPeriod();
        }, 1000);
        setTimeout(function(){
            SE.$("list-zvit-wrap").innerHTML = "";
        }, 800);
    };

    //chenge color background
    let chengeBG = function(id, color){
        SE.$(id).style.backgroundColor = color;
        if (color == "#2b2b2b"){
            SE.$("footer").style.color = "#ffffff";
        } else {
            SE.$("footer").style.color = "#111111";
        }
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

    //for select present day
    let selectPresentDay = function(){
        let presDayShowNew = new Date();
        let presDayShow = presDayShowNew.getFullYear() + "-" + SE.readyMonth(presDayShowNew) + "-" + presDayShowNew.getDate();
        if (SE.$(presDayShow)){
            SE.$(presDayShow).style.border = "1px solid red";
            SE.$(presDayShow).style.backgroundColor = "#fffbd2";
            //set url for select present day
            SE.auditLogin(sessionStorage.arnikalogin, sessionStorage.arnikapassword, function(){
                AJAX.checkUser(sessionStorage.arnikalogin, sessionStorage.arnikapassword, function(){
                    if (sessionStorage.arnikatabs == "two"){
                        SE.$("list-zvit-wrap").style.display = "table";
                        AJAX.getRoomCalendar(presDayShow, "php/getRoomCalTwo.php?x=");
                    } else if (sessionStorage.arnikatabs == "three"){
                        SE.$("list-zvit-wrap").style.display = "table";
                        AJAX.getRoomCalendar(presDayShow, "php/getRoomCalThree.php?x=");
                    }
                });
            });
        }
    };

    //for select day
    let selectDay = function(el){
        let cell = el;
        let v = document.getElementsByClassName("full-day");
        for(let i = 0; i < v.length; i++){
            SE.$(v[i].id).classList.remove("cal-activ");
        }
        SE.$(cell.id).classList.add("cal-activ");
        //set url for select day
        SE.auditLogin(sessionStorage.arnikalogin, sessionStorage.arnikapassword, function(){
            AJAX.checkUser(sessionStorage.arnikalogin, sessionStorage.arnikapassword, function(){
                if (sessionStorage.arnikatabs == "two"){
                    SE.$("list-zvit-wrap").style.display = "table";
                    AJAX.getRoomCalendar(cell.id, "php/getRoomCalTwo.php?x=");
                } else if (sessionStorage.arnikatabs == "three"){
                    SE.$("list-zvit-wrap").style.display = "table";
                    AJAX.getRoomCalendar(cell.id, "php/getRoomCalThree.php?x=");
                }
            });
        });
    };   
    
    //show form for edit
    let getEditList = function(el){
        SE.$("edit-wrap").style.display = "flex";
        SE.$("edit-exit").addEventListener("click", function(){
            SE.$("edit-wrap").style.display = "none";
        });
        //get variables from attributes node
        let upName, upSurname, upNomer, upTel, upKilk, upGuest;
        upName = el.getAttribute("editname");
        upSurname = el.getAttribute("editsurname");
        upNomer = el.getAttribute("editnomer");
        upTel = el.getAttribute("edittel");
        upKilk = el.getAttribute("editkilk");
        //set url for show form for edit
        if (sessionStorage.arnikatabs == "two"){
            AJAX.setToEdit(upSurname, upName, upNomer, upTel, upKilk, "php/getForUpdateTwo.php?x=");
        } else if (sessionStorage.arnikatabs == "three"){
            AJAX.setToEdit(upSurname, upName, upNomer, upTel, upKilk, "php/getForUpdateThree.php?x=");
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

    return {
        makeDOM:makeDOM,
        buttonLogin:buttonLogin,
        clikTabOne:clikTabOne,
        clikTabTwo:clikTabTwo,
        chengeBG:chengeBG,
        checkCut:checkCut,
        checkTest:checkTest,
        checkTestS:checkTestS,
        selectPresentDay:selectPresentDay,
        selectDay:selectDay,
        getEditList:getEditList,
        setToUpdate:setToUpdate,
        viewAfterLogin:viewAfterLogin
    };

})();