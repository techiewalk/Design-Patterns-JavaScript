/*
    Defintion : Singleton Pattern is a creationoal design pattern which limits the number of instances of a particular object to just one.

    Usages - 
        Singletons are useful in situations where system-wide actions need to be coordinated from a one place. 
        Ex -Logging, Database Connections, etc..

*/

// Traditional/ Conventional Singleton creation.
var Singleton = (function () {
    var instance;
 
    return {
        getInstance: function () {
            if (!instance) {
                instance = new Object();
            }
            return instance;
        }
    };
})();
 
// ES6 Convention
class Singleton {
    static instance;
    
    constructor(){
        if(instance){
            return instance;
        }
        
        this.instance = this;
    }
}

const instance1 = new Singleton();
const instance2 = new Singleton();

console.log(instance1 === instance2 ? "same": "no same");
