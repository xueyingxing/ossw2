/**
 * 燕云十六声 / 연운십육성 - 인터랙티브 갤러리 및 라이트박스 시스템
 * 交互式江湖画卷画廊与全屏赏析系统
 */

const GALLERY_ITEMS = [
    {
        id: 1,
        category: 'scenery',
        titleKo: '청하 대나무 숲의 안개와 석양',
        titleZh: '清河翠竹·斜阳烟岚',
        descKo: '석양이 대나무 숲을 비추고 안개가 은은히 감도는 청하의 고즈넉한 풍경입니다.',
        descZh: '暮霭沉沉，斜阳穿透万顷青翠竹海，静听风吹竹叶沙沙作响之静谧。',
        bgGradient: 'linear-gradient(135deg, #1b382b 0%, #0d1e16 50%, #2f4538 100%)',
        accentIcon: '🎋',
        imgUrl: 'https://images.unsplash.com/photo-1508873696983-2df5293cb325?auto=format&fit=crop&w=1200&q=80'
    },
    {
        id: 2,
        category: 'combat',
        titleKo: '검기와 빗방울의 충돌',
        titleZh: '夜雨潇潇·青锋破煞',
        descKo: '처마 밑 거센 빗속에서 번뜩이는 서슬 퍼런 검기와 피어오르는 수증기.',
        descZh: '寒雨惊芒，剑气纵横激荡千重水花，于电光石火间定格生死一刹。',
        bgGradient: 'linear-gradient(135deg, #1f2738 0%, #111722 50%, #2b3952 100%)',
        accentIcon: '⚔️',
        imgUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=80'
    },
    {
        id: 3,
        category: 'scenery',
        titleKo: '개봉 번루의 만등 축제',
        titleZh: '汴京华灯·樊楼笙歌',
        descKo: '수만 개의 홍등이 밤하늘을 수놓고 풍악이 울려 퍼지는 천하제일의 도읍 풍경.',
        descZh: '万家灯火通明，千门如昼。帝都繁华之极，锦绣画卷跃然眼前。',
        bgGradient: 'linear-gradient(135deg, #442116 0%, #221008 50%, #68301b 100%)',
        accentIcon: '🏮',
        imgUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80'
    },
    {
        id: 4,
        category: 'heroes',
        titleKo: '삿갓을 쓴 고독한 협객의 등',
        titleZh: '斗笠蓑衣·天涯孤旅',
        descKo: '비바람을 막는 도립과 낡은 도포를 두르고 세상을 떠도는 방랑객의 결연한 뒷모습.',
        descZh: '一顶斗笠一柄孤剑，踏遍人间坎坷路，不问来生只问今朝。',
        bgGradient: 'linear-gradient(135deg, #2b2b2b 0%, #151515 50%, #3d3a35 100%)',
        accentIcon: '👤',
        imgUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80'
    },
    {
        id: 5,
        category: 'combat',
        titleKo: '공중 도약과 기맥 타격',
        titleZh: '凌空绝杀·截穴惊鸿',
        descKo: '답설무흔 경공으로 적의 상공을 선회하며 급소를 정밀 타격하는 순간.',
        descZh: '飞身凌虚，宛如惊鸿过隙。指尖真气吞吐，一招制敌于电光石火。',
        bgGradient: 'linear-gradient(135deg, #3d2b1f 0%, #1a120b 50%, #523824 100%)',
        accentIcon: '⚡',
        imgUrl: 'https://images.unsplash.com/photo-1514539079130-25950c84af65?auto=format&fit=crop&w=1200&q=80'
    },
    {
        id: 6,
        category: 'scenery',
        titleKo: '연운 장성의 고독한 봉화',
        titleZh: '塞上长城·孤烟残照',
        descKo: '대사막 너머로 뻗은 고대 장성과 석양빛에 물든 거친 북방의 대지.',
        descZh: '大漠孤烟直，长河落日圆。残垣断壁诉说着百年烽烟与铁马金戈。',
        bgGradient: 'linear-gradient(135deg, #3a2e22 0%, #1e160e 50%, #54412f 100%)',
        accentIcon: '🏯',
        imgUrl: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1200&q=80'
    }
];

