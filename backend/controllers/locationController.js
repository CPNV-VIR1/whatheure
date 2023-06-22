const https = require('https');

const getLocations = async (req, res) => {
    const { location } = req.query;
    const accessKey = process.env.WHATHEURE_POSSTACK_ACCESS_KEY;
    const params = new URLSearchParams({
        access_key: accessKey,
        query: location,
        timezone_module: 1,
    });

    try {
        const options = {
            hostname: 'api.positionstack.com',
            path: `/v1/forward?${params.toString()}`,
            method: 'GET',
        };

        const request = https.request(options, (response) => {
            let data = '';

            response.on('data', (chunk) => {
                data += chunk;
            });

            response.on('end', () => {
                /*const jsonData = JSON.parse(data);
                const loc = jsonData.data[0].label;
                const offset = jsonData.data[0].timezone_module.offset_sec / 3600;

                res.json({
                    location: loc,
                    offset: offset,
                });*/
                console.log('Data:', data);
            });
        });

        request.on('error', (error) => {
            console.error(error);
            res.status(500).json({ error: 'An error occurred' });
        });

        request.end();
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
};

module.exports = {
    getLocations,
};