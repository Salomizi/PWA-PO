import { Component, State } from '@stencil/core';

@Component({
    tag: 'app-title',
    styleUrl: 'app-title.scss'
})
export class AppTitle {

    @State() rootPath: string = './assets/pictures/';
    @State() fileExtension: string = '.png';

    @State() pictureUrl: string;


    componentWillLoad() {
        this.pictureUrl = this.rootPath + "logo_trans" + this.fileExtension;
    }

    render() {

        return (
            
        <ion-header class="bar-header bar-stable" md-height='56px'>
            <ion-toolbar class="toolbar" color='primary'>
                    <img class="imgToolBar" src={this.pictureUrl}> </img>
                    <ion-title  >La Mobile Factory</ion-title>
            </ion-toolbar>
            </ion-header>
        );
    }
}