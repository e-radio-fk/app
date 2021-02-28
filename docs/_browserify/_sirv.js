const http = require('https');

//
// SIRV
//

const clientId = 'Vzxh2OxziBamlHKpwMh0MqbZhKT';
const clientSecret = 'z+so8b02rM+d35VFJ2bB9R8IXxIKRLbGZQ9WucVBMHlP/fnaKPN1He0/GwwtnnZvbF5527e5UDO2BrjrY52pgw==';

module.exports = class sirv {
    constructor() {}

    /*
     * function that makes REST calls to SIRV
     */
    sendRequest(options) {      
        const req = http.request(options, (res) => {
            const chunks = [];

            res.on('data', (chunk) => {
                chunks.push(chunk);
            });
        
            res.on('end', () => {
                const body = Buffer.concat(chunks);
                const apiResponse = JSON.parse(body.toString());
            
                console.log('token:', apiResponse.token);
                console.log('expiresIn:', apiResponse.expiresIn);
                console.log('scope:', apiResponse.scope);
            });
        });
        
        req.write(JSON.stringify({
            clientId,
            clientSecret
        }));

        req.end();
    }

    login() {
        const options = {
            'method': 'POST',
            'hostname': 'api.sirv.com',
            'path': '/v2/token',
            'headers': {
                'content-type': 'application/json'
            }
        };

        this.sendRequest(options);
    }
}