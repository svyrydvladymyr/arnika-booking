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

    //audit login
    let auditLogin = function(login, password, fun){
        if ((login != "") && (password != "")) {
            fun();
        }
    };

    //cut incorrect symbol in login
    let resLoginFun = function(){
        let inputLogin = SE.$("login").value;
        let resLogin = inputLogin.replace(/[^a-zA-Zа-яА-Я]/gi, '');
        console.log(resLogin);
        SE.$("login").value = resLogin;  
    };
    
    //cut incorrect symbol in password
    let resPasswordFun = function(){
        let inputPassword = SE.$("password").value;
        let resPassword = inputPassword.replace(/[^0-9a-zA-Zа-яА-Я]/gi, '');
        console.log(resPassword);
        SE.$("password").value = resPassword;  
    }; 

    return {
        $:$, 
        setSettings:setSettings,
        setMessage:setMessage,
        auditLogin:auditLogin,
        resLoginFun:resLoginFun,
        resPasswordFun:resPasswordFun
    };
})();