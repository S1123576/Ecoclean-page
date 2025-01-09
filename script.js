// 初始化地圖和標記
let map, garbageTruckMarker;
function initMap() {
    // 地圖中心點
    const initialPosition = { lat: 25.033964, lng: 121.564468 }; // 台北 101 位置

    // 創建地圖
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: initialPosition,
    });

    // 創建垃圾車標記
    garbageTruckMarker = new google.maps.Marker({
        position: initialPosition,
        map: map,
        title: "垃圾車位置",
        icon: {
            url: "https://maps.google.com/mapfiles/kml/shapes/truck.png", // 垃圾車圖示
            scaledSize: new google.maps.Size(50, 50),
        },
    });
}

// 模擬更新垃圾車位置
document.getElementById("update-location").addEventListener("click", () => {
    // 隨機生成新位置
    const newLat = garbageTruckMarker.getPosition().lat() + (Math.random() - 0.5) * 0.01;
    const newLng = garbageTruckMarker.getPosition().lng() + (Math.random() - 0.5) * 0.01;

    const newPosition = { lat: newLat, lng: newLng };

    // 更新標記位置
    garbageTruckMarker.setPosition(newPosition);

    // 將地圖中心移動到新位置
    map.setCenter(newPosition);
});

// 載入地圖
window.onload = initMap;
