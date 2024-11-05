import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // NestJS의 내장 CORS 설정 사용
  app.enableCors({
    origin: "http://localhost:3000",
    credentials: true,
  });

  await app.listen(4000);
}
bootstrap();
