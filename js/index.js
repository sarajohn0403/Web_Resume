window.addEventListener('load', () => {
    registerSw();
})

async function registerSw()
{
    if('serviceWorker' in navigator)
    {
        navigator.serviceWorker.register('https://sarajohn0403.github.io/My_Web_Portfolio/sw.js')
            .then(registration => {
                console.log("Serivce Worker Registered!", registration);
        }).catch(error => {
                console.log("Serivce Worker Registration Failed!", error);
        })
    }
}
