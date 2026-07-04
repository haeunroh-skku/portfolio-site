# 노하은 포트폴리오 사이트

반도체 수율 분석 경험을 소개하는 정적 포트폴리오 사이트입니다.

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
    ├── dew-point.html              # 이슬점 예측 시뮬레이션 상세
    ├── notebookllm.html            # NotebookLLM 만들기 상세
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

**보안 참고:** `하이포_챗.ipynb`(NotebookLLM 프로젝트 원본 노트북)에는 Google API 키가
하드코딩되어 있어 의도적으로 `assets/docs/`에 포함하지 않았습니다. 이 노트북을 다른 곳에
공유했다면 해당 키를 폐기(revoke)하고 재발급받은 뒤, 코드에서는 환경 변수/시크릿 매니저로
분리해 사용하는 것을 권장합니다.

## 아직 채워야 할 것

- **SECOM 프로젝트 대표 사진**: GitHub 노트북에 저장된 차트가 없어 비어 있습니다. Feature
  Importance 그래프 등을 다시 만들거나 캡처해서 `assets/images/`에 넣고
  `projects.html` · `projects/yield-analysis.html`의 `[ 대표 사진 자리 ]`를 교체하세요.
- **배터리 URP 결과 이미지**: 제출하신 연구활동계획서(연구 시작 전 계획서)에는 이미지가 없어
  본문은 연구 목표·방법 중심으로만 작성했습니다. 접촉각/이온전도도 실험 결과나 최종 보고서가
  있으면 `projects/battery-urp.html`에 결과 섹션을 추가하겠습니다.
- **NotebookLLM 대표 사진 / 스크린샷**: 원본 노트북에 저장된 이미지 출력이 없어 비어 있습니다.
  챗봇 UI 스크린샷이 있으면 넣어주세요.

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
