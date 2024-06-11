import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from 'src/app/models/character.interface';
import { ImagesService } from 'src/app/services/images.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-images-detail',
  templateUrl: './images-detail.component.html',
  styleUrls: ['./images-detail.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('500ms', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class ImagesDetailComponent implements OnInit {

  character!: Character;
  showAllDetails = false;

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

  toggleDetails(): void {
    this.showAllDetails = !this.showAllDetails;
  }

}
