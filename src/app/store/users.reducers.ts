import { createReducer, on } from '@ngrx/store';
import { IUsers } from '../model';
import { getUsersSuccessMsg, addUserSuccessMsg, addUserErrorMsg, selecteUserSuccessMsg } from './users.action';
import { cloneDeep } from 'lodash-es';

export interface UsersState {
  allUsers: IUsers[];
  selecteduser:IUsers
}
export const initialState: UsersState = {
  allUsers: [{ id: '1', userId: 1, title: 'koko', body: '' }],
  selecteduser:{id:"",userId:1,title:"",body:""}
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
    allCategories.unshift(user);
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
    return {
      ...state,
      selecteduser
    }
  })

)
