import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.sevice';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private prismaService: PrismaService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: { nickname: string }) {
    const userExists = await this.prismaService.user.findUnique({
      where: { nickname: payload.nickname },
    });

    if (!userExists) {
      throw new NotFoundException('Usuário não existe ou não está autenticado');
    }

    delete userExists.password;

    return userExists;
  }
}