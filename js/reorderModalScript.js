var rowCount = 0;
var n = 4;
var productListHtml = getProductListHtml();
var IN_PRODUCTION = false;

function getProductListHtml() {
    var productListHtml = '<div class=\"menu\">\n';
    var testList = [
        ['sku_FrO0nimNadvjd7', 'Frozen Yogurt Mix, Chocolate (363 oz)'],
        ['sku_FrNlwdTLaT9l2I', 'Frozen Yogurt Mix, Vanilla (363 oz)'],
        ['sku_GWff6CSY22X97Z', 'New York Cheesecake Flavor Concentrate (Half-Gallon)'],
        ['sku_GWfgNfVIjIqnyO', 'Strawberry Flavor Concentrate (Half-Gallon)'],
        ['sku_GWfiADXLT9VcRh', 'Cups, 6 oz. (50 Cups)'],
        ['sku_GWfjrmsoDdhrAF', 'Cups, 8 oz. (50 Cups)'],
        ['sku_GWfk7xwckDPPFw', 'Cups, 16 oz. (50 Cups)']
    ];
    
    var productionList = [
        ['sku_Gc6YgZwTGwDSLe', 'Frozen Yogurt Mix, Chocolate (363 oz)'],
        ['sku_Gc6YlX4VnaWOhV', 'Frozen Yogurt Mix, Vanilla (363 oz)'],
        ['sku_Gc6XBGDhAoHAfu', 'New York Cheesecake Flavor Concentrate (Half-Gallon)'],
        ['sku_Gc6XYZYDq3bbIb', 'Strawberry Flavor Concentrate (Half-Gallon)'],
        ['sku_Gc6WjBFvAw0yXV', 'Cups, 6 oz. (50 Cups)'],
        ['sku_Gc6VVOn6TPWL9z', 'Cups, 8 oz. (50 Cups)'],
        ['sku_Gc6SlQsAOMLBuD', 'Cups, 16 oz. (50 Cups)']
    ];
    
    var productList = IN_PRODUCTION ? productionList : testList;
    
    productList.forEach(element => (productListHtml += "<div class=\"item\" data-value=\"" + element[0] + "\">" + element[1] + "</div>\n"));
    
    productListHtml += '</div>\n';
    return productListHtml;
}

function getRowN(n) {
    return "<div class=\"fields\">\
                        <div class=\"twelve wide field\" style=\"margin-bottom: 0.2em\">\
                            <div class=\"ui search selection dropdown\" id=\"search-select" + n + "\">\
                                <input type=\"hidden\" name=\"product\" id=\"sku" + n + "\">\
                                <i class=\"dropdown icon\"></i>\
                                <div class=\"default text\">Product </div>\n" +
                                productListHtml +
                            "</div>\
                        </div>\
                        <div class=\"four wide field\" style=\"margin-bottom: 0.75em\">\
                          <div class=\"ui left icon input\">\
                            <i class=\"shop icon\"></i>\
                            <input type=\"number\" min=\"0\" name=\"q" + n + "\" id=\"q" + n + "\" placeholder=\"Quantity\">\
                          </div>\
                        </div>\
                    </div>";
}

function insertRows() {
    var toInsert = "";
    for (var i = rowCount + 1; i <= rowCount + n; i++) {
        toInsert += getRowN(i);
    }
    
    var tag_id = document.getElementById('insertRowPoint_' + rowCount);
    
    rowCount += n;
    toInsert += ("<div id=\"insertRowPoint_" + rowCount + "\"></div>");
    
    tag_id.innerHTML = toInsert;
    
    for (i = rowCount - n + 1; i <= rowCount; i++) {
        $('#search-select' + i) .dropdown();
    }
}

function deleteRows() {
    if (rowCount > n) {
        var tag_id = document.getElementById('insertRowPoint_' + (rowCount - n));
        while (tag_id.firstChild) { tag_id.removeChild(tag_id.firstChild); }
        rowCount -= n;
    }
}

insertRows();
