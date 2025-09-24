// src/pages/Dashboard.jsx

import React, { useEffect, useState } from 'react';

// Simple SVG Icons Component
const Icon = ({ name, color = '#94a3b8', size = 20 }) => {
  const icons = {
    users: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="m22 21-2-2"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    'user-check': (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="m22 21-2-2"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        <path d="m17 11 2 2 4-4"/>
      </svg>
    ),
    'user-plus': (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M19 8v6"/>
        <path d="M22 11h-6"/>
      </svg>
    ),
    'dollar-sign': (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
    chart: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="18" y1="20" x2="18" y2="10"/>
        <line x1="12" y1="20" x2="12" y2="4"/>
        <line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    ),
    pie: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21.21 15.89A10 10 0 1 1 8 2.83"/>
        <path d="M22 12A10 10 0 0 0 12 2v10z"/>
      </svg>
    )
  };
  
  return <span style={{ color }}>{icons[name] || icons.chart}</span>;
};

// Simple Chart Component
const SimpleChart = ({ data, type = 'bar' }) => {
  if (type === 'line') {
    return (
      <div className="simple-chart">
        <div className="chart-container">
          <svg width="100%" height="160" viewBox="0 0 300 160">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3"/>
                <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.1"/>
              </linearGradient>
            </defs>
            <polyline
              fill="url(#gradient)"
              stroke="#8B5CF6"
              strokeWidth="2"
              points={data.map((d, i) => `${i * 40 + 30},${140 - d * 3}`).join(' ')}
            />
            {data.map((d, i) => (
              <circle
                key={i}
                cx={i * 40 + 30}
                cy={140 - d * 3}
                r="3"
                fill="#8B5CF6"
              />
            ))}
          </svg>
        </div>
      </div>
    );
  }
  
  return (
    <div className="simple-chart">
      <div className="chart-container">
        <svg width="100%" height="160" viewBox="0 0 300 160">
          {data.map((d, i) => (
            <rect
              key={i}
              x={i * 60 + 20}
              y={140 - d * 3}
              width="40"
              height={d * 3}
              fill="#8B5CF6"
              rx="2"
            />
          ))}
        </svg>
      </div>
    </div>
  );
};

const summaryCards = [
  { label: 'Total User', value: '12,340', icon: 'users', color: '#8B5CF6' },
  { label: 'User Aktif', value: '1,082', icon: 'user-check', color: '#10B981' },
  { label: 'Pendaftaran Bulan Ini', value: '673', icon: 'user-plus', color: '#F59E0B' },
  { label: 'Total Pendapatan', value: 'Rp 128.5 jt', icon: 'dollar-sign', color: '#EF4444' },
];

const latestUsers = [
  { name: 'Aulia Ramadhan', email: 'aulia@example.com', joined: '2025-09-01' },
  { name: 'Siti Rahma', email: 'siti@example.com', joined: '2025-08-27' },
  { name: 'Dimas Wibowo', email: 'dimas@example.com', joined: '2025-08-26' },
  { name: 'Budi Santoso', email: 'budi@example.com', joined: '2025-08-25' },
];

// Dummy data for charts
const userGrowthData = [45, 52, 48, 61, 55, 67, 73, 69, 78, 82, 85, 91];
const salesData = [
  { category: 'Web Dev', value: 35, color: '#8B5CF6' },
  { category: 'Mobile Dev', value: 25, color: '#10B981' },
  { category: 'Data Science', value: 20, color: '#F59E0B' },
  { category: 'UI/UX', value: 15, color: '#EF4444' },
  { category: 'DevOps', value: 5, color: '#06B6D4' },
];

