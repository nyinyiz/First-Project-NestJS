import {
    ArgumentMetadata,
    Injectable,
    PipeTransform,
    UnprocessableEntityException,
  } from '@nestjs/common';
  
  @Injectable()
  export class CommaPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata) {
      /* remove comma from input */
      var output = value.replaceAll(',', '');
      /* If input is Not a Number, raise 422 error  */
      if (isNaN(output)) {
        throw new UnprocessableEntityException(
          ['Non numeric input'],
          'Incorrect Parameter',
        );
      }
      return output;
    }
  }