import { Component, State } from '@stencil/core';

import { getProjectsRootPath, getFilesExtension, getProjets } from '../../helpers/filesHelper';
import { Projet } from '../../model/projet';

@Component({
    tag: 'app-client',
    styleUrl: 'app-client.scss'
})
export class AppClient {

    @State() element;

    @State() rootPath: string;
    @State() fileExtension: string;

    @State() projets: Projet[];

    @State() pictures: string[];

    // @State() parentSwiper: any;

    componentWillLoad() {
        this.fileExtension = getFilesExtension();
        this.rootPath = getProjectsRootPath();
        this.projets = getProjets();


        // this.parentSwiper = document.getElementById('parentSlider');

        // if (this.parentSwiper != null) {
        //     console.log('parentSwiper has been found');
        // }
    }

    componentDidLoad() {
        console.log('The component has been rendered');
    }

    // swiperSlideChanged(event: UIEvent) {
    //     if (event) return;
    //     let currentIndex = this.parentSwiper.getActiveIndex();
    //     console.log('swipersSlideChanged hit');
    //     if (!this.parentSwiper.isEnd()) {
    //         console.log('slideto' + (currentIndex + 1));
    //         this.parentSwiper.slideTo(currentIndex + 1);
    //     }


    // }

    render() {

        return (
            <ion-page>
                <ion-content>
                    <app-title />
                    <ion-slides pager id='parentSlider'>
                        {this.projets.map((projet) => {
                            return <ion-slide class='swiper-slide'>
                                <div class='verticalDiv'>

                                    <div class='flexDiv'>
                                        <img class='logo' src={this.rootPath + projet.directory_name + 'logo' + this.fileExtension} />
                                        <div class='textDiv'>{projet.description}</div>
                                    </div>
                                    <ion-slides pager>
                                        {projet.screenshots.map((picture) => {
                                            return <ion-slide>
                                                <lazy-img src={this.rootPath + projet.directory_name + picture + this.fileExtension} />
                                            </ion-slide>
                                        })}
                                    </ion-slides>
                                </div>
                            </ion-slide>
                        })}
                    </ion-slides>
                </ion-content>
            </ion-page>
        );
    }
}
