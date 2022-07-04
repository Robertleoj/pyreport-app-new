import http from '../http-common';

class ReportRunnerService {
    run(report_code){
        return http.post('/run', {
            report_code: report_code
        });
    }
}

export default new ReportRunnerService();
