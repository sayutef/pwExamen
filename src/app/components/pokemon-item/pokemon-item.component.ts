import { Component, Input } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon';
import { UpperCasePipe } from '@angular/common';
import { ReplaceVowelsPipe } from '../../pipe/replace-vowels.pipe';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-item',
  standalone: true,
  imports: [UpperCasePipe, ReplaceVowelsPipe, RouterModule, CommonModule],
  templateUrl: './pokemon-item.component.html',
  styleUrl: './pokemon-item.component.css'
})
export class PokemonItemComponent {
  @Input() pokemonInfo!: Pokemon;
  
  isFavorite: boolean = false;

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
  }

  getIdFromUrl(url: string): string {
    const parts = url.split('/');
    return parts[parts.length - 2];
  }

  
}
