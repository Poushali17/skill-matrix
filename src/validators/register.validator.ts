import { FormGroup } from '@angular/forms';
import {AbstractControl} from '@angular/forms';

export class RegistrationValidator {
    static matchPassword(passwordFormGroup: FormGroup) {
        let createpassword = passwordFormGroup.controls.createpassword.value;
        let confirmpassword = passwordFormGroup.controls.confirmpassword.value;
  
        if (confirmpassword.length <= 0 || createpassword.length <= 0) {
            return null;
        }
  
        if (confirmpassword !== createpassword) {
            return {
                doesMatchPassword: true
            };
        }
  
        return null;
  
    }
  }

// export class RegistrationValidator {

//     static matchPassword(AC: AbstractControl) {
//        let createpassword = AC.get('password').value; // to get value in input tag
//        let confirmPassword = AC.get('confirmPassword').value; // to get value in input tag
//         if(createpassword != confirmPassword) {
//             console.log('false');
//             AC.get('confirmPassword').setErrors( {doesMatchPassword: true} )
//         } else {
//             console.log('true');
//             return null
//         }
//     }
// }