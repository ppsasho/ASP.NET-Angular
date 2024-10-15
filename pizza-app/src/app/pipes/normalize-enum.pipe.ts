import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'normalizeEnum',
  standalone: true
})
export class NormalizeEnumPipe implements PipeTransform {

  transform(value: string | string[] ): string {
    return "null";
  }

}
