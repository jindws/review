import {action, makeAutoObservable, toJS} from "mobx";
import request from 'superagent'

class UserStore{
    name
    _userList=[]
    constructor() {
        makeAutoObservable(this)
    }

    setValue = (k,v)=>{
        this[k] = v
    }

    get userList(){
        return toJS(this._userList)
    }

    getUserList = ()=>{
        console.log(this.userList)
        request('http://localhost:3002/api/user/list')
            .then((result)=>{
                console.log(this,result.body)
                this.setValue('_userList',result.body.list)
            })
    }
}

export default new UserStore()
