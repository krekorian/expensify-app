import React from 'react'
import {createStore} from 'redux';


const store=createStore((state={count:0},action)=>{
    if (action.type==='INCREMENT'){
       return {
           count:state.count+1
       };
    }else{
        return state
    }
    
})

console.log(store.getState())

store.dispatch({
    type:'INCREMENT'
})

const AppRouter =(state)=>{
    
    return(   
    <div>

    </div>
    ) 
}

export default AppRouter