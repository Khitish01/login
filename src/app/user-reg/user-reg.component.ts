import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder, Validators, FormArray, FormGroup } from '@angular/forms';
import {MatCalendarCellClassFunction} from '@angular/material/datepicker';

interface Course {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-user-reg',
  templateUrl: './user-reg.component.html',
  styleUrls: ['./user-reg.component.css'],
  // encapsulation: ViewEncapsulation.None,

})
export class UserRegComponent implements OnInit {


  user_reg: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3),Validators.pattern('[a-zA-Z][a-zA-Z ]+')]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required]],
    age: ['', [Validators.required, Validators.min(20), Validators.max(27)]],
    date: ['', [Validators.required]],
    course: ['', [Validators.required]],
    // check: ['', [Validators.required]],
    gender: ['',[Validators.required]],
    skills: this.fb.array([''])
  });

  selectedValue: string | undefined;

  courses: Course[] = [
    {value: 'BTECH', viewValue: 'BTECH'},
    {value: 'MCA', viewValue: 'MCA'},
    {value: 'BCA', viewValue: 'BCA'},
    {value: 'MTECH', viewValue: 'MTECH'},
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  get Skills(): FormArray {
    return this.user_reg.get('skills') as FormArray;
  }

userregdata= new FormGroup({
  name: new FormControl(''),
  email: new FormControl(''),
  phone: new FormControl(''),
  age: new FormControl(''),
  date: new FormControl(''),
  course: new FormControl(''),
  gender: new FormControl('')
});

  preview: string='';
  submitForm() {
    this.preview = JSON.stringify(this.userregdata.value);
  }

  checkBoxChanged(event: any) {

    if(event.currentTarget.checked == true) {
        this.user_reg.get('name')?.addValidators(Validators.required);
        this.user_reg.get('email')?.updateValueAndValidity();

    } else {
      this.user_reg.get('name')?.clearValidators();
      this.user_reg.get('email')?.updateValueAndValidity();
    }
     
  }

  addSkills() {
    this.Skills.push(new FormControl(''));
  }
  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    // Only highligh dates inside the month view.
    if (view === 'month') {
      const date = cellDate.getDate();

      // Highlight the 1st and 20th day of each month.
      return date === 1 || date === 20 ? 'example-custom-date-class' : '';
    }

    return '';
  };

}

