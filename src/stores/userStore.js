import { defineStore } from 'pinia';

export const useUserStore = defineStore('user',{
    state: () => {
        return {
            isLogined:false,
            username:null,
        }
    }
})