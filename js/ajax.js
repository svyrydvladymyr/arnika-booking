let AJAX = (function(){

    // function for get object from (*.json) file
    let getJson = function(namefile) {
        var file = new XMLHttpRequest();
        file.onreadystatechange = function() {
            if (file.readyState === 4 && file.status == "200") {
                let data = JSON.parse(file.responseText);
                for (var id in data) {
                    if (SE.$(id)){    
                        SE.$(id).placeholder = data[id];
                        SE.$(id).innerHTML = data[id];
                    }
                }
            }
        };
        file.open("GET", namefile, true);
        file.send(null);
    };

    // function for autorisation
    let checkUser = function(login, password, funCall){
        let obj, dbParam, xmlhttp, myObj, trimObg, getLength, res, resLogin, resPassword;
            resLogin = login.replace(/[^a-zA-Zа-яА-Я]/gi, '');
            resPassword = password.replace(/[^0-9a-zA-Zа-яА-Я]/gi, '');
            if ((/^[a-zA-Zа-яА-Я]/gi.test(resLogin) == true) && (/^[0-9a-zA-Zа-яА-Я]/gi.test(resPassword) == true)) {
                obj = { "login":resLogin, "password":resPassword};
            }
            dbParam = JSON.stringify(obj);
            xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                //check on true response
                if (this.responseText = "[]"){
                    SE.setMessage("autoriz-message-wrap", "table", "autoriz-message", "#b62b2b", "Не вірний логін або пароль");
                } 
                //cut first and last symbol in Object
                trimObg = this.responseText.trim();
                getLength = trimObg.length-1; 
                res = trimObg.slice(1, getLength);               
                //parse Object
                myObj = JSON.parse(res);
                document.getElementById("demo").innerHTML = `${myObj.surname} ${myObj.name}`;
                //if get accesses set session
                sessionStorage.arnikalogin = myObj.login;
                sessionStorage.arnikapassword = myObj.password;
                //if get accesses show hidden DOM
                funCall();                               
            }
            };
            xmlhttp.open("GET", "php/enter.php?x=" + dbParam, true);
            xmlhttp.send();
    };   

    return {
        getJson:getJson,
        checkUser:checkUser
    };
})();