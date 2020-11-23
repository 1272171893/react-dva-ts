import { History } from "history";

type DvaApp = {
  _models: any;
  _store: any;
  _plugin: any;
  use: (...args: any[]) => any;
  model: any;
  start: any;
};
export type IProps = {
  history: History;
  app: DvaApp | any;
};
