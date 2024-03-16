import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { customValidators } from './custom.validator';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  constructor() {}

  myform!: FormGroup;

  ngOnInit(): void {
    this.myform = new FormGroup({
      firstName: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        customValidators.validatenames
      ]),
      lastName: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      userName: new FormControl(null, [Validators.required]),
      dob: new FormControl(null, [Validators.required]),
      gender: new FormControl('Male', [Validators.required]),
      address: new FormGroup({
        street: new FormControl(null, [
          Validators.required,
          Validators.minLength(3),
        ]),
        city: new FormControl(null, [
          Validators.required,
          Validators.minLength(3),
        ]),
        country: new FormControl('INDIA', [
          Validators.required,
          Validators.minLength(3),
        ]),
        postal: new FormControl(null, [Validators.required]),
        region: new FormControl(null, [Validators.required]),
      }),
      skills: new FormArray([new FormControl()]),
      experience:new FormArray([
       new FormGroup({
        company:new FormControl(null),
        role: new FormControl(null),
        total:new FormControl(null),
        startDate:new FormControl(null),
        endDate:new FormControl(null),
       })
      ])
    });


  }

  onsubmit() {
    console.log(this.myform);
    console.log(this.myform.value);
     
     this.myform.reset(
       {
        firstName:null,
        lastName:null,
        email:null,
        userName:'robinsranjan',
        dob:null,
        gender:'Male',
        address:{
          street:null,
          city:null,
          country:'INDIA',
          postal:null,
          region:null
        },
      skills:[null],
      experience:[
        {
          company:'prodapt',
          role:null,
          total:null,
          startDate:null,
          endDate:null,
        }
      ]
       }
     )
    
  }

  get skillscontrols() :FormArray{
    return this.myform.get('skills') as FormArray;
  }
  get experiencecontrols() :FormArray{
    return this.myform.get('experience') as FormArray;
  }

  addskills() {
    const newskill = new FormControl(null);

    this.skillscontrols.controls.push(newskill);
  }

  removeskills(i:number)
  {
    const totalskills=this.skillscontrols;
    if(totalskills.length>1)
    {
      this.skillscontrols.removeAt(i)
    }

  }

  addexperience()
  {
    const newformgroup = new FormGroup({
      
        company:new FormControl(null),
        role: new FormControl(null),
        total:new FormControl(null),
        startDate:new FormControl(null),
        endDate:new FormControl(null),
       
    })

    this.experiencecontrols.controls.push(newformgroup);

  }


  deletexperience(i:number)
  {
    this.experiencecontrols.removeAt(i)
  }
 
}
