import { useEffect } from "react";
import type { Metric } from "@figliolia/metrics";

/**
 * Use Start Metric
 *
 * A React Hook that will call the `start()` method on the
 * specified `Metric` as soon as it mounts
 *
 * ```tsx
 * import { Metric } from "@figliolia/metrics";
 * import { useStartMetric } from "@figliolia/react-metrics"
 *
 * const MyMetric = new Metric("My Metric");
 *
 * export const MyComponent = () => {
 *   const [data, setData] = useState(null);
 *
 * 	 useStartMetric(MyMetric);
 *
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
 *     return <Spinner />;
 *   }
 *
 *   return (
 *     <MyComponentUI data={data} />
 *     <StopMetric metric={MyMetric} />
 *   );
 * }
 * ```
 */
export const useStartMetric = <T extends Metric<any, any>>(metric: T) => {
  useEffect(() => {
    metric.start();
  }, [metric]);
};
