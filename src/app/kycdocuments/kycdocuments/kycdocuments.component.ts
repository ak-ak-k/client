import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kycdocuments',
  templateUrl: './kycdocuments.component.html',
  styleUrls: ['./kycdocuments.component.scss'],
})
export class KycdocumentsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  // async takePicture(type: string) {
  //   if (!this.disableForm) {
  //     const image = await Camera.getPhoto({
  //       quality: 100,
  //       height: 300,
  //       width: 300,
  //       allowEditing: false,
  //       source: CameraSource.Camera,
  //       resultType: CameraResultType.Uri,
  //     });
  //     console.log('image', image);
  //     const imageUrl = image.webPath || '';
  //     if (imageUrl) {
  //       this.startCropper(imageUrl, type);
  //       console.log('image', imageUrl);
  //     } else {
  //       console.log('No image');
  //     }
  //   }
  // }
  // async choosePhoto(type: string) {
  //   if (!this.disableForm) {
  //     const image = await Camera.pickImages({
  //       quality: 100,
  //       height: 300,
  //       width: 300,
  //       limit: 1,
  //     });
  //     const imageUrl = image.photos[0].webPath || '';
  //     if (imageUrl) {
  //       this.startCropper(imageUrl, type);
  //       console.log('image', imageUrl);
  //     } else {
  //       console.log('No image');
  //     }
  //   }
  // }
}
