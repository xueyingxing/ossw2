/**
 * 燕云十六声 / 연운십육성 - 메인 스크립트
 * 核心交互控制与模块协同引擎
 */

const WEAPONS_DATA = [
    {
        id: 'sword',
        nameKo: '검 (유연함과 예리함의 극치)',
        nameZh: '长剑 (剑走轻灵·人剑合一)',
        icon: '⚔️',
        descKo: '백병전의 제왕이자 무협의 상징입니다. 찌르기와 베기가 신속하며, 기동성과 연속 참격에 능합니다.',
        descZh: '百兵之君，飘逸从容。出剑如白虹贯日，收剑若止水无波，兼具极高机动性与凌厉连招。',
        stats: { range: 65, speed: 90, power: 80, difficulty: 75 }
    },
    {
        id: 'spear',
        nameKo: '창 (천군만마를 뚫는 기세)',
        nameZh: '长枪 (一杆银枪·破阵无双)',
        icon: '🔱',
        descKo: '넓은 사거리와 묵직한 타격감으로 대규모 전장과 기마전에서 무적의 위력을 발휘합니다.',
        descZh: '百兵之王，势大力沉。枪出如游龙翻江，横扫千军如卷席，尤擅大范围中距离控场破敌。',
        stats: { range: 95, speed: 65, power: 92, difficulty: 70 }
    },
    {
        id: 'fan',
        nameKo: '부채 (우아함 속에 숨겨진 암기)',
        nameZh: '折扇 (纸扇藏锋·翩若惊鸿)',
        icon: '🪭',
        descKo: '문인의 풍류 뒤에 숨겨진 치명적인 암기와 바람을 다루는 기운으로 적을 농락합니다.',
        descZh: '外显风雅，内藏机锋。挥洒自如间暗藏钢骨刃芒，引动气流旋涡远程制敌于谈笑中。',
        stats: { range: 80, speed: 85, power: 72, difficulty: 88 }
    },
    {
        id: 'umbrella',
        nameKo: '우산 (공방일체의 암살 비기)',
        nameZh: '机关伞 (暗藏玄机·攻守兼备)',
        icon: '🌂',
        descKo: '우산을 펼쳐 화살과 모든 공격을 튕겨내고, 회전하며 칼날을 뿜어내는 기계장치의 걸작입니다.',
        descZh: '聚为铁矛，张若盾牌。内置精妙飞镖机簧，能招架抵御万千箭雨，亦能空中滑翔暗杀。',
        stats: { range: 70, speed: 75, power: 85, difficulty: 92 }
    },
    {
        id: 'dualblades',
        nameKo: '쌍도 (폭풍우 같은 쾌속 연참)',
        nameZh: '双刀 (疾风骤雨·迅烈连斩)',
        icon: '🗡️',
        descKo: '근접전의 사신. 번개처럼 파고들어 적이 숨 쉴 틈을 주지 않고 수십 번의 참격을 연속 가합니다.',
        descZh: '近身搏杀之至凶之刃。招式暴烈连绵不绝，刀光如电影迷离，令敌手防不胜防。',
        stats: { range: 45, speed: 98, power: 88, difficulty: 85 }
    },
    {
        id: 'bow',
        nameKo: '활 (백보천원 정밀 저격)',
        nameZh: '神弓 (百步穿杨·穿云裂石)',
        icon: '🏹',
        descKo: '천 리 밖의 적을 정확히 꿰뚫는 원거리 제압 무기입니다. 특수 화살과 약물 코팅이 가능합니다.',
        descZh: '远距离狙杀绝技。蓄力贯注真气，一箭可破重甲战骑，更可施加奇毒火箭等多重战术打击。',
        stats: { range: 100, speed: 60, power: 90, difficulty: 80 }
    }
];

