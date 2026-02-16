import { Module } from "@nestjs/common";
import { MainModuleBase } from "./base/main.module.base";
import { MainService } from "./main.service";
import { MainController } from "./main.controller";
import { MainResolver } from "./main.resolver";

@Module({
  imports: [MainModuleBase],
  controllers: [MainController],
  providers: [MainService, MainResolver],
  exports: [MainService],
})
export class MainModule {}
