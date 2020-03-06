import BaseApi from '../api/BaseApi';
import axios from '../axiosConfig';

describe('API testing', function() {
  let data = null;
  beforeEach(async () => {
    const page = new BaseApi();
    data = await page.getPosts();
    console.log('data', data)
  });
  
  it('should receive data from posts', async () => {
    console.log('data', data.status)
    const newGet = await axios.get('posts/1')
    console.log('new get', newGet.status);
  })
})

