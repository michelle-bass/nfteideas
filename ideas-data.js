/* 기후·재난 비즈니스 아이디어 포트폴리오 — 콘텐츠 원본
 * 이 파일의 텍스트·수치·URL은 확정본이다. Claude Code는 이 내용을 수정·추가·윤색하지 않는다.
 * references: url이 null인 항목은 미검증 — 링크로 렌더링 금지, "※미확인" 배지 표시.
 * numbers 안의 [n]은 references 배열의 n번째(1부터) 항목을 가리킨다. "(추정)"은 유도 계산.
 * category: "heatwave" | "outage" | "flood" | "drought"
 */
window.IDEAS = [

/* ================= 폭염 (11) ================= */
{
  id: "H1", category: "heatwave",
  title: "AI 맞춤 차양 설계 키트",
  subtitle: "한옥 처마의 원리를 AI 태양 궤적 계산으로 — 창마다 맞춤 재단되는 탈부착 외부 차양",
  region: "일반형 (한국 모듈: 처마 기하 · 발(簾) 자동 개폐)",
  concept: "한옥 처마는 태양 고도가 높은 여름 햇빛은 막고 낮은 겨울 햇빛은 들이는 수동 설계다. 사용자가 주소와 창의 방향·크기를 입력하면 태양 궤적 계산으로 그 창에 맞는 최적의 차양 길이와 각도를 산출하고, 맞춤 재단된 탈부착 차양 키트를 배송한다. 자석·흡착 방식으로 임차인도 건물 손상 없이 설치·철거할 수 있다. 차양 '판'이 아니라 '설계'를 파는 것이 차별점이다.",
  science: "태양 복사는 유리를 통과한 뒤 실내에서 장파(열)로 재방출되어 갇힌다(온실 효과). 따라서 같은 차양이라도 유리 바깥에 있어야 효과가 크다. 여름 남중고도가 높아 짧은 돌출로도 차단된다는 처마의 원리는 태양 적위·시간각의 결정론적 기하라서 공개 라이브러리로 계산 가능하다.",
  numbers: "효과적인 실외 차양 시스템은 태양열 획득의 90% 이상을 차단할 수 있다[1]. 미 DOE Building America 자료 기준 실내 롤러 셰이드는 태양열 획득을 약 18% 줄이는 데 그치지만 실외 셰이드는 약 55%를 줄인다(2차 인용)[2]. 런던 아파트 비교 실험에서는 외부 블라인드가 실내 열 축적을 40% 감소시켰다[3].",
  economics: "차양은 작동 전력이 0이므로 절감액이 곧 순이익 구조다. 냉방 수요 자체를 줄여 하절기 전력망 피크를 완화하므로 폭염→과부하→정전 악순환을 끊는 서사(GENIUS 환경 연계)와, 시공비 제거·맞춤 설계 창조(Blue Ocean ERRC) 양쪽 논리가 선다.",
  checks: ["냉방 절감 효과 시뮬레이션의 검증 방법 설계 필요", "DOE 원문(Building America Solution Center) 직접 확인 필요 — 현재 2차 인용", "반사 소재 사용 시 눈부심 민원 대응 설계"],
  references: [
    { label: "BNP CE Center — 실외/실내 차양 시스템 해설 (실외 90%+ 차단)", url: "https://continuingeducation.bnpmedia.com/courses/multi-aia/understanding-the-benefits-of-interior-and-exterior-shading-systems/2/", verified: true },
    { label: "DOE Building America 수치의 2차 인용 (실내 18% / 실외 55%)", url: "https://www.blindsgalore.com/blog/index.php/beyond-basics/interior-vs-exterior-solar-screens/", verified: true },
    { label: "BBSA 런던 실측 소개 — 외부 블라인드 열 축적 40% 감소", url: "https://kensingtonblinds.uk/can-internal-blinds-stop-overheating/", verified: true }
  ],
  related: ["H2", "H9"]
},
{
  id: "H2", category: "heatwave",
  title: "PCM 열 저장 천장 타일",
  subtitle: "낮에 녹으며 열을 흡수하고 밤에 굳는 상변화물질 타일 — 충전 상태를 색으로 표시",
  region: "일반형",
  concept: "학교 교실, 소형 상점, 컨테이너 건물의 기존 천장에 한 장씩 끼우는 타일 안에 상변화물질(PCM, Phase-Change Material)을 넣는다. 낮에는 PCM이 녹으면서 실내 열을 흡수해 온도 상승을 완화하고, 밤에는 환기·외기로 다시 굳혀 다음 날 재사용한다. 가장자리 색 변화 표시로 충전(재응고) 상태를 눈으로 확인하며, 한 장씩 교체할 수 있어 공사가 필요 없다. 기존 건축용 PCM이 벽체 매립형인 것과 달리 교체형+상태 표시가 차별점이다.",
  science: "상변화물질은 융해 시 잠열(latent heat)로 온도 상승 없이 다량의 열을 흡수한다. 설치 위치별로 최적 융점이 다르다는 것이 문헌으로 확인되어, 융점 선정 자체가 학생의 실험 주제가 된다.",
  numbers: "PCM 석고보드는 일반 석고보드 대비 실내 최고온도를 최대 2~3°C 낮추고 24시간 온도 변동폭을 약 15~20% 좁혔다[1]. 1cm 두께 PCM 층으로 실내온도 2.18°C 저감·피크 냉방부하 20.9% 감소가 보고됐고, 벽·천장 PCM 적용 시 7월 실내 온도 변동이 46% 감소했다(Berardi)[2]. 스페인 실험 건물에서는 여름 전력 소비 15% 감소[3]. 지붕 요소에는 융점 37~42°C PCM이 천장 피크 온도를 최대 10°C 낮추고 피크 열 유입을 절반 이하로 줄일 수 있다[4]. 한국의 열대야 리스크: 2024년 열대야 일수 24.5일은 1973년 이래 1위 기록[5].",
  economics: "오전에 미리 냉방하며 PCM을 굳혀 오후 전력 피크를 피하는 선냉방 운용과 결합하면 전기요금(계시별 요금) 절감 논리가 붙는다. 무전력으로 작동하므로 정전 중에도 완충 효과가 유지된다.",
  checks: ["열대야에는 밤 기온이 융점 아래로 내려가지 않아 재응고 실패 가능 — 융점 선정·실측 검증이 성패의 핵심", "PCM 재료의 안전성(가연성 여부)·비용 확인"],
  references: [
    { label: "MDPI Buildings 2024 — PCM 석고보드 하계 성능", url: "https://www.mdpi.com/2075-5309/14/11/3387", verified: true },
    { label: "MDPI Energies 2025 — PCM 건물 통합 리뷰 (2.18°C, 20.9%, Berardi 46%)", url: "https://www.mdpi.com/1996-1073/18/12/3200", verified: true },
    { label: "PMC — PCM 주거 건물 리뷰 (Castell 2008, 전력 15% 감소)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12072427/", verified: true },
    { label: "ScienceDirect — 지붕용 PCM 융점 37~42°C 효과", url: "https://www.sciencedirect.com/science/article/abs/pii/S2451904925001635", verified: true },
    { label: "질병관리청 — 2024년 온열질환·열대야 기록", url: "https://www.kdca.go.kr/board/board.es?mid=a20501000000&bid=0015&list_no=726239&cg_code=&act=view&nPage=3&newsField=202410", verified: true }
  ],
  related: ["P4", "H1"]
},
{
  id: "H3", category: "heatwave",
  title: "냉각 카트리지 교환·스왑 네트워크",
  subtitle: "표준 규격 PCM 카트리지 + 편의점·현장 교환소 — 장비 소유를 없애는 구독 모델",
  region: "일반형 (인도 모듈: 뭄바이 다바왈라식 배터리 릴레이)",
  concept: "두 부분으로 구성된다. 첫째, 목밴드·냉각조끼·작업복에 공통으로 끼우는 표준 규격 PCM 냉각 카트리지 — 제품마다 냉각팩 규격이 달라 호환이 안 되는 문제를 해결하는 '면도기-면도날' 구조다. 둘째, 편의점·주유소·건설현장에 설치하는 교환소 냉각함 — 녹은 카트리지를 반납하면 냉각된 것을 바로 받는다. 일권·월권과 건설사·농장 단체 이용권으로 판매한다. 지역 모듈로, 뭄바이의 다바왈라(도시락 릴레이 배달 조직) 방식을 응용해 정전 잦은 도시에서 충전 배터리 카트리지를 릴레이 교환하는 확장이 가능하다.",
  science: "PCM은 융점에서 잠열로 냉기를 저장·방출한다. 카트리지 방식의 핵심은 소재가 아니라 규격의 통일 — 호환성이 곧 제품이다.",
  numbers: "지불 논리의 뼈대: ILO는 1.5°C 온난화 경로 기준 2030년 전 세계 노동시간의 2.2%(정규직 8,000만 명분)가 폭염으로 손실되고 연 2조 4천억 달러의 경제 손실이 발생하며, 남아시아·서아프리카는 노동시간 약 5% 손실을 전망했다[1]. 예시 계산(추정): 일당 15만 원 노동자가 작업시간의 5%를 잃으면 하루 7,500원 손실 — 카트리지 일 대여료가 이보다 낮으면 기업 입장에서 성립한다. 검증: 150,000×0.05=7,500 / 시급 18,750원×8h×5%=7,500 (일치).",
  economics: "고가 냉각 장비의 소유 제거, 초기 비용 감소, 교환 인프라 창조 — ERRC 구조가 명확해 Blue Ocean 대표 후보다. 기업의 산재 예방·생산성 비용이 지불 주체라 B2B 수익이 안정적이다.",
  checks: ["PCM 조끼의 생리적 효과(심부체온·작업능률) 수치 미확보 — 산업안전 문헌 검색 필요", "피부 접촉 제품 세척·위생 기준", "교환소 거점 밀도 설계", "기존 battery swap 상용 서비스와의 차별화 조사(배터리 확장판)"],
  references: [
    { label: "ILO 2019 — Working on a Warmer Planet 발표 (2.2%, 8,000만, $2.4조)", url: "https://www.ilo.org/resource/news/increase-heat-stress-predicted-bring-productivity-loss-equivalent-80", verified: true }
  ],
  related: ["P4"]
},
{
  id: "H4", category: "heatwave",
  title: "취약가구 체크인 + 공동체 대응망",
  subtitle: "오프라인 우선 체크인 장치와 두레·bayanihan식 이웃 봉사망의 결합",
  region: "일반형 (한국: 두레·품앗이 / 필리핀: bayanihan 모듈)",
  concept: "독거노인 등 폭염 취약가구에 설치하는 오프라인 우선 체크인 장치. 실내 온습도가 위험 수준에 도달하면 먼저 소리·불빛으로 본인에게 알리고, 버튼으로 '괜찮음'을 응답하게 한다. 일정 시간 무응답이면 저전력 통신으로 가족·관리기관에 알린다. 백업배터리를 내장해 인터넷 공유기가 꺼져도 작동한다. 여기에 공동체 대응망을 결합한다: 알림 발생 시 사전 등록된 이웃·학생 봉사자의 위치·가용 시간을 계산해 가장 가까운 사람에게 방문을 배정 — '알림만 있고 대응이 없다'는 감지형 서비스의 공통 약점을 해결한다. 지불 주체는 지자체 복지예산.",
  science: "온열질환은 조기 개입(수분·냉방·이송)으로 예방 가능한 피해이며, 경보와 아웃리치가 사망률을 낮춘다는 것이 도시 규모에서 실증되어 있다(아마다바드).",
  numbers: "표적의 정확성: 2024년 한국 온열질환자 3,704명(사망 34명) 중 65세 이상이 30.4%, 인구 10만 명당 발생률은 80세 이상(15.4명)에서 최고였고, 사망의 82.4%가 실외 발생, 사인의 94.1%가 열사병이었다[1]. 개입 효과의 증거: 인도 아마다바드 Heat Action Plan은 도입 전 최고기온 47°C인 날 사망률이 40°C 대비 2배 이상이었으나 도입 후 25% 높은 수준으로 줄었고, 연간 약 1,190명의 사망을 회피시킨 것으로 평가된다(Hess et al. 2018)[2].",
  economics: "'아마다바드가 도시 단위로 한 것을 가구 단위 센서+이웃망으로 내린다'가 피치의 뼈대다. 취약계층은 지불 능력이 낮으므로 지자체·가족 지불 모델이 필수 — 예방된 의료·구급 비용이 설득 근거가 된다.",
  checks: ["위치·건강 정보 수집에 따른 개인정보 이슈 검토", "한국 지자체 폭염 취약가구 지원 예산 규모 확인"],
  references: [
    { label: "질병관리청 — 2024년 온열질환 응급실감시체계 운영결과", url: "https://www.kdca.go.kr/board/board.es?mid=a20501000000&bid=0015&list_no=726239&cg_code=&act=view&nPage=3&newsField=202410", verified: true },
    { label: "Hess et al. 2018 — 아마다바드 HAP 평가 (J. Environ. Public Health)", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6236972/", verified: true }
  ],
  related: ["P2", "P8", "H6"]
},
{
  id: "H5", category: "heatwave",
  title: "지중 냉각",
  subtitle: "연중 일정한 땅속 온도의 활용 — 한국형 장독대 매립 저장고 / 남아시아형 지중 관로 냉방",
  region: "지역 모듈 2종: 한국(장독대) / 남아시아·이란(카나트·스텝웰 원리)",
  concept: "일정 깊이 이하의 땅속 온도는 연중 거의 일정하다는 원리를 쓴다. 한국형은 김장독을 땅에 묻던 장독대 전통을 잇는 매립형 저장고로, 마당·텃밭·옥상 화단에 묻는 소형 용기에 온습도 센서를 결합해 폭염기 채소 보관과 정전 시 냉장 백업을 겸한다(고객: 시장 상인·농가·학교 텃밭 — 아파트 불가). 남아시아·이란형은 카나트(qanat)·스텝웰의 원리를 잇는 지중 매설관(earth-air tube)으로, 외기를 땅속 관에 통과시켜 식힌 뒤 소형 팬으로 농촌 학교·보건소에 공급한다.",
  science: "토양의 큰 열관성 때문에 지하 2~3m 온도는 연중 거의 일정하고 여름엔 외기보다 낮다[1]. 약 3~6m 깊이는 매우 안정적인 열 환경으로, 그 온도는 지역 연평균 기온 수준이다[3]. 깊이 2m 미만은 온도 진폭이 커 불리하고 10m에서 진폭이 사실상 0이 된다. 증발냉각과 달리 습도의 영향을 받지 않는 것이 한국 여름에 유리한 점이다.",
  numbers: "직경 0.075m·깊이 3m 지중 열교환기에서 공기 온도 최대 약 22.1°C 저감이 보고됐다[1]. 지중 열교환 냉방 COP는 여름 5.94, 지열원 히트펌프는 3.1~4.8 수준[4] — 에어컨과 비슷하거나 높은 효율을 저전력으로 얻는다. 비용 절충 설계 지침으로 깊이 5m·길이 80m가 권장된 사례가 있다[2].",
  economics: "전기를 거의 쓰지 않아 운영비가 사실상 0이고, 폭염 저장과 정전 냉장 백업을 겸해 두 주제를 하나의 제품으로 잇는다. 전통 지혜의 복원 서사가 GENIUS에 적합하다.",
  checks: ["한국 깊이별 지중 온도 실측 수치(기상청·문헌) 확인", "매립 저장고의 배수·침수 대책", "위생(토양 접촉) 설계"],
  references: [
    { label: "Applied Energy — 고온다습 기후 지중 열교환기 실측 (2~3m 항온, 22.1°C)", url: "https://www.sciencedirect.com/science/article/abs/pii/S0306261920310059", verified: true },
    { label: "MDPI Energies 2025 — EAHE 리뷰 (항온층 5~15m, 설계 변수)", url: "https://www.mdpi.com/1996-1073/18/5/1017", verified: true },
    { label: "Oxford IJLCT — 3~6m 안정층 = 연평균 기온", url: "https://academic.oup.com/ijlct/article/4/3/150/709654", verified: true },
    { label: "PMC — 점토 용기 지중 열교환 실험 (COP 수치)", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11289094/", verified: true }
  ],
  related: ["H11", "D2"]
},
{
  id: "H6", category: "heatwave",
  title: "Vav AI Cooling Stop",
  subtitle: "인도 Ahmedabad — stepwell 원리의 반지하 냉각 쉼터 모듈, AI 열지도로 배치",
  region: "지역 출발형: Ahmedabad·Gujarat, 인도",
  concept: "서인도의 stepwell(vav)은 지하로 내려가는 계단식 우물로, 깊은 구조·그늘·돌의 열 저장성으로 시원한 공간을 만들던 전통 시설이다. 이 원리를 버스정류장·시장 휴게공간용 소형 반지하 냉각 모듈로 재해석한다. 바닥 일부를 낮추고 두꺼운 흙·석재 벽과 차양을 설치하며, 지붕에서 모은 빗물을 내부 벽면에 순환시킨다. AI의 역할: 도시 열지도로 시간대별 가장 뜨거운 정류장·시장을 찾아 설치 우선순위를 정하고, 온도·습도·이용자 수에 따라 물 순환·소형 팬을 제어한다. 공간 전체가 아니라 앉는 자리 주변만 냉각해 물과 전력을 아낀다.",
  science: "돌·흙의 큰 열용량(축열)이 낮 최고온도를 완충하고, 그늘+증발이 체감온도를 낮춘다. 반지하 구조는 지중 온도 안정성(H5 참조)도 부분적으로 활용한다.",
  numbers: "문제의 크기: 2010년 아마다바드 폭염(최고 46.8°C)에서 5월 한 달에만 초과 사망 1,344명, 기저 사망률 대비 43.1% 증가가 보고됐다[1]. 대응 효과: 2013년 도입된 Heat Action Plan이 연간 약 1,190명의 사망을 회피시킨 것으로 평가된다[1].",
  economics: "'개입 효과가 실증된 도시에서, 경보(정보)의 다음 단계인 인프라(냉각 쉼터)를 제안한다'는 논리 구조. 지자체 HAP 예산이 지불 주체 후보다.",
  checks: ["반지하 모듈의 실제 온도 저감폭 시제품 실측", "물 사용량·배수·미끄럼·모기 발생 대책", "몬순기 고습 환경에서의 냉각 효과", "현지 파트너 기관(AMC·IIPH-G 등) 접점 — '왜 한국 학생이?'에 대한 답"],
  references: [
    { label: "Hess et al. 2018 — 아마다바드 HAP 평가 (2010년 1,344명 초과사망, 연 1,190명 회피)", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6236972/", verified: true }
  ],
  related: ["H4", "H5"]
},
{
  id: "H7", category: "heatwave",
  title: "Smart Badgir Retrofit",
  subtitle: "이란 Yazd — 수백 년 된 windcatcher를 풍향 자동 루버·먼지 필터로 현대화한 소형 키트",
  region: "지역 출발형: Yazd, 이란 및 중동 건조지역",
  concept: "badgir(windcatcher, 바람탑)는 바람을 잡아 실내로 내려보내는 사막 도시의 무전력 냉방 건축이다. 이를 기존 학교·상점·저소득 주택의 창문·지붕에 설치하는 소형 retrofit 키트로 만든다. 전통 badgir는 고정형이라 바람 방향이 바뀌면 효율이 급락한다 — 현대화 지점은 여기다: 풍향에 맞춰 내부 루버가 자동으로 방향을 바꾸고, 외기가 실내보다 시원할 때만 바람을 들이며, 모래·먼지가 많은 날은 필터를 닫고, 밤에는 실내의 뜨거운 공기를 배출한다. AI가 시간대별 풍향·외부온도·실내 축열을 학습해 개폐를 결정한다.",
  science: "바람의 동압을 이용한 자연 환기(wind-driven ventilation)로, 기류 증가는 피부의 증발 냉각을 촉진해 같은 온도에서도 열 쾌적을 개선한다.",
  numbers: "풍속 4m/s·외기 23°C 조건에서 windcatcher가 최대 9.6kW의 수동 냉방력을 제공할 수 있고, 연평균 이하 풍속(2.5m/s)에서도 CIBSE 기준 환기량을 충족하며, 2.5~4m/s에서 환기 공간의 50~80%에서 열 쾌적을 제공한다는 결과가 있다[1]. 참고 비교(추정): 9.6kW는 가정용 벽걸이 에어컨(2.5~3.2kW급) 약 3~4대분 냉방력에 해당(9.6÷2.5≈3.8, 9.6÷3.2≈3.0 — 일치). windcatcher에 증발냉각을 결합하면 더운 계절 냉방 부하를 73% 줄일 수 있다는 시뮬레이션도 있다[2].",
  economics: "무전력 환기이므로 에어컨이 없거나 전기가 불안정한 지역에서 유일한 대안급이며, 필터·루버 등 소모품이 반복 수익원이 된다.",
  checks: ["저풍속일 성능·필터 저항·유지관리 부담", "일반 환기팬 대비 비용 비교", "고정형 대비 자동 루버의 성능 이득 정량화(풍동/CFD — 학생 과제로 적합)"],
  references: [
    { label: "Nejat et al. 2021, J. Building Engineering — Badgir 냉방력·쾌적 (9.6kW)", url: "https://www.sciencedirect.com/science/article/abs/pii/S235271022100293X", verified: true },
    { label: "연구 초록 모음 — windcatcher+증발냉각 냉방부하 73% 감소", url: "https://eurekamag.com/research/099/652/099652586.php", verified: true }
  ],
  related: ["H5"]
},
{
  id: "H8", category: "heatwave",
  title: "AI Uchimizu Street Cooling",
  subtitle: "일본 도시 — 전통 물뿌리기를 빗물 기반의 조건부 정밀 살수 시스템으로",
  region: "지역 출발형: Tokyo 등 일본 고밀도 도시",
  concept: "우치미즈(uchimizu)는 길·마당에 물을 뿌려 증발열로 주변을 식히는 17세기부터의 일본 전통이다. 이를 행사성 이벤트가 아닌 정밀한 도시 열관리 서비스로 바꾼다: 빗물·처리수를 모아두었다가, 냉각 효과가 실제로 발생할 기상 조건에서만, 필요한 구간(통학로·시장·정류장)에만 소량 살수한다. AI가 기온·습도·풍속·그늘·보행자 수를 분석해 시점·위치·수량을 결정하고, 물은 다공성 보도블록에 천천히 공급한다.",
  science: "물의 증발잠열 ≈ 2.45 MJ/kg(상온, 교과서 상수)이므로 1L 증발 = 약 0.68kWh의 열 흡수(추정: 2,450÷3,600=0.681). 100m² 도로에 1mm 살수(=100L)가 전량 증발하면 약 68kWh의 열을 흡수한다(추정: 100×2.45MJ=245MJ÷3.6=68.1kWh — 두 경로 일치). 다만 습도가 높으면 증발이 억제되어 효과가 급감한다 — 이것이 '조건부 살수'의 근거다.",
  numbers: "TU Delft의 3D 분산 온도 측정 연구(Solcerova et al. 2018)에서 젖은 지면 위 0~2m 공기 온도가 마른 지면보다 일관되게 1~2°C 낮았고, 그늘진 표면에서는 최대 8.3°C의 냉각 효과가 나타났으며, 물 1mm와 2mm 사이에 뚜렷한 차이가 없었고(침투 손실), 초기 지면 온도가 낮을수록 효과가 컸다[1][2]. 마지막 두 발견이 정확히 'AI 최적화가 필요한 이유'다 — 한낮에 많이 뿌리는 직관적 방식이 비효율임을 실측이 보여준다.",
  economics: "물이 빗물·재활용수라 원수 비용이 낮고, 지자체 폭염 대책 예산·상점가 조합이 지불 주체 후보다. '물 1L당 냉각량'이라는 명확한 효율 지표로 성과 계약이 가능하다.",
  checks: ["물 1L당 표면온도 감소·지속시간의 현장 실측", "미끄럼 안전", "고습일 효과 한계의 정직한 명시"],
  references: [
    { label: "Solcerova et al. 2018, Water — Uchimizu 3D 실측 (1~2°C, 최대 8.3°C)", url: "https://www.mdpi.com/2073-4441/10/6/741", verified: true },
    { label: "TU Delft 연구 소개 (phys.org)", url: "https://phys.org/news/2017-04-traditional-japanese-uchimizu-technique-cool.html", verified: true }
  ],
  related: ["H10"]
},
{
  id: "H9", category: "heatwave",
  title: "Bhunga Cool Panel",
  subtitle: "인도 Kutch — 지역 흙·섬유 단열패널을 금속지붕에 부착, 장인의 문양을 입혀서",
  region: "지역 출발형: Kutch, Gujarat, 인도",
  concept: "Kutch 지역에는 원통형 진흙집 bhunga와 자수·직물·도예 수공예 전통이 있다. 지역의 흙과 식물섬유로 만든 얇은 모듈형 단열 패널을, 여름에 극도로 뜨거워지는 현대식 금속지붕 건물에 부착한다 — 전통집을 새로 짓는 게 아니라 전통 재료의 원리를 현대 건물에 이식하는 접근이다. 스마트폰 열화상으로 건물의 뜨거운 부위를 찾고 패널 부착 위치·수량을 계산해 주며, 패널 표면에 지역 장인의 전통 미장·문양을 적용해 지역 경제·문화 서사를 더한다. 손상 시 작은 조각 단위로 교체한다.",
  science: "흙 소재는 금속 대비 열용량이 크고 열전도율이 낮아 낮 최고온도를 완충하고 열 유입을 지연시킨다. 단, bhunga 자체의 냉각 성능 정량 자료는 아직 확보하지 못했다(아래 ※).",
  numbers: "지붕 처리로 얻을 수 있는 효과의 규모 참고치: 미 EPA 기준 비냉방 주거 건물에서 쿨루프는 실내 최고온도를 1.2~3.3°C 낮추고[1], 자메이카 저소득 주택 실측에서 차열 도장 후 천장 내면 온도가 평균 6.8°C, 실내 공기가 2.3°C 내려갔다[2]. ※흙 패널 자체의 수치는 미확보 — 시제품 비교 실측(일반 금속지붕 vs 패널 부착)이 카드의 핵심 실험이다.",
  economics: "재료가 현지 흙·섬유라 원가가 낮고, 장인 협업으로 지역 소득 서사가 붙는다. 문양 덕에 '단열재'가 아니라 '장식재'로 팔리는 지불 동기 전환이 가능하다.",
  checks: ["bhunga·흙 단열의 열성능 기술자료 검증(문헌 검색 필요)", "방수·균열·곰팡이·무게·화재안전", "일반 단열재 대비 성능·가격 비교"],
  references: [
    { label: "US EPA — 쿨루프의 실내온도 저감 (1.2~3.3°C)", url: "https://www.epa.gov/heatislands/using-cool-roofs-reduce-heat-islands", verified: true },
    { label: "Energy & Buildings — 자메이카 저소득 주택 차열 도장 실측", url: "https://www.sciencedirect.com/science/article/pii/S037877881733743X", verified: true }
  ],
  related: ["H1"]
},
{
  id: "H10", category: "heatwave",
  title: "Khus 증발냉각 스마트 스크린",
  subtitle: "북인도·파키스탄 — 베티버 뿌리 발에 습도 센서와 자동 미세 살수를 결합",
  region: "지역 출발형: 북인도·파키스탄 (pre-monsoon 건조기)",
  concept: "북인도에는 베티버 뿌리(khus)로 짠 발을 창에 걸고 물을 뿌려 증발냉각하는 전통이 있다. 여기에 소형 펌프·타이머·습도 센서를 결합해 물을 최소량만 자동으로 미세 분사하는 키트로 현대화한다. 재료가 현지 농산물이라 지역 경제 서사도 붙는다. 이 아이디어의 핵심은 지역 선정이 기술 약점을 해소한다는 것: 증발냉각은 습한 기후(한국의 여름 등)에서 효율이 낮지만, 북인도의 폭염 절정기(pre-monsoon)는 고온건조해 증발냉각이 실제로 잘 작동하는 조건이다.",
  science: "증발냉각의 물리는 H8과 동일 — 물 1L 증발이 약 0.68kWh의 열을 흡수한다(추정, H8 참조). 냉각 한계는 습구온도(wet-bulb temperature)로 결정되며, 건조할수록 습구온도가 낮아 냉각 여지가 크다.",
  numbers: "※델리 등 프리몬순 기간의 실제 상대습도·습구온도 데이터는 기상 자료로 확정 필요. 시제품의 '물 사용량 대비 온도 저감' 실측이 카드의 핵심 숫자가 된다.",
  economics: "재료비가 극히 낮고(현지 농산물), 자동 살수로 물 소비를 최소화해 물 부족 지역에서도 성립한다. '연중 솔루션이 아니라 폭염 절정기 솔루션'이라고 정직하게 한정하는 것이 오히려 신뢰를 만든다.",
  checks: ["프리몬순 습도·습구온도 데이터 확보", "몬순 시기 성능 저하의 명시", "베티버 발 수급·가격"],
  references: [
    { label: "(물리 상수 기반 — 증발잠열 2.45 MJ/kg, 교과서 수준. 별도 웹 출처 없음)", url: null, verified: false }
  ],
  related: ["H8"]
},
{
  id: "H11", category: "heatwave",
  title: "Yakhchal 야간 복사냉각 저장고",
  subtitle: "이란 사막 — 고대 얼음집의 원리로, 밤하늘에 열을 버려 만든 냉수로 낮에 농산물을 식힌다",
  region: "지역 출발형: 이란·사막 기후 지역",
  concept: "고대 페르시아는 사막의 맑은 밤하늘로 열을 방출시키는 야간 복사냉각으로 얼음을 만들어 yakhchal(얼음집)에 저장했다. 현대판: 밤에 물을 얕은 패널로 순환시켜 복사냉각으로 식히고, 그 냉수를 단열 저장조에 모아 낮에 농산물 예냉·저장고 냉각에 쓰는 무전력 시스템이다.",
  science: "맑고 건조한 밤에는 대기의 '적외선 창(8~13μm)'을 통해 지표가 우주로 열을 방출해 물체가 기온보다 낮아질 수 있다(슈테판-볼츠만 복사, 교과서 수준). 낮에도 작동하는 방사냉각(daytime radiative cooling)은 특수 광학 소재가 필요한 연구 단계 기술이지만, 야간 복사냉각은 특수 소재 없이도 건조·청명 기후에서 작동한다 — 이것이 학생 프로젝트로서의 현실성을 만든다.",
  numbers: "※야간 순복사 냉각량(W/m²)과 물 온도 강하폭의 구체 수치는 미확보 — 시제품 실측이 카드의 핵심 검증 항목이다.",
  economics: "전력 0으로 농산물 예냉 온도를 확보해 수확 후 손실을 줄인다. 오프그리드 농촌에서 냉장 사슬(cold chain)의 첫 단계를 대체하는 포지션이다.",
  checks: ["야간 복사냉각량 실측(문헌 검색 병행)", "구름·습도에 따른 성능 변동", "단열 저장조의 주간 열 침입 관리"],
  references: [
    { label: "(복사냉각 원리 — 교과서 수준. 정량 출처 확보 전)", url: null, verified: false }
  ],
  related: ["H5", "D2"]
},

/* ================= 정전 (8) ================= */
{
  id: "P1", category: "outage",
  title: "히든 레이어 축광 키트",
  subtitle: "평소엔 예쁜 벽지·포스터, 정전이 오면 숨은 대피 유도선이 나타나는 이중 인쇄",
  region: "일반형",
  concept: "축광(photoluminescent) 소재는 평시의 빛을 저장했다가 어두워지면 스스로 빛나는, 배터리도 배선도 없는 반영구 소재다. 단순 발광 스티커와의 차별점은 이중 인쇄(hidden layer): 밝을 때는 평범한 벽지 무늬·아트 포스터·아이 방 별자리인데, 정전으로 어두워지면 그 안에 숨어 있던 유도선·화살표·'두꺼비집 →' 표지가 나타난다. 투명 축광 잉크를 일반 인쇄물 위에 덧인쇄하는 방식이라 실크스크린 수준으로 시제품 제작이 가능하다. 보조 기능: 축광 밝기가 시간에 따라 예측 가능하게 감쇠하는 성질을 이용해 비교 눈금을 인쇄하면 '정전 후 약 몇 분 경과'를 알려주는 무전원 경과 시계가 된다. 부가 서비스로 조도 진단(축광이 낮에 충분히 충전되는 위치를 조도계로 측정해 배치도 제공).",
  science: "축광 안료(SrAl2O4계 등)는 광 여기 후 서서히 발광하며, 감쇠 곡선이 재현 가능해 시간 표시에 쓸 수 있다. 기술의 유효성은 건축 규범이 이미 입증: 축광 표지는 정전·비상조명 상실 시 대피를 돕는 안전 설비로 캐나다 국가건축규범(NBC 3.4.5.1)에 반영되어 있고[3], 뉴욕시(Local Law 26)와 국제건축규범(IBC)은 고층건물 피난 경로에 UL 1994/ASTM E2072 준수 축광 표지를 요구한다[4].",
  numbers: "촛불 대체재 프레임의 근거: 미국에서 연평균 7,610건의 주택 촛불 화재로 81명이 사망하고 재산 피해 2억 7,800만 달러가 발생하며[1], NFPA가 치명적 촛불 화재 117건을 검토한 결과 화재의 26%, 사망의 34%에서 주택에 전기가 들어오지 않는 상태였다[2]. 실증: NRC 캐나다 피난 실험에서 축광 유도만으로 계단을 내려온 대피자의 70%가 조명 품질을 '매우 좋음/수용 가능'으로 평가했다[5].",
  economics: "규격품이 이미 의무화된 시장(고층·상업)이 기술을 검증했고, 규제 밖의 빈 시장(가정·노후 다세대·엘리베이터 내부)을 디자인으로 연다. 지불 동기를 '재난 대비'(안 팔림)에서 '인테리어·키즈 데코'(팔림)로 전환하는 것이 사업의 핵심. 전기 비상등 대비 배터리·배선·유지보수를 제거하는 ERRC 논리.",
  checks: ["축광 잉크 조달·발광 지속시간·감쇠 곡선 실측(눈금 보정)", "기존 소방용 축광 유도선 제품 시장 조사(가정용 빈 시장 가설 검증)", "정전 중 촛불 화재의 국내 통계 확인"],
  references: [
    { label: "NFPA — 촛불 화재 통계 (연 7,610건, 81명)", url: "https://www.nfpa.org/education-and-research/research/nfpa-research/fire-statistical-reports/candle-fires", verified: true },
    { label: "NFPA Ahrens — 치명적 촛불 화재의 26%/사망 34%가 무전기 상태", url: "https://content.nfpa.org/-/media/Project/Storefront/Catalog/Files/Research/NFPA-Research/US-Fire-Problem/Fire-causes/osCandles.pdf?rev=a0af1ddd6b4e471b979a7be9738233ec", verified: true },
    { label: "NRC 캐나다 — 축광 표지 설치 지침 (NBC 반영)", url: "https://publications-cnrc.canada.ca/eng/view/ft/?id=2ba4339f-1526-4301-aa7e-316e73e48cb6", verified: true },
    { label: "축광 피난 표지 규범 해설 (NYC Local Law 26, IBC)", url: "https://blog.qrfs.com/323-which-codes-require-photoluminescent-egress-exit-signs/", verified: true },
    { label: "NRC 캐나다 — 축광 유도 피난 실험 (70% 수용)", url: "https://scispace.com/pdf/effectiveness-of-a-photoluminescent-wayguidance-system-50ju7oiozd.pdf", verified: true }
  ],
  related: ["P2", "P3"]
},
{
  id: "P2", category: "outage",
  title: "블랙아웃 태그",
  subtitle: "통신이 끊겨도 작동하는 축광 NFC 가족 메시지 보드 — 폰만 살아있으면 읽고 쓴다",
  region: "일반형",
  concept: "NFC 태그는 자체 전원이 없고(passive) 스마트폰이 전력을 공급하므로, 정전·인터넷 두절 상황에서도 폰만 살아있으면 작동하는 유일한 정보 매체다. 현관·두꺼비집 옆에 붙이는 축광 NFC 태그(어둠 속에서 위치가 보이고, 태깅하면 정보가 나옴 — P1과 물리 결합)에 앱·인터넷 없이 읽히는 정보를 저장한다: 두꺼비집·가스밸브 위치, 비상 연락망·가족 집결지, (선택) 취약가족 의료기기 정보, 행동카드. 핵심 기능은 NFC 쓰기를 이용한 가족 오프라인 메시지 보드: 정전 시 집을 나서는 사람이 태그에 폰을 대면 '아빠 15:20 출발 → 대피소 A'가 기록되고, 귀가한 가족이 태깅하면 등록 가족의 마지막 이동 기록이 보인다. 마을 확장: 대피소·회관 태그에 도착 명부가 오프라인으로 쌓이고 통신 복구 시 동기화. 이웃이 취약가구 문앞 태그를 태깅해 안부 순찰 기록을 남기는 용도(H4의 통신 두절 시 백업층)로도 쓴다.",
  science: "NFC는 리더(폰)의 전자기 유도로 태그에 전력을 공급하는 표준 기술이다(교과서 수준). '정확히는 실시간 위치가 아니라 이 태그를 마지막으로 거쳐간 기록'이라는 한계를 정직하게 명시하는 것이 신뢰를 만든다.",
  numbers: "수요의 크기: 미 HHS emPOWER 프로그램은 전기 의존 의료장비·필수 의료서비스에 의지해 재택 생활하는 460만 명 이상의 메디케어 수급자를 추적하며, 장기 정전은 이들에게 수 시간~수일 내 생명 위협이 된다고 명시한다[1][2] — 정전 시 '가족·이웃의 안부 확인'이 생명 문제인 인구가 실재함을 보여주는 수치다.",
  economics: "태그 원가가 매우 낮아 키트(P1)와 묶음 판매 가능. 지자체 취약가구 사업(안부 순찰 로그)이 B2G 판로가 된다.",
  checks: ["NFC 태그 메모리 용량(수백 바이트~수 KB)에 맞는 데이터 포맷 설계 — 데이터시트 확인", "외부인이 함부로 쓰지 못하게 하는 잠금 방식 — 학생의 기술 과제로 적합", "개인 의료정보 저장 시 프라이버시 설계"],
  references: [
    { label: "HHS emPOWER 프로그램 (460만+ 전기 의존 수급자)", url: "https://empowerprogram.hhs.gov/", verified: true },
    { label: "emPOWER 데이터 안내 — '수 시간~수일 내 생명 위협'", url: "https://empowerprogram.hhs.gov/Optional-De-Identified-Dataset-Job-Aid.pdf", verified: true }
  ],
  related: ["P1", "H4", "P6"]
},
{
  id: "P3", category: "outage",
  title: "블랙아웃 키즈 박스",
  subtitle: "정전 공포를 놀이로 — 놀이 순서가 그대로 행동요령이 되는 아이용 정전 전용 상자",
  region: "일반형",
  concept: "정전 시 가장 무서워하는 가족 구성원은 아이다. 기존 접근(모의훈련)은 어른도 하지 않는 훈련을 시키는 방식이라 실패하기 쉽다. 방향을 뒤집어, 정전 때만 꺼내는 전용 놀이 상자를 만든다: 천장에 붙여두면 정전 때만 나타나는 축광 별자리 카드(P1 연계), 손전등 그림자놀이 도구, 이야기 카드. 설계의 핵심은 놀이 순서 자체가 행동요령이 되도록 하는 것 — '손전등 보물찾기'=손전등 위치 확인, '가족 캠프 만들기'=한 방에 모이기, '물 요정 놀이'=물 받아두기. 정전을 무서운 사건에서 기대되는 이벤트로 바꾸는 감정 설계가 차별점이다.",
  science: "행동 설계(놀이화)를 통한 재난 대비 학습 접근. ※아동 재난 대비 교육의 효과에 관한 문헌 근거는 카드 단계에서 확보 권장.",
  numbers: "위험 행동의 실재: 정전 중 조명 수요가 촛불 사용으로 이어지고, 치명적 촛불 화재의 26%가 무전기 상태에서 발생했다(P1 참조)[1]. 놀이 상자는 이 조명·공포 수요를 안전한 대체 행동으로 돌린다.",
  economics: "재난용품과 달리 육아 카테고리는 부모의 지불 의사가 명확하다. P1(축광 키트)의 아동용 라인으로 묶어 브랜드화 가능.",
  checks: ["아동 재난 대비 교육 효과 문헌 1건 확보", "연령대별 구성(미취학/초등) 설계"],
  references: [
    { label: "NFPA Ahrens — 정전과 촛불 화재의 연관 (P1과 공유)", url: "https://content.nfpa.org/-/media/Project/Storefront/Catalog/Files/Research/NFPA-Research/US-Fire-Problem/Fire-causes/osCandles.pdf?rev=a0af1ddd6b4e471b979a7be9738233ec", verified: true }
  ],
  related: ["P1"]
},
{
  id: "P4", category: "outage",
  title: "스마트 얼음 은행 (Ice Battery)",
  subtitle: "전기가 싼 심야에 얼리고, 폭염·정전 예보가 뜨면 전날 밤 풀충전하는 예보 기반 축냉",
  region: "일반형",
  concept: "밤에 얼려 낮에 쓰는 것은 오래된 지혜(석빙고)이자 현대 빌딩 빙축열 냉방의 원리다. 이를 소상공인 규모로 내리고 AI 축냉 컨트롤러를 얹는다: 시간대별 전기요금(심야 경부하), 기상 예보(폭염 예보=전력망 부하=정전 확률 상승), 매장 사용 패턴을 입력받아 언제·얼마나 얼릴지 결정한다. 평소에는 싼 시간에 최소량만 얼려 전기료를 아끼고, 폭염·태풍 예보 시 전날 밤 풀가동해 축냉재를 최대로 채운다 — '정전 위험 예측에 따라 충전 전략이 바뀌는 얼음 배터리'. 대상: 냉장 재고가 생계인 정육점·횟집·냉장 쇼케이스 소상공인.",
  science: "얼음의 융해잠열은 334kJ/kg — 얼음 10kg은 약 0.93kWh의 냉장 유지 능력을 저장한다(추정: 334×10÷3,600=0.928). 교차검증: 냉동톤 정의(1RT=얼음 907kg을 24시간에 녹임=3.517kW)로 역산하면 907×334÷86,400=3.51kW로 정의값과 일치. 배터리가 아닌 축냉이므로 화재 리스크가 낮은 것이 장점(냉동기 제어 안전장치는 별도 설계).",
  numbers: "제도적 근거: 한전 약관상 '심야전력' 요금은 인정 기기로 심야(밤 22시~아침 8시)에 열·온수 또는 얼음을 생산·저장했다가 냉난방에 이용하는 경우 적용된다[1] — '밤에 얼려 낮에 쓰기'는 이미 요금제로 인정된 검증된 개념이다. 2026년 계시별 요금 개편은 평일 11~15시를 중간요금으로 내리고 18~21시를 최고요금 구간으로 바꾸는 방향(산업용·일반용 일부 대상)이라 축냉 시점 최적화의 가치가 커진다[2]. 축냉량 설계 참고: FDA 지침상 드라이아이스 50파운드로 18ft³ 냉동고를 이틀 유지[3]. 정전 시 기준선: 냉장고는 4시간, 가득 찬 냉동고는 48시간까지만 안전(문 닫힘 기준)[4].",
  economics: "평시 전기료 절감 + 정전 시 재고 보호의 이중 지불 논리. P5(진단 키트)가 산출하는 '정전 1시간=재고 손실 O원'과 직결되는 업셀 상품이다.",
  checks: ["한전 계시별/심야전력의 정확한 원/kWh 단가 — 한전 공식 요금표에서 확정", "2026 개편 내용의 공식 공고 재확인", "업소별 필요 축냉량 계산 검증"],
  references: [
    { label: "전기요금표(한전 약관 심야전력 조항 인용) ※한전 공식 페이지에서 재확인 필요", url: "http://gje.co.kr/전기요금표/", verified: true },
    { label: "2026 계시별 요금 개편 해설 ※한전 공식 공고로 재확인 필요", url: "https://cozymake.kr/electricity-rate-time-of-use-structure-2026/", verified: true },
    { label: "FDA — 정전 시 식품·물 안전 (드라이아이스 지침)", url: "https://www.fda.gov/food/buy-store-serve-safe-food/food-and-water-safety-during-power-outages-and-floods", verified: true },
    { label: "FoodSafety.gov — 냉장 4시간/냉동 48시간 규칙", url: "https://www.foodsafety.gov/food-safety-charts/food-safety-during-power-outage", verified: true }
  ],
  related: ["P5", "H2"]
},
{
  id: "P5", category: "outage",
  title: "소상공인 영업 지속 진단 키트",
  subtitle: "발전기를 팔지 않고, '정전 1시간에 얼마를 잃는지'를 계산해 최소 백업을 설계해주는 서비스",
  region: "일반형",
  concept: "상점의 기기별 전력 사용량을 측정해 정전 시 반드시 살려야 할 최소 장비(POS, 공유기, 냉장 쇼케이스 등)를 선정하고, 제한된 배터리로 각 장비를 몇 시간 쓸 수 있는지 계산해 주는 진단·구성 서비스. 오프라인 결제, 수기 영수증, 냉장고 개폐 제한 등 행동 매뉴얼을 함께 제공한다. 대형 발전기 일괄 판매 대신 '상점별 필수 기기 분석으로 필요한 백업 용량 자체를 줄인다'가 차별점이며, 장비 판매 없이 서비스로 시작할 수 있어 재고 리스크가 없다.",
  science: "부하 프로파일링(기기별 소비전력·기동전력 측정)과 배터리 용량 계산 — 스마트 플러그 수준 장비로 학생이 수행 가능한 실측이다.",
  numbers: "LBNL의 고객 피해 함수 기준, 여름 오후 1시간 정전의 비용은 주거 고객 약 3달러, 중소 상공업 고객 약 1,200달러, 대형 상공업 고객 약 82,000달러로 추정된다[1]. 미 에너지부는 정전이 미국 경제에 연 1,500억 달러의 손실을 입히는 것으로 추정하며, 펜실베이니아의 한 슈퍼마켓은 하루 남짓의 정전으로 최대 3만 달러어치 상품 손실을 추산했다[2]. 식품 폐기의 기준선: 냉장고 4시간/가득 찬 냉동고 48시간 규칙[3].",
  economics: "'정전 1시간 = 1,200달러'라는 문헌 기반 숫자가 진단 서비스의 가격을 정당화한다. P4(얼음 은행), P6(백업전원)으로 이어지는 판매 깔때기의 입구.",
  checks: ["한국 소상공인 정전 피해의 국내 수치·사례 확보(있으면 강력)", "냉장고 기동전력(정격의 수 배)과 배터리 용량의 정합 확인"],
  references: [
    { label: "LBNL — 정전 고객 비용 프레임워크 (1시간 $1,200/$82,000)", url: "https://emp.lbl.gov/publications/framework-and-review-customer-outage", verified: true },
    { label: "Bloom Energy — DOE $150B/년, 슈퍼마켓 $30,000 사례", url: "https://www.bloomenergy.com/blog/a-day-without-power-outage-costs-for-businesses/", verified: true },
    { label: "CDC — 정전 후 식품 안전 규칙", url: "https://www.cdc.gov/food-safety/foods/keep-food-safe-after-emergency.html", verified: true }
  ],
  related: ["P4", "P6"]
},
{
  id: "P6", category: "outage",
  title: "인증 백업전원 렌털·점검 서비스",
  subtitle: "전기가 끊기면 생명이 위험한 재택 의료기기 가구를 위한 용량 계산 + 렌털 + 정기 점검 + 보호자 알림",
  region: "일반형",
  concept: "산소발생기 등 전력 의존 의료기기를 쓰는 가구에, 장비의 소비전력 기준으로 필요한 백업 시간을 계산하고, 인증된 백업배터리를 렌털하며, 정기적으로 충전 상태·성능을 점검한다. 정전 시 보호자·관리기관에 배터리 잔량을 알리는 보조장치를 결합할 수 있다. 배터리를 직접 제작하지 않고 인증 제품의 '용량 계산+점검+교체+알림' 서비스로 설계해, 학생 프로젝트에서 감당 불가능한 화재·품질 리스크를 회피한 것이 특징이다.",
  science: "장비별 정격 소비전력 × 목표 지속시간으로 필요 용량(Wh)을 산정하는 표준 계산. 기동전력이 큰 장비는 인버터 용량을 별도 확인해야 한다.",
  numbers: "미 HHS emPOWER 기준 460만 명 이상의 메디케어 수급자가 전기 의존 의료장비·필수 의료서비스에 의지해 재택 생활하며, 이 중 약 300만 명이 인공호흡기·산소농축기 등 전기 의존 의료장비 사용자이고, 장기 정전은 수 시간~수일 내 생명 위협이 된다[1][2]. emPOWER는 이 인구를 우편번호 단위 지도로 공개하므로 시장 규모 추정 도구로도 쓸 수 있다.",
  economics: "문제의 절박함이 지불 의사를 만들고(가족·복지기관), 렌털·점검료의 반복 수익 구조다. 판매가 아닌 렌털이라 가구의 초기 부담이 낮다.",
  checks: ["한국의 재택 의료기기 의존 가구 수(건보공단·복지부 통계) 확인", "의료 관련 장비를 다루는 데 따른 제품 책임·법적 검토"],
  references: [
    { label: "HHS emPOWER 프로그램", url: "https://empowerprogram.hhs.gov/", verified: true },
    { label: "emPOWER 데이터 안내 (4.5M/3M, '수 시간~수일')", url: "https://empowerprogram.hhs.gov/Optional-De-Identified-Dataset-Job-Aid.pdf", verified: true }
  ],
  related: ["P2", "P5"]
},
{
  id: "P7", category: "outage",
  title: "전통 릴레이 통신망 (LoRa mesh)",
  subtitle: "봉수·토킹드럼의 구조를 복원한, 통신 두절 시 마을 단위 안부·구조요청 네트워크",
  region: "일반형 (브랜딩 모듈: 한국 봉수 / 서아프리카 토킹드럼)",
  concept: "대규모 정전으로 통신까지 끊겼을 때를 위한 마을 공동 메시지망. 아파트 옥상·마을회관에 태양광으로 자립하는 저전력 장거리 통신(LoRa) 노드를 설치하고, 주민은 블루투스로 짧은 안부·구조요청 메시지를 입력하면 노드끼리 릴레이(mesh)로 전달한다. 조선의 봉수(烽燧)는 전국을 릴레이 노드로 연결한 저비용 비상 통신망으로 이 시스템과 구조가 같고, 서아프리카의 talking drum은 마을 간 릴레이 메시지 전통이다 — 제출 지역에 따라 '수백 년 전 비상 통신망의 현대적 복원' 브랜딩을 선택해 붙인다. 저전력 e-ink 게시판(충전소·복구 정보 게시)과의 연동 확장 가능.",
  science: "LoRa는 낮은 데이터율을 대가로 장거리·저전력을 얻는 변조 방식이며, mesh 구성으로 단일 노드 장애를 우회한다. ※통달거리·국내 비면허 주파수(920MHz 대역) 규정은 데이터시트·전파법으로 확인.",
  numbers: "※이 아이디어의 정량 근거(통달거리, 노드당 커버 가구 수)는 기술 사양 확인 후 기입 — 웹 문헌보다 데이터시트가 적절해 이번 조사에서 제외했다.",
  economics: "노드 하드웨어가 저가이고 태양광 자립이라 유지비가 낮다. 지자체·아파트 관리조합의 재난 대비 예산이 지불 주체 후보.",
  checks: ["LoRa 통달거리(도시/농촌)·국내 주파수 규정", "허위 구조요청 관리 방안", "위치·안부 정보의 개인정보 보호 설계"],
  references: [
    { label: "(기술 사양 확인 전 — LoRa 데이터시트·전파법 검토 필요)", url: null, verified: false }
  ],
  related: ["P2"]
},
{
  id: "P8", category: "outage",
  title: "Sari-Sari Energy Hub",
  subtitle: "필리핀 외곽 섬 — 동네 상점을 태양광·냉장·충전 거점으로, 전기를 tingi(소량) 단위로 판다",
  region: "지역 출발형: 필리핀 외곽 섬",
  concept: "sari-sari store는 외상과 소량 구매(tingi)가 이루어지는 필리핀 동네의 사회적 거점이다. 이 상점 지붕에 태양광과 공동 배터리를 설치해 마을의 전력·냉장·통신 거점으로 만든다. 지역 문화가 사업 모델을 결정한다: tingi 관습대로 전기를 kWh가 아닌 '휴대폰 1회 충전', '냉장 보관 1일' 단위로 판매하고, bayanihan(상호부조)에 따라 정전 시 일부 전력을 취약가구에 공동체가 제공하며, AI가 날씨·이용 패턴으로 수요를 예측해 비상용 전력을 남겨둔다. 정전 시 배분 순서: 통신 → 의약품 냉장 → 식품 냉장 → 일반 충전. 앱 없는 주민은 기존 방식대로 현금·장부로 이용한다 — 디지털 소외를 만들지 않는다.",
  science: "태양광+배터리 마이크로그리드의 표준 구성이며, 신규 인프라를 짓지 않고 기존 상점망(입지·신뢰·상거래 관행)을 재사용하는 것이 구조적 강점이다.",
  numbers: "필리핀 전화율은 2023년 6월 기준 91.1%이나 약 613만 가구가 미전화 상태이고 그중 129만 가구가 오프그리드 지역이다[1]. 오프그리드 섬의 280만 명 이상이 비싸고 불안정한 디젤 발전에 의존해 요금이 kWh당 16~25페소로 본토 대비 훨씬 높고, 보조금이 연 200억 페소를 넘는데도 서비스가 불안정하다[2]. 필리핀 에너지부는 2023-2032 국가 전화 로드맵에서 오프그리드 128.5만 가구를 별도 과제로 명시했다[3].",
  economics: "'정부가 연 200억 페소를 쓰고도 못 푸는 문제를, 이미 존재하는 상점망으로 푼다'가 경제 논리의 핵심. 충전·냉장 소액 결제의 반복 수익 + NGO·전력협동조합 파트너십.",
  checks: ["sari-sari store 점포 수 통계 확인", "tingi·bayanihan 문화 서술의 출처 확보", "현지 파트너(전력협동조합·NGO) 후보 조사 — '왜 한국 학생이?'에 대한 답"],
  references: [
    { label: "ADB SEADS — 필리핀 오프그리드 섬 하이브리드 태양광 (91.1%, 613만/129만)", url: "https://seads.adb.org/articles/no-grid-no-problem-how-hybrid-solar-systems-can-power-islands", verified: true },
    { label: "Yale 정책 메모 2026 — 오프그리드 280만 명, ₱16~25/kWh, 보조금 ₱200억+", url: "https://cleanenergyforum.yale.edu/2026/01/28/policy-memo-improving-electricity-access-reliability-and-affordability-in-off-grid", verified: true },
    { label: "필리핀 DOE — 2023-2032 국가 전화 로드맵", url: "https://legacy.doe.gov.ph/announcements/2023-2032-national-total-electrification-roadmap", verified: true }
  ],
  related: ["H4"]
},

/* ================= 홍수 (7) — 출처 검증 전 (PDF 원안) ================= */
{
  id: "F1", category: "flood",
  title: "NatureSignal AI",
  subtitle: "지역 재료 센서 + AI가 홍수·오염 위험을 '오늘 저녁 물통을 밖에 두세요' 같은 행동 알림으로",
  region: "지역 출발형: 방글라데시 델타·메콩 델타·자카르타",
  concept: "대나무·황마·점토·왕겨 등 지역 재료로 만든 센서들이 비·습도·강 수위·토양 건조도·염도·오염 위험을 감지하고, AI가 이를 분석해 주민에게 행동 알림을 준다. '내일 비가 옵니다'가 아니라 '노란 깃발 단계입니다. 문서와 약을 높은 곳으로 옮기세요'처럼 생활 행동으로 번역하는 것이 핵심. 범위가 넓어지기 쉬우므로 한 학생이 할 경우 '방글라데시 홍수 알림용'처럼 지역을 좁히는 것이 좋다.",
  science: "저가 센서망 + 위성·기상 데이터 + AI 예측 모델의 결합. 행동과학적으로는 예보를 구체적 행동 지시로 변환할 때 대응률이 올라간다는 위험 커뮤니케이션 원리를 적용한다.",
  numbers: "Google의 AI 홍수 예측(Flood Hub)은 하천 범람을 최대 7일 전에 예측하며(도시 돌발홍수는 최대 24시간 전), 두 개의 AI 모델(강 유량을 예측하는 Hydrologic Model + 침수 범위·수심을 예측하는 Inundation Model)을 결합한다[1][2]. 초기 80개국·4억 6천만 명 커버에서 100개국·7억 명(전문가용 가상 관측 포함 150개국)으로 확장됐고, 개선된 모델의 7일 리드타임 정확도가 기존 모델의 5일 정확도와 동등하다[2][3]. 문제 규모: 홍수는 가장 흔한 자연재해로 전 세계 인구의 약 19%(15억 명)가 심각한 홍수 위험에 직접 노출되어 있고 연간 약 500억 달러의 경제 피해를 낸다[3]. 이 아이디어는 이런 공개 예측 데이터를 '지역 재료 센서 + 생활 행동 알림'으로 마지막 1마일에 연결하는 것이다.",
  economics: "센서 하드웨어(지역 재료)는 저가로 공급하고 알림 서비스를 마을·NGO·지방정부 구독으로 판매하는 플랫폼 구조. Flood Hub 예측이 무료 공개 데이터라 예측 자체를 개발할 필요가 없어 진입 비용이 낮다. 확장성이 큰 대신 초기 지역 한정이 필수다.",
  checks: ["지역 재료 센서의 실제 측정 신뢰도(현장 검증)", "돌발홍수(flash flood)는 하천 범람보다 예측이 어렵다는 한계 명시", "알림 전달 채널(피처폰 SMS 등) 설계"],
  references: [
    { label: "Google Research — 글로벌 AI 홍수 예측 모델 (7일 리드타임, 2개 모델 구조)", url: "https://research.google/blog/a-flood-forecasting-ai-model-trained-and-evaluated-globally/", verified: true },
    { label: "Google Blog — Flood Hub 확장 (80→100개국, 4.6억→7억 명, 7일=기존 5일 정확도)", url: "https://blog.google/innovation-and-ai/products/expanding-flood-forecasting-coverage-helping-partners/", verified: true },
    { label: "Google Blog — 홍수 15억 명 노출·연 500억 달러 피해", url: "https://blog.google/innovation-and-ai/products/google-ai-global-flood-forecasting/", verified: true }
  ],
  related: ["F3", "F6"]
},
{
  id: "F2", category: "flood",
  title: "Plant Whisper Network",
  subtitle: "연꽃·벼에 얇은 센서를 붙여 식물이 먼저 느끼는 과습·염분·침수 신호를 읽는다",
  region: "지역 출발형: 메콩 델타·방글라데시 델타",
  concept: "식물은 사람보다 먼저 물 스트레스, 염분, 과습, 가뭄을 느낀다. 연꽃, 벼, 물옥잠 같은 지역 식물에 얇은 웨어러블 센서를 붙여 식물의 생리 반응을 읽고, AI가 위험 신호로 해석하는 시스템이다. 매우 신선하고 미래지향적이라는 장점이 있으나 실제 구현 난도가 높아, 대회에서는 모형과 앱 화면 시뮬레이션으로 보여주는 것이 적합하다.",
  science: "식물 웨어러블 센서는 잎 등 식물 표면에 부착해 증산(transpiration), 생장, 수분 상태, 휘발성유기화합물(VOC), 표면 온습도 등을 비파괴·실시간으로 감지하는 유연 센서다. 식물은 가뭄·염분·과습·병원체 스트레스에 반응해 다양한 화학 신호를 내보내므로, 이를 시간에 따라 추적하면 사람이 눈으로 알아채기 전에 스트레스를 예측할 수 있다[2].",
  numbers: "이 분야는 2025년 전후로 리뷰 논문이 집중적으로 나온 활발한 연구 영역이다. MDPI Biosensors 2025년 리뷰는 식물 웨어러블 센서가 높은 유연성·생체적합성·확장성으로 식물의 생리·환경 정보를 실시간 모니터링하는 큰 잠재력을 지니나, 아직 대규모 실용화에는 여러 과제가 남아 있다고 정리한다[1]. Advanced Science 2025 리뷰는 이 센서를 IoT와 결합하면 생육 환경 최적화와 병해충 관리로 생산 효율을 높일 수 있다고 본다[2]. 즉 개념의 과학적 토대는 문헌으로 뒷받침되나, '실시간 대규모 배치'는 아직 연구 단계라는 점을 발표에서 정직하게 밝히는 것이 좋다.",
  economics: "농민 대상 조기경보 구독 + 농업 보험·지방정부 데이터 판매의 이중 구조 후보. 시장성보다 심사위원 기억에 남는 신선함이 강점인 아이디어다.",
  checks: ["실구현 난도가 높음 — 대회에서는 모형+앱 시뮬레이션으로 접근(문헌도 대규모 배치는 미성숙 단계로 평가)", "지역 식물(연꽃·벼)에 대한 센서 부착 방식의 현장 적용성"],
  references: [
    { label: "MDPI Biosensors 2025 — Wearable Sensors for Plants: Status and Prospects", url: "https://www.mdpi.com/2079-6374/15/1/53", verified: true },
    { label: "Advanced Science 2025 — Wearable Standalone Sensing Systems for Smart Agriculture", url: "https://advanced.onlinelibrary.wiley.com/doi/10.1002/advs.202414748", verified: true }
  ],
  related: ["F1", "D4"]
},
{
  id: "F3", category: "flood",
  title: "Flood Memory Wall",
  subtitle: "마을 벽에 과거 최고 수위를 새기고, AR로 미래 침수 예상 높이를 겹쳐 보여준다",
  region: "지역 출발형: 방글라데시 델타·자카르타·메콩 델타",
  concept: "홍수 지역 주민들은 과거에 물이 어디까지 찼는지 기억하지만 그 정보가 체계적으로 저장되지 않는다. 마을 벽에 과거 최고 수위, 대피 방향, 안전지대를 표시하고, 스마트폰 AR로 미래 침수 예상 높이를 겹쳐 보여주는 시스템. 시각적으로 강하고 발표하기 쉬운 것이 장점이며, 기술보다 디자인·교육·커뮤니티 참여 모델 설계가 관건이다.",
  science: "추상적 확률('100년 빈도 홍수')보다 구체적·시각적 기준점('저 벽의 저 높이')이 대비 행동을 유도한다는 위험 인식 원리를 적용한다. 미래 침수 예상 높이는 F1에서 다룬 Google Flood Hub 같은 공개 예측·지도 데이터를 AR로 겹쳐 표현할 수 있다.",
  numbers: "원안의 방글라데시 홍수 수치는 실제 사건과 부합한다(다만 연도·규모를 정확히): 2024년 8월 21~28일 방글라데시 동부 11개 지구를 강타한 돌발홍수로 약 580만 명이 영향을 받고, 502,501명이 3,403개 대피소로 대피했으며, 71명이 사망하고 100만 명 이상이 고립됐다(UN OCHA·NDRCC)[1][2]. 학교 7,000여 곳이 문을 닫아 175만 명의 초등학생이 영향을 받았다[1]. 방글라데시는 갠지스·브라마푸트라·메그나 삼각주에 위치해 세계 최대 델타를 이루는 지형적 취약성을 안고 있다[2].",
  economics: "벽화 제작은 지역 예술가·주민 참여형이라 비용이 낮고, NGO·지방정부의 재난 교육 예산이 지불 주체. AR 콘텐츠는 한 번 만들어 여러 마을에 복제 가능.",
  checks: ["침수 예상 높이 데이터의 출처(공공 홍수 지도·Flood Hub) 연동", "AR 앱의 오프라인 작동(현지 통신 환경) 설계"],
  references: [
    { label: "UN OCHA — Bangladesh Eastern Flash Floods 2024 SitRep 02 (580만 명, 502,501명 대피)", url: "https://www.unocha.org/publications/report/bangladesh/bangladesh-eastern-flash-floods-2024-situation-report-no-02-30-august-2024", verified: true },
    { label: "WHO Bangladesh — 2024 홍수 대응 (5.8M 영향, 3,403개 대피소)", url: "https://www.who.int/bangladesh/news/detail/04-11-2024-rising-waters--rising-challenges-who-s-response-to-severe-flooding-in-bangladesh", verified: true }
  ],
  related: ["F1", "F5"]
},
{
  id: "F4", category: "flood",
  title: "Rice Husk Moisture Tag",
  subtitle: "쌀·씨앗 보관함이 위험 습도에 도달하면 색·NFC로 알려주는 저가 태그",
  region: "지역 출발형: 메콩 델타·방글라데시 델타",
  concept: "홍수나 습한 기후에서 쌀·씨앗을 제대로 말리지 못하면 곰팡이·벌레·부패로 식량 손실이 생긴다. 왕겨나 쌀 포대에 부착하는 저가 습도 태그로, 저장함 내부가 위험 습도에 도달하면 색 변화나 NFC 알림으로 알려준다. 숫자로 설득하기 좋고 사업모델이 명확한 것이 장점이며, 실용적으로만 보이지 않도록 지역재료 디자인·NFC를 보강하는 것이 좋다.",
  science: "곡물 저장 안전은 수분 함량과 직결된다 — 수분이 높으면 곰팡이(아플라톡신 위험 포함)와 발열이 시작된다. 색 변화 습도 표시는 조해성 염료의 표준 기술.",
  numbers: "FAO 자료로 확인됨: 열대 지방에서 벼(rough rice)의 안전 저장 수분 함량은 일반적으로 14%로 간주되며, 이 수준 이하에서 곰팡이 감염 위험이 낮아지고 저장 수명이 길어진다[1][2]. 농민은 보통 수분 24~26%로 수확하므로 저장 전 14%까지 건조가 필수다[2]. 수확 후 손실은 조사에 따라 폭이 크지만, FAO는 개도국 곡물의 수확 후 손실이 대체로 10~15%이며 아프리카·라틴아메리카 일부에서는 최대 50%에 이른다고 본다[3]. 저장 단계가 공급망 전체에서 손실 비중이 가장 큰 구간으로 지목된다.",
  economics: "태그 원가가 매우 낮아 포대 단위 소액 판매가 가능하고, 정미소·협동조합 단체 구매가 B2B 판로. '태그 가격 대 회피 손실(저장 손실 10~15%)'의 비교가 그대로 피치가 된다.",
  checks: ["습도 표시 염료의 식품 근접 사용 안전성", "대상 지역(메콩·방글라데시)의 실제 저장 손실 지역 수치 확보 시 강화"],
  references: [
    { label: "FAO — Rice in human nutrition (열대 안전 저장 수분 14%)", url: "https://www.fao.org/4/t0567e/T0567E0h.htm", verified: true },
    { label: "FAO — Rice Post-harvest Operations (수확 24~26% → 14% 건조)", url: "https://www.fao.org/fileadmin/user_upload/inpho/docs/Post_Harvest_Compendium_-_RICE.pdf", verified: true },
    { label: "FAO — Post-harvest losses (개도국 곡물 손실 10~15%, 최대 50%)", url: "https://www.fao.org/4/t0522e/t0522e04.htm", verified: true }
  ],
  related: ["F5", "P2"]
},
{
  id: "F5", category: "flood",
  title: "Smart Jute Rope",
  subtitle: "방글라데시의 황마 로프에 전도성 코팅을 입혀 젖음·침수·당김을 감지하는 센서로",
  region: "지역 출발형: 방글라데시 델타",
  concept: "황마(jute)는 방글라데시의 대표 천연섬유다. 황마 로프에 전도성 코팅이나 얇은 센서선을 입혀, 로프가 젖거나 물에 잠기거나 당겨질 때 전기 저항이 변하도록 만든다. 사용처: 강변(수위 도달 시 침수 경보), 집 벽 아래(바닥 침수 감지), 부유식 정원(물살로 로프가 당겨지면 위험 알림), 떠 있는 화장실(위치 이탈·기울어짐 감지), 쌀 보관함(습기 감지). 지역 재료성이 매우 강하고 프로토타입이 가능한 것이 장점이다.",
  science: "전도성 고분자(PEDOT 등) 코팅 섬유의 저항이 수분·장력에 따라 변하는 원리 — 학생이 멀티미터 수준으로 시연 가능한 물리다.",
  numbers: "황마 순위는 출처에 따라 갈리므로 표현에 주의가 필요하다(검증 결과): 전통적으로 인도가 세계 최대 생산국(연 약 197만 톤, 서벵골이 국내 60% 내외)이고 방글라데시가 그 다음이자 세계 최대 수출국(원마 수출의 약 70%)이다[1][3]. 다만 2023~2024년 FAO 기준으로 방글라데시가 생산에서 인도를 근소하게 앞섰다는 자료도 있어[2], 카드에는 '방글라데시는 세계 최대 황마 수출국이자 2위권 생산국'이라는 표현이 가장 안전하다. 방글라데시 황마 생산은 최근 연 120만~140만 톤 규모로 보고된다[1].",
  economics: "재료가 국가 대표 산업재라 원가·수급·서사가 모두 유리하다. 로프는 이미 쓰이는 물건이므로 '기존 로프의 교체 수요'에 올라탈 수 있다.",
  checks: ["'수출 1위·생산 2위권'으로 표현 확정(생산 1위를 단정하지 말 것)", "전도성 코팅의 내구성·방수·가격"],
  references: [
    { label: "WorldAtlas — Top Jute Producing Countries (인도 1위 197만t / 방글라 2위 135만t)", url: "https://www.worldatlas.com/articles/top-jute-producing-countries-in-the-world.html", verified: true },
    { label: "Testbook — 2024 FAO 기준 방글라데시 생산 역전 주장 (58%)", url: "https://testbook.com/static-gk/largest-producer-of-jute-in-the-world", verified: true },
    { label: "AMATSUNAWA — 방글라 수출 1위·인도 생산 최대 (FY2024/25 수출 통계)", url: "https://www.amatsunawa.com/Jute-Know-How/Jute-Export-Statistic/", verified: true }
  ],
  related: ["F4", "F7"]
},
{
  id: "F6", category: "flood",
  title: "Paper Microfluidic Water Test",
  subtitle: "물 한 방울로 pH·염도·오염 위험을 색으로 보여주는 종이칩 — '물 위험 여권'",
  region: "일반형에 가까움: 홍수·물 부족 지역 공통",
  concept: "종이칩에 물 한 방울을 떨어뜨리면 물길을 따라 여러 구역으로 퍼지고 각 구역이 다른 색으로 반응한다. 물을 '깨끗하다/더럽다'로만 판단하지 않고 어떤 용도로 쓸 수 있는지 알려주는 '물 위험 여권'처럼 작동한다: pH, 염도, 질산염, 인산염, 잔류 염소, 탁도 등. 세균은 즉시 확정이 어려우므로 '세균 감염 확정'이 아니라 '추가 소독 필요 신호'로 표현해야 한다.",
  science: "종이 미세유체(paper microfluidics, μPAD)는 모세관 힘으로 시료를 이동시켜 시약 구역에서 비색 반응을 일으키는 저가 진단 기술이며, 스마트폰 카메라의 색(HSV 등) 분석과 결합된다. 세균은 즉시 확정이 어려우므로 '추가 소독 필요 신호'로 표현해야 한다는 원안의 신중함은 타당하다.",
  numbers: "실증 근거 확보: 종이 미세유체 소자에 스마트폰 앱을 결합해 pH와 아질산염(nitrite)을 동시에 비색 측정한 연구가 있고(Analytical Chemistry, 7개 감지 구역·스마트폰 플래시 광원 사용)[1], 한 장의 μPAD로 pH·Cu(II)·Ni(II)·Fe(III)·아질산염을 동시 검출하며 아질산염 검출 한계 0.4 ppm을 보인 플랫폼도 보고됐다[2]. 즉 '물 한 방울 → 여러 항목 색 판정'은 실험으로 구현된 기술이다. 다만 세균은 별도 기법(금나노입자 등)이 필요하고 정량 확정이 어렵다[3].",
  economics: "칩 단가가 매우 낮아 재난 구호 키트·NGO 대량 구매에 적합하고, 홍수 후(수질 불안)와 가뭄(대체 수원 판단) 양쪽에 팔리는 드문 교차 상품이다.",
  checks: ["'소독 필요 신호' 표현의 규제 적합성(의료·진단 주장 회피)", "지역 재료(황마지·쌀종이) 기질의 실제 성능 검증"],
  references: [
    { label: "Analytical Chemistry — 스마트폰 기반 pH·아질산염 동시 비색 측정 μPAD", url: "https://pubmed.ncbi.nlm.nih.gov/25158126/", verified: true },
    { label: "ACS Omega — 스마트폰 앱 통합 μPAD로 pH·금속·아질산염 동시 검출", url: "https://pubmed.ncbi.nlm.nih.gov/36506192/", verified: true },
    { label: "ACS Sensors — μPAD 그람음성균·아질산염 동시 모니터링(세균은 별도 기법)", url: "https://pubs.acs.org/doi/10.1021/acssensors.3c01769", verified: true }
  ],
  related: ["F1", "F7"]
},
{
  id: "F7", category: "flood",
  title: "Smart Floating Toilet Alert",
  subtitle: "홍수 때 떠 있는 화장실의 위치·사용 가능 여부·오염 위험을 알려주는 위생 경보",
  region: "지역 출발형: 방글라데시 델타·메콩 델타 등 저지대",
  concept: "홍수의 큰 문제 중 하나는 화장실·하수가 잠기며 오염수가 생활공간에 섞이는 것이다. 떠 있는 임시 화장실에 수위 센서·위치 알림·사용 가능 상태 표시를 붙여 주민에게 가장 가까운 안전 화장실과 오염 위험을 알려주는 서비스. 사회적 필요성이 크고 위생·여성·아동 안전과 연결되는 것이 장점이며, 발표에서는 '공중보건'과 '재난 위생' 관점으로 차분하게 다루는 것이 좋다.",
  science: "콜레라·장티푸스·설사병은 분변-경구(faecal-oral) 경로로 전파되므로, 홍수기에 화장실·하수가 잠겨 오염수가 생활공간에 섞이는 것을 막는 위생시설 관리가 방역의 핵심이다(WASH 원리)[1][2].",
  numbers: "WHO는 열악한 WASH 조건이 매년 100만 명 이상의 설사병 사망을 초래하며 콜레라 등 질병의 예방·관리를 저해한다고 밝힌다[1]. CDC는 안전하지 않은 물·부적절한 위생이 콜레라·장티푸스·설사병 확산의 주요 요인이며, 설사병이 5세 미만 아동 사망의 주요 원인 중 하나라고 설명한다[2]. 홍수 직후는 이 위험이 급증하는 시기다. 참고로 2024 방글라데시 홍수(F3)에서도 대피소 과밀과 WASH 시설 침수로 수인성 질병 우려가 제기됐다.",
  economics: "NGO·지방정부·국제기구(UNICEF WASH 등)가 명확한 지불 주체이고, 부유식 화장실 하드웨어보다 센서·정보 서비스로 포지셔닝해 제조 부담을 낮춘다.",
  checks: ["대상 지역 홍수기 수인성 질병 지역 통계 확보 시 강화", "화장실 주제의 발표 톤 설계('공중보건·재난 위생' 관점)"],
  references: [
    { label: "WHO — Water, sanitation and hygiene (WASH) (연 100만+ 설사병 사망)", url: "https://www.who.int/health-topics/water-sanitation-and-hygiene-wash", verified: true },
    { label: "CDC — About Global WASH (콜레라·장티푸스, 5세 미만 사망 요인)", url: "https://www.cdc.gov/global-water-sanitation-hygiene/about/index.html", verified: true }
  ],
  related: ["F5", "F6"]
},

/* ================= 가뭄 (4) — 출처 검증 전 (PDF 원안) ================= */
{
  id: "D1", category: "drought",
  title: "Hydrogel Seed Capsule",
  subtitle: "비가 충분히 왔을 때만 씨앗이 깨어나는 생분해성 캡슐 — 가뭄 지역의 발아 실패를 막는다",
  region: "지역 출발형: 타르 사막·예멘·고비 사막",
  concept: "가뭄 지역에서는 씨앗을 심어도 비가 충분히 오지 않으면 발아하지 못하고 말라 죽는다. 생분해성 하이드로젤과 점토 캡슐로, 비가 충분히 왔을 때만 물을 흡수해 씨앗 발아를 돕는 캡슐을 만든다. 소재·농업·기후 적응을 연결할 수 있는 것이 장점이며, 실제 소재 검증이 필요하므로 대회에서는 '개념 프로토타입'으로 접근하는 것이 안전하다.",
  science: "하이드로젤은 자기 무게의 수십~수백 배 물을 흡수·보유하는 고분자로, 토양 수분 보유를 높이고 증발산을 줄여 가뭄 스트레스를 완화한다[3]. 강우량 임계치를 물리적으로 구현(일정 수분 이상에서만 팽윤)하는 것이 캡슐 설계의 과제다.",
  numbers: "실증 근거 확보: 가뭄 조건에서 벼 종자를 식물 기반 하이드로젤로 코팅한 실험(Journal of Sustainable Agriculture and Environment, 2025)에서 대조군 대비 발아율 28%, 줄기 길이 37%, 곡물 수량이 최대 140% 증가했다[1]. 하이드로젤 적용은 사질토 침투를 25%, 열화 토양은 40%까지 높인다는 리뷰 결과도 있다[3]. 바이오차를 섞은 하이드로젤이 밀 종자의 뿌리 신장을 크게 늘렸다는 연구도 있어, 지역 재료(점토·바이오차) 결합의 근거가 된다[2]. 종자 코팅 방식이 토양 살포보다 비용 효율적이라는 점도 보고된다[1].",
  economics: "씨앗+캡슐을 묶은 소모품 판매 구조로 반복 수익이 명확하고, 조림 사업·NGO의 대량 파종(seed ball 계열) 수요와 연결된다. 코팅 방식이 저비용이라 대규모·항공 파종에 유리하다.",
  checks: ["생분해성 소재의 실제 분해 기간", "현지 강우 패턴 대비 팽윤 임계치 설계", "합성 아크릴아마이드계 대신 식물 기반 소재 사용 여부"],
  references: [
    { label: "J. Sustainable Agriculture and Environment 2025 — 벼 하이드로젤 코팅 (발아 +28%, 수량 +140%)", url: "https://onlinelibrary.wiley.com/doi/10.1002/sae2.70092?af=R", verified: true },
    { label: "Global Challenges 2024 — 바이오차 도핑 하이드로젤 종자 발아", url: "https://onlinelibrary.wiley.com/doi/10.1002/gch2.202300254", verified: true },
    { label: "ScienceDirect 2025 — 건조지 농업 하이드로젤 토양 수분 리뷰 (침투 +25~40%)", url: "https://www.sciencedirect.com/science/article/pii/S2949911925000309", verified: true }
  ],
  related: ["D3"]
},
{
  id: "D2", category: "drought",
  title: "Radiative Dew Roof",
  subtitle: "밤하늘로 열을 버리는 복사냉각 지붕으로 이슬을 모으는 보조 물 수확 장치",
  region: "지역 출발형: 아타카마 사막·타르 사막",
  concept: "사막에서 밤에 지붕 표면이 차가워지면 이슬이 맺힌다. 복사냉각 필름을 지붕·천막에 붙여 밤하늘로 열을 내보내고, 맺힌 이슬을 홈통으로 모아 생활용수나 미니팜에 쓴다. 과학적으로 흥미롭고 극건조 지역과 잘 맞는 것이 장점이며, 생산량이 기후에 따라 크게 달라지므로 '식수 해결'이 아니라 '보조 물 수확 장치'로 설명하는 것이 안전하다.",
  science: "야간 복사냉각(H11과 동일 원리 — 적외선 창을 통한 우주로의 열 방출)으로 표면 온도를 이슬점 아래로 내려 응결을 유도한다. 맑은 하늘에서 고방사율 기판 1m²는 약 100W의 냉각력(냉장고 한 대에 해당)을 낼 수 있고, 이론상 하루 약 3.5L/m²의 물을 응결시킬 수 있다[3]. H11(Yakhchal)과 원리를 공유하므로 두 아이디어를 '복사냉각 패밀리'로 함께 발표할 수 있다.",
  numbers: "원안의 3654 g/m²/day 수치가 실제 논문으로 확인됨: 태양광(주간 수분 탈착)과 하늘 복사냉각(응결)을 결합한 하이브리드 대기수확 장치가 최대 3654 g/m²/day(≈3.65 L/m²/day)의 물 생산성을 보였다(RSC Energy & Environmental Science, 2024)[1]. 다만 이는 흡착제(sorbent)를 결합한 하이브리드 방식의 상한값이고, 단순 복사냉각 응결기의 이슬 수율은 통상 0.3~0.6 L/m²/day 수준으로 훨씬 낮다[2]. 따라서 원안의 '식수 해결이 아니라 보조 물 수확 장치'라는 신중한 포지셔닝이 정확하다.",
  economics: "무전력·무소모품(단순형)이라 운영비가 0에 가깝고, 지붕이라는 기존 면적을 재사용한다. 물 배달 비용이 비싼 오지에서 '배달 물 1L 가격'과의 비교가 지불 논리가 된다.",
  checks: ["3.65L는 흡착제 결합 하이브리드의 상한 — 단순 복사냉각형은 0.3~0.6L/m²/day임을 명시", "대상 지역의 야간 습도·이슬점 데이터", "포집수의 음용 안전 기준"],
  references: [
    { label: "RSC Energy & Environ. Sci. 2024 — 하이브리드 대기수확 3654 g/m²/day", url: "https://pubs.rsc.org/en/content/articlelanding/2024/ee/d3ee04363k", verified: true },
    { label: "Applied Energy 2025 — 복사냉각 대기수확 리뷰 (단순형 이슬 수율 0.3~0.6 L/m²/day)", url: "https://sciencedirect.com/science/article/pii/S0306261924019597?via=ihub%3D", verified: true },
    { label: "NUS Colloquium 2024 (Beysens) — 복사냉각 1m²≈100W, 이론상 3.5L/m²/day", url: "https://www.physics.nus.edu.sg/colloquium-2024-oct-daniel-beysens", verified: true }
  ],
  related: ["H11", "H5"]
},
{
  id: "D3", category: "drought",
  title: "Soil Memory Tile",
  subtitle: "점토판의 균열·색·수분 반응을 AI가 읽어 파종 시기와 가뭄 위험을 알려주는 복합 센서 타일",
  region: "지역 출발형: 타르 사막·예멘·고비 사막",
  concept: "점토판이 마르면서 생기는 균열을 AI가 읽어 토양 건조도를 판단한다. 단순해 보이지 않도록 타일 자체를 복합 센서로 만든다: 표준 격자 홈(균열 방향 유도), 점토 균열 패턴(건조도), 하이드로젤 점(수분 표시), 바이오차 층(색 대비·수분 보유), 종이 테스트 스트립(pH·염도 보조 측정), QR/NFC 태그(위치·날짜 기록), AI 앱(균열·색·날씨·위치 종합 분석 → 파종·관개 알림). 프로토타입 제작이 매우 쉬워 학생 시연에 최적이다.",
  science: "점토의 건조 수축 균열은 수분 이력의 물리적 기록이며, 어두운 색일수록 수분이 높다는 관계와 균열 패턴을 컴퓨터 비전으로 정량화할 수 있다[1].",
  numbers: "실증 근거 확보: 스마트폰으로 촬영한 토양 RGB 이미지로 수분을 추정하는 연구가 다수 있다. 시드니에서 촬영한 629장으로 CNN·SVR·회귀를 비교한 연구(2023)[1], 인도 14개 농생태 지역·5개 토양군의 스마트폰 이미지에 10종 머신러닝을 적용한 연구(2025)[2], 그리고 서울대 연구진이 표면 이미지로 수분을 추정해 DenseNet121이 R²=97.3%를 기록한 연구(PLOS One, 2026)[3]가 있다. 즉 '흙 사진 → AI 수분 추정'은 실측 연구로 뒷받침되며, 원안의 지적대로 단순 이미지 분석을 넘어 복합 센서(하이드로젤·스트립·QR)로 차별화하는 방향이 타당하다.",
  economics: "타일은 현지 흙으로 초저가 제작이 가능하고, 수익은 AI 앱 구독·데이터(지역 가뭄 지도)에서 나온다. F6(종이칩)과 스트립을 공유하는 부품 시너지가 있다.",
  checks: ["지역 토양별 균열·색 패턴 차이 보정(조명·기기 편차 포함)", "표준 격자 홈으로 균열 방향을 유도하는 설계의 실효성 검증"],
  references: [
    { label: "arXiv 2023 — 스마트폰 이미지 토양 수분 추정 ML 비교(CNN/SVR)", url: "https://arxiv.org/abs/2303.11527", verified: true },
    { label: "ScienceDirect 2025 — 인도 다양 토양 스마트폰 RGB 수분 추정", url: "https://www.sciencedirect.com/science/article/abs/pii/S2352938525002083", verified: true },
    { label: "PLOS One 2026 (서울대) — 이미지 기반 토양 수분 관리 (DenseNet121 R²=97.3%)", url: "https://journals.plos.org/plosone/article?id=10.1371%2Fjournal.pone.0341904", verified: true }
  ],
  related: ["D1", "F6"]
},
{
  id: "D4", category: "drought",
  title: "Lotus Salt Alarm",
  subtitle: "메콩 델타의 연꽃밭을 염수 침투 경보 시스템으로 — 건기의 보이지 않는 재난을 감지",
  region: "지역 출발형: 베트남 메콩 델타",
  concept: "메콩 델타는 물이 많지만 건기에는 바닷물이 강을 타고 올라와 농업용수가 짜지는 염수 침투가 생긴다 — 가뭄이 만드는 보이지 않는 재난이다. 연꽃밭 주변에 저가 염도 센서와 AI 이미지 분석(연꽃의 스트레스 징후)을 결합해 농민에게 '지금 물이 작물에 위험한 수준으로 짜지고 있다'는 알림을 보낸다. 지역성이 매우 강한 것이 장점이며, 학생이 염수 침투 문제를 충분히 이해해야 발표가 설득력을 갖는다.",
  science: "염수 침투는 건기 하천 유량 감소로 해수가 상류로 밀려드는 현상이며, 전기전도도(EC) 측정으로 저가 감지가 가능하다. 식물의 염 스트레스 징후(잎 변색 등)를 이미지로 보조 판정한다.",
  numbers: "원안 수치가 확인됨: 2019~2020년 건기에 메콩 델타 13개 성 중 10개가 염수 침투 피해를 입었고, 염분이 약 6개월간 지속되며 최대 125km 내륙까지 도달해 장기 평균보다 30km 이상 깊이 들어갔다(CTCN/UNEP-DHI)[1][2]. 2020년 건기에는 4g/L 염분이 띠엔강 약 60km, 함루옹강 약 78km까지 올라와 2016년보다 더 깊었고, 5만 7천 ha 농지와 4만 가구의 식수에 피해를 줬다[3]. 염수 침투는 코앞 해안 성에서는 매년 1~6월 발생하지만(약 170만 ha), 가뭄이 심한 해에 더 이르고 깊게 나타난다[2].",
  economics: "농민의 작기 판단(파종·취수 시점)에 직결되어 지불 의사가 구체적이고, 농업 협동조합·지방정부 단위 구독이 판로다. 정부가 이미 염분 예보 시스템 구축에 투자 중이라 공공 파트너십 여지가 있다[1].",
  checks: ["EC(전기전도도) 센서 임계값의 작물별 기준 확보", "연꽃 스트레스 이미지 판정의 실제 정확도 검증"],
  references: [
    { label: "CTCN/UNEP-DHI — 메콩 염수 침투 데이터·예보 (2019-20, 10/13개성, 125km)", url: "https://unepdhi.org/strengthening-salinity-intrusion-data-sharing-and-forecasting-for-adaptation-to-climate-change-impacts-in-the-mekong-delta-of-viet-nam/", verified: true },
    { label: "Springer — 메콩 염수 침투 위협 (2020년 10/13개성)", url: "https://link.springer.com/chapter/10.1007/978-3-031-07500-1_1", verified: true },
    { label: "HAPRI — 2016·2020 메콩 가뭄·염수 침투 (60km, 78km, 5.7만ha, 4만가구)", url: "https://www.hapri.org/post/drought-and-salinity-intrusion-in-the-mekong-delta-what-are-the-fundamental-solutions", verified: true }
  ],
  related: ["F2", "F1"]
},
{
  id: "F8", category: "flood",
  title: "순환 퓨즈 제방 계약",
  subtitle: "무너지면 안 된다는 통념을 뒤집어, 무너질 지점을 마을이 직접 정하고 계약서로 나눠 갖는다",
  region: "지역 출발형: 나이지리아 니제르강 유역(코기·베이엘사 등) 저지대 촌락",
  concept: "촌락은 이미 라테라이트 흙제방을 자체 시공하지만 전 구간을 동일하게 '절대 무너지면 안 된다'는 기준으로 쌓기 때문에, 실제 홍수 때는 예측 불가능한 지점에서 무작위로 붕괴가 발생해 주거 밀집구역이 직접 피해를 입고, 붕괴 후 보상·분쟁 조정 규칙이 없어 매번 갈등으로 이어진다. 이 아이디어는 제방 한 구간만 저다짐 사질토로 축조해 설계 최고수위의 약 80% 지점(가정)에서 먼저 붕괴하도록 유도하고, 배후에 완경사 배수로로 연결된 순환 지정 휴경 농지를 배치해 범람수를 마을 대신 그곳으로 흘려보낸다. 여기에 매년 순환 배정표, 손실 보상 산식(공동노동 대체), 분쟁 조정 규칙을 명문화한 '제방 실패 거버넌스 계약서'를 결합해 기술조사+현장교육+계약서 템플릿의 패키지로 판매한다. 기술 자체(퓨즈 제방)는 미시시피강·프랑스 'digue fusible' 등에 이미 쓰이는 표준 공법이며, 이 아이디어의 차별점은 기술이 아니라 콘크리트 수문·정부 인증 없이 마을 관습법과 촌장 권위 위에서 저비용으로 작동하는 거버넌스 계약 구조다.",
  science: "제방의 붕괴 여부는 흙의 다짐도(compaction density)와 전단강도(shear strength)에 좌우된다는 토질역학 원리에 따라, 다짐을 약하게 하고 사질토 비율을 높이면 해당 구간의 임계 전단응력이 낮아져 설계 수위의 일부 지점에서 먼저 파괴되도록 유도할 수 있다. 파괴점을 완경사 배수로로 배후 휴경지와 연결하면 범람류 에너지가 침식이 아닌 저류·확산 방식으로 소산되어, 동일한 총 유량이라도 주거 밀집구역이 받는 충격이 줄어든다.",
  numbers: "문제 규모(검증): CNN이 나이지리아 재난관리청(NEMA) 발표를 인용해 2024년 8월 기준 나이지리아 홍수로 최소 170명이 사망하고 20만 명 이상이 이재민이 됐다고 보도했다[1](이후 9월 집계에서는 더 늘어 28만~64만 명대까지 보고됨 — 8월 시점 스냅샷임을 명시). 2022년 나이지리아 홍수는 최소 603~612명이 사망하고 140만 명이 대피한 것으로 집계된다[2]. 수익 구조(가정·유도 — 검증된 시공 사례 없음, 원문서 명시): 마을당 패키지 단가 1,500달러(가정)·원가 700달러(가정)로 마진 53.3%(유도), 고정비 5만 달러 기준 손익분기 약 63개 마을(유도). '마을당 700달러로 피해액 25,200~42,000달러를 방지, 비용 대비 36~60배'라는 핵심 주장은 구조적 피해 저감률 70%라는 검증되지 않은 공학적 가정 위에 세워진 것이다.",
  economics: "직접 사용자는 촌락 촌장회의·가구주이나 실제 구매자는 국제 NGO(WASH/DRR 프로젝트)나 나이지리아 재난적응기금·주정부 치수 예산 — 세계은행 NEWMAP류 기존 사업의 확산망과 지역 확대 요원 네트워크로 접근하는 B2B(사회적 조달) 모델이다. 재료(라테라이트 흙, 사질토)와 노동력을 마을이 이미 보유하고 있어 신규 조달이 필요 없다는 점이 저비용 구조의 근거다.",
  checks: ["원문서의 수익 구조·피해 저감률(70%) 수치 전부가 '가정'이며 검증된 시공 사례가 없음 — 실측 이전 발표에서는 반드시 가정으로 표시", "붕괴 유도 구간의 실제 설계고 확정을 위한 현지 측량 필요", "휴경지 배정에 대한 촌장 회의의 실제 동의와 주 치수 당국 인허가 확인 필요", "니제르강 유역 특정(코기·베이엘사)에서의 라테라이트 흙제방 자체 시공 관행 자체도 가정(assumed)으로 표시된 상태 — 현지 확인 필요", "2026-27 NFTE 시즌 챌린지 미발표 — 이 카드는 2025-26 시즌 CBT Tech Climate Solutions Challenge(SDG 13) 기준 매핑"],
  references: [
    { label: "CNN — 2024년 8월 나이지리아 홍수 (170명 사망, 20만+ 이재민, NEMA 발표)", url: "https://www.cnn.com/2024/08/27/africa/nigeria-floods-deaths-intl", verified: true },
    { label: "Wikipedia — 2022 Nigeria floods (603~612명 사망, 140만 명 대피)", url: "https://en.wikipedia.org/wiki/2022_Nigeria_floods", verified: true },
    { label: "ReliefWeb — Nigeria Floods Aug 2024 상황보고 (지역별 상세, 이후 확대 수치 포함)", url: "https://reliefweb.int/disaster/fl-2024-000159-nga", verified: true }
  ],
  related: ["F1", "F5"]
},
];
