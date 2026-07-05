반도체 수율 분석 경험을 소개하는 정적 포트폴리오 사이트

## 구조

```
portfolio-site/
├── index.html                    # 소개 페이지 (헤더, 소개, 이력, 자격증/수상)
├── projects.html                  # 프로젝트 페이지 (필터 + 프로젝트 목록)
├── css/style.css
├── js/main.js                     # 프로젝트 필터
├── assets/profile.jpg              # 프로필 사진
├── assets/images/                  # 프로젝트 상세 페이지에 쓰이는 차트/사진
├── assets/docs/                   # 발표자료·보고서 원본 파일 (다운로드용)
└── projects/
    ├── yield-analysis.html         # 반도체 수율 분석(SECOM) 상세
    ├── llm-yield-automation.html   # LLM 기반 수율 예측 자동화 시스템 상세
    ├── dew-point.html              # 이슬점 예측 시뮬레이션 상세
    ├── myknowledgechatbot.html     # My Knowledge Chatbot 만들기 상세
    ├── virtual-metrology.html      # Virtual Metrology 연구 상세
    ├── wafer-defect.html           # 웨이퍼 결함 패턴 분류 시스템 상세
    ├── biochem-seminar.html        # CHEMIC 세미나(PEGylation) 상세
    └── battery-urp.html            # 배터리 분리막 URP 상세
```

메뉴는 "ABOUT"(index.html)과 "PROJECT"(projects.html) 두 개입니다. 헤더는 필기체 로고
"Haeun Roh" + 서브타이틀 + 메뉴가 세로로 중앙정렬되어 있습니다.

`assets/docs/`에는 실제 발표자료·포스터·보고서 원본(pptx/pdf/docx)이 들어 있어 각 상세 페이지의
"첨부 자료" 다운로드 버튼과 연결되어 있습니다. 총 용량이 40MB 이상이라 일반 GitHub 저장소에
그대로 올리기엔 다소 무거울 수 있으니, 필요하면 Git LFS 사용을 고려하세요.


## 프로젝트 계속 추가하기

`projects.html`의 프로젝트 목록은 개수를 고정하지 않고 계속 늘어나는 구조입니다.

1. `projects/` 폴더에 새 상세 페이지를 하나 복사해서 만드세요 (기존 파일을 템플릿으로 사용).
2. `projects.html`의 `.project-grid` 안, 점선 테두리의 "새 프로젝트가 계속 추가될 자리입니다" 카드(`.card-ghost`) **바로 앞**에 새 `<a href="projects/새파일.html" class="card" data-category="...">` 카드(대표 사진 + 제목)를 추가하세요.
3. `data-category`는 `simulation` / `data-analysis` / `llm` / `research` 중 해당하는 값(복수 가능, 공백으로 구분)을 넣거나, 새 카테고리를 추가하려면 `.filters`에 `<button class="filter-btn" data-filter="새카테고리">` 버튼도 함께 추가하세요.
4. 프로젝트가 학력·연구활동이기도 하다면, `index.html`의 History(이력) 목록에도 `.resume-item.ghost` 바로 앞에 항목을 추가하고 `<h4><a href="projects/새파일.html">...</a></h4>`로 링크를 걸어주세요.

## 로컬에서 미리보기

```
cd portfolio-site
python -m http.server 8080
```

이후 브라우저에서 http://localhost:8080 접속.

## 배포

GitHub Pages, Netlify, Vercel 중 아무 곳에나 폴더를 그대로 올리면 됩니다 (별도 빌드 과정 없음).
