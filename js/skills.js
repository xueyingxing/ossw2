/**
 * 燕云十六声 / 연운십육성 - 점혈 및 무공 시뮬레이터 시스템
 * 点穴截脉与奇术互动系统
 */

const ACUPOINTS_DATA = [
    {
        id: 'baihui',
        nameKo: '백회혈',
        nameZh: '百会穴',
        position: { top: '15%', left: '50%' },
        descKo: '머리 정상에 위치하여 전신의 양기를 통솔하는 핵심 혈자리입니다. 점혈 시 적의 정신을 혼미하게 만듭니다.',
        descZh: '位于头顶正中，贯通诸阳之会。点中此穴可令对手神识昏蒙、短暂定身无法动弹。',
        effectKo: '효과: 대상 3초간 기절 및 마비 / 效果：定身眩晕 3秒',
        type: 'stun'
    },
    {
        id: 'tanzhong',
        nameKo: '단중혈',
        nameZh: '膻中穴',
        position: { top: '35%', left: '50%' },
        descKo: '가슴 중앙 심포의 기가 모이는 자리입니다. 타격 시 가슴이 답답해지고 내공 운용이 전면 차단됩니다.',
        descZh: '心包之募穴，气之会也。截断此穴，内息滞涩，令敌人无法施展独门绝技。',
        effectKo: '효과: 내공 봉인 및 스킬 사용 불가 / 效果：气劲封印，禁止施法',
        type: 'seal'
    },
    {
        id: 'dantian',
        nameKo: '하단전 (기해혈)',
        nameZh: '下丹田 (气海穴)',
        position: { top: '50%', left: '50%' },
        descKo: '인체 원기의 바다입니다. 올바르게 자극하면 내공이 급상승하며, 빗맞추면 주화입마를 유발합니다.',
        descZh: '生气之原，藏精之所。顺点则真气暴涨，逆点则气血倒流、内息错乱。',
        effectKo: '효과: 폭발적인 진기 분출 / 效果：真气爆发，攻击力翻倍',
        type: 'burst'
    },
    {
        id: 'hegu',
        nameKo: '합곡혈 (수양명)',
        nameZh: '合谷穴 (手阳明)',
        position: { top: '48%', left: '26%' },
        descKo: '엄지와 검지 사이의 호구입니다. 점혈 시 무기를 든 손의 힘이 빠져 무장 해제 상태에 빠집니다.',
        descZh: '虎口之要冲。截击此穴可致手腕酸麻无力，兵刃脱手跌落。',
        effectKo: '효과: 적으로부터 무기 강제 해제 / 效果：击落武器，解除武装',
        type: 'disarm'
    },
    {
        id: 'zusanli',
        nameKo: '족삼리혈',
        nameZh: '足三里穴',
        position: { top: '78%', left: '56%' },
        descKo: '무릎 아래 경락으로 하체의 중심축입니다. 자극 시 신속한 경공 발현 또는 적의 이동을 영구 감속시킵니다.',
        descZh: '足阳明胃经合穴，下肢步法枢纽。点击可削弱敌方神行步法，极速缓速。',
        effectKo: '효과: 이동 속도 70% 대폭 감속 / 效果：迟缓身法，移动骤降70%',
        type: 'slow'
    }
];

const WUXIA_SKILLS_DATA = [
    {
        id: 'taiji',
        titleKo: '태극화경 (사량발천근)',
        titleZh: '太极化境 (四两拨千斤)',
        tagKo: '방어 및 반격 / 借力打力',
        descKo: '상대의 거센 기운을 둥글게 감싸 안아 그대로 돌려보냅니다. 모든 투사체와 강공격을 무력화합니다.',
        descZh: '圆融贯通，顺势借力。借敌之威反制敌身，可化解一切刚猛重击与漫天暗器。',
        animClass: 'anim-taiji'
    },
    {
        id: 'qinggong',
        titleKo: '답설무흔 (경공비행)',
        titleZh: '踏雪无痕 (凌波神行)',
        tagKo: '신법 이동 / 绝顶身法',
        descKo: '나뭇잎 끝을 밟고 호수를 건너며 절벽을 단숨에 차오릅니다. 자유로운 삼차원 강호 탐험의 정수입니다.',
        descZh: '御风凌空，飞檐走壁。于万仞悬崖、竹海林梢间穿梭自如，尽览燕云浩瀚山河。',
        animClass: 'anim-qinggong'
    },
    {
        id: 'lionsroar',
        titleKo: '사자후 (천리진혼)',
        titleZh: '金刚狮子吼 (震天摄魄)',
        tagKo: '광역 제어 / 音波音律',
        descKo: '흉폭한 내력을 천지를 뒤흔드는 포효로 토해내어 주위 모든 적의 고막과 기맥을 진동시킵니다.',
        descZh: '倾吐浩瀚内力化作惊天巨吼，声震百里，令群敌气血翻涌、神魂失守溃散。',
        animClass: 'anim-roar'
    },
    {
        id: 'swordflow',
        titleKo: '파천검기 (만검귀종)',
        titleZh: '破天剑气 (万剑归宗)',
        tagKo: '검술 절기 / 绝世杀阵',
        descKo: '허공에 수천 개의 검기를 응결시켜 폭풍처럼 쏟아붓습니다. 웅장한 전장을 순식간에 평정합니다.',
        descZh: '以气御剑，百步飞霜。万道凌厉剑芒划破苍穹，摧枯拉朽般扫荡强敌。',
        animClass: 'anim-sword'
    }
];

