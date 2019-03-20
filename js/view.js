let VW = (function(){

    //function for create DOM
    let makeDOM = function(){
        let logIn = SE.$("send-login-close");
        logIn.classList = "click-login-exit";
        SE.setSettings("ВИХІД");
        SE.setMessage("autoriz-message-wrap", "none", "autoriz-message", "", "");
        SE.$("content").style.display = "contents";
        //set info about user after one seccond
        let timeOut = () => {
            SE.$("demo-wrap").style.display = "flex";
        };
        setTimeout(timeOut, 1000);
    };
    
    let clikTabOne = function(){
        SE.$("tab1").classList.add("activ");
        SE.$("tab2").classList.remove("activ");
        SE.$("tab-body1").style.display = "table";
        SE.$("tab-body2").style.display = "none";
        setTimeout(function(){
            SE.$("tab-text-one").style.display = "table";
        },500);
        SE.$("tab-text-two").style.display = "none";
    };

    //change tab one
    let clikTabTwo = function(){
        SE.$("tab1").classList.remove("activ");
        SE.$("tab2").classList.add("activ");
        SE.$("tab-body1").style.display = "none";
        SE.$("tab-body2").style.display = "table";
        setTimeout(function(){
            SE.$("tab-text-two").style.display = "table";
        },500);
        SE.$("tab-text-one").style.display = "none";
    };

    return {
        makeDOM:makeDOM,
        clikTabOne:clikTabOne,
        clikTabTwo:clikTabTwo
    };

})();