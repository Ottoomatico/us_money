import { Info, AlertTriangle, Target, DollarSign, Calendar } from 'lucide-react';

export default function SidebarRight({ selectedCountry }) {
    if (!selectedCountry) {
        return (
            <aside className="panel-tactical right-panel" style={{ gridArea: 'right', borderTop: 'none', borderBottom: 'none', borderRight: 'none' }}>
                <div className="p-6 h-full flex flex-col gap-6">
                    <div className="panel-header" style={{ padding: 0, border: 'none' }}>
                        <h3 className="text-xs tactical-font text-text-muted">Country Intelligence</h3>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center text-center p-8 border border-dashed border-border-tactical rounded">
                        <Info size={24} className="text-text-muted mb-4" />
                        <p className="text-xs tactical-font text-text-muted">SELECT A NATION ON THE MAP TO INITIALIZE DEEP-DIVE ANALYSIS</p>
                    </div>
                </div>
            </aside>
        );
    }

    return (
        <aside className="panel-tactical right-panel" style={{ gridArea: 'right', borderTop: 'none', borderBottom: 'none', borderRight: 'none' }}>
            <div className="p-6 h-full flex flex-col gap-6 overflow-y-auto">
                <div className="panel-header" style={{ padding: 0, border: 'none' }}>
                    <div className="flex flex-col">
                        <h2 className="text-lg font-bold tactical-font text-gradient">{selectedCountry.country_name}</h2>
                        <span className="text-[10px] text-text-muted font-mono">ISO_CODE: {selectedCountry.country_code}</span>
                    </div>
                    <div className="p-2 bg-accent-muted rounded">
                        <Target size={18} className="text-accent-red" />
                    </div>
                </div>

                <div className="h-px bg-border-tactical" />

                <section className="flex flex-col gap-4">
                    <div className="flex items-center gap-2 text-text-muted">
                        <AlertTriangle size={14} className="text-accent-red" />
                        <h3 className="text-[10px] tactical-font uppercase">Transfer Profile</h3>
                    </div>

                    <div className="grid grid-cols-1 gap-3">
                        <div className="panel-tactical p-4 bg-bg-tertiary/50">
                            <div className="flex items-center gap-2 text-text-secondary mb-1">
                                <DollarSign size={12} />
                                <span className="text-[10px] tactical-font">CONTRACT VALUE</span>
                            </div>
                            <div className="text-2xl font-bold tactical-font text-accent-red">
                                ${(selectedCountry.value_usd / 1000000).toFixed(1)}M
                            </div>
                        </div>

                        <div className="panel-tactical p-4 bg-bg-tertiary/50">
                            <div className="flex items-center gap-2 text-text-secondary mb-1">
                                <Calendar size={12} />
                                <span className="text-[10px] tactical-font">DELIVERY YEAR</span>
                            </div>
                            <div className="text-xl font-bold tactical-font">{selectedCountry.year}</div>
                        </div>
                    </div>
                </section>

                <section className="flex flex-col gap-4">
                    <h3 className="text-[10px] tactical-font text-text-muted uppercase">Equipment Categorization</h3>
                    <div className="bg-bg-tertiary p-4 rounded border border-border-tactical">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-semibold">{selectedCountry.weapon_type}</span>
                            <span className="text-xs font-mono text-text-secondary">QTY: {selectedCountry.quantity}</span>
                        </div>
                        <div className="w-full h-1 bg-bg-primary rounded-full overflow-hidden">
                            <div className="w-4/5 h-full bg-accent-red" />
                        </div>
                    </div>
                </section>

                <section className="mt-auto">
                    <button className="btn-tactical primary w-full justify-center">
                        DOWNLOAD DOSSIER
                    </button>
                    <p className="text-[8px] text-text-muted text-center mt-4 tactical-font">
                        INTERNAL US_GOV DOCUMENT. REDISTRIBUTION IS A FEDERAL OFFENSE.
                    </p>
                </section>
            </div>


        </aside>
    );
}
