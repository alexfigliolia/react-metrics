import type { Metric } from "@figliolia/metrics";
import { useStopMetric } from "./useStopMetric";

/**
 * Stop Metric
 *
 * A React Component that will call the `stop()` method on the
 * specified `Metric` as soon as it mounts
 *
 * ```tsx
 * import { Metric } from "@figliolia/metrics";
 * import { StopMetric } from "@figliolia/react-metrics"
 *
 * const MyMetric = new Metric("My Metric");
 *
 * export const MyComponent = () => {
 *   const [data, setData] = useState(null);
 *   useEffect(() => {
 *     MyMetric.start();
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
 *       <StartMetric metric={MyMetric}>
 *       <Spinner />
 *     );
 *   }
 *
 *   return (
 *     <MyComponentUI data={data} />
 *     <StopMetric metric={MyMetric} /> // Calls your Metric's stop() method on mount
 *   );
 * }
 * ```
 */
export const StopMetric = <T extends Metric<any, any>>({
  metric,
}: {
  metric: T;
}) => {
  useStopMetric(metric);
  return null;
};
