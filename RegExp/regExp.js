function locale(str) {
    return str.match(/([a-z]{2})(_[A-Z]{2})?/);
};
console.log(locale("fr"));

function passCheck(str) {
     return str.match(/(?=.*[A-Z])?(?=.*[a-z])?(?=.*[0-9])?(?=.*[~!@#$%^&*()_\-+=|\\{}[\]:;<>?/])?(?=[^ ]*[ ]?[^ ]*$).{8,64}$/);
}

function bonusCheck(str) {
    return str.match(/(?=.*[a-z])(?=.*\d)(?=.*[ _*&$#+=%^@)(])?(?=.*[A-Z]).{8,64}/);
}
console.log(passCheck("stTG h%b5k"));
console.log(bonusCheck("stTG h%b5k"));

function phoneReg(str) {
    return str.match(/^([+]359|0)\d{6,9}/);
}
console.log(phoneReg("+35982502010"));

function emailReg(str) {
    return emailReg = str.match(/([\w.+]+)@([a-z.]+)(.[a-zA-Z]{2,}$)/);
}
console.log(emailReg("my_unique_mail.01+comment@sub.domain.example.com"));

function nameReg(str) {
    const regex = /([а-яА-Я-.]+\s)([а-яА-Я-.]+\s)?([а-яА-Я-.]+)/;
    str.match(regex);
    return str.replace(regex, "$3, $1");
}
console.log(nameReg("Ана-Мария Димитрова Петкова"));

function urlReg(str) {
    const regexUrl = /^(?:[a-z]+):[/]{2}([w]{3})?\.?([a-z.]+(?=@))?(?:@)?\/?([a-z.]+):?(\d+)?\/?([/\w]+(?=\/|\?))?(?:\/)?([/\w]+)?(?:\.)?([.a-z]+)?([?\w=&]+)?/;
    const urlParth = str.match(regexUrl);
    const jsonElem = {
        "host": urlParth[1],
        "username": urlParth[2],
        "domain": urlParth[3],
        "port": urlParth[4],
        "path": urlParth[5],
        "filename" : urlParth[6],
        "extension" : urlParth[7],
        "query" : urlParth[8]
    }
     return jsonElem;
}
const resultUrl = urlReg("ftp://johnsmith@my.domain.com:8080/path/to/resource/file.txt");
console.log(resultUrl.host);
console.log(resultUrl.username);
console.log(resultUrl.domain);
console.log(resultUrl.port);
console.log(resultUrl.path);
console.log(resultUrl.filename);
console.log(resultUrl.extension);
console.log(resultUrl.query);

function ipReg(str) {
    const regexIP = /([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$/;
    return str.match(regexIP);    
}
console.log(ipReg("192.168.0.1"));

const ListofDays = {
    "01": 31,
    "02": 29,
    "03": 31,
    "04": 30,
    "05": 31,
    "06": 30,
    "07": 31,
    "08": 31,
    "09": 30,
    "10": 31,
    "11": 30,
    "12": 31
}
function validateDate(ListofDays, dateReg){    
    const regexDate = /(\d{4})(\d{2})(\d{2})/;
    const match = dateReg.match(regexDate);

    const year = match[1];
    const month = match[2];
    const day = match[3];
    
    if(month === "02") {
        let leapyear = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
        if(leapyear && day === "29") {
            return console.log("Valid date");
        }
        if(!leapyear && day === "28") {
            return console.log("Valid date");
        }
        return console.error("Invalid date");
    }
    if(ListofDays.hasOwnProperty(month) || day<=ListofDays[month]){
        return console.log("Valid date");
    }
    return console.error("Invalid date!");
}
validateDate(ListofDays, "20200229");