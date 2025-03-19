import Link from "next/link";
import "./globals.css";

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-text">
        <h1 className="home-h1">리그 오브 레전드 정보 앱</h1>
        <p className="home-p">Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.</p>
      </div>

      {/* 링크 카드 */}
      <div className="link-container">
        {/* 챔피언 목록 */}
        <Link href="/champions">
          <div
            className="link-card"
            style={{
              backgroundImage: `url("https://www.pixground.com/beemo-teemo-skin-league-of-legends-4k-wallpaper/?download-img=2k&preview=yes")`,
            }}
          >
            <span>챔피언 목록</span>
          </div>
        </Link>

        {/* 챔피언 로테이션 */}
        <Link href="/rotation">
          <div
            className="link-card"
            style={{
              backgroundImage: `url("https://www.pixground.com/crystal-rose-yuumi-skin-league-of-legends-4k-wallpaper/?download-img=2k&preview=yes")`,
            }}
          >
            <span>챔피언 로테이션</span>
          </div>
        </Link>

        {/* 아이템 목록 */}
        <Link href="/items">
          <div
            className="link-card"
            style={{
              backgroundImage: `url("https://www.pixground.com/heimerdinger-arcane-season-2-4k-wallpaper/?download-img=2k&preview=yes")`,
            }}
          >
            <span>아이템 목록</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
