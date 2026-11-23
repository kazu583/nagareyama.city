/**
 * ながれやま日和 共通イラスト＆動く電車クロス装飾スクリプト (decor.js)
 * 各HTMLの </body> の直前に <script src="decor.js"></script> を入れるだけで全ページに反映されます
 */
(function () {
    // 1. 共通アニメーション用CSSを自動で追加
    const style = document.createElement('style');
    style.textContent = `
        /* パノラマ街並み＆電車クロスバナー */
        .ng-panorama-wrap {
            width: 100%;
            overflow: hidden;
            position: relative;
            background: linear-gradient(to bottom, transparent 0%, rgba(191, 227, 220, 0.25) 60%, #f3f1ec 100%);
            padding-top: 30px;
            margin-top: 40px;
            line-height: 0;
        }
        .ng-panorama-svg {
            width: 100%;
            min-width: 900px;
            height: auto;
            display: block;
            margin: 0 auto;
        }
        /* 電車の走行アニメーション */
        @keyframes trainLeftToRight {
            0% { transform: translateX(-280px); }
            100% { transform: translateX(1520px); }
        }
        @keyframes trainRightToLeft {
            0% { transform: translateX(1520px); }
            100% { transform: translateX(-280px); }
        }
        @keyframes birdFloat {
            0%, 100% { transform: translateY(0px) translateX(0px); }
            50% { transform: translateY(-8px) translateX(10px); }
        }
        @keyframes cloudDrift {
            0% { transform: translateX(-40px); }
            100% { transform: translateX(40px); }
        }
        .tx-train {
            animation: trainLeftToRight 11s linear infinite;
        }
        .tobu-train {
            animation: trainRightToLeft 15s linear infinite;
        }
        .ryutetsu-train {
            animation: trainLeftToRight 20s linear infinite;
            animation-delay: -6s;
        }
        .ng-bird {
            animation: birdFloat 5s ease-in-out infinite;
        }
        .ng-cloud {
            animation: cloudDrift 18s ease-in-out infinite alternate;
        }

        /* セクション間のひょっこり装飾イラスト */
        .ng-section-deco {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            max-width: 920px;
            margin: 0 auto -18px;
            padding: 0 24px;
            pointer-events: none;
            position: relative;
            z-index: 6;
        }
        .ng-deco-item {
            width: 95px;
            height: auto;
            opacity: 0.92;
        }
        @media (max-width: 600px) {
            .ng-panorama-svg { min-width: 680px; }
            .ng-deco-item { width: 68px; }
        }
    `;
    document.head.appendChild(style);

    // 2. フッターの直前に「おおたかの森SC × 宿場町・蔵 × 3大電車クロス」のパノラマイラストを挿入
    const panoramaHTML = `
    <div class="ng-panorama-wrap" aria-hidden="true">
        <svg class="ng-panorama-svg" viewBox="0 0 1440 280" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- ふわふわ浮かぶ雲 -->
            <g class="ng-cloud" opacity="0.75">
                <path d="M140 55 C140 42, 160 38, 168 46 C176 34, 202 36, 208 48 C220 48, 224 62, 212 66 L146 66 C136 66, 134 57, 140 55 Z" fill="#ffffff"/>
                <path d="M740 42 C740 31, 758 28, 766 35 C776 24, 798 28, 804 38 C816 38, 820 50, 808 54 L746 54 C736 54, 734 45, 740 42 Z" fill="#ffffff"/>
                <path d="M1220 62 C1220 50, 1238 46, 1246 54 C1256 44, 1280 46, 1286 58 C1296 58, 1300 70, 1288 73 L1226 73 C1216 73, 1214 65, 1220 62 Z" fill="#ffffff"/>
            </g>

            <!-- 大空を舞うオオタカ -->
            <g class="ng-bird">
                <path d="M460 56 Q472 44 484 54 Q496 44 508 56 Q494 52 484 60 Q474 52 460 56 Z" fill="#498991"/>
                <path d="M525 38 Q533 30 541 37 Q549 30 557 38 Q547 35 541 41 Q535 35 525 38 Z" fill="#68a691"/>
            </g>

            <!-- 遠景のなだらかな森の丘 -->
            <path d="M0 210 Q180 155 380 190 T820 185 T1220 175 T1440 200 L1440 280 L0 280 Z" fill="#d8ece4" opacity="0.7"/>

            <!-- ====== 左エリア：おおたかの森S・C風の大きな商業施設＆森 ====== -->
            <g transform="translate(60, 72)">
                <!-- 本館（ガラス張りのモダン商業施設） -->
                <rect x="40" y="38" width="165" height="90" rx="8" fill="#ffffff" stroke="#8ab8ad" stroke-width="2.5"/>
                <rect x="52" y="50" width="38" height="26" rx="4" fill="#bfe3dc"/>
                <rect x="98" y="50" width="38" height="26" rx="4" fill="#bfe3dc"/>
                <rect x="144" y="50" width="48" height="26" rx="4" fill="#f6ead4"/>
                <rect x="52" y="84" width="60" height="44" rx="4" fill="#e5f3f0"/>
                <rect x="122" y="84" width="70" height="26" rx="4" fill="#bfe3dc"/>
                <!-- 屋上看板（SC風） -->
                <rect x="75" y="22" width="95" height="16" rx="4" fill="#f59e56"/>
                <text x="122" y="34" text-anchor="middle" fill="#fff" font-size="9.5" font-weight="700" font-family="sans-serif">OTAKANOMORI S・C</text>

                <!-- 隣接館（FLAPS / こかげテラス風） -->
                <rect x="215" y="58" width="96" height="70" rx="6" fill="#faf6f0" stroke="#c9b89e" stroke-width="2.5"/>
                <rect x="226" y="70" width="32" height="22" rx="3" fill="#f1dce3"/>
                <rect x="266" y="70" width="34" height="22" rx="3" fill="#bfe3dc"/>
                <!-- テラスパラソル -->
                <path d="M225 112 L245 102 L265 112 Z" fill="#e5979c"/>
                <line x1="245" y1="112" x2="245" y2="128" stroke="#5c6b6e" stroke-width="2"/>

                <!-- 市野谷の森の木々 -->
                <circle cx="24" cy="96" r="22" fill="#68a691"/>
                <rect x="21" y="114" width="6" height="16" fill="#8d6e63"/>
                <circle cx="332" cy="94" r="20" fill="#7bb89f"/>
                <circle cx="356" cy="104" r="16" fill="#498991"/>
                <rect x="330" y="110" width="5" height="18" fill="#8d6e63"/>
                <rect x="354" y="116" width="4" height="12" fill="#8d6e63"/>
            </g>

            <!-- ====== 中央エリア：公園で遊ぶ親子＆マルシェのテント ====== -->
            <g transform="translate(540, 118)">
                <!-- マルシェのテント -->
                <path d="M20 42 L34 20 L86 20 L100 42 Z" fill="#f59e56"/>
                <path d="M36 20 L48 42 L72 42 L84 20 Z" fill="#ffffff"/>
                <rect x="26" y="42" width="68" height="38" fill="#faf6f0" stroke="#d49553" stroke-width="2"/>
                <rect x="36" y="56" width="48" height="12" rx="2" fill="#bfe3dc"/>
                <!-- 散歩する親子 -->
                <circle cx="145" cy="40" r="7" fill="#f3d2b3"/>
                <path d="M137 49 L153 49 L156 78 L134 78 Z" fill="#e5979c"/>
                <circle cx="170" cy="52" r="5.5" fill="#f3d2b3"/>
                <path d="M164 59 L176 59 L178 78 L162 78 Z" fill="#5da9a6"/>
            </g>

            <!-- ====== 右エリア：流山本町の宿場町・白壁の蔵＆切り絵行灯 ====== -->
            <g transform="translate(860, 76)">
                <!-- 白壁の土蔵（白みりん蔵風） -->
                <path d="M26 52 L82 26 L138 52 Z" fill="#4a5559"/>
                <rect x="36" y="52" width="92" height="72" fill="#ffffff" stroke="#4a5559" stroke-width="2.5"/>
                <!-- なまこ壁風の格子 -->
                <rect x="36" y="96" width="92" height="28" fill="#e8e4dc" stroke="#4a5559" stroke-width="1.5"/>
                <rect x="66" y="64" width="32" height="24" rx="2" fill="#3b4246"/>
                <circle cx="82" cy="41" r="6" fill="#f6ead4"/>

                <!-- 宿場町・古民家カフェ -->
                <path d="M150 60 L205 34 L260 60 Z" fill="#6b5b52"/>
                <rect x="160" y="60" width="90" height="64" fill="#f6ead4" stroke="#6b5b52" stroke-width="2"/>
                <!-- 暖簾（のれん） -->
                <rect x="176" y="88" width="16" height="18" fill="#498991"/>
                <rect x="196" y="88" width="16" height="18" fill="#498991"/>
                <rect x="216" y="88" width="16" height="18" fill="#498991"/>
                <!-- 切り絵行灯（あんどん） -->
                <rect x="268" y="96" width="14" height="24" rx="2" fill="#ffe4a3" stroke="#d49553" stroke-width="2"/>
                <circle cx="275" cy="108" r="3" fill="#f59e56"/>

                <!-- 江戸川の松と桜 -->
                <circle cx="322" cy="86" r="22" fill="#f1a7b3"/>
                <circle cx="348" cy="96" r="18" fill="#f7c5cd"/>
                <rect x="320" y="106" width="5" height="18" fill="#8d6e63"/>
                <rect x="346" y="110" width="4" height="14" fill="#8d6e63"/>

                <!-- レトロな蔵もう1棟 -->
                <path d="M385 58 L430 36 L475 58 Z" fill="#4a5559"/>
                <rect x="394" y="58" width="72" height="66" fill="#ffffff" stroke="#4a5559" stroke-width="2"/>
                <rect x="414" y="72" width="32" height="22" fill="#d49553"/>
            </g>

            <!-- ====== 3つの鉄道路線（高架＆地上レールがクロス！） ====== -->
            <!-- 上段レール：TX（つくばエクスプレス）高架 -->
            <line x1="0" y1="212" x2="1440" y2="212" stroke="#b8c7c4" stroke-width="4"/>
            <line x1="0" y1="216" x2="1440" y2="216" stroke="#d8e3e0" stroke-width="2" stroke-dasharray="14 10"/>

            <!-- 中段レール：東武アーバンパークライン -->
            <line x1="0" y1="238" x2="1440" y2="238" stroke="#c9d6d3" stroke-width="3"/>

            <!-- 下段レール：流鉄流山線 -->
            <line x1="0" y1="264" x2="1440" y2="264" stroke="#d8cfc2" stroke-width="3" stroke-dasharray="8 6"/>

            <!-- 1. つくばエクスプレス（TX）左→右へ走行 -->
            <g class="tx-train">
                <g transform="translate(0, 186)">
                    <!-- 1両目 -->
                    <rect x="0" y="0" width="78" height="23" rx="6" fill="#ffffff" stroke="#3b4246" stroke-width="1.8"/>
                    <rect x="0" y="14" width="78" height="4" fill="#e05246"/>
                    <rect x="0" y="18" width="78" height="3" fill="#2d5a88"/>
                    <rect x="10" y="4" width="14" height="8" rx="1.5" fill="#bfe3dc"/>
                    <rect x="30" y="4" width="14" height="8" rx="1.5" fill="#bfe3dc"/>
                    <rect x="50" y="4" width="18" height="8" rx="1.5" fill="#bfe3dc"/>
                    <!-- 2両目（先頭） -->
                    <rect x="84" y="0" width="84" height="23" rx="7" fill="#ffffff" stroke="#3b4246" stroke-width="1.8"/>
                    <rect x="84" y="14" width="82" height="4" fill="#e05246"/>
                    <rect x="84" y="18" width="80" height="3" fill="#2d5a88"/>
                    <rect x="94" y="4" width="14" height="8" rx="1.5" fill="#bfe3dc"/>
                    <rect x="114" y="4" width="14" height="8" rx="1.5" fill="#bfe3dc"/>
                    <rect x="134" y="4" width="24" height="8" rx="2" fill="#498991"/>
                    <circle cx="163" cy="16" r="2" fill="#ffd166"/>
                </g>
            </g>

            <!-- 2. 東武アーバンパークライン 右→左へクロス走行 -->
            <g class="tobu-train">
                <g transform="translate(0, 213)">
                    <!-- 1両目（左先頭） -->
                    <rect x="0" y="0" width="80" height="22" rx="5" fill="#f7f9fa" stroke="#3b4246" stroke-width="1.6"/>
                    <rect x="0" y="13" width="80" height="3.5" fill="#2e86c1"/>
                    <rect x="0" y="16.5" width="80" height="3" fill="#76c442"/>
                    <rect x="8" y="4" width="16" height="7" rx="1.5" fill="#bfe3dc"/>
                    <rect x="30" y="4" width="16" height="7" rx="1.5" fill="#bfe3dc"/>
                    <rect x="52" y="4" width="16" height="7" rx="1.5" fill="#bfe3dc"/>
                    <!-- 2両目 -->
                    <rect x="85" y="0" width="76" height="22" rx="5" fill="#f7f9fa" stroke="#3b4246" stroke-width="1.6"/>
                    <rect x="85" y="13" width="76" height="3.5" fill="#2e86c1"/>
                    <rect x="85" y="16.5" width="76" height="3" fill="#76c442"/>
                    <rect x="95" y="4" width="16" height="7" rx="1.5" fill="#bfe3dc"/>
                    <rect x="117" y="4" width="16" height="7" rx="1.5" fill="#bfe3dc"/>
                    <rect x="139" y="4" width="14" height="7" rx="1.5" fill="#bfe3dc"/>
                </g>
            </g>

            <!-- 3. 流鉄流山線（可愛いピンクの「さくら」号2両編成）のんびり走行 -->
            <g class="ryutetsu-train">
                <g transform="translate(0, 240)">
                    <rect x="0" y="0" width="64" height="21" rx="5" fill="#f3a6b8" stroke="#6e4b53" stroke-width="1.6"/>
                    <rect x="0" y="13" width="64" height="3" fill="#ffffff"/>
                    <rect x="8" y="4" width="12" height="7" rx="1.5" fill="#fff"/>
                    <rect x="26" y="4" width="12" height="7" rx="1.5" fill="#fff"/>
                    <rect x="44" y="4" width="12" height="7" rx="1.5" fill="#fff"/>
                    <rect x="69" y="0" width="66" height="21" rx="5" fill="#f3a6b8" stroke="#6e4b53" stroke-width="1.6"/>
                    <rect x="69" y="13" width="66" height="3" fill="#ffffff"/>
                    <rect x="77" y="4" width="12" height="7" rx="1.5" fill="#fff"/>
                    <rect x="95" y="4" width="12" height="7" rx="1.5" fill="#fff"/>
                    <rect x="113" y="4" width="16" height="7" rx="1.5" fill="#fff"/>
                </g>
            </g>
        </svg>
    </div>`;

    // フッターを探して直前にパノラマを自動挿入
    const footer = document.querySelector('footer');
    if (footer) {
        footer.insertAdjacentHTML('beforebegin', panoramaHTML);
    }

    // 3. トップページ（index.html）のセクション間にひょっこりイラストを自動追加
    const cafeSection = document.getElementById('cafe');
    if (cafeSection) {
        const decoHTML = `
        <div class="ng-section-deco" aria-hidden="true">
            <!-- カフェカップとクロワッサン -->
            <svg class="ng-deco-item" viewBox="0 0 100 70" fill="none">
                <path d="M22 36 L58 36 L54 58 C53 63 27 63 26 58 Z" fill="#ffffff" stroke="#c58293" stroke-width="2.5"/>
                <path d="M58 40 C66 40 66 52 56 52" stroke="#c58293" stroke-width="2.5" fill="none"/>
                <path d="M32 28 Q35 20 32 14 M44 28 Q47 20 44 14" stroke="#f59e56" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <!-- お散歩親子 -->
            <svg class="ng-deco-item" viewBox="0 0 100 70" fill="none">
                <circle cx="38" cy="22" r="7" fill="#f3d2b3"/>
                <path d="M30 31 L46 31 L49 58 L27 58 Z" fill="#f59e56"/>
                <circle cx="64" cy="32" r="5.5" fill="#f3d2b3"/>
                <path d="M58 39 L70 39 L72 58 L56 58 Z" fill="#498991"/>
            </svg>
        </div>`;
        cafeSection.insertAdjacentHTML('afterbegin', decoHTML);
    }
})();
