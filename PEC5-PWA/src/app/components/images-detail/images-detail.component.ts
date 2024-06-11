import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from 'src/app/models/character.interface';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-images-detail',
  templateUrl: './images-detail.component.html',
  styleUrls: ['./images-detail.component.css']
})
export class ImagesDetailComponent implements OnInit {

  character!: Character;

  constructor (
    private imagesService: ImagesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
      const identifier = this.activatedRoute.snapshot.paramMap.get('id');
      console.log('Identifier:', identifier);

      if (identifier) {
        this.imagesService.getCharacterById(identifier).subscribe((character) => {
          if (!character) {
            this.router.navigateByUrl('/');
          } else {
            this.character = character;
            console.log('Character:', this.character);
          }
        });
      } else {
        console.error('Identifier is null');
        this.router.navigateByUrl('/');
      }
  }

}
