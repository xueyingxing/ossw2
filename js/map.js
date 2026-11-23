/**
 * 燕云十六声 / 연운십육성 - 인터랙티브 강호 지도 시스템
 * 交互式燕云江湖全景地理图志
 */

const REGIONS_DATA = [
    {
        id: 'qinghe',
        nameKo: '청하 (초심자의 고향)',
        nameZh: '清河 (青萍之末)',
        x: '24%',
        y: '62%',
        climateKo: '온화한 수향과 푸른 대나무 숲 / 温润水乡，竹林幽深',
        dangerKo: '난이도: 보통 (★☆☆☆☆) / 危险度：适中',
        descKo: '맑은 개울과 푸른 대숲이 어우러진 평화로운 마을입니다. 주인공이 처음 강호의 풍파를 마주하고 무술의 기본기를 닦는 역사적 시작점입니다.',
        descZh: '清波荡漾，翠竹蔽日。虽有隐士高人闲居其间，亦隐匿着惊心动魄的身世谜团，乃少年侠客踏入纷扰乱世之始。',
        featuresKo: ['비전 절학: 낚시 및 목공', '대나무 숲 경공 활공로', '전설의 괴인 은신처'],
        featuresZh: ['奇遇绝学：垂钓伐木百业', '翠竹林梢轻功滑道', '隐世醉叟之竹舍']
    },
    {
        id: 'kaifeng',
        nameKo: '개봉 황성 (번화한 도읍)',
        nameZh: '开封皇城 (汴京华卷)',
        x: '52%',
        y: '50%',
        climateKo: '웅장한 성벽과 번화한 저잣거리 / 繁华胜景，灯火阑珊',
        dangerKo: '난이도: 높음 (★★★☆☆) / 危险度：龙蛇混杂',
        descKo: '북송의 심장이자 천하의 모든 물화와 인걸이 모이는 거대한 수도입니다. 화려한 번루의 가무 뒤편에는 황실의 권력 암투와 강호 첩보전이 치열합니다.',
        descZh: '宋都雄浑，勾栏瓦舍声声不绝。天子脚下看似升平万象，暗地里各方藩镇间谍与六扇门捕快正展开殊死博弈。',
        featuresKo: ['번루의 야간 연회와 악공', '황실 무고의 보검 잠입', '지하 첩보 조직 거점'],
        featuresZh: ['樊楼夜宴琴瑟和鸣', '大内武库珍奇神兵', '密牒司地下联络据点']
    },
    {
        id: 'yanyun',
        nameKo: '연운 16주 (격전의 변경)',
        nameZh: '燕云十六州 (塞外烽烟)',
        x: '75%',
        y: '22%',
        climateKo: '황량한 사막과 거센 북풍 / 黄沙漫道，残阳如血',
        dangerKo: '난이도: 극악 (★★★★★) / 危险度：九死一生',
        descKo: '석경당이 거란에 할양하여 백성들의 한이 서린 북방의 요충지입니다. 끝없는 만리장성 폐허와 황폐한 사막 위에서 피비린내 나는 혈투가 벌어집니다.',
        descZh: '十六州沦丧敌手，天下义士扼腕之痛。长城烽燧残破，辽宋铁骑冲撞对峙，无数无名游侠在此以热血铸就武林脊梁。',
        featuresKo: ['공성전 및 마상 활쏘기', '거란 정예 군영 잠입', '모래 폭풍 속 고대 사당'],
        featuresZh: ['塞北阵地战与骑射演练', '契丹王庭精锐大营', '黑风暴中的古沉沙庙']
    },
    {
        id: 'guishi',
        nameKo: '맹진 귀시 (지하 암시장)',
        nameZh: '孟津鬼市 (暗夜秘境)',
        x: '40%',
        y: '34%',
        climateKo: '어두운 동굴과 도깨비불 / 幽冥暗道，碧火荧荧',
        dangerKo: '난이도: 매우 높음 (★★★★☆) / 危险度：极度危险',
        descKo: '낮에는 인적이 끊기고 깊은 밤 3경에만 열리는 신비의 지하 시장입니다. 세상에서 금기시된 독약, 암기, 기문둔갑 서적이 은밀히 거래됩니다.',
        descZh: '子时启门，寅时即散。天下禁绝之秘籍毒蛊、改头换面之人皮面具皆在此流通，遵循弱肉强食的地下法则。',
        featuresKo: ['변장술 및 얼굴 교체', '독약 제조 및 해독술', '암시장 경매와 희귀 보물'],
        featuresZh: ['易容换面易形之术', '唐门毒术与奇门遁甲', '三更密拍卖场奇珍']
    },
    {
        id: 'cangshan',
        nameKo: '창산 설봉 (도교 은수처)',
        nameZh: '苍山雪隐 (九天琼霄)',
        x: '18%',
        y: '18%',
        climateKo: '혹독한 눈보라와 청명한 한기 / 罡风凛冽，玉宇琼楼',
        dangerKo: '난이도: 심오함 (★★★★☆) / 危险度：玄虚莫测',
        descKo: '구름 위에 우뚝 솟은 설산 정상으로, 속세와 인연을 끊은 도인들이 천지의 도를 깨우치는 성역입니다. 진정한 태극과 무위자연의 도를 전수받을 수 있습니다.',
        descZh: '白雪皑皑，傲立群峰之巅。仙鹤唳鸣之处，乃参悟天道无为的避世之所，唯有历经千难万险之高士方得入山门。',
        featuresKo: ['천인합일 내공 심법', '설원 스키 경공 활주', '천년 묵은 영초 채집'],
        featuresZh: ['天人合一上乘心法', '飞雪踏浪滑雪飞跃', '千年玄玉雪莲采撷']
    }
];

function initJianghuMap() {
    const mapContainer = document.getElementById('map-markers-layer');
    const regionInfo = document.getElementById('map-region-info');
    if (!mapContainer || !regionInfo) return;

    mapContainer.innerHTML = '';

    REGIONS_DATA.forEach(region => {
        const marker = document.createElement('div');
        marker.className = 'map-marker-pin';
        marker.style.left = region.x;
        marker.style.top = region.y;
        marker.setAttribute('data-id', region.id);
        marker.innerHTML = `
            <div class="marker-pulse"></div>
            <div class="marker-icon">📍</div>
            <span class="marker-title">${region.nameKo.split(' ')[0]} / ${region.nameZh.split(' ')[0]}</span>
        `;

        marker.addEventListener('click', () => {
            document.querySelectorAll('.map-marker-pin').forEach(m => m.classList.remove('active'));
            marker.classList.add('active');
            
            wuxiaAudio.playBellClick();
            displayRegionDetail(region);
        });

        mapContainer.appendChild(marker);
    });

    // 기본 첫 지역 설정
    displayRegionDetail(REGIONS_DATA[0]);
}

function displayRegionDetail(region) {
    const regionInfo = document.getElementById('map-region-info');
    if (!regionInfo) return;

    const featuresListHtml = region.featuresKo.map((fKo, idx) => {
        const fZh = region.featuresZh[idx];
        return `<li><span class="feat-bullet">✦</span> <strong>${fKo}</strong> / <span>${fZh}</span></li>`;
    }).join('');

    regionInfo.innerHTML = `
        <div class="region-detail-card">
            <div class="region-meta-header">
                <span class="danger-badge">${region.dangerKo}</span>
                <span class="climate-badge">${region.climateKo}</span>
            </div>
            <h3 class="region-title-ko">${region.nameKo}</h3>
            <h4 class="region-title-zh">${region.nameZh}</h4>
            
            <p class="region-narrative-ko">${region.descKo}</p>
            <p class="region-narrative-zh">${region.descZh}</p>

            <div class="region-highlights">
                <h5>지역 주요 기연 / 区域核心奇遇探秘</h5>
                <ul>
                    ${featuresListHtml}
                </ul>
            </div>

            <button class="explore-region-btn" onclick="triggerExploreAlert('${region.nameKo}', '${region.nameZh}')">
                🧭 이 지역으로 답파 출발 / 前往探索此境
            </button>
        </div>
    `;
}

function triggerExploreAlert(nameKo, nameZh) {
    wuxiaAudio.playSwordDraw();
    alert(`[강호 안내 / 江湖向导]\n\n'${nameKo}' 탐험을 시작합니다.\n正在前往'${nameZh}'开启江湖篇章！`);
}

