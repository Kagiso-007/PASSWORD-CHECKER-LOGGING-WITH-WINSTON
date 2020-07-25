import {Logger} from './logger';

export class PasswordChecker{
    
    static passwordIsValid(password:string){

        const logger = Logger.logger;

        var err_message: string = "Password meets the minimum requirement!";
        const password_length: number = password.length;
        const has_lowercase: boolean = new RegExp('[a-z]').test(password);
        const has_uppercase: boolean = new RegExp('[A-Z]').test(password);
        const has_digit: boolean = new RegExp('[0-9]').test(password);
        const has_special_character: boolean = new RegExp('[^a-zA-Z0-9]').test(password);

        if(!password){
            err_message = "Password should exist"
        }else if(password_length < 9){
            err_message = "Password should be longer than 8 characters"
        }else if(!has_lowercase){
            err_message = "Password should have at least one lowercase character"
        }else if(!has_uppercase){
            err_message = "Password should have at least one uppercase character"
        }else if(!has_digit){
            err_message = "Password should at least have one digit"
        }else if(!has_special_character){
            err_message = "Password should have at least one special character"
        }
        logger.error(err_message);
        throw new Error(err_message);
    }

    static passwordIsOk(password:string):boolean{
       
        const logger = Logger.logger;

        var met_conditions: number = 0;
        var password_is_ok = false;
        const password_length: number = password.length;
        const has_lowercase: boolean = new RegExp("[a-z]").test(password);
        const has_uppercase: boolean = new RegExp("[A-Z]").test(password);
        const has_digit: boolean = new RegExp("[0-9]").test(password);
        const has_special_character: boolean = new RegExp("[^a-zA-Z0-9]").test(password);
        
        if(password_length > 8){ 
            met_conditions += 2; 
        }else{
            logger.log('debug',"Password is not ok!")
            return false;
        };
        
        if(has_lowercase){ met_conditions += 1; };
        if(has_uppercase){ met_conditions += 1; };
        if(has_digit){ met_conditions += 1; };
        if(has_special_character){ met_conditions += 1; };

        if(met_conditions > 2){
            password_is_ok = true;
            logger.log('debug',"Password is ok!!")
        }else{
            logger.log('debug',"Password is not ok!")
        }

        return password_is_ok;
    }
}