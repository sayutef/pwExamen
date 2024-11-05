import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceVowels',
  standalone: true
})
export class ReplaceVowelsPipe implements PipeTransform {

  transform(value: string): string {
    return value.toUpperCase();
  }
}
