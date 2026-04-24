// Ourin brand book 팝업: 원본(book.png) + 2번 + 4번부터 84번
const ourinPopup = [
  'images/Ourin brand book.png',
  'images/Ourin brand book2.png',
  ...Array.from({ length: 81 }, (_, i) => `images/Ourin brand book${i + 4}.png`)
];

const projects = [
  {
    name: 'Ourin Brand Book',
    tag: 'Brand Identity',
    year: '2024',
    thumb: { type: 'image', src: 'images/Ourin brand book3.png' },
    images: ourinPopup,
    videos: [],
    desc: {
      title: 'Ourin Brand Book',
      meta: ['브랜드 아이덴티티', '2024년', '디지털 인쇄, 소프트커버', '210 × 297밀리미터 84쪽'],
      body: [
        '우린(Ourin)은 지속 가능한 라이프스타일을 지향하는 브랜드로, 일상에서 환경과의 조화를 실천하는 제품과 경험을 제공한다. 브랜드북은 우린의 철학과 시각적 정체성을 체계적으로 정리한 아이덴티티 가이드라인 문서이다.',
        '브랜드의 핵심 가치인 자연스러움과 지속성을 시각 언어로 전환하는 작업에서 출발했다. 컬러 팔레트는 대지와 식물에서 추출한 색조를 기반으로 구성했으며, 타이포그래피 시스템은 가독성과 개성을 동시에 확보하기 위해 맞춤 서체와 범용 서체를 병행해 사용했다.',
      ],
      specs: {
        '프로젝트 유형': '브랜드 아이덴티티\n가이드라인',
        '서체': '맞춤 서체\n탈\n하이츠 와이드',
        '용지': '모조지\n인버코트',
        '인쇄': '디지털 프로세스',
        '의뢰인': '우린(Ourin)',
      }
    }
  },
  {
    name: 'Baebaelab',
    tag: 'Branding',
    year: '2023',
    thumb: { type: 'image', src: 'images/baebaelab_box_img (4).JPG' },
    images: [
      'images/baebaelab_box_img (1).JPG',
      'images/baebaelab_box_img (2).JPG',
      'images/baebaelab_box_img (3).JPG',
      'images/baebaelab_box_img (5).JPG',
      'images/baebaelab_box_img (6).JPG',
      'images/baebaelab_box_img (7).JPG',
      'images/baebaelab_box_img (8).JPG',
      'images/baebaelab_box_img (9).png',
      'images/baebaelab_sic_img.jpg',
      'images/baebaelab_sic_img 2.JPG',
    ],
    videos: [
      'images/baebaelab_vid2.mp4',
      'images/baebaelab_vid1.mov',
    ],
    desc: {
      title: 'Baebaelab',
      meta: ['패키징 디자인', '2023년', '오프셋 인쇄, 박 가공', '다양한 규격'],
      body: [
        '배배랩은 반려동물 전문 뷰티 브랜드로, 강아지와 고양이를 위한 그루밍 제품을 생산한다. 브랜드 전반의 패키징 디자인과 시각 아이덴티티를 새롭게 구축하는 프로젝트였다.',
        '기존 브랜드가 가진 친근하고 유쾌한 감성을 유지하면서도, 시장에서의 프리미엄 포지셔닝을 강화하는 방향으로 디자인을 전개했다. 제품별 컬러 코딩 시스템을 도입해 라인 간 구분을 명확히 했으며, 일러스트레이션 요소를 활용해 브랜드 개성을 강조했다.',
      ],
      specs: {
        '프로젝트 유형': '패키징\n브랜드 아이덴티티',
        '서체': '맞춤 서체\n프루티거',
        '용지': '아트지\n크라프트지',
        '가공': '유광 코팅\n금박',
        '의뢰인': 'Baebaelab',
      }
    }
  },
  {
    name: '14DC',
    tag: 'Visual',
    year: '2025',
    thumb: { type: 'image', src: 'images/14dc_img 2025-07-23 - 1.51.34.png' },
    images: [
      'images/14dc_img 2025-07-27  12.31.35.png',
      'images/14dc_img 2025-07-27  12.32.24.png',
      'images/14dc_img 2025-07-27  12.34.18.png',
      'images/14dc_img 2025-07-27  12.34.24.png',
      'images/14dc_img 2025-07-27  12.35.26.png',
      'images/14dc_img 2025-07-27  12.50.54.png',
      'images/14dc_img 2025-07-27  12.52.36.png',
      'images/14dc_img 2025-07-27  12.53.46.png',
      'images/14dc_img 2025-07-27  12.54.27.png',
      'images/14dc_img 2025-07-27  12.55.16.png',
      'images/14dc_img 2025-07-27  12.56.02.png',
      'images/14dc_img 2025-07-27  12.56.17.png',
      'images/14dc_img 2025-07-29  4.15.59.png',
    ],
    videos: [],
    desc: {
      title: '14DC',
      meta: ['비주얼 아이덴티티', '2025년', '디지털'],
      body: [
        '14DC는 서울을 기반으로 활동하는 독립 크리에이티브 스튜디오로, 그래픽 디자인과 공간 경험을 중심으로 다양한 프로젝트를 전개한다. 이번 작업은 스튜디오 자체의 브랜드 아이덴티티를 재정립하는 프로젝트였다.',
        '14라는 숫자와 DC라는 이니셜이 가진 기하학적 특성에서 출발해, 그리드 기반의 모듈형 로고 시스템을 개발했다. 적용 맥락에 따라 유연하게 변형되면서도 일관된 인상을 유지할 수 있도록 설계했다.',
      ],
      specs: {
        '프로젝트 유형': '비주얼 아이덴티티',
        '서체': '맞춤 서체\nGT아메리카',
        '플랫폼': '디지털\n인쇄물',
        '의뢰인': '14DC 스튜디오',
      }
    }
  },
  {
    name: 'Aimov',
    tag: 'Motion',
    year: '2024',
    thumb: { type: 'video', src: 'images/aimov_vid1.m4v' },
    images: [],
    videos: [],
    desc: {
      title: 'Aimov',
      meta: ['모션 그래픽', '2024년', '디지털 영상'],
      body: [
        'Aimov는 AI 기반 이동 경험 서비스의 브랜드 모션 아이덴티티 프로젝트다. 정적인 로고와 컬러 시스템을 움직임의 언어로 번역하는 작업이었다.',
        '속도와 방향성이라는 이동의 본질적 속성을 모션 문법으로 구현했다. 브랜드가 등장하고 전환되는 모든 순간에 일관된 물리적 감각이 느껴지도록 이징(easing) 커브와 타이밍 시스템을 정의했다.',
      ],
      specs: {
        '프로젝트 유형': '모션 아이덴티티',
        '툴': 'After Effects\nCinema 4D',
        '납품 형식': 'MP4, MOV',
        '의뢰인': 'Aimov',
      }
    }
  },
  {
    name: 'UOS',
    tag: 'Visual',
    year: '2023',
    thumb: { type: 'image', src: 'images/uos_img1.png' },
    images: [],
    videos: [],
    desc: {
      title: 'UOS',
      meta: ['비주얼 아이덴티티', '2023년', '디지털 및 인쇄'],
      body: [
        'UOS는 서울시립대학교의 학생 주도 디자인 전시를 위한 비주얼 아이덴티티 프로젝트다. 다양한 전공과 학년의 학생 작품을 하나의 일관된 맥락 안에서 선보이는 것이 목표였다.',
        '공공성과 다양성이라는 두 가지 키워드를 조형 언어로 전환했다. 오픈 타입 기능을 활용한 가변 서체를 핵심 요소로 삼아, 여러 작가의 개성이 하나의 그래픽 시스템 안에서 공존할 수 있는 유연한 아이덴티티를 구성했다.',
      ],
      specs: {
        '프로젝트 유형': '전시 아이덴티티',
        '서체': '가변 서체\nGT아메리카',
        '적용 범위': '포스터\n웹사이트\n인쇄물',
        '의뢰인': '서울시립대학교',
      }
    }
  }
];

