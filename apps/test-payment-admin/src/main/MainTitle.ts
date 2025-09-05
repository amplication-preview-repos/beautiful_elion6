import { Main as TMain } from "../api/main/Main";

export const MAIN_TITLE_FIELD = "id";

export const MainTitle = (record: TMain): string => {
  return record.id?.toString() || String(record.id);
};
