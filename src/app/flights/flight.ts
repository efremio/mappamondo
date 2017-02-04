export interface IFlight {
    ID: number;
    date: string;
    flight_number: string;
    departing_iata: string;
    departing_icao: string;
    arrival_iata: string;
    arrival_icao: string;
    departure_time: string;
    arrival_time: string;
    duration: string;
    airline_iata: string;
    airline_icao: string;
    aircraft: string;
    registration: string;
    seat_number: string;
    seat_type: string;
    flight_class: string;
    flight_reason: string;
    note: string;
    username: string;
    distance: number;
    imported_from: string;
}