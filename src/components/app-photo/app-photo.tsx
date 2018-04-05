import { Component, State } from '@stencil/core';

@Component({
    tag: 'app-photo',
    styleUrl: 'app-photo.scss'
})
export class AppPhoto {
    
    @State() rootPath: string = './assets/pictures/';
    @State() fileExtension: string = '.png';

    @State() urls: string[];

    

    componentWillLoad() {
        this.urls = ['logo_white', 'logo_grey', 'heavy_image'];
    }

    render() {

        return (
        <ion-page class='show-page'>  
            <ion-content>
                <ion-slides>
                    {this.urls.map((url) => {
                        return <ion-slide>
                            <lazy-img src={this.rootPath + url + this.fileExtension}></lazy-img>
                        </ion-slide>
                        }
                    )}                    
                </ion-slides>
            </ion-content>
        </ion-page>
        );
    }
}