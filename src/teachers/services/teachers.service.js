import http from '@/core/http-common'
class TeachersService {
    endpoint = '/teachers';

    getAll(){
        return http.get(this.endpoint);
    }
}

export default new TeachersService();