// 4열 그리드, 5개 카드 — 랜덤 배열 (dense로 빈 공간 자동 채움)
const spanArrangements = [
  [2, 2, 1, 1, 2],
  [2, 1, 1, 2, 2],
  [1, 2, 1, 2, 2],
  [2, 2, 2, 1, 1],
];
const spans = spanArrangements[Math.floor(Math.random() * spanArrangements.length)];

// ── Render cards ──────────────────────────────────────────
const grid = document.getElementById('grid');

projects.forEach((project, i) => {
  const card = document.createElement('article');
  card.className = 'card';
  card.style.gridColumn = `span ${spans[i] ?? 1}`;

  if (project.thumb.type === 'video') {
    const vid = document.createElement('video');
    vid.src = project.thumb.src;
    vid.autoplay = true;
    vid.muted = true;
    vid.loop = true;
    vid.playsInline = true;
    card.appendChild(vid);
  } else {
    const img = document.createElement('img');
    img.src = project.thumb.src;
    img.alt = project.name;
    card.appendChild(img);
  }

  const info = document.createElement('div');
  info.className = 'card-info';
  info.innerHTML = `<span class="card-name">${project.name}</span><span class="card-tag">${project.tag}</span>`;
  card.appendChild(info);

  // 팝업 이미지가 없으면 썸네일을 단독으로 표시
  const popupImages = project.images.length > 0
    ? project.images
    : (project.thumb.type === 'image' ? [project.thumb.src] : []);

  card.addEventListener('click', () => openModal(popupImages, project.videos, project.desc));

  grid.appendChild(card);
});

