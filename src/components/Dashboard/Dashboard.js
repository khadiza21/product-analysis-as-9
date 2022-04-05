import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./Dashboard.css";

const Dashboard = () => {
  const data = [
    {
      month: "Mar",
      investment: 100000,
      sell: 241,
      revenue: 10401,
    },
    {
      month: "Apr",
      investment: 200000,
      sell: 423,
      revenue: 24500,
    },
    {
      month: "May",
      investment: 500000,
      sell: 726,
      revenue: 67010,
    },
    {
      month: "Jun",
      investment: 500000,
      sell: 529,
      revenue: 40405,
    },
    {
      month: "Jul",
      investment: 600000,
      sell: 601,
      revenue: 50900,
    },
    {
      month: "Aug",
      investment: 700000,
      sell: 670,
      revenue: 61000,
    },
  ];

  return (
    <div className="container my-5">
      <div className="my-3 py-2 ">
        <h3 className="text-center mt-3 fw-bold py-3">MONTH WISE SELL</h3>
        <div
          className=" shadow rounded py-5"
          style={{ width: "100%", height: 300 }}
        >
          <ResponsiveContainer>
            <LineChart
              width={300}
              height={250}
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <XAxis dataKey="month" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend verticalAlign="top" height={36} />
              <Line
                name="sells of months"
                type="monotone"
                dataKey="sell"
                stroke="#8884d8"
              />
              {/* <Line name="uv of pages" type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="my-5  py-5 ">
        <h3 className="text-center mt-3 fw-bold py-3">Investment VS Revenue</h3>
        <div
          className="py-5 px-5 shadow rounded"
          style={{ width: "100%", height: 300 }}
        >
          <ResponsiveContainer>
            <AreaChart
              width={300}
              height={250}
              data={data}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="month" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="investment"
                stroke="#8884d8"
                fillOpacity={1}
                fill="url(#colorUv)"
              />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="#82ca9d"
                fillOpacity={1}
                fill="url(#colorPv)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="my-5 py-5 ">
        <h3 className="text-center fw-bold my-3 py-4">Investment VS Revenue</h3>
        <div
          className="px-5 py-5 shadow"
          style={{ width: "100%", height: 300 }}
        >
          <ResponsiveContainer>
            <BarChart width={300} height={250} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="investment" fill="#8884d8" />
              <Bar dataKey="revenue" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="my-5 py-5 ">
        <h3 className="text-center my-3 py-4 fw-bold">Investment VS Revenue</h3>
        <div
          className="shadow rounded"
          style={{ width: "100%", height: 400 }}
        >
          <ResponsiveContainer>
            <PieChart width={300} height={250}>
              <Pie
                data={data}
                dataKey="investment"
                nameKey="month"
                cx="50%"
                cy="50%"
                outerRadius={50}
                fill="#8884d8"
              />
              <Pie
                data={data}
                dataKey="revenue"
                nameKey="month"
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#82ca9d"
                label
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
