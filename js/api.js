class weatherAPI {
    constructor() {
        this.baseURL = "https://api.openweathermap.org/data/2.5/weather";
        this.apiKey = "efc856909c9a6be9f18e6835c193325e";
        this.unit = "metric";
        this.lang = "tr"
    }


    async getWeatherInfo(cityName) {
        try {
            const response = await fetch(`${this.baseURL}?q=${cityName}&appid=${this.apiKey}&units=${this.unit}&lang=${this.lang}`);

            if (!response.ok) {
                throw new Error("Şehir bulunamadı...");
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Hata", error.message);
            return null;
        }
    }
}