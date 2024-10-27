// Định nghĩa lớp cho bất động sản
var House = /** @class */ (function () {
    function House(address, price, description, imageUrl) {
        this.address = address;
        this.price = price;
        this.description = description;
        this.imageUrl = imageUrl;
    }
    // Phương thức để hiển thị thông tin căn nhà
    House.prototype.displayInfo = function () {
        return "\n            <div>\n                <img src=\"".concat(this.imageUrl, "\" alt=\"House image\" width=\"100%\" />\n                <h3>").concat(this.address, "</h3>\n                <p>Gi\u00E1: ").concat(this.price.toLocaleString('vi-VN'), " VND</p>\n                <p>").concat(this.description, "</p>\n            </div>\n        ");
    };
    return House;
}());
// Tạo một số đối tượng căn nhà
var properties = [
    new House("123 Đường ABC, TP.HCM", 5000000000, "Nhà 3 tầng, đầy đủ nội thất.", "images/house1.jpg"),
    new House("456 Đường XYZ, Hà Nội", 8000000000, "Nhà rộng rãi, khu dân cư yên tĩnh.", "images/house2.jpg"),
    new House("789 Đường DEF, Đà Nẵng", 6000000000, "Nhà gần biển, view đẹp.", "images/house3.jpg"),
];
// Hàm hiển thị danh sách căn nhà
function displayProperties() {
    var propertyList = document.getElementById("property-list");
    if (propertyList) {
        propertyList.innerHTML = properties.map(function (property) { return property.displayInfo(); }).join("");
    }
}
// Khi tài liệu đã tải xong
document.addEventListener("DOMContentLoaded", function () {
    displayProperties(); // Hiển thị danh sách căn nhà
});
