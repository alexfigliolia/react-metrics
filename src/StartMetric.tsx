import type { Metric } from "@figliolia/metrics";
import { useStartMetric } from "./useStartMetric";

/**
 * Start Metric
 *
 * A React Component that will call the `start()` method on the
 * specified `Metric` as soon as it mounts
 *
 * ```tsx
 * import { Metric } from "@figliolia/metrics";
 * import { StartMetric, StopMetric } from "@figliolia/react-metrics"
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
 *     <StopMetric metric={MyMetric} />
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
