//const CACHE_NAME = 'pwa-offline-v1';
//const fileToCache = ['/','/css/reset.css'];
//service worker 설치 (웹 자원 캐싱)
self.addEventListener("install", function(e){
//서비스워커에서 self는 window와 같은 의미

//()안의 로직이 끝나기 전까지 이벤트가 안끝남
e.waitUntil(
    caches.open(CACHE_NAME)
    .then((cache)=>{
        return cache.addAll(fileToCache);
    })
    .catch((error)=>{
        return console.log('에러',error)
    })
)

})
//네트워크 요청이 있을 때 캐쉬로 돌려줌
self.addEventListener('fetch',function(e){
    console.log('erequest',e.request);
    e.respondWith(caches.match(e.request)
    .then((response=>{
        return response || fetch(e.request);

    }))
    .catch((error)=>{
        return console.log("에러 ", error)
    })
);
})

/*
 respondWith() - fetch이벤트에 대한 응답결과를 주는 method
  caches.match(e.request)  -같은 리퀘스트가 있는지 찾아봄
  return respnse -같은게 있으면 리스폰스를 그대로 리턴(캐시에서 가져옴) or 없으면 서버에서(네트워크) 가져옴
*/

const CACHE_NAME = 'pwa-offline-v2';
const fileToCache = [
    '/',
    '/css/reset.css',
    '/js/main.js'
];


//서비스워커 활성화 및 업데이트
self.addEventListener('active',function(e){
    const newCacheList = ['pwa-offline-v2'];

    e.waitUntil(
    caches.keys()
    .then((cacheList)=>{
        return Promise.All(

        

        cacheList.map((cacheName)=>{
            if(newCacheList.indexOf(cacheName)=== -1){
                return caches.delete(cacheName);
            }
        })
        )
    })
    .catch((error)=>{
        return console.log("에러",error);
    })
)
})

/**
 * caches.keys() = 캐시스토리지 아이템들의 name (목록확인)-array
 */
