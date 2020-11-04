document.getElementById("countId").onclick = function() {
    var hamprice = 50;
    var cokeprice = 20;
    var hamNum = parseInt(document.getElementById("hamNumId").value) * hamprice;
    var cokeNum = parseInt(document.getElementById("cokeNumId").value) * cokeprice;
    document.getElementById("totalId").textContent = hamNum + cokeNum;
}