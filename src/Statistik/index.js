import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import "./master.css"

const data = [
  {
    name: 'Page A',
    Kartoshka: 4000,
    Piyoz: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    Kartoshka: 3000,
    Piyoz: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    Kartoshka: 2000,
    Piyoz: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    Kartoshka: 2780,
    Piyoz: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    Kartoshka: 1890,
    Piyoz: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    Kartoshka: 2390,
    Piyoz: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    Kartoshka: 3490,
    Piyoz: 4300,
    amt: 2100,
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
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
          <Line type="monotone" dataKey="Piyoz" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="Kartoshka" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
