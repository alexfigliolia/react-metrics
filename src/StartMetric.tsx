import type { Metric } from "@ui-perf/metrics";

import { useStartMetric } from "./useStartMetric";

/**
 * Start Metric
 *
 * A React Component that will call the `start()` method on the
 * specified `Metric` as soon as it mounts
 *
 * ```tsx
 * import { Metric } from "@ui-perf/metrics";
 * import { StartMetric, StopMetric } from "@ui-perf/react-metrics"
 *
 * const MyMetric = new Metric("My Metric");
 *
 * export const MyComponent = () => {
 *   const [data, setData] = useState(null);
 *   useEffect(() => {
 *     fetch("/data").then(async data => {
 *       setData(await data.json());
 *     });
 *     return () => {
 *       MyMetric.reset();
 *     }
 *   }, []);
 *
 *   if(!data) {
 *     return (
 *       <StartMetric metric={MyMetric}> // Calls your Metric's start() method on mount
 *       <Spinner />
 *     );
 *   }
 *
 *   return (
 *     <MyComponentUI data={data} />
 *     <StopMetric metric={MyMetric} /> // Calls your Metric's stop() method on first contentful render
 *   );
 * }
 * ```
 */
export const StartMetric = <T extends Metric<any, any>>({
  metric,
}: {
  metric: T;
}) => {
  useStartMetric(metric);
  return null;
};
