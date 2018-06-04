import { Component } from '@stencil/core';

import { getRootPath } from '../../helpers/filesHelper';
@Component({
  tag: 'app-presentation',
  styleUrl: 'app-presentation.scss'
})
export class AppPresentation {


  private rootPath: string;
  componentWillLoad() {

    this.rootPath = getRootPath();
  }

  render() {

    return (
      <div>
        <img src={this.rootPath + 'PUBG.jpg'} />
        <p>
          Bienvenue sur l'application (Progressive Web App) de La Mobile Factory by SopraSteria !
          </p>

      </div>

    );
  }
}