import React from "react";
import {config, authLink, tokenLink} from "./config";

function App() {
    return (
        <Main/>
    );
}

export default App;

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            accessToken: "",
            refreshToken: "",
            tokenType: ""
        };
    }

    componentDidMount() {
        let code = window.location.search;
        code = code.replace("?code=", "");
        if (code && !this.state.accessToken) {
            const body = `grant_type=authorization_code&code=${code}&redirect_uri=${config.redirectLink}`;
            fetch(tokenLink, {
                method: "POST",
                headers: {
                    "Authorization": "Basic " + btoa(config.clientId + ":" + config.clientSecret),
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: body
            })
                .then(response => response.json())
                .then(data => {
                    if (!this.state.accessToken) {
                        const {access_token, refresh_token, token_type} = data;
                        this.setState({
                            accessToken: access_token,
                            refreshToken: refresh_token,
                            tokenType: token_type
                        });
                    }
                })
                .catch(error => console.log(error.message()))
        }
    }

    render() {
        return (
            <>
                {this.state.accessToken
                    ? <h1>You already logged in Spotify!</h1>
                    : <p><a href={authLink}>login with spotify</a></p>
                }
            </>
        )
    }
}
