/**
 * 燕云十六声 / 연운십육성 - 웹 오디오 사운드 엔진 / Web Audio Sound Engine
 * 순수 Web Audio API를 활용한 동양적 음향 및 효과음 합성기
 * 基于纯 Web Audio API 的东方武侠音效与古风音阶合成器
 */

class WuxiaAudioManager {
    constructor() {
        this.ctx = null;
        this.enabled = true;
        this.volume = 0.4;
        
        // 5음계 주파수 (Gong, Shang, Jiao, Zhi, Yu / 宫 商 角 徵 羽)
        this.pentatonicFrequencies = {
            gong: 261.63,   // C4 (궁 / 宫)
            shang: 293.66,  // D4 (상 / 商)
            jiao: 329.63,   // E4 (각 / 角)
            zhi: 392.00,    // G4 (치 / 徵)
            yu: 440.00,     // A4 (우 / 羽)
            gongHigh: 523.25, // C5
            shangHigh: 587.33 // D5
        };
    }

    init() {
        if (!this.ctx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            this.ctx = new AudioContext();
        }
        if (this.ctx && this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    }

    setVolume(vol) {
        this.volume = Math.max(0, Math.min(1, vol));
    }

    toggleMute() {
        this.enabled = !this.enabled;
        return this.enabled;
    }

    // 1. 고쟁/칠현금 음 (古筝 / 七弦琴 音色)
    playGuzhengNote(noteKey = 'gong') {
        if (!this.enabled) return;
        this.init();

        const freq = this.pentatonicFrequencies[noteKey] || 329.63;
        const now = this.ctx.currentTime;

        // 오실레이터 1: 기본 삼각파
        const osc1 = this.ctx.createOscillator();
        const osc2 = this.ctx.createOscillator();
        const gainNode = this.ctx.createGain();
        const filter = this.ctx.createBiquadFilter();

        osc1.type = 'triangle';
        osc1.frequency.setValueAtTime(freq, now);

        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(freq * 2, now); // 배음 (2nd Harmonic)

        // 로우패스 필터로 부드러운 현악기 질감 구현
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(1800, now);
        filter.frequency.exponentialRampToValueAtTime(300, now + 1.2);

        // 플럭(Pluck) ADSR 엔벨로프
        gainNode.gain.setValueAtTime(0, now);
        gainNode.gain.linearRampToValueAtTime(this.volume * 0.7, now + 0.02);
        gainNode.gain.exponentialRampToValueAtTime(0.001, now + 1.6);

        osc1.connect(filter);
        osc2.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(this.ctx.destination);

        osc1.start(now);
        osc2.start(now);
        osc1.stop(now + 1.6);
        osc2.stop(now + 1.6);
    }

    // 2. 검 뽑는 소리 / 발도음 (拔刀出鞘音 / Sword Draw)
    playSwordDraw() {
        if (!this.enabled) return;
        this.init();

        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gainNode = this.ctx.createGain();
        const filter = this.ctx.createBiquadFilter();

        // 메탈릭한 고주파 스윕
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(900, now);
        osc.frequency.exponentialRampToValueAtTime(2400, now + 0.08);
        osc.frequency.exponentialRampToValueAtTime(450, now + 0.35);

        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(2000, now);
        filter.Q.value = 5;

        gainNode.gain.setValueAtTime(0, now);
        gainNode.gain.linearRampToValueAtTime(this.volume * 0.45, now + 0.04);
        gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.38);

        osc.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 0.4);
    }

    // 3. 점혈 타격음 (点穴音 / Acupoint Strike)
    playAcupointSound() {
        if (!this.enabled) return;
        this.init();

        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gainNode = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(1200, now);
        osc.frequency.exponentialRampToValueAtTime(600, now + 0.15);

        gainNode.gain.setValueAtTime(0, now);
        gainNode.gain.linearRampToValueAtTime(this.volume * 0.5, now + 0.01);
        gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

        osc.connect(gainNode);
        gainNode.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 0.25);
    }

    // 4. 기공/태극 시전음 (气功 / 太极 聚气音 / Qi Flow Release)
    playQiBurstSound() {
        if (!this.enabled) return;
        this.init();

        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gainNode = this.ctx.createGain();
        const filter = this.ctx.createBiquadFilter();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(110, now);
        osc.frequency.exponentialRampToValueAtTime(380, now + 0.4);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(400, now);
        filter.frequency.linearRampToValueAtTime(2500, now + 0.3);
        filter.frequency.exponentialRampToValueAtTime(100, now + 0.8);

        gainNode.gain.setValueAtTime(0, now);
        gainNode.gain.linearRampToValueAtTime(this.volume * 0.6, now + 0.2);
        gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.85);

        osc.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 0.9);
    }

    // 5. 버튼 클릭 풍경 소리 (风铃音 / Wind Bell)
    playBellClick() {
        if (!this.enabled) return;
        this.init();

        const notes = ['gong', 'shang', 'jiao', 'zhi', 'yu', 'gongHigh'];
        const randomNote = notes[Math.floor(Math.random() * notes.length)];
        this.playGuzhengNote(randomNote);
    }
}

// 전역 인스턴스 생성
const wuxiaAudio = new WuxiaAudioManager();

