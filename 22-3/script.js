window.onload = handleRefresh;
var map;
var gus="";
var marker;
var mapContainer;
var lat, lng;

function handleRefresh() {
    getData();
	addBound(3000);
}

const apikey = "4a625974476b64623130305a51526b4a"
const baseUrl = "http://openapi.seoul.go.kr:8088/";
const url = `${baseUrl}${apikey}/json/SeoulPublicLibraryInfo/`;
async function getData() {
    for (var i=1; i<16000; i=i+1000) {
        var j = i + 999;
        await fetch(url + i + "/" + j)
        .then(response => response.json())
        .then(data => updateLibrary(data));
    }
}

function updateLibrary(libraries) {
    var libraries = libraries.SeoulPublicLibraryInfo.row;
}

function find(){ // find 버튼을 눌렀을 때(onClick)
	mapContainer = document.getElementById('map'), // 지도를 표시할 div 설정
	mapOption = {
		center: new kakao.maps.LatLng(37.56544,126.977119,17), // 지도 중심좌표 시청으로 임의 지정.
		level: 13 // 지도의 확대 레벨
		};
	
	var gu = document.getElementById("gu"); //html의 gu를 가져온다.
	gus = gu.options[gu.selectedIndex].value; //gus는 gu의 값을 가지고 있다.(ex: 강북구, 강동구..)
	
	/*
	0 : 강남구 -37.4968488,127.0679394,	1 : 강동구 -37.5492994,127.1464275
	2 : 강북구 -37.6482131,127.0164069,	3 : 강서구 -37.552593,126.85051
	4 : 관악구 -37.4654529,126.9442478,	5 : 광진구 -37.5388,127.083445
	6 : 구로구 -37.495765,126.8578697,	7 : 금천구 -37.4599896,126.9012665
	8 : 노원구 -37.6541956,127.0769692,	9 : 도봉구 -37.6662325,127.0298724
	10 : 동대문구 -37.5835755,127.0505528,	11 : 동작구 -37.4971121,126.944378
	12 : 마포구 -37.5615964,126.9086431,	13 : 서대문구 -37.583312,126.9356601
	14 : 서초구 -37.483574,127.032661,	15 : 성동구 -37.5508768,127.0408952
	16 : 성북구 - 37.6023295,127.025236,	17 : 송파구 -37.504741,127.1144649
	18 : 양천구 -37.527432,126.8558783,	19 : 영등포구 -37.525423,126.896395
	20 : 용산구 -37.5305208,126.9809672,	21 : 은평구 -37.6175107,126.9249166
	22 : 종로구 -37.6009106,126.9835817,	23 : 중구 -37.5576747,126.9941653
	24 : 중랑구 -37.5950497,127.0957062	 */

	switch(gu.selectedIndex){//선택된 인덱스 번호
	case 0: // 강남구
		mapOption = {
			center: new kakao.maps.LatLng(37.4968488,127.0679394),//강남구 좌표 지정
			level: 7 // 지도의 확대 레벨
			};
		break;
	case 1: //강동구
		mapOption = {
			center: new kakao.maps.LatLng(37.5492994,127.1464275),//강동구 좌표 지정
			level: 7 // 지도의 확대 레벨
			};
		break;
	case 2: //강북구 
		mapOption = {
			center: new kakao.maps.LatLng(37.6482131,127.0164069),//강북구 좌표 지정
			level: 7 // 지도의 확대 레벨
			};
		break;
	case 3: //강서구 
		mapOption = {
			center: new kakao.maps.LatLng(37.552593,126.85051),//강서구 좌표 지정
			level:7 // 지도의 확대 레벨
			};
		break;
	case 4: //관악구 
		mapOption = {
			center: new kakao.maps.LatLng(37.4654529,126.9442478),//관악구 좌표 지정
			level: 7 // 지도의 확대 레벨
			};
		break;
	case 5: //광진구 
		mapOption = {
			center: new kakao.maps.LatLng(37.5388,127.083445),//광진구 좌표 지정
			level: 7 // 지도의 확대 레벨
			};
		break;
	case 6: //구로구   
		mapOption = {
			center: new kakao.maps.LatLng(37.495765,126.8578697),//구로구 좌표 지정
			level: 7 // 지도의 확대 레벨
			};
		break;
	case 7: //금천구  
		mapOption = {
			center: new kakao.maps.LatLng(37.4599896,126.9012665),//금천구 좌표 지정
			level: 7 // 지도의 확대 레벨
			};
		break;
	case 8: //노원구  
		mapOption = {
			center: new kakao.maps.LatLng(37.6541956,127.0769692),//노원구 좌표 지정
			level: 7 // 지도의 확대 레벨
			};
		break;
	case 9: //도봉구  
		mapOption = {
			center: new kakao.maps.LatLng(37.6662325,127.0298724),//도봉구 좌표 지정
			level: 7 // 지도의 확대 레벨
			};
		break;
	case 10: //동대문구  
		mapOption = {
			center: new kakao.maps.LatLng(37.5835755,127.0505528),//동대문구 좌표 지정
			level: 7 // 지도의 확대 레벨
			};
		break;
	case 11: //동작구  
		mapOption = {
			center: new kakao.maps.LatLng(37.4971121,126.944378),//동작구 좌표 지정
			level: 7 // 지도의 확대 레벨
			};
		break;
	case 12: //마포구  
		mapOption = {
			center: new kakao.maps.LatLng(37.5615964,126.9086431),//마포구 좌표 지정
			level: 7 // 지도의 확대 레벨
			};
		break;
	case 13: //서대문구  
		mapOption = {
			center: new kakao.maps.LatLng(37.583312,126.9356601),//서대문구 좌표 지정
			level: 7 // 지도의 확대 레벨
			};
		break;
	case 14: //서초구  
		mapOption = {
			center: new kakao.maps.LatLng(37.483574,127.032661),//서초구 좌표 지정
			level: 7 // 지도의 확대 레벨
			};
		break;
	case 15: //성동구  
		mapOption = {
			center: new kakao.maps.LatLng(37.5508768,127.0408952),//성동구 좌표 지정
			level: 7 // 지도의 확대 레벨
			};
		break;
	case 16: //성북구  
		mapOption = {
			center: new kakao.maps.LatLng(37.6023295,127.025236),//성북구 좌표 지정
			level: 7 // 지도의 확대 레벨
			};
		break;
	case 17: //송파구 
		mapOption = {
			center: new kakao.maps.LatLng(37.504741,127.1144649),//송파구 좌표 지정
			level: 7 // 지도의 확대 레벨
			};
		break;
	case 18: //양천구 
		mapOption = {
			center: new kakao.maps.LatLng(37.527432,126.8558783),//양천구 좌표 지정
			level: 7 // 지도의 확대 레벨
			};
		break;
	case 19: //영등포구 
		mapOption = {
			center: new kakao.maps.LatLng(37.525423,126.896395),//영등포구 좌표 지정
			level: 7 // 지도의 확대 레벨
			};
		break;
	case 20: //용산구 
		mapOption = {
			center: new kakao.maps.LatLng(37.5305208,126.9809672),//용산구 좌표 지정
			level: 7 // 지도의 확대 레벨
			};
		break;
	case 21: //은평구 
		mapOption = {
			center: new kakao.maps.LatLng(37.6175107,126.9249166),//은평구 좌표 지정
			level: 7 // 지도의 확대 레벨
			};
		break;
	case 22: //종로구 
		mapOption = {
			center: new kakao.maps.LatLng(37.6009106,126.9835817),//종로구 좌표 지정
			level: 7 // 지도의 확대 레벨
			};
		break;
	case 23: //중구 
		mapOption = {
			center: new kakao.maps.LatLng(37.5576747,126.9941653),//중구 좌표 지정
			level: 7 // 지도의 확대 레벨
			};
		break;
	case 24: //중랑구 
		mapOption = {
			center: new kakao.maps.LatLng(37.5950497,127.0957062),//중랑구 좌표 지정
			level: 7 // 지도의 확대 레벨
			};
		break;
		
	}//switch
	
	//지도를 표시할 div와 지도 옵션으로 지도 생성
	map = new kakao.maps.Map(mapContainer, mapOption);

    // 지도 확대 축소를 제어할 수 있는 줌 컨트롤 생성
    var zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
	
	kakao.maps.event.addListener(map, 'dragend', function() {
		handleRefresh(); //지도의 중심이 이동될때도 마커 다시 표시
	});
	
	handleRefresh(); //검색버튼을 클릭할 때 마커 표시
} //find

