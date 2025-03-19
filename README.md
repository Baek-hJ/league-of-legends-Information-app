# 🎮 리그 오브 레전드 정보 앱 (Next.js + Riot API)

## 📌 소개
리그 오브 레전드 챔피언 및 아이템 정보를 Riot Games API를 활용하여 제공하는 웹 애플리케이션입니다.  
챔피언 목록, 챔피언 상세 정보, 무료 챔피언 로테이션, 아이템 목록을 확인할 수 있습니다.

---

## 🛠️ 기술 스택
- **프레임워크**: [Next.js](https://nextjs.org/) (14+)
- **언어**: TypeScript
- **스타일링**: Tailwind CSS
- **데이터 관리**: React Query (`@tanstack/react-query`)
- **API 통신**: Riot Games API
- **배포**: Vercel

---

## 🚀 주요 기능
### ✅ 챔피언 목록 (`/champions`)
- **Incremental Static Regeneration (ISR)** 방식으로 챔피언 목록을 렌더링합니다.
- 챔피언 썸네일과 이름을 표시하며, 클릭 시 상세 페이지로 이동합니다.

### ✅ 챔피언 상세 페이지 (`/champions/[id]`)
- **서버 사이드 렌더링 (SSR)** 을 활용하여 특정 챔피언의 상세 정보를 가져옵니다.
- 챔피언의 이름, 타이틀, 설명, 능력치를 표시합니다.
- SEO 최적화를 위해 **메타데이터**를 동적으로 설정합니다.

### ✅ 챔피언 로테이션 (`/rotation`)
- **클라이언트 사이드 렌더링 (CSR)** 을 사용하여 무료 챔피언 로테이션 데이터를 실시간으로 가져옵니다.
- Riot Games API에서 제공하는 무료 챔피언 목록을 표시합니다.

### ✅ 아이템 목록 (`/items`)
- **정적 사이트 생성 (SSG)** 을 사용하여 모든 아이템 목록을 정적으로 빌드합니다.
- 아이템의 이름과 아이콘을 표시합니다.

---

## 🛠️ 프로젝트 실행 방법

### 1️⃣ 환경 변수 설정
`.env.local` 파일을 생성하고, Riot Games API 키를 추가하세요.

```sh
RIOT_API_KEY=your-api-key
```

### 2️⃣ 패키지 설치
```sh
npm install
```

### 3️⃣ 개발 서버 실행
```sh
npm run dev
```
- 기본적으로 http://localhost:3000 에서 실행됩니다.

---

## 📡 배포 방법 (Vercel)

### 1️⃣ Vercel CLI 설치 및 로그인
```sh
npm install -g vercel
vercel login
```

### 2️⃣ 배포 실행
```sh
vercel
```
또는 GitHub과 연동하여 자동 배포를 설정할 수도 있습니다.

---

## 🔧 주요 API 엔드포인트
### 🔹 챔피언 목록 가져오기 (서버 API)
- 엔드포인트: /api/champions
- HTTP 메서드: GET
- 설명: 최신 버전의 챔피언 데이터를 Riot API에서 가져와 반환합니다.
  
### 🔹 특정 챔피언 상세 정보
- 엔드포인트: /api/champions/[id]
- HTTP 메서드: GET
- 설명: 특정 챔피언의 상세 정보를 가져옵니다.

### 🔹 챔피언 로테이션 목록
- 엔드포인트: /api/rotation
- HTTP 메서드: GET
- 설명: 현재 무료 챔피언 로테이션 데이터를 Riot API에서 가져옵니다.

### 🔹 아이템 목록 가져오기
- 엔드포인트: /api/items
- HTTP 메서드: GET
- 설명: 최신 아이템 데이터를 Riot API에서 가져옵니다.

---

## 🛠️ 프로젝트 폴더 구조

```python
📦 my-app
├── 📂 src
│   ├── 📂 app
│   │   ├── 📂 champions
│   │   │   ├── 📜 page.tsx   # 챔피언 목록 페이지 (ISR)
│   │   │   ├── 📂 [id]
│   │   │   │   ├── 📜 page.tsx   # 챔피언 상세 페이지 (SSR)
│   │   ├── 📂 rotation
│   │   │   ├── 📜 page.tsx   # 챔피언 로테이션 페이지 (CSR)
│   │   ├── 📂 items
│   │   │   ├── 📜 page.tsx   # 아이템 목록 페이지 (SSG)
│   │   ├── 📜 layout.tsx
│   │   ├── 📜 globals.css
│   ├── 📂 components
│   │   ├── 📜 ChampionCard.tsx
│   │   ├── 📜 ItemCard.tsx
│   ├── 📂 utils
│   │   ├── 📜 serverApi.ts  # Riot API 호출 함수
│   ├── 📂 query
│   │   ├── 📜 useChampionDataQuery.ts
│   │   ├── 📜 useItemDataQuery.ts
├── 📜 package.json
├── 📜 next.config.js
├── 📜 README.md
```

---

## 🏆 개발 목표
- ✅ Riot Games API를 활용하여 동적인 데이터 제공
- ✅ Next.js의 ISR, SSR, CSR, SSG 렌더링 방식을 활용
- ✅ React Query와 Server Actions로 최적화된 데이터 페칭 구현

---

## 📌 추가 기능 예정
- 소환사 정보 검색 기능 추가
- 챔피언 스킬 및 능력치 그래프 제공
- 다크 모드 지원
- 챔피언별 승률 및 통계 데이터 추가

---

## 🔧 트러블슈팅 (오류 해결)

| 원인 | 시도한 해결 방법 | 결과 |
|------|---------------|------|
| **ISR 적용 후 최신 데이터가 반영되지 않음** | `revalidate: 86400` 값이 정상적으로 설정되었는지 확인 후 API 응답에 변경 사항 있는지 점검 | ✅ 해결 완료 |
| **클라이언트에서 API 호출 시 403 오류 발생** | Riot API 요청 헤더에 `"X-Riot-Token": API_KEY` 추가 | ✅ 해결 완료 |
| **Next.js에서 `getStaticProps` 지원하지 않음** | Server Actions 또는 fetch 사용 방식으로 변경 | ✅ 해결 완료 |
| **환경 변수 적용이 되지 않음** | `.env.local` 파일 생성 후 `next.config.js`에서 `dotenv` 패키지 적용 | ✅ 해결 완료 |
---

## 📄 라이선스
이 프로젝트는 Riot Games API 이용 약관을 준수하며, Riot Games와 직접적인 관련이 없습니다.

---

## 🎮 배포 링크🚀
https://league-of-legends-information-app-lilac.vercel.app/


