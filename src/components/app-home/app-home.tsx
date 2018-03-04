import { Component } from '@stencil/core';


@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss'
})
export class AppHome {

  render() {
    return (
      <ion-page class='show-page'>
        <ion-header md-height='56px'>
          <ion-toolbar class="toolbar" color='primary'>
            <ion-title>La Mobile Factory by SopraSteria</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-content>
          <p>
            Bienvenue sur l'application (Progressive Web App) de La Mobile Factory by SopraSteria !
          </p>
          <p>
            Retrouvez ici tout ce que vous devez savoir sur nous !
          </p>
          
          <stencil-route-link url='/photos'>
            <ion-button>
              Photos
            </ion-button>
          </stencil-route-link>
        </ion-content>
      </ion-page>
    );
  }
}
