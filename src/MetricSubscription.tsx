import type { Metric } from "@ui-perf/metrics";

import { useMetricSubscription } from "./useMetricSubscription";
import type { IMetricSubscription } from "./types";

/**
 * Metric Subscription
 *
 * A React Component that subscribes to the specified Metric's event
 * and executes a callback. When the hook unmounts, the subscription
 * is cleaned up.
 *
 * ```tsx
 * import { Metric } from "@ui-perf/metrics";
 * import { MetricSubscription } from "@ui-perf/metrics";
 *
 * const MyMetric = new Metric("My Metric");
 *
 * const DurationDisplay = () => {
 *   const [duration, setDuration] = useState<number | null>(null);
 *
 *   return (
 *     <Fragment>
 *       <MetricSubscription
 *         event="stop"
 *         metric={MyMetric}
 *         callback={metric => {
 *           setDuration(metric.duration);
 *         }} />
 *       {
 *         duration === null ?
 *          <div>{MyMetric.name} is currently {MyMetric.status}</div>
 *         :
 *          <div>{MyMetric.name} is complete! The duration was {duration}</div>
 *       }
 *     </Fragment>
 *   );
 * }
 * ```
 */
export const MetricSubscription = <T extends Metric<any, any>>(
  configuration: IMetricSubscription<T>,
) => {
  useMetricSubscription(configuration);
  return null;
};
