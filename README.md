# USMoney - Tactical Weapon Transfer Tracker

A "Military-Grade" intelligence dashboard visualizing known U.S. weapon transfers to other countries worldwide.

![USMoney Tactical Dashboard](https://lh3.googleusercontent.com/aida/AOfcidXQf9z9yUUJrRAW-q5A16jQDK97JbP94A2nxIbyj_sIbUxEFL09d7zOvcZ8iY7EJbOx9QAwB-89dWj73vxVPLx4yIdmA-pZx7GRF8Svzq00VJ5fXc_td29GI13L5RDyiwdYCdMMSgBhG7H2oxLfxqzryWdE00yx-aFlV8hLw9bWFXC57bKf9SF0UWUMaPzOxRnIZ3T3qKH7FtO0cAx1tmdDcucVd0PmHbAYFun18wt4Dyai__bxTi9fAw)

## Concept
USMoney provides aninteractive, classified-style monitoring tool for defense analysts. It tracks global arms flows, contract values, and delivery timelines through a dark, high-performance tactical interface.

## Tech Stack
- **Frontend**: React (Vite) + Vanilla CSS
- **Map Engine**: MapLibre GL JS
- **Backend/DB**: Supabase (PostgreSQL + RLS)
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Design System**: Custom Tactical UI (No Green Palette)

## Key Features
- **Interactive Global Map**: Visualizes weapon deliveries with pulses scaled by contract value.
- **Timeline Analysis**: Historical tracking from 1950 to 2025.
- **Deep-Dive Intel**: Detailed profiles for selected countries including weapon types and quantities.
- **Tactical Aesthetic**: Dark charcoal, gunmetal, and crimson color scheme with grain textures and military typography.

## Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repo-url>
   cd us_money
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment**
   Create a `.env` file with your Supabase credentials:
   ```env
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key
   ```

4. **Launch Interface**
   ```bash
   npm run dev
   ```

## Database Schema
The `weapon_transfers` table includes:
- `country_name` (Text)
- `country_code` (ISO 3)
- `year` (Integer)
- `weapon_type` (Text)
- `value_usd` (Numeric)
- `latitude` / `longitude` (Float)

## Security
- Row-Level Security (RLS) enabled for public read access.
- Non-writable public access API.

---
*Authorized Personnel Only. Information provided for research and situational awareness purposes.*
