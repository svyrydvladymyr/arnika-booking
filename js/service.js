let SE = (function(){
    // function for get id node
    let $ = function(val) {
        let getid = document.getElementById(val);
        return getid;
    };

    // function for set parametrs
    let setSettings = function(...val){
        SE.$("enter-open").innerHTML = val[0]; 
    };

    return {
        $:$, 
        setSettings:setSettings
    };
})();