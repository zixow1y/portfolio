/* ==========================================================
   포트폴리오 설정 파일 — 이 파일만 수정하면 됩니다.
   index.html 은 건드리지 않아도 돼요.

   ■ 섹션마다 정하는 것
   id         : 주소용 영문 이름 (섹션마다 달라야 함)
   title      : 섹션 제목
   subtitle   : 제목 옆 설명
   open       : true 면 처음부터 펼쳐진 상태 (기본은 접힘)
   columns    : 데스크톱 한 줄 카드 수 (모바일은 자동으로 줄어듦)
   ratio      : 카드 사진 비율 예) '4/5' '1/1' '16/9'
   mediaType  : 'image' → 이미지(jpg/png/webp/gif)만 / 'video' → MP4만
                'any' 또는 생략 → 확장자를 보고 자동 구분

   view       : 'gallery'(기본) → 큰 화면 하나 + 아래 썸네일, ◀ ▶ 로 넘겨보기
                'grid'          → 처음부터 전체 카드를 격자로 보기
                (섹션 안에서 방문자가 [갤러리 / 전체 보기]를 직접 바꿀 수도 있어요)
   stageRatio : 갤러리 큰 화면 비율 예) '4/3' '1/1' '16/9' (기본 4/3)

   ※ 사진을 누르면 전체화면으로 열리고, ◀ ▶ 버튼·키보드 방향키·좌우 스와이프로 넘길 수 있어요.

   ★ 사진 개수 바꾸기: 각 섹션(성형·페이셜·텍스쳐·뽀잉눈·보유아바타·분양아바타)의
     count 숫자만 고치면 됩니다. 사진 파일은 01, 02, 03 … 번호 순서로 올려주세요.

   ■ 카드 개수를 정하는 두 가지 방법
   방법 1) 숫자로 정하기 (추천)
     count : 8          → 카드 8개가 자동 생성됩니다.
     folder: 'media/plastic'
     ext   : 'jpg'      → media/plastic/01.jpg ~ 08.jpg 를 자동으로 불러옴
     (ext 를 생략하면 image 는 jpg, video 는 mp4)
     카드 몇 개만 제목/가격을 넣고 싶으면 items 에 순서대로 적으세요.
       items: [ { title:'1번 제목', price:'50,000원' }, { title:'2번 제목' } ]
     → 숫자만 바꾸면 카드가 늘거나 줄어듭니다.

   방법 2) 카드를 하나씩 직접 적기
     items: [ { src:'media/a.jpg', title:'제목' }, ... ]   (count 는 쓰지 않음)

   ■ 카드(item) 항목
   src / poster(영상 썸네일, 선택) / title / desc / price / link
   span(1~3칸 차지) / ratio(카드별 비율)
   ========================================================== */

