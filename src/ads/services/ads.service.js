import http from '@/core/http-common'
class AdsService {
    endpoint = '/ads';
    getAll(){
        return http.get(this.endpoint);
    }

    create(createAdDto){
        return http.post(this.endpoint, createAdDto);
    }
}

export default new AdsService();