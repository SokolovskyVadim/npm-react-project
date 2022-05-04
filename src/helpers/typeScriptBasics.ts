let SMTH: string = "sd";

let SMTH2: number = 12;

let SMTH3: boolean = false;

let randomArray: Array<string> = ["sdsf", 32];

let randomArray2: (UserData)[] = [];

randomArray2.push({userName: "string", userAge:"number", userHobbies:[]})

let userData: [string, number, (string)[]] = ["Paul", 34, ["dsfsd", "dfgsdfgsdfg"]];

userData = ["Paul", 34, ["dsfsd", "dfgsdfgsdfg"]];

enum ACTION_NAMES {
    getUser = 10,
    setUser
}

const userRole = ACTION_NAMES.setUser;

const userData: UserData = {
    userName: "string",
    userAge:"number",
    userHobbies:[12,34]
}

interface UserData {
    userName: string,
    userAge:number,
    userHobbies:(string)[]
}

interface UserPermissions {
    addHobby: boolean,
    viewFreeBookShelf:boolean,
    viewPremiumBookShelf:boolean
}

const currentUser: UserData & UserPermissions = {
    userName: "string",
    userAge:12,
    userHobbies:["data1","data2"],
    addHobby: false,
    viewFreeBookShelf: false,
    viewPremiumBookShelf: false
}

const concatenate = (x:number, y:number, isStrings?:boolean) : (number | string) => {
    if (isStrings) {
        return x.toString() as string + y.toString() as string
    } else {
        return x + y
    }
}

concatenate(1, 2, false);
