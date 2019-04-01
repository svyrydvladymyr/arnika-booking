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
            if ((inputLogin == "") && (inputPassword == "")){
                SE.setMessage("autoriz-message-wrap", "table", "#b62b2b", "Логін і пароль не можуть бути пустими!!!");
            } else if ((inputLogin == "")) {
                SE.setMessage("autoriz-message-wrap", "table", "#b62b2b", "Логін не може бути пустим!!!");
            } else if ((inputPassword == "")) {
                SE.setMessage("autoriz-message-wrap", "table", "#b62b2b", "Пароль не може бути пустим!!!");
            } else{
                SE.auditLogin(inputLogin, inputPassword, function(){
                    AJAX.checkUser(inputLogin, inputPassword, function(){
                        VW.makeDOM();
                    });
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
    };
    
    //change tab one
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
    };

    //change tab two
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
    };

    //chenge color background
    let chengeBG = function(id, color){
        SE.$(id).style.backgroundColor = color;
    };
    
    //check on true or error in input on change, cut all incorrect, show message
    let checkCut = function(idF, errorF, trueF, reg){
        if (SE.$(idF).value == ""){
            SE.iconON(errorF, trueF, "false");
        } else {
            SE.incorrectCheck(idF, reg, function(){
                if(SE.$(idF).value == ""){
                    SE.iconON(errorF, trueF, "false");
                    SE.setMessage(`message-${idF}`, "table", "#111111", "Не може бути пустим!");
                    SE.readyToSend(idF, "");
                } else {
                    if (SE.$(idF).id == "add-tel"){ 
                        if (SE.$(idF).value.length != 9) {
                            SE.iconON(errorF, trueF, "false");
                            SE.setMessage(`message-${idF}`, "table", "#11111", "Не коректний номер!");
                            SE.readyToSend(idF, "");
                        } else {
                            SE.readyToSend(idF, SE.$(idF).value);
                        }
                    } else {
                        SE.iconON(errorF, trueF, "true");
                        SE.setMessage(`message-${idF}`, "none", "", "");
                        SE.readyToSend(idF, SE.$(idF).value);

                    }
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
            } else {
                SE.setMessage(`message-${idF}`, "table", "#111111", "Тільки букви!");
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

    return {
        makeDOM:makeDOM,
        buttonLogin:buttonLogin,
        clikTabOne:clikTabOne,
        clikTabTwo:clikTabTwo,
        chengeBG:chengeBG,
        checkCut:checkCut,
        checkTest:checkTest,
        checkTestS:checkTestS
    };

})();