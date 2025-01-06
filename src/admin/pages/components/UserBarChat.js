import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import axios from "axios";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const UserBarChart = () => {
  const [chartData, setChartData] = useState({});
  const [loading, setLoading] = useState(true);
  const [totalUsers, setTotalUsers] = useState(0); // To store total users

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/data");

        // Extract labels (user names) and counts
        const labels = response.data.map((user) => user.name);
        const data = response.data.map((user) => user.count);

        // Calculate total users
        const total = data.reduce((sum, count) => sum + count, 0);

        setChartData({
          labels: labels,
          datasets: [
            {
              label: "Users",
              data: data,
              backgroundColor: "rgba(75, 192, 192, 0.6)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
            },
          ],
        });
        setTotalUsers(total);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>User Distribution</h2>
      <Bar data={chartData} />
      <p>Total Users: {totalUsers}</p>
    </div>
  );
};

export default UserBarChart;
