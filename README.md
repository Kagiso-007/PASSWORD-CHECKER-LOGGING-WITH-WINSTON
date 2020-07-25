# Adding Logging To Password Checker

### Logging Library: Winston v 3.3.3
- Logging configurations: src/logger.ts
- Error level logs are printed on the console and also in a log file 'errors.log'.
- Debug level logs are only printed on the console.

### Compiling '.ts' files to '.js'
> tsc *filename.ts*

### Running the tests (Jasmine)
> npm test
- **Note:** To run the tests successfully, first ensure that the 'password_checker.ts' file is successfully compiled to '.js'.

### Executing the functionality from 'password_checker.ts'
> tsc Main.ts && node Main.js 
**or**
> ts-node Main.ts

### Author
Kagiso Raseroka
