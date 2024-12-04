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

function updateLibrary(libraries) {
	var libraries = libraries.SeoulPublicLibraryInfo.row;
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
		if(addr != lib.ADRES && km <= 3){
			addr = lib.ADRES;
			addMarker(imageSrc, imageSize, imageOption, lib.XCNTS, lib.YDNTS, lib.LBRRY_NAME, lib.ADRES, lib.TEL_NO, lib.FDRM_CLOSE_DATE);
		}
	}
	//밑에 리스트에 추가하는 부분
var librariesDiv = document.getElementById("libraries");
librariesDiv.innerHTML="";
for(var i =0; i < libraries.length; i++){
    var lib = libraries[i];
    var div = document.createElement("div");
    div.setAttribute("class", "libraries");
    div.innerHTML="";
    if(lib.CODE_VALUE == gus){
        div.innerHTML ="[" + lib.CODE_VALUE +"]"+lib.LBRRY_NAME;
        div.innerHTML += "<input type=button style='width: 50px;' value='위치'"+
        "onclick=\"window.open('http://www.google.co.kr.maps/search/" + lib.LBRRY_NAME + " ') \"/>";
        if (lib.TEL_NO != ""){
            div.innerHTML += "<br>" + "전화)" + lib.TEL_NO;
        }
        if(lib.ADRES != ""){
            div.innerHTML == "<br>" + "주소: " + lib.ADRES + "(x:"
            +lib.XCNTS + "&nbsp;y:" + lib.YDNTS + ")";
        }
        if (lib.FDRM_CLOSE_DATE != ""){
            div.innerHTML += "<br>휴관일 :"  + lib.FDRM_CLOSE_DATE;
        }
        if (lib.HMPG_URL != ""){
            div.innerHTML += "<br> 홈페이지 :"  + "<a href="+lib.HMPG_URL+" target=blank>" +lib.HMPG_URL+"</a>";
        }
        if(librariesDiv.childElementCount==0){
            librariesDiv.appendChild(div);
        }
        else{
            librariesDiv.insertBefore(div, librariesDiv.firstChild);
        }
    	}
		}
	if(libraries.length > 0){
    lastReportTime = libraries[libraries.length-1].time;
	}
	if(libraries.length > 0){
		lastReportTime = libraries[libraries.length - 1].time;
	}
}

function addMarker(imageSrc, imageSize, imageOption, latitude, longitude, name, address, tel, closeday) {
	var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
	markerPosition = new kakao.maps.LatLng(latitude, longitude);
	var marker = new kakao.maps.Marker({
		position: markerPosition,
		image: markerImage,
		clickable: true,
		zIndex: 7
	});
	marker.setMap(map);
	kakao.maps.event.addListener(map, 'dragstart', function() {
		marker.setMap(null);
	});

	var content = `
        <div class="card text-white" style="width: 18rem; background-color: skyblue; border: none;">
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <h6 class="card-subtitle mb-2">${address}</h6>
                <p class="card-text">
                    <strong>전화번호:</strong> ${tel}<br>
                    <strong>휴관일:</strong> <span class="text-danger">${closeday}</span>
                </p>
                <a href="https://lib.seoul.go.kr" target="_blank" class="btn btn-primary btn-sm">도서관 정보</a>
            </div>
        </div>
    `;

	var iwContent = content,
	iwPosition = markerPosition;
	iwRemoveable = true;

	var infowindow = new kakao.maps.InfoWindow({
		position: iwPosition,
		content: iwContent,
		removable: iwRemoveable,
		zIndex: 10
	});

	kakao.maps.event.addListener(marker, 'click', function() {
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

function go_top(orix,oriy,desx,desy) { //맨위 버튼 함수
	var Timer;
	if(document.body.scrollTop == 0) { //밑에 있지 않을때
			var winHeight = document.documentElement.scrollTop;
	}
	else{
			var winHeight = document.body.scrollTop;
	}
	if(Timer) clearTimeout(Timer); //타이머 초기화
	startx = 0;
	starty =winHeight;
	if(!orix || orix < 0) orix =0; //맨위가 아닐때 x좌표 0
	if(!oriy || oriy < 0) oriy =0; //맨위가 아닐때 y좌표 0
	var speed =7; //올라가는속도
	if(!desx) desx = 0 + startx;
	if(!desy) desy = 0 + starty;
	desx += (orix -startx) / speed; //스피드적용
	if( desx < 0) desx =0;
	desy += (oriy -starty) / speed; //스피드적용
	if( desy < 0) desy =0;
	var posX =Math.ceil(desx); var posY = Math.ceil(desy); //올림값반환
	window.scrollTo(posX, posY); //올라가기
	if((Math.floor(Math.abs(startx-orix)) < 1 ) && (Math.floor(Math.abs(starty -oriy)) <1 )){
			clearTimeout(Timer); //타이머해제
			window.scroll(orix,oriy); //올라가기
	}else if(posX != orix || posY != oriy){
		Timer = setTimeout("go_top("+orix+","+oriy+","+desx+","+desy+")",15); //타이머설정
	}else{
			clearTimeout(Timer); //타이머 해제
	}
} 