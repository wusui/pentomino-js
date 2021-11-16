const zip = (a, b) => a.map((k, i) => [k, b[i]]);

const getRelevantKeys = pObj => kList => Object.keys(pObj).filter(
        keyList => indivKey => keyList.indexOf(indivKey) != -1);
//  keyChecker(kList));

// const keyChecker = keyList => indivKey => keyList.indexOf(indivKey) != -1;

const mergeObjects = pObj => Object.assign({}, ...pObj);

const findDupLinks = array => [...new Set(
  array.filter((value, index, self) => self.indexOf(value) !== index))];

exports.zip = zip;
exports.getRelevantKeys = getRelevantKeys;
exports.mergeObjects = mergeObjects;
exports.findDupLinks = findDupLinks;
