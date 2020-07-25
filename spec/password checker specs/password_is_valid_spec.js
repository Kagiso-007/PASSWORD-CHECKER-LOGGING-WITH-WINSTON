var PW_Checker = require('../../src/password_checker')
var pw_checker;
describe('PasswordChecker', () =>{

    beforeEach(function(){
        pw_checker = PW_Checker.PasswordChecker;
    })
    
    //testing a non existant password
    it('should throw an Error "Password should exist"', () =>{
        expect(function(){
            pw_checker.passwordIsValid("")
        }).toThrow(new Error("Password should exist"));
    })

    //testing a password with less than 9 characters
    it('should throw an Error "Password should be longer than 8 characters"', () =>{
        expect(function(){
            pw_checker.passwordIsValid("P@ssword")
        }).toThrow(new Error("Password should be longer than 8 characters"));
    })

    //testing a password without a lowercase character
    it('should throw an Error "Password should have at least one lowercase character"', () =>{
        expect(function(){
            pw_checker.passwordIsValid("P@SSWORD2")
        }).toThrow(new Error("Password should have at least one lowercase character"));
    })

    //testing a password without an uppercase character
    it('should throw an Error "Password should have at least one uppercase character"', () =>{
        expect(function(){
            pw_checker.passwordIsValid("p@ssword3")
        }).toThrow(new Error("Password should have at least one uppercase character"))
    })

    //testing a password without a digit
    it('should throw an Error "Password should at least have one digit"', () =>{
        expect(function(){
            pw_checker.passwordIsValid("P@ssword()")
        }).toThrow(new Error("Password should at least have one digit"))
    })

    //testing a without a special character
    it('should throw an Errow "Password should have at least one special character"', () =>{
        expect(function(){
            pw_checker.passwordIsValid("Password5")
        }).toThrow(new Error("Password should have at least one special character"))
    })
})