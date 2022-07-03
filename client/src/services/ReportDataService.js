import http from '../http-common';

class ReportDataService {
    getAll() {
        return http.get('/reports');
    }

    get(id) {
        return http.get(`/reports/${id}`);
    }
    update(id, data){
        return http.put(`/reports/${id}`, data);
    }
    create(data) {
        return http.post('/reports', data);
    }
    delete(id){
        return http.delete(`/reports/${id}`);
    }
}

export default  new ReportDataService();