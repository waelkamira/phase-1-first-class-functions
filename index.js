const receivesAFunction = (callback) => {
    callback()
}

const returnsANamedFunction = () => {
   return function add (){

    }
}

const returnsAnAnonymousFunction = () => {
    return function () {

    }
}