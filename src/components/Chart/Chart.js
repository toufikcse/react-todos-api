import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import useTodos from '../../hooks/useTodos';

const Chart = () => {
    const todos = useTodos();
    return (
        <div>
            <h2>This is Chart</h2>
            <LineChart
                width={1300}
                height={500}
                data={todos}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="userId" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="id" stroke="#82ca9d" />
            </LineChart>
        </div>
    );
};

export default Chart;