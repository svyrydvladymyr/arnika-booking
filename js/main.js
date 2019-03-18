window.onload = function(){
    //get and set settings
    LF.getID("demo-wrap").style.display = "none";
    LF.getJson("./json/package.json", LF.setSettings);
    //check session to variables
    let login = sessionStorage.arnikalogin; 
    let password = sessionStorage.arnikapassword;  
    // console.log(login);
    // console.log(password);
    //check session and if true autorisation
    checkUser(login, password, function(){
        makeDOM();
    });

    //change button in blok and login    
    let logInCon = LF.getID("click");
    let logIn = LF.getID("send-login-close");
    logInCon.onclick = function(){
        if (logIn.classList == "click-login-close"){
            logIn.classList = "click-login-open";
            LF.getID("enter-close").style.display = "table"; 
            LF.getID("enter-open").style.display = "none";
            LF.getID("enter-exit").style.display = "none";  
        } else if(logIn.classList == "click-login-open"){
            let inputLogin = LF.getID("login").value;
            let inputPassword = LF.getID("password").value;
            checkUser(inputLogin, inputPassword, function(){
                makeDOM();
            });
        } else if (logIn.classList == "click-login-exit"){
            logIn.classList = "click-login-close";
            LF.getID("enter-open").style.display = "none";
            LF.getID("enter-close").style.display = "table";
            LF.getID("enter-exit").style.display = "none";
            LF.getID("content").style.display = "none";
            LF.getID("demo-wrap").style.display = "none";
            //clear session
            sessionStorage.arnikalogin = "";
            sessionStorage.arnikapassword = "";
        }
    }; 

    // function for autorisation
    function checkUser(login, password, funCall){
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

    //function for create DOM
    function makeDOM(){
        logIn.classList = "click-login-exit";
        LF.getID("enter-close").style.display = "none"; 
        LF.getID("enter-open").style.display = "none"; 
        LF.getID("enter-exit").style.display = "table";
        LF.getID("content").style.display = "contents";
        //set info about user after one seccond
        let timeOut = () => {
            LF.getID("demo-wrap").style.display = "flex";
        };
        setTimeout(timeOut, 1000);
    }

    // function for make tabs
    let tab1, tab2, content1, content2; 
    tab1 = LF.getID("tab1");
    tab2 = LF.getID("tab2");
    content1 = LF.getID("tab-body1");
    content2 = LF.getID("tab-body2");
    content2.style.display = "none";
    // click on fitst tab
    tab1.onclick = function(){
        content1.style.display = "table";
        content2.style.display = "none";
        tab1.classList.add("activ");
        tab2.classList.remove("activ");
    };
    // click on second tab
    tab2.onclick = function(){
        content2.style.display = "table";
        content1.style.display = "none";
        tab1.classList.remove("activ");
        tab2.classList.add("activ");
    };
};






