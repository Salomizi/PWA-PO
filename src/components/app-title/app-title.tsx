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

            <ion-header class="bar-header bar-stable headerToolbar " >
                <ion-toolbar class="toolbar" color='primary' >
                    <img class="imgToolBar" src={this.mfPictureUrl}> </img>
                    <ion-title >La Mobile Factory</ion-title>
                    <app-contact />
                </ion-toolbar>
            </ion-header>
        );
    }
}