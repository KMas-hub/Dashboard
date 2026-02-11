// ------------------------
// 時計
// ------------------------
function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const clock = document.getElementById('clock');
  if (clock) clock.textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateClock, 1000);
updateClock();

// ------------------------
// センサーエンドポイント（そのまま）
// ------------------------
const sensorEndpoints = {
  //out_temp: "https://wiolink.seeed.co.jp/v1/node/GroveTempHumiSHT35I2C0/temperature?access_token=2a0b8401c109ec580d952fa6215d201e",
  //out_humid: "https://wiolink.seeed.co.jp/v1/node/GroveTempHumiSHT35I2C0/humidity?access_token=2a0b8401c109ec580d952fa6215d201e",
  tankCa_temp: "https://wiolink.seeed.co.jp/v1/node/GroveTemp1WireD0/temp?access_token=004185b7eb7199c2d9e249e65a281563",
  tankNPK_temp: "https://wiolink.seeed.co.jp/v1/node/GroveTemp1WireD1/temp?access_token=004185b7eb7199c2d9e249e65a281563",
  //temp10e: "https://wiolink.seeed.co.jp/v1/node/GroveTempHumiSHT35I2C0/temperature?access_token=18ea1e37afa57223fc89f81f41e0c890",
  //humid10e: "https://wiolink.seeed.co.jp/v1/node/GroveTempHumiSHT35I2C0/humidity?access_token=18ea1e37afa57223fc89f81f41e0c890",
  soil10e1: "https://wiolink.seeed.co.jp/v1/node/GroveTemp1WireD1/temp?access_token=80fe30f51fbaef1734d80b24ba7edaa9",
  soil10e2: "https://wiolink.seeed.co.jp/v1/node/GroveTemp1WireD0/temp?access_token=80fe30f51fbaef1734d80b24ba7edaa9",
  //temp10w: "https://wiolink.seeed.co.jp/v1/node/GroveTempHumiSHT35I2C0/temperature?access_token=18ea1e37afa57223fc89f81f41e0c890",
  //humid10w: "https://wiolink.seeed.co.jp/v1/node/GroveTempHumiSHT35I2C0/humidity?access_token=18ea1e37afa57223fc89f81f41e0c890",
  soil10w1: "https://wiolink.seeed.co.jp/v1/node/GroveTemp1WireD1/temp?access_token=2a0b8401c109ec580d952fa6215d201e",
  soil10w2:"https://wiolink.seeed.co.jp/v1/node/GroveTemp1WireD0/temp?access_token=2a0b8401c109ec580d952fa6215d201e",
  //house10_uv: "https://wiolink.seeed.co.jp/v1/node/GroveSI114XI2C0/UV?access_token=53b6982b898e788cb38a1cf6f82ff378",
  //house10_vl: "https://wiolink.seeed.co.jp/v1/node/GroveSI114XI2C0/visiblelight?access_token=53b6982b898e788cb38a1cf6f82ff378",
  //house10_ir: "https://wiolink.seeed.co.jp/v1/node/GroveSI114XI2C0/IR?access_token=53b6982b898e788cb38a1cf6f82ff378",
  //soil10n1: "https://wiolink.seeed.co.jp/v1/node/GroveTemp1WireD1/temp?access_token=a09c8ff06cbd72eac1dc922d83e44114",
  //soil10n2: "https://wiolink.seeed.co.jp/v1/node/GroveTemp1WireD0/temp?access_token=a09c8ff06cbd72eac1dc922d83e44114",
  //mois10s: "https://wiolink.seeed.co.jp/v1/node/GroveMoistureA0/moisture?access_token=c5fa1bcf451cf95b32e447aa5692cd70",
  soil10s1: "https://wiolink.seeed.co.jp/v1/node/GroveTemp1WireD1/temp?access_token=a09c8ff06cbd72eac1dc922d83e44114",
  soil10s2: "https://wiolink.seeed.co.jp/v1/node/GroveTemp1WireD0/temp?access_token=a09c8ff06cbd72eac1dc922d83e44114",
  temp1n: "https://wiolink.seeed.co.jp/v1/node/GroveTempHumiSHT35I2C0/temperature?access_token=e9d5db461f34659305f7a6bbcbf4a9e3",
  humid1n: "https://wiolink.seeed.co.jp/v1/node/GroveTempHumiSHT35I2C0/humidity?access_token=e9d5db461f34659305f7a6bbcbf4a9e3",
  soil1n: "https://wiolink.seeed.co.jp/v1/node/GroveTemp1WireD1/temp?access_token=e9d5db461f34659305f7a6bbcbf4a9e3",
  temp2n: "https://wiolink.seeed.co.jp/v1/node/GroveTempHumiSHT35I2C0/temperature?access_token=a04e60017fac97b4bfd1da3912ae7ed7",
  humid2n: "https://wiolink.seeed.co.jp/v1/node/GroveTempHumiSHT35I2C0/humidity?access_token=a04e60017fac97b4bfd1da3912ae7ed7",
  soil2n: "https://wiolink.seeed.co.jp/v1/node/GroveTemp1WireD1/temp?access_token=a04e60017fac97b4bfd1da3912ae7ed7",
  temp3n: "https://wiolink.seeed.co.jp/v1/node/GroveTempHumiSHT35I2C0/temperature?access_token=18ea1e37afa57223fc89f81f41e0c890",
  humid3n: "https://wiolink.seeed.co.jp/v1/node/GroveTempHumiSHT35I2C0/humidity?access_token=18ea1e37afa57223fc89f81f41e0c890",
  soil3n: "https://wiolink.seeed.co.jp/v1/node/GroveTemp1WireD1/temp?access_token=18ea1e37afa57223fc89f81f41e0c890",
  temp4n: "https://wiolink.seeed.co.jp/v1/node/GroveTempHumiSHT35I2C0/temperature?access_token=06365a4adf47803f9d5a28aefa3a2792",
  humid4n: "https://wiolink.seeed.co.jp/v1/node/GroveTempHumiSHT35I2C0/humidity?access_token=06365a4adf47803f9d5a28aefa3a2792",
  soil4n: "https://wiolink.seeed.co.jp/v1/node/GroveTemp1WireD1/temp?access_token=06365a4adf47803f9d5a28aefa3a2792",
  temp5n: "https://wiolink.seeed.co.jp/v1/node/GroveTempHumiSHT35I2C0/temperature?access_token=03d5be181d138741fb82ba16c14eb008",
  humid5n: "https://wiolink.seeed.co.jp/v1/node/GroveTempHumiSHT35I2C0/humidity?access_token=03d5be181d138741fb82ba16c14eb008",
  soil5n: "https://wiolink.seeed.co.jp/v1/node/GroveTemp1WireD1/temp?access_token=03d5be181d138741fb82ba16c14eb008",
  temp6n: "https://wiolink.seeed.co.jp/v1/node/GroveTempHumiSHT35I2C1/temperature?access_token=b2dadcf349719f0486e104e4682bbd3c",
  humid6n: "https://wiolink.seeed.co.jp/v1/node/GroveTempHumiSHT35I2C1/humidity?access_token=b2dadcf349719f0486e104e4682bbd3c",
  soil6n: "https://wiolink.seeed.co.jp/v1/node/GroveTemp1WireD0/temp?access_token=b2dadcf349719f0486e104e4682bbd3c",
  temp7n: "https://wiolink.seeed.co.jp/v1/node/GroveTempHumiSHT35I2C0/temperature?access_token=c7a78328a4a91c967b5639fe92ba0e68",
  humid7n: "https://wiolink.seeed.co.jp/v1/node/GroveTempHumiSHT35I2C0/humidity?access_token=c7a78328a4a91c967b5639fe92ba0e68",
  soil7n: "https://wiolink.seeed.co.jp/v1/node/GroveTemp1WireD1/temp?access_token=c7a78328a4a91c967b5639fe92ba0e68",
  temp8n: "https://wiolink.seeed.co.jp/v1/node/GroveTempHumiSHT35I2C0/temperature?access_token=fe692e4c823a106599949775150ced82",
  humid8n: "https://wiolink.seeed.co.jp/v1/node/GroveTempHumiSHT35I2C0/humidity?access_token=fe692e4c823a106599949775150ced82",
  soil8n: "https://wiolink.seeed.co.jp/v1/node/GroveTemp1WireD1/temp?access_token=fe692e4c823a106599949775150ced82",
  temp9n: "https://wiolink.seeed.co.jp/v1/node/GroveTempHumiSHT35I2C0/temperature?access_token=d45143c70810b21fa4178bb01c4f8677",
  humid9n: "https://wiolink.seeed.co.jp/v1/node/GroveTempHumiSHT35I2C0/humidity?access_token=d45143c70810b21fa4178bb01c4f8677",
  soil9n: "https://wiolink.seeed.co.jp/v1/node/GroveTemp1WireD1/temp?access_token=d45143c70810b21fa4178bb01c4f8677",
};

