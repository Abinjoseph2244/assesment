import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const PieChartPlot = () => {
    const data = [
      {
        name: "Twitter",
        value: 200400,
      },
      {
        name: "Facebook",
        value: 205000,
      },
      {
        name: "Instagram",
        value: 23400,
      },
      {
        name: "Snapchat",
        value: 20000,
      },
      {
        name: "LinkedIn",
        value: 29078,
      },
      {
        name: "YouTube",
        value: 18900,
      },
    ];
    const colors = [
        "#8884d8",
        "#FA8072",
        "#AF69EE",
        "#3DED97",
        "#3AC7EB",
        "#F9A603",
      ];
      return (
        <>
        <div>
          <h1 className="text-xl font-bold pl-5 pt-2">Customers</h1>
          <h1 className="text-sm pl-5 pb-2 text-gray-500 ">Customers that buy products</h1>
        </div>
          <ResponsiveContainer width="80%" height="80%">
            <PieChart width={600} height={200}>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                fill="#8884d8"
                label
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </>
      );
  }
  export default PieChartPlot; 