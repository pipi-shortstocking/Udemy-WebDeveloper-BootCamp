//THIS IS A STRING OF JSON (NOT AN OBJECT)
const data = `{"ticker":{"base":"BTC","target":"USD","price":"11288.49813464","volume":"91769.69699773","change":"-46.29462447"},"timestamp":1596510482,"success":true,"error":""}`;

// THIS IS A JS OBJECT - 역직렬화
const parsedData = JSON.parse(data);

// 직렬화 : JSON으로 변환하는 것 - JSON.stringify
// 역직렬화 : JSON을 객체, 해시테이블, 딕셔너리 등으로 변화하는 것 - JSON.parse