// ── Modal ─────────────────────────────────────────────────
const modal       = document.getElementById('modal');
const overlay     = document.getElementById('modalOverlay');
const panel       = document.getElementById('modalPanel');
const stage       = document.getElementById('modalStage');
const counter     = document.getElementById('modalCounter');
const vidsEl      = document.getElementById('modalVids');
const descEl      = document.getElementById('modalDesc');
const btnClose    = document.getElementById('modalClose');
const btnPrev     = document.getElementById('modalPrev');
const btnNext     = document.getElementById('modalNext');
const imgsSection = document.getElementById('modalImgs');

// 패널 클릭이 overlay로 전파되지 않도록
panel.addEventListener('click', e => e.stopPropagation());

// ── 드래그 ────────────────────────────────────────────────
const dragHandle = document.querySelector('.modal-panel-header');
let drag = null;

dragHandle.addEventListener('mousedown', e => {
  if (e.target.closest('.modal-close')) return;
  const r = panel.getBoundingClientRect();
  drag = { sx: e.clientX, sy: e.clientY, sl: r.left, st: r.top };
  document.body.style.cursor = 'grabbing';
  document.body.style.userSelect = 'none';
  e.preventDefault();
});

// ── 리사이즈 ──────────────────────────────────────────────
let resize = null;
const MIN_W = 260, MIN_H = 200;

document.querySelectorAll('.rh').forEach(h => {
  h.addEventListener('mousedown', e => {
    const r = panel.getBoundingClientRect();
    resize = {
      dir: h.dataset.dir,
      sx: e.clientX, sy: e.clientY,
      sl: r.left,    st: r.top,
      sw: r.width,   sh: r.height
    };
    document.body.style.cursor = getComputedStyle(h).cursor;
    document.body.style.userSelect = 'none';
    e.preventDefault();
    e.stopPropagation();
  });
});

