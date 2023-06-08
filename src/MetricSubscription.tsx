import type { Metric } from "@figliolia/metrics";
import type { IMetricSubscription } from "./types";
import { useMetricSubscription } from "./useMetricSubscription";

/**
 * Metric Subscription
 *
 * A React Component that subscribes to the specified Metric's event
 * and executes a callback. When the hook unmounts, the subscription
 * is cleaned up.
 *
 * ```tsx
 * import { Metric } from "@figliolia/metrics";
 * import { MetricSubscription } from "@figliolia/metrics";
 *
 * const MyMetric = new Metric("My Metric");
 *
 * const MyComponent = () => {
 *   const [duration, setDuration] = useState<number | null>(null);
 *
 *   return (
 *     <Fragment>
 *       <MetricSubscription
 *         event="stop"
 *         metric={MyMetric}
 *         callback={metric => {
 *           setDuration(metric.duration)
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
  configuration: IMetricSubscription<T>
) => {
  useMetricSubscription(configuration);
  return null;
};
