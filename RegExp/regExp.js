const localeReg = "bg_BG".match(/[a-z]{2}_[A-Z]{2}?/);
console.log(localeReg);

const passReg = "fd a$sFg%G34 ghg".match(/[\w\s*&$#+=%^@]{8,64}/);
const passBonusReg = "fd a$sFg%35Ghg".match(/(?=.*[a-z])(?=.*\d)(?=.*[ _*&$#+=%^@)(])?(?=.*[A-Z]).{8,64}/);
console.log(passBonusReg);

const phoneReg = "+35982502010".match(/^([+]359|0)\d{6,9}/);
console.log(phoneReg);

const emailReg = "my_unique_mail.01+comment@sub.domain.example.com".match(/([\w.+]+)@([a-z.]+)(.[a-zA-Z]{2,}$)/);
console.log(emailReg);

const nameReg = "Ана-Мария Димитрова Петкова";
const regex = /([а-яА-Я-.]+\s)([а-яА-Я-.]+\s)?([а-яА-Я-.]+)/;
console.log(nameReg.match(regex));
const newName = nameReg.replace(regex, "$3, $1");
console.log(newName);

const urlReg = "ftp://johnsmith@my.domain.com:8080/path/to/resource/file.txt";
const regexUrl = /^([a-z]+):[/]{2}([w]{3})?\.?([a-z.]+@)?\/?([a-z.]+):?(\d+)?\/?([/\w]+[/|?])?([\w]+[.a-z]+)?([?\w=&]+)?/;
console.log(urlReg.match(regexUrl));

const ipReg = "192.168.0.1";
const regexIP = /([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$/;
console.log(ipReg.match(regexIP));

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