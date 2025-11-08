function fn() {
karate.configure('connectTimeout', 7000);
karate.configure('readTimeout', 7000);
karate.configure('ssl', true);

var env = karate.env
config = {
    bearerToken: null,
    idToken: null,
    baseUrl: 'https://automationexercise.com'
}

return config;
}