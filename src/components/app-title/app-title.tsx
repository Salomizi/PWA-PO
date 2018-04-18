import { Component, State } from '@stencil/core';

@Component({
    tag: 'app-title',
    styleUrl: 'app-title.scss'
})
export class AppTitle {

    @State() rootPath: string = './assets/pictures/';
    @State() rootIconPath: string = './assets/icon/';
    @State() fileExtension: string = '.png';

    @State() mfPictureUrl: string;
    @State() mailPictureUrl: string;


    componentWillLoad() {
        this.mfPictureUrl = this.rootPath + "logo_trans" + this.fileExtension;
        this.mailPictureUrl = this.rootIconPath + "email.svg";
    }

    render() {

        return (
            
        <ion-header class="bar-header bar-stable" md-height='56px'>
            <ion-toolbar class="toolbar" color='primary' >
                    <img class="imgToolBar" src={this.mfPictureUrl}> </img>
                    <ion-title >La Mobile Factory</ion-title>
                    <ion-button  href="mailto:guillaume.rodriguez@soprasteria.com">
                    <img  src={this.mailPictureUrl}> </img>
          </ion-button>
            </ion-toolbar>
            </ion-header>
        );
    }
}