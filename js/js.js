window.onload = function(){
    getJson("./json/package.json", setSettings);
    let login = sessionStorage.arnikalogin; 
    let password = sessionStorage.arnikapassword;  
    console.log(login);
    console.log(password);
    // check session and if true autorisation
    getID("demo-wrap").style.display = "none";
    checkUser(login, password, function(){
        logIn.classList = "click-login-exit";
        getID("enter-close").style.display = "none"; 
        getID("enter-open").style.display = "none"; 
        getID("enter-exit").style.display = "table";
        getID("content").style.display = "contents";
        let timeOut = () => {
            getID("demo-wrap").style.display = "flex";
        };
        setTimeout(timeOut, 3000);
    });

    // function for change blok login
    let logInCon = getID("click");
    let logIn = getID("send-login-close");
    console.log(logInCon);
    console.log(logIn);
    logInCon.onclick = function(){
        if (logIn.classList == "click-login-close"){
            logIn.classList = "click-login-open";
            getID("enter-close").style.display = "table"; 
            getID("enter-open").style.display = "none";
            getID("enter-exit").style.display = "none";  
        } else if(logIn.classList == "click-login-open"){
            let login = getID("login").value;
            let password = getID("password").value;
            checkUser(login, password, function(){
                logIn.classList = "click-login-exit";
                getID("enter-close").style.display = "none"; 
                getID("enter-open").style.display = "none"; 
                getID("enter-exit").style.display = "table";
                getID("content").style.display = "contents";
                let timeOut = () => {
                    getID("demo-wrap").style.display = "flex";
                };
                setTimeout(timeOut, 3000);
            });
        } else if (logIn.classList == "click-login-exit"){
            logIn.classList = "click-login-close";
            getID("enter-open").style.display = "none";
            getID("enter-close").style.display = "table";
            getID("enter-exit").style.display = "none";
            getID("content").style.display = "none";
            getID("demo-wrap").style.display = "none";
            sessionStorage.arnikalogin = "";
            sessionStorage.arnikapassword = "";
        };
    }; 
};

// function for get id node
var getID = function(val) {
    let getid = document.getElementById(val);
    return getid;
};

// function for set parametrs
var setSettings = function(...val){
    getID("enter-close").innerHTML = val[0]; 
    getID("enter-open").innerHTML = val[0]; 
    getID("enter-exit").innerHTML = val[1]; 
};

// function for get object from (*.json) file
function getJson(namefile, funCallback) {
    var file = new XMLHttpRequest();
    file.onreadystatechange = function() {
        if (file.readyState === 4 && file.status == "200") {
            let data = JSON.parse(file.responseText);
            funCallback(data.loginEnter, data.loginExit);
        }
    };
    file.open("GET", namefile, true);
    file.send(null);
}

// function for autorisation
let checkUser = function(login, password, funCall){
    let obj, dbParam, xmlhttp, myObj;
        obj = { "login":login, "password":password };
        dbParam = JSON.stringify(obj);
        xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let x = this.responseText;
            let y = x.trim();
            let z = y.length-1; 
            let res = y.slice(1, z);
            myObj = JSON.parse(res);
            document.getElementById("demo").innerHTML = `${myObj.surname} ${myObj.name}`;
            sessionStorage.arnikalogin = myObj.login;
            sessionStorage.arnikapassword = myObj.password;
            funCall();
        }
        };
        xmlhttp.open("GET", "php/enter.php?x=" + dbParam, true);
        xmlhttp.send();
}





// function for change tabs
let tab1 = getID("tab1");
let tab2 = getID("tab2");
let content1 = getID("tab-body1");
let content2 = getID("tab-body2");
tab1.onclick = function(){
    content1.style.display = "none";
    content2.style.display = "table";
    tab1.classList.add("activ");
    tab2.classList.remove("activ");
};
tab2.onclick = function(){
    content1.style.display = "table";
    content2.style.display = "none";
    tab1.classList.remove("activ");
    tab2.classList.add("activ");
};


