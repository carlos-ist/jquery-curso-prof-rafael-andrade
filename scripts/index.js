console.log(1)
console.info(2)

$(function() {
    var allParagraphs = $("p");
    console.info(allParagraphs);

    var lis = $("li");
    var children = $("ul li");
    console.log(this.getElementsByTagName("li"));

    console.info(lis);
    console.info(children);

    var second = $("#secondP");
    
    var list = $(".list");
    var ul = $("ul.list");
    var ol = $("ol.list");

    $(".element-x").text("Linha X");
    $(".element-y").text("Linha Y");





});

