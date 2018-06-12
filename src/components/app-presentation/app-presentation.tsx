import { Component } from '@stencil/core';

@Component({
  tag: 'app-presentation',
  styleUrl: 'app-presentation.scss'
})
export class AppPresentation {

  render() {

    return (
      <div class='margined-div'>
        <h2>
          Bienvenue sur l'application de La Mobile Factory by SopraSteria !
          </h2>
        <h5>
          La Mobile Factory, centralisée à Nantes, Toulouse et Noïda, regroupe des experts en technologies mobiles capables de réaliser des projets sur les deux principales plateformes.
          Sa capacité à suivre un projet de bout en bout et d'avoir un avis d'expert sur le sujet permet de traiter au mieux les demandes clients.
        </h5>
        <h6>
          Cette application est une Progressive Web App réalisée en Stencil.
          </h6>

      </div>

    );
  }
}