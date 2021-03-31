import axios from "axios"
const helloWorldAPI = axios.create({
  baseURL: "https://hello-world-25391.botics.co/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_v1_bill_list(action) {
  return helloWorldAPI.get(`/api/v1/bill/`)
}
function api_v1_bill_create(action) {
  return helloWorldAPI.post(`/api/v1/bill/`, null, { data: action.data })
}
function api_v1_bill_read(action) {
  return helloWorldAPI.get(`/api/v1/bill/${action.id}/`)
}
function api_v1_bill_update(action) {
  return helloWorldAPI.put(`/api/v1/bill/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_bill_partial_update(action) {
  return helloWorldAPI.patch(`/api/v1/bill/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_bill_delete(action) {
  return helloWorldAPI.delete(`/api/v1/bill/${action.id}/`)
}
function api_v1_category_list(action) {
  return helloWorldAPI.get(`/api/v1/category/`)
}
function api_v1_category_create(action) {
  return helloWorldAPI.post(`/api/v1/category/`, null, { data: action.data })
}
function api_v1_category_read(action) {
  return helloWorldAPI.get(`/api/v1/category/${action.id}/`)
}
function api_v1_category_update(action) {
  return helloWorldAPI.put(`/api/v1/category/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_category_partial_update(action) {
  return helloWorldAPI.patch(`/api/v1/category/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_category_delete(action) {
  return helloWorldAPI.delete(`/api/v1/category/${action.id}/`)
}
function api_v1_contactinfo_list(action) {
  return helloWorldAPI.get(`/api/v1/contactinfo/`)
}
function api_v1_contactinfo_create(action) {
  return helloWorldAPI.post(`/api/v1/contactinfo/`, null, { data: action.data })
}
function api_v1_contactinfo_read(action) {
  return helloWorldAPI.get(`/api/v1/contactinfo/${action.id}/`)
}
function api_v1_contactinfo_update(action) {
  return helloWorldAPI.put(`/api/v1/contactinfo/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_contactinfo_partial_update(action) {
  return helloWorldAPI.patch(`/api/v1/contactinfo/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_contactinfo_delete(action) {
  return helloWorldAPI.delete(`/api/v1/contactinfo/${action.id}/`)
}
function api_v1_country_list(action) {
  return helloWorldAPI.get(`/api/v1/country/`)
}
function api_v1_country_create(action) {
  return helloWorldAPI.post(`/api/v1/country/`, null, { data: action.data })
}
function api_v1_country_read(action) {
  return helloWorldAPI.get(`/api/v1/country/${action.id}/`)
}
function api_v1_country_update(action) {
  return helloWorldAPI.put(`/api/v1/country/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_country_partial_update(action) {
  return helloWorldAPI.patch(`/api/v1/country/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_country_delete(action) {
  return helloWorldAPI.delete(`/api/v1/country/${action.id}/`)
}
function api_v1_customtext_list(action) {
  return helloWorldAPI.get(`/api/v1/customtext/`)
}
function api_v1_customtext_read(action) {
  return helloWorldAPI.get(`/api/v1/customtext/${action.id}/`)
}
function api_v1_customtext_update(action) {
  return helloWorldAPI.put(`/api/v1/customtext/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_customtext_partial_update(action) {
  return helloWorldAPI.patch(`/api/v1/customtext/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_driverorder_list(action) {
  return helloWorldAPI.get(`/api/v1/driverorder/`)
}
function api_v1_driverorder_create(action) {
  return helloWorldAPI.post(`/api/v1/driverorder/`, null, { data: action.data })
}
function api_v1_driverorder_read(action) {
  return helloWorldAPI.get(`/api/v1/driverorder/${action.id}/`)
}
function api_v1_driverorder_update(action) {
  return helloWorldAPI.put(`/api/v1/driverorder/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_driverorder_partial_update(action) {
  return helloWorldAPI.patch(`/api/v1/driverorder/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_driverorder_delete(action) {
  return helloWorldAPI.delete(`/api/v1/driverorder/${action.id}/`)
}
function api_v1_driverprofile_list(action) {
  return helloWorldAPI.get(`/api/v1/driverprofile/`)
}
function api_v1_driverprofile_create(action) {
  return helloWorldAPI.post(`/api/v1/driverprofile/`, null, {
    data: action.data
  })
}
function api_v1_driverprofile_read(action) {
  return helloWorldAPI.get(`/api/v1/driverprofile/${action.id}/`)
}
function api_v1_driverprofile_update(action) {
  return helloWorldAPI.put(`/api/v1/driverprofile/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_driverprofile_partial_update(action) {
  return helloWorldAPI.patch(`/api/v1/driverprofile/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_driverprofile_delete(action) {
  return helloWorldAPI.delete(`/api/v1/driverprofile/${action.id}/`)
}
function api_v1_homepage_list(action) {
  return helloWorldAPI.get(`/api/v1/homepage/`)
}
function api_v1_homepage_read(action) {
  return helloWorldAPI.get(`/api/v1/homepage/${action.id}/`)
}
function api_v1_homepage_update(action) {
  return helloWorldAPI.put(`/api/v1/homepage/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_homepage_partial_update(action) {
  return helloWorldAPI.patch(`/api/v1/homepage/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_item_list(action) {
  return helloWorldAPI.get(`/api/v1/item/`)
}
function api_v1_item_create(action) {
  return helloWorldAPI.post(`/api/v1/item/`, null, { data: action.data })
}
function api_v1_item_read(action) {
  return helloWorldAPI.get(`/api/v1/item/${action.id}/`)
}
function api_v1_item_update(action) {
  return helloWorldAPI.put(`/api/v1/item/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_item_partial_update(action) {
  return helloWorldAPI.patch(`/api/v1/item/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_item_delete(action) {
  return helloWorldAPI.delete(`/api/v1/item/${action.id}/`)
}
function api_v1_itemvariant_list(action) {
  return helloWorldAPI.get(`/api/v1/itemvariant/`)
}
function api_v1_itemvariant_create(action) {
  return helloWorldAPI.post(`/api/v1/itemvariant/`, null, { data: action.data })
}
function api_v1_itemvariant_read(action) {
  return helloWorldAPI.get(`/api/v1/itemvariant/${action.id}/`)
}
function api_v1_itemvariant_update(action) {
  return helloWorldAPI.put(`/api/v1/itemvariant/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_itemvariant_partial_update(action) {
  return helloWorldAPI.patch(`/api/v1/itemvariant/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_itemvariant_delete(action) {
  return helloWorldAPI.delete(`/api/v1/itemvariant/${action.id}/`)
}
function api_v1_login_create(action) {
  return helloWorldAPI.post(`/api/v1/login/`)
}
function api_v1_order_list(action) {
  return helloWorldAPI.get(`/api/v1/order/`)
}
function api_v1_order_create(action) {
  return helloWorldAPI.post(`/api/v1/order/`, null, { data: action.data })
}
function api_v1_order_read(action) {
  return helloWorldAPI.get(`/api/v1/order/${action.id}/`)
}
function api_v1_order_update(action) {
  return helloWorldAPI.put(`/api/v1/order/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_order_partial_update(action) {
  return helloWorldAPI.patch(`/api/v1/order/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_order_delete(action) {
  return helloWorldAPI.delete(`/api/v1/order/${action.id}/`)
}
function api_v1_paymentmethod_list(action) {
  return helloWorldAPI.get(`/api/v1/paymentmethod/`)
}
function api_v1_paymentmethod_create(action) {
  return helloWorldAPI.post(`/api/v1/paymentmethod/`, null, {
    data: action.data
  })
}
function api_v1_paymentmethod_read(action) {
  return helloWorldAPI.get(`/api/v1/paymentmethod/${action.id}/`)
}
function api_v1_paymentmethod_update(action) {
  return helloWorldAPI.put(`/api/v1/paymentmethod/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_paymentmethod_partial_update(action) {
  return helloWorldAPI.patch(`/api/v1/paymentmethod/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_paymentmethod_delete(action) {
  return helloWorldAPI.delete(`/api/v1/paymentmethod/${action.id}/`)
}
function api_v1_profile_list(action) {
  return helloWorldAPI.get(`/api/v1/profile/`)
}
function api_v1_profile_create(action) {
  return helloWorldAPI.post(`/api/v1/profile/`, null, { data: action.data })
}
function api_v1_profile_read(action) {
  return helloWorldAPI.get(`/api/v1/profile/${action.id}/`)
}
function api_v1_profile_update(action) {
  return helloWorldAPI.put(`/api/v1/profile/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_profile_partial_update(action) {
  return helloWorldAPI.patch(`/api/v1/profile/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_profile_delete(action) {
  return helloWorldAPI.delete(`/api/v1/profile/${action.id}/`)
}
function api_v1_review_list(action) {
  return helloWorldAPI.get(`/api/v1/review/`)
}
function api_v1_review_create(action) {
  return helloWorldAPI.post(`/api/v1/review/`, null, { data: action.data })
}
function api_v1_review_read(action) {
  return helloWorldAPI.get(`/api/v1/review/${action.id}/`)
}
function api_v1_review_update(action) {
  return helloWorldAPI.put(`/api/v1/review/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_review_partial_update(action) {
  return helloWorldAPI.patch(`/api/v1/review/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_review_delete(action) {
  return helloWorldAPI.delete(`/api/v1/review/${action.id}/`)
}
function api_v1_signup_create(action) {
  return helloWorldAPI.post(`/api/v1/signup/`, null, { data: action.data })
}
function rest_auth_login_create(action) {
  return helloWorldAPI.post(`/rest-auth/login/`, null, { data: action.data })
}
function rest_auth_logout_list(action) {
  return helloWorldAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(action) {
  return helloWorldAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(action) {
  return helloWorldAPI.post(`/rest-auth/password/change/`, null, {
    data: action.data
  })
}
function rest_auth_password_reset_create(action) {
  return helloWorldAPI.post(`/rest-auth/password/reset/`, null, {
    data: action.data
  })
}
function rest_auth_password_reset_confirm_create(action) {
  return helloWorldAPI.post(`/rest-auth/password/reset/confirm/`, null, {
    data: action.data
  })
}
function rest_auth_registration_create(action) {
  return helloWorldAPI.post(`/rest-auth/registration/`, null, {
    data: action.data
  })
}
function rest_auth_registration_verify_email_create(action) {
  return helloWorldAPI.post(`/rest-auth/registration/verify-email/`, null, {
    data: action.data
  })
}
function rest_auth_user_read(action) {
  return helloWorldAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(action) {
  return helloWorldAPI.put(`/rest-auth/user/`, null, { data: action.data })
}
function rest_auth_user_partial_update(action) {
  return helloWorldAPI.patch(`/rest-auth/user/`, null, { data: action.data })
}
export const apiService = {
  api_v1_bill_list,
  api_v1_bill_create,
  api_v1_bill_read,
  api_v1_bill_update,
  api_v1_bill_partial_update,
  api_v1_bill_delete,
  api_v1_category_list,
  api_v1_category_create,
  api_v1_category_read,
  api_v1_category_update,
  api_v1_category_partial_update,
  api_v1_category_delete,
  api_v1_contactinfo_list,
  api_v1_contactinfo_create,
  api_v1_contactinfo_read,
  api_v1_contactinfo_update,
  api_v1_contactinfo_partial_update,
  api_v1_contactinfo_delete,
  api_v1_country_list,
  api_v1_country_create,
  api_v1_country_read,
  api_v1_country_update,
  api_v1_country_partial_update,
  api_v1_country_delete,
  api_v1_customtext_list,
  api_v1_customtext_read,
  api_v1_customtext_update,
  api_v1_customtext_partial_update,
  api_v1_driverorder_list,
  api_v1_driverorder_create,
  api_v1_driverorder_read,
  api_v1_driverorder_update,
  api_v1_driverorder_partial_update,
  api_v1_driverorder_delete,
  api_v1_driverprofile_list,
  api_v1_driverprofile_create,
  api_v1_driverprofile_read,
  api_v1_driverprofile_update,
  api_v1_driverprofile_partial_update,
  api_v1_driverprofile_delete,
  api_v1_homepage_list,
  api_v1_homepage_read,
  api_v1_homepage_update,
  api_v1_homepage_partial_update,
  api_v1_item_list,
  api_v1_item_create,
  api_v1_item_read,
  api_v1_item_update,
  api_v1_item_partial_update,
  api_v1_item_delete,
  api_v1_itemvariant_list,
  api_v1_itemvariant_create,
  api_v1_itemvariant_read,
  api_v1_itemvariant_update,
  api_v1_itemvariant_partial_update,
  api_v1_itemvariant_delete,
  api_v1_login_create,
  api_v1_order_list,
  api_v1_order_create,
  api_v1_order_read,
  api_v1_order_update,
  api_v1_order_partial_update,
  api_v1_order_delete,
  api_v1_paymentmethod_list,
  api_v1_paymentmethod_create,
  api_v1_paymentmethod_read,
  api_v1_paymentmethod_update,
  api_v1_paymentmethod_partial_update,
  api_v1_paymentmethod_delete,
  api_v1_profile_list,
  api_v1_profile_create,
  api_v1_profile_read,
  api_v1_profile_update,
  api_v1_profile_partial_update,
  api_v1_profile_delete,
  api_v1_review_list,
  api_v1_review_create,
  api_v1_review_read,
  api_v1_review_update,
  api_v1_review_partial_update,
  api_v1_review_delete,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_list,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_read,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
