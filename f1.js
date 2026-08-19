// commonjs, module

export let fullName = "Raskin GHimire"
export const ROLE = ""

export function getUser(){
    console.log("I am in f1 getUser")
    return fullName
}
class UserInfo{}


//export
//commonjs/ES5
// module.exports = {
//     fullName, ROLE, getUser, UserInfo
// }


//module/es6
//at last we can have default export
export default UserInfo