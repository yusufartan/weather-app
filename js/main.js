const searchInput = document.querySelector("#searchInput");
const cityName = document.querySelector(".cityName");
const degree = document.querySelector(".degree");
const desc = document.querySelector(".desc");
const message = document.querySelector("#errorMessage");

const api = new weatherAPI();
runEventListener();

function runEventListener() {
    searchInput.addEventListener("keyup", (e) => {
        if (e.key === "Enter") {
            getWeather();
        }
    });
}

function showMessage() {
    message.style.display = "flex";
    message.classList.add("show");
    setTimeout(() => {
        message.classList.remove("show");
        message.style.display = "none";
    }, 2000);
}

function getWeather() {
    const city = searchInput.value.trim();
    if (city === "") return;

    api.getWeatherInfo(city)
        .then(data => {
            if (data && data.main) {
                cityName.textContent = data.name;
                degree.textContent = `${Math.round(data.main.temp)} °`;
                desc.textContent = data.weather[0].description;

                // Hata kutusu açık kaldıysa gizle
                message.classList.remove("show");
                message.style.display = "none";
            } else {
                showMessage(); // yanlış şehir
            }
        })
        .catch(err => {
            console.log("Hata:", err);
            showMessage(); // bağlantı hatası
        });
}
