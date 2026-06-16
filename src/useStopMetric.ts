import { useEffect } from "react";
import type { Metric } from "@ui-perf/metrics";

/**
 * Use Metric Stop
 *
 * A React Hook that will call the `stop()` method on the
 * specified `Metric` as soon as it mounts
 *
 * ```tsx
 * import { Metric } from "@ui-perf/metrics";
 * import { useStopMetric } from "@ui-perf/react-metrics"
 *
 * const MyMetric = new Metric("My Metric");
 *
 * export const MyComponent: FC<{ data: string[] }> = ({ data }) => {
 *   // Stops the provided metric on mount
 *   useStopMetric(MyMetric);
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
export const useStopMetric = <T extends Metric<any, any>>(metric: T) => {
  useEffect(() => {
    metric.stop();
  }, [metric]);
};
