import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // This makes Prisma available everywhere without having to import the module constantly
@Module({
  providers: [PrismaService],
  exports: [PrismaService], // Exposes the service to other modules
})
export class PrismaModule {}
