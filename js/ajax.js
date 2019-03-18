let AJAX = (function(){

    // function for get object from (*.json) file
    let getJson = function(namefile, funCallback) {
        var file = new XMLHttpRequest();
        file.onreadystatechange = function() {
            if (file.readyState === 4 && file.status == "200") {
                let data = JSON.parse(file.responseText);
                funCallback(data.loginEnter);
            }
        };
        file.open("GET", namefile, true);
        file.send(null);
    };

    // function for autorisation
    let checkUser = function(login, password, funCall){
        let obj, dbParam, xmlhttp, myObj, trimObg, getLength, res;
            obj = { "login":login, "password":password };
            dbParam = JSON.stringify(obj);
            xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
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
    }   

    return {
        getJson:getJson,
        checkUser:checkUser
    };
})();