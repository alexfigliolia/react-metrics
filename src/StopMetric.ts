import { useEffect, type FC } from "react";
import type { Metric } from "@figliolia/metrics";

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
 *     return <Spinner />
 *   }
 * 
 *   return (
 *     <MyComponentUI data={data} />
 *     <StopMetric metric={MyMetric} /> // Calls your Metric's stop() method on mount
 *   );
 * }
 * ```
 */
export const StopMetric: FC<{ metric: Metric }> = ({ metric }) => {
	useEffect(() => {
		metric.stop();
	}, [])
	return null;
}