document.addEventListener('mousemove', e => {
  if (drag) {
    panel.style.left = `${drag.sl + e.clientX - drag.sx}px`;
    panel.style.top  = `${drag.st + e.clientY - drag.sy}px`;
  }
  if (resize) {
    const { dir, sx, sy, sl, st, sw, sh } = resize;
    const dx = e.clientX - sx, dy = e.clientY - sy;
    if (dir.includes('e')) panel.style.width  = `${Math.max(MIN_W, sw + dx)}px`;
    if (dir.includes('s')) panel.style.height = `${Math.max(MIN_H, sh + dy)}px`;
    if (dir.includes('w')) {
      const nw = Math.max(MIN_W, sw - dx);
      panel.style.width = `${nw}px`;
      panel.style.left  = `${sl + sw - nw}px`;
    }
    if (dir.includes('n')) {
      const nh = Math.max(MIN_H, sh - dy);
      panel.style.height = `${nh}px`;
      panel.style.top    = `${st + sh - nh}px`;
    }
  }
});

document.addEventListener('mouseup', () => {
  drag = resize = null;
  document.body.style.cursor = '';
  document.body.style.userSelect = '';
});

// ── 패널 위치·크기 설정 ───────────────────────────────────
const NAV_H    = 44;
const OVERHEAD = 144; // 헤더(44) + 바디패딩(12) + 이미지-네비 갭(12) + 네비(36) + 바디패딩하단(40)
const SIDE_PAD = 40;  // 바디 좌우 패딩 합계

function applyPanelSize(panelW, panelH) {
  panelW = Math.max(260, Math.min(Math.round(panelW), window.innerWidth - 40));
  panelH = Math.max(200, Math.round(panelH));
  panel.style.width  = `${panelW}px`;
  panel.style.height = `${panelH}px`;
  panel.style.left   = `${window.innerWidth - panelW}px`;
  panel.style.top    = `${NAV_H}px`;
  panel.style.right  = 'auto';
  panel.style.bottom = 'auto';
}

function setPanelToImage(src, callback) {
  const probe = new Image();
  probe.onload = () => {
    const ratio   = probe.naturalHeight / probe.naturalWidth;
    const maxW    = window.innerWidth  * 0.7;
    const maxH    = window.innerHeight - NAV_H - 20;

    let contentW = Math.min(probe.naturalWidth, maxW - SIDE_PAD);
    let contentH = contentW * ratio;
    let panelW   = contentW + SIDE_PAD;
    let panelH   = contentH + OVERHEAD;

    // 너무 높으면 높이 기준으로 재계산
    if (panelH > maxH) {
      contentH = maxH - OVERHEAD;
      contentW = contentH / ratio;
      panelW   = contentW + SIDE_PAD;
      panelH   = maxH;
    }

    applyPanelSize(panelW, panelH);
    callback();
  };
  probe.onerror = () => {
    applyPanelSize(window.innerWidth * 0.42, window.innerHeight - NAV_H);
    callback();
  };
  probe.src = src;
}

let images = [];
let idx = 0;

function renderDesc(desc) {
  descEl.innerHTML = '';
  if (!desc) return;

  // 왼쪽 컬럼: 제목 + 메타 + 본문
  const left = document.createElement('div');
  left.className = 'popup-desc-left';

  const titleEl = document.createElement('div');
  titleEl.className = 'popup-desc-title';
  titleEl.textContent = desc.title;
  left.appendChild(titleEl);

  desc.meta.forEach(line => {
    const m = document.createElement('div');
    m.className = 'popup-desc-meta';
    m.textContent = line;
    left.appendChild(m);
  });

  if (desc.body?.length) {
    const body = document.createElement('div');
    body.className = 'popup-desc-body';
    desc.body.forEach(para => {
      const p = document.createElement('p');
      p.textContent = para;
      body.appendChild(p);
    });
    left.appendChild(body);
  }

  descEl.appendChild(left);

  // 오른쪽 컬럼: 스펙 항목
  if (desc.specs) {
    const right = document.createElement('div');
    right.className = 'popup-desc-right';
    Object.entries(desc.specs).forEach(([label, value]) => {
      const item = document.createElement('div');
      item.className = 'popup-desc-spec';
      const lbl = document.createElement('div');
      lbl.className = 'popup-desc-spec-label';
      lbl.textContent = label + ':';
      const val = document.createElement('div');
      val.className = 'popup-desc-spec-value';
      val.textContent = value;
      item.append(lbl, val);
      right.appendChild(item);
    });
    descEl.appendChild(right);
  }
}

