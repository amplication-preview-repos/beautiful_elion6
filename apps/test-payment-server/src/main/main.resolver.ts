import * as graphql from "@nestjs/graphql";
import { MainResolverBase } from "./base/main.resolver.base";
import { Main } from "./base/Main";
import { MainService } from "./main.service";

@graphql.Resolver(() => Main)
export class MainResolver extends MainResolverBase {
  constructor(protected readonly service: MainService) {
    super(service);
  }
}
