import { Component } from '@stencil/core';

@Component({
  tag: 'app-facebookvideo',
  styleUrl: 'app-facebookvideo.scss'
})
export class AppFacebookVideo {


  render() {

    return (

          <iframe 
          src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fsoprasteria%2Fvideos%2F1758810114153796%2F"  frameborder="0" scrolling="no" width="100%" height="700px" ></iframe>

    );
  }
}