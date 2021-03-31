import * as types from "./constants"
export const api_v1_bill_list = () => ({ type: types.API_V1_BILL_LIST })
export const api_v1_bill_listSucceeded = (response, starter) => ({
  type: types.API_V1_BILL_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_bill_listFailed = (response, starter) => ({
  type: types.API_V1_BILL_LIST_FAILED,
  response,
  starter
})
export const api_v1_bill_create = data => ({
  type: types.API_V1_BILL_CREATE,
  data
})
export const api_v1_bill_createSucceeded = (response, starter) => ({
  type: types.API_V1_BILL_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_bill_createFailed = (response, starter) => ({
  type: types.API_V1_BILL_CREATE_FAILED,
  response,
  starter
})
export const api_v1_bill_read = () => ({ type: types.API_V1_BILL_READ })
export const api_v1_bill_readSucceeded = (response, starter) => ({
  type: types.API_V1_BILL_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_bill_readFailed = (response, starter) => ({
  type: types.API_V1_BILL_READ_FAILED,
  response,
  starter
})
export const api_v1_bill_update = data => ({
  type: types.API_V1_BILL_UPDATE,
  data
})
export const api_v1_bill_updateSucceeded = (response, starter) => ({
  type: types.API_V1_BILL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_bill_updateFailed = (response, starter) => ({
  type: types.API_V1_BILL_UPDATE_FAILED,
  response,
  starter
})
export const api_v1_bill_partial_update = data => ({
  type: types.API_V1_BILL_PARTIAL_UPDATE,
  data
})
export const api_v1_bill_partial_updateSucceeded = (response, starter) => ({
  type: types.API_V1_BILL_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_bill_partial_updateFailed = (response, starter) => ({
  type: types.API_V1_BILL_PARTIAL_UPDATE_FAILED,
  response,
  starter
})
export const api_v1_bill_delete = () => ({ type: types.API_V1_BILL_DELETE })
export const api_v1_bill_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_BILL_DELETE_SUCCEEDED,
  response,
  starter
})
export const api_v1_bill_deleteFailed = (response, starter) => ({
  type: types.API_V1_BILL_DELETE_FAILED,
  response,
  starter
})
export const api_v1_category_list = () => ({ type: types.API_V1_CATEGORY_LIST })
export const api_v1_category_listSucceeded = (response, starter) => ({
  type: types.API_V1_CATEGORY_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_category_listFailed = (response, starter) => ({
  type: types.API_V1_CATEGORY_LIST_FAILED,
  response,
  starter
})
export const api_v1_category_create = data => ({
  type: types.API_V1_CATEGORY_CREATE,
  data
})
export const api_v1_category_createSucceeded = (response, starter) => ({
  type: types.API_V1_CATEGORY_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_category_createFailed = (response, starter) => ({
  type: types.API_V1_CATEGORY_CREATE_FAILED,
  response,
  starter
})
export const api_v1_category_read = () => ({ type: types.API_V1_CATEGORY_READ })
export const api_v1_category_readSucceeded = (response, starter) => ({
  type: types.API_V1_CATEGORY_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_category_readFailed = (response, starter) => ({
  type: types.API_V1_CATEGORY_READ_FAILED,
  response,
  starter
})
export const api_v1_category_update = data => ({
  type: types.API_V1_CATEGORY_UPDATE,
  data
})
export const api_v1_category_updateSucceeded = (response, starter) => ({
  type: types.API_V1_CATEGORY_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_category_updateFailed = (response, starter) => ({
  type: types.API_V1_CATEGORY_UPDATE_FAILED,
  response,
  starter
})
export const api_v1_category_partial_update = data => ({
  type: types.API_V1_CATEGORY_PARTIAL_UPDATE,
  data
})
export const api_v1_category_partial_updateSucceeded = (response, starter) => ({
  type: types.API_V1_CATEGORY_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_category_partial_updateFailed = (response, starter) => ({
  type: types.API_V1_CATEGORY_PARTIAL_UPDATE_FAILED,
  response,
  starter
})
export const api_v1_category_delete = () => ({
  type: types.API_V1_CATEGORY_DELETE
})
export const api_v1_category_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_CATEGORY_DELETE_SUCCEEDED,
  response,
  starter
})
export const api_v1_category_deleteFailed = (response, starter) => ({
  type: types.API_V1_CATEGORY_DELETE_FAILED,
  response,
  starter
})
export const api_v1_contactinfo_list = () => ({
  type: types.API_V1_CONTACTINFO_LIST
})
export const api_v1_contactinfo_listSucceeded = (response, starter) => ({
  type: types.API_V1_CONTACTINFO_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_contactinfo_listFailed = (response, starter) => ({
  type: types.API_V1_CONTACTINFO_LIST_FAILED,
  response,
  starter
})
export const api_v1_contactinfo_create = data => ({
  type: types.API_V1_CONTACTINFO_CREATE,
  data
})
export const api_v1_contactinfo_createSucceeded = (response, starter) => ({
  type: types.API_V1_CONTACTINFO_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_contactinfo_createFailed = (response, starter) => ({
  type: types.API_V1_CONTACTINFO_CREATE_FAILED,
  response,
  starter
})
export const api_v1_contactinfo_read = () => ({
  type: types.API_V1_CONTACTINFO_READ
})
export const api_v1_contactinfo_readSucceeded = (response, starter) => ({
  type: types.API_V1_CONTACTINFO_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_contactinfo_readFailed = (response, starter) => ({
  type: types.API_V1_CONTACTINFO_READ_FAILED,
  response,
  starter
})
export const api_v1_contactinfo_update = data => ({
  type: types.API_V1_CONTACTINFO_UPDATE,
  data
})
export const api_v1_contactinfo_updateSucceeded = (response, starter) => ({
  type: types.API_V1_CONTACTINFO_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_contactinfo_updateFailed = (response, starter) => ({
  type: types.API_V1_CONTACTINFO_UPDATE_FAILED,
  response,
  starter
})
export const api_v1_contactinfo_partial_update = data => ({
  type: types.API_V1_CONTACTINFO_PARTIAL_UPDATE,
  data
})
export const api_v1_contactinfo_partial_updateSucceeded = (
  response,
  starter
) => ({
  type: types.API_V1_CONTACTINFO_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_contactinfo_partial_updateFailed = (response, starter) => ({
  type: types.API_V1_CONTACTINFO_PARTIAL_UPDATE_FAILED,
  response,
  starter
})
export const api_v1_contactinfo_delete = () => ({
  type: types.API_V1_CONTACTINFO_DELETE
})
export const api_v1_contactinfo_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_CONTACTINFO_DELETE_SUCCEEDED,
  response,
  starter
})
export const api_v1_contactinfo_deleteFailed = (response, starter) => ({
  type: types.API_V1_CONTACTINFO_DELETE_FAILED,
  response,
  starter
})
export const api_v1_country_list = () => ({ type: types.API_V1_COUNTRY_LIST })
export const api_v1_country_listSucceeded = (response, starter) => ({
  type: types.API_V1_COUNTRY_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_country_listFailed = (response, starter) => ({
  type: types.API_V1_COUNTRY_LIST_FAILED,
  response,
  starter
})
export const api_v1_country_create = data => ({
  type: types.API_V1_COUNTRY_CREATE,
  data
})
export const api_v1_country_createSucceeded = (response, starter) => ({
  type: types.API_V1_COUNTRY_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_country_createFailed = (response, starter) => ({
  type: types.API_V1_COUNTRY_CREATE_FAILED,
  response,
  starter
})
export const api_v1_country_read = () => ({ type: types.API_V1_COUNTRY_READ })
export const api_v1_country_readSucceeded = (response, starter) => ({
  type: types.API_V1_COUNTRY_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_country_readFailed = (response, starter) => ({
  type: types.API_V1_COUNTRY_READ_FAILED,
  response,
  starter
})
export const api_v1_country_update = data => ({
  type: types.API_V1_COUNTRY_UPDATE,
  data
})
export const api_v1_country_updateSucceeded = (response, starter) => ({
  type: types.API_V1_COUNTRY_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_country_updateFailed = (response, starter) => ({
  type: types.API_V1_COUNTRY_UPDATE_FAILED,
  response,
  starter
})
export const api_v1_country_partial_update = data => ({
  type: types.API_V1_COUNTRY_PARTIAL_UPDATE,
  data
})
export const api_v1_country_partial_updateSucceeded = (response, starter) => ({
  type: types.API_V1_COUNTRY_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_country_partial_updateFailed = (response, starter) => ({
  type: types.API_V1_COUNTRY_PARTIAL_UPDATE_FAILED,
  response,
  starter
})
export const api_v1_country_delete = () => ({
  type: types.API_V1_COUNTRY_DELETE
})
export const api_v1_country_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_COUNTRY_DELETE_SUCCEEDED,
  response,
  starter
})
export const api_v1_country_deleteFailed = (response, starter) => ({
  type: types.API_V1_COUNTRY_DELETE_FAILED,
  response,
  starter
})
export const api_v1_customtext_list = () => ({
  type: types.API_V1_CUSTOMTEXT_LIST
})
export const api_v1_customtext_listSucceeded = (response, starter) => ({
  type: types.API_V1_CUSTOMTEXT_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_customtext_listFailed = (response, starter) => ({
  type: types.API_V1_CUSTOMTEXT_LIST_FAILED,
  response,
  starter
})
export const api_v1_customtext_read = () => ({
  type: types.API_V1_CUSTOMTEXT_READ
})
export const api_v1_customtext_readSucceeded = (response, starter) => ({
  type: types.API_V1_CUSTOMTEXT_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_customtext_readFailed = (response, starter) => ({
  type: types.API_V1_CUSTOMTEXT_READ_FAILED,
  response,
  starter
})
export const api_v1_customtext_update = data => ({
  type: types.API_V1_CUSTOMTEXT_UPDATE,
  data
})
export const api_v1_customtext_updateSucceeded = (response, starter) => ({
  type: types.API_V1_CUSTOMTEXT_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_customtext_updateFailed = (response, starter) => ({
  type: types.API_V1_CUSTOMTEXT_UPDATE_FAILED,
  response,
  starter
})
export const api_v1_customtext_partial_update = data => ({
  type: types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE,
  data
})
export const api_v1_customtext_partial_updateSucceeded = (
  response,
  starter
) => ({
  type: types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_customtext_partial_updateFailed = (response, starter) => ({
  type: types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE_FAILED,
  response,
  starter
})
export const api_v1_driverorder_list = () => ({
  type: types.API_V1_DRIVERORDER_LIST
})
export const api_v1_driverorder_listSucceeded = (response, starter) => ({
  type: types.API_V1_DRIVERORDER_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_driverorder_listFailed = (response, starter) => ({
  type: types.API_V1_DRIVERORDER_LIST_FAILED,
  response,
  starter
})
export const api_v1_driverorder_create = data => ({
  type: types.API_V1_DRIVERORDER_CREATE,
  data
})
export const api_v1_driverorder_createSucceeded = (response, starter) => ({
  type: types.API_V1_DRIVERORDER_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_driverorder_createFailed = (response, starter) => ({
  type: types.API_V1_DRIVERORDER_CREATE_FAILED,
  response,
  starter
})
export const api_v1_driverorder_read = () => ({
  type: types.API_V1_DRIVERORDER_READ
})
export const api_v1_driverorder_readSucceeded = (response, starter) => ({
  type: types.API_V1_DRIVERORDER_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_driverorder_readFailed = (response, starter) => ({
  type: types.API_V1_DRIVERORDER_READ_FAILED,
  response,
  starter
})
export const api_v1_driverorder_update = data => ({
  type: types.API_V1_DRIVERORDER_UPDATE,
  data
})
export const api_v1_driverorder_updateSucceeded = (response, starter) => ({
  type: types.API_V1_DRIVERORDER_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_driverorder_updateFailed = (response, starter) => ({
  type: types.API_V1_DRIVERORDER_UPDATE_FAILED,
  response,
  starter
})
export const api_v1_driverorder_partial_update = data => ({
  type: types.API_V1_DRIVERORDER_PARTIAL_UPDATE,
  data
})
export const api_v1_driverorder_partial_updateSucceeded = (
  response,
  starter
) => ({
  type: types.API_V1_DRIVERORDER_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_driverorder_partial_updateFailed = (response, starter) => ({
  type: types.API_V1_DRIVERORDER_PARTIAL_UPDATE_FAILED,
  response,
  starter
})
export const api_v1_driverorder_delete = () => ({
  type: types.API_V1_DRIVERORDER_DELETE
})
export const api_v1_driverorder_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_DRIVERORDER_DELETE_SUCCEEDED,
  response,
  starter
})
export const api_v1_driverorder_deleteFailed = (response, starter) => ({
  type: types.API_V1_DRIVERORDER_DELETE_FAILED,
  response,
  starter
})
export const api_v1_driverprofile_list = () => ({
  type: types.API_V1_DRIVERPROFILE_LIST
})
export const api_v1_driverprofile_listSucceeded = (response, starter) => ({
  type: types.API_V1_DRIVERPROFILE_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_driverprofile_listFailed = (response, starter) => ({
  type: types.API_V1_DRIVERPROFILE_LIST_FAILED,
  response,
  starter
})
export const api_v1_driverprofile_create = data => ({
  type: types.API_V1_DRIVERPROFILE_CREATE,
  data
})
export const api_v1_driverprofile_createSucceeded = (response, starter) => ({
  type: types.API_V1_DRIVERPROFILE_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_driverprofile_createFailed = (response, starter) => ({
  type: types.API_V1_DRIVERPROFILE_CREATE_FAILED,
  response,
  starter
})
export const api_v1_driverprofile_read = () => ({
  type: types.API_V1_DRIVERPROFILE_READ
})
export const api_v1_driverprofile_readSucceeded = (response, starter) => ({
  type: types.API_V1_DRIVERPROFILE_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_driverprofile_readFailed = (response, starter) => ({
  type: types.API_V1_DRIVERPROFILE_READ_FAILED,
  response,
  starter
})
export const api_v1_driverprofile_update = data => ({
  type: types.API_V1_DRIVERPROFILE_UPDATE,
  data
})
export const api_v1_driverprofile_updateSucceeded = (response, starter) => ({
  type: types.API_V1_DRIVERPROFILE_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_driverprofile_updateFailed = (response, starter) => ({
  type: types.API_V1_DRIVERPROFILE_UPDATE_FAILED,
  response,
  starter
})
export const api_v1_driverprofile_partial_update = data => ({
  type: types.API_V1_DRIVERPROFILE_PARTIAL_UPDATE,
  data
})
export const api_v1_driverprofile_partial_updateSucceeded = (
  response,
  starter
) => ({
  type: types.API_V1_DRIVERPROFILE_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_driverprofile_partial_updateFailed = (
  response,
  starter
) => ({
  type: types.API_V1_DRIVERPROFILE_PARTIAL_UPDATE_FAILED,
  response,
  starter
})
export const api_v1_driverprofile_delete = () => ({
  type: types.API_V1_DRIVERPROFILE_DELETE
})
export const api_v1_driverprofile_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_DRIVERPROFILE_DELETE_SUCCEEDED,
  response,
  starter
})
export const api_v1_driverprofile_deleteFailed = (response, starter) => ({
  type: types.API_V1_DRIVERPROFILE_DELETE_FAILED,
  response,
  starter
})
export const api_v1_homepage_list = () => ({ type: types.API_V1_HOMEPAGE_LIST })
export const api_v1_homepage_listSucceeded = (response, starter) => ({
  type: types.API_V1_HOMEPAGE_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_homepage_listFailed = (response, starter) => ({
  type: types.API_V1_HOMEPAGE_LIST_FAILED,
  response,
  starter
})
export const api_v1_homepage_read = () => ({ type: types.API_V1_HOMEPAGE_READ })
export const api_v1_homepage_readSucceeded = (response, starter) => ({
  type: types.API_V1_HOMEPAGE_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_homepage_readFailed = (response, starter) => ({
  type: types.API_V1_HOMEPAGE_READ_FAILED,
  response,
  starter
})
export const api_v1_homepage_update = data => ({
  type: types.API_V1_HOMEPAGE_UPDATE,
  data
})
export const api_v1_homepage_updateSucceeded = (response, starter) => ({
  type: types.API_V1_HOMEPAGE_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_homepage_updateFailed = (response, starter) => ({
  type: types.API_V1_HOMEPAGE_UPDATE_FAILED,
  response,
  starter
})
export const api_v1_homepage_partial_update = data => ({
  type: types.API_V1_HOMEPAGE_PARTIAL_UPDATE,
  data
})
export const api_v1_homepage_partial_updateSucceeded = (response, starter) => ({
  type: types.API_V1_HOMEPAGE_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_homepage_partial_updateFailed = (response, starter) => ({
  type: types.API_V1_HOMEPAGE_PARTIAL_UPDATE_FAILED,
  response,
  starter
})
export const api_v1_item_list = () => ({ type: types.API_V1_ITEM_LIST })
export const api_v1_item_listSucceeded = (response, starter) => ({
  type: types.API_V1_ITEM_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_item_listFailed = (response, starter) => ({
  type: types.API_V1_ITEM_LIST_FAILED,
  response,
  starter
})
export const api_v1_item_create = data => ({
  type: types.API_V1_ITEM_CREATE,
  data
})
export const api_v1_item_createSucceeded = (response, starter) => ({
  type: types.API_V1_ITEM_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_item_createFailed = (response, starter) => ({
  type: types.API_V1_ITEM_CREATE_FAILED,
  response,
  starter
})
export const api_v1_item_read = () => ({ type: types.API_V1_ITEM_READ })
export const api_v1_item_readSucceeded = (response, starter) => ({
  type: types.API_V1_ITEM_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_item_readFailed = (response, starter) => ({
  type: types.API_V1_ITEM_READ_FAILED,
  response,
  starter
})
export const api_v1_item_update = data => ({
  type: types.API_V1_ITEM_UPDATE,
  data
})
export const api_v1_item_updateSucceeded = (response, starter) => ({
  type: types.API_V1_ITEM_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_item_updateFailed = (response, starter) => ({
  type: types.API_V1_ITEM_UPDATE_FAILED,
  response,
  starter
})
export const api_v1_item_partial_update = data => ({
  type: types.API_V1_ITEM_PARTIAL_UPDATE,
  data
})
export const api_v1_item_partial_updateSucceeded = (response, starter) => ({
  type: types.API_V1_ITEM_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_item_partial_updateFailed = (response, starter) => ({
  type: types.API_V1_ITEM_PARTIAL_UPDATE_FAILED,
  response,
  starter
})
export const api_v1_item_delete = () => ({ type: types.API_V1_ITEM_DELETE })
export const api_v1_item_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_ITEM_DELETE_SUCCEEDED,
  response,
  starter
})
export const api_v1_item_deleteFailed = (response, starter) => ({
  type: types.API_V1_ITEM_DELETE_FAILED,
  response,
  starter
})
export const api_v1_itemvariant_list = () => ({
  type: types.API_V1_ITEMVARIANT_LIST
})
export const api_v1_itemvariant_listSucceeded = (response, starter) => ({
  type: types.API_V1_ITEMVARIANT_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_itemvariant_listFailed = (response, starter) => ({
  type: types.API_V1_ITEMVARIANT_LIST_FAILED,
  response,
  starter
})
export const api_v1_itemvariant_create = data => ({
  type: types.API_V1_ITEMVARIANT_CREATE,
  data
})
export const api_v1_itemvariant_createSucceeded = (response, starter) => ({
  type: types.API_V1_ITEMVARIANT_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_itemvariant_createFailed = (response, starter) => ({
  type: types.API_V1_ITEMVARIANT_CREATE_FAILED,
  response,
  starter
})
export const api_v1_itemvariant_read = () => ({
  type: types.API_V1_ITEMVARIANT_READ
})
export const api_v1_itemvariant_readSucceeded = (response, starter) => ({
  type: types.API_V1_ITEMVARIANT_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_itemvariant_readFailed = (response, starter) => ({
  type: types.API_V1_ITEMVARIANT_READ_FAILED,
  response,
  starter
})
export const api_v1_itemvariant_update = data => ({
  type: types.API_V1_ITEMVARIANT_UPDATE,
  data
})
export const api_v1_itemvariant_updateSucceeded = (response, starter) => ({
  type: types.API_V1_ITEMVARIANT_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_itemvariant_updateFailed = (response, starter) => ({
  type: types.API_V1_ITEMVARIANT_UPDATE_FAILED,
  response,
  starter
})
export const api_v1_itemvariant_partial_update = data => ({
  type: types.API_V1_ITEMVARIANT_PARTIAL_UPDATE,
  data
})
export const api_v1_itemvariant_partial_updateSucceeded = (
  response,
  starter
) => ({
  type: types.API_V1_ITEMVARIANT_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_itemvariant_partial_updateFailed = (response, starter) => ({
  type: types.API_V1_ITEMVARIANT_PARTIAL_UPDATE_FAILED,
  response,
  starter
})
export const api_v1_itemvariant_delete = () => ({
  type: types.API_V1_ITEMVARIANT_DELETE
})
export const api_v1_itemvariant_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_ITEMVARIANT_DELETE_SUCCEEDED,
  response,
  starter
})
export const api_v1_itemvariant_deleteFailed = (response, starter) => ({
  type: types.API_V1_ITEMVARIANT_DELETE_FAILED,
  response,
  starter
})
export const api_v1_login_create = () => ({ type: types.API_V1_LOGIN_CREATE })
export const api_v1_login_createSucceeded = (response, starter) => ({
  type: types.API_V1_LOGIN_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_login_createFailed = (response, starter) => ({
  type: types.API_V1_LOGIN_CREATE_FAILED,
  response,
  starter
})
export const api_v1_order_list = () => ({ type: types.API_V1_ORDER_LIST })
export const api_v1_order_listSucceeded = (response, starter) => ({
  type: types.API_V1_ORDER_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_order_listFailed = (response, starter) => ({
  type: types.API_V1_ORDER_LIST_FAILED,
  response,
  starter
})
export const api_v1_order_create = data => ({
  type: types.API_V1_ORDER_CREATE,
  data
})
export const api_v1_order_createSucceeded = (response, starter) => ({
  type: types.API_V1_ORDER_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_order_createFailed = (response, starter) => ({
  type: types.API_V1_ORDER_CREATE_FAILED,
  response,
  starter
})
export const api_v1_order_read = () => ({ type: types.API_V1_ORDER_READ })
export const api_v1_order_readSucceeded = (response, starter) => ({
  type: types.API_V1_ORDER_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_order_readFailed = (response, starter) => ({
  type: types.API_V1_ORDER_READ_FAILED,
  response,
  starter
})
export const api_v1_order_update = data => ({
  type: types.API_V1_ORDER_UPDATE,
  data
})
export const api_v1_order_updateSucceeded = (response, starter) => ({
  type: types.API_V1_ORDER_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_order_updateFailed = (response, starter) => ({
  type: types.API_V1_ORDER_UPDATE_FAILED,
  response,
  starter
})
export const api_v1_order_partial_update = data => ({
  type: types.API_V1_ORDER_PARTIAL_UPDATE,
  data
})
export const api_v1_order_partial_updateSucceeded = (response, starter) => ({
  type: types.API_V1_ORDER_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_order_partial_updateFailed = (response, starter) => ({
  type: types.API_V1_ORDER_PARTIAL_UPDATE_FAILED,
  response,
  starter
})
export const api_v1_order_delete = () => ({ type: types.API_V1_ORDER_DELETE })
export const api_v1_order_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_ORDER_DELETE_SUCCEEDED,
  response,
  starter
})
export const api_v1_order_deleteFailed = (response, starter) => ({
  type: types.API_V1_ORDER_DELETE_FAILED,
  response,
  starter
})
export const api_v1_paymentmethod_list = () => ({
  type: types.API_V1_PAYMENTMETHOD_LIST
})
export const api_v1_paymentmethod_listSucceeded = (response, starter) => ({
  type: types.API_V1_PAYMENTMETHOD_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_paymentmethod_listFailed = (response, starter) => ({
  type: types.API_V1_PAYMENTMETHOD_LIST_FAILED,
  response,
  starter
})
export const api_v1_paymentmethod_create = data => ({
  type: types.API_V1_PAYMENTMETHOD_CREATE,
  data
})
export const api_v1_paymentmethod_createSucceeded = (response, starter) => ({
  type: types.API_V1_PAYMENTMETHOD_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_paymentmethod_createFailed = (response, starter) => ({
  type: types.API_V1_PAYMENTMETHOD_CREATE_FAILED,
  response,
  starter
})
export const api_v1_paymentmethod_read = () => ({
  type: types.API_V1_PAYMENTMETHOD_READ
})
export const api_v1_paymentmethod_readSucceeded = (response, starter) => ({
  type: types.API_V1_PAYMENTMETHOD_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_paymentmethod_readFailed = (response, starter) => ({
  type: types.API_V1_PAYMENTMETHOD_READ_FAILED,
  response,
  starter
})
export const api_v1_paymentmethod_update = data => ({
  type: types.API_V1_PAYMENTMETHOD_UPDATE,
  data
})
export const api_v1_paymentmethod_updateSucceeded = (response, starter) => ({
  type: types.API_V1_PAYMENTMETHOD_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_paymentmethod_updateFailed = (response, starter) => ({
  type: types.API_V1_PAYMENTMETHOD_UPDATE_FAILED,
  response,
  starter
})
export const api_v1_paymentmethod_partial_update = data => ({
  type: types.API_V1_PAYMENTMETHOD_PARTIAL_UPDATE,
  data
})
export const api_v1_paymentmethod_partial_updateSucceeded = (
  response,
  starter
) => ({
  type: types.API_V1_PAYMENTMETHOD_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_paymentmethod_partial_updateFailed = (
  response,
  starter
) => ({
  type: types.API_V1_PAYMENTMETHOD_PARTIAL_UPDATE_FAILED,
  response,
  starter
})
export const api_v1_paymentmethod_delete = () => ({
  type: types.API_V1_PAYMENTMETHOD_DELETE
})
export const api_v1_paymentmethod_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_PAYMENTMETHOD_DELETE_SUCCEEDED,
  response,
  starter
})
export const api_v1_paymentmethod_deleteFailed = (response, starter) => ({
  type: types.API_V1_PAYMENTMETHOD_DELETE_FAILED,
  response,
  starter
})
export const api_v1_profile_list = () => ({ type: types.API_V1_PROFILE_LIST })
export const api_v1_profile_listSucceeded = (response, starter) => ({
  type: types.API_V1_PROFILE_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_profile_listFailed = (response, starter) => ({
  type: types.API_V1_PROFILE_LIST_FAILED,
  response,
  starter
})
export const api_v1_profile_create = data => ({
  type: types.API_V1_PROFILE_CREATE,
  data
})
export const api_v1_profile_createSucceeded = (response, starter) => ({
  type: types.API_V1_PROFILE_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_profile_createFailed = (response, starter) => ({
  type: types.API_V1_PROFILE_CREATE_FAILED,
  response,
  starter
})
export const api_v1_profile_read = () => ({ type: types.API_V1_PROFILE_READ })
export const api_v1_profile_readSucceeded = (response, starter) => ({
  type: types.API_V1_PROFILE_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_profile_readFailed = (response, starter) => ({
  type: types.API_V1_PROFILE_READ_FAILED,
  response,
  starter
})
export const api_v1_profile_update = data => ({
  type: types.API_V1_PROFILE_UPDATE,
  data
})
export const api_v1_profile_updateSucceeded = (response, starter) => ({
  type: types.API_V1_PROFILE_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_profile_updateFailed = (response, starter) => ({
  type: types.API_V1_PROFILE_UPDATE_FAILED,
  response,
  starter
})
export const api_v1_profile_partial_update = data => ({
  type: types.API_V1_PROFILE_PARTIAL_UPDATE,
  data
})
export const api_v1_profile_partial_updateSucceeded = (response, starter) => ({
  type: types.API_V1_PROFILE_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_profile_partial_updateFailed = (response, starter) => ({
  type: types.API_V1_PROFILE_PARTIAL_UPDATE_FAILED,
  response,
  starter
})
export const api_v1_profile_delete = () => ({
  type: types.API_V1_PROFILE_DELETE
})
export const api_v1_profile_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_PROFILE_DELETE_SUCCEEDED,
  response,
  starter
})
export const api_v1_profile_deleteFailed = (response, starter) => ({
  type: types.API_V1_PROFILE_DELETE_FAILED,
  response,
  starter
})
export const api_v1_review_list = () => ({ type: types.API_V1_REVIEW_LIST })
export const api_v1_review_listSucceeded = (response, starter) => ({
  type: types.API_V1_REVIEW_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_review_listFailed = (response, starter) => ({
  type: types.API_V1_REVIEW_LIST_FAILED,
  response,
  starter
})
export const api_v1_review_create = data => ({
  type: types.API_V1_REVIEW_CREATE,
  data
})
export const api_v1_review_createSucceeded = (response, starter) => ({
  type: types.API_V1_REVIEW_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_review_createFailed = (response, starter) => ({
  type: types.API_V1_REVIEW_CREATE_FAILED,
  response,
  starter
})
export const api_v1_review_read = () => ({ type: types.API_V1_REVIEW_READ })
export const api_v1_review_readSucceeded = (response, starter) => ({
  type: types.API_V1_REVIEW_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_review_readFailed = (response, starter) => ({
  type: types.API_V1_REVIEW_READ_FAILED,
  response,
  starter
})
export const api_v1_review_update = data => ({
  type: types.API_V1_REVIEW_UPDATE,
  data
})
export const api_v1_review_updateSucceeded = (response, starter) => ({
  type: types.API_V1_REVIEW_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_review_updateFailed = (response, starter) => ({
  type: types.API_V1_REVIEW_UPDATE_FAILED,
  response,
  starter
})
export const api_v1_review_partial_update = data => ({
  type: types.API_V1_REVIEW_PARTIAL_UPDATE,
  data
})
export const api_v1_review_partial_updateSucceeded = (response, starter) => ({
  type: types.API_V1_REVIEW_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_review_partial_updateFailed = (response, starter) => ({
  type: types.API_V1_REVIEW_PARTIAL_UPDATE_FAILED,
  response,
  starter
})
export const api_v1_review_delete = () => ({ type: types.API_V1_REVIEW_DELETE })
export const api_v1_review_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_REVIEW_DELETE_SUCCEEDED,
  response,
  starter
})
export const api_v1_review_deleteFailed = (response, starter) => ({
  type: types.API_V1_REVIEW_DELETE_FAILED,
  response,
  starter
})
export const api_v1_signup_create = data => ({
  type: types.API_V1_SIGNUP_CREATE,
  data
})
export const api_v1_signup_createSucceeded = (response, starter) => ({
  type: types.API_V1_SIGNUP_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_signup_createFailed = (response, starter) => ({
  type: types.API_V1_SIGNUP_CREATE_FAILED,
  response,
  starter
})
export const rest_auth_login_create = data => ({
  type: types.REST_AUTH_LOGIN_CREATE,
  data
})
export const rest_auth_login_createSucceeded = (response, starter) => ({
  type: types.REST_AUTH_LOGIN_CREATE_SUCCEEDED,
  response,
  starter
})
export const rest_auth_login_createFailed = (response, starter) => ({
  type: types.REST_AUTH_LOGIN_CREATE_FAILED,
  response,
  starter
})
export const rest_auth_logout_list = () => ({
  type: types.REST_AUTH_LOGOUT_LIST
})
export const rest_auth_logout_listSucceeded = (response, starter) => ({
  type: types.REST_AUTH_LOGOUT_LIST_SUCCEEDED,
  response,
  starter
})
export const rest_auth_logout_listFailed = (response, starter) => ({
  type: types.REST_AUTH_LOGOUT_LIST_FAILED,
  response,
  starter
})
export const rest_auth_logout_create = () => ({
  type: types.REST_AUTH_LOGOUT_CREATE
})
export const rest_auth_logout_createSucceeded = (response, starter) => ({
  type: types.REST_AUTH_LOGOUT_CREATE_SUCCEEDED,
  response,
  starter
})
export const rest_auth_logout_createFailed = (response, starter) => ({
  type: types.REST_AUTH_LOGOUT_CREATE_FAILED,
  response,
  starter
})
export const rest_auth_password_change_create = data => ({
  type: types.REST_AUTH_PASSWORD_CHANGE_CREATE,
  data
})
export const rest_auth_password_change_createSucceeded = (
  response,
  starter
) => ({
  type: types.REST_AUTH_PASSWORD_CHANGE_CREATE_SUCCEEDED,
  response,
  starter
})
export const rest_auth_password_change_createFailed = (response, starter) => ({
  type: types.REST_AUTH_PASSWORD_CHANGE_CREATE_FAILED,
  response,
  starter
})
export const rest_auth_password_reset_create = data => ({
  type: types.REST_AUTH_PASSWORD_RESET_CREATE,
  data
})
export const rest_auth_password_reset_createSucceeded = (
  response,
  starter
) => ({
  type: types.REST_AUTH_PASSWORD_RESET_CREATE_SUCCEEDED,
  response,
  starter
})
export const rest_auth_password_reset_createFailed = (response, starter) => ({
  type: types.REST_AUTH_PASSWORD_RESET_CREATE_FAILED,
  response,
  starter
})
export const rest_auth_password_reset_confirm_create = data => ({
  type: types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE,
  data
})
export const rest_auth_password_reset_confirm_createSucceeded = (
  response,
  starter
) => ({
  type: types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE_SUCCEEDED,
  response,
  starter
})
export const rest_auth_password_reset_confirm_createFailed = (
  response,
  starter
) => ({
  type: types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE_FAILED,
  response,
  starter
})
export const rest_auth_registration_create = data => ({
  type: types.REST_AUTH_REGISTRATION_CREATE,
  data
})
export const rest_auth_registration_createSucceeded = (response, starter) => ({
  type: types.REST_AUTH_REGISTRATION_CREATE_SUCCEEDED,
  response,
  starter
})
export const rest_auth_registration_createFailed = (response, starter) => ({
  type: types.REST_AUTH_REGISTRATION_CREATE_FAILED,
  response,
  starter
})
export const rest_auth_registration_verify_email_create = data => ({
  type: types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE,
  data
})
export const rest_auth_registration_verify_email_createSucceeded = (
  response,
  starter
) => ({
  type: types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE_SUCCEEDED,
  response,
  starter
})
export const rest_auth_registration_verify_email_createFailed = (
  response,
  starter
) => ({
  type: types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE_FAILED,
  response,
  starter
})
export const rest_auth_user_read = () => ({ type: types.REST_AUTH_USER_READ })
export const rest_auth_user_readSucceeded = (response, starter) => ({
  type: types.REST_AUTH_USER_READ_SUCCEEDED,
  response,
  starter
})
export const rest_auth_user_readFailed = (response, starter) => ({
  type: types.REST_AUTH_USER_READ_FAILED,
  response,
  starter
})
export const rest_auth_user_update = data => ({
  type: types.REST_AUTH_USER_UPDATE,
  data
})
export const rest_auth_user_updateSucceeded = (response, starter) => ({
  type: types.REST_AUTH_USER_UPDATE_SUCCEEDED,
  response,
  starter
})
export const rest_auth_user_updateFailed = (response, starter) => ({
  type: types.REST_AUTH_USER_UPDATE_FAILED,
  response,
  starter
})
export const rest_auth_user_partial_update = data => ({
  type: types.REST_AUTH_USER_PARTIAL_UPDATE,
  data
})
export const rest_auth_user_partial_updateSucceeded = (response, starter) => ({
  type: types.REST_AUTH_USER_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const rest_auth_user_partial_updateFailed = (response, starter) => ({
  type: types.REST_AUTH_USER_PARTIAL_UPDATE_FAILED,
  response,
  starter
})