function addBound(radius) {
	var bound = new kakao.maps.Circle({
		center: map.getCenter(),
		radius: radius,
		strokeWeight: 5,
		strokeColor: '#F7D358',
		strokeOpacity: 0.5,
		strokeStyle: 'solid',
		fillColor: '#F7FE2E',
		fillOpacity: 0.3,
		zIndex: 1
	});

	bound.setMap(map);

	kakao.maps.event.addListener(map, 'dragstart', function() {
		bound.setMap(null);
	});
}

function updateLibrary(librariesData) {
    var libraries = librariesData.SeoulPublicLibraryInfo.row;
    var addr = "";
    var center = map.getCenter();
    var position = {
        latitude: center.getLat(),
        longitude: center.getLng()
    };
    for (var i = 0; i < libraries.length; i++) {
        var lib = libraries[i];
        var imageSrc = "images/marker1.png",
            imageSize = new kakao.maps.Size(27, 40),
            imageOption = {offset: new kakao.maps.Point(14, 28)};
        var loc = {
            latitude: lib.XCNTS,
            longitude: lib.YDNTS
        };
        var km = computeDistance(position, loc);
        if (addr !== lib.ADRES && km <= 3) {
            addr = lib.ADRES;
            addMarker(imageSrc, imageSize, imageOption, lib.XCNTS, lib.YDNTS, lib.LBRRY_NAME, lib.ADRES, lib.TEL_NO, lib.FDRM_CLOSE_DATE);
        }
    }
}


