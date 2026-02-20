import { TrendingUp, Globe, BarChart3, ChevronRight } from 'lucide-react';

export default function SidebarLeft() {
    const topRecipients = [
        { country: 'Israel', value: '3.8B', trend: '+12%' },
        { country: 'Ukraine', value: '2.4B', trend: '+45%' },
        { country: 'Egypt', value: '1.3B', trend: '-2%' },
        { country: 'Saudi Arabia', value: '1.1B', trend: '+5%' },
        { country: 'Japan', value: '0.9B', trend: '+18%' },
    ];

    return (
        <aside className="panel-tactical" style={{ gridArea: 'left', borderTop: 'none', borderBottom: 'none', borderLeft: 'none' }}>
            <div className="p-6 flex flex-col gap-8 h-full">

                {/* Global Stats Summary */}
                <section>
                    <div className="flex items-center gap-2 mb-4 text-text-muted">
                        <Globe size={16} />
                        <h3 className="text-xs tactical-font">Global Intelligence</h3>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="panel-tactical p-4 bg-bg-tertiary/50">
                            <span className="text-[10px] text-text-muted tactical-font">TOTAL TRANSFER VALUE (YTD)</span>
                            <div className="text-2xl font-bold tactical-font text-gradient">$42.8B</div>
                        </div>
                        <div className="flex gap-2">
                            <div className="flex-1 panel-tactical p-3 bg-bg-tertiary/50">
                                <span className="text-[10px] text-text-muted tactical-font">ACTIVE ORDERS</span>
                                <div className="text-lg font-bold tactical-font">1,248</div>
                            </div>
                            <div className="flex-1 panel-tactical p-3 bg-bg-tertiary/50">
                                <span className="text-[10px] text-text-muted tactical-font">REGIONS</span>
                                <div className="text-lg font-bold tactical-font text-accent-red">142</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Top Recipients */}
                <section className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2 text-text-muted">
                            <TrendingUp size={16} />
                            <h3 className="text-xs tactical-font">Priority Recipients</h3>
                        </div>
                        <BarChart3 size={14} className="text-text-muted" />
                    </div>

                    <div className="flex flex-col gap-2">
                        {topRecipients.map((item, idx) => (
                            <div key={item.country} className="flex items-center justify-between p-3 rounded border border-transparent hover:border-border-tactical hover:bg-bg-tertiary/30 cursor-pointer group transition-all">
                                <div className="flex items-center gap-3">
                                    <span className="text-[10px] text-text-muted font-mono">{String(idx + 1).padStart(2, '0')}</span>
                                    <span className="text-sm font-semibold">{item.country}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-xs font-mono text-text-secondary">{item.value}</span>
                                    <span className={`text-[10px] ${item.trend.startsWith('+') ? 'text-accent-red' : 'text-text-muted'} font-mono`}>{item.trend}</span>
                                    <ChevronRight size={12} className="text-text-muted opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Footer info */}
                <div className="mt-auto pt-6 border-top border-border-tactical">
                    <div className="p-3 bg-accent-muted border border-border-tactical rounded flex items-start gap-3">
                        <div className="p-1.5 bg-accent-red rounded text-white mt-0.5">
                            <TrendingUp size={12} />
                        </div>
                        <div>
                            <p className="text-[10px] font-bold tactical-font text-accent-red uppercase">Anomaly Detected</p>
                            <p className="text-[10px] text-text-secondary leading-tight mt-0.5">Sudden spike in heavy artillery delivery to Eastern European sector.</p>
                        </div>
                    </div>
                </div>

            </div>

            <style jsx>{`
        .flex { display: flex; }
        .flex-col { flex-direction: column; }
        .items-center { align-items: center; }
        .items-start { align-items: flex-start; }
        .justify-between { justify-content: space-between; }
        .gap-2 { gap: 8px; }
        .gap-3 { gap: 12px; }
        .gap-4 { gap: 16px; }
        .gap-8 { gap: 32px; }
        .flex-1 { flex: 1; }
        .h-full { height: 100%; }
        .p-3 { padding: 12px; }
        .p-4 { padding: 16px; }
        .p-6 { padding: 24px; }
        .mb-4 { margin-bottom: 16px; }
        .mt-auto { margin-top: auto; }
        .mt-0.5 { margin-top: 2px; }
        .pt-6 { padding-top: 24px; }
        .text-xs { font-size: 0.75rem; }
        .text-sm { font-size: 0.875rem; }
        .text-lg { font-size: 1.125rem; }
        .text-2xl { font-size: 1.5rem; }
        .font-mono { font-family: ui-monospace, monospace; }
        .font-semibold { font-weight: 600; }
        .uppercase { text-transform: uppercase; }
        .rounded { border-radius: 4px; }
      `}</style>
        </aside>
    );
}
