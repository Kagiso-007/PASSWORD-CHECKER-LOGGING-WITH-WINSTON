var PW_Checker = require("../../src/password_checker");
var pw_checker;

describe("Password is ok", () =>{
    beforeEach(function() {
        pw_checker = PW_Checker.PasswordChecker;
    })

    it("should return 'true'", () =>{
        expect(pw_checker.passwordIsOk("passwordone")).toBeTruthy();
    })

    it("should return 'false'", () =>{
        expect(pw_checker.passwordIsOk("password")).toBeFalsy();
    })
})