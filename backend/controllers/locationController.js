const getLocations = async (req, res) => {
    const { location } = req.query
    const accessKey = "c04cd1a26bc039a4d29b2c9dc734ee0b";
    const params = new URLSearchParams({
        access_key: accessKey,
        query: location,
        timezone_module: 1
    });

    const response = await fetch(`http://api.positionstack.com/v1/forward?${params.toString()}`)
    const data = await response.json()

    const loc = data.data[0].label
    const offset = data.data[0].timezone_module.offset_sec / 3600

    res.json({
        location: loc,
        offset: offset
    })
}

module.exports = {
    getLocations
}