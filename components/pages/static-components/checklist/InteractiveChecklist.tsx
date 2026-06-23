'use client';

import { useEffect, useState } from 'react';
import { type ChecklistPhase } from '@/data/checklist/software-development-checklist-data';

interface InteractiveChecklistProps {
  onOpenModal: () => void;
  checklistPhases: ChecklistPhase[];
  totalItems: number;
  storageKey: string;
  heading: string;
  description?: string;
  sidebarLabel?: string;
  completionHeading?: string;
  completionDescription?: string;
}

export default function InteractiveChecklist({
  onOpenModal,
  checklistPhases,
  totalItems,
  storageKey,
  heading,
  description,
  sidebarLabel,
  completionHeading,
  completionDescription,
}: InteractiveChecklistProps) {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [openPhaseId, setOpenPhaseId] = useState<string>(checklistPhases[0]?.id ?? '');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) setChecked(JSON.parse(saved) as Record<string, boolean>);
    } catch { /* ignore */ }
    setMounted(true);
  }, [storageKey]);

  const toggleItem = (id: string) => {
    setChecked((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      try { localStorage.setItem(storageKey, JSON.stringify(next)); } catch { /* ignore */ }
      return next;
    });
  };

  const togglePhase = (id: string) => {
    setOpenPhaseId((prev) => (prev === id ? '' : id));
  };

  // ── Progress calculations ──────────────────────────────────────────────────
  const totalChecked = mounted ? Object.values(checked).filter(Boolean).length : 0;
  const pct = Math.round((totalChecked / totalItems) * 100);
  const showCompletion = pct >= 75;

  const phaseProgress = checklistPhases.map((phase) => ({
    id: phase.id,
    done: mounted ? phase.items.filter((item) => checked[item.id]).length : 0,
    total: phase.items.length,
  }));

  return (
    <section id='checklist' className='common-padding bg-lightShad2 py-16 md:py-28'>
      <div className='mx-auto max-w-6xl'>

        {/* Section header */}
        <div className='mb-10 text-center md:mb-12'>
          <p className='text-xs font-bold uppercase tracking-widest text-primary'>Interactive Tool</p>
          <h2 className='mt-3 text-2xl font-bold text-secondary sm:text-3xl md:text-4xl'>
            {heading}
          </h2>
          <p className='mx-auto mt-3 max-w-2xl text-base leading-relaxed text-mainBlack'>
            {description ?? 'Track your project readiness in real time. Check off each item as you complete it — progress saves automatically.'}
          </p>
        </div>

        {/* ── Mobile sticky progress strip (lg:hidden) ──────────────────── */}
        <div className='sticky top-[68px] z-20 mb-5 lg:hidden'>
          <div className='rounded-xl border border-lightShade1 bg-white/95 px-4 py-3 shadow-md backdrop-blur-sm'>
            <div className='flex items-center gap-3'>
              {/* Percentage */}
              <div className='shrink-0 text-center'>
                <p className='text-2xl font-bold leading-none text-secondary'>
                  {pct}<span className='text-sm font-bold text-grey'>%</span>
                </p>
                <p className='mt-0.5 text-xs text-grey'>{totalChecked}/{totalItems}</p>
              </div>

              {/* Bar */}
              <div className='min-w-0 flex-1'>
                <p className='mb-1 text-xs font-semibold text-mainBlack'>{sidebarLabel ?? 'Project Completion'}</p>
                <div className='h-2 overflow-hidden rounded-full bg-lightShade1'>
                  <div
                    className='h-full rounded-full bg-gradient-to-r from-secondary to-primary transition-all duration-500'
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>

              {/* Download button */}
              <button
                onClick={onOpenModal}
                className='flex shrink-0 items-center gap-1.5 rounded-lg bg-primary px-3 py-2.5 text-xs font-bold text-white transition-opacity hover:opacity-90'
              >
                <DownloadIcon className='size-3.5' />
                <span className='hidden xsm:inline'>PDF</span>
              </button>
            </div>
          </div>
        </div>

        {/* ── Main layout: desktop sidebar + accordion ──────────────────── */}
        <div className='grid items-start gap-6 lg:grid-cols-[280px_1fr] lg:gap-8'>

          {/* Sidebar — desktop only (sticky) */}
          <aside className='hidden self-start lg:block lg:sticky lg:top-24'>
            <div className='rounded-2xl border border-lightShade1 bg-white p-6 shadow-sm lg:border-l-4 lg:border-l-secondary'>
              <p className='mb-3 text-xs font-bold uppercase tracking-widest text-grey'>{sidebarLabel ?? 'Project Completion'}</p>

              <div className='mb-1 text-5xl font-bold leading-none text-secondary'>
                {pct}<span className='text-xl font-bold text-grey'>%</span>
              </div>
              <p className='mb-4 text-base text-grey'>
                {totalChecked} of {totalItems} items completed
              </p>

              {/* Progress bar */}
              <div className='mb-6 h-2.5 overflow-hidden rounded-full bg-lightShade1'>
                <div
                  className='h-full rounded-full bg-gradient-to-r from-secondary to-primary transition-all duration-500'
                  style={{ width: `${pct}%` }}
                />
              </div>

              {/* Per-phase badges */}
              <div className='mb-6 divide-y divide-lightShade1'>
                {checklistPhases.map((phase, idx) => {
                  const prog = phaseProgress[idx]!;
                  const complete = prog.done === prog.total;
                  return (
                    <div key={phase.id} className='flex items-center justify-between py-2.5'>
                      <span className='text-base font-semibold text-mainBlack'>{phase.title}</span>
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-sm font-bold ${
                          complete ? 'bg-green-50 text-green-700' : 'bg-lightShade1 text-grey'
                        }`}
                      >
                        {prog.done}/{prog.total}
                      </span>
                    </div>
                  );
                })}
              </div>

              <button
                onClick={onOpenModal}
                className='flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-3.5 text-base font-bold text-white transition-opacity hover:opacity-90'
              >
                <DownloadIcon />
                Download PDF Version
              </button>
            </div>
          </aside>

          {/* Accordion */}
          <div className='space-y-3'>
            {checklistPhases.map((phase, idx) => (
              <PhaseAccordion
                key={phase.id}
                phase={phase}
                index={idx}
                isOpen={openPhaseId === phase.id}
                checked={checked}
                onTogglePhase={togglePhase}
                onToggleItem={toggleItem}
                mounted={mounted}
              />
            ))}

            {/* Completion card */}
            {showCompletion && (
              <div className='rounded-2xl bg-secondary p-6 text-center text-white sm:p-10'>
                <div className='mb-3 text-4xl sm:text-5xl'>🎉</div>
                <h3 className='mb-3 text-xl font-bold sm:text-2xl'>{completionHeading ?? 'Congratulations!'}</h3>
                <p className='mb-6 text-base text-white/80'>
                  {completionDescription ?? `You've completed ${pct}% of your checklist. Your project is in great shape to move forward with confidence.`}
                </p>
                <button
                  onClick={onOpenModal}
                  className='inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 font-bold text-secondary transition hover:opacity-90 sm:w-auto sm:px-8'
                >
                  <DownloadIcon className='text-secondary' />
                  Download the Full Checklist PDF
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Sub-components ─────────────────────────────────────────────────────────────

interface PhaseAccordionProps {
  phase: ChecklistPhase;
  index: number;
  isOpen: boolean;
  checked: Record<string, boolean>;
  onTogglePhase: (id: string) => void;
  onToggleItem: (id: string) => void;
  mounted: boolean;
}

function PhaseAccordion({
  phase,
  index,
  isOpen,
  checked,
  onTogglePhase,
  onToggleItem,
  mounted,
}: PhaseAccordionProps) {
  const doneCount = mounted ? phase.items.filter((item) => checked[item.id]).length : 0;
  const isComplete = doneCount === phase.items.length;

  return (
    <div
      className={`overflow-hidden rounded-xl border bg-white transition-colors duration-200 ${
        isOpen ? 'border-secondary' : 'border-lightShade1'
      }`}
    >
      {/* Header — min 44px touch target */}
      <button
        type='button'
        onClick={() => onTogglePhase(phase.id)}
        className='flex min-h-[56px] w-full items-center justify-between gap-3 px-4 py-4 text-left hover:bg-lightShad2 sm:gap-4 sm:px-6 sm:py-5'
        aria-expanded={isOpen}
      >
        <div className='flex items-center gap-3 sm:gap-4'>
          <span
            className={`flex size-8 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-colors sm:size-9 ${
              isOpen
                ? 'bg-secondary text-white'
                : isComplete
                ? 'bg-green-50 text-green-700'
                : 'bg-lightShade1 text-secondary'
            }`}
          >
            {isComplete && mounted ? (
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={2.5} strokeLinecap='round' strokeLinejoin='round' className='size-4'>
                <polyline points='20 6 9 17 4 12' />
              </svg>
            ) : (
              index + 1
            )}
          </span>
          <div>
            <p className='text-base font-bold text-secondary'>{phase.title}</p>
            <p className='mt-0.5 text-sm text-grey'>{phase.items.length} items · {doneCount} done</p>
          </div>
        </div>

        <div className='flex shrink-0 items-center gap-2 sm:gap-3'>
          {isComplete && mounted && (
            <span className='hidden rounded-full bg-green-50 px-3 py-1 text-sm font-bold text-green-700 sm:inline'>
              ✓ Complete
            </span>
          )}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='none'
            stroke='#949494'
            strokeWidth={2}
            strokeLinecap='round'
            strokeLinejoin='round'
            className={`size-5 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          >
            <polyline points='6 9 12 15 18 9' />
          </svg>
        </div>
      </button>

      {/* Items — CSS grid expand */}
      <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className='overflow-hidden'>
          <div className='space-y-1 px-3 pb-4 pt-1 sm:px-6 sm:pb-5'>
            {phase.items.map((item) => {
              const isChecked = mounted && !!checked[item.id];
              return (
                <button
                  key={item.id}
                  type='button'
                  role='checkbox'
                  aria-checked={isChecked}
                  onClick={() => onToggleItem(item.id)}
                  className='flex min-h-[44px] w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors hover:bg-lightShad2 active:bg-lightShade1'
                >
                  <span
                    className={`flex size-5 shrink-0 items-center justify-center rounded-md border-2 transition-colors ${
                      isChecked ? 'border-primary bg-primary' : 'border-lightShade1 bg-white'
                    }`}
                  >
                    {isChecked && (
                      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' strokeWidth={3} strokeLinecap='round' strokeLinejoin='round' className='size-3'>
                        <polyline points='20 6 9 17 4 12' />
                      </svg>
                    )}
                  </span>
                  <span className={`text-base transition-colors ${isChecked ? 'text-grey line-through' : 'text-mainBlack'}`}>
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function DownloadIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth={2.5}
      strokeLinecap='round'
      strokeLinejoin='round'
      className={`size-4 ${className ?? ''}`}
    >
      <path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4' />
      <polyline points='7 10 12 15 17 10' />
      <line x1='12' y1='15' x2='12' y2='3' />
    </svg>
  );
}
