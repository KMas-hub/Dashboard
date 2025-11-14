//現在時刻
function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);
updateClock(); // 初回実行

// ====== センサーAPIエンドポイント ======
const sensorEndpoints = {
  out_temp: "https://wiolink.seeed.co.jp/v1/node/GroveTempHumiSHT35I2C0/temperature?access_token=2a0b8401c109ec580d952fa6215d201e",
  out_humid: "https://wiolink.seeed.co.jp/v1/node/GroveTempHumiSHT35I2C0/humidity?access_token=2a0b8401c109ec580d952fa6215d201e",
  
  tankA_temp: "https://wiolink.seeed.co.jp/v1/node/GroveTemp1WireD0/temp?access_token=c26325acc413bc0bdf41942f42670672",
  tankB_temp: "https://wiolink.seeed.co.jp/v1/node/GroveTemp1WireD1/temp?access_token=c26325acc413bc0bdf41942f42670672",
  
  temp10e: "https://wiolink.seeed.co.jp/v1/node/GroveTempHumiSHT35I2C0/temperature?access_token=18ea1e37afa57223fc89f81f41e0c890",
  humid10e: "https://wiolink.seeed.co.jp/v1/node/GroveTempHumiSHT35I2C0/humidity?access_token=18ea1e37afa57223fc89f81f41e0c890",
  soil10e: "https://wiolink.seeed.co.jp/v1/node/GroveTemp1WireD1/temp?access_token=18ea1e37afa57223fc89f81f41e0c890",

  temp10w: "https://wiolink.seeed.co.jp/v1/node/GroveTempHumiSHT35I2C0/temperature?access_token=18ea1e37afa57223fc89f81f41e0c890",
  humid10w: "https://wiolink.seeed.co.jp/v1/node/GroveTempHumiSHT35I2C0/humidity?access_token=18ea1e37afa57223fc89f81f41e0c890",
  soil10w: "https://wiolink.seeed.co.jp/v1/node/GroveTemp1WireD1/temp?access_token=18ea1e37afa57223fc89f81f41e0c890",

  house10_uv: "https://wiolink.seeed.co.jp/v1/node/GroveSI114XI2C0/UV?access_token=53b6982b898e788cb38a1cf6f82ff378",
  house10_vl: "https://wiolink.seeed.co.jp/v1/node/GroveSI114XI2C0/visiblelight?access_token=53b6982b898e788cb38a1cf6f82ff378",
  house10_ir: "https://wiolink.seeed.co.jp/v1/node/GroveSI114XI2C0/IR?access_token=53b6982b898e788cb38a1cf6f82ff378",
  soil10n: "https://wiolink.seeed.co.jp/v1/node/GroveTemp1WireD1/temp?access_token=53b6982b898e788cb38a1cf6f82ff378",

  mois10s: "https://wiolink.seeed.co.jp/v1/node/GroveMoistureA0/moisture?access_token=c5fa1bcf451cf95b32e447aa5692cd70",
  soil10s: "https://wiolink.seeed.co.jp/v1/node/GroveTemp1WireD0/temp?access_token=c5fa1bcf451cf95b32e447aa5692cd70",

  temp1n: "https://wiolink.seeed.co.jp/v1/node/GroveTempHumiSHT35I2C0/temperature?access_token=e9d5db461f34659305f7a6bbcbf4a9e3",
  humid1n: "https://wiolink.seeed.co.jp/v1/node/GroveTempHumiSHT35I2C0/humidity?access_token=e9d5db461f34659305f7a6bbcbf4a9e3",
  soil1n: "https://wiolink.seeed.co.jp/v1/node/GroveTemp1WireD1/temp?access_token=e9d5db461f34659305f7a6bbcbf4a9e3",

  temp2n: "https://wiolink.seeed.co.jp/v1/node/GroveTempHumiSHT35I2C0/temperature?access_token=a04e60017fac97b4bfd1da3912ae7ed7",
  humid2n: "https://wiolink.seeed.co.jp/v1/node/GroveTempHumiSHT35I2C0/humidity?access_token=a04e60017fac97b4bfd1da3912ae7ed7",
  soil2n: "https://wiolink.seeed.co.jp/v1/node/GroveTemp1WireD1/temp?access_token=a04e60017fac97b4bfd1da3912ae7ed7",

  temp5n: "https://wiolink.seeed.co.jp/v1/node/GroveTempHumiSHT35I2C0/temperature?access_token=03d5be181d138741fb82ba16c14eb008",
  humid5n: "https://wiolink.seeed.co.jp/v1/node/GroveTempHumiSHT35I2C0/humidity?access_token=03d5be181d138741fb82ba16c14eb008",
  soil5n: "https://wiolink.seeed.co.jp/v1/node/GroveTemp1WireD1/temp?access_token=03d5be181d138741fb82ba16c14eb008",

  temp8n: "https://wiolink.seeed.co.jp/v1/node/GroveTempHumiSHT35I2C0/temperature?access_token=fe692e4c823a106599949775150ced82",
  humid8n: "https://wiolink.seeed.co.jp/v1/node/GroveTempHumiSHT35I2C0/humidity?access_token=fe692e4c823a106599949775150ced82",
  soil8n: "https://wiolink.seeed.co.jp/v1/node/GroveTemp1WireD1/temp?access_token=fe692e4c823a106599949775150ced82",

  temp9n: "https://wiolink.seeed.co.jp/v1/node/GroveTempHumiSHT35I2C0/temperature?access_token=d45143c70810b21fa4178bb01c4f8677",
  humid9n: "https://wiolink.seeed.co.jp/v1/node/GroveTempHumiSHT35I2C0/humidity?access_token=d45143c70810b21fa4178bb01c4f8677",
  soil9n: "https://wiolink.seeed.co.jp/v1/node/GroveTemp1WireD1/temp?access_token=d45143c70810b21fa4178bb01c4f8677",
  // 今後どんどん追加可能
};

