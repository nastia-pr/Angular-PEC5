import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Image } from 'src/app/models/image.interface';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-images-detail',
  templateUrl: './images-detail.component.html',
  styleUrls: ['./images-detail.component.css']
})
export class ImagesDetailComponent implements OnInit {

  image!: Image;

  constructor (
    private imagesService: ImagesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
      const identifier = this.activatedRoute.snapshot.paramMap.get('id');
      console.log('Identifier:', identifier);

      if (identifier) {
        this.imagesService.getImageById(identifier).subscribe((image) => {
          if (!image) {
            this.router.navigateByUrl('/');
          } else {
            this.image = image;
            console.log('Image:', this.image);
          }
        });
      } else {
        console.error('Identifier is null');
        this.router.navigateByUrl('/');
      }
  }

}
