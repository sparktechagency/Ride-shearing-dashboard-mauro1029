import { useTranslation } from "react-i18next";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

const data = [
  { name: "Recent-Used", value: 40 },
  { name: "Income", value: 40 },
  { name: "Total new User", value: 50 },
];
const COLORS = ["#00AFF5", "#E6E6F2", "#00AFF559"];

const Piechart = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full col-span-full md:col-span-2 bg-white rounded-lg  border  ">
      <div className="w-full bg-white shadow-lg rounded-lg p-6">
        <div className="text-lg font-semibold">{t("Recent-Used")}</div>
        <div className="text-xl font-bold">36k</div>

        <div className="text-lg font-semibold mt-4">{t("Income")}</div>
        <div className="text-xl font-bold">100k</div>

        <div className="text-lg font-semibold mt-4">{t("Total new User")}</div>
        <div className="text-xl font-bold">25%</div>

        <div className="flex   mt-4">
          <div className="w-full h-full">
            <ResponsiveContainer width={300} height={300}>
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#00AFF5"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Piechart;
