import React from 'react'
import axios from 'axios'
const GetTodo = ()=> {
    const [data,setData]=React.useState({});
   function handleSubmit (e) {
        if (e.key === 'Enter') {
            axios.get(`/todos/${e.target.value}`)
            .then(res => (
              setData(res.data)
            ))
            .catch(err => console.log(err))
            e.target.value = ''
        }
       
    }
     {
        return (
            <div>
                <div style={{marginBottom:"20px"}}>
                <input placeholder="put id"
                 onKeyPress={handleSubmit}/>
                </div>
             <div>  
           
            {data.text}
              
            </div>
            </div>
              
        )
    }
}

export default GetTodo