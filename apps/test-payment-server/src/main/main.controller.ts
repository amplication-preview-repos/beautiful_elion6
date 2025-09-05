import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MainService } from "./main.service";
import { MainControllerBase } from "./base/main.controller.base";

@swagger.ApiTags("mains")
@common.Controller("mains")
export class MainController extends MainControllerBase {
  constructor(protected readonly service: MainService) {
    super(service);
  }
}
