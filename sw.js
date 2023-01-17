//intsall service worker
self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(["https://sarajohn0403.github.io/My_Web_Portfolio/", 
                "https://sarajohn0403.github.io/My_Web_Portfolio/sw.js",
                "https://sarajohn0403.github.io/My_Web_Portfolio/css/style.css", 
                "https://sarajohn0403.github.io/My_Web_Portfolio/css/style-switcher.css",
                "https://sarajohn0403.github.io/My_Web_Portfolio/css/skins/color-1.css", 
                "https://sarajohn0403.github.io/My_Web_Portfolio/css/skins/color-2.css", 
                "https://sarajohn0403.github.io/My_Web_Portfolio/css/skins/color-3.css",
                "https://sarajohn0403.github.io/My_Web_Portfolio/css/skins/color-4.css",
                "https://sarajohn0403.github.io/My_Web_Portfolio/css/skins/color-5.css",
                "https://sarajohn0403.github.io/My_Web_Portfolio/index.html",
                "https://sarajohn0403.github.io/My_Web_Portfolio/about.html",
                "https://sarajohn0403.github.io/My_Web_Portfolio/education.html",
                "https://sarajohn0403.github.io/My_Web_Portfolio/work.html",
                "https://sarajohn0403.github.io/My_Web_Portfolio/testimonials.html",
                "https://sarajohn0403.github.io/My_Web_Portfolio/skills.html",
                "https://sarajohn0403.github.io/My_Web_Portfolio/contact.html",
                "https://sarajohn0403.github.io/My_Web_Portfolio/manifest.json",
                "https://sarajohn0403.github.io/My_Web_Portfolio/js/index.js",
                "https://sarajohn0403.github.io/My_Web_Portfolio/js/script.js",
                "https://sarajohn0403.github.io/My_Web_Portfolio/js/style-switcher.js",
                "https://sarajohn0403.github.io/My_Web_Portfolio/pdf/Journal_Certificate.pdf",
                "https://sarajohn0403.github.io/My_Web_Portfolio/pdf/Journal_Copy.pdf",
                "https://sarajohn0403.github.io/My_Web_Portfolio/pdf/Sara_CV.pdf",
                "https://sarajohn0403.github.io/My_Web_Portfolio/images/logo-no-background_1.png",
                "https://sarajohn0403.github.io/My_Web_Portfolio/images/logo-512x512.png",
                "https://sarajohn0403.github.io/My_Web_Portfolio/images/logo-192x192.png",
                "https://sarajohn0403.github.io/My_Web_Portfolio/images/chart.jpg",
                "https://sarajohn0403.github.io/My_Web_Portfolio/images/converter_6.png",
                "https://sarajohn0403.github.io/My_Web_Portfolio/images/icon.png",
                "https://sarajohn0403.github.io/My_Web_Portfolio/images/icon_2.png",
                "https://sarajohn0403.github.io/My_Web_Portfolio/images/icon_3.jpg",
                "https://sarajohn0403.github.io/My_Web_Portfolio/images/icon_4.jpg",
                "https://sarajohn0403.github.io/My_Web_Portfolio/images/icon_5.jpg",
                "https://sarajohn0403.github.io/My_Web_Portfolio/images/icon_6.png",
                "https://sarajohn0403.github.io/My_Web_Portfolio/images/Profile_pic_new.jpeg",
                "https://sarajohn0403.github.io/My_Web_Portfolio/images/profile_pic2.jpeg",
                "https://sarajohn0403.github.io/My_Web_Portfolio/images/small.jpg"  
            ]);
        })
    );
});

//activate
self.addEventListener("activate", e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    ); 
});

this.addEventListener("fetch", {

});