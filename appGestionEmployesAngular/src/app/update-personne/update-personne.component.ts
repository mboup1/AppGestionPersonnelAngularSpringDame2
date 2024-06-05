import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Personne } from '../interfaces/personne.model';
import { PersonneService } from '../services/personne.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-update-personne',
  templateUrl: './update-personne.component.html',
})
export class UpdatePersonneComponent {
  baseUrl = 'http://localhost:8080/employee';
  personForm!: FormGroup;
  personnes: Personne[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private personneService: PersonneService,
    private router: Router,
    private route: ActivatedRoute

  ) { }

  ngOnInit(): void {
    this.initPersonForm(),
    this.route.queryParams.subscribe(params => {
      this.personForm.patchValue({
        index: params['index'],
        id: params['id'],
        firstName: params['firstName'],
        name: params['name'],
        email: params['email']
      });
    });
  }

  initPersonForm(): void {
    this.personForm = this.formBuilder.group({
      index: [0],
      id:1,
      firstName: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

updatePersonne(id: number, personne: any) {
  axios.put(`${this.baseUrl}/${id}`, personne)
    .then(response => {
      console.log("Update successful:", response);
          this.router.navigate(['/employees'])

      // Handle success, e.g., navigate to a different route
    })
    .catch(error => {
      console.error("Update failed:", error);
      // Handle error, e.g., display an error message
    });
}

}


  // onSubmitUpdatePerson(): void {
  //   const personIndex = this.personForm.value.index;
  //   let person = this.personForm.value;
  //   this.personnes[personIndex] = person;
  //   this.personnes = this.personneService.editPerson(person, personIndex);
  //   this.personForm.reset()
  //   this.router.navigate(['/employees'])
  // }