function addMarker(imageSrc, imageSize, imageOption, latitude, longitude, name, address, tel, closeday) {
	var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
	var markerPosition = new kakao.maps.LatLng(latitude, longitude);

	var marker = new kakao.maps.Marker({
			position: markerPosition,
			image: markerImage,
			clickable: true,
			zIndex: 7,
	});

	marker.setMap(map);

	// 정보창 내용
	var content = `
			<div style="padding:5px; font-size:0.9rem;">
					<strong>${name}</strong><br>
					주소: ${address}<br>
					전화번호: ${tel || "없음"}<br>
					휴관일: <span style="color: red;">${closeday || "없음"}</span>
			</div>
	`;

	var infowindow = new kakao.maps.InfoWindow({
			content: content,
			removable: true,
	});

	// 마커 클릭 이벤트
	kakao.maps.event.addListener(marker, "click", function () {
			infowindow.open(map, marker);
	});
}

function computeDistance(startCoords, destCoords) {
	var startLatRads = degreesToRadians(startCoords.latitude);
	var startLongRads = degreesToRadians(startCoords.longitude);
	var destLatRads = degreesToRadians(destCoords.latitude);
	var destLongRads = degreesToRadians(destCoords.longitude);
	var Radius = 6371;
	var distance = Math.acos(Math.sin(startLatRads) * Math.sin(destLatRads) +
	 Math.cos(startLatRads) * Math.cos(destLatRads) *
	 Math.cos(startLongRads - destLongRads)) * Radius;
	return distance;
}

function degreesToRadians(degrees) {
	var radians = (degrees * Math.PI)/180;
	return radians;
}