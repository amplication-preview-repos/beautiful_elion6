import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MainServiceBase } from "./base/main.service.base";

@Injectable()
export class MainService extends MainServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
