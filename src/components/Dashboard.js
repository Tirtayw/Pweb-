// Dashboard.js
import React from 'react';

const Dashboard = ({ user }) => {
  return (
    <div>
      <h2>Welcome to Your Dashboard, {user.username}!</h2>
      <p>Email: {user.email}</p>
      {/* Tambahkan informasi pengguna lainnya sesuai kebutuhan */}
    </div>
  );
};

export default Dashboard;
