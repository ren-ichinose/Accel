import { ForbiddenException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { User } from 'src/auth/interfaces/auth.interface';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { UserWithoutTimestamps } from './interfaces/user.interface';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async createUser({ loginId, password }: User): Promise<void> {
    try {
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(password, salt);

      const data = { loginId, password: hashedPassword };
      await this.prisma.user.create({ data });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Email already exists');
        }
      }
      throw new Error('Something went wrong');
    }
  }

  async getByloginId(loginId: string): Promise<UserWithoutTimestamps> {
    const getedUser = await this.prisma.user.findUnique({
      where: { loginId },
    });
    if (!getedUser) return null;
    const { createdAt, updatedAt, ...rest } = getedUser;
    return rest;
  }
}
