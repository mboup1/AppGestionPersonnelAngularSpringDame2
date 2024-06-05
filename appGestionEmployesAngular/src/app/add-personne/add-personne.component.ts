import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Personne } from '../interfaces/personne.model';
import { PersonneService } from '../services/personne.service';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-add-personne',
  templateUrl: './add-personne.component.html',
})
export class AddPersonneComponent {
  baseUrl = 'http://localhost:8080/employee/id';
  personForm!: FormGroup;
  personnes: Personne[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private personneService: PersonneService,
      private router: Router
  ) { }

  ngOnInit(): void {
    this.initPersonForm(),
      this.personnes = this.personneService.getPersons();
      // console.log(this.personForm.value)
  }

  initPersonForm(): void {
    this.personForm = this.formBuilder.group({
      // index: [0],
      // id:1,
      firstName: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  createPersonne(personne: any) {
    axios.post(this.baseUrl, personne)
    .then(response => {
      console.log("Create successful:", response);
      this.router.navigate(['/employees'])

      // Handle success, e.g., navigate to a different route
    })
    .catch(error => {
      console.error("Create failed:", error);
      // Handle error, e.g., display an error message
    });
  }
}


  // onSubmitPerson(): void {
  //   const personIndex = this.personForm.value.index;
  //   let person = this.personForm.value;
  //   this.personnes = this.personneService.createPerson(person);
  //   this.personForm.reset()
  //   this.router.navigate(['/employees'])
  // }


