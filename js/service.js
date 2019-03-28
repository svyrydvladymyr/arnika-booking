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

    return {
        $:$, 
        setSettings:setSettings,
        setMessage:setMessage,
        messageRoom:messageRoom,
        auditLogin:auditLogin,
        incorrectCheck:incorrectCheck,
        iconON:iconON

    };
})();