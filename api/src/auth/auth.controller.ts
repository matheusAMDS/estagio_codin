import { Body, Controller, HttpException, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dtos/LoginDto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('login')
  async login(@Body() body: LoginDto) {
    const result = await this.authService.login(body.name)

    if (!result) {
      throw new HttpException(
        'Incorrect credentials', HttpStatus.BAD_REQUEST
      )
    }

    return result
  }
}
