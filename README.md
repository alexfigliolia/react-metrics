# React Metrics

React bindings for [@ui-perf/metrics](https://www.npmjs.com/package/@ui-perf/metrics)!

This library has since been moved to `@ui-perf/react-metrics`.

This library is designed to make integrating Metric events with React rendering simple and effective. Often times, starting or stopping a Metric or interaction begins or ends with a Component reaching the browser and rendering to the screen. For this purpose, in this package you'll find utilities such as `<MetricStart />`, `<MetricStop />`, `<MetricSubscription />`, as well as their React hook equivalents!

## Installation

```bash
npm i -S @ui-perf/react-metrics
# or
yarn add @ui-perf/react-metrics
# or
pnpm add @ui-perf/react-metrics
```

## Getting Started

### StartMetric & StopMetric

```tsx
import { Metric } from "@ui-perf/metrics";
import { StartMetric, StopMetric } from "@ui-perf/react-metrics"

const MyMetric = new Metric("My Metric");

export const MyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/data").then(async data => {
      setData(await data.json());
    });
    return () => {
      MyMetric.reset();
    }
  }, []);

  if(!data) {
    return (
      <Fragment>
        <StartMetric metric={MyMetric}> // Calls your Metric's start() method on mount
        <Spinner />
      </Fragment>
    );
  }

  return (
    <Fragment>
      <InteractiveUI data={data} />
      <StopMetric metric={MyMetric} /> // Calls your Metric's stop() method on mount
    </Fragment>
  );
}
```

### useStartMetric & useStopMetric

Swapping your `<StartMetric />` for `useStartMetric()`:

```tsx
import { Metric } from "@ui-perf/metrics";
import { useStartMetric } from "@ui-perf/react-metrics";

const MyMetric = new Metric("My Metric");

export const MyComponent = () => {
  const [data, setData] = useState(null);
	// Start Metric on mount!
  useStartMetric(MyMetric);
  useEffect(() => {
    fetch("/data").then(async data => {
      setData(await data.json());
    });
    return () => {
      MyMetric.reset();
    }
  }, []);

  if(!data) {
    return <Spinner />;
  }

  return (
    <InteractiveUI data={data} />
    // Stop Metric when the UI is fully interactive!
    <StopMetric metric={MyMetric} />
  );
}
```

Swapping your `<StopMetric />` for `useStopMetric()`:

```tsx
import { Metric } from "@ui-perf/metrics";
import { useStopMetric } from "@ui-perf/react-metrics";

const MyMetric = new Metric("My Metric");

export const MyComponent: FC<{ data: string[] }> = ({ data }) => {
  // Stops the provided metric on mount!
  useStopMetric(MyMetric);
  return (
    <ol>
      {data.map(item => {
        return <li key={item}>{item}</li>;
      })}
    </ol>
  );
};
```

### MetricSubscription & useMetricSubscription

Metrics provide pub-sub functionality useful for executing behaviors based upon the completion, success, failure, or duration of a given Metric. The `<MetricSubscription>` and `useMetricSubscription()` utilities allow developers to declare Metric subscriptions right from their React code - and have their subscriptions bound automatically to the Component's lifecycle:

```tsx
import type { Metric } from "@ui-perf/metrics";
import { MetricSubscription } from "@ui-perf/metrics";

const DurationDisplay: FC<{ metric: Metric<any, any> }> = ({ metric }) => {
  const [duration, setDuration] = useState<number | null>(null);

  return (
    <Fragment>
      <MetricSubscription
        event="stop"
        metric={metric}
        callback={metric => {
          setDuration(metric.duration);
        }}
      />
      {duration === null ? (
        <div>
          {metric.name} is currently {metric.status}
        </div>
      ) : (
        <div>
          {metric.name} is complete! The duration was {duration} milliseconds
        </div>
      )}
    </Fragment>
  );
};
```

Similarly, the same functionality can be achieved using the `useMetricSubscription()` hook:

```tsx
import type { Metric } from "@ui-perf/metrics";
import { useMetricSubscription } from "@ui-perf/metrics";

const DurationDisplay: FC<{ metric: Metric<any, any> }> = ({ metric }) => {
  const [duration, setDuration] = useState<number | null>(null);

  useMetricSubscription({
    metric,
    event: "stop",
    callback: metric => {
      setDuration(metric.duration);
    },
  });

  if (duration === null) {
    return (
      <div>
        {metric.name} is currently {metric.status}
      </div>
    );
  }

  return (
    <div>
      {metric.name} is complete! The duration was {duration} milliseconds
    </div>
  );
};
```

### Demo Application

To find some recipes in an example application, please reference our [Demo App](https://github.com/alexfigliolia/metrics-demo)
