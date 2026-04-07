import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const DashboardPage = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>RetireSmart</h1>
        <div style={styles.userInfo}>
          <span>Welcome, {user?.firstName} {user?.lastName}</span>
          <button onClick={handleLogout} style={styles.logoutBtn}>
            Logout
          </button>
        </div>
      </div>
      <div style={styles.content}>
        <h2>Dashboard</h2>
        <p>Your retirement planning dashboard is coming soon.</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#f5f5f5",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 32px",
    backgroundColor: "#1a1a2e",
    color: "white",
  },
  title: {
    margin: 0,
    fontSize: "24px",
  },
  userInfo: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  },
  logoutBtn: {
    padding: "8px 16px",
    cursor: "pointer",
    backgroundColor: "transparent",
    border: "1px solid white",
    color: "white",
    borderRadius: "4px",
  },
  content: {
    padding: "32px",
  },
};

export default DashboardPage;