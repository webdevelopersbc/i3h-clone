import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
//console.log('process.env.JWT_SECRET', process.env.JWT_SECRET);
@Module({
  imports: [
    PassportModule,
    UsersModule,
    JwtModule.register({
      secret: '7MEPF8KadeE7ymn5snBFjda9TF3x',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
