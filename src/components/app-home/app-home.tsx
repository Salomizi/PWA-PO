import { Component } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss'
})
export class AppHome {


  render() {
    return (
      <ion-page class='show-page'>
        <app-title />
        <ion-content >
          <app-presentation />
         
          <app-facebookvideo/>
        </ion-content>
      </ion-page>

    );
  }
}
