import {
  BarChart,
  XAxis,
  YAxis,
  Bar,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const BarChartPlot = () => {
  const data = [
    {
      name: "Jan",
      high: 4000,
      low: 2400,
    },
    {
      name: "Feb",
      high: 5000,
      low: 1500,
    },
    {
      name: "Mar",
      high: 6000,
      low: 3000,
    },
    {
      name: "Apr",
      high: 6500,
      low: 4500,
    },
    {
      name: "May",
      high: 7000,
      low: 2200,
    },
    {
      name: "Jun",
      high: 8000,
      low: 3500,
    },
    {
      name: "Jul",
      high: 7400,
      low: 5500,
    },
  ];
  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold pl-5 pt-2">Overview</h1>
          <h1 className="text-sm pl-5 pb-2 text-gray-500 ">Monthly Earning</h1>
        </div>
        <input
          type="text"
          style={{ width: "200px" }}
          className="bg-gray-100 text-gray-100 border-white px-4 py-2 rounded-md mr-2"
          placeholder="Quarterly"
        />
      </div>
      <ResponsiveContainer width="100%" height="80%">
        <BarChart width={730} height={250} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="high" fill="#82ca9d" />
          <Bar dataKey="low" fill="#FA8072" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default BarChartPlot;
