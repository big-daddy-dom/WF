import { ProxyState } from "../AppState.js";
import { Reservation } from "../Models/Reservation.js";


class ReservationsService {
    addReservation(reservationData) {
        
        
        ProxyState.reservations = [...ProxyState.reservations, new Reservation(reservationData)]
       ProxyState.reservations=ProxyState.reservations.sort ((a,z)=> a.date - z.date);
    }
    deleteReservation(id) {
        console.log('deleting', id);
        ProxyState.reservations = ProxyState.reservations.filter(r => r.id !== id);
    }

}
export const reservationsService = new ReservationsService()