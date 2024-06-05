import { Component } from '@angular/core';
import { Personne } from '../interfaces/personne.model';
import { PersonneService } from '../services/personne.service';
import axios from 'axios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personnes',
  templateUrl: './personnes.component.html',
})
export class PersonnesComponent {
  baseUrl = 'http://localhost:8080/employee';
  personnes: Personne[] = [];
  constructor(
    private personneService: PersonneService,
        private router: Router,
  ) { }

    ngOnInit(): void {
      this.personneService.fetchData().then(() => {
      this.personnes = this.personneService.getPersons(); // Get data after it's fetched
      // console.log("Liste personnes : ", this.personnes);
    });
  }

  onDeletePerson(id: number, firstName:string, name:string) {
    let conf = confirm(`Etes-vous sûr de vouloir supprimer ${name}  ${firstName} ?`);

      if (conf)
    axios.delete(`${this.baseUrl}/${id}`)
      .then(() => {
        this.personnes = this.personnes.filter(personne => personne.id !== id);
        console.log("Personne supprimée avec succès!");
      })
      .catch(error => {
        console.error("Erreur lors de la suppression de la personne:", error);
      });
  }
}
