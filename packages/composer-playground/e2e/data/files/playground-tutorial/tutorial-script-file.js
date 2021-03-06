/**
 * Track the trade of a commodity from one trader to another
* @param {org.acme.mynetwork.Trade} trade - the trade to be processed
* @transaction
*/
function tradeCommodity(trade) {
trade.commodity.owner = trade.newOwner;
return getAssetRegistry('org.acme.mynetwork.Commodity')
.then(function (assetRegistry) {
return assetRegistry.update(trade.commodity);
});
}
