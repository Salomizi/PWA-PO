import { Component, Prop, Listen } from '@stencil/core';
import { ToastController } from '@ionic/core';

@Component({
  tag: 'my-app',
  styleUrl: 'my-app.scss'
})
export class MyApp {

  @Prop({ connect: 'ion-toast-controller' }) toastCtrl: ToastController;

  componentDidLoad() {
    /*
      Handle service worker updates correctly.
      This code will show a toast letting the
      user of the PWA know that there is a 
      new version available. When they click the
      reload button it then reloads the page 
      so that the new service worker can take over
      and serve the fresh content
    */
    window.addEventListener('swUpdate', () => {
      this.toastCtrl.create({
        message: 'New version available',
        showCloseButton: true,
        closeButtonText: 'Reload'
      }).then((toast) => {
        toast.present();
      });
    })
  }

  @Listen('body:ionToastWillDismiss')
  reload() {
    window.location.reload();
  }

  render() {
    return (
      <ion-app>
        <main>
          <app-title />
          <ion-router useHash={false}>
            <ion-route url='/' component='app-home'></ion-route>
            <ion-route url='/photo' component='app-photo'></ion-route>
            <ion-route url='/client' component='app-client'></ion-route>
            <ion-route url='/documents' component='app-documents'></ion-route>
          </ion-router>
          <ion-nav></ion-nav>
          <app-footer />
          {/* <app-title/>
        <stencil-router>
            <stencil-route url='/' component='app-home' exact={true}>
            </stencil-route>

            <stencil-route url='/photo' component='app-photo'>
            </stencil-route>
            
            <stencil-route url='/documents' component='app-documents'>
            </stencil-route>
            
            <stencil-route url='/client' component='app-client'>
            </stencil-route>
          </stencil-router>

          <app-footer/> */}
          {/* <ion-tabs class="tabs-icon-top tabs-positive tabs" id='plan2'>
            <ion-tab label="Accueil" icon='home' >
              <app-home />
            </ion-tab>
            <ion-tab label="Galerie" icon='images' >
              <app-photo />
            </ion-tab>
            <ion-tab label="Projets" icon='ribbon' >
              <app-client />
            </ion-tab>
            <ion-tab class='tab-document' label="Documents" icon='folder' >
              <app-documents />

            </ion-tab>
          </ion-tabs> */}
        </main>
      </ion-app>
    );
  }
}
