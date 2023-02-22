import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ) { }

  async login(name: string) {
    const user = await this.usersService.findByName(name)

    if (!user) return null

    const payload = {
      name: user.name,
      sub: user.id
    }

    return {
      accessToken: this.jwtService.sign(payload)
    }
  }
}
