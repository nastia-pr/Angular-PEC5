import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character.interface';
import { ImagesService } from 'src/app/services/images.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-images-list',
  templateUrl: './images-list.component.html',
  styleUrls: ['./images-list.component.css']
})

export class ImagesListComponent implements OnInit {

  characters: Character[] = [];
  dataSource = new MatTableDataSource<Character>(this.characters);
  isLoadingCharacters = true;
  viewMode: 'cards' | 'table' = 'cards';
  displayedColumns: string[] = ['id', 'name', 'image'];

  constructor(private imagesService: ImagesService) {}

  ngOnInit(): void {
    this.loadCharacters();
  }

  loadCharacters(): void {
    this.isLoadingCharacters = true; // Iniciar el spinner

    setTimeout(() => {
    this.imagesService
    .getAllCharacters().subscribe(data => {
      this.characters = data.results;
      this.isLoadingCharacters = false; // Detener el spinner
      });
   }, 1000);
  }

  setViewMode(mode: 'cards' | 'table'): void {
    this.viewMode = mode;
  }

}
