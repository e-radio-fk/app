import { request } from 'https';

//
// SIRV
//

const clientId = 'Vzxh2OxziBamlHKpwMh0MqbZhKT';
const clientSecret = 'z+so8b02rM+d35VFJ2bB9R8IXxIKRLbGZQ9WucVBMHlP/fnaKPN1He0/GwwtnnZvbF5527e5UDO2BrjrY52pgw==';

export default class sirv {
    constructor() {
        this.token = '';
    }

    //
    //  Member Functions
    //

    /*
     * function that makes REST calls to SIRV
     */
    sendRequest(options) {      
        request(options, function (error, response, body) {
                if (error) 
                    throw new Error(error);

                console.log(body);
            });
    }

    login(handler) {
        const options = {
            'method': 'POST',
            'hostname': 'api.sirv.com',
            'path': '/v2/token',
            'headers': {
                'content-type': 'application/json'
            }
        };

        const req = request(options, (res) => {
            const chunks = [];

            res.on('data', (chunk) => {
                chunks.push(chunk);
            });
        
            res.on('end', () => {
                const body = Buffer.concat(chunks);
                const apiResponse = JSON.parse(body.toString());
            
                /* get token */
                this.token = apiResponse.token;

                // console.log('token:', apiResponse.token);
                // console.log('expiresIn:', apiResponse.expiresIn);
                // console.log('scope:', apiResponse.scope);
                
                /* success handler */
                handler();
            });
        });
        
        req.write(JSON.stringify({
            clientId,
            clientSecret
        }));

        req.end();
    }

    /*
     * filePath: the path of where the file should exist inside the SIRV server
     * data: the data contained in the file the user selected!
     */
    uploadFile(filePath, data) {
        var content_type = 'image/png';
        var authorization = 'Bearer ' + this.token;

        console.log('TKN: ', authorization);

        var options = {
            method: 'POST',
            url: 'https://api.sirv.com/v2/files/upload',
            qs: {
                filename: filePath
            },
            headers: {
                'content-type': content_type,
                authorization: authorization
            },
            body: data
        };

        this.sendRequest(options);
    }
}