import moment from 'moment';
// Get visible expenses
moment().set( { 'year': 2018, 'month': 6, 'date': 4 } )

const games = [
    {
        id: 5,
        date: moment().set( { 'year': 2018, 'month': 5, 'date': 13 } ),
        time: "6:30PM",
        address: "979 Cummings Ave Gloucester",
        parkName: "Cummings Park - Ball Diamond",
        url: "https://www.google.com/maps/dir/?api=1&destination=979+CUMMINGS+AVENUE+GLOUCESTER"
    },
    {
        id: 6,
        date: moment().set( { 'year': 2018, 'month': 5, 'date': 20 } ),
        time: "8:30PM",
        address: "3320 Paul Anka Drive",
        parkName: "McCarthy Park - Diamond 1",
        url: "https://www.google.com/maps/dir/?api=1&destination=3320+PAUL+ANKA+DRIVE"
    },
    {
        id: 7,
        date: moment().set( { 'year': 2018, 'month': 5, 'date': 27 } ),
        time: "6:30PM",
        address: "20 Rossland Ave",
        parkName: "Elizabeth Wyn Wood - Ball Diamond North",
        url: "https://www.google.com/maps/dir/?api=1&destination=20+ROSSLAND+AVE+OTTAWA+ON"
    },
    {
        id: 8,
        date: moment().set( { 'year': 2018, 'month': 6, 'date': 4 } ),
        time: "9:30PM",
        address: "400 North River Road",
        parkName: "Riverain Park/North River Park - Diamond 1",
        url: "https://www.google.com/maps/dir/?api=1&destination=400+NORTH+RIVER+ROAD"
    },
    {
        id: 9,
        date: moment().set( { 'year': 2018, 'month': 6, 'date': 11 } ),
        time: "6:30PM",
        address: "400 North River Road",
        parkName: "Riverain Park/North River Park - Diamond 2",
        url: "https://www.google.com/maps/dir/?api=1&destination=400+NORTH+RIVER+ROAD"
    },
    {
        id: 10,
        date: moment().set( { 'year': 2018, 'month': 6, 'date': 18 } ),
        time: "8:30PM",
        address: "3320 Paul Anka Drive",
        parkName: "McCarthy Park - Diamond 1",
        url: "https://www.google.com/maps/dir/?api=1&destination=3320+PAUL+ANKA+DRIVE"
    },
    {
        id: 11,
        date: moment().set( { 'year': 2018, 'month': 6, 'date': 25 } ),
        time: "9:30PM",
        address: "Rue Goyette at Boulevard Fournier - Gatineau",
        parkName: "Desjardins (Parc) - Ball Diamond",
        url: "https://www.google.com/maps/dir/?api=1&destination=RUE+GOYETTE+AT+BOULEVARD+FOURNIER+GATINEAU"
    },
    {
        id: 12,
        date: moment().set( { 'year': 2018, 'month': 7, 'date': 1 } ),
        time: "6:30PM",
        address: "3290 Leitrim Road",
        parkName: "Leitrim Park - Ritchie Diamond",
        url: "https://www.google.com/maps/dir/?api=1&destination=3290+LEITRIM+ROAD"
    },
    {
        id: 13,
        date: moment().set( { 'year': 2018, 'month': 7, 'date': 8 } ),
        time: "9:30PM",
        address: "Rue Goyette at Boulevard Fournier - Gatineau",
        parkName: "Desjardins (Parc) - Ball Diamond",
        url: "https://www.google.com/maps/dir/?api=1&destination=RUE+GOYETTE+AT+BOULEVARD+FOURNIER+GATINEAU"
    },
    {
        id: 14,
        date: moment().set( { 'year': 2018, 'month': 7, 'date': 15 } ),
        time: "8:00PM",
        address: "400 North River Road",
        parkName: "Riverain Park/North River Park - Diamond 1",
        url: "https://www.google.com/maps/dir/?api=1&destination=400+NORTH+RIVER+ROAD"
    },
    {
        id: "PLAYOFFS SEMIFINALS",
        date: moment().set( { 'year': 2018, 'month': 7, 'date': 22 } ),
        time: "TBD",
        address: "TBD",
        parkName: "TBD",
        url: undefined
    },
    {
        id: "PLAYOFFS FINALS",
        date: moment().set( { 'year': 2018, 'month': 7, 'date': 29 } ),
        time: "TBD",
        address: "TBD",
        parkName: "TBD",
        url: undefined
    }
];

const selector = ( games ) => {
    return games.filter((game) => {
        const todayDate = moment();
        const createdAtMoment = moment(game.date);
        const isAfterTodayDate = todayDate ? todayDate.isSameOrBefore(createdAtMoment, 'day') : true;

        return isAfterTodayDate;
    });
};

export default selector( games );