export const config = {
    clientId: "7073876298934615a8e4c254a782ec0a",
    clientSecret: "9fe3b507f2724f31a22c0a2ea5660ac2",
    redirectLink: "http://localhost:3000"
}
export const authLink = `https://accounts.spotify.com/ru/authorize?client_id=${config.clientId}&response_type=code&redirect_uri=${config.redirectLink}`;
export const tokenLink = "https://accounts.spotify.com/api/token";
