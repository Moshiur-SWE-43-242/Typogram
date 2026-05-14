import { PipeTransform, BadRequestException } from '@nestjs/common';
import { ZodError, ZodTypeAny } from 'zod';

export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodTypeAny) {}

  transform(value: unknown) {
    try {
      const parsedValue = this.schema.parse(value);
      return parsedValue;
    } catch (error: unknown) {
      if (error instanceof ZodError) {
        throw new BadRequestException({
          message: 'Validation failed',
          errors: error.issues,
        });
      }

      throw new BadRequestException({
        message: 'Validation failed',
      });
    }
  }
}