// 返ってくるJSONのキーをマッピング
const sensorKeyMap = {
  out_temp: "temperature",
  out_humid: "humidity",

  tankA_temp: "temperature",
  tankB_temp: "temperature",

  temp10e: "temperature",
  humid10e: "humidity",
  soil10e: "temperature",

  temp10w: "temperature",
  humid10w: "humidity",
  soil10w: "temperature",

  house10_uv: "UV",
  house10_vl: "VL",
  house10_ir: "IR",
  soil10n: "temperature",

  mois10s: "humidity",
  soil10s: "temperature",

  temp1n: "temperature",
  humid1n: "humidity",
  soil1n: "temperature",

  temp2n: "temperature",
  humid2n: "humidity",
  soil2n: "temperature",

  temp5n: "temperature",
  humid5n: "humidity",
  soil5n: "temperature",

  temp8n: "temperature",
  humid8n: "humidity",
  soil8n: "temperature",

  temp9n: "temperature",
  humid9n: "humidity",
  soil9n: "temperature",
};

const latestValues = {};

// ====== 色を判定する関数 ======
function applyColor(id, value) {
  const span = document.getElementById(id);
  if (!span) return;

  // 既存クラスを外す
  span.classList.remove("level-low", "level-mid", "level-high");

  // 背景色（気温）
  if (id.includes("temp")) {
    if  (value < 15) {
      span.classList.add("level-Slow");  // 青
    } else if (value < 30) {
      span.classList.add("level-low");   // 緑
    } else if (value < 35) {
      span.classList.add("level-mid");   // 黄
    } else {
      span.classList.add("level-high");  // 赤
    }
  }

  // 背景色（湿度）
  else if (id.includes("humid")) {
    if  (value > 85) {
      span.classList.add("level-Slow");  // 青
    } else if (value > 45) {
      span.classList.add("level-low");   // 緑
    } else if (value > 35) {
      span.classList.add("level-mid");   // 黄
    } else {
      span.classList.add("level-high");  // 赤
    }
  }

    //　背景色（地温）
  else if (id.includes("soil")) {
    if  (value < 15) {
      span.classList.add("level-Slow");  // 青
    } else if (value < 17) {
      span.classList.add("level-midlow");// 水色
    } else if (value < 21) {
      span.classList.add("level-low");   // 緑
    } else if (value < 25) {
      span.classList.add("level-mid");   // 黄
    } else {
      span.classList.add("level-high");  // 赤
    }
  }

  // 光センサーなどは必要に応じて追加
}

// ====== センサー値取得 ======
async function fetchSensor(id) {
  try {
    const res = await fetch(sensorEndpoints[id]);
    const data = await res.json();
    const key = sensorKeyMap[id];
    const value = data[key];

    if (value === undefined) throw new Error("データなし");
    latestValues[id] = value;

    const unit =
      id.includes("humid") ? "%" :
      id.includes("uv") ? "mw/cm²" :
      id.includes("vl") || id.includes("ir") ? "lm" :
      "°C";

    document.getElementById(id).textContent = value + " " + unit;

    applyColor(id, value);
    
  } 
  catch (e) {
    const el = document.getElementById(id);
    if (el) el.textContent = "取得失敗";
    console.error(`${id} エラー:`, e);
  }
}

// ====== 全センサー更新 ======
function updateAllSensors() {
    return Promise.all(Object.keys(sensorEndpoints).map(fetchSensor))
        .then(saveToLocalStorage);
}

// ====== ローカルストレージ保存 ======
function saveToLocalStorage() {
    const timestamp = new Date().toISOString();
    const stored = JSON.parse(localStorage.getItem("sensorDataLog") || "[]");

    const record = {
        timestamp,
        values: { ...latestValues }
    };

    // 48時間分を保持
    const cutoff = new Date(Date.now() - 24 * 60 * 60 * 1000);
    const filtered = stored.filter(entry => new Date(entry.timestamp) > cutoff);
    filtered.push(record);

    // 上限300件
    while (filtered.length > 300) filtered.shift();

    localStorage.setItem("sensorDataLog", JSON.stringify(filtered));
    console.log("保存:", record);
}

// ====== 一定間隔で更新 ======
setInterval(updateAllSensors, 60 * 1000); // 1分ごと
updateAllSensors(); // 初回実行