import { MainWhereInput } from "./MainWhereInput";
import { MainOrderByInput } from "./MainOrderByInput";

export type MainFindManyArgs = {
  where?: MainWhereInput;
  orderBy?: Array<MainOrderByInput>;
  skip?: number;
  take?: number;
};