const Dashboard = ({ onLogout }) => {
  const getTabFromHash = () => {
    const hash = window.location.hash || '#admin';
    if (!hash.startsWith('#admin')) return 'overview';
    const parts = hash.split('/');
    const maybe = (parts[1] === '#admin' ? parts[2] : parts[1]) || '';
    switch (maybe) {
      case 'users': return 'users';
      case 'courses': return 'courses';
      case 'sales': return 'sales';
      case 'settings': return 'settings';
      default: return 'overview';
    }
  };

  const [activeTab, setActiveTab] = useState(getTabFromHash());
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const onHashChange = () => setActiveTab(getTabFromHash());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigate = (tab) => {
    const map = { overview: '#admin', users: '#admin/users', courses: '#admin/courses', sales: '#admin/sales', settings: '#admin/settings' };
    if (window.location.hash !== map[tab]) {
      window.location.hash = map[tab];
    } else {
      setActiveTab(tab);
    }
    setSidebarOpen(false);
  };

  const renderOverview = () => (
    <>
      <section className="admin-cards">
        {summaryCards.map((c) => (
          <div key={c.label} className="admin-card">
            <div className="admin-card-icon">
              <Icon name={c.icon} color={c.color} size={24} />
            </div>
            <div className="admin-card-content">
              <div className="admin-card-label">{c.label}</div>
              <div className="admin-card-value">{c.value}</div>
            </div>
          </div>
        ))}
      </section>
      <section className="admin-charts">
        <div className="chart-box">
          <div className="chart-header">
            <Icon name="chart" color="#8B5CF6" size={20} />
            <h3>Grafik User / Bulan</h3>
          </div>
          <SimpleChart data={userGrowthData} type="line" />
          <div className="chart-legend">
            <span>Pertumbuhan user dalam 12 bulan terakhir</span>
          </div>
        </div>
        <div className="chart-box">
          <div className="chart-header">
            <Icon name="pie" color="#8B5CF6" size={20} />
            <h3>Penjualan per Kategori</h3>
          </div>
          <div className="sales-chart">
            {salesData.map((item) => (
              <div key={item.category} className="sales-item">
                <div className="sales-bar">
                  <div
                    className="sales-fill"
                    style={{ width: `${item.value}%`, backgroundColor: item.color }}
                  />
                </div>
                <div className="sales-info">
                  <span className="sales-category">{item.category}</span>
                  <span className="sales-value">{item.value}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="admin-table">
        <h3>User Terbaru</h3>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Nama</th>
                <th>Email</th>
                <th>Tanggal Bergabung</th>
              </tr>
            </thead>
            <tbody>
              {latestUsers.map((u) => (
                <tr key={u.email}>
                  <td>{u.name}</td>
                  <td>{u.email}</td>
                  <td>{u.joined}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );

  const renderUsers = () => (
    <section className="admin-table">
      <h3>Daftar Users (Dummy)</h3>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Nama</th>
              <th>Email</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: 'Admin Satu', email: 'admin1@example.com', status: 'Aktif' },
              { name: 'Admin Dua', email: 'admin2@example.com', status: 'Nonaktif' },
              { name: 'User Tiga', email: 'user3@example.com', status: 'Aktif' },
            ].map((u) => (
              <tr key={u.email}>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );

  const renderCourses = () => (
    <section className="admin-table">
      <h3>Daftar Courses (Dummy)</h3>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Course</th>
              <th>Kategori</th>
              <th>Harga</th>
            </tr>
          </thead>
          <tbody>
            {[
              { title: 'React Dasar', cat: 'Web Dev', price: 'Rp 150.000' },
              { title: 'UI/UX Intro', cat: 'UI/UX', price: 'Rp 120.000' },
              { title: 'DevOps 101', cat: 'DevOps', price: 'Rp 200.000' },
            ].map((c) => (
              <tr key={c.title}>
                <td>{c.title}</td>
                <td>{c.cat}</td>
                <td>{c.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );

  const renderSales = () => (
    <section className="admin-charts" style={{ paddingTop: '1rem' }}>
      <div className="chart-box" style={{ gridColumn: '1 / -1' }}>
        <div className="chart-header">
          <Icon name="pie" color="#8B5CF6" size={20} />
          <h3>Ringkasan Sales (Dummy)</h3>
        </div>
        <div className="sales-chart">
          {salesData.map((item) => (
            <div key={item.category} className="sales-item">
              <div className="sales-bar">
                <div className="sales-fill" style={{ width: `${item.value}%`, backgroundColor: item.color }} />
              </div>
              <div className="sales-info">
                <span className="sales-category">{item.category}</span>
                <span className="sales-value">{item.value}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const renderSettings = () => (
    <section className="admin-table">
      <h3>Settings (Dummy)</h3>
      <div className="table-wrap" style={{ padding: '1rem' }}>
        <div style={{ display: 'grid', gap: '0.75rem', maxWidth: 480 }}>
          <label style={{ display: 'grid', gap: '0.25rem' }}>
            <span>Nama Website</span>
            <input placeholder="MaQCourse" />
          </label>
          <label style={{ display: 'grid', gap: '0.25rem' }}>
            <span>Email Support</span>
            <input placeholder="support@example.com" />
          </label>
          <div>
            <button className="btn">Simpan</button>
          </div>
        </div>
      </div>
    </section>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'users': return renderUsers();
      case 'courses': return renderCourses();
      case 'sales': return renderSales();
      case 'settings': return renderSettings();
      default: return renderOverview();
    }
  };

  return (
    <div className="admin-layout">
      <aside className={`admin-sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="admin-brand">MaQCourse Admin</div>
        <nav>
          <a href="#admin" className={activeTab === 'overview' ? 'active' : ''} onClick={(e) => { e.preventDefault(); navigate('overview'); }}>
            Overview
          </a>
          <a href="#admin/users" className={activeTab === 'users' ? 'active' : ''} onClick={(e) => { e.preventDefault(); navigate('users'); }}>
            Users
          </a>
          <a href="#admin/courses" className={activeTab === 'courses' ? 'active' : ''} onClick={(e) => { e.preventDefault(); navigate('courses'); }}>
            Courses
          </a>
          <a href="#admin/sales" className={activeTab === 'sales' ? 'active' : ''} onClick={(e) => { e.preventDefault(); navigate('sales'); }}>
            Sales
          </a>
          <a href="#admin/settings" className={activeTab === 'settings' ? 'active' : ''} onClick={(e) => { e.preventDefault(); navigate('settings'); }}>
            Settings
          </a>
        </nav>
      </aside>
      {/* Mobile backdrop */}
      {sidebarOpen && <div className="admin-backdrop" onClick={() => setSidebarOpen(false)} />}
      <div className="admin-main">
        <header className="admin-header">
          <div className="header-left">
            <button className="menu-btn" onClick={() => setSidebarOpen((s) => !s)} aria-label="Toggle menu">
              <span />
              <span />
              <span />
            </button>
            <div className="breadcrumbs">Dashboard / {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</div>
          </div>
          <div className="admin-actions">
            <button className="btn btn-outline small" onClick={onLogout}>Logout</button>
          </div>
        </header>
        {renderContent()}
      </div>
    </div>
  );
};

export default Dashboard;


