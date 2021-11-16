const tPoints = require('./tree_points');
const treeNode = require('./tree_nodes');

const removeDupPoints = tree => tree.map(removeSamePoint(tree));

const removeSamePoint = tree => tnode => tnode.hasOwnProperty('offspring') ?
  {point: tnode['point'], parent: tnode['parent'],
  offspring: removeSamePointOffspring(tree)(tnode)} : tnode;

const removeSamePointOffspring = tree => tnode =>
  ({points: (checkDupPoint
  (treeNode.getParents(tree)(tnode.offspring.index))
  (tnode.offspring.points)), index: tnode.offspring.index});

const checkDupPoint = plist => pointList => pointList.filter(
  checkIfIamDup(plist));

const checkIfIamDup = plist => point => plist.every(pointNotMatch(point));

const pointNotMatch = point => pentry => !tPoints.compPoints(point)(pentry);

exports.removeDupPoints = removeDupPoints;
