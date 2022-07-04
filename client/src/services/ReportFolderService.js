import http from '../http-common';

class ReportFolderService {

    // get folder by id
    get(id){
        return http.get(`/folders/${id}`);
    }

    // get root folder
    getRoot(){
        return http.get('/folders/root');
    }

    // get all folders in folder
    inFolder(folderId){
        return http.get(`folders/infolder/${folderId}`);
    }

    update(id, data){
        return http.put(`/folders/${id}`, data);
    }

    create(data){
        return http.post('/folders', data);
    }

    delete(id){
        return http.delete(`/folders/${id}`);
    }
}


export default new ReportFolderService();