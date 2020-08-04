import {cartlist } from '../util/axios'

export default{
    getActionCarList({commit}){
        cartlist({uid:JSON.parse(sessionStorage.getItem('userInfo')).uid}).then(res=>{
            if(res.code==200){
                commit('reqCarList',res.data)
            }
        })
    }
}