import Axios from 'axios';

export default {
    getAllProduct(){
        return Axios.get('http://localhost:8000/data/')
            .then(resp => {
                console.log(resp.data);
                return resp.data;
            })
            .catch(err =>{
                //console.log(err);
                return Promise.reject(err);
            })
    },
    // getAllTelefonok(){
    //     return Axios.get('/getTelefonok')
    //         .then(resp => {
    //             //console.log(resp.data);
    //             return resp.data;
    //         })
    //         .catch(err =>{
    //             //console.log(err);
    //             return Promise.reject(err);
    //         })
    // },
    getproductById(id){
        return Axios.get(`http://localhost:3000/${id}`)
            .then(resp => {
                //console.log(resp.data);
                return resp.data;
            })
            .catch(err =>{
                //console.log(err);
                return Promise.reject(err);
            })
    },
    // saveUser(user){
    //     return Axios.post('/users',user).then(()=>{});
    // },
    // updateUser(user,id){
    //     return Axios.put(`/users/${id}`,user).then(()=>{});
    // }


}