import axios from '../axiosConfig';

class BaseApi {
    constructor(name) {
        this.name = name;
    }

    async getPosts() {
        return await axios.get("posts/")  
    }
}  

export default BaseApi;


