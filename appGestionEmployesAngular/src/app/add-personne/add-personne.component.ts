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
  baseUrl = 'http://localhost:8080/api/employee';
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
  }

  initPersonForm(): void {
    this.personForm = this.formBuilder.group({

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

    })
    .catch(error => {
      console.error("Create failed:", error);
    });
  }
}


