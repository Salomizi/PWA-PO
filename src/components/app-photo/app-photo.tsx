import { Component, State } from '@stencil/core';

import { getPictures, getRootPath, getFilesExtension } from '../../helpers/filesHelper';

@Component({
    tag: 'app-photo',
    styleUrl: 'app-photo.scss'
})
export class AppPhoto {

    @State() element;

    @State() rootPath: string;
    @State() fileExtension: string;

    @State() picturesUrls: string[];

    componentWillLoad() {
        this.fileExtension = getFilesExtension();
        this.rootPath = getRootPath();
        this.picturesUrls = getPictures();
    }

    componentDidLoad() {
      console.log('The component has been rendered');
    }

    render() {

        return (
        
            <ion-content>
                <app-title/>
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
        
        );
    }
}
