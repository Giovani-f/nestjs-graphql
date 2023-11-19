import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { LoginUserInput } from './dto/login.input';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userService.findOne(username);
    if (user && user.password === pass) {
      return user;
    }
    return null;
  }

  async login(user: User) {
    return {
      access_token: this.jwtService.sign({
        username: user.username,
        sub: user.id,
      }),
      user,
    };
  }

  async singup(loginUserInput: LoginUserInput) {
    const user = await this.userService.findOne(loginUserInput.username);

    if (user) {
      throw new Error('User already exists');
    }

    const hashPassword = await bcrypt.hash(loginUserInput.password, 10);

    return this.userService.create({
      ...loginUserInput,
      password: hashPassword,
    });
  }
}
