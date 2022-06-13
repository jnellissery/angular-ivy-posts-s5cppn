import { createReducer, on } from '@ngrx/store';
import { IUsers } from '../model';
import { getUsersSuccessMsg, addUserSuccessMsg, addUserErrorMsg, selecteUserSuccessMsg, deleteUserSuccessMsg, deleteUserErrorMsg, updateUserSuccessMsg } from './users.action';
import { cloneDeep } from 'lodash-es';

export interface UsersState {
  allUsers: IUsers[];
  selecteduser:IUsers
}
export const initialState: UsersState = {
  allUsers: [{ id: '1', userId: 1, title: 'koko', body: '' }],
  selecteduser:{id:"",userId:null,title:"",body:""}
};

export const usersReducer = createReducer(
  initialState,
  on(getUsersSuccessMsg, (state, { users }) => {
    return {
      ...state,
      allUsers: users,
    };
  }),
  on(addUserSuccessMsg, (state, { user }) => {
    const allCategories: IUsers[] = cloneDeep(state.allUsers);
    const maxid= Math.max(...allCategories.map(x=>+x.id))+1;
   const tempuser= Object.assign({},user);
   tempuser.id=maxid.toString();
   tempuser.userId=maxid
    allCategories.unshift(tempuser);
    return {
      ...state,
      allUsers: allCategories,
    };
  }),
  on(addUserErrorMsg,(state,{error})=>{
    return {
      ...state,
      error
    }
  } 
),
on(selecteUserSuccessMsg,(state,{id})=>
  {
    const cloneusers:IUsers[]=cloneDeep(state.allUsers);
    const selecteduser=cloneusers.filter(x=>x.id==id)[0];
    console.log(selecteduser);
    return {
      ...state,
      selecteduser
    }
  }),
  on(deleteUserSuccessMsg,(state,{id})=>
  {
    const cloneusers:IUsers[]=cloneDeep(state.allUsers);
    const selecteduserindex=cloneusers.findIndex(x=>x.id==id);
    cloneusers.splice(selecteduserindex,1);
    return {
      ...state,
      allUsers:cloneusers
    }
  }),
  on(deleteUserErrorMsg,(state,{error})=>{
    return {
      ...state,
      error
    }
  }),
  on(updateUserSuccessMsg,(state,{user})=>{
    const tempusers:IUsers[]=cloneDeep(state.allUsers);
    const index=tempusers.findIndex(x=>x.id=user.id);
    tempusers.splice(index,1,user);
return {
  ...state,
  tempusers
}
  })

)
