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



    swiperH: Swiper;
    swiperV: Swiper;

    componentWillLoad() {
        this.fileExtension = getFilesExtension();
        this.rootPath = getProjectsRootPath();
        this.projets = getProjets();

        this.swiperH = new Swiper('.swiper-container-h', {
            spaceBetween: 50,
            pagination: {
                el: '.swiper-pagination-h',
                clickable: true,
            },
        });
        this.swiperV = new Swiper('.swiper-container-v', {
            direction: 'horizontal',
            spaceBetween: 50,
            pagination: {
                el: '.swiper-pagination-v',
                clickable: true,
            },
            nested:true
        });
    }

    componentDidLoad() {
        console.log('The component has been rendered');
    }



    render() {

        return (
            <ion-page>
                <ion-content>
                    <app-title />
                    {/* <ion-slides pager id='parentSlider'>
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
                    </ion-slides> */}

                    <div class="swiper-container swiper-container-h">
                        <div class="swiper-wrapper">
                            {this.projets.map((projet) => {
                                return <div class="swiper-slide">
                                    <div class='verticalDiv'>
                                        <div class='flexDiv'>
                                            <img class='logo' src={this.rootPath + projet.directory_name + 'logo' + this.fileExtension} />
                                            <div class='textDiv'>{projet.description}</div>
                                        </div>
                                        <div class="swiper-container swiper-container-v">
                                            <div class="swiper-wrapper">
                                                {projet.screenshots.map((picture) => {
                                                    return <div class="swiper-slide">
                                                        <lazy-img src={this.rootPath + projet.directory_name + picture + this.fileExtension} />
                                                    </div>
                                                })}
                                            </div>
                                            <div class="swiper-pagination swiper-pagination-v"></div>
                                        </div>
                                    </div>
                                </div>
                            })}
                        </div>
                        <div class="swiper-pagination swiper-pagination-h"></div>
                    </div>
                </ion-content>
            </ion-page>
        );
    }
}