function initAcupointSimulator() {
    const container = document.getElementById('acupoint-interactive-stage');
    const infoBox = document.getElementById('acupoint-detail-box');
    if (!container || !infoBox) return;

    container.innerHTML = '';
    
    ACUPOINTS_DATA.forEach(point => {
        const pin = document.createElement('div');
        pin.className = 'acupoint-pin';
        pin.style.top = point.position.top;
        pin.style.left = point.position.left;
        pin.setAttribute('data-id', point.id);
        pin.innerHTML = `
            <div class="pin-pulse"></div>
            <div class="pin-dot"></div>
            <span class="pin-name">${point.nameKo} / ${point.nameZh}</span>
        `;

        pin.addEventListener('click', () => {
            document.querySelectorAll('.acupoint-pin').forEach(p => p.classList.remove('active'));
            pin.classList.add('active');
            
            // 사운드 재생
            wuxiaAudio.playAcupointSound();

            // 상세 내용 표시
            infoBox.innerHTML = `
                <div class="acupoint-card active-effect-${point.type}">
                    <div class="card-badge">★ 격중 성공 / 准确命中</div>
                    <h3 class="point-title">${point.nameKo} / ${point.nameZh}</h3>
                    <p class="point-desc-ko">${point.descKo}</p>
                    <p class="point-desc-zh">${point.descZh}</p>
                    <div class="point-effect-badge">${point.effectKo}</div>
                    <button class="cast-acupoint-btn" onclick="triggerAcupointVisual('${point.type}')">
                        ⚡ 혈도 자극 발동 / 激发经络反应
                    </button>
                </div>
            `;
        });

        container.appendChild(pin);
    });
}

function triggerAcupointVisual(type) {
    wuxiaAudio.playQiBurstSound();
    const stage = document.getElementById('acupoint-interactive-stage');
    if (!stage) return;

    const flash = document.createElement('div');
    flash.className = `qi-flash-effect flash-${type}`;
    stage.appendChild(flash);

    setTimeout(() => {
        flash.remove();
    }, 1200);
}

function initSkillsShowcase() {
    const skillsGrid = document.getElementById('wuxia-skills-grid');
    const skillScreen = document.getElementById('skill-demonstration-screen');
    if (!skillsGrid || !skillScreen) return;

    skillsGrid.innerHTML = '';
    
    WUXIA_SKILLS_DATA.forEach((skill, index) => {
        const card = document.createElement('div');
        card.className = `skill-selector-card ${index === 0 ? 'selected' : ''}`;
        card.setAttribute('data-skill', skill.id);
        card.innerHTML = `
            <div class="skill-tag">${skill.tagKo}</div>
            <h4 class="skill-title">${skill.titleKo}</h4>
            <h5 class="skill-title-zh">${skill.titleZh}</h5>
            <p class="skill-desc-preview">${skill.descKo.slice(0, 36)}...</p>
            <button class="try-skill-btn">
                시전하기 / 演练施展
            </button>
        `;

        card.addEventListener('click', () => {
            document.querySelectorAll('.skill-selector-card').forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            executeSkillDemo(skill);
        });

        skillsGrid.appendChild(card);
    });

    // 기본 첫 스킬 세팅
    executeSkillDemo(WUXIA_SKILLS_DATA[0]);
}

function executeSkillDemo(skill) {
    wuxiaAudio.playQiBurstSound();
    const screen = document.getElementById('skill-demonstration-screen');
    if (!screen) return;

    screen.className = `skill-demo-screen ${skill.animClass}`;
    screen.innerHTML = `
        <div class="demo-overlay"></div>
        <div class="demo-effect-graphics">
            <div class="circular-aura"></div>
            <div class="slash-lines"></div>
        </div>
        <div class="demo-content-box">
            <span class="demo-badge">무공 시전 중 / 正在演练</span>
            <h2>${skill.titleKo}</h2>
            <h3>${skill.titleZh}</h3>
            <p class="demo-ko">${skill.descKo}</p>
            <p class="demo-zh">${skill.descZh}</p>
        </div>
    `;
}