const SECTS_DATA = [
    {
        id: 'shenji',
        nameKo: '신기영 (神机营)',
        nameZh: '神机营 (军旅铁血)',
        badgeKo: '군사 규율과 화약 무기 / 军旅阵法与火器机关',
        descKo: '북방의 국경을 수호하는 군대 기반의 정예 문파입니다. 엄격한 규율과 장창술, 화약 무기를 결합하여 철벽의 방진을 구사합니다.',
        descZh: '戍守边疆之朝廷禁卫精锐。崇尚令行禁止，融铁血枪阵与先锋火器机巧于一体，气吞万里如虎。'
    },
    {
        id: 'zuihou',
        nameKo: '취후문 (醉后门)',
        nameZh: '醉后门 (对酒当歌)',
        badgeKo: '취권과 음률의 풍류 / 醉拳醉剑与七弦雅韵',
        descKo: '술과 시, 자유를 숭상하는 방랑 문파입니다. 비틀거리며 흐트러진 동작 속에 적의 허점을 찌르는 변화무쌍한 취권을 전수합니다.',
        descZh: '放浪形骸，随性而歌。融醉八仙步法与古琴音律，身法看似踉跄迷离，实则暗藏无上杀着。'
    },
    {
        id: 'sanliu',
        nameKo: '삼류문 (三流门)',
        nameZh: '三流门 (市井奇谋)',
        badgeKo: '저잣거리의 생존술과 기발한 암기 / 瓦舍市井与奇诡变数',
        descKo: '천하의 저잣거리와 뒷골목에서 자생한 실전파 문파입니다. 격식에 얽매이지 않고 승리를 위해 주변의 모든 사물과 지형을 활용합니다.',
        descZh: '聚三教九流之精髓。不拘门阀条框，石灰粉、飞蝗石皆可为兵刃，讲求一击毙命的极现实战。'
    },
    {
        id: 'wumen',
        nameKo: '무문무파 (无门无派)',
        nameZh: '无门无派 (散修游侠)',
        badgeKo: '자유로운 백가 무학의 융합 / 海纳百川，唯我独尊',
        descKo: '특정 문파의 사승에 얽매이지 않고 천하의 모든 무공과 비급을 자유롭게 익혀 자신만의 독창적인 무도를 완성하는 자유 협객의 길입니다.',
        descZh: '不拜师门，不守清规。天下武林绝学皆可研习融会，博采众家之所长，自成开宗立派之一代宗师。'
    }
];

document.addEventListener('DOMContentLoaded', () => {
    // 1. 파티클 캔버스 초기화
    if (document.getElementById('particle-canvas')) {
        new WuxiaParticleCanvas('particle-canvas');
    }

    // 2. 오디오 제어 버튼
    const audioToggleBtn = document.getElementById('audio-toggle-btn');
    if (audioToggleBtn) {
        audioToggleBtn.addEventListener('click', () => {
            const isEnabled = wuxiaAudio.toggleMute();
            const textKo = isEnabled ? '음향 켜짐 / 音效已开启' : '음소거 / 静音';
            audioToggleBtn.innerHTML = `🎵 ${textKo}`;
            if (isEnabled) {
                wuxiaAudio.playBellClick();
            }
        });
    }

    // 3. 점혈 & 무공 시스템 초기화
    initAcupointSimulator();
    initSkillsShowcase();

    // 4. 지도 초기화
    initJianghuMap();

    // 5. 퀴즈 초기화
    initQuiz();

    // 6. 갤러리 초기화
    initGallery();

    // 7. 무기 도감 초기화
    initWeaponsArsenal();

    // 8. 문파 시스템 초기화
    initSectsSystem();

    // 9. 스크롤 네비게이션 효과
    setupNavbarScroll();

    // 10. 모든 인터랙티브 버튼에 효과음 바인딩
    setupAudioFeedback();
});

