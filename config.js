/*
  SWORDMASTER 포트폴리오 설정 파일
  - 글자와 사진은 모두 이 파일에서 바꿉니다. (index.html 은 건드릴 필요 없어요)
  - 견적 금액은 아래 pricing 안의 price 에만 숫자로 입력하세요. 예: price: 30000
    price 가 null 이면 화면에 금액 없이 "상담 후 안내"로 표시됩니다.
  - 작은 미리보기 사진은 media/thumbs/<폴더>/<번호>.jpg 에 있어요. 같은 이름으로 사진을 교체하면 그 썸네일 파일도 지우거나 같이 교체하세요.
*/
window.PORTFOLIO = {
  "site": {
    "title": "SWORDMASTER",
    "titleFont": true,
    "tagline": "3D AVATAR PORTFOLIO",
    "subtitle": "취향과 콘셉트에 맞춰 서로 다른 매력을 설계합니다.",
    "cta": {
      "label": "아트머그에서 상담하기",
      "url": "https://artmug.kr/index.php?channel=view&uid=61223#ankerQ"
    }
  },
  "intro": {
    "eyebrow": "SWORDMASTER : FORGE YOUR AVATAR",
    "title": "한눈에 기억되는,\n당신만의 버추얼 아바타",
    "desc": "취향을 세심하게 담아 개성 있는 얼굴과 표정을 만듭니다.\n검증된 제작 과정으로 빠르고 꼼꼼하게 진행합니다.",
    "tags": [
      "VRM",
      "VSF",
      "VRC",
      "성형",
      "페이셜"
    ],
    "image": "media/hero/01.png",
    "imageRatio": "1/1",
    "imageCaption": ""
  },
  "options": {
    "allowMultiple": true,
    "lightbox": true,
    "autoHeight": true,
    "showConsultButtons": false
  },

  /* ---- 포트폴리오 ---- */
  "faces": {
    "title": "개성이 다른 얼굴들",
    "lead": "취향과 콘셉트에 맞춰 서로 다른 매력을 설계합니다.",
    "items": [
      { "src": "media/faces/01.png", "title": "" },
      { "src": "media/faces/02.png", "title": "" },
      { "src": "media/faces/03.png", "title": "" },
      { "src": "media/faces/04.png", "title": "" }
    ]
  },
  /* 보유 아바타 목록. 사진은 media/avatars/번호.png, link 에 BOOTH 주소를 넣으면 "BOOTH 보기 ↗" 가 나타나요. */
  "ownedAvatars": {
    "title": "보유 아바타",
    "lead": "현재 작업 가능한 보유 아바타 목록입니다. 목록에 없는 아바타는 신물로 보내주셔야 작업이 가능합니다.",
    "items": [
      { "name": "카구야", "src": "media/avatars/01.png", "link": "" },
      { "name": "시오", "src": "media/avatars/02.png", "link": "" },
      { "name": "모에", "src": "media/avatars/03.png", "link": "" },
      { "name": "마누카", "src": "media/avatars/04.png", "link": "" },
      { "name": "밀티나", "src": "media/avatars/05.png", "link": "" },
      { "name": "시나노", "src": "media/avatars/06.png", "link": "" },
      { "name": "아이리", "src": "media/avatars/07.png", "link": "" },
      { "name": "마요", "src": "media/avatars/08.png", "link": "" },
      { "name": "밀피", "src": "media/avatars/09.png", "link": "" },
      { "name": "에쿠", "src": "media/avatars/10.png", "link": "" },
      { "name": "초콜렛", "src": "media/avatars/11.png", "link": "" },
      { "name": "플럼", "src": "media/avatars/12.png", "link": "" },
      { "name": "셀레스티아", "src": "media/avatars/13.png", "link": "" },
      { "name": "미사키", "src": "media/avatars/14.png", "link": "" },
      { "name": "루미나", "src": "media/avatars/15.png", "link": "" },
      { "name": "루루네", "src": "media/avatars/16.png", "link": "" }
    ]
  },
  "portfolioTitle": "포트폴리오",
  "portfolioLead": "",
  "sections": [
    {
      "id": "plastic",
      "title": "성형",
      "subtitle": "",
      "mediaType": "image",
      "columns": 3,
      "ratio": "1/1",
      "count": 6,
      "folder": "media/plastic",
      "ext": "jpg",
      "items": [
        { "title": "", "desc": "", "src": "media/plastic/01.png", "type": "image" },
        { "src": "media/plastic/02.png", "type": "image" },
        { "src": "media/plastic/03.png", "type": "image" },
        { "src": "media/plastic/04.png", "type": "image" },
        { "src": "media/plastic/05.png", "type": "image" },
        { "src": "media/plastic/06.png", "type": "image" }
      ]
    },
    {
      "id": "facial",
      "title": "페이셜",
      "subtitle": "실제 페이셜 작업 영상",
      "mediaType": "video",
      "columns": 2,
      "ratio": "16/9",
      "count": 2,
      "folder": "media/facial",
      "ext": "mp4",
      "items": [
        { "title": "", "desc": "", "src": "media/facial/01.mp4", "type": "video" },
        { "src": "media/facial/02.mp4", "type": "video" }
      ]
    },
    {
      "id": "texture",
      "title": "텍스쳐",
      "tab": "텍스처",
      "subtitle": "이미지 작업물",
      "mediaType": "image",
      "columns": 3,
      "ratio": "1/1",
      "count": 5,
      "folder": "media/texture",
      "ext": "jpg",
      "items": [
        { "src": "media/texture/01.png", "type": "image" },
        { "src": "media/texture/02.png", "type": "image" },
        { "src": "media/texture/03.png", "type": "image", "compare": true },
        { "src": "media/texture/04.png", "type": "image" },
        { "src": "media/texture/05.png", "type": "image", "compare": true }
      ]
    },
    {
      "id": "poing-eye",
      "title": "뽀잉눈",
      "subtitle": "예시입니다 제작시 맞춤제작 합니다!",
      "mediaType": "video",
      "columns": 2,
      "ratio": "16/9",
      "count": 1,
      "folder": "media/poing-eye",
      "ext": "mp4",
      "items": [
        { "title": "", "desc": "", "src": "media/poing-eye/01.mp4", "type": "video" }
      ]
    },
    {
      "id": "adopt-avatar",
      "title": "분양 아바타",
      "standalone": true,
      "subtitle": "분양 가능한 아바타",
      "columns": 3,
      "ratio": "1/1",
      "count": 1,
      "folder": "media/adopt",
      "ext": "jpg",
      "items": [
        {
          "title": "원본[Airi]",
          "desc": "헤어, 옷, 페이셜 수정, 뽀잉눈 등 부가사항 추가 가능",
          "price": "",
          "link": "#",
          "src": "media/adopt/01.png",
          "type": "image"
        }
      ]
    },
    {
      "id": "unity-photo",
      "title": "유니티 사진촬영",
      "tab": "유니티 사진",
      "subtitle": "리뷰 작성 시 1장 무료 촬영",
      "mediaType": "image",
      "columns": 3,
      "ratio": "1/1",
      "count": 4,
      "folder": "media/unity-photo",
      "ext": "png",
      "items": [
        { "src": "media/unity-photo/01.png", "type": "image" },
        { "src": "media/unity-photo/02.png", "type": "image" },
        { "src": "media/unity-photo/03.png", "type": "image" },
        { "src": "media/unity-photo/04.png", "type": "image" }
      ]
    },
    {
      "id": "notice",
      "title": "상세설명 및 주의사항",
      "subtitle": "의뢰시 확인 부탁 드립니다",
      "images": [
        "media/notice/01.png",
        "media/notice/02.png"
      ],
      "imageRatio": "4/5"
    }
  ],

  /* ---- 의뢰 안내 ---- */
  "guide": {
    "title": "의뢰 안내",
    "strengthsTitle": "정석은 탄탄하게, 디자인은 개성 있게",
    "strengths": [
      { "icon": "shield", "title": "안정적이고 정석적인 작업 과정", "desc": "상담부터 파일 전달까지 정해진 순서로 진행해요." },
      { "icon": "bolt",   "title": "빠른 작업 속도", "desc": "일정에 맞춰 빠르게 작업해요." },
      { "icon": "spark",  "title": "개성 있고 매력적인 얼굴", "desc": "취향에 맞춰 서로 다른 분위기의 얼굴을 만들어요." }
    ],
    "processTitle": "작업 진행 과정",
    "process": [
      { "icon": "chat", "title": "상담",     "desc": "원하는 콘셉트와 일정 확인" },
      { "icon": "doc",  "title": "견적·주문", "desc": "작업 범위와 옵션 확정" },
      { "icon": "tool", "title": "제작",     "desc": "결제 확인 후 성형·페이셜 작업 진행" },
      { "icon": "box",  "title": "파일 전달", "desc": "완성 파일 전달" }
    ],
    "noticeHead": { "en": "COMMISSION NOTICE", "title": "의뢰 전, 확인해 주세요", "sub": "원활한 작업을 위한 의뢰 안내 및 주의사항", "foot": "안내사항을 확인하신 후 의뢰해 주세요." },
    "notices": [
      { "title": "작업물 보관 기간은 한 달입니다", "lines": ["작업물은 의뢰자님께 전달한 날부터 한 달간 보관합니다.", "추후 의뢰를 위해 보관 기간 연장이 필요하신 경우,", "기간이 만료되기 전에 미리 말씀해 주세요."] },
      { "title": "파츠의 저작권과 이용약관을 확인해 주세요", "lines": ["파츠에 따라 상업적 이용이 제한되거나 출처 표기가 필요할 수 있습니다.", "의뢰 전, 사용하실 파츠의 저작권과 이용약관 등 안내사항을", "반드시 확인해 주세요.", "이와 관련된 저작권 문제로 발생하는 불이익은 작가가 책임지지 않습니다."] },
      { "title": "페이셜 트래킹이 가능한 기기가 필요합니다", "lines": ["Face ID를 지원하는 아이폰 또는 아이패드가 필요합니다.", "기기의 iOS는 사용할 페이셜 트래킹에 필요한 버전 이상이어야 합니다."] },
      { "title": "원하시는 결과물을 자세히 알려 주세요", "lines": ["캐릭터의 분위기와 특징을 상세히 설명해 주실수록", "원하시는 느낌에 더 가깝게 작업할 수 있습니다.", "작업 중에도 원하시는 부분을 세세하게 말씀해 주세요.", "눈치 보지 마시고 편하게 의견을 전해 주세요!"] },
      { "title": "모든 의뢰는 상담 후 결제해 주세요", "lines": ["불필요한 결제나 금액 착오를 방지하기 위해", "모든 의뢰는 작가와 상담을 마친 후 결제해 주세요.", "작업 내용과 최종 금액을 안내받으신 뒤 결제 부탁드립니다."] },
      { "title": "부스 관련 기프트는 양측 구매가 원칙입니다", "lines": ["부스 기프트(아이템 등)는 양측 구매가 원칙이므로,", "작가가 보유하고 있지 않은 파츠의 경우 의뢰자님께서 구매하여 전달해 주세요.", "부스로 보내주신 에셋이나 부스 구매 비용은 어떠한 경우에도", "환불이 불가능하니 신중한 확인 후 전달 부탁드립니다."] },
      { "title": "모든 커미션은 포트폴리오 샘플로 이용될 수 있습니다", "lines": ["완성된 작업물은 작가의 포트폴리오, SNS, 홍보용 등의 목적으로", "일부 수정 후 공개될 수 있습니다.", "공개를 원하지 않으시는 경우, 의뢰 전 미리 말씀해 주세요."] },
      { "title": "이런 작업들은 받지 않습니다", "lines": ["아바타 100% 풀 모델링 작업은 받지 않고 있습니다.", "또한 저작권 침해의 가능성이 있는 캐릭터, 선정적이거나", "폭력성이 다소 포함된 의뢰들은 진행이 어렵습니다.", "이외에도 작가의 판단에 따라 작업이 어려운 주제는 정중히 거절될 수 있습니다."] },
      { "title": "모든 작업은 결제 확인 후에 시작됩니다", "lines": ["원활한 작업 진행을 위해, 모든 작업은 결제 확인 후에 시작됩니다.", "결제가 완료된 순서에 따라 작업 일정이 안내되며,", "결제 전에는 작업이 진행되지 않으니 양해 부탁드립니다."] },
      { "title": "한 분 한 분 정성스럽게 작업하고 있습니다", "lines": ["작가는 양심의 손을 얹고, 꼼꼼한 과정을 거쳐", "한 분 한 분 정성스럽게 작업하고 있습니다.", "작가의 개인적인 역량보다 어려운 의뢰는", "더 높은 퀄리티를 위해 부득이하게 거절될 수 있는 점 양해 부탁드립니다!"] }
    ]
  },

  /* ---- 예상 견적 미리보기 ----
     price 에 숫자를 넣으면 그 금액이 합계에 반영됩니다. null 이면 "상담 후 안내"로 표시돼요.
     모든 price 가 null 인 동안에는 합계 금액을 보여주지 않습니다. */
  "pricing": {
    "title": "예상 견적 미리보기",
    "lead": "옵션을 고르면 선택 내역을 바로 정리해 드려요.",
    "currency": "원",
    "checkedAt": "",
    /* 아트머그 메뉴판 그대로. price(원) 대신 percent 를 쓰면 "전체 주문금액의 n%" 추가금, price 를 비우면 "문의", unit 이 있으면 개수를 고를 수 있어요, header 는 선택 못 하는 안내 줄이에요. */
    "menu": [
      {
        "id": "debut",
        "label": "데뷔세트",
        "options": [
          {
            "label": "블렌더 성형 + ARkit 52가지 페이셜 + VRM 세팅 + VSF 기본 세팅 + 헤어1 + 의상1",
            "price": 320000
          },
          {
            "label": "원화기반 블렌더 성형 + ARkit 52가지 페이셜 + VRM 세팅 + VSF 기본 세팅 + 헤어1 + 의상1",
            "price": 350000
          }
        ]
      },
      {
        "id": "own",
        "label": "개인작 구매",
        "options": [
          {
            "label": "[Airi] 분양 아바타 섹션 참고바랍니다 !",
            "price": 350000
          }
        ]
      },
      {
        "id": "plastic",
        "label": "성형",
        "options": [
          {
            "label": "유니티 성형",
            "price": 70000
          },
          {
            "label": "블렌더 성형",
            "price": 100000
          },
          {
            "label": "블렌더 성형(원화 기반)",
            "price": 130000
          }
        ]
      },
      {
        "id": "facial",
        "label": "페이셜",
        "options": [
          {
            "label": "ARkit 52가지 페이셜",
            "price": 220000
          },
          {
            "label": "페이셜 완성 후 수정",
            "price": 70000
          },
          {
            "label": "고난이도 페이셜(세모 입, 토끼입 등)",
            "price": 50000
          }
        ]
      },
      {
        "id": "vrm",
        "label": "VRM",
        "options": [
          {
            "label": "VRM 기본 세팅 (기본 페이셜 세팅, mtoon 변환 등)",
            "price": 30000
          }
        ]
      },
      {
        "id": "vsf",
        "label": "VSF",
        "options": [
          {
            "label": "VSF 기본 세팅 (시뮬레이션, 콜라이더 등)",
            "price": 50000
          }
        ]
      },
      {
        "id": "vrc",
        "label": "VRC",
        "options": [
          {
            "label": "=== VRC 레벨 New User 이상만 업로드 가능합니다 ===",
            "header": true
          },
          {
            "label": "== 적어둔 것 외에는 VSF아바타 추가금들과 동일합니다 ==",
            "header": true
          },
          {
            "label": "VRC 아바타 (유니티 성형 + 헤어1 + 의상1 + 밝기조절/셰이더 + 표정뚫림 수정)",
            "price": 80000
          },
          {
            "label": "오마카세 VRC 아바타 (유니티 성형 + 보유중인 헤어1 + 보유중인 의상1 + 밝기조절/셰이더 + 표정뚫림 수정)",
            "price": 100000
          },
          {
            "label": "원화기반 VRC 아바타 (블렌더 성형 + 헤어1 + 의상1 + 밝기조절/셰이더 + 표정뚫림 수정)",
            "price": 130000
          },
          {
            "label": "전용 헤어 또는 전용 의상 추가(옷장 포함)",
            "price": 10000
          },
          {
            "label": "악세사리 추가(귀, 꼬리, 네일 등)",
            "price": 5000
          },
          {
            "label": "헤어, 의상 뚫림 방지 컬라이더",
            "price": 30000
          }
        ]
      },
      {
        "id": "ddu",
        "label": "뚜따",
        "options": [
          {
            "label": "바디 뚜따 ex) A헤드 + B바디",
            "price": 30000
          },
          {
            "label": "의상 뚜따 ex) A의상 상의 + B의상 하의",
            "price": 20000
          },
          {
            "label": "헤어 뚜따 ex) A헤어 앞머리 + B헤어 뒷머리",
            "price": 20000
          }
        ]
      },
      {
        "id": "extra",
        "label": "추가",
        "options": [
          {
            "label": "전용 헤어 추가(옷장 미포함)",
            "price": 10000
          },
          {
            "label": "비전용 헤어 추가(옷장 미포함)",
            "price": 15000
          },
          {
            "label": "전용 의상 추가(옷장 미포함)",
            "price": 20000
          },
          {
            "label": "악세사리 추가 (귀, 꼬리, 네일 등)",
            "price": 10000
          },
          {
            "label": "뽀잉눈(말랑눈) 추가",
            "price": 30000
          },
          {
            "label": "동물 귀 애니메이션 추가",
            "price": 20000
          },
          {
            "label": "옷장 추가(의상 또는 헤어가 2개 이상일 경우)",
            "price": 5000
          }
        ]
      },
      {
        "id": "rush",
        "label": "빠른 마감",
        "options": [
          {
            "label": "=== 문의 부탁드립니다! ===",
            "header": true
          },
          {
            "label": "빠른 마감(3-4일) 전체 주문금액의 50% 추가금",
            "percent": 50
          },
          {
            "label": "당일 마감 전체 주문금액의 75% 추가금",
            "percent": 75
          }
        ]
      },
      {
        "id": "etc",
        "label": "기타",
        "options": [
          {
            "label": "유니티 패키지 추가",
            "price": 50000
          },
          {
            "label": "포트폴리오 영구 비공개",
            "price": 50000
          },
          {
            "label": "버추얼 아바타를 VRC아바타로 사용 가능하게 변경 (가격 변동 O)",
            "price": 50000
          },
          {
            "label": "VRC아바타를 버츄얼 아바타로 사용 가능하게 변경 << 문의",
            "price": null
          }
        ]
      },
      {
        "id": "photo",
        "label": "유니티 사진 촬영",
        "options": [
          {
            "label": "오마카세 포즈 장당",
            "price": 5000,
            "unit": "장"
          },
          {
            "label": "자율 커스텀 포즈 장당",
            "price": 10000,
            "unit": "장"
          }
        ]
      }
    ],
    "notes": [
      "모델 상태나 세부 작업 범위에 따라 금액이 달라질 수 있어요.",
      "이 화면은 미리 보는 용도예요. 최종 금액은 아트머그 상담에서 안내받은 금액으로 결제됩니다."
    ],
    "copyIntro": "[SWORDMASTER 견적 문의]",
    "copyFooter": "원하는 분위기 / 참고 이미지 / 희망 일정:",
    "agree": "의뢰 전 확인사항을 읽었어요",
    "button": "이 구성으로 아트머그에 문의하기",
    "copyButton": "선택 내용만 복사"
  },

  /* ---- 신청 정보 입력칸 ----
     견적 아래에 입력칸이 나오고, 적은 내용이 "복사" 글에 함께 들어가요. type 은 "text"(한 줄) 또는 "area"(여러 줄). 칸을 지우면 그 칸이 사라져요. */
  "form": {
    "lead": "미리 적어 두면 상담이 빨라져요. 비워 두어도 괜찮아요.",
    "fields": [
      { "id": "nick",    "type": "text", "label": "방송 닉네임 / 방송국 링크", "placeholder": "닉네임과 방송국 링크를 적어 주세요." },
      { "id": "concept", "type": "area", "label": "컨셉 · 참고 이미지",       "placeholder": "원하는 분위기나 특징을 자유롭게 적어 주세요. 참고 이미지가 있다면 링크로 적어 주세요." },
      { "id": "parts",   "type": "area", "label": "사용할 파츠 링크",         "placeholder": "BOOTH 등에서 찾아 두신 파츠가 있다면 링크를 적어 주세요." },
      { "id": "extra",   "type": "area", "label": "추가 문의사항",           "placeholder": "궁금한 점이나 요청사항을 적어 주세요." }
    ]
  },

  /* ---- 자주 묻는 질문 ----
     실제 질문과 답을 아래 형식으로 넣으면 "질문" 섹션과 메뉴가 나타나요. 비어 있으면 표시되지 않아요.
     예: { "q": "작업 기간은 얼마나 걸리나요?", "a": "답변 내용" } */
  "faqTitle": "자주 묻는 질문",
  "faq": [],

  /* ---- 후기 ----
     실제 이용 후기를 아래 형식으로 넣으면 후기 섹션과 메뉴가 자동으로 나타납니다. 비어 있으면 표시되지 않아요.
     예: { "text": "후기 내용", "name": "작성자 표시", "image": "media/reviews/01.png" } */
  "reviews": [],

  "contact": {
    "show": false,
    "title": "내 아바타, 같이 만들어볼까요?",
    "desc": "모든 의뢰는 상담 후 결제로 진행돼요.",
    "label": "아트머그에서 상담하기",
    "url": "https://artmug.kr/index.php?channel=view&uid=61223#ankerQ"
  }
};