window.PORTFOLIO = {
  site: {
    title: "STUDIO NAME",                 // 사이트 제목 (스텔라체로 표시돼요. 직접 고치세요)
    titleFont: true,                      // false 로 바꾸면 스텔라체 대신 기본 서체
    subtitle: "작업물과 상품을 한곳에서 확인하세요",
    cta: { label: "상담 문의", url: "#" },   // 버튼을 없애려면 cta: null
  },

  /* ===== 소개 영역 (섹션들 바로 위의 칸) — 아래 글씨를 자유롭게 고치세요 =====
     eyebrow : 제목 위 작은 글씨 (지금은 INTRO — 원하는 글자로 바꾸거나, 필요 없으면 줄 삭제)
     title   : 소개 제목 (\n 으로 줄바꿈)
     desc    : 아래 부가 설명 글 (\n 으로 줄바꿈)
     tags    : 태그 목록 (필요 없으면 줄 삭제)
     소개 칸 전체를 없애려면 intro: null                                        */
  intro: {
    eyebrow: "INTRO",
    title: "소개 제목을\n입력하세요",
    desc: "간단한 설명을 여기에 적어주세요.\n작업물이나 상품 소개, 작업 방식, 이용 안내 등을 짧게 적을 수 있어요.",
    tags: ["태그 1", "태그 2", "태그 3"],
  },

  options: {
    allowMultiple: true,   // true: 여러 섹션 동시에 펼치기 / false: 하나만 펼치기
    lightbox: true,        // 카드 클릭 시 크게 보기
    autoHeight: true,      // iframe 임베드 시 높이 자동 전달
  },

  sections: [
    {
      id: "plastic",
      title: "성형",
      subtitle: "이미지 작업물",
      open: false,
      mediaType: "image",          // 이미지 전용
      columns: 3,
      ratio: "4/5",
      count: 6,                    // ← 카드 개수
      folder: "media/plastic",     // media/plastic/01.jpg ~ 06.jpg
      ext: "jpg",
      items: [
        { title: "작업물 제목 1", desc: "설명을 입력하세요" },
      ],
    },
    {
      id: "facial",
      title: "페이셜",
      subtitle: "MP4 영상 작업물",
      open: false,
      mediaType: "video",          // MP4 전용
      columns: 3,
      ratio: "16/9",
      count: 4,                    // ← 카드 개수
      folder: "media/facial",      // media/facial/01.mp4 ~ 04.mp4
      ext: "mp4",
      items: [
        { title: "페이셜 1", desc: "설명을 입력하세요" },
      ],
    },
    {
      id: "poing-eye",
      title: "뽀잉눈",
      subtitle: "뽀잉눈 작업물",
      open: false,
      columns: 4,
      ratio: "1/1",
      count: 4,                    // ← 카드 개수 (숫자만 바꾸세요)
      folder: "media/poing-eye",   // media/poing-eye/01.jpg ~ 04.jpg
      ext: "jpg",
      items: [
        { title: "뽀잉눈 1", desc: "설명을 입력하세요" },
        // GIF/영상을 섞고 싶으면 해당 번호 카드에 src 를 직접 적으세요. 예) { src: "media/poing-eye/02.gif" }
      ],
    },
    {
      id: "owned-avatar",
      title: "보유아바타",
      subtitle: "현재 보유 중인 아바타",
      open: false,
      mediaType: "image",          // 사진 전용 (영상 없음)
      columns: 2,
      ratio: "4/5",
      count: 2,                    // ← 사진 개수 (1~2장, 숫자만 바꾸세요)
      folder: "media/owned",       // media/owned/01.jpg ~ 02.jpg
      ext: "jpg",
      items: [
        { title: "아바타 이름 1", desc: "설명을 입력하세요" },
      ],
    },
    {
      id: "adopt-avatar",
      title: "분양아바타",
      subtitle: "분양 가능한 아바타",
      open: false,
      columns: 3,
      ratio: "4/5",
      count: 3,                    // ← 카드 개수 (숫자만 바꾸세요)
      folder: "media/adopt",       // media/adopt/01.jpg ~ 03.jpg
      ext: "jpg",
      items: [
        { title: "분양 아바타 1", desc: "설명을 입력하세요", price: "[분양가 입력]", link: "#" },
        { title: "분양 아바타 2", desc: "설명을 입력하세요", price: "[분양가 입력]", link: "#" },
        { title: "분양 아바타 3", desc: "설명을 입력하세요", price: "[분양가 입력]", link: "#" },
      ],
    },
    {
      id: "notice",
      title: "주의사항",
      subtitle: "이용 전 꼭 확인해 주세요",
      open: false,
      // 주의사항을 이미지(사진)로 만들어 넣는 칸이에요. 1~3장.
      // 권장 규격: 세로형 4:5 비율 (예: 1080 × 1350px), jpg/png.
      // 같은 비율로 만들어 올리면 카드 크기가 딱 맞고, 다른 비율이어도 잘리지 않고 통째로 보여요.
      images: ["media/notice/01.jpg", "media/notice/02.jpg"],
      imageRatio: "4/5",           // 카드 비율 (세로형 4/5, 정사각형 1/1, 가로형 16/9 등)
      // 이미지 대신 글로 쓰고 싶으면 위 images 줄을 지우고 아래처럼 notes 를 쓰세요.
      // notes: ["[주의사항 1]", "[주의사항 2]"],
    },

    /* 섹션을 더 추가하려면 위 블록을 복사해서 id 와 title 만 바꾸세요. */
  ],
};
