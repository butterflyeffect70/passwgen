var readlineSync = require('readline-sync');

(async () => {
    var question = readlineSync.question("Bla Bla Bla\n")
    //console.log(Math.floor(Math.random() * (25 - 0) + 0))
    var i = 0
    var passw = ""
    while(i < 20){
        passw += await passwgen().then( res => { return res })
        i++
    }
    console.log(passw)
})()
/*function test(b){
    return new Promise((res)=>{
        var a = 10
        res(a + parseInt(b))
    })
}*/

/*function passwgen(){
    return new Promise((res)=>{
        res(Math.random().toString(36).replace('0.', ''))
    })
}*/

function passwgen(){
    return new Promise((res)=>{
        var func = [
            getrandletter().then( res => { return res }),
            getrandnumber().then( res => { return res}),
            getrandsign().then( res => { return res})
        ]
        res(func[Math.floor(Math.random() * (func.length - 0) + 0)])
    })
}

function getrandletter(){
    return new Promise( (res)=>{
        var alp = [ "a","b","c","d","e","f","g","h","i","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
        res(alp[Math.floor(Math.random() * (alp.length - 0) + 0)])
    })
}

function getrandnumber(){
    return new Promise((res)=>{
        res(Math.floor(Math.random() * (11 - 0) + 0))
    })
}

function getrandsign(){
    return new Promise((res)=>{
        var sig = [ "!","§","$","%","&","/","(",")","=","?","+","~","#","-",":",",",";","<",">"]

        res(sig[Math.floor(Math.random() * (sig.length - 0) + 0)])
    })
}