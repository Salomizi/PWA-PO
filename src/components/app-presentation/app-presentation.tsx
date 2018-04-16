import { Component } from '@stencil/core';

@Component({
  tag: 'app-presentation',
  styleUrl: 'app-presentation.scss'
})
export class AppPresentation {

  componentWillLoad() {

  }

  render() {

    return (
      <div>

        <p>
          Bienvenue sur l'application (Progressive Web App) de La Mobile Factory by SopraSteria !
          </p>

      </div>

    );
  }
}