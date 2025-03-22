const API_KEY = "24389e417dab46d993c05972e27b7ab0"; // 여기에 새로 발급받은 API 키를 입력하세요.
const API_URL = "https://api.football-data.org/v4/matches";

async function getFootballMatches() {
    try {
        const response = await fetch(API_URL, {
            headers: {
                "X-Auth-Token": API_KEY,
                "Accept": "application/json" // JSON 형식으로 요청
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP 오류 발생! 상태 코드: ${response.status}`);
        }

        const data = await response.json();
        console.log("📅 경기 일정:", data);
    } catch (error) {
        console.error("⚠️ 데이터를 가져오는 중 오류 발생:", error);
    }
}

getFootballMatches();