function openModal(imgs, vids, desc) {
  images = imgs;
  idx = 0;

  // 영상 섹션 미리 준비
  vidsEl.innerHTML = '';
  vids.forEach(src => {
    const vid = document.createElement('video');
    vid.src = src;
    vid.controls = true;
    vid.playsInline = true;
    vidsEl.appendChild(vid);
  });

  renderDesc(desc);
  imgsSection.style.display = images.length > 0 ? 'flex' : 'none';

  const show = () => {
    if (images.length > 0) renderSlide();
    modal.classList.add('is-open');
  };

  if (images.length > 0) {
    // 첫 이미지 비율로 패널 크기 결정 후 표시
    setPanelToImage(images[0], show);
  } else {
    // 영상만 있는 경우 기본 크기
    applyPanelSize(window.innerWidth * 0.42, window.innerHeight - NAV_H);
    show();
  }
}

function closeModal() {
  modal.classList.remove('is-open');
  stage.innerHTML = '';
  vidsEl.innerHTML = '';
  // 재생 중인 영상 정지
  vidsEl.querySelectorAll('video').forEach(v => v.pause());
}

function renderSlide() {
  stage.innerHTML = '';
  const img = document.createElement('img');
  img.src = images[idx];
  img.alt = '';
  stage.appendChild(img);

  counter.textContent = `${idx + 1} / ${images.length}`;
  btnPrev.classList.toggle('hidden', idx === 0);
  btnNext.classList.toggle('hidden', idx === images.length - 1);
}

btnPrev.addEventListener('click', () => { if (idx > 0) { idx--; renderSlide(); } });
btnNext.addEventListener('click', () => { if (idx < images.length - 1) { idx++; renderSlide(); } });
btnClose.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', e => {
  if (!modal.classList.contains('is-open')) return;
  if (e.key === 'Escape')     closeModal();
  if (e.key === 'ArrowLeft')  { if (idx > 0) { idx--; renderSlide(); } }
  if (e.key === 'ArrowRight') { if (idx < images.length - 1) { idx++; renderSlide(); } }
});

// ── 뷰 전환 ──────────────────────────────────────────────
document.querySelectorAll('.nav-link[data-view]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById(link.dataset.view).classList.add('active');
    if (link.dataset.view === 'viewMoon') {
      requestAnimationFrame(fitLifeGrid);
    }
  });
});

// ── Moon 타이머 ───────────────────────────────────────────
const BIRTH = new Date(2001, 1, 14); // 2001년 2월 14일
const moonTimerEl = document.getElementById('moonTimer');

function pad(n, len = 2) {
  return String(n).padStart(len, '0');
}

function getElapsed() {
  const now  = new Date();
  const diff = now - BIRTH; // ms

  const ms   = diff % 1000;
  const s    = Math.floor(diff / 1000);
  const secs = s % 60;
  const m    = Math.floor(s / 60);
  const mins = m % 60;
  const h    = Math.floor(m / 60);
  const hrs  = h % 24;

  // 날짜 기반 연·월·일 계산
  let years  = now.getFullYear() - BIRTH.getFullYear();
  let months = now.getMonth()    - BIRTH.getMonth();
  let days   = now.getDate()     - BIRTH.getDate();

  if (days < 0) {
    months--;
    days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
  }
  if (months < 0) { years--; months += 12; }

  return { years, months, days, hrs, mins, secs, ms };
}

const lifeMetaEl = document.getElementById('lifeMeta');
const TOTAL_WEEKS = 80 * 52; // 4160

