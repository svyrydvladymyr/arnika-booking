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
    
    //change tab one
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

    //change tab two
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

    //chenge color background
    let chengeBG = function(id, color){
        SE.$(id).style.backgroundColor = color;
    };
    
    //check on true or error 
    let checkCut = function(idF, errorF, trueF, reg){
        if (SE.$(idF).value == ""){
            SE.$(errorF).style.display = "table";
            SE.$(trueF).style.display = "none";
        } else {
            SE.incorrectCheck(idF, reg, function(){
                if(SE.$(idF).value == ""){
                    SE.$(errorF).style.display = "table";   
                    SE.$(trueF).style.display = "none";
                } else {
                    if (SE.$(idF).id == "add-tel"){ 
                        if (SE.$(idF).value.length != 9) {
                            SE.$(errorF).style.display = "table";
                            SE.$(trueF).style.display = "none";
                        }
                    } else {
                        SE.$(errorF).style.display = "none";   
                        SE.$(trueF).style.display = "table";
                    }
                }
            }); 
        }
    };
    let checkTest = function(idF, errorF, trueF, reg){
        if (new RegExp(reg, "gi").test(SE.$(idF).value) == true){
            SE.$(errorF).style.display = "none";
            SE.$(trueF).style.display = "table";
        } else {
            SE.$(errorF).style.display = "table";
            SE.$(trueF).style.display = "none";
        }
    };




    return {
        makeDOM:makeDOM,
        clikTabOne:clikTabOne,
        clikTabTwo:clikTabTwo,
        chengeBG:chengeBG,
        checkCut:checkCut,
        checkTest:checkTest
    };

})();