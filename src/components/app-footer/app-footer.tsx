import { Component } from '@stencil/core';

@Component({
    tag: 'app-footer',
    styleUrl: 'app-footer.scss'
})
export class AppFooter {



    componentWillLoad() {
    }

    render() {

        return (
            <ion-footer>

                <ion-button href='/'>
                    A
                    </ion-button>

                <ion-button href='/photo'>
                    B
                    </ion-button>

                <ion-button href='/client'>
                    B
                    </ion-button>

                <ion-button href='/documents'>
                    B
                    </ion-button>

            </ion-footer>

        );
    }
}