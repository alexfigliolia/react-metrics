import type { Metric } from "@figliolia/metrics";
import { useEffect } from "react";

/**
 * Use Metric Stop
 *
 * A React Hook that will call the `stop()` method on the
 * specified `Metric` as soon as it mounts
 *
 * ```tsx
 * import { Metric } from "@figliolia/metrics";
 * import { useMetricStop } from "@figliolia/react-metrics"
 *
 * const MyMetric = new Metric("My Metric");
 *
 * export const MyComponent: FC<{ data: string[] }> = ({ data }) => {
 *   // Stops the provided metric on mount
 *   useMetricStop(MyMetric);
 *
 *   return (
 *     <ol>
 *       {data.map(item => {
 *         return <li key={item}>{item}</li>
 *       })}
 *     </ol>
 *   );
 * }
 * ```
 */
export const useMetricStop = <T extends Metric<any, any>>(metric: T) => {
  useEffect(() => {
    metric.stop();
  }, []);
};
