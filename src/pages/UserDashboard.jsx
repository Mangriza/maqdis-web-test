// src/pages/UserDashboard.jsx

import React, { useMemo, useState } from 'react';
import { Link, NavLink, Outlet, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const MyCourses = () => {
  const [courses] = useState([
    { id: 1, title: 'React Fundamental', progress: 40, thumb: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop' },
    { id: 2, title: 'UI/UX Design', progress: 100, thumb: 'https://images.unsplash.com/photo-1559027615-5d620e918a4c?q=80&w=1200&auto=format&fit=crop' },
    { id: 3, title: 'Backend Node.js', progress: 65, thumb: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1200&auto=format&fit=crop' },
    { id: 4, title: 'DevOps 101', progress: 20, thumb: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop' },
    { id: 5, title: 'Data Science Intro', progress: 80, thumb: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop' },
  ]);

  return (
    <section>
      <div className="user-courses-grid">
        {courses.map((c) => (
          <article key={c.id} className="user-course-card">
            <div className="user-course-thumb"><img src={c.thumb} alt={c.title} /></div>
            <div className="user-course-body">
              <h4>{c.title}</h4>
              <div className="progress"><div className="fill" style={{ width: `${c.progress}%` }} /></div>
              <div className="user-course-actions">
                <span>{c.progress}%</span>
                <Link className="btn small" to={`courses/${c.id}/modules`}>{c.progress === 100 ? 'Selesai' : 'Lanjutkan'}</Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

const AccountSettings = () => (
  <section className="admin-table">
    <h3>Pengaturan Akun</h3>
    <div className="table-wrap" style={{ padding: '1rem' }}>
      <form className="form-grid settings-form">
        <label>
          <span>Nama Lengkap</span>
          <input placeholder="User MaQ" />
        </label>
        <label>
          <span>Email</span>
          <input placeholder="user@example.com" />
        </label>
        <label>
          <span>Bio</span>
          <textarea placeholder="Cerita singkat tentangmu" />
        </label>
        <div className="form-actions">
          <button type="button" className="btn">Simpan</button>
        </div>
      </form>
    </div>
  </section>
);

const DashboardSummary = () => (
  <section className="user-cards-grid">
    <div className="user-card accent-purple"><div className="label">Total Kursus Diambil</div><div className="value">5</div></div>
    <div className="user-card accent-orange"><div className="label">Kursus Selesai</div><div className="value">2</div></div>
    <div className="user-card accent-pink"><div className="label">Total XP</div><div className="value">1.240</div></div>
    <div className="user-card accent-cyan"><div className="label">Streak</div><div className="value">7 Hari</div></div>
  </section>
);

const Ranking = () => {
  const users = useMemo(() => ([
    { id: 1, name: 'Aulia', xp: 3200, rank: 1, avatar: 'https://i.pravatar.cc/64?img=1' },
    { id: 2, name: 'Budi', xp: 2800, rank: 2, avatar: 'https://i.pravatar.cc/64?img=2' },
    { id: 3, name: 'Citra', xp: 2300, rank: 3, avatar: 'https://i.pravatar.cc/64?img=3' },
    { id: 4, name: 'Dimas', xp: 2000, rank: 4, avatar: 'https://i.pravatar.cc/64?img=4' },
    { id: 5, name: 'Eka', xp: 1900, rank: 5, avatar: 'https://i.pravatar.cc/64?img=5' },
  ]), []);

  return (
    <section className="admin-table ranking-table">
      <h3>Peringkat</h3>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Nama</th>
              <th>XP</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id}>
                <td className="rank">#{u.rank}</td>
                <td>
                  <span className="avatar"><img src={u.avatar} alt={u.name} style={{ width:'100%', height:'100%', objectFit:'cover' }} /></span>
                  <span style={{ marginLeft: 8 }}>{u.name}</span>
                </td>
                <td>{u.xp.toLocaleString()} XP</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

const CourseModules = () => {
  const { courseId } = useParams();
  const modules = useMemo(() => ([
    { id: 1, title: 'Pengenalan React', lessons: ['Apa itu React?', 'Membuat Project', 'Struktur Folder'] },
    { id: 2, title: 'Komponen & Props', lessons: ['Functional Component', 'Props & Children', 'Best Practices'] },
    { id: 3, title: 'State & Effect', lessons: ['useState', 'useEffect', 'Lifting State'] },
    { id: 4, title: 'Routing', lessons: ['Konsep Routing', 'Nested Routes', 'Protected Routes'] },
  ]), []);

  const [openId, setOpenId] = useState(null);

  return (
    <section style={{ padding: '1rem' }}>
      <h3>Modul Kursus #{courseId}</h3>
      <div className="accordion" style={{ marginTop: '0.75rem' }}>
        {modules.map((m) => (
          <div key={m.id} className="accordion-item">
            <div className="accordion-header" onClick={() => setOpenId((id) => id === m.id ? null : m.id)}>
              <strong>{m.title}</strong>
              <span>{openId === m.id ? '–' : '+'}</span>
            </div>
            {openId === m.id && (
              <div className="accordion-content">
                {m.lessons.map((l, idx) => (
                  <div key={idx}>• {l}</div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

const UserDashboardLayout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const doLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="admin-layout">
      <aside className={`admin-sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="admin-brand">MaQCourse</div>
        <nav>
          <NavLink to="." end className={({ isActive }) => isActive ? 'active' : ''}>Dashboard</NavLink>
          <NavLink to="my-courses" className={({ isActive }) => isActive ? 'active' : ''}>Kursus Saya</NavLink>
          <NavLink to="ranking" className={({ isActive }) => isActive ? 'active' : ''}>Peringkat</NavLink>
          <NavLink to="settings" className={({ isActive }) => isActive ? 'active' : ''}>Pengaturan Akun</NavLink>
          <a href="#logout" onClick={(e) => { e.preventDefault(); doLogout(); }}>Logout</a>
        </nav>
      </aside>
      {sidebarOpen && <div className="admin-backdrop" onClick={() => setSidebarOpen(false)} />}
      <div className="admin-main">
        <header className="admin-header">
          <div className="header-left">
            <button className="menu-btn" onClick={() => setSidebarOpen((s) => !s)} aria-label="Toggle menu">
              <span />
              <span />
              <span />
            </button>
            <div className="breadcrumbs">User Dashboard</div>
          </div>
          <div className="admin-actions">
            <button className="btn btn-outline small" onClick={doLogout}>Logout</button>
          </div>
        </header>
        <Outlet />
      </div>
    </div>
  );
};

const UserDashboard = () => {
  return (
    <Routes>
      <Route element={<UserDashboardLayout />}> 
        <Route index element={<DashboardSummary />} />
        <Route path="my-courses" element={<MyCourses />} />
        <Route path="courses/:courseId/modules" element={<CourseModules />} />
        <Route path="ranking" element={<Ranking />} />
        <Route path="settings" element={<AccountSettings />} />
      </Route>
    </Routes>
  );
};

export default UserDashboard;


