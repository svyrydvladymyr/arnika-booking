window.onload = function(){
    //get and set settings
    SE.$("demo-wrap").style.display = "none";
    SE.setSettings("ent");
    let login = sessionStorage.arnikalogin; 
    let password = sessionStorage.arnikapassword;  
    // console.log(login);
    // console.log(password);
    //check session and if true autorisation
    AJAX.checkUser(login, password, function(){
        VW.makeDOM();
    });

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
            AJAX.checkUser(inputLogin, inputPassword, function(){
                VW.makeDOM();
            });
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
    
    //create tabs
    SE.$("tab-body2").style.display = "none";
    SE.$("tab1").addEventListener("click", VW.clikTabOne);
    SE.$("tab2").addEventListener("click", VW.clikTabTwo);
};






