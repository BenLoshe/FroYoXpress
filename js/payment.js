$("#quantity").blur(function() {
    var b = $("#quantity").val();

    var p = b * 0.35 * 363;
    var p = "$" + p.toFixed(2)
    $("#total_cost").val(p);
});