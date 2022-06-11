function recievesAfunction(callback){
    console.log (callback());

}

function returnsANamedFunction(){
    const fn = function () {};
    return fn;
}
function returnsAnAnonymousFunction () {
    return function () {};
}