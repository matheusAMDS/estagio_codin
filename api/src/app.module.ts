import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ProcessModule } from './process/process.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    ProcessModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {
}
