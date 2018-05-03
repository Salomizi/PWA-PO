import { Component, State } from '@stencil/core';

import { getRootPath, getFilesExtension, getScreenShots, getPictures } from '../../helpers/filesHelper';
import { Projet } from '../../model/projet';

@Component({
    tag: 'app-client',
    styleUrl: 'app-client.scss'
})
export class AppClient {

    @State() element;

    @State() rootPath: string;
    @State() fileExtension: string;

    @State() picturesUrls: Projet[];

    @State() pictures: string[];

    @State() parentSwiper: any;

    componentWillLoad() {
        this.fileExtension = getFilesExtension();
        this.rootPath = getRootPath();
        this.picturesUrls = getScreenShots();

        this.pictures = getPictures();
        this.parentSwiper = document.getElementById('parentSlider');

        if (this.parentSwiper != null) {
            console.log('parentSwiper has been found');
        }
    }

    componentDidLoad() {
        console.log('The component has been rendered');
    }

    swiperSlideChanged(event: UIEvent) {
        if (event) return;
        let currentIndex = this.parentSwiper.getActiveIndex();
        console.log('swipersSlideChanged hit');
        if (!this.parentSwiper.isEnd()) {
            console.log('slideto' + (currentIndex + 1));
            this.parentSwiper.slideTo(currentIndex + 1);
        }


    }

    render() {

        return (

            <ion-content>
                <app-title />
                <ion-slides id='parentSlider'>
                    {this.picturesUrls.map((projet) => {
                        return <ion-slide>
                            <div class='verticalDiv'>

                                <div>
                                    <img class='logo' src={this.rootPath + projet.client_logo_name + this.fileExtension} />
                                    <div class='textDiv'>{projet.description}</div>
                                </div>
                                <ion-slides>
                                    {this.pictures.map((picture) => {
                                        return <ion-slide>
                                            <lazy-img src={this.rootPath + picture + this.fileExtension} />
                                        </ion-slide>
                                    })}
                                </ion-slides>



                            </div>
                        </ion-slide>
                    })}
                </ion-slides>
            </ion-content>

        );
    }
}
