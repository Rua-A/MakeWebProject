const script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=i8t8fufft0';

script.onload = function(){
    
    let mapOptions = {
        center: new naver.maps.LatLng(37.3595704, 127.105399),
        zoom: 10
    };

    let map = new naver.maps.Map('map', mapOptions);

    // 네이버 맵 크기조정
    window.addEventListener('DOMContentLoaded', function(){
    resize();
    window.addEventListener('resize', resize);
    });

    function resize(){
        let Size = new naver.maps.Size(window.innerWidth, window.innerHeight);
        map.setSize(Size);
    }
};


document.body.appendChild(script);