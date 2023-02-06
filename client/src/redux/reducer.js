import { ADD_USERS, DELETE_USERS, EDIT_USERS, GET_USERS} from "./actiontypes"

const init={
    loading:true,
    users:null
}

const reducer = (state=init,{type,payload})=>{
    switch (type) {
        case GET_USERS:
            return{
            ...state,
            loading:false,
            users:payload,
            }
    case ADD_USERS:
        return{
            ...state,users:[...state.users,payload]
        }
case DELETE_USERS:
    return{
        ...state,users:state.users.filter(el=>el.id!==payload)
    }
    case EDIT_USERS:
        return{
            ...state,users:state.users.map((el)=>(el.id===payload._id?payload:el))
        }
        default:
            return state
    }
}

export default reducer