// ── 주 격자 빌드 ──────────────────────────────────────────
function buildLifeGrid() {
  const grid = document.getElementById('lifeGrid');
  const frag = document.createDocumentFragment();
  for (let i = 0; i < TOTAL_WEEKS; i++) {
    const cell = document.createElement('div');
    cell.className = 'week-cell';
    frag.appendChild(cell);
  }
  grid.appendChild(frag);
  updateLivedCells();
}

function updateLivedCells() {
  const weeksLived = Math.floor((new Date() - BIRTH) / (7 * 24 * 60 * 60 * 1000));
  const cells = document.getElementById('lifeGrid').children;
  for (let i = 0; i < cells.length; i++) {
    cells[i].className = 'week-cell' +
      (i < weeksLived  ? ' lived'   : '') +
      (i === weeksLived ? ' current' : '');
  }
  // 메타 텍스트
  const pct = ((weeksLived / TOTAL_WEEKS) * 100).toFixed(1);
  lifeMetaEl.textContent = `${weeksLived.toLocaleString()} / ${TOTAL_WEEKS.toLocaleString()} weeks  (${pct}%)`;
}

// 셀 크기를 가용 영역에 맞게 계산
function fitLifeGrid() {
  const wrap = document.querySelector('.life-grid-wrap');
  if (!wrap || !wrap.clientWidth) return;
  const GAP  = 2;
  const cellW = (wrap.clientWidth  - 51 * GAP) / 52;
  const cellH = (wrap.clientHeight - 79 * GAP) / 80;
  const cell  = Math.floor(Math.min(cellW, cellH));
  const grid  = document.getElementById('lifeGrid');
  grid.style.setProperty('--cell', cell + 'px');
  grid.style.setProperty('--gap',  GAP  + 'px');
}

// 타이머 (소형 표시)
function tickMoon() {
  const { years, months, days, hrs, mins, secs, ms } = getElapsed();
  moonTimerEl.textContent =
    `${pad(years)}.${pad(months)}.${pad(days)}.${pad(hrs)}:${pad(mins)}:${pad(secs)}:${pad(ms, 3)}`;
  requestAnimationFrame(tickMoon);
}

window.addEventListener('resize', () => {
  if (document.getElementById('viewMoon').classList.contains('active')) fitLifeGrid();
});

buildLifeGrid();
tickMoon();

// ── 인덱스 빌더 ──────────────────────────────────────────
const indexList  = document.getElementById('indexList');
const indexThumb = document.getElementById('indexThumb');

projects.forEach(project => {
  const row = document.createElement('div');
  row.className = 'index-row';

  const nameEl = document.createElement('span');
  nameEl.className = 'index-name';
  nameEl.textContent = project.name;

  const tagEl = document.createElement('span');
  tagEl.className = 'index-tag';
  tagEl.textContent = project.tag;

  const yearEl = document.createElement('span');
  yearEl.className = 'index-year';
  yearEl.textContent = project.year || '—';

  row.append(nameEl, tagEl, yearEl);

  // 호버 썸네일
  const thumbSrc = project.thumb.type === 'image' ? project.thumb.src : null;
  if (thumbSrc) {
    row.addEventListener('mouseenter', () => {
      indexThumb.src = thumbSrc;
      indexThumb.style.display = 'block';
    });
    row.addEventListener('mousemove', e => {
      indexThumb.style.left = `${e.clientX + 24}px`;
      indexThumb.style.top  = `${e.clientY - 80}px`;
    });
    row.addEventListener('mouseleave', () => {
      indexThumb.style.display = 'none';
    });
  }

  // 클릭 → 팝업
  const popupImgs = project.images.length > 0
    ? project.images
    : (project.thumb.type === 'image' ? [project.thumb.src] : []);
  row.addEventListener('click', () => {
    indexThumb.style.display = 'none';
    openModal(popupImgs, project.videos, project.desc);
  });

  indexList.appendChild(row);
});
