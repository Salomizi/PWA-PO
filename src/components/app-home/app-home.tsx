import { Component } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss'
})
export class AppHome {


  render() {
    return (
      
        <ion-content class="has-header">
        <app-title />
          <app-presentation />
         
          <app-facebookvideo/>
        </ion-content>
      

    );
  }
}
