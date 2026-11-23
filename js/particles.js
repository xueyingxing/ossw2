/**
 * 燕云十六声 / 연운십육성 - 잉크 및 흩날리는 꽃잎 파티클 캔버스
 * 水墨流转与落瓣轻风 Canvas 动效系统
 */

class WuxiaParticleCanvas {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.mouseX = 0;
        this.mouseY = 0;
        this.count = 45;

        this.init();
    }

    init() {
        this.resize();
        window.addEventListener('resize', () => this.resize());
        window.addEventListener('mousemove', (e) => {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;
        });

        // 파티클 생성
        for (let i = 0; i < this.count; i++) {
            this.particles.push(this.createParticle());
        }

        this.animate();
    }

    resize() {
        if (!this.canvas) return;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createParticle() {
        const isPetal = Math.random() > 0.4;
        return {
            x: Math.random() * (this.canvas ? this.canvas.width : 1920),
            y: Math.random() * (this.canvas ? this.canvas.height : 1080),
            size: isPetal ? (Math.random() * 6 + 4) : (Math.random() * 4 + 2),
            speedX: Math.random() * 1.5 - 0.5,
            speedY: Math.random() * 1.2 + 0.6,
            rotation: Math.random() * Math.PI * 2,
            rotSpeed: (Math.random() - 0.5) * 0.04,
            opacity: Math.random() * 0.6 + 0.2,
            isPetal: isPetal,
            // 복숭아꽃 붉은빛 또는 먹물빛
            color: isPetal ? 'rgba(238, 120, 140, ' : 'rgba(212, 175, 55, '
        };
    }

    animate() {
        requestAnimationFrame(() => this.animate());
        if (!this.ctx || !this.canvas) return;

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.particles.forEach(p => {
            p.x += p.speedX;
            p.y += p.speedY;
            p.rotation += p.rotSpeed;

            // 마우스와의 미세한 척력/인력 효과
            const dx = this.mouseX - p.x;
            const dy = this.mouseY - p.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 120) {
                p.x -= (dx / dist) * 1.5;
                p.y -= (dy / dist) * 1.5;
            }

            // 화면을 벗어나면 재배치
            if (p.y > this.canvas.height + 20) {
                p.y = -20;
                p.x = Math.random() * this.canvas.width;
            }
            if (p.x > this.canvas.width + 20) {
                p.x = -20;
            } else if (p.x < -20) {
                p.x = this.canvas.width + 20;
            }

            this.ctx.save();
            this.ctx.translate(p.x, p.y);
            this.ctx.rotate(p.rotation);

            if (p.isPetal) {
                // 꽃잎 모양 그리기
                this.ctx.beginPath();
                this.ctx.ellipse(0, 0, p.size, p.size * 0.5, 0, 0, Math.PI * 2);
                this.ctx.fillStyle = p.color + p.opacity + ')';
                this.ctx.fill();
            } else {
                // 빛나는 금빛 먹물 방울
                this.ctx.beginPath();
                this.ctx.arc(0, 0, p.size * 0.7, 0, Math.PI * 2);
                this.ctx.fillStyle = p.color + (p.opacity * 0.8) + ')';
                this.ctx.shadowBlur = 8;
                this.ctx.shadowColor = '#d4af37';
                this.ctx.fill();
            }

            this.ctx.restore();
        });
    }
}

