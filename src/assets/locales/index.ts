const vi_VN = require('./vi/string.json');
const es_US = require('./es/string.json');
const ko_KR = require('./ko/string.json');
export const resources = {vi_VN, es_US, ko_KR};
export type LangTypes = keyof typeof resources;
