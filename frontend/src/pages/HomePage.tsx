import React from "react";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();

  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];

  const scheduleData = [
    ["9:00-12:00", "Brian", "Brian", "Brian", "Brian", "Brian", "Brian"],
    ["13:00-16:00 (A)", "Brian", "Brian", "Brian", "Brian", "Brian", "Brian"],
    ["13:00-16:00 (B)", "Brian", "Brian", "Brian", "Brian", "Brian", "Brian"],
    ["18:00-21:00", "Brian", "Brian", "Brian", "Brian", "Brian", "Brian"],
  ];

  return (
    <div>
      <div>Home Page</div>
      <p>
        歡迎來到 Virtual MakerSpace 的首頁
        這裡有東西囉
        <br />
        應該要有:簡略公告、常用連結、管理員班表
      </p>
      <div>
        <b>Announcement</b>
        <br />
        <button onClick={() => navigate("/AnnouncementPage")}>View all</button>
        <br />
        <b>常用連結</b>
        <br />
        <button>Edit</button>
        <br />
        <div>
          <div style={{ textAlign: "center" }}>
            <b>Opening Hours</b>
          </div>
          <table>
            <thead>
              <tr>
                <th>Time</th>
                {daysOfWeek.map((day) => (
                  <th key={day}>{day}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {scheduleData.map((shifts, index) => (
                <tr key={index}>
                  {shifts.map((shift, shiftIndex) => (
                    <td key={shiftIndex}>{shift}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
