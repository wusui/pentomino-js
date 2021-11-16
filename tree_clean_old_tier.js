const pUtils = require('./pent_utils');

const getKeysTree = tnode => pUtils.getRelevantKeys(tnode)
  (['point', 'parent', 'branches', 'figure', 'pentomino']);

// const fixKeysFormat = obj => node => ({[node]: obj[node]});

const reformatTier = pObj => pUtils.mergeObjects(getKeysTree(pObj).map(
//  fixKeysFormat(pObj)
  obj => node => ({[node]: obj[node]})
  ));

exports.reformatTier = reformatTier
