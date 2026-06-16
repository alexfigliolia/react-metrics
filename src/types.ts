import type { Metric } from "@ui-perf/metrics";

export interface IMetricSubscription<
  T extends Metric<any, any> = Metric<any, any>,
> {
  metric: T;
  event: keyof T["events"];
  callback: (metric: T) => void;
}
