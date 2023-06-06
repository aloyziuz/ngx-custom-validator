# ngx-custom-validator
This is a library for custom, commonly used form control validators for angular. 

# Versions
v1.x.x for Angular 13

v2.x.x for Angular 14

v3.x.x for Angualr 15

# Validators
## NonEmptyString
This validator will check control value string for nulls, undefined, and empty string (''). When a control failed this validator it will return `{ NonEmptyString: true }`. 

## NonEmptyStringOrWhitespace
This validator will check control value string for nulls, undefined, empty string (''), and strings that only contains white space and line terminators. 

## StringEqual
This is a function that returns a validator function to be used in FormControl. This function will check that both controls' string value is exactly the same. This is usually used for password field and confirm password field where both have to match exactly. 

How to use: 
```
const password = new FormControl("", [Validators.required]);

const confirmPassword = new FormControl("", [StringEqual(password)]);
```

## NumberOrUndefined
This function will return a validation function to be used in FormControl. First of all, this function will check that the value is either undefined or a valid number. User can also provide additional contraints on the resulting numberby providing a function. 

```
const isSingleDigitNumber = (num: Number) =>{
    return num >= 0 && num <= 9;
}
const numberForm = new FormControl(0, [NumberOrUndefined(isSingleDigitNumber)]);
```

## NumberValidator 
This function performs the same as NumberOrUndefined but it does not accept undefined value. 