let SE = (function(){
    // function for get id node
    let $ = function(val) {
        let getid = document.getElementById(val);
        return getid;
    };

    // function for set parametrs
    let setSettings = function(enter){
        SE.$("enter-open").innerHTML = enter;
        AJAX.getJson("json/package.json");
    };

    return {
        $:$, 
        setSettings:setSettings
    };
})();