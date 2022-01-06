import "./chart.css"
import { LineChart, Line, XAxis,  CartesianGrid, Tooltip,  ResponsiveContainer } from 'recharts';

export default function Chart({title, data, dataKey, grid}) {

    return (
        <div className="chart">
            <h3 className="chartTitle">{title}</h3> 
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                    <LineChart
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                        >
                        {grid && <CartesianGrid stroke="#8884d8" strokeDasharray="3 3" />}
                        <XAxis dataKey={dataKey} />
                        <Tooltip />
                        <Line type="monotone" dataKey={dataKey} stroke="#8884d8" />
                    </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
