import {
  Bar,
  BarChart,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';

import './style.css';

const COMPLETED_COLOR = '#008787';
const PENDING_COLOR = '#f0a202';

function Dashboard({ tasks }) {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.isCompleted).length;
  const pendingTasks = totalTasks - completedTasks;
  const completionRate = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

  const stateData = [
    { name: 'Completed', value: completedTasks, color: COMPLETED_COLOR },
    { name: 'Pending', value: pendingTasks, color: PENDING_COLOR }
  ];

  return (
    <section className="dashboard">
      <div className="dashboardCards">
        <div className="dashboardCard">
          <span className="dashboardCardLabel">Total tasks</span>
          <span className="dashboardCardValue">{totalTasks}</span>
        </div>
        <div className="dashboardCard">
          <span className="dashboardCardLabel">Completed</span>
          <span className="dashboardCardValue completedValue">{completedTasks}</span>
        </div>
        <div className="dashboardCard">
          <span className="dashboardCardLabel">Pending</span>
          <span className="dashboardCardValue pendingValue">{pendingTasks}</span>
        </div>
        <div className="dashboardCard">
          <span className="dashboardCardLabel">Completion rate</span>
          <span className="dashboardCardValue">{completionRate}%</span>
        </div>
      </div>

      {totalTasks === 0 ? (
        <p className="dashboardEmpty">No tasks available</p>
      ) : (
        <div className="dashboardCharts">
          <div className="dashboardChart">
            <h3 className="dashboardChartTitle">Tasks by state</h3>
            <ResponsiveContainer width="100%" height={280}>
              <PieChart>
                <Pie
                  data={stateData}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={2}
                >
                  {stateData.map(entry => (
                    <Cell key={entry.name} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="dashboardChart">
            <h3 className="dashboardChartTitle">Number of tasks per state</h3>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={stateData}>
                <XAxis dataKey="name" />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Bar dataKey="value" name="Tasks" radius={[6, 6, 0, 0]}>
                  {stateData.map(entry => (
                    <Cell key={entry.name} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </section>
  );
}

export default Dashboard;
