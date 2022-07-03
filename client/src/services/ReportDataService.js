import http from '../http-common';

class ReportDataService {
    getAll() {
        return http.get('/reports');
    }

    get(id) {
        return http.get(`/reports/${id}`);
    }
    update(id, data){
        return http.post("/reportss", data);
    }
}

export default  new ReportDataService();