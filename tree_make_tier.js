const pentUtils = require('./pent_utils');

const extractNewPoints = node => node.offspring.points;

const getIndexValue = node => node.offspring.index;

const getNewPoints = node => node.hasOwnProperty('offspring');

const findNewNodes = tree => tree.filter(getNewPoints);

const getNewLeafInfo = tree => [tree.map(extractNewPoints),
  tree.map(getIndexValue)];

const getNextLevelInfo = tree => getNewLeafInfo(findNewNodes(tree));

const getLength = nodeArray => nodeArray.length;

const orgGetNumNodes = newNodes => newNodes[0].map(getLength);

const getParentLinkValues = nextLevel => pentUtils.zip(
  orgGetNumNodes(nextLevel), nextLevel[1]);

const getFlatParentLinks = linkInfo => linkInfo.map(genLinkDist);

const genLinkDist = pInfo => Array(pInfo[0]).fill(pInfo[1]);

const newNextTierNodes = nInfo => nInfo.map(newNodeObject);

const newNodeObject = nInfo => ({point: nInfo[0], parent: nInfo[1]});

const makeNextTier = levInfo => pentUtils.zip(levInfo[0].flat(),
  getFlatParentLinks(getParentLinkValues(levInfo)).flat(5));

const genNextTier = tree => newNextTierNodes(
  makeNextTier(getNextLevelInfo(tree)));

exports.genNextTier = genNextTier;
