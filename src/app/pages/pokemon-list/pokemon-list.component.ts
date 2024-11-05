import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { PokemonItemComponent } from '../../components/pokemon-item/pokemon-item.component';
import { ErrorMessageComponent } from '../../components/error-message/error-message.component';
import { PokemonService } from '../../core/services/pokemon.service';
import { EMPTY, Observable, catchError } from 'rxjs';
import { PokemonResults } from '../../interfaces/pokemon';
import { CommonModule } from '@angular/common';
import { UpperCasePipe } from '@angular/common';
import { ReplaceVowelsPipe } from '../../pipe/replace-vowels.pipe';


@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [AsyncPipe, PokemonItemComponent, ErrorMessageComponent, UpperCasePipe, ReplaceVowelsPipe, CommonModule],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent implements OnInit {
  public pokemonResults$!: Observable<PokemonResults>;
  public errorMessage!: string;
  constructor(private service: PokemonService) { }

  ngOnInit(): void {
    this.pokemonResults$ = this.service.getPokemonList().pipe(catchError((error: string) => {
      this.errorMessage = error;
      return EMPTY;
    }))
  }
  trackByName(index: number, item: any): string {
    return item.name;
  }
}
