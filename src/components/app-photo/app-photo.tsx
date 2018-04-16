import { Component, State } from '@stencil/core';

@Component({
    tag: 'app-photo',
    styleUrl: 'app-photo.scss'
})
export class AppPhoto {

    @State() rootPath: string = './assets/pictures/';
    @State() fileExtension: string = '.png';

    @State() picturesUrls: string[];

    componentWillLoad() {
        this.picturesUrls = ['logo_white', 'logo_grey', 'heavy_image'];
    }

    render() {

        return (
            <ion-page class='show-page has-header'>
                <app-title />
                <ion-content class='has-header' has-header='true'>
                    <ion-slides>
                        {this.picturesUrls.map((url, index) => {
                            return <ion-slide>
                                <lazy-img src={this.rootPath + url + this.fileExtension}></lazy-img>
                                <button>
                                    <a target="_self" href={this.rootPath + url + this.fileExtension} download={index}>DOWNLOAD IMAGE</a>
                                </button>
                            </ion-slide>
                        }
                        )}
                    </ion-slides>
                </ion-content>
            </ion-page>
        );
    }
}
