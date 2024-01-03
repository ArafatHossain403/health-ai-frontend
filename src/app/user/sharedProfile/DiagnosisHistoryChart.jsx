import moment from "moment";
import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  Rectangle,
  Tooltip,
  XAxis,
  YAxis,
  Label,
} from "recharts";

const DiagnosisHistoryChart = ({ histories, userData }) => {
  // Count occurrences of 0 and 1 in the 'outcome' field
  const outcomeCounts = histories.reduce((counts, history) => {
    const outcome = history.outcome.toString();
    counts[outcome] = (counts[outcome] || 0) + 1;
    return counts;
  }, {});

  const pieChartData = Object.keys(outcomeCounts).map((key) => ({
    name: key === "0" ? "Negative" : "Positive",
    count: outcomeCounts[key],
  }));

  function formateDate(date) {
    return moment(date).format("D MMM");
  }

  const COLORS = ["#4dc21f", "#d42e1c"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = (props) => {
    // console.log(props);

    const { cx, cy, midAngle, innerRadius, outerRadius, percent, index, name } =
      props;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const CustomLineTooltip = (props) => {
    // console.log(props);
    const { active, payload, label } = props;
    if (active && payload && payload.length) {
      // const formattedDateTime = moment(payload[0].created_at).format('llll');
      const formattedDateTime = moment(label).format("lll");
      return (
        <div className="box-border p-2 border-2 bg-white">
          <p>{formattedDateTime}</p>
          <p>
            <span style={{ color: payload[0].stroke }}>
              {payload[0].dataKey}: {payload[0].value}
            </span>
          </p>
          <p>
            <span style={{ color: payload[1].stroke }}>
              {payload[1].dataKey}: {payload[1].value}
            </span>
          </p>
          <p>
            <span style={{ color: payload[2].stroke }}>
              {payload[2].dataKey}: {payload[2].value}
            </span>
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      <h1 className="text-center font-bold text-lg my-5">History Chart</h1>
      <div className="flex">
        <LineChart
          id="line-chart"
          width={500}
          height={300}
          data={histories}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="created_at" tickFormatter={formateDate} too />
          <YAxis />
          <Tooltip content={<CustomLineTooltip />} />
          <Legend />
          <Line
            type="monotone"
            dataKey="glucose"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="mbp"
            stroke="#82ca9d"
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="bmi"
            stroke="#d4a013"
            activeDot={{ r: 8 }}
          />
        </LineChart>

        <PieChart id="pie-chart" width={300} height={300}>
          <Pie
            data={pieChartData}
            cx="50%"
            cy="40%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={100}
            fill="#3d55db"
            nameKey="name"
            dataKey="count"
          >
            {pieChartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
};

export default DiagnosisHistoryChart;
