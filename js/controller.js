window.onload = function(){
    //get and set settings
    SE.$("demo-wrap").style.display = "none";
    SE.setSettings("ВХІД");
    let login = sessionStorage.arnikalogin; 
    let password = sessionStorage.arnikapassword;  
    //check session and if true autorisation
    if ((login == "") || (password == "")){
        SE.setMessage("autoriz-message-wrap", "table", "autoriz-message", "#1f6a1f", "Вам потрібно авторизуватися");
    }
    SE.auditLogin(login, password, function(){
        AJAX.checkUser(login, password, function(){
            VW.makeDOM();
        });
    });

    //check and cut incorrect symbol in password
    SE.$("login").addEventListener("input", SE.resLoginFun);      
    SE.$("password").addEventListener("input", SE.resPasswordFun);

    //change button in blok and login    
    let logInCon = SE.$("click");
    let logIn = SE.$("send-login-close");
    logInCon.onclick = function(){
        if (logIn.classList == "click-login-close"){
            logIn.classList = "click-login-open";
            SE.setSettings("ВХІД");
        } else if(logIn.classList == "click-login-open"){
            let inputLogin = SE.$("login").value;
            let inputPassword = SE.$("password").value;
            if ((inputLogin == "") && (inputPassword == "")){
                SE.setMessage("autoriz-message-wrap", "table", "autoriz-message", "#b62b2b", "Логін і пароль не можуть бути пустими!!!");
            } else if ((inputLogin == "")) {
                SE.setMessage("autoriz-message-wrap", "table", "autoriz-message", "#b62b2b", "Логін не може бути пустим!!!");
            } else if ((inputPassword == "")) {
                SE.setMessage("autoriz-message-wrap", "table", "autoriz-message", "#b62b2b", "Пароль не може бути пустим!!!");
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
            SE.setMessage("autoriz-message-wrap", "table", "autoriz-message", "#1f6a1f", "Вам потрібно авторизуватися");
            //clear session
            sessionStorage.arnikalogin = "";
            sessionStorage.arnikapassword = "";
        }
    };
    
    //create tabs
    SE.$("tab1").addEventListener("click", VW.clikTabOne);
    SE.$("tab2").addEventListener("click", VW.clikTabTwo);

};






