/* eslint-disable react/prop-types */

import { useTranslation } from 'react-i18next';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';




const IncomeGraphChart = () => { 
  const { t } = useTranslation();

  const data = [
    {
      name: t("Page A"),
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: t("Page B"),
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: t("Page C"),
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: t("Page D"),
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: t("Page E"),
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: t("Page F"),
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: t("Page G"),
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <section className="w-full col-span-full md:col-span-4 bg-white  rounded-lg border ">
      <div className='mt-5 p-5' style={{ width: '100%' }}>
        <h4>{t("Income and Performance Analytics")}</h4>

        <ResponsiveContainer width="100%" height={400}>
          <AreaChart
            width={500}
            height={200}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="pv" stroke="#154047" fill="#00AFF5" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

    </section>
  );
};

export default IncomeGraphChart;

