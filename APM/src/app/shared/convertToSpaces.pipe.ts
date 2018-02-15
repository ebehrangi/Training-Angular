import { PipeTransform } from '@angular/core/src/change_detection/pipe_transform';
import { Pipe } from '@angular/core';


@Pipe({
    name: 'convertToSpaces'
})
export class ConvertToSpacesPipe
implements PipeTransform {
    transform(value: string, char: string): string {
        return value.replace(char, ' ');
    }
}
