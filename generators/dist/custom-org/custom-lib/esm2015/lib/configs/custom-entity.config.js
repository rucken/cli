/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { plainToClass } from "class-transformer";
import { ProviderActionEnum } from "ngx-repository";
import { CustomEntity } from "../models/custom-entity";
/** @type {?} */
export const DEFAULT_CUSTOM_ENTITIES_CONFIG = {
    name: "custom_entity",
    pluralName: "custom_entities",
    autoload: true,
    paginationMeta: {
        perPage: 5
    },
    actionOptions: {
        responseData: (/**
         * @param {?} data
         * @param {?} action
         * @return {?}
         */
        (data, action) => {
            if (action === ProviderActionEnum.Delete) {
                return true;
            }
            else {
                if (action === ProviderActionEnum.LoadAll) {
                    return plainToClass(CustomEntity, data && data.body && data.body.customEntities);
                }
                else {
                    return plainToClass(CustomEntity, data && data.body && data.body.customEntity);
                }
            }
        }),
        responsePaginationMeta: (/**
         * @param {?} data
         * @param {?} action
         * @return {?}
         */
        (data, action) => {
            return {
                totalResults: data && data.body && data.body.meta && data.body.meta.totalResults,
                perPage: undefined
            };
        })
    },
    restOptions: {
        limitQueryParam: "per_page",
        pageQueryParam: "cur_page",
        searchTextQueryParam: "q"
    }
};
/** @type {?} */
export const CUSTOM_ENTITIES_CONFIG_TOKEN = "CustomEntitiesConfig";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWVudGl0eS5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY3VzdG9tLW9yZy9jdXN0b20tbGliLyIsInNvdXJjZXMiOlsibGliL2NvbmZpZ3MvY3VzdG9tLWVudGl0eS5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBR0wsa0JBQWtCLEVBQ25CLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDOztBQUV2RCxNQUFNLE9BQU8sOEJBQThCLEdBRXZDO0lBQ0YsSUFBSSxFQUFFLGVBQWU7SUFDckIsVUFBVSxFQUFFLGlCQUFpQjtJQUM3QixRQUFRLEVBQUUsSUFBSTtJQUNkLGNBQWMsRUFBRTtRQUNkLE9BQU8sRUFBRSxDQUFDO0tBQ1g7SUFDRCxhQUFhLEVBQUU7UUFDYixZQUFZOzs7OztRQUFFLENBQUMsSUFBUyxFQUFFLE1BQTBCLEVBQUUsRUFBRTtZQUN0RCxJQUFJLE1BQU0sS0FBSyxrQkFBa0IsQ0FBQyxNQUFNLEVBQUU7Z0JBQ3hDLE9BQU8sSUFBSSxDQUFDO2FBQ2I7aUJBQU07Z0JBQ0wsSUFBSSxNQUFNLEtBQUssa0JBQWtCLENBQUMsT0FBTyxFQUFFO29CQUN6QyxPQUFPLFlBQVksQ0FDakIsWUFBWSxFQUNaLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUM5QyxDQUFDO2lCQUNIO3FCQUFNO29CQUNMLE9BQU8sWUFBWSxDQUNqQixZQUFZLEVBQ1osSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQzVDLENBQUM7aUJBQ0g7YUFDRjtRQUNILENBQUMsQ0FBQTtRQUNELHNCQUFzQjs7Ozs7UUFBRSxDQUN0QixJQUFTLEVBQ1QsTUFBMEIsRUFDVixFQUFFO1lBQ2xCLE9BQU87Z0JBQ0wsWUFBWSxFQUNWLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVk7Z0JBQ3BFLE9BQU8sRUFBRSxTQUFTO2FBQ25CLENBQUM7UUFDSixDQUFDLENBQUE7S0FDRjtJQUNELFdBQVcsRUFBRTtRQUNYLGVBQWUsRUFBRSxVQUFVO1FBQzNCLGNBQWMsRUFBRSxVQUFVO1FBQzFCLG9CQUFvQixFQUFFLEdBQUc7S0FDMUI7Q0FDRjs7QUFDRCxNQUFNLE9BQU8sNEJBQTRCLEdBQUcsc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcGxhaW5Ub0NsYXNzIH0gZnJvbSBcImNsYXNzLXRyYW5zZm9ybWVyXCI7XG5pbXBvcnQge1xuICBJUmVzdFByb3ZpZGVyT3B0aW9ucyxcbiAgUGFnaW5hdGlvbk1ldGEsXG4gIFByb3ZpZGVyQWN0aW9uRW51bVxufSBmcm9tIFwibmd4LXJlcG9zaXRvcnlcIjtcbmltcG9ydCB7IEN1c3RvbUVudGl0eSB9IGZyb20gXCIuLi9tb2RlbHMvY3VzdG9tLWVudGl0eVwiO1xuXG5leHBvcnQgY29uc3QgREVGQVVMVF9DVVNUT01fRU5USVRJRVNfQ09ORklHOiBJUmVzdFByb3ZpZGVyT3B0aW9uczxcbiAgQ3VzdG9tRW50aXR5XG4+ID0ge1xuICBuYW1lOiBcImN1c3RvbV9lbnRpdHlcIixcbiAgcGx1cmFsTmFtZTogXCJjdXN0b21fZW50aXRpZXNcIixcbiAgYXV0b2xvYWQ6IHRydWUsXG4gIHBhZ2luYXRpb25NZXRhOiB7XG4gICAgcGVyUGFnZTogNVxuICB9LFxuICBhY3Rpb25PcHRpb25zOiB7XG4gICAgcmVzcG9uc2VEYXRhOiAoZGF0YTogYW55LCBhY3Rpb246IFByb3ZpZGVyQWN0aW9uRW51bSkgPT4ge1xuICAgICAgaWYgKGFjdGlvbiA9PT0gUHJvdmlkZXJBY3Rpb25FbnVtLkRlbGV0ZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChhY3Rpb24gPT09IFByb3ZpZGVyQWN0aW9uRW51bS5Mb2FkQWxsKSB7XG4gICAgICAgICAgcmV0dXJuIHBsYWluVG9DbGFzcyhcbiAgICAgICAgICAgIEN1c3RvbUVudGl0eSxcbiAgICAgICAgICAgIGRhdGEgJiYgZGF0YS5ib2R5ICYmIGRhdGEuYm9keS5jdXN0b21FbnRpdGllc1xuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHBsYWluVG9DbGFzcyhcbiAgICAgICAgICAgIEN1c3RvbUVudGl0eSxcbiAgICAgICAgICAgIGRhdGEgJiYgZGF0YS5ib2R5ICYmIGRhdGEuYm9keS5jdXN0b21FbnRpdHlcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICByZXNwb25zZVBhZ2luYXRpb25NZXRhOiAoXG4gICAgICBkYXRhOiBhbnksXG4gICAgICBhY3Rpb246IFByb3ZpZGVyQWN0aW9uRW51bVxuICAgICk6IFBhZ2luYXRpb25NZXRhID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRvdGFsUmVzdWx0czpcbiAgICAgICAgICBkYXRhICYmIGRhdGEuYm9keSAmJiBkYXRhLmJvZHkubWV0YSAmJiBkYXRhLmJvZHkubWV0YS50b3RhbFJlc3VsdHMsXG4gICAgICAgIHBlclBhZ2U6IHVuZGVmaW5lZFxuICAgICAgfTtcbiAgICB9XG4gIH0sXG4gIHJlc3RPcHRpb25zOiB7XG4gICAgbGltaXRRdWVyeVBhcmFtOiBcInBlcl9wYWdlXCIsXG4gICAgcGFnZVF1ZXJ5UGFyYW06IFwiY3VyX3BhZ2VcIixcbiAgICBzZWFyY2hUZXh0UXVlcnlQYXJhbTogXCJxXCJcbiAgfVxufTtcbmV4cG9ydCBjb25zdCBDVVNUT01fRU5USVRJRVNfQ09ORklHX1RPS0VOID0gXCJDdXN0b21FbnRpdGllc0NvbmZpZ1wiO1xuIl19