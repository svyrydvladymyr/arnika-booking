let LF = (function(){
    // function for get id node
    var getID = function(val) {
        let getid = document.getElementById(val);
        return getid;
    };

    // function for get object from (*.json) file
    let getJson = function(namefile, funCallback) {
        var file = new XMLHttpRequest();
        file.onreadystatechange = function() {
            if (file.readyState === 4 && file.status == "200") {
                let data = JSON.parse(file.responseText);
                funCallback(data.loginEnter, data.loginExit);
            }
        };
        file.open("GET", namefile, true);
        file.send(null);
    };

    // function for set parametrs
    let setSettings = function(...val){
        LF.getID("enter-close").innerHTML = val[0]; 
        LF.getID("enter-open").innerHTML = val[0]; 
        LF.getID("enter-exit").innerHTML = val[1]; 
    };

    return {
        getID:getID, 
        getJson:getJson,
        setSettings:setSettings
    };
})();