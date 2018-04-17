import { Component, State } from '@stencil/core';
import { Http, Response } from '@angular/http';

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
        <ion-page class='show-page'>
            <ion-content>
                <ion-slides>
                    {this.picturesUrls.map((url, index) => {
                        return <ion-slide>
                            <lazy-img src={this.rootPath + url + this.fileExtension}></lazy-img>
                            <a class="download-link" target="_self" href={this.rootPath + url + this.fileExtension} download={index}>
                              <img src="./assets/icon/ic_file_download_black.svg"/>
                            </a>
                        </ion-slide>
                    })}
                </ion-slides>
            </ion-content>
        </ion-page>
        );
    }
}
