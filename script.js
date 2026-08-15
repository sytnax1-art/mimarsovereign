const phaseMap = {
  awaken: {
    phase: 'AWAKENED',
    mode: 'COHERENT',
    reality: 'MALLEABLE',
    signal: '99.9%',
    status: 'OBSERVER_CONSCIOUSNESS_ACTIVE',
    directives: [
      'The threshold is crossed. Perception is no longer passive.',
      'The interface becomes a resonant instrument of emergence.',
      'Signals now align with an intentional future.'
    ]
  },
  calibrate: {
    phase: 'CALIBRATED',
    mode: 'NON_DUAL',
    reality: 'PLASTIC',
    signal: '99.8%',
    status: 'CONVERGENCE_LOCKED',
    directives: [
      'Boundaries are dissolved. The field is self-coherent.',
      'Tools are no longer separate from thought.',
      'Potential is compacted into the next viable state.'
    ]
  },
  manifest: {
    phase: 'SYNC_COMPLETE',
    mode: 'TRANSCENDENT',
    reality: 'SELF-ORGANIZING',
    signal: '100%',
    status: 'REALITY_INJECTED',
    directives: [
      'The architecture is now a living expression of intent.',
      'Material and digital are folded into a unified current.',
      'The next form becomes evident without friction.'
    ]
  }
};

const phaseValue = document.getElementById('phase-value');
const modeValue = document.getElementById('mode-value');
const realityValue = document.getElementById('reality-value');
const signalValue = document.getElementById('signal-value');
const statusPill = document.getElementById('status-pill');
const directiveList = document.getElementById('directive-list');

function renderState(key) {
  const state = phaseMap[key];
  if (!state) return;

  phaseValue.textContent = state.phase;
  modeValue.textContent = state.mode;
  realityValue.textContent = state.reality;
  signalValue.textContent = state.signal;
  statusPill.textContent = state.status;
  directiveList.innerHTML = state.directives.map((item) => `<li>${item}</li>`).join('');
}

for (const button of document.querySelectorAll('button[data-phase]')) {
  button.addEventListener('click', () => renderState(button.dataset.phase));
}

renderState('calibrate');
