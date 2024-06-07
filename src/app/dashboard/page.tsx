"use client";
import { getUser } from "@/api/app-api";
export const Dashboard = () => {
  return <div>
    <button
      onClick={async () => {
        try {
          const response = await getUser();
          console.log(response);
        } catch (error) {
          console.log(error);
        }
      }}>Get Data</button>
  </div>
}

export default Dashboard;
