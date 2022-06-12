import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UsersState } from "./users.reducers";

export const selectUsers =
  createFeatureSelector<UsersState>("users");

export const usersSelector = createSelector(
  selectUsers,
  (state: UsersState) => state.allUsers
);
