//intsall service worker
self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(["https://sarajohn0403.github.io/Web_Resume/", 
                "https://sarajohn0403.github.io/Web_Resume/sw.js",
                "https://sarajohn0403.github.io/Web_Resume/css/style.css", 
                "https://sarajohn0403.github.io/Web_Resume/css/style-switcher.css",
                "https://sarajohn0403.github.io/Web_Resume/css/skins/color-1.css", 
                "https://sarajohn0403.github.io/Web_Resume/css/skins/color-2.css", 
                "https://sarajohn0403.github.io/Web_Resume/css/skins/color-3.css",
                "https://sarajohn0403.github.io/Web_Resume/css/skins/color-4.css",
                "https://sarajohn0403.github.io/Web_Resume/css/skins/color-5.css",
                "https://sarajohn0403.github.io/Web_Resume/index.html",
                "https://sarajohn0403.github.io/Web_Resume/about.html",
                "https://sarajohn0403.github.io/Web_Resume/education.html",
                "https://sarajohn0403.github.io/Web_Resume/work.html",
                "https://sarajohn0403.github.io/Web_Resume/testimonials.html",
                "https://sarajohn0403.github.io/Web_Resume/skills.html",
                "https://sarajohn0403.github.io/Web_Resume/contact.html",
                "https://sarajohn0403.github.io/Web_Resume/manifest.json",
                "https://sarajohn0403.github.io/Web_Resume/pwa.js",
                "https://sarajohn0403.github.io/Web_Resume/js/script.js",
                "https://sarajohn0403.github.io/Web_Resume/js/style-switcher.js",
                "https://sarajohn0403.github.io/Web_Resume/pdf/Journal_Certificate.pdf",
                "https://sarajohn0403.github.io/Web_Resume/pdf/Journal_Copy.pdf",
                "https://sarajohn0403.github.io/Web_Resume/pdf/Sara_CV.pdf",
                "https://sarajohn0403.github.io/Web_Resume/images/logo-no-background_1.png",
                "https://sarajohn0403.github.io/Web_Resume/images/logo-512x512.png",
                "https://sarajohn0403.github.io/Web_Resume/images/logo-192x192.png",
                "https://sarajohn0403.github.io/Web_Resume/images/chart.jpg",
                "https://sarajohn0403.github.io/Web_Resume/images/converter_6.png",
                "https://sarajohn0403.github.io/Web_Resume/images/icon.png",
                "https://sarajohn0403.github.io/Web_Resume/images/icon_2.png",
                "https://sarajohn0403.github.io/Web_Resume/images/icon_3.jpg",
                "https://sarajohn0403.github.io/Web_Resume/images/icon_4.jpg",
                "https://sarajohn0403.github.io/Web_Resume/images/icon_5.jpg",
                "https://sarajohn0403.github.io/Web_Resume/images/icon_6.png",
                "https://sarajohn0403.github.io/Web_Resume/images/Profile_pic_new.jpeg",
                "https://sarajohn0403.github.io/Web_Resume/images/profile_pic2.jpeg",
                "https://sarajohn0403.github.io/Web_Resume/images/small.jpg"  
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