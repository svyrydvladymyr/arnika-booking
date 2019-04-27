window.onload = function(){

    //get and set settings
    SE.$("body").style.backgroundColor = localStorage.bgColor || "#2b2b2b";
    SE.$("demo-wrap").style.display = "none";
    SE.$("edit-wrap").style.display = "none";
    SE.setSettings("ВХІД");
    SE.getJson("json/package.json");
    SE.getJson("json/packageTwo.json");
    sessionStorage.arnikatabs = "two";
    sessionStorage.sortuvannia = "nomer_kimn";
    SE.presentDate();

    //clear obgect prototipe
    CLEAR.clearObg();
    CLEAR.clearValue();
    CLEAR.clearIcon();
    
    //get session to variables 
    let login = sessionStorage.arnikalogin; 
    let password = sessionStorage.arnikapassword; 
    let tabs = sessionStorage.arnikatabs; 

    //for first visit
    if ((login == undefined) || (password == undefined) || (tabs == undefined)){
        sessionStorage.arnikalogin = ""; 
        sessionStorage.arnikapassword = ""; 
        sessionStorage.arnikatabs = "two";
    } else {
        SE.auditLoginPromise(login, password)
            .then(SE.checkUserPromise)
            .then(SE.send)
            .then(VW.viewAfterLogin)
            .then(VW.makeDOM)
            .then(SE.setDaysToCalendar)
            .catch((err) => {console.error(err)});
    }

//set limitation to choice date zvit
    document.getElementById("id-z").onchange = function () {
        var input = document.getElementById("id-po");
        input.setAttribute("min", this.value);
    };
    document.getElementById("id-po").onchange = function () {
        var input = document.getElementById("id-z");
        input.setAttribute("max", this.value);
    };

//change button in bloklogin and login    
    SE.$("click").addEventListener("click", () => {VW.buttonLogin()});

//chenge bgcolor
    SE.$("dark").addEventListener("click", () => {
        VW.chengeBG("body", "#2b2b2b");
        localStorage.bgColor = "#2b2b2b";
    });
    SE.$("light").addEventListener("click", () => {
        VW.chengeBG("body", "#ffffff");
        localStorage.bgColor = "#ffffff";
    });
    
//check and cut incorrect symbol in login and password
    SE.$("login").addEventListener("input", () => {
        (new RegExp(REG.exp().loginTest, "gi").test(SE.$("login").value) == true) ?
        SE.setMessage("autoriz-message-wrap", "none", "", "") : 
        SE.setMessage("autoriz-message-wrap", "table", "#b62b2b", "В логіні можуть бути тільки латинські букви!!!");
        SE.incorrectCheck("login", REG.exp().loginCut, () => {}); 
    });      
    SE.$("password").addEventListener("input", () => {
        (new RegExp(REG.exp().passwordTest, "gi").test(SE.$("password").value) == true) ?
        SE.setMessage("autoriz-message-wrap", "none", "", "") :
        SE.setMessage("autoriz-message-wrap", "table", "#b62b2b", "В паролі можуть бути тільки латинські букви та цифри!!!");
        SE.incorrectCheck("password", REG.exp().passwordCut, () => {});
    });
      
//create tabs
    SE.$("tab1").addEventListener("click", VW.clikTabOne);
    SE.$("tab2").addEventListener("click", VW.clikTabTwo);

//create slider
    SE.$("form-title-2").addEventListener("click", () => {
        (SE.$("form-wrap").style.display === "block") ? 
        SE.$("form-wrap").style.display = "table" : 
        SE.$("form-wrap").style.display = "block";
    });
    SE.$("zvit-title").addEventListener("click", () => {
        (SE.$("form-wrap2").style.display === "block") ?
        SE.$("form-wrap2").style.display = "table" :
        SE.$("form-wrap2").style.display = "block";
    });
    SE.$("zvit-title2").addEventListener("click", () => {
        (SE.$("form-wrap3").style.display === "block") ?
        SE.$("form-wrap3").style.display = "table" :
        SE.$("form-wrap3").style.display = "block";
    });

//slider on hover
    SE.$("form-title-2").addEventListener("mouseover", () => {SE.$("form-wrap").style.boxShadow = "0px 0px 5px grey";});
    SE.$("form-title-2").addEventListener("mouseout", () => {SE.$("form-wrap").style.boxShadow = "0px 0px 2px grey";});
    SE.$("zvit-title").addEventListener("mouseover", () => {SE.$("form-wrap2").style.boxShadow = "0px 0px 5px grey";});
    SE.$("zvit-title").addEventListener("mouseout", () => {SE.$("form-wrap2").style.boxShadow = "0px 0px 2px grey";});
    SE.$("zvit-title2").addEventListener("mouseover", () => {SE.$("form-wrap3").style.boxShadow = "0px 0px 5px grey";});
    SE.$("zvit-title2").addEventListener("mouseout", () => {SE.$("form-wrap3").style.boxShadow = "0px 0px 2px grey";});        

//check and cut incorrect symbol form

    //name-----------------------------------------------------------------------------------
    SE.$("add-name").addEventListener("change", () => {VW.checkCut("add-name", "name-error", "name-true", REG.exp().nameCut)});
    SE.$("add-name").addEventListener("input", () => {VW.checkTest("add-name", "name-error", "name-true", REG.exp().nameTest)}); 
    //surname--------------------------------------------------------------------------------
    SE.$("add-surname").addEventListener("change", () => {VW.checkCut("add-surname", "surname-error", "surname-true", REG.exp().nameCut)});
    SE.$("add-surname").addEventListener("input", () => {VW.checkTest("add-surname", "surname-error", "surname-true", REG.exp().nameTest)});
    //tel------------------------------------------------------------------------------------
    SE.$("add-tel").addEventListener("change", () => {VW.checkCut("add-tel", "tel-error", "tel-true", REG.exp().telCut)});
    SE.$("add-tel").addEventListener("input", () => {VW.checkTest("add-tel", "tel-error", "tel-true", REG.exp().telTest)});                

//chack rooms 
              
    //number-----------------------------------------------------------------------------
    SE.$("add-nomer").addEventListener("change", () => {
        if ((SE.$("add-nomer").validity) && (!SE.$("add-nomer").validity.valid)){
            SE.setMessage("message-add-nomer", "table", "#111111", "Не коректне значення!");
            SE.setMessage("message-room", "none", "", "");
            SE.iconON("room-error", "room-true", "false");
            SE.readyToSend("add-nomer", "");
        } else {
            if ((SE.$("add-nomer").value == "")) {
                SE.setMessage("message-add-nomer", "table", "#111111", "Не може бути пустим!");
                SE.setMessage("message-room", "none", "", "");
                SE.iconON("room-error", "room-true", "false");
                SE.readyToSend("add-nomer", "");
                SE.readyToSend("add-start-data", "");
                SE.readyToSend("add-kilk", "");
            } else {
                SE.setMessage("message-add-nomer", "none", "", "");
                SE.checkRoom();
            }
        }
    });

    //date-----------------------------------------------------------------------------
    SE.$("add-start-data").addEventListener("change", () => {
        if(!isNaN(SE.$("add-start-data").value)){
            SE.setMessage("message-add-start-data", "table", "#111111", "Не коректне значення!");
            SE.setMessage("message-room", "none", "", "");
            SE.iconON("room-error", "room-true", "false");
            SE.readyToSend("add-start-data", "");
        } else {
            if ((SE.$("add-start-data").value == "")) {
                SE.setMessage("message-add-start-data", "table", "#111111", "Не може бути пустим!");
                SE.setMessage("message-room", "none", "", "");
                SE.iconON("room-error", "room-true", "false");
                SE.readyToSend("add-nomer", "");
                SE.readyToSend("add-start-data", "");
                SE.readyToSend("add-kilk", "");
            } else {
                SE.setMessage("message-add-start-data", "none", "", "");
                SE.checkRoom();
            }
        }
    });

    //kilk-----------------------------------------------------------------------------
    SE.$("add-kilk").addEventListener("change", () => {
        if ((SE.$("add-kilk").validity) && (!SE.$("add-kilk").validity.valid)){
            SE.setMessage("message-add-kilk", "table", "#111111", "Не коректне значення!");
            SE.setMessage("message-room", "none", "", "");
            SE.iconON("room-error", "room-true", "false");
            SE.readyToSend("add-kilk", "");
        } else {
            if ((SE.$("add-kilk").value == "")) {
                SE.setMessage("message-add-kilk", "table", "#111111", "Не може бути пустим!");
                SE.setMessage("message-room", "none", "", "");
                SE.iconON("room-error", "room-true", "false");
                SE.readyToSend("add-nomer", "");
                SE.readyToSend("add-start-data", "");
                SE.readyToSend("add-kilk", "");
            } else {
                SE.setMessage("message-add-kilk", "none", "", "");
                SE.checkRoom();
            }
        }                
    });                                        

    //guest--------------------------------------------------------------------------------
    SE.$("add-status-gгest").addEventListener("change", () => {
        VW.checkTestS("add-status-gгest", "status-gгest-error", "status-gгest-true");
    });    
    //guest--------------------------------------------------------------------------------
    SE.$("add-status-zamovl").addEventListener("change", () => {
        VW.checkTestS("add-status-zamovl", "status-zamovl-error", "status-zamovl-true");
    });                 

//send
    SE.$("send").addEventListener("click", SE.sendToDB);    
        
//for set date in calendar, on change selected year
    SE.$("cal-year").addEventListener("change", function(){
        SE.setDaysToCalendar();
        SE.$("list-zvit-wrap").innerHTML = "";
        //for select day
        let v = document.getElementsByClassName("full-day");
        for(let i = 0; i < v.length; i++){v[i].addEventListener("click", function(){SE.selectDay(this)})}
    }); 

//for set date in calendar, on change selected month
    SE.$("cal-mounth").addEventListener("change", function(){
        SE.setDaysToCalendar();
        SE.$("list-zvit-wrap").innerHTML = "";
        //for select day
        let v = document.getElementsByClassName("full-day");
        for(let i = 0; i < v.length; i++){v[i].addEventListener("click", function(){SE.selectDay(this)})}
    });  

//for radio select day from busy day list
    let v = document.getElementsByClassName("full-day");
    for(let i = 0; i < v.length; i++){v[i].addEventListener("click", function(){SE.selectDay(this)})}

//list for the period on change STATUS
    let radioss = document.getElementsByName('id-status');
    for(let i = 0; i < radioss.length; i++){radioss[i].addEventListener("change", SE.reloadPeriod)}  

//update
    SE.$("update-list").addEventListener('change', () => {
        toUpdate.prototype.status = SE.$("update-list").value; 
        SE.$("send-update").classList.add("activ-up");
        SE.$("send-update").addEventListener("click", SE.updateToDB);
    });

//list for the period on change Z
    SE.$("id-z").addEventListener("change", SE.reloadPeriod);   

//list for the period on change PO
    SE.$("id-po").addEventListener("change", SE.reloadPeriod); 
        
};






