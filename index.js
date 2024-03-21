const receivesAFunction = function (callback){

    callback();
}
const returnsANamedFunction = function(){
    const namedFunction = function(){

    }
    return namedFunction;
}
const returnsAnAnonymousFunction = function(){
    return function(){

    };
}