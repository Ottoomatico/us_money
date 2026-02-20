import { useState } from 'react';
import Navbar from './components/Navbar';
import SidebarLeft from './components/SidebarLeft';
import SidebarRight from './components/SidebarRight';
import TacticalMap from './components/TacticalMap';
import { useWeaponTransfers } from './hooks/useWeaponTransfers';

function App() {
  const { data: transfers, loading, error } = useWeaponTransfers();
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [yearFilter, setYearFilter] = useState(2024);

  const filteredTransfers = transfers.filter(t => t.year <= yearFilter);

  return (
    <div className="app-container">
      <Navbar />
      <SidebarLeft />

      <main className="center-panel" style={{ gridArea: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="absolute top-6 left-6 z-10 p-4 panel-tactical bg-bg-primary/80 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-accent-red animate-pulse" />
            <span className="text-xs tactical-font text-text-secondary">
              SYSTEM_MODE: <span className="text-text-primary">ACTIVE_MONITORING</span>
            </span>
          </div>
        </div>

        {error ? (
          <div className="w-full h-full flex flex-col items-center justify-center text-accent-red tactical-font gap-4">
            <span className="text-xl">DATA_LINK_FAILURE</span>
            <span className="text-sm text-text-muted">{error}</span>
          </div>
        ) : loading ? (
          <div className="w-full h-full bg-bg-tertiary flex items-center justify-center relative">
            <div className="flex flex-col items-center gap-4 tactical-font text-text-muted">
              <div className="w-16 h-16 border-2 border-dashed border-text-muted rounded-full flex items-center justify-center animate-spin-slow">
                <div className="w-8 h-8 border-2 border-accent-red rounded-full" />
              </div>
              <span>ESTABLISHING SECURE CONNECTION...</span>
            </div>
          </div>
        ) : (
          <TacticalMap transfers={filteredTransfers} onCountrySelect={setSelectedCountry} />
        )}
      </main>

      <SidebarRight selectedCountry={selectedCountry} />

      <footer className="panel-tactical" style={{ gridArea: 'footer', borderBottom: 'none', borderLeft: 'none', borderRight: 'none', padding: '12px 24px' }}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8 w-1/3">
            <div className="flex flex-col w-full">
              <div className="flex justify-between text-[10px] tactical-font text-text-muted mb-1">
                <span>TIMELINE_CURSOR</span>
                <span className="text-accent-red">{yearFilter}</span>
              </div>
              <input
                type="range"
                min="1950"
                max="2025"
                value={yearFilter}
                onChange={(e) => setYearFilter(parseInt(e.target.value))}
                className="w-full accent-accent-red"
              />
            </div>
          </div>

          <div className="flex items-center gap-6 text-[10px] tactical-font text-text-muted">
            <span>© 2026 USMONEY_INTEL_SYSTEM</span>
            <span>VER: 4.8.2-DELTA</span>
            <span className="text-accent-red">NOTICE: AUTHORIZED PERSONNEL ONLY</span>
          </div>
        </div>
      </footer>


    </div>
  );
}

export default App;
