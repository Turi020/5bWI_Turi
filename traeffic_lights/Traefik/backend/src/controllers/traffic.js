exports.getTrafficData = (req, res) => {
    const trafficData = {
        districts: [
            {
                name: "District 1",
                high: Math.floor(Math.random() * 100),
                medium: Math.floor(Math.random() * 100),
                low: Math.floor(Math.random() * 100),
            },
            {
                name: "District 2",
                high: Math.floor(Math.random() * 100),
                medium: Math.floor(Math.random() * 100),
                low: Math.floor(Math.random() * 100),
            },
            {
                name: "District 3",
                high: Math.floor(Math.random() * 100),
                medium: Math.floor(Math.random() * 100),
                low: Math.floor(Math.random() * 100),
            },
            {
                name: "District 4",
                high: Math.floor(Math.random() * 100),
                medium: Math.floor(Math.random() * 100),
                low: Math.floor(Math.random() * 100),
            },
        ],
    };

    res.json(trafficData);
};