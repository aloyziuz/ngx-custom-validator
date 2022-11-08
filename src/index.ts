import { AbstractControl, ValidatorFn } from '@angular/forms';

export function NonEmptyString(
    control: AbstractControl
): { [key: string]: boolean } | null {
    if (
        control.value === null ||
        control.value === undefined ||
        control.value === ''
    ) {
        return { NonEmptyString: true };
    }
    return null;
}

export function NonEmptyStringOrWhitespace(
    control: AbstractControl
): { [key: string]: boolean } | null {
    if (
        control.value === null ||
        control.value === undefined ||
        control.value === '' ||
        control.value.trim() == ''
    ) {
        return { NonEmptyStringOrWhitespace: true };
    }
    return null;
}

export function StringEqual(c1: AbstractControl): ValidatorFn {
    return (control: AbstractControl) => {
        return control.value === c1.value ? null : { StringEqual: true };
    };
}

export function PasswordValidation(
    password: AbstractControl
): { [key: string]: boolean } | null {
    if (
        password.value === null ||
        password.value === undefined ||
        password.value === '' ||
        password.value.trim() === ''
    ) {
        return { PasswordValidation: true };
    }
    return null;
}

export function NumberOrUndefined(additionalNumberConstraint: (i: number) => boolean = () => true): ValidatorFn{
    return (control: AbstractControl) => {
        //undefined value is fine
        if(control.value === undefined)
            return null;
        
        //value should be a valid number and satisfies input constraints
        const num = Number(control.value);
        if(!isNaN(num) && additionalNumberConstraint(num))
            return null;
        
        return { NumberOrUndefined: true };
    };
}

export function NumberValidator(additionalNumberConstraint: (i: number) => boolean = () => true): ValidatorFn{
    return (control: AbstractControl) => {
        //value should be a valid number and satisfies input constraints
        const num = Number(control.value);
        if(!isNaN(num) && additionalNumberConstraint(num))
            return null;
        
        return { NumberValidator: true };
    };
}