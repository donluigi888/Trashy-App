
import React, { useState, useEffect, useMemo } from 'react';
import { AppStep, Zone, CollectionDay } from './types';
import { TrashyLogo, WASTE_TYPES } from './constants';
import { parseWasteData, getCollectionsForZone, getCurrentWeekCollections } from './services/dataService';
import { generateICS, detectDevice } from './services/calendarService';

const App: React.FC = () => {
  const [step, setStep] = useState<AppStep>(AppStep.WELCOME);
  const [selectedZone, setSelectedZone] = useState<Zone | null>(null);
  const [history, setHistory] = useState<AppStep[]>([]);
  const [showSyncModal, setShowSyncModal] = useState<boolean>(false);
  const [pendingSyncRange, setPendingSyncRange] = useState<'week' | 'month' | 'year' | null>(null);
  
  const wasteData = useMemo(() => parseWasteData(), []);

  const navigateTo = (nextStep: AppStep) => {
    setHistory(prev => [...prev, step]);
    setStep(nextStep);
  };

  const goBack = () => {
    const prevStep = history[history.length - 1];
    if (prevStep) {
      setStep(prevStep);
      setHistory(prev => prev.slice(0, -1));
    }
  };

  const handleZoneSelect = (zone: Zone) => {
    setSelectedZone(zone);
    navigateTo(AppStep.CONFIRM_ZONE);
  };

  const currentWeekData = useMemo(() => {
    if (!selectedZone) return [];
    return getCurrentWeekCollections(wasteData, selectedZone);
  }, [selectedZone, wasteData]);

  const initiateSync = (range: 'week' | 'month' | 'year') => {
    setPendingSyncRange(range);
    setShowSyncModal(true);
  };

  const executeCalendarSync = () => {
    if (!selectedZone || !pendingSyncRange) return;

    let targetCollections: CollectionDay[] = [];
    const now = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const currentMonthName = monthNames[now.getMonth()];
    
    let label = '';
    
    if (pendingSyncRange === 'week') {
      targetCollections = currentWeekData;
      label = 'Semaine';
    } else if (pendingSyncRange === 'month') {
      targetCollections = wasteData.filter(d => d.month === currentMonthName);
      label = currentMonthName;
    } else {
      targetCollections = wasteData;
      label = '2026';
    }

    generateICS(targetCollections, selectedZone, label);
    setShowSyncModal(false);
    navigateTo(AppStep.CONFIRMATION);
  };

  const renderHeader = () => {
    if (step === AppStep.WELCOME) return null;
    return (
      <div className="fixed top-0 left-0 w-full p-6 z-50 flex items-center justify-between">
        <button 
          onClick={goBack}
          className="bg-emerald-800/40 backdrop-blur-xl p-3 rounded-2xl border border-white/10 active:scale-95 transition-all text-white"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="flex-1 text-center">
            <span className="font-extrabold text-white bg-white/10 px-6 py-2 rounded-2xl backdrop-blur-xl border border-white/5 uppercase tracking-widest text-xs">
              Trashy
            </span>
        </div>
        <div className="w-12 h-12" />
      </div>
    );
  };

  const renderWeeklyInline = () => {
    return (
      <div className="space-y-4">
        {currentWeekData.length > 0 ? currentWeekData.map((day, idx) => {
          const collections = [
            { key: 'paper', type: 'Paper' },
            { key: 'bio', type: 'Bio' },
            { key: 'glass', type: 'Glass' },
            { key: 'normalTrash', type: 'Normal Trash' },
            { key: 'valorlux', type: 'Valorlux' }
          ].filter(t => day[t.key as keyof CollectionDay] === selectedZone);

          if (collections.length === 0) return null;

          return (
            <div key={idx} className="bg-white p-6 rounded-[2rem] shadow-2xl overflow-hidden relative border border-white/20">
              <div className="flex items-center justify-between mb-5 border-b border-slate-100 pb-3">
                <span className="font-extrabold text-slate-900 text-lg">{day.weekday} {day.day} {day.month}</span>
                <span className="text-[10px] text-emerald-600 font-black bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-widest">2026</span>
              </div>
              <div className="space-y-4">
                {collections.map((c, cIdx) => (
                  <div key={cIdx} className="flex items-center justify-between group">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-2xl">
                        {WASTE_TYPES[c.type as keyof typeof WASTE_TYPES].emoji}
                      </div>
                      <span className="font-bold text-slate-800 text-base">{WASTE_TYPES[c.type as keyof typeof WASTE_TYPES].name}</span>
                    </div>
                    <div className={`w-5 h-5 rounded-full shadow-lg ${WASTE_TYPES[c.type as keyof typeof WASTE_TYPES].tailwindColor} border-2 border-white ring-1 ring-slate-200`} />
                  </div>
                ))}
              </div>
            </div>
          );
        }) : (
          <div className="bg-white/5 backdrop-blur-md p-10 rounded-[2.5rem] text-center border border-white/5">
            <p className="text-emerald-100/40 font-medium italic text-sm">Aucune collecte cette semaine.</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden flex flex-col items-center">
      <div className="organic-bg" />
      <div className="blob bg-emerald-500 w-[500px] h-[500px] -top-40 -left-20 opacity-20" />
      <div className="blob bg-lime-400 w-[400px] h-[400px] bottom-0 -right-20 opacity-10" />
      
      {renderHeader()}

      <main className="w-full max-w-md mx-auto px-6 py-20 flex flex-col h-full flex-1">
        
        {step === AppStep.WELCOME && (
          <div className="flex flex-col items-center justify-center space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-700 h-full flex-1">
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-400 blur-3xl opacity-20 scale-150 rounded-full" />
              <TrashyLogo />
            </div>
            <div className="text-center space-y-4">
              <h1 className="text-5xl font-extrabold text-white tracking-tighter">Trashy</h1>
              <p className="text-emerald-100 text-xl font-medium opacity-70">Ne manque plus jamais une collecte de déchets !</p>
            </div>
            <button 
              onClick={() => navigateTo(AppStep.CHOOSE_ZONE)}
              className="w-full bg-white text-emerald-900 font-extrabold py-6 rounded-[2rem] shadow-2xl shadow-emerald-950/40 active:scale-95 transition-all text-2xl hover:bg-emerald-50"
            >
              Démarrer
            </button>
          </div>
        )}

        {step === AppStep.CHOOSE_ZONE && (
          <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-500">
            <div className="text-center space-y-3">
              <h2 className="text-4xl font-extrabold text-white tracking-tight">Quelle Zone ?</h2>
              <p className="text-emerald-100/70 font-medium">Esch-sur-Alzette est divisée en deux zones.</p>
            </div>
            
            <div className="grid grid-cols-2 gap-5">
              <button 
                onClick={() => handleZoneSelect('A')}
                className="group bg-white/10 backdrop-blur-2xl p-8 rounded-[2.5rem] border border-white/10 shadow-2xl flex flex-col items-center space-y-5 active:scale-95 transition-all hover:bg-white/20"
              >
                <div className="w-20 h-20 bg-emerald-400/20 rounded-full flex items-center justify-center text-4xl font-black text-emerald-400 group-hover:bg-emerald-400 group-hover:text-emerald-950 transition-colors">A</div>
                <span className="font-bold text-white text-xl">Zone A</span>
              </button>
              
              <button 
                onClick={() => handleZoneSelect('B')}
                className="group bg-white/10 backdrop-blur-2xl p-8 rounded-[2.5rem] border border-white/10 shadow-2xl flex flex-col items-center space-y-5 active:scale-95 transition-all hover:bg-white/20"
              >
                <div className="w-20 h-20 bg-lime-400/20 rounded-full flex items-center justify-center text-4xl font-black text-lime-400 group-hover:bg-lime-400 group-hover:text-emerald-950 transition-colors">B</div>
                <span className="font-bold text-white text-xl">Zone B</span>
              </button>
            </div>

            <div className="text-center">
              <p className="text-emerald-100/40 text-[11px] font-bold uppercase tracking-widest mb-3">Besoin d'aide ?</p>
              <a 
                href="https://administration.esch.lu/wp-content/uploads/sites/2/2025/12/Calendrier-des-dechets-2026.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-emerald-300 font-bold hover:underline transition-all text-xs opacity-60 hover:opacity-100"
              >
                Consulter le plan officiel
                <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
            </div>
          </div>
        )}

        {step === AppStep.CONFIRM_ZONE && (
          <div className="space-y-10 animate-in fade-in slide-in-from-right-8 duration-500 text-center py-10">
            <div className="relative w-40 h-40 mx-auto">
              <div className="absolute inset-0 bg-emerald-400/20 blur-2xl rounded-full scale-110" />
              <div className="relative w-full h-full bg-white/10 backdrop-blur-3xl rounded-[2.5rem] border border-white/20 flex items-center justify-center text-8xl font-black text-white shadow-2xl">
                {selectedZone}
              </div>
            </div>
            <div className="space-y-3">
              <h2 className="text-4xl font-extrabold text-white tracking-tight">Zone {selectedZone} ?</h2>
              <p className="text-emerald-100/70 font-medium">Confirmez votre sélection pour continuer.</p>
            </div>
            <div className="flex flex-col gap-4">
              <button 
                onClick={() => navigateTo(AppStep.PLANNING)}
                className="w-full bg-white text-emerald-900 font-extrabold py-6 rounded-[2rem] shadow-2xl active:scale-95 transition-all text-xl"
              >
                Confirmer
              </button>
              <button 
                onClick={goBack}
                className="w-full bg-white/5 text-emerald-100/60 font-bold py-4 rounded-2xl border border-white/10 active:scale-95 transition-all"
              >
                Changer de zone
              </button>
            </div>
          </div>
        )}

        {step === AppStep.PLANNING && (
          <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-500">
            <div className="text-center mb-4">
               <h2 className="text-4xl font-extrabold text-white tracking-tight">Mon planning</h2>
               <p className="text-emerald-100/60 font-medium italic">Zone {selectedZone}</p>
            </div>

            {/* Inlined Weekly Overview */}
            <div className="space-y-4">
               <div className="flex items-center justify-between px-2">
                 <h3 className="text-xl font-extrabold text-white">Cette semaine</h3>
                 <span className="text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest border border-emerald-400/20">LIVE</span>
               </div>
               {renderWeeklyInline()}
            </div>

            {/* Calendar Integration Box */}
            <div className="bg-emerald-950/40 backdrop-blur-2xl p-8 rounded-[2.5rem] shadow-2xl border border-white/5 space-y-8 mt-4">
              <div className="text-center">
                <h3 className="text-2xl font-extrabold text-white">Sync Calendrier</h3>
                <p className="text-emerald-100/50 font-medium mt-1">Ajoutez les dates à votre téléphone.</p>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                <button 
                  onClick={() => initiateSync('week')}
                  className="group bg-white/5 hover:bg-white/10 text-white font-bold py-5 rounded-2xl border border-white/5 active:scale-95 transition-all text-left px-8 flex justify-between items-center"
                >
                  <span className="text-lg">Cette Semaine</span>
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 4v16m8-8H4" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                </button>
                <button 
                  onClick={() => initiateSync('month')}
                  className="group bg-white/5 hover:bg-white/10 text-white font-bold py-5 rounded-2xl border border-white/5 active:scale-95 transition-all text-left px-8 flex justify-between items-center"
                >
                  <span className="text-lg">Ce mois</span>
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 4v16m8-8H4" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                </button>
                <button 
                  onClick={() => initiateSync('year')}
                  className="w-full bg-white text-emerald-950 font-black py-6 rounded-2xl shadow-2xl active:scale-95 transition-all text-center text-xl shadow-white/10"
                >
                  Tout l'agenda 2026
                </button>
              </div>
            </div>
          </div>
        )}

        {step === AppStep.CONFIRMATION && (
          <div className="flex flex-col items-center justify-center space-y-12 animate-in zoom-in-95 duration-700 text-center py-12 flex-1">
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-400 blur-[80px] opacity-40 scale-150 rounded-full" />
              <div className="relative w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(52,211,153,0.5)] animate-in fade-in zoom-in duration-1000">
                 <svg className="w-16 h-16 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={5} d="M5 13l4 4L19 7" />
                 </svg>
              </div>
            </div>
            <div className="space-y-5">
              <h2 className="text-5xl font-black text-white tracking-tighter">Parfait !</h2>
              <p className="text-emerald-100 text-xl font-medium px-8 opacity-80 leading-relaxed">
                Toutes vos dates ont été envoyées vers votre agenda.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-3xl p-8 rounded-[2.5rem] border border-white/10 w-full">
              <p className="text-emerald-100/60 text-sm font-bold leading-relaxed">
                Vérifiez votre app Calendrier ({detectDevice()}). Trashy s'occupe du reste !
              </p>
            </div>
            <button 
              onClick={() => {
                setHistory([]);
                setStep(AppStep.WELCOME);
              }}
              className="w-full bg-white text-emerald-900 font-extrabold py-6 rounded-[2rem] shadow-2xl active:scale-95 transition-all text-2xl"
            >
              C'est noté !
            </button>
          </div>
        )}

      </main>

      {/* Sync Confirmation Modal */}
      {showSyncModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
           <div 
             className="absolute inset-0 bg-emerald-950/80 backdrop-blur-sm" 
             onClick={() => setShowSyncModal(false)}
           />
           <div className="relative bg-emerald-900 border border-white/10 p-10 rounded-[2.5rem] shadow-2xl w-full max-w-sm animate-in zoom-in duration-300 text-center space-y-8">
              <div className="w-20 h-20 bg-emerald-400/20 rounded-full flex items-center justify-center mx-auto text-3xl">
                🗓️
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-black text-white">Ajouter à l'agenda</h3>
                <p className="text-emerald-100/70 font-medium">
                  Cela ajoutera automatiquement les dates de collecte sélectionnées à votre calendrier personnel.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <button 
                  onClick={executeCalendarSync}
                  className="w-full bg-emerald-400 text-emerald-950 font-black py-5 rounded-2xl active:scale-95 transition-all text-lg"
                >
                  Confirmer
                </button>
                <button 
                  onClick={() => setShowSyncModal(false)}
                  className="w-full bg-white/5 text-emerald-100/60 font-bold py-4 rounded-2xl active:scale-95 transition-all"
                >
                  Annuler
                </button>
              </div>
           </div>
        </div>
      )}

      <footer className="w-full text-center py-10 px-6 text-white/20 text-[10px] font-black uppercase tracking-[0.2em]">
        © 2026 Trashy AI • Ville d'Esch-sur-Alzette
      </footer>
    </div>
  );
};

export default App;