function initWeaponsArsenal() {
    const listContainer = document.getElementById('weapon-tabs-list');
    const displayContainer = document.getElementById('weapon-active-display');
    if (!listContainer || !displayContainer) return;

    listContainer.innerHTML = '';
    
    WEAPONS_DATA.forEach((w, index) => {
        const btn = document.createElement('button');
        btn.className = `weapon-tab-btn ${index === 0 ? 'active' : ''}`;
        btn.setAttribute('data-id', w.id);
        btn.innerHTML = `
            <span class="w-icon">${w.icon}</span>
            <div class="w-names">
                <div class="w-ko">${w.nameKo.split(' ')[0]}</div>
                <div class="w-zh">${w.nameZh.split(' ')[0]}</div>
            </div>
        `;

        btn.addEventListener('click', () => {
            document.querySelectorAll('.weapon-tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            wuxiaAudio.playSwordDraw();
            renderActiveWeapon(w);
        });

        listContainer.appendChild(btn);
    });

    renderActiveWeapon(WEAPONS_DATA[0]);
}

function renderActiveWeapon(w) {
    const displayContainer = document.getElementById('weapon-active-display');
    if (!displayContainer) return;

    displayContainer.innerHTML = `
        <div class="weapon-showcase-card anim-fade-in">
            <div class="w-top-badge">
                <span class="badge-weapon-tag">병기 도감 / 神兵谱录</span>
            </div>
            <div class="w-big-icon-wrap">
                <span class="w-large-icon">${w.icon}</span>
                <div class="w-glow-ring"></div>
            </div>
            <h3 class="w-hero-name-ko">${w.nameKo}</h3>
            <h4 class="w-hero-name-zh">${w.nameZh}</h4>
            <p class="w-hero-desc-ko">${w.descKo}</p>
            <p class="w-hero-desc-zh">${w.descZh}</p>

            <div class="w-stats-meters">
                <div class="stat-bar-row">
                    <span class="stat-lbl">사거리 / 攻击射程:</span>
                    <div class="stat-track"><div class="stat-fill" style="width: ${w.stats.range}%;"></div></div>
                    <span class="stat-val">${w.stats.range}</span>
                </div>
                <div class="stat-bar-row">
                    <span class="stat-lbl">공격 속도 / 挥击攻速:</span>
                    <div class="stat-track"><div class="stat-fill" style="width: ${w.stats.speed}%;"></div></div>
                    <span class="stat-val">${w.stats.speed}</span>
                </div>
                <div class="stat-bar-row">
                    <span class="stat-lbl">파괴력 / 杀伤威力:</span>
                    <div class="stat-track"><div class="stat-fill" style="width: ${w.stats.power}%;"></div></div>
                    <span class="stat-val">${w.stats.power}</span>
                </div>
                <div class="stat-bar-row">
                    <span class="stat-lbl">조작 난이도 / 操演难度:</span>
                    <div class="stat-track"><div class="stat-fill" style="width: ${w.stats.difficulty}%;"></div></div>
                    <span class="stat-val">${w.stats.difficulty}</span>
                </div>
            </div>

            <div class="w-actions">
                <button class="btn-primary" onclick="wuxiaAudio.playSwordDraw(); alert('[발도 / 拔刀出鞘]\n${w.nameKo}\n${w.nameZh}\n칼날의 울림이 강호를 뒤흔듭니다!')">
                    🗡️ 칼날 휘두르기 / 拔刀试锋
                </button>
            </div>
        </div>
    `;
}

function initSectsSystem() {
    const sectsContainer = document.getElementById('sects-grid-container');
    if (!sectsContainer) return;

    sectsContainer.innerHTML = SECTS_DATA.map(sect => `
        <div class="sect-card" onclick="wuxiaAudio.playGuzhengNote('gongHigh')">
            <div class="sect-header">
                <span class="sect-badge">${sect.badgeKo}</span>
            </div>
            <h3 class="sect-title-ko">${sect.nameKo}</h3>
            <h4 class="sect-title-zh">${sect.nameZh}</h4>
            <p class="sect-desc-ko">${sect.descKo}</p>
            <p class="sect-desc-zh">${sect.descZh}</p>
            <div class="sect-footer-link">
                <span class="link-text">입문 탐색 / 探访门规 →</span>
            </div>
        </div>
    `).join('');
}

function setupNavbarScroll() {
    const navbar = document.getElementById('main-navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    const mobileToggle = document.getElementById('mobile-menu-toggle');
    const navLinks = document.getElementById('nav-links-menu');
    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('open');
            wuxiaAudio.playBellClick();
        });
    }
}

function setupAudioFeedback() {
    document.querySelectorAll('.btn-click-sound, .nav-item-link').forEach(elem => {
        elem.addEventListener('mouseenter', () => {
            // 미세한 현악기 배음
            wuxiaAudio.playGuzhengNote('yu');
        });
        elem.addEventListener('click', () => {
            wuxiaAudio.playBellClick();
        });
    });
}

