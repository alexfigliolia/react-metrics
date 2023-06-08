import type { Metric } from "@figliolia/metrics";
import { useEffect } from "react";
import type { IMetricSubscription } from "types";

/**
 * Use Metric Subscription
 *
 * A React Hook that subscribes to the specified Metric's event and
 * executes a callback. When the hook unmounts, the subscription is
 * cleaned up.
 *
 * ```tsx
 * import { Metric } from "@figliolia/metrics";
 * import { useMetricSubscription } from "@figliolia/metrics";
 *
 * const MyMetric = new Metric("My Metric");
 *
 * const MyComponent = () => {
 *   const [duration, setDuration] = useState<number | null>(null);
 *
 *   useMetricSubscription({
 *     metric: MyMetric,
 *     event: "stop",
 *     callback: (metric) => {
 *       setDuration(metric.duration)
 *     }
 *   });
 *
 *   if(duration === null) {
 *     return <div>{MyMetric.name} is currently {MyMetric.status}</div>
 *   }
 *
 *   return <div>{MyMetric.name} is complete! The duration was {duration}</div>
 * }
 * ```
 */
export const useMetricSubscription = <T extends Metric<any, any>>({
  event,
  metric,
  callback,
}: IMetricSubscription<T>) => {
  useEffect(() => {
    const ID = metric.on(event, callback);
    return () => {
      metric.off(event, ID);
    };
  }, []);
};