// ------------------------
// JSON キーのマップ（取得レスポンスに合わせる）
// ------------------------
const sensorKeyMap = {
  //out_temp: "temperature",
  //out_humid: "humidity",
  tankCa_temp: "temperature",
  tankNPK_temp: "temperature",
  //temp10e: "temperature",
  //humid10e: "humidity",
  soil10e1: "temperature",
  soil10e2: "temperature",
  //temp10w: "temperature",
  //humid10w: "humidity",
  soil10w1: "temperature",
  soil10w2: "temperature",
  //house10_uv: "UV",
  //house10_vl: "visiblelight",
  //house10_ir: "IR",
  //soil10n1: "temperature",
  //soil10n2: "temperature",
  //mois10s: "moisture",
  soil10s1: "temperature",
  soil10s2: "temperature",
  temp1n: "temperature",
  humid1n: "humidity",
  soil1n: "temperature",
  temp2n: "temperature",
  humid2n: "humidity",
  soil2n: "temperature",
  temp3n: "temperature",
  humid3n: "humidity",
  soil3n: "temperature",
  temp4n: "temperature",
  humid4n: "humidity",
  soil4n: "temperature",
  temp5n: "temperature",
  humid5n: "humidity",
  soil5n: "temperature",
  temp6n: "temperature",
  humid6n: "humidity",
  soil6n: "temperature",
  temp7n: "temperature",
  humid7n: "humidity",
  soil7n: "temperature",
  temp8n: "temperature",
  humid8n: "humidity",
  soil8n: "temperature",
  temp9n: "temperature",
  humid9n: "humidity",
  soil9n: "temperature",
};

