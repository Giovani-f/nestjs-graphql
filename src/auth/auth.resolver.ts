import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LoginUserInput } from './dto/login.input';
import { LoginReponse } from './dto/login.output';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from './guards/gql-auth.guard';
import { User } from 'src/users/entities/user.entity';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => LoginReponse)
  @UseGuards(GqlAuthGuard)
  login(
    @Args('loginUserInput') loginUserInput: LoginUserInput,
    @Context() context,
  ) {
    return this.authService.login(context.user);
  }

  @Mutation(() => User)
  singup(@Args('loginUserInput') loginUserInput: LoginUserInput) {
    return this.authService.singup(loginUserInput);
  }
}
