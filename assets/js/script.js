// Use only the original 17 items in the same order as before
const SOUNDS = [
	{ id: 'sentido', label: 'Sentido' },
	{ id: 'descansar', label: 'Descansar' },
	{ id: 'cobrir', label: 'Cobrir' },
	{ id: 'firme', label: 'Firme' },
	{ id: 'direita_volver', label: 'Direita Volver' },
	{ id: 'esquerda_volver', label: 'Esquerda Volver' },
	{ id: 'meia_volta_volver', label: 'Meia Volta Volver' },
	{ id: 'apresentar_arma', label: 'Apresentar Arma' },
	{ id: 'ombro_arma', label: 'Ombro Arma' },
	{ id: 'descansar_arma', label: 'Descansar Arma' },
	{ id: 'ordinario_marche', label: 'Ordinário Marche' },
	{ id: 'marcar_passo', label: 'Marcar Passo' },
	{ id: 'alto', label: 'Alto' },
	{ id: 'olhar_a_direita', label: 'Olhar à Direita' },
	{ id: 'olhar_frente', label: 'Olhar Frente' },
	{ id: 'em_direcao_a_direita', label: 'Em Direção à Direita' },
	{ id: 'em_direcao_a_esquerda', label: 'Em Direção à Esquerda' }
];

let currentAudio = null;
let currentButton = null;
let progressInterval = null;

function createButton(item) {
	const button = document.createElement('div');
	button.className = 'sound-button';
	button.setAttribute('role', 'button');
	button.setAttribute('tabindex', '0');
	button.dataset.id = item.id;
	button.innerHTML = `${item.label}<div class="progress-bar"><div class="progress"></div></div>`;

	button.addEventListener('click', () => playSound(button, item.id));
	button.addEventListener('keydown', (e) => {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			playSound(button, item.id);
		}
	});

	return button;
}

function renderList(items) {
	const list = document.getElementById('list');
	list.innerHTML = '';
	for (const item of items) {
		list.appendChild(createButton(item));
	}
}

function playSound(button, id) {
	stopAllSounds();

	const audio = new Audio(`assets/sounds/${id}.mp3`);
	currentAudio = audio;
	currentButton = button;
	currentButton.classList.add('active');

	audio.currentTime = 0;
	audio.play();

	const progress = currentButton.querySelector('.progress');
	const bar = currentButton.querySelector('.progress-bar');

	if (bar) {
		bar.onclick = (e) => {
			const rect = bar.getBoundingClientRect();
			const percent = (e.clientX - rect.left) / rect.width;
			if (isFinite(audio.duration) && audio.duration > 0) {
				audio.currentTime = Math.max(0, Math.min(audio.duration, percent * audio.duration));
			}
		};
	}

	progressInterval = setInterval(() => {
		if (audio && isFinite(audio.duration) && audio.duration > 0) {
			const percentage = (audio.currentTime / audio.duration) * 100;
			progress.style.width = percentage + '%';
		}
	}, 100);

	audio.onended = () => stopAllSounds();
}

function stopAllSounds() {
	if (currentAudio) {
		currentAudio.pause();
		try { currentAudio.currentTime = 0; } catch (_) {}
	}
	if (currentButton) {
		currentButton.classList.remove('active');
		const progress = currentButton.querySelector('.progress');
		if (progress) progress.style.width = '0%';
	}
	clearInterval(progressInterval);
	currentAudio = null;
	currentButton = null;
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
	renderList(SOUNDS);
});


