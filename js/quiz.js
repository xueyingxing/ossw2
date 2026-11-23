/**
 * 燕云十六声 / 연운십육성 - 강호 협객 성향 심리 테스트
 * 测一测：你在燕云江湖中的宿命侠客身份？
 */

const QUIZ_QUESTIONS = [
    {
        id: 1,
        questionKo: '1. 비 내리는 야밤의 주막, 정체불명의 복면 자객이 죄 없는 주인을 해치려 할 때 당신은?',
        questionZh: '1. 雨夜孤栈，神秘黑衣刺客欲对无辜客栈掌柜痛下杀手，阁下当如何抉择？',
        options: [
            {
                textKo: '묵묵히 칼집에서 검을 뽑아 번개처럼 자객의 목을 겨눈다.',
                textZh: '默然拔剑，以凌厉剑招直取刺客咽喉，快意恩仇。',
                score: 'swordsman'
            },
            {
                textKo: '술잔을 털어 넣으며 젓가락 하나를 튕겨 암기를 쳐내고 유유히 웃는다.',
                textZh: '痛饮烈酒，拂袖掷出一双竹筷击飞凶刃，谈笑间化险为夷。',
                score: 'drunken'
            },
            {
                textKo: '묵직한 장창을 바닥에 내리쳐 진동을 일으키며 엄정한 군율로 제압한다.',
                textZh: '长枪顿地震慑全场，引千钧气势喝退宵小，彰显将门风骨。',
                score: 'general'
            },
            {
                textKo: '점혈 비전과 연막을 펼쳐 주인을 조용히 구출한 뒤 홀연히 사라진다.',
                textZh: '施展神妙点穴与遁术救人于无形，事了拂衣去，深藏功与名。',
                score: 'hermit'
            }
        ]
    },
    {
        id: 2,
        questionKo: '2. 망망대해 같은 강호에서 당신이 가장 갈망하는 기연(인연)은?',
        questionZh: '2. 茫茫天地，风云变幻，阁下踏入江湖心中最为向往之物为何？',
        options: [
            {
                textKo: '천하제일의 칭호와 누구도 꺾을 수 없는 절대 검술 비급.',
                textZh: '名动天下的绝代剑法，登顶武道之巅，唯剑作伴。',
                score: 'swordsman'
            },
            {
                textKo: '천하의 명주를 마시며 사해를 벗 삼는 거리낌 없는 자유.',
                textZh: '千日不醉之琼浆玉液，携三五知己浪迹山海之肆意逍遥。',
                score: 'drunken'
            },
            {
                textKo: '외세의 침략에 맞서 백성을 지키고 나라를 수호할 강력한 군세.',
                textZh: '重整燕云河山、御敌于国门之外的铁血功业与家国太平。',
                score: 'general'
            },
            {
                textKo: '산속 깊은 곳에서 음양오행과 천인합일의 도를 터득하는 은거.',
                textZh: '参悟易理玄机、天人合一之至高无为心境，不染红尘因果。',
                score: 'hermit'
            }
        ]
    },
    {
        id: 3,
        questionKo: '3. 목숨을 걸고 함께 사선을 넘나들 단 한 명의 동반자를 고른다면?',
        questionZh: '3. 九死一生的险恶征途之中，你最信赖的同行知己是？',
        options: [
            {
                textKo: '말없이 뒤를 지켜주는 충성스럽고 날카로운 한 자루의 애검.',
                textZh: '终生未离身侧的一柄青铜古剑，冷铁最通人心。',
                score: 'swordsman'
            },
            {
                textKo: '언제 어디서나 거문고를 뜯고 노래를 부르며 웃음을 주는 방랑 가인.',
                textZh: '通晓音律弄琴赋诗的落拓琴客，长夜亦可作欢歌。',
                score: 'drunken'
            },
            {
                textKo: '등을 맞대고 수만 대군을 향해 돌진할 수 있는 맹우 전우.',
                textZh: '曾并肩冲杀沙场、托付生死的同袍战友。',
                score: 'general'
            },
            {
                textKo: '의술과 독술에 통달하여 생사를 주관하는 영민한 신의.',
                textZh: '精通医道毒蛊、能于弹指间死生肉骨的隐世医仙。',
                score: 'hermit'
            }
        ]
    },
    {
        id: 4,
        questionKo: '4. 오랜 세월 가문을 멸문시킨 원수가 늙고 병들어 무릎 꿇고 용서를 구할 때 당신은?',
        questionZh: '4. 昔日血海深仇之死敌，如今垂暮残躯跪伏膝前痛哭忏悔，你待如何？',
        options: [
            {
                textKo: '피는 피로 씻는 법. 주저 없이 단칼에 베어 원한을 청산한다.',
                textZh: '恩怨分明，一剑了断尘世孽缘，绝不留半分妇人之仁。',
                score: 'swordsman'
            },
            {
                textKo: '헛웃음을 지으며 술 한 병을 던져주고 뒤도 돌아보지 않고 떠난다.',
                textZh: '仰天长笑，留下一坛烈酒拂袖而去，万般前尘随风尽散。',
                score: 'drunken'
            },
            {
                textKo: '국법과 군율에 넘겨 그의 죄과를 만천하에 드러내고 심판받게 한다.',
                textZh: '交由公堂与万民审判，昭彰正理，正名于朗朗乾坤。',
                score: 'general'
            },
            {
                textKo: '혈맥을 봉인하여 무공만 폐한 뒤 자연의 섭리에 맡긴다.',
                textZh: '截断其周身武脉使其沦为凡夫，命归造化天定，不再造杀业。',
                score: 'hermit'
            }
        ]
    }
];

