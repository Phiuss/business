// Định nghĩa một interface cho đối tượng 'Property'
interface Property {
    address: string;
    price: number;
    description: string;
    imageUrl: string;
}

// Định nghĩa lớp cho bất động sản
class House implements Property {
    constructor(
        public address: string,
        public price: number,
        public description: string,
        public imageUrl: string
    ) {}

    // Phương thức để hiển thị thông tin căn nhà
    displayInfo(): string {
        return `
            <div>
                <img src="${this.imageUrl}" alt="House image" width="100%" />
                <h3>${this.address}</h3>
                <p>Giá: ${this.price.toLocaleString('vi-VN')} VND</p>
                <p>${this.description}</p>
            </div>
        `;
    }
}

// Tạo một số đối tượng căn nhà
const properties: House[] = [
    new House("123 Đường ABC, TP.HCM", 5000000000, "Nhà 3 tầng, đầy đủ nội thất.", "images/house1.jpg"),
    new House("456 Đường XYZ, Hà Nội", 8000000000, "Nhà rộng rãi, khu dân cư yên tĩnh.", "images/house2.jpg"),
    new House("789 Đường DEF, Đà Nẵng", 6000000000, "Nhà gần biển, view đẹp.", "images/house3.jpg"),
];

// Hàm hiển thị danh sách căn nhà
function displayProperties() {
    const propertyList = document.getElementById("property-list");
    if (propertyList) {
        propertyList.innerHTML = properties.map(property => property.displayInfo()).join("");
    }
}

// Khi tài liệu đã tải xong
document.addEventListener("DOMContentLoaded", () => {
    displayProperties(); // Hiển thị danh sách căn nhà
});
