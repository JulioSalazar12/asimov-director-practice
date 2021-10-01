import http from '@/core/http-common'
class ListCoursesService {
    endpoint = '/courses';

    getAll(){
        return http.get(this.endpoint);
    }

    getById(id){
        return http.get(`${this.endpoint}/${id}`)
    }
}

export default new ListCoursesService();