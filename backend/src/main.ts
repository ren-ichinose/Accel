import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import * as Sentry from '@sentry/node';
import * as cookieParser from 'cookie-parser';
import AppModule from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  Sentry.init({ dsn: process.env.SENTRY_DSN });
  app.enableCors({
    origin: [
      'http://localhost:3000',
      'https://ren-app.jp',
      'https://www.ren-app.jp',
    ],
    credentials: true,
  });
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  app.use(cookieParser());
  await app.listen(3005);
}
bootstrap();
