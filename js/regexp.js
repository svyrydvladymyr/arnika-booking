let REG = (function(){

    let exp = function(){
        let reg = {
            loginCut:"[^a-zA-Z]",
            passwordCut:"[^0-9a-zA-Z]",
            loginTest:"^[a-zA-Z]+$",
            passwordTest:"^[0-9a-zA-Z]+$",
            nameCut:"[^a-zA-Zа-яА-Я]",
            nameTest:"^[a-zA-Zа-яА-Я]+$",
            telCut:"[^0-9]",
            telTest:"[0-9]{9}",
        };
        return reg;
    };

    return {
        exp:exp
    };

})();