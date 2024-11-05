import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../core/services/pokemon.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-pokemon-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.css'
})
export class PokemonDetailsComponent implements OnInit{
  pokemon: any; 
  

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.getPokemonDetails(id);
    });
  }

  getPokemonDetails(id: string): void {
    this.pokemonService.getPokemonById(id).subscribe(
      (data) => {
        this.pokemon = data;
      }
    );
  }
}
