import { LangService, TokenService } from "@rucken/core";
import {
  GroupsListFiltersModalService,
  UsersListFiltersModalService
} from "@rucken/ionic";
export function initializeApp(
  tokenService: TokenService,
  langService: LangService,
  usersListFiltersModalService: UsersListFiltersModalService,
  groupsListFiltersModalService: GroupsListFiltersModalService
) {
  return () =>
    new Promise((resolve, reject) => {
      langService.initializeApp().then(_ => {
        tokenService.initializeApp().then(___ => {
          usersListFiltersModalService.initializeApp().then(____ => {
            groupsListFiltersModalService.initializeApp().then(_____ => {
              resolve();
            });
          });
        });
      });
    });
}