// ------------------------
// 最新値格納（画面表示用に残す）
// ------------------------
const latestValues = {};

// ------------------------
// 色判定（元のロジック維持）
// ------------------------
function applyColor(id, value) {
  const span = document.getElementById(id);
  if (!span) return;

  span.classList.remove("level-low", "level-mid", "level-high", "level-Slow", "level-midlow");

  if (id.includes("temp")) {
    if (value < 15) span.classList.add("level-Slow");
    else if (value < 30) span.classList.add("level-low");
    else if (value < 35) span.classList.add("level-mid");
    else span.classList.add("level-high");
  } else if (id.includes("humid")) {
    if (value > 85) span.classList.add("level-Slow");
    else if (value > 45) span.classList.add("level-low");
    else if (value > 35) span.classList.add("level-mid");
    else span.classList.add("level-high");
  } else if (id.includes("soil")) {
    if (value < 15) span.classList.add("level-Slow");
    else if (value < 17) span.classList.add("level-midlow");
    else if (value < 21) span.classList.add("level-low");
    else if (value < 25) span.classList.add("level-mid");
    else span.classList.add("level-high");
  }
}

// ------------------------
// センサー取得（キャッシュ回避 & value フォールバック）
// ------------------------
async function fetchSensor(id) {
  const baseUrl = sensorEndpoints[id];
  if (!baseUrl) return null;

  // キャッシュ回避用パラメータを付与
  const url = baseUrl + (baseUrl.includes('?') ? '&' : '?') + '_ts=' + Date.now();

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const data = await res.json();

    // まず map による key 取得、それが無ければ data.value を試す
    const key = sensorKeyMap[id];
    let value = undefined;
    if (key && data[key] !== undefined) value = data[key];
    else if (data.value !== undefined) value = data.value;
    else {
      // API によっては { "data": { "value": ... } } のような構造の可能性もあるため安全策
      if (data.data && data.data.value !== undefined) value = data.data.value;
    }

    if (value === undefined) throw new Error('値が見つかりません');

    latestValues[id] = value;

    // 単位判定（元ロジックに準拠）
    const unit =
      id.includes("humid") ? "%" :
      id.includes("uv") ? "mw/cm²" :
      id.includes("vl") || id.includes("ir") ? "lm" :
      id.includes("mois") ? "%" :
      "°C";

    const el = document.getElementById(id);
    if (el) el.textContent = value + " " + unit;

    applyColor(id, value);
    return value;

  } catch (e) {
    console.error(id + ' 取得エラー:', e);
    const el = document.getElementById(id);
    if (el) el.textContent = "取得失敗";
    return null;
  }
}

// ------------------------
// 全センサー更新（ローカルストレージ呼び出しなし）
// ------------------------
function updateAllSensors() {
  // すべてのエンドポイントについて fetch を並列に行い、画面を更新する
  const ids = Object.keys(sensorEndpoints);
  return Promise.all(ids.map(id => fetchSensor(id)))
    .catch(err => console.error('updateAllSensors エラー:', err));
}

// ------------------------
// 実行スケジュール（元の1分ごと）
// ------------------------
updateAllSensors();               // 初回
setInterval(updateAllSensors, 60 * 1000); // 1分ごと
