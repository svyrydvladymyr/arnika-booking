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
        let tab1, tab2, content1, content2;
        tab1 = SE.$("tab1");
        tab2 = SE.$("tab2");
        content1 = SE.$("tab-body1");
        content2 = SE.$("tab-body2");
        content1.style.display = "table";
        content2.style.display = "none";
        tab1.classList.add("activ");
        tab2.classList.remove("activ");
    };

    //change tab one
    let clikTabTwo = function(){
        let tab1, tab2, content1, content2;
        tab1 = SE.$("tab1");
        tab2 = SE.$("tab2");
        content1 = SE.$("tab-body1");
        content2 = SE.$("tab-body2");
        content2.style.display = "table";
        content1.style.display = "none";
        tab1.classList.remove("activ");
        tab2.classList.add("activ");
    };

    return {
        makeDOM:makeDOM,
        clikTabOne:clikTabOne,
        clikTabTwo:clikTabTwo
    };

})();