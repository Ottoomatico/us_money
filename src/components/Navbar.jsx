import { Shield, Activity, Terminal, ShieldAlert } from 'lucide-react';

export default function Navbar() {
    return (
        <nav className="navbar-tactical panel-tactical" style={{ gridArea: 'nav', borderTop: 'none', borderLeft: 'none', borderRight: 'none' }}>
            <div className="flex items-center gap-4 h-full px-6">
                <div className="flex items-center gap-3">
                    <Shield className="text-accent-red" size={24} />
                    <h1 className="text-xl font-bold tactical-font text-gradient">USMoney</h1>
                </div>

                <div className="h-6 w-px bg-border-tactical mx-4" />

                <div className="flex items-center gap-6 text-xs tactical-font">
                    <div className="flex items-center gap-2 text-text-muted">
                        <Activity size={14} className="text-accent-red" />
                        <span>SYSTEM STATUS: <span className="text-text-primary">OPERATIONAL</span></span>
                    </div>
                    <div className="flex items-center gap-2 text-text-muted">
                        <Terminal size={14} />
                        <span>ENCRYPTED LINK: <span className="text-text-primary">SECURE</span></span>
                    </div>
                    <div className="flex items-center gap-2 text-text-muted">
                        <ShieldAlert size={14} />
                        <span>LEVEL: <span className="text-accent-red">CLASSIFIED</span></span>
                    </div>
                </div>

                <div className="ml-auto flex items-center gap-4">
                    <div className="text-[10px] text-right leading-tight tactical-font text-text-muted">
                        US DEPT OF DEFENSE<br />
                        INTEL LIAISON OFFICE
                    </div>
                    <div className="w-8 h-8 rounded-full bg-bg-tertiary border border-border-tactical flex items-center justify-center">
                        <Shield size={16} className="text-text-secondary" />
                    </div>
                </div>
            </div>

            <style jsx>{`
        .flex { display: flex; }
        .items-center { align-items: center; }
        .gap-2 { gap: 8px; }
        .gap-3 { gap: 12px; }
        .gap-4 { gap: 16px; }
        .gap-6 { gap: 24px; }
        .h-full { height: 100%; }
        .px-6 { padding-left: 24px; padding-right: 24px; }
        .ml-auto { margin-left: auto; }
        .text-xl { font-size: 1.25rem; }
        .font-bold { font-weight: 700; }
      `}</style>
        </nav>
    );
}
