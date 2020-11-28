import * as React from 'react'
import {useContext, useEffect} from "react";
import {MobXProviderContext, observer} from "mobx-react";

function Index(){
    let {userStore:{
        name,
        getUserList,
        setValue,
        userList,
    }} = useContext(MobXProviderContext)

    useEffect(()=>{
        getUserList()
    },[])

    return <div>
        hello {name}
        <button onClick={()=>setValue('name','ssr')}>button</button>
        <ul>
            {
                userList.map((itm,index)=>{
                    return <li key={index}>{itm.name}</li>
                })
            }
        </ul>
    </div>
}

export default observer(Index)