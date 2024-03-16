import { AbstractControl, FormControl } from "@angular/forms";


export  class customValidators{

 static validatenames(control:AbstractControl):{[key:string]:boolean}|null{

if(control.value!=null && control.value.indexOf(' ')!= -1)
{
    return { falsename:true}
}
return null

 }


}