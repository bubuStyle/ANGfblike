import { Injectable } from '@angular/core';

// 1) Importer la class du Router :
import { Router } from '@angular/router';

@Injectable()
export class ConnexionService {

  constructor(
    // 2) Déclarer une class pour utiliser le routeur :
    private router: Router
  ) { }

  // Créer une fonction qui permet de vérifier les données du formulaire :
  userLogin(infos) {
    // Vérifier les infos saisies par l'utilisateur :
    if ( infos.login == 'arigna' && infos.password == '77' ) {
      // Naviguer vers la vue connected :
      this.router.navigateByUrl('/connected');
    } else {
      alert('Accès refusé...');
    }
  }

}