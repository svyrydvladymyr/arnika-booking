window.onload = function(){
    //get and set settings
    SE.$("body").style.backgroundColor = localStorage.bgColor || "#2b2b2b";
    SE.$("demo-wrap").style.display = "none";
    SE.$("edit-wrap").style.display = "none";
    SE.setSettings("ВХІД");
    AJAX.getJson("json/package.json");
    AJAX.getJson("json/packageTwo.json");
    sessionStorage.arnikatabs = "two";
    sessionStorage.sortuvannia = "nomer_kimn";
    SE.presentDate();

    //clear obgect prototipe
    SE.clearObg();
    SE.clearValue();
    SE.clearIcon();
    
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
        //check session and if true autorisation
        SE.auditLogin(login, password, function(){
            AJAX.checkUser(login, password, function(){
                VW.makeDOM(function(){
                    SE.setDaysToCalendar();
                });
            });
        });
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

    //addEventListener(s)+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
            //change button in bloklogin and login    
            SE.$("click").addEventListener("click", function(){
                VW.buttonLogin();
            });
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
                //name-----------------------------------------------------------------------------------
                SE.$("add-name").addEventListener("change", function(){
                    VW.checkCut("add-name", "name-error", "name-true", REG.exp().nameCut);
                });
                SE.$("add-name").addEventListener("input", function(){
                    VW.checkTest("add-name", "name-error", "name-true", REG.exp().nameTest);
                }); 
                //surname--------------------------------------------------------------------------------
                SE.$("add-surname").addEventListener("change", function(){
                    VW.checkCut("add-surname", "surname-error", "surname-true", REG.exp().nameCut);
                });
                SE.$("add-surname").addEventListener("input", function(){
                    VW.checkTest("add-surname", "surname-error", "surname-true", REG.exp().nameTest);
                });
                //tel------------------------------------------------------------------------------------
                SE.$("add-tel").addEventListener("change", function(){
                    VW.checkCut("add-tel", "tel-error", "tel-true", REG.exp().telCut);
                });
                SE.$("add-tel").addEventListener("input", function(){
                    VW.checkTest("add-tel", "tel-error", "tel-true", REG.exp().telTest);
                });
                //chack rooms
                    //number-----------------------------------------------------------------------------
                    SE.$("add-nomer").addEventListener("change", function(){
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
                                AJAX.checkRoom();
                            }
                        }
                    });
                    //date-----------------------------------------------------------------------------
                    SE.$("add-start-data").addEventListener("change", function(){
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
                                AJAX.checkRoom();
                            }
                        }
                    });
                    //kilk-----------------------------------------------------------------------------
                    SE.$("add-kilk").addEventListener("change", function(){
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
                                AJAX.checkRoom();
                            }
                        }                
                    });
                //guest--------------------------------------------------------------------------------
                SE.$("add-status-gгest").addEventListener("change", function(){
                    VW.checkTestS("add-status-gгest", "status-gгest-error", "status-gгest-true");
                });    
                //guest--------------------------------------------------------------------------------
                SE.$("add-status-zamovl").addEventListener("change", function(){
                    VW.checkTestS("add-status-zamovl", "status-zamovl-error", "status-zamovl-true");
                }); 

            //send
            SE.$("send").addEventListener("click", SE.sendToDB);    
        
        //for set date in calendar, on change selected year
        SE.$("cal-year").addEventListener("change", function(){
            SE.auditLogin(sessionStorage.arnikalogin, sessionStorage.arnikapassword, function(){
                AJAX.checkUser(sessionStorage.arnikalogin, sessionStorage.arnikapassword, function(){
                    SE.setDaysToCalendar();
                });
            });
            SE.$("list-zvit-wrap").innerHTML = "";
            //for select day
            let v = document.getElementsByClassName("full-day");
            for(let i = 0; i < v.length; i++){
                v[i].addEventListener("click", function(){
                    VW.selectDay(this);
                });
            }
        }); 

        //for set date in calendar, on change selected month
        SE.$("cal-mounth").addEventListener("change", function(){
            SE.auditLogin(sessionStorage.arnikalogin, sessionStorage.arnikapassword, function(){
                AJAX.checkUser(sessionStorage.arnikalogin, sessionStorage.arnikapassword, function(){
                    SE.setDaysToCalendar();
                });
            });
            SE.$("list-zvit-wrap").innerHTML = "";
            //for select day
            let v = document.getElementsByClassName("full-day");
            for(let i = 0; i < v.length; i++){
                v[i].addEventListener("click", function(){
                    VW.selectDay(this);
                });
            }
        });  
        
        //for select day from busy day list
        let v = document.getElementsByClassName("full-day");
        for(let i = 0; i < v.length; i++){
            v[i].addEventListener("click", function(){
                VW.selectDay(this);
            });
        }

        //update
        SE.$("update-list").addEventListener('change', function(){
            toUpdate.prototype.status = SE.$("update-list").value; 
            SE.$("send-update").classList.add("activ-up");
            SE.$("send-update").addEventListener("click", SE.updateToDB);
        });


        //list for the period on change Z
        SE.$("id-z").addEventListener("change", SE.reloadPeriod);   

        //list for the period on change PO
        SE.$("id-po").addEventListener("change", SE.reloadPeriod);   
       
        //list for the period on change STATUS
        let radioss = document.getElementsByName('id-status');
            for(let i = 0; i < radioss.length; i++){
                radioss[i].addEventListener("change", SE.reloadPeriod);         
            }


    //addEventListener(s) end +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++      

};






