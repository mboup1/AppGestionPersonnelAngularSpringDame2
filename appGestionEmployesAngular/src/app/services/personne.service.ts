import { Injectable } from '@angular/core';
import { Personne } from '../interfaces/personne.model';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {
  personnes: Personne[] = [
      {
      id:1,
      firstName: "Abdou",
      name: 'MBOUP',
      email: 'abdou@gmail.com',
    },
  ];

  constructor() { }

  async fetchData(): Promise<void> {
    const jsonUrl = 'http://localhost:8080/api/employees';

    try {
      const response = await axios.get(jsonUrl);
      this.personnes = response.data.map((personne: { id: number; firstName: string; name: string; email: string; }) => ({
        id: personne.id,
        firstName: personne.firstName,
        name: personne.name,
        email: personne.email,
      }));
    } catch (error) {
      console.error('Erreur lors de la récupération des données JSON :', error);
    }
  }

  getPersons(): Personne[] {
    return this.personnes;
  }
}


  // fetchData(): void {
  //   const jsonUrl = 'http://localhost:8080/api/employees';

  //   axios.get(jsonUrl)
  //     .then(response => {
  //       this.personnes = response.data.map((personne: { id: number; firstName: string; name: string; email: string; }) => ({
  //         id: personne.id,
  //         prenom: personne.firstName,
  //         nom: personne.name,
  //         email: personne.email,
  //       }));
  //       // console.log("Fetched data:", this.personnes);
  //     })
  //     .catch(error => {
  //       console.error('Erreur lors de la récupération des données JSON :', error);
  //     });
  // }
  //A modifier
  // createPerson(personne: Personne): Personne[] {
  //   this.personnes.push(personne);
  //   return this.personnes;
  // }

  // editPerson(personne: Personne, index: number): Personne[] {
  //   this.personnes[index] = personne;
  //   return this.personnes;
  // }

  //A modifier
  // deletePerson(personIndex: number): Personne[] {
  //   this.personnes.splice(personIndex, 1);
  //   return this.personnes;
  // }
