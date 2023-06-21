const getLocations = async (req, res) => {
    const { location } = req.query;
    const accessKey = process.env.WHATHEURE_POSSTACK_ACCESS_KEY;
    const params = new URLSearchParams({
        access_key: accessKey,
        query: location,
        timezone_module: 1
    });

    try {
        const response = await fetch(`http://api.positionstack.com/v1/forward?${params.toString()}`);
        const data = await response.json();

        const loc = data.data[0].label;
        const offset = data.data[0].timezone_module.offset_sec / 3600;

        res.json({
            location: loc,
            offset: offset
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
};

module.exports = {
    getLocations
};