const QUIZ_RESULTS = {
    swordsman: {
        titleKo: '고독한 방랑 검객 (일검서천)',
        titleZh: '孤傲浪人·一剑西来',
        badgeKo: '추천 문파: 삼류문 또는 무문무파 / 适合归宿：三流门 / 散修游侠',
        descKo: '당신은 칼날처럼 날카롭고 독립적인 영혼을 가졌습니다. 타협을 모르며 자신의 신념과 검 한 자루에 모든 생사를 겁니다. 세상의 규율에 얽매이지 않고 오직 검의 극한만을 추구합니다.',
        descZh: '冷峻清绝，独行天涯。心若磐石，不困于情，一把利刃斩尽人间不平事，乃至情至性的纯粹剑客。'
    },
    drunken: {
        titleKo: '풍류를 즐기는 취선 (호가음월)',
        titleZh: '风流酒仙·对月豪歌',
        badgeKo: '추천 문파: 취후파 / 适合归宿：醉后派',
        descKo: '당신은 구름처럼 유유자적하며 세상의 은원과 명리에 얽매이지 않는 호걸입니다. 거문고와 술, 시를 사랑하며 자유로운 심법으로 무공에서도 독특한 경지를 이룹니다.',
        descZh: '寄情山水，纵情诗酒。看似落拓不羁，实则胸藏沟壑。招式随心所欲，于半醉半醒间破尽天下繁招。'
    },
    general: {
        titleKo: '철혈의 군략 창호 (만부부당)',
        titleZh: '铁血战将·万夫莫当',
        badgeKo: '추천 문파: 신기영 / 适合归宿：神机营',
        descKo: '당신은 나라와 백성을 마음에 품은 대의의 화신입니다. 거센 창끝으로 적의 진영을 분쇄하며 엄격한 절제력과 책임감으로 동료들을 이끄는 천생의 군웅입니다.',
        descZh: '豪情万丈，铁骨铮铮。以长枪为笔书写河山壮烈，胸怀苍生万民，乃乱世中砥柱中流的百战英豪。'
    },
    hermit: {
        titleKo: '신비로운 세외 은사 (천인무위)',
        titleZh: '玄妙隐士·大道无为',
        badgeKo: '추천 문파: 창산 도가 / 适合归宿：苍山道门',
        descKo: '당신은 세속의 다툼을 초월하여 자연의 질서와 기문진법에 능통한 은자입니다. 정면 충돌보다는 지혜와 심오한 비술로 만물을 움직이는 깊은 지혜의 소유자입니다.',
        descZh: '洞察机先，大智若愚。通晓奇门遁甲、经脉医理，以柔克刚，隐于山林而知天下大势的世外高人。'
    }
};

let currentQuestionIndex = 0;
let userQuizScores = { swordsman: 0, drunken: 0, general: 0, hermit: 0 };

function initQuiz() {
    currentQuestionIndex = 0;
    userQuizScores = { swordsman: 0, drunken: 0, general: 0, hermit: 0 };
    renderQuizQuestion();
}

function renderQuizQuestion() {
    const quizCard = document.getElementById('quiz-interactive-card');
    if (!quizCard) return;

    if (currentQuestionIndex >= QUIZ_QUESTIONS.length) {
        showQuizResult();
        return;
    }

    const q = QUIZ_QUESTIONS[currentQuestionIndex];
    const progressPercent = ((currentQuestionIndex + 1) / QUIZ_QUESTIONS.length) * 100;

    const optionsHtml = q.options.map((opt, idx) => `
        <button class="quiz-option-btn" onclick="selectQuizAnswer('${opt.score}')">
            <span class="opt-num">${idx + 1}</span>
            <div class="opt-text">
                <div class="opt-ko">${opt.textKo}</div>
                <div class="opt-zh">${opt.textZh}</div>
            </div>
        </button>
    `).join('');

    quizCard.innerHTML = `
        <div class="quiz-progress-bar-wrap">
            <div class="quiz-progress-fill" style="width: ${progressPercent}%;"></div>
        </div>
        <div class="quiz-meta-step">
            문항 ${currentQuestionIndex + 1} / ${QUIZ_QUESTIONS.length} · 第 ${currentQuestionIndex + 1} 题
        </div>
        <h3 class="quiz-q-ko">${q.questionKo}</h3>
        <h4 class="quiz-q-zh">${q.questionZh}</h4>
        <div class="quiz-options-group">
            ${optionsHtml}
        </div>
    `;
}

function selectQuizAnswer(scoreType) {
    wuxiaAudio.playBellClick();
    if (userQuizScores[scoreType] !== undefined) {
        userQuizScores[scoreType]++;
    }
    currentQuestionIndex++;
    renderQuizQuestion();
}

function showQuizResult() {
    wuxiaAudio.playQiBurstSound();
    const quizCard = document.getElementById('quiz-interactive-card');
    if (!quizCard) return;

    // 점수 최댓값 계산
    let bestType = 'swordsman';
    let maxScore = -1;
    for (let key in userQuizScores) {
        if (userQuizScores[key] > maxScore) {
            maxScore = userQuizScores[key];
            bestType = key;
        }
    }

    const res = QUIZ_RESULTS[bestType];

    quizCard.innerHTML = `
        <div class="quiz-result-view anim-fade-in">
            <div class="result-crest">✧ 宿命 ✧</div>
            <div class="result-badge">${res.badgeKo}</div>
            <h2 class="result-title-ko">${res.titleKo}</h2>
            <h3 class="result-title-zh">${res.titleZh}</h3>
            
            <div class="result-desc-box">
                <p class="res-ko">${res.descKo}</p>
                <p class="res-zh">${res.descZh}</p>
            </div>

            <div class="result-actions">
                <button class="btn-primary" onclick="initQuiz()">
                    🔄 테스트 다시하기 / 重新测试
                </button>
                <button class="btn-secondary" onclick="shareQuizResult('${res.titleKo}', '${res.titleZh}')">
                    📜 강호 명첩 복사 / 复制侠客身份
                </button>
            </div>
        </div>
    `;
}

function shareQuizResult(titleKo, titleZh) {
    wuxiaAudio.playSwordDraw();
    const shareText = `[燕云十六声 / 연운십육성 성향 테스트 결과]\n나의 강호 운명: ${titleKo} / 我的江湖宿命: ${titleZh}\n바람이 스치는 대지, 모든 곳이 강호이다! / 风吹过的大地，皆是江湖。`;
    if (navigator.clipboard) {
        navigator.clipboard.writeText(shareText);
        alert(`명첩이 클립보드에 복사되었습니다!\n侠客名帖已成功复制至剪贴板！\n\n${shareText}`);
    } else {
        alert(shareText);
    }
}

