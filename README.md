## MaQCourse — Landing Page, User Dashboard, and Admin Dashboard

A single-page React app built with Vite. It includes a public landing page, a simple user auth flow and dashboard (with protected routes), plus a lightweight admin dashboard (hash-based) for demo purposes.

### Tech Stack
- React 19 + Vite 7
- React Router DOM 6 (for user-facing routing)
- Plain CSS (no framework) — styles in `src/assets/styles/*.css`

### Requirements
- Node.js 18+ and npm 9+

## Getting Started

### 1) Clone and install
```bash
git clone <repo-url> maqdis-web-test
cd maqdis-web-test
npm install
# Make sure React Router is installed (used by the app)
## MaQCourse — Landing Page, Dashboard User, dan Dashboard Admin

Aplikasi React (Vite) yang berisi landing page publik, alur login user + dashboard (dengan proteksi rute), serta dashboard admin sederhana (berbasis hash) untuk demo.

### Tech Stack
- React 19 + Vite 7
- React Router DOM 6 (routing sisi user)
- CSS murni (tanpa framework) — gaya ada di `src/assets/styles/*.css`

### Kebutuhan
- Node.js 18+ dan npm 9+

## Mulai Cepat

### 1) Clone & Install
```bash
git clone <repo-url> maqdis-web-test
cd maqdis-web-test
npm install
# Pastikan React Router terpasang (dipakai aplikasi)
## MaQCourse — Landing Page, Dashboard User, dan Dashboard Admin

Aplikasi React (Vite) yang berisi landing page publik, alur login user + dashboard (dengan proteksi rute), serta dashboard admin sederhana (berbasis hash) untuk demo.

### Tech Stack
- React 19 + Vite 7
- React Router DOM 6 (routing sisi user)
- CSS murni (tanpa framework) — gaya ada di `src/assets/styles/*.css`

### Kebutuhan
- Node.js 18+ dan npm 9+

## Mulai Cepat

### 1) Clone & Install
```bash
git clone <repo-url> maqdis-web-test
cd maqdis-web-test
npm install
# Pastikan React Router terpasang (dipakai aplikasi)
npm i react-router-dom@^6.28.0 --save
```

### 2) Jalanin Mode Pengembangan
```bash
npm run dev
```
Buka URL dari Vite (biasanya `http://localhost:5173`).

### 3) Build Produksi
```bash
npm run build
npm run preview
```

## Struktur Proyek
```
maqdis-web-test/
  src/
    assets/
      images/            # logo.png dipakai di header/sidebar
      styles/
        main.css         # gaya landing page
        admin.css        # gaya admin + dashboard user (tema gelap)
    components/
      Header.jsx         # Header landing (tombol User/Admin)
      Footer.jsx         # Footer landing (tanpa link admin)
      ProtectedRoute.jsx # Pembungkus proteksi rute /dashboard
      ...
    context/
      AuthContext.jsx    # State login user (localStorage)
    pages/
      HomePage.jsx       # Landing page
      UserLogin.jsx      # Login user (user/123)
      UserDashboard.jsx  # Dashboard user (nested routes)
      Login.jsx          # Login admin (admin/admin123), hash-based
      Dashboard.jsx      # Dashboard admin (tab/hash)
    App.jsx              # Router + handle admin hash
    main.jsx             # Entry
```

## Gambaran Aplikasi

### Landing Page (/)
- Section: Hero, Features, Courses, Testimonials, FAQ, Footer.
- Menu header dengan smooth-scroll: Beranda, Kursus, Tentang Kami, Testimoni, FAQ.
- Tombol header:
  - User → `/login`
  - Admin → `#admin`
- Kartu kursus punya tombol “Ambil Kursus” → `/login` (kalau belum login).

### Login User & Dashboard (React Router)
- State login via `src/context/AuthContext.jsx` (tersimpan di localStorage).
- Kredensial demo:
  - User: `user`
  - Password: `123`
- Proteksi rute dengan `src/components/ProtectedRoute.jsx`.

Rute:
```text
/:                Landing page
/login:           Login user (user/123)
/dashboard/*:     Dashboard user (terproteksi)
```

Halaman di Dashboard User (di bawah `/dashboard`):
- Dashboard (index): kartu ringkasan (total kursus, selesai, XP, streak)
- Kursus Saya: grid kartu kursus dengan progress bar + thumbnail
- Peringkat: leaderboard sederhana (avatar, nama, XP)
- Pengaturan Akun: form profil dummy
- Halaman Modul: `/dashboard/courses/:courseId/modules` daftar modul (accordion)

Catatan UI:
- Sidebar mobile dengan hamburger + backdrop
- Teks terang di latar gelap; aksen warna: ungu, pink, oranye, cyan

### Dashboard Admin (Hash-based)
- Akses: klik “Admin” di header atau buka `/#admin`.
- Login admin (demo):
  - Username: `admin`
  - Password: `admin123`
- Setelah login, navigasi berbasis hash `#admin/...`:
  - Overview: kartu + chart + tabel user terbaru
  - Users, Courses, Sales: tab dummy
  - Settings: form sederhana (pakai gaya form-grid)
- Tombol “Kembali” di login admin (kiri atas) kembali ke landing.

## Cara Pakai
1) Dari landing → klik “User” untuk login. Masukkan `user / 123` → diarahkan ke `/dashboard`.
2) Di dashboard user:
   - Navigasi via sidebar
   - “Kursus Saya” → klik salah satu kursus → `/dashboard/courses/:id/modules`
   - “Logout” kembali ke `/`
3) Alur admin:
   - Landing → “Admin” → `/#admin`
   - Login `admin / admin123`
   - Pakai tab sidebar; form “Settings” sudah dark-theme friendly

## Script npm
```bash
npm run dev       # mulai server dev Vite
npm run build     # build produksi
npm run preview   # preview hasil build
npm run lint      # jalanin eslint
```

## Kustomisasi
- Ubah warna aksen di variabel `:root` pada `admin.css`:
  - `--accent-purple`, `--accent-pink`, `--accent-orange`, `--accent-cyan`
- Ganti `src/assets/images/logo.png` untuk update logo/branding.
- Update dummy data di `UserDashboard.jsx` dan `Dashboard.jsx` sesuai kebutuhan.

## Salin/Reuse Proyek
1. Salin folder `src/`, file `index.html`, `vite.config.js`, dan file konfigurasi.
2. (Jika mulai dari kosong) jalankan `npm init -y` lalu install dependency yang tertera.
3. Pastikan versi `react`, `react-dom`, `react-router-dom`, dan `vite` sesuai `package.json`.
4. Ganti aset di `src/assets/images/` dan sesuaikan style.

## Keterbatasan
- Autentikasi hanya demo (tanpa backend).
- Bagian admin memakai navigasi berbasis hash (bukan React Router) untuk kesederhanaan.

```

### 2) Jalanin Mode Pengembangan
```bash
npm run dev
```
Buka URL dari Vite (biasanya `http://localhost:5173`).

### 3) Build Produksi
```bash
npm run build
npm run preview
```

## Struktur Proyek
```
maqdis-web-test/
  src/
    assets/
      images/            # logo.png dipakai di header/sidebar
      styles/
        main.css         # gaya landing page
        admin.css        # gaya admin + dashboard user (tema gelap)
    components/
      Header.jsx         # Header landing (tombol User/Admin)
      Footer.jsx         # Footer landing (tanpa link admin)
      ProtectedRoute.jsx # Pembungkus proteksi rute /dashboard
      ...
    context/
      AuthContext.jsx    # State login user (localStorage)
    pages/
      HomePage.jsx       # Landing page
      UserLogin.jsx      # Login user (user/123)
      UserDashboard.jsx  # Dashboard user (nested routes)
      Login.jsx          # Login admin (admin/admin123), hash-based
      Dashboard.jsx      # Dashboard admin (tab/hash)
    App.jsx              # Router + handle admin hash
    main.jsx             # Entry
```

## Gambaran Aplikasi

### Landing Page (/)
- Section: Hero, Features, Courses, Testimonials, FAQ, Footer.
- Menu header dengan smooth-scroll: Beranda, Kursus, Tentang Kami, Testimoni, FAQ.
- Tombol header:
  - User → `/login`
  - Admin → `#admin`
- Kartu kursus punya tombol “Ambil Kursus” → `/login` (kalau belum login).

### Login User & Dashboard (React Router)
- State login via `src/context/AuthContext.jsx` (tersimpan di localStorage).
- Kredensial demo:
  - User: `user`
  - Password: `123`
- Proteksi rute dengan `src/components/ProtectedRoute.jsx`.

Rute:
```text
/:                Landing page
/login:           Login user (user/123)
/dashboard/*:     Dashboard user (terproteksi)
```

Halaman di Dashboard User (di bawah `/dashboard`):
- Dashboard (index): kartu ringkasan (total kursus, selesai, XP, streak)
- Kursus Saya: grid kartu kursus dengan progress bar + thumbnail
- Peringkat: leaderboard sederhana (avatar, nama, XP)
- Pengaturan Akun: form profil dummy
- Halaman Modul: `/dashboard/courses/:courseId/modules` daftar modul (accordion)

Catatan UI:
- Sidebar mobile dengan hamburger + backdrop
- Teks terang di latar gelap; aksen warna: ungu, pink, oranye, cyan

### Dashboard Admin (Hash-based)
- Akses: klik “Admin” di header atau buka `/#admin`.
- Login admin (demo):
  - Username: `admin`
  - Password: `admin123`
- Setelah login, navigasi berbasis hash `#admin/...`:
  - Overview: kartu + chart + tabel user terbaru
  - Users, Courses, Sales: tab dummy
  - Settings: form sederhana (pakai gaya form-grid)
- Tombol “Kembali” di login admin (kiri atas) kembali ke landing.

## Cara Pakai
1) Dari landing → klik “User” untuk login. Masukkan `user / 123` → diarahkan ke `/dashboard`.
2) Di dashboard user:
   - Navigasi via sidebar
   - “Kursus Saya” → klik salah satu kursus → `/dashboard/courses/:id/modules`
   - “Logout” kembali ke `/`
3) Alur admin:
   - Landing → “Admin” → `/#admin`
   - Login `admin / admin123`
   - Pakai tab sidebar; form “Settings” sudah dark-theme friendly

## Script npm
```bash
npm run dev       # mulai server dev Vite
npm run build     # build produksi
npm run preview   # preview hasil build
npm run lint      # jalanin eslint
```

## Kustomisasi
- Ubah warna aksen di variabel `:root` pada `admin.css`:
  - `--accent-purple`, `--accent-pink`, `--accent-orange`, `--accent-cyan`
- Ganti `src/assets/images/logo.png` untuk update logo/branding.
- Update dummy data di `UserDashboard.jsx` dan `Dashboard.jsx` sesuai kebutuhan.

## Salin/Reuse Proyek
1. Salin folder `src/`, file `index.html`, `vite.config.js`, dan file konfigurasi.
2. (Jika mulai dari kosong) jalankan `npm init -y` lalu install dependency yang tertera.
3. Pastikan versi `react`, `react-dom`, `react-router-dom`, dan `vite` sesuai `package.json`.
4. Ganti aset di `src/assets/images/` dan sesuaikan style.

## Keterbatasan
- Autentikasi hanya demo (tanpa backend).
- Bagian admin memakai navigasi berbasis hash (bukan React Router) untuk kesederhanaan.

## Lisensi
Proyek ini untuk demo/pembelajaran. Tambahkan lisensi yang kamu inginkan.

```

### 2) Run the app in development
```bash
npm run dev
```
Open the URL shown by Vite (typically `http://localhost:5173`).

### 3) Build for production
```bash
npm run build
npm run preview
```

## Project Structure
```
maqdis-web-test/
  src/
    assets/
      images/            # logo.png used in headers/sidebars
      styles/
        main.css         # landing page styles
        admin.css        # admin + user dashboard styles (dark theme)
    components/
      Header.jsx         # Landing header with nav (User/Admin buttons)
      Footer.jsx         # Landing footer (no admin link)
      ProtectedRoute.jsx # Wrapper for guarding /dashboard
      ...
    pages/
      HomePage.jsx       # Landing page (sections + content)
      UserLogin.jsx      # User login page (user/123)
      UserDashboard.jsx  # User dashboard (nested pages & routes)
      Login.jsx          # Admin login (admin/admin123), hash-based
      Dashboard.jsx      # Admin dashboard (hash-based tabs)
    App.jsx              # Router + admin hash handling
    main.jsx             # App bootstrap
```

## App Overview

### Landing Page (/)
- Sections: Hero, Features, Courses, Testimonials, FAQ, Footer.
- Header nav links with smooth-scroll: Beranda, Kursus, Tentang Kami, Testimoni, FAQ.
- Header actions:
  - User → `/login`
  - Admin → `#admin`
- Course cards include “Ambil Kursus” → `/login` (if not logged in).

### User Auth and Dashboard (React Router)
- Auth state via `src/context/AuthContext.jsx` (localStorage-backed).
- Credentials (demo):
  - User: `user`
  - Password: `123`
- Protected routes using `src/components/ProtectedRoute.jsx`.

Routes:
```text
/:                Landing page
/login:           User login (user/123)
/dashboard/*:     User dashboard (protected)
```

User Dashboard pages (inside `/dashboard`):
- Dashboard (index): summary cards (total courses, completed, XP, streak)
- Kursus Saya: grid of course cards with progress bars and thumbnail
- Peringkat: simple leaderboard (avatar, name, XP)
- Pengaturan Akun: profile form (dummy)
- Modules page: `/dashboard/courses/:courseId/modules` shows modules accordion

UI Notes:
- Mobile-friendly sidebar (hamburger) with backdrop
- Bright text on dark background for readability
- Accent colors: purple, pink, orange, cyan

### Admin Dashboard (Hash-based)
- Access: click “Admin” in the landing header or go to `/#admin`.
- Admin login (demo):
  - Username: `admin`
  - Password: `admin123`
- After login: hash remains under `#admin/...`:
  - Overview: cards + charts + latest users table
  - Users, Courses, Sales: tabs with dummy content
  - Settings: simple form (uses the same form grid styles)
- “Kembali” button on admin login (top-left) returns to landing.

## How To Use

1) Landing → click “User” to login as user. Enter `user / 123` → redirected to `/dashboard`.
2) In dashboard:
   - Navigate tabs in the sidebar
   - “Kursus Saya” → click a course → see `/dashboard/courses/:id/modules` accordion
   - “Logout” returns to `/`
3) Admin flow:
   - Landing → click “Admin” → `/#admin`
   - Login `admin / admin123`
   - Use sidebar tabs; “Settings” form is styled and dark-theme friendly

## Scripts
```bash
npm run dev       # start Vite dev server
npm run build     # production build
npm run preview   # preview production build
npm run lint      # run eslint
```

## Customization Tips
- Change accent colors in `:root` variables of `admin.css`:
  - `--accent-purple`, `--accent-pink`, `--accent-orange`, `--accent-cyan`
- Replace `src/assets/images/logo.png` with your logo (same filename) to update branding.
- Update dummy data inside `UserDashboard.jsx` and `Dashboard.jsx` to match real content.

## Copy/Reuse
- To reuse this project:
  1. Copy the `src/` folder and `index.html`, `vite.config.js`, and config files
  2. Run `npm init -y` (if starting fresh) and install listed dependencies
  3. Ensure `react`, `react-dom`, `react-router-dom`, and `vite` versions match `package.json`
  4. Replace assets in `src/assets/images/` and update styles as needed

## Known Limitations
- Authentication is demo-only (no backend).
- Admin section uses hash-based navigation (no React Router) to keep it simple.


