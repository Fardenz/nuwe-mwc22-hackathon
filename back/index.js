const express = require('express');
const app = express();
var cors = require('cors');

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    console.log('The api');
    res.end('The api');
});

app.get('/flightMonth', (req, res) => {
    const data = [
        { Year: '2017', Month: 1, Total_flights: 91739 },
        { Year: '2017', Month: 2, Total_flights: 84093 },
        { Year: '2017', Month: 3, Total_flights: 93714 },
        { Year: '2017', Month: 4, Total_flights: 93744 },
        { Year: '2017', Month: 5, Total_flights: 95364 },
        { Year: '2017', Month: 6, Total_flights: 91565 },
        { Year: '2017', Month: 7, Total_flights: 99811 },
        { Year: '2017', Month: 8, Total_flights: 99745 },
        { Year: '2017', Month: 9, Total_flights: 94020 },
        { Year: '2017', Month: 10, Total_flights: 95087 },
        { Year: '2017', Month: 11, Total_flights: 92347 },
        { Year: '2017', Month: 12, Total_flights: 95630 },
        { Year: '2018', Month: 1, Total_flights: 95623 },
        { Year: '2018', Month: 2, Total_flights: 85217 },
        { Year: '2018', Month: 3, Total_flights: 95551 },
        { Year: '2018', Month: 4, Total_flights: 94911 },
        { Year: '2018', Month: 5, Total_flights: 96644 },
        { Year: '2018', Month: 6, Total_flights: 95389 },
        { Year: '2018', Month: 7, Total_flights: 102874 },
        { Year: '2018', Month: 8, Total_flights: 105147 },
        { Year: '2018', Month: 9, Total_flights: 99124 },
        { Year: '2018', Month: 10, Total_flights: 103430 },
        { Year: '2018', Month: 11, Total_flights: 99569 },
        { Year: '2018', Month: 12, Total_flights: 102015 },
        { Year: '2019', Month: 1, Total_flights: 102548 },
        { Year: '2019', Month: 2, Total_flights: 92470 },
        { Year: '2019', Month: 3, Total_flights: 103116 },
        { Year: '2019', Month: 4, Total_flights: 23164 },
    ];
    res.end(JSON.stringify(data));
});

app.get('/SeatsFlight', (req, res) => {
    const data = require('./seats_per_flight_origin_to_destination.json');
    res.end(JSON.stringify(data));
});

app.use(require('./src/routes/company.route'));
app.use(require('./src/routes/flight.route'));
const port = process.env.PORT || 3000;
console.log('Server running on ' + port);
app.listen(port);
