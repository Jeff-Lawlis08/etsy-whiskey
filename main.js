var container = $('.container');
var settings = {
  url: 'https://openapi.etsy.com/v2/listings/active.js?api_key=k6k4slyy8d878dksd1utpbue&keywords=whiskey&includes=Images,Shop',
  type: 'GET',
  dataType: 'jsonp',
  success: function(data) {
    console.log(data.results);
    var dataImages = data.results.map(function(item, i, arr) {
      return item.Images[0].url_fullxfull;
    });
    console.log(dataImages);
    var dataNames = data.results.map(function(item, i, arr) {
      return item.title;
    });
    var companyName = data.results.map(function(item, i, arr) {
      return item.Shop.shop_name;
    });
    console.log(companyName);
    console.log(dataNames);
    var prices = data.results.map(function(item, i, arr) {
      return item.price;
    });
    console.log(prices);
    data.results.forEach(function(item, i, arr) {
      var itemDivs = $('<div class="items"><img src="'+dataImages[i]+'"/><div class="item-info"><h6 class="item-names">'+dataNames[i]+'</h6><span>'+companyName[i]+'</span><span>'+prices[i]+'</span></div></div>');
      container.append(itemDivs);
    });
  },
  error: function(xhs, status, error) {

  }
};
var data = $.ajax(settings);
