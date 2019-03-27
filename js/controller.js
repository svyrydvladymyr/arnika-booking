window.onload = function(){
    //get and set settings
    SE.$("body").style.backgroundColor = localStorage.bgColor || "#2b2b2b";
    SE.$("demo-wrap").style.display = "none";
    SE.setSettings("ВХІД");

    let login = sessionStorage.arnikalogin; 
    let password = sessionStorage.arnikapassword; 

    //for first visit
    if ((login == undefined) || (password == undefined)){
        sessionStorage.arnikalogin = ""; 
        sessionStorage.arnikapassword = ""; 
    } else {
        //check session and if true autorisation
        SE.auditLogin(login, password, function(){
            AJAX.checkUser(login, password, function(){
                VW.makeDOM();
            });
        });
    }

    //addEventListener(s)
            //chenge bgcolor
            SE.$("dark").addEventListener("click", function(){
                VW.chengeBG("body", "#2b2b2b");
                localStorage.bgColor = "#2b2b2b";
            });
            SE.$("light").addEventListener("click", function(){
                VW.chengeBG("body", "#ffffff");
                localStorage.bgColor = "#ffffff";
            });

            //check and cut incorrect symbol in login and password
            SE.$("login").addEventListener("input", function(){
                if (new RegExp(REG.exp().loginTest, "gi").test(SE.$("login").value) == true){
                    SE.setMessage("autoriz-message-wrap", "none", "", "");
                } else {
                    SE.setMessage("autoriz-message-wrap", "table", "#b62b2b", "В логіні можуть бути тільки латинські букви!!!");
                }
                SE.incorrectCheck("login", REG.exp().loginCut, function(){}); 
            });      
            SE.$("password").addEventListener("input", function(){
                if (new RegExp(REG.exp().passwordTest, "gi").test(SE.$("password").value) == true){
                    SE.setMessage("autoriz-message-wrap", "none", "", "");
                } else {
                    SE.setMessage("autoriz-message-wrap", "table", "#b62b2b", "В паролі можуть бути тільки латинські букви та цифри!!!");
                }
                SE.incorrectCheck("password", REG.exp().passwordCut, function(){});
            });
            
            //create tabs
            SE.$("tab1").addEventListener("click", VW.clikTabOne);
            SE.$("tab2").addEventListener("click", VW.clikTabTwo);

            //check and cut incorrect symbol form
                //name
                SE.$("add-name").addEventListener("change", function(){
                    VW.checkCut("add-name", "name-error", "name-true", REG.exp().nameCut);
                });
                SE.$("add-name").addEventListener("input", function(){
                    VW.checkTest("add-name", "name-error", "name-true", REG.exp().nameTest);
                }); 
                //surname
                SE.$("add-surname").addEventListener("change", function(){
                    VW.checkCut("add-surname", "surname-error", "surname-true", REG.exp().nameCut);
                });
                SE.$("add-surname").addEventListener("input", function(){
                    VW.checkTest("add-surname", "surname-error", "surname-true", REG.exp().nameTest);
                });     
                //tel
                SE.$("add-tel").addEventListener("change", function(){
                    VW.checkCut("add-tel", "tel-error", "tel-true", REG.exp().telCut);
                });
                SE.$("add-tel").addEventListener("input", function(){
                    VW.checkTest("add-tel", "tel-error", "tel-true", REG.exp().telTest);
                });   

                //guest
                SE.$("add-status-gгest").addEventListener("change", function(){
                    VW.checkTestS("add-status-gгest", "status-gгest-error", "status-gгest-true");
                });    
                //guest
                SE.$("add-status-zamovl").addEventListener("change", function(){
                    VW.checkTestS("add-status-zamovl", "status-zamovl-error", "status-zamovl-true");
                });                                                
    //addEventListener(s) end       


    //change button in bloklogin and login    
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
    

};






