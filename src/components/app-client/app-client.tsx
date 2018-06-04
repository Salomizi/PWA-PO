import { getFilesExtension, getProjectsRootPath, getProjets } from '../../helpers/filesHelper';

import { Component } from '@stencil/core';
import { Projet } from '../../model/projet';
import Swiper from 'swiper';

@Component({
    tag: 'app-client',
    styleUrl: 'app-client.scss'
})
export class AppClient {

    protected element;
    protected rootPath: string;
    protected fileExtension: string;

    protected projets: Projet[];

    protected pictures: string[];

    protected horizontalSwiper: Swiper;
    protected verticalSwiper: Swiper;

    componentWillLoad() {
        this.fileExtension = getFilesExtension();
        this.rootPath = getProjectsRootPath();
        this.projets = getProjets();
    }

    componentDidLoad() {
        this.horizontalSwiper = new Swiper('.swiper-container-h', {
            spaceBetween: 50,
            pagination: {
                el: '.swiper-pagination-h',
                clickable: true,
            },
        });
        this.verticalSwiper = new Swiper('.swiper-container-v', {
            spaceBetween: 50,
            pagination: {
                el: '.swiper-pagination-v',
                clickable: true,
            },
            direction: 'horizontal',
            nested: true
        });

    }



    render() {

        return (
            <ion-page>
                <ion-content>
                    <app-title />

                    <div class="swiper-container swiper-container-h">
                        <div class="swiper-wrapper">
                            <div class={"swiper-slide " + this.projets[0].directory_name}>
                                <img class='logo' src={this.rootPath + this.projets[0].directory_name + '/logo' + this.fileExtension} />
                                <div class='verticalDiv'>
                                    <div class='flexDiv'>
                                        <h6 class='textDiv'>{this.projets[0].description}</h6>
                                    </div>
                                </div>
                                <div class="swiper-container swiper-container-v">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide">
                                            <lazy-img src={this.rootPath + this.projets[0].directory_name + '/' + this.projets[0].screenshots[0] + '.jpg'} />
                                        </div>
                                        <div class="swiper-slide">
                                            <lazy-img src={this.rootPath + this.projets[0].directory_name + '/' + this.projets[0].screenshots[1] + '.jpg'} />
                                        </div>
                                        <div class="swiper-slide">
                                            <lazy-img src={this.rootPath + this.projets[0].directory_name + '/' + this.projets[0].screenshots[2] + '.jpg'} />
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class={"swiper-slide " + this.projets[1].directory_name}>
                                <img class='logo' src={this.rootPath + this.projets[1].directory_name + '/logo' + this.fileExtension} />
                                <div class='verticalDiv'>
                                    <div class='flexDiv'>
                                        <h6 class='textDiv'>{this.projets[1].description}</h6>
                                    </div>
                                </div>
                                <div class="swiper-container swiper-container-v">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide">
                                            <lazy-img src={this.rootPath + this.projets[1].directory_name + '/' + this.projets[1].screenshots[0] + this.fileExtension} />
                                        </div>
                                        <div class="swiper-slide">
                                            <lazy-img src={this.rootPath + this.projets[1].directory_name + '/' + this.projets[1].screenshots[1] + this.fileExtension} />
                                        </div>
                                        <div class="swiper-slide">
                                            <lazy-img src={this.rootPath + this.projets[1].directory_name + '/' + this.projets[1].screenshots[2] + this.fileExtension} />
                                        </div>
                                        <div class="swiper-slide">
                                            <lazy-img src={this.rootPath + this.projets[1].directory_name + '/' + this.projets[1].screenshots[3] + this.fileExtension} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class={"swiper-slide " + this.projets[2].directory_name}>
                                <img class='logo' src={this.rootPath + this.projets[2].directory_name + '/logo' + this.fileExtension} />
                                <div class='verticalDiv'>
                                    <div class='flexDiv'>
                                        <h6 class='textDiv'>{this.projets[2].description}</h6>
                                    </div>
                                </div>
                                <div class="swiper-container swiper-container-v">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide">
                                            <lazy-img src={this.rootPath + this.projets[2].directory_name + '/' + this.projets[2].screenshots[0] + this.fileExtension} />
                                        </div>
                                        <div class="swiper-slide">
                                            <lazy-img src={this.rootPath + this.projets[2].directory_name + '/' + this.projets[2].screenshots[1] + this.fileExtension} />
                                        </div>
                                        <div class="swiper-slide">
                                            <lazy-img src={this.rootPath + this.projets[2].directory_name + '/' + this.projets[2].screenshots[2] + this.fileExtension} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class={"swiper-slide " + this.projets[3].directory_name}>
                                <img class='logo' src={this.rootPath + this.projets[3].directory_name + '/logo' + this.fileExtension} />
                                <div class='verticalDiv'>
                                    <div class='flexDiv'>
                                        <h6 class='textDiv'>{this.projets[3].description}</h6>
                                    </div>
                                </div>
                                <div class="swiper-container swiper-container-v">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide">
                                            <lazy-img src={this.rootPath + this.projets[3].directory_name + '/' + this.projets[3].screenshots[0] + this.fileExtension} />
                                        </div>
                                        <div class="swiper-slide">
                                            <lazy-img src={this.rootPath + this.projets[3].directory_name + '/' + this.projets[3].screenshots[1] + this.fileExtension} />
                                        </div>
                                        <div class="swiper-slide">
                                            <lazy-img src={this.rootPath + this.projets[3].directory_name + '/' + this.projets[3].screenshots[2] + this.fileExtension} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class={"swiper-slide " + this.projets[4].directory_name}>
                                <img class='logo' src={this.rootPath + this.projets[4].directory_name + '/logo.svg'} />
                                <div class='verticalDiv'>
                                    <div class='flexDiv'>
                                        <h6 class='textDiv'>{this.projets[4].description}</h6>
                                    </div>
                                </div>
                                <div class="swiper-container swiper-container-v">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide">
                                            <lazy-img src={this.rootPath + this.projets[4].directory_name + '/' + this.projets[4].screenshots[0] + '.jpg'} />
                                        </div>
                                        <div class="swiper-slide">
                                            <lazy-img src={this.rootPath + this.projets[4].directory_name + '/' + this.projets[4].screenshots[1] + '.jpg'} />
                                        </div>
                                        <div class="swiper-slide">
                                            <lazy-img src={this.rootPath + this.projets[4].directory_name + '/' + this.projets[4].screenshots[2] + '.jpg'} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-pagination swiper-pagination-h"></div>
                    </div>
                </ion-content>
            </ion-page>
        );
    }
}