let activeGalleryFilter = 'all';
let currentLightboxIndex = 0;

function initGallery() {
    renderGalleryItems();
    setupGalleryFilterEvents();
}

function renderGalleryItems() {
    const grid = document.getElementById('gallery-items-grid');
    if (!grid) return;

    const filtered = activeGalleryFilter === 'all'
        ? GALLERY_ITEMS
        : GALLERY_ITEMS.filter(item => item.category === activeGalleryFilter);

    grid.innerHTML = filtered.map((item, index) => `
        <div class="gallery-card anim-fade-in" onclick="openLightbox(${item.id})">
            <div class="gallery-image-frame" style="background: ${item.bgGradient};">
                <img src="${item.imgUrl}" alt="${item.titleKo}" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
                <div class="gallery-fallback-art" style="display:none;">
                    <span class="art-icon">${item.accentIcon}</span>
                    <span class="art-badge">燕云画卷 / 연운화권</span>
                </div>
                <div class="gallery-hover-overlay">
                    <span class="view-pill">🔍 확대 보기 / 全屏欣赏</span>
                </div>
            </div>
            <div class="gallery-card-caption">
                <span class="cat-pill">${getCategoryName(item.category)}</span>
                <h4 class="card-ko">${item.titleKo}</h4>
                <h5 class="card-zh">${item.titleZh}</h5>
            </div>
        </div>
    `).join('');
}

function getCategoryName(cat) {
    switch (cat) {
        case 'combat': return '전투 무공 / 战斗动作';
        case 'scenery': return '강호 절경 / 江湖美景';
        case 'heroes': return '인물 협객 / 侠士风采';
        default: return '전체 / 全部';
    }
}

function setupGalleryFilterEvents() {
    const filterButtons = document.querySelectorAll('.gallery-filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeGalleryFilter = btn.getAttribute('data-filter');
            wuxiaAudio.playBellClick();
            renderGalleryItems();
        });
    });
}

function openLightbox(id) {
    const item = GALLERY_ITEMS.find(i => i.id === id);
    if (!item) return;

    currentLightboxIndex = GALLERY_ITEMS.indexOf(item);
    wuxiaAudio.playBellClick();

    const modal = document.getElementById('gallery-lightbox-modal');
    if (!modal) return;

    modal.classList.add('active');
    updateLightboxContent(item);
}

function closeLightbox() {
    const modal = document.getElementById('gallery-lightbox-modal');
    if (modal) modal.classList.remove('active');
    wuxiaAudio.playBellClick();
}

function prevLightbox() {
    currentLightboxIndex = (currentLightboxIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
    updateLightboxContent(GALLERY_ITEMS[currentLightboxIndex]);
    wuxiaAudio.playBellClick();
}

function nextLightbox() {
    currentLightboxIndex = (currentLightboxIndex + 1) % GALLERY_ITEMS.length;
    updateLightboxContent(GALLERY_ITEMS[currentLightboxIndex]);
    wuxiaAudio.playBellClick();
}

function updateLightboxContent(item) {
    const imgEl = document.getElementById('lightbox-image');
    const titleKoEl = document.getElementById('lightbox-title-ko');
    const titleZhEl = document.getElementById('lightbox-title-zh');
    const descKoEl = document.getElementById('lightbox-desc-ko');
    const descZhEl = document.getElementById('lightbox-desc-zh');

    if (imgEl) {
        imgEl.src = item.imgUrl;
        imgEl.alt = item.titleKo;
    }
    if (titleKoEl) titleKoEl.innerText = item.titleKo;
    if (titleZhEl) titleZhEl.innerText = item.titleZh;
    if (descKoEl) descKoEl.innerText = item.descKo;
    if (descZhEl) descZhEl.innerText = item.descZh;
}

