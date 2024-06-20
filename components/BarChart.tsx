import { format, parse } from "date-fns";
import { FC } from "react";
import {
  Bar,
  BarChart as BarChartRechart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    timestamp: "2022-11-03",
    bundles: 2,
  },
  {
    timestamp: "2022-11-04",
    bundles: 3,
  },
  {
    timestamp: "2022-11-06",
    bundles: 1,
  },
  {
    timestamp: "2022-11-07",
    bundles: 28,
  },
  {
    timestamp: "2022-11-08",
    bundles: 40,
  },
  {
    timestamp: "2022-11-09",
    bundles: 42,
  },
  {
    timestamp: "2022-11-10",
    bundles: 32,
  },
  {
    timestamp: "2022-11-11",
    bundles: 35,
  },
  {
    timestamp: "2022-11-12",
    bundles: 19,
  },
  {
    timestamp: "2022-11-13",
    bundles: 29,
  },
  {
    timestamp: "2022-11-14",
    bundles: 30,
  },
  {
    timestamp: "2022-11-15",
    bundles: 96,
  },
  {
    timestamp: "2022-11-16",
    bundles: 23,
  },
  {
    timestamp: "2022-11-17",
    bundles: 374,
  },
  {
    timestamp: "2022-11-18",
    bundles: 188,
  },
  {
    timestamp: "2022-11-19",
    bundles: 296,
  },
  {
    timestamp: "2022-11-20",
    bundles: 671,
  },
  {
    timestamp: "2022-11-21",
    bundles: 1029,
  },
  {
    timestamp: "2022-11-22",
    bundles: 1036,
  },
  {
    timestamp: "2022-11-23",
    bundles: 2968,
  },
  {
    timestamp: "2022-11-24",
    bundles: 7050,
  },
  {
    timestamp: "2022-11-25",
    bundles: 1214,
  },
  {
    timestamp: "2022-11-26",
    bundles: 2489,
  },
  {
    timestamp: "2022-11-27",
    bundles: 2603,
  },
  {
    timestamp: "2022-11-28",
    bundles: 16588,
  },
  {
    timestamp: "2022-11-29",
    bundles: 4820,
  },
  {
    timestamp: "2022-11-30",
    bundles: 2668,
  },
  {
    timestamp: "2022-12-01",
    bundles: 15474,
  },
  {
    timestamp: "2022-12-02",
    bundles: 5113,
  },
  {
    timestamp: "2022-12-03",
    bundles: 1463,
  },
  {
    timestamp: "2022-12-04",
    bundles: 3399,
  },
  {
    timestamp: "2022-12-05",
    bundles: 5397,
  },
  {
    timestamp: "2022-12-06",
    bundles: 7089,
  },
  {
    timestamp: "2022-12-07",
    bundles: 3029,
  },
  {
    timestamp: "2022-12-08",
    bundles: 2520,
  },
  {
    timestamp: "2022-12-09",
    bundles: 5322,
  },
  {
    timestamp: "2022-12-10",
    bundles: 4386,
  },
  {
    timestamp: "2022-12-11",
    bundles: 1713,
  },
  {
    timestamp: "2022-12-12",
    bundles: 3276,
  },
  {
    timestamp: "2022-12-13",
    bundles: 3380,
  },
  {
    timestamp: "2022-12-14",
    bundles: 5781,
  },
  {
    timestamp: "2022-12-15",
    bundles: 2916,
  },
  {
    timestamp: "2022-12-16",
    bundles: 3285,
  },
  {
    timestamp: "2022-12-17",
    bundles: 1132,
  },
  {
    timestamp: "2022-12-18",
    bundles: 1276,
  },
  {
    timestamp: "2022-12-19",
    bundles: 3162,
  },
  {
    timestamp: "2022-12-20",
    bundles: 2658,
  },
  {
    timestamp: "2022-12-21",
    bundles: 3117,
  },
  {
    timestamp: "2022-12-22",
    bundles: 1813,
  },
  {
    timestamp: "2022-12-23",
    bundles: 1330,
  },
  {
    timestamp: "2022-12-24",
    bundles: 1803,
  },
  {
    timestamp: "2022-12-25",
    bundles: 1806,
  },
  {
    timestamp: "2022-12-26",
    bundles: 4085,
  },
  {
    timestamp: "2022-12-27",
    bundles: 5753,
  },
  {
    timestamp: "2022-12-28",
    bundles: 4493,
  },
  {
    timestamp: "2022-12-29",
    bundles: 4532,
  },
  {
    timestamp: "2022-12-30",
    bundles: 3522,
  },
  {
    timestamp: "2022-12-31",
    bundles: 2700,
  },
  {
    timestamp: "2023-01-01",
    bundles: 3353,
  },
  {
    timestamp: "2023-01-02",
    bundles: 5770,
  },
  {
    timestamp: "2023-01-03",
    bundles: 4954,
  },
  {
    timestamp: "2023-01-04",
    bundles: 2842,
  },
  {
    timestamp: "2023-01-05",
    bundles: 5863,
  },
  {
    timestamp: "2023-01-06",
    bundles: 11166,
  },
  {
    timestamp: "2023-01-07",
    bundles: 2930,
  },
  {
    timestamp: "2023-01-08",
    bundles: 3031,
  },
  {
    timestamp: "2023-01-09",
    bundles: 8196,
  },
  {
    timestamp: "2023-01-10",
    bundles: 4123,
  },
  {
    timestamp: "2023-01-11",
    bundles: 3268,
  },
  {
    timestamp: "2023-01-12",
    bundles: 9105,
  },
  {
    timestamp: "2023-01-13",
    bundles: 11655,
  },
];

interface Props {
  data?: any[];
  xAxisKey: string;
  yAxisKey: string;
  yAxisLabel?: string;
  yAxisLabelOffset?: number;
  yAxisLabelPosition?: string;
  tooltipFormater?: (value: string) => string | string[];
}

const BarChart: FC<Props> = ({
  data,
  xAxisKey,
  yAxisKey,
  yAxisLabel,
  yAxisLabelOffset,
  yAxisLabelPosition,
  tooltipFormater,
}) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChartRechart
        width={500}
        height={300}
        data={data}
        margin={{
          left: 20,
        }}
      >
        <XAxis
          tickLine={false}
          axisLine={false}
          dataKey={xAxisKey}
          interval="preserveStart"
          tickMargin={16}
          height={50}
          minTickGap={100}
          tickFormatter={(tick) => {
            return format(
              parse(tick as string, "yyyy-MM-dd", new Date()),
              "MMM yy"
            );
          }}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          label={
            yAxisLabel && {
              value: yAxisLabel,
              angle: -90,
              position: yAxisLabelPosition,
              offset: yAxisLabelOffset,
            }
          }
        />
        <Tooltip
          wrapperStyle={{ outline: "none" }}
          content={({ payload, label, ...props }) => {
            if (payload && payload.length) {
              return (
                <div className="bg-[#333639] px-2 py-2 min-w-[150px]">
                  <p className="font-semibold">
                    {format(
                      parse(label as string, "yyyy-MM-dd", new Date()),
                      "MMM dd yyyy"
                    )}
                  </p>
                  {/* <p>{payload && payload[0].value} Auctions</p> */}
                  <p>
                    {tooltipFormater
                      ? tooltipFormater(payload[0].value as string)
                      : payload[0].value}
                  </p>
                </div>
              );
            }
          }}
        />
        <Bar isAnimationActive={false} dataKey={yAxisKey} fill="#6398FF" />
      </BarChartRechart>
    </ResponsiveContainer>
  );
};

export default BarChart;
