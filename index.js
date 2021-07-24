
function receivesAFunction(callback){
    const spy = chai.spy();
}

function receivesAFunction(spy){
    spy();
}

function returnsANamedFunction(){
    let fn= function(goose){}
    return fn
}

function returnsAnAnonymousFunction(){
    return function(){
    }
}