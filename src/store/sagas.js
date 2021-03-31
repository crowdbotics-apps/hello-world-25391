import { put, call, all, spawn, takeEvery } from "redux-saga/effects"
import { apiService } from "./services"
import * as types from "./constants"
import * as actions from "./actions"
function* api_v1_bill_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_bill_list, action)
    yield put(actions.api_v1_bill_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_bill_listFailed(err, action))
  }
}
function* api_v1_bill_listWatcher() {
  yield takeEvery(types.API_V1_BILL_LIST, api_v1_bill_listWorker)
}
function* api_v1_bill_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_bill_create, action)
    yield put(actions.api_v1_bill_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_bill_createFailed(err, action))
  }
}
function* api_v1_bill_createWatcher() {
  yield takeEvery(types.API_V1_BILL_CREATE, api_v1_bill_createWorker)
}
function* api_v1_bill_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_bill_read, action)
    yield put(actions.api_v1_bill_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_bill_readFailed(err, action))
  }
}
function* api_v1_bill_readWatcher() {
  yield takeEvery(types.API_V1_BILL_READ, api_v1_bill_readWorker)
}
function* api_v1_bill_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_bill_update, action)
    yield put(actions.api_v1_bill_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_bill_updateFailed(err, action))
  }
}
function* api_v1_bill_updateWatcher() {
  yield takeEvery(types.API_V1_BILL_UPDATE, api_v1_bill_updateWorker)
}
function* api_v1_bill_partial_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_bill_partial_update, action)
    yield put(actions.api_v1_bill_partial_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_bill_partial_updateFailed(err, action))
  }
}
function* api_v1_bill_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_BILL_PARTIAL_UPDATE,
    api_v1_bill_partial_updateWorker
  )
}
function* api_v1_bill_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_bill_delete, action)
    yield put(actions.api_v1_bill_deleteSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_bill_deleteFailed(err, action))
  }
}
function* api_v1_bill_deleteWatcher() {
  yield takeEvery(types.API_V1_BILL_DELETE, api_v1_bill_deleteWorker)
}
function* api_v1_category_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_category_list, action)
    yield put(actions.api_v1_category_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_category_listFailed(err, action))
  }
}
function* api_v1_category_listWatcher() {
  yield takeEvery(types.API_V1_CATEGORY_LIST, api_v1_category_listWorker)
}
function* api_v1_category_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_category_create, action)
    yield put(actions.api_v1_category_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_category_createFailed(err, action))
  }
}
function* api_v1_category_createWatcher() {
  yield takeEvery(types.API_V1_CATEGORY_CREATE, api_v1_category_createWorker)
}
function* api_v1_category_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_category_read, action)
    yield put(actions.api_v1_category_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_category_readFailed(err, action))
  }
}
function* api_v1_category_readWatcher() {
  yield takeEvery(types.API_V1_CATEGORY_READ, api_v1_category_readWorker)
}
function* api_v1_category_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_category_update, action)
    yield put(actions.api_v1_category_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_category_updateFailed(err, action))
  }
}
function* api_v1_category_updateWatcher() {
  yield takeEvery(types.API_V1_CATEGORY_UPDATE, api_v1_category_updateWorker)
}
function* api_v1_category_partial_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_category_partial_update, action)
    yield put(actions.api_v1_category_partial_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_category_partial_updateFailed(err, action))
  }
}
function* api_v1_category_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_CATEGORY_PARTIAL_UPDATE,
    api_v1_category_partial_updateWorker
  )
}
function* api_v1_category_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_category_delete, action)
    yield put(actions.api_v1_category_deleteSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_category_deleteFailed(err, action))
  }
}
function* api_v1_category_deleteWatcher() {
  yield takeEvery(types.API_V1_CATEGORY_DELETE, api_v1_category_deleteWorker)
}
function* api_v1_contactinfo_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_contactinfo_list, action)
    yield put(actions.api_v1_contactinfo_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_contactinfo_listFailed(err, action))
  }
}
function* api_v1_contactinfo_listWatcher() {
  yield takeEvery(types.API_V1_CONTACTINFO_LIST, api_v1_contactinfo_listWorker)
}
function* api_v1_contactinfo_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_contactinfo_create, action)
    yield put(actions.api_v1_contactinfo_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_contactinfo_createFailed(err, action))
  }
}
function* api_v1_contactinfo_createWatcher() {
  yield takeEvery(
    types.API_V1_CONTACTINFO_CREATE,
    api_v1_contactinfo_createWorker
  )
}
function* api_v1_contactinfo_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_contactinfo_read, action)
    yield put(actions.api_v1_contactinfo_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_contactinfo_readFailed(err, action))
  }
}
function* api_v1_contactinfo_readWatcher() {
  yield takeEvery(types.API_V1_CONTACTINFO_READ, api_v1_contactinfo_readWorker)
}
function* api_v1_contactinfo_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_contactinfo_update, action)
    yield put(actions.api_v1_contactinfo_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_contactinfo_updateFailed(err, action))
  }
}
function* api_v1_contactinfo_updateWatcher() {
  yield takeEvery(
    types.API_V1_CONTACTINFO_UPDATE,
    api_v1_contactinfo_updateWorker
  )
}
function* api_v1_contactinfo_partial_updateWorker(action) {
  try {
    const result = yield call(
      apiService.api_v1_contactinfo_partial_update,
      action
    )
    yield put(
      actions.api_v1_contactinfo_partial_updateSucceeded(result, action)
    )
  } catch (err) {
    yield put(actions.api_v1_contactinfo_partial_updateFailed(err, action))
  }
}
function* api_v1_contactinfo_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_CONTACTINFO_PARTIAL_UPDATE,
    api_v1_contactinfo_partial_updateWorker
  )
}
function* api_v1_contactinfo_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_contactinfo_delete, action)
    yield put(actions.api_v1_contactinfo_deleteSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_contactinfo_deleteFailed(err, action))
  }
}
function* api_v1_contactinfo_deleteWatcher() {
  yield takeEvery(
    types.API_V1_CONTACTINFO_DELETE,
    api_v1_contactinfo_deleteWorker
  )
}
function* api_v1_country_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_country_list, action)
    yield put(actions.api_v1_country_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_country_listFailed(err, action))
  }
}
function* api_v1_country_listWatcher() {
  yield takeEvery(types.API_V1_COUNTRY_LIST, api_v1_country_listWorker)
}
function* api_v1_country_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_country_create, action)
    yield put(actions.api_v1_country_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_country_createFailed(err, action))
  }
}
function* api_v1_country_createWatcher() {
  yield takeEvery(types.API_V1_COUNTRY_CREATE, api_v1_country_createWorker)
}
function* api_v1_country_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_country_read, action)
    yield put(actions.api_v1_country_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_country_readFailed(err, action))
  }
}
function* api_v1_country_readWatcher() {
  yield takeEvery(types.API_V1_COUNTRY_READ, api_v1_country_readWorker)
}
function* api_v1_country_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_country_update, action)
    yield put(actions.api_v1_country_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_country_updateFailed(err, action))
  }
}
function* api_v1_country_updateWatcher() {
  yield takeEvery(types.API_V1_COUNTRY_UPDATE, api_v1_country_updateWorker)
}
function* api_v1_country_partial_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_country_partial_update, action)
    yield put(actions.api_v1_country_partial_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_country_partial_updateFailed(err, action))
  }
}
function* api_v1_country_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_COUNTRY_PARTIAL_UPDATE,
    api_v1_country_partial_updateWorker
  )
}
function* api_v1_country_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_country_delete, action)
    yield put(actions.api_v1_country_deleteSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_country_deleteFailed(err, action))
  }
}
function* api_v1_country_deleteWatcher() {
  yield takeEvery(types.API_V1_COUNTRY_DELETE, api_v1_country_deleteWorker)
}
function* api_v1_customtext_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_customtext_list, action)
    yield put(actions.api_v1_customtext_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_customtext_listFailed(err, action))
  }
}
function* api_v1_customtext_listWatcher() {
  yield takeEvery(types.API_V1_CUSTOMTEXT_LIST, api_v1_customtext_listWorker)
}
function* api_v1_customtext_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_customtext_read, action)
    yield put(actions.api_v1_customtext_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_customtext_readFailed(err, action))
  }
}
function* api_v1_customtext_readWatcher() {
  yield takeEvery(types.API_V1_CUSTOMTEXT_READ, api_v1_customtext_readWorker)
}
function* api_v1_customtext_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_customtext_update, action)
    yield put(actions.api_v1_customtext_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_customtext_updateFailed(err, action))
  }
}
function* api_v1_customtext_updateWatcher() {
  yield takeEvery(
    types.API_V1_CUSTOMTEXT_UPDATE,
    api_v1_customtext_updateWorker
  )
}
function* api_v1_customtext_partial_updateWorker(action) {
  try {
    const result = yield call(
      apiService.api_v1_customtext_partial_update,
      action
    )
    yield put(actions.api_v1_customtext_partial_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_customtext_partial_updateFailed(err, action))
  }
}
function* api_v1_customtext_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE,
    api_v1_customtext_partial_updateWorker
  )
}
function* api_v1_driverorder_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_driverorder_list, action)
    yield put(actions.api_v1_driverorder_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_driverorder_listFailed(err, action))
  }
}
function* api_v1_driverorder_listWatcher() {
  yield takeEvery(types.API_V1_DRIVERORDER_LIST, api_v1_driverorder_listWorker)
}
function* api_v1_driverorder_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_driverorder_create, action)
    yield put(actions.api_v1_driverorder_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_driverorder_createFailed(err, action))
  }
}
function* api_v1_driverorder_createWatcher() {
  yield takeEvery(
    types.API_V1_DRIVERORDER_CREATE,
    api_v1_driverorder_createWorker
  )
}
function* api_v1_driverorder_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_driverorder_read, action)
    yield put(actions.api_v1_driverorder_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_driverorder_readFailed(err, action))
  }
}
function* api_v1_driverorder_readWatcher() {
  yield takeEvery(types.API_V1_DRIVERORDER_READ, api_v1_driverorder_readWorker)
}
function* api_v1_driverorder_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_driverorder_update, action)
    yield put(actions.api_v1_driverorder_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_driverorder_updateFailed(err, action))
  }
}
function* api_v1_driverorder_updateWatcher() {
  yield takeEvery(
    types.API_V1_DRIVERORDER_UPDATE,
    api_v1_driverorder_updateWorker
  )
}
function* api_v1_driverorder_partial_updateWorker(action) {
  try {
    const result = yield call(
      apiService.api_v1_driverorder_partial_update,
      action
    )
    yield put(
      actions.api_v1_driverorder_partial_updateSucceeded(result, action)
    )
  } catch (err) {
    yield put(actions.api_v1_driverorder_partial_updateFailed(err, action))
  }
}
function* api_v1_driverorder_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_DRIVERORDER_PARTIAL_UPDATE,
    api_v1_driverorder_partial_updateWorker
  )
}
function* api_v1_driverorder_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_driverorder_delete, action)
    yield put(actions.api_v1_driverorder_deleteSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_driverorder_deleteFailed(err, action))
  }
}
function* api_v1_driverorder_deleteWatcher() {
  yield takeEvery(
    types.API_V1_DRIVERORDER_DELETE,
    api_v1_driverorder_deleteWorker
  )
}
function* api_v1_driverprofile_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_driverprofile_list, action)
    yield put(actions.api_v1_driverprofile_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_driverprofile_listFailed(err, action))
  }
}
function* api_v1_driverprofile_listWatcher() {
  yield takeEvery(
    types.API_V1_DRIVERPROFILE_LIST,
    api_v1_driverprofile_listWorker
  )
}
function* api_v1_driverprofile_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_driverprofile_create, action)
    yield put(actions.api_v1_driverprofile_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_driverprofile_createFailed(err, action))
  }
}
function* api_v1_driverprofile_createWatcher() {
  yield takeEvery(
    types.API_V1_DRIVERPROFILE_CREATE,
    api_v1_driverprofile_createWorker
  )
}
function* api_v1_driverprofile_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_driverprofile_read, action)
    yield put(actions.api_v1_driverprofile_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_driverprofile_readFailed(err, action))
  }
}
function* api_v1_driverprofile_readWatcher() {
  yield takeEvery(
    types.API_V1_DRIVERPROFILE_READ,
    api_v1_driverprofile_readWorker
  )
}
function* api_v1_driverprofile_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_driverprofile_update, action)
    yield put(actions.api_v1_driverprofile_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_driverprofile_updateFailed(err, action))
  }
}
function* api_v1_driverprofile_updateWatcher() {
  yield takeEvery(
    types.API_V1_DRIVERPROFILE_UPDATE,
    api_v1_driverprofile_updateWorker
  )
}
function* api_v1_driverprofile_partial_updateWorker(action) {
  try {
    const result = yield call(
      apiService.api_v1_driverprofile_partial_update,
      action
    )
    yield put(
      actions.api_v1_driverprofile_partial_updateSucceeded(result, action)
    )
  } catch (err) {
    yield put(actions.api_v1_driverprofile_partial_updateFailed(err, action))
  }
}
function* api_v1_driverprofile_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_DRIVERPROFILE_PARTIAL_UPDATE,
    api_v1_driverprofile_partial_updateWorker
  )
}
function* api_v1_driverprofile_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_driverprofile_delete, action)
    yield put(actions.api_v1_driverprofile_deleteSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_driverprofile_deleteFailed(err, action))
  }
}
function* api_v1_driverprofile_deleteWatcher() {
  yield takeEvery(
    types.API_V1_DRIVERPROFILE_DELETE,
    api_v1_driverprofile_deleteWorker
  )
}
function* api_v1_homepage_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_homepage_list, action)
    yield put(actions.api_v1_homepage_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_homepage_listFailed(err, action))
  }
}
function* api_v1_homepage_listWatcher() {
  yield takeEvery(types.API_V1_HOMEPAGE_LIST, api_v1_homepage_listWorker)
}
function* api_v1_homepage_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_homepage_read, action)
    yield put(actions.api_v1_homepage_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_homepage_readFailed(err, action))
  }
}
function* api_v1_homepage_readWatcher() {
  yield takeEvery(types.API_V1_HOMEPAGE_READ, api_v1_homepage_readWorker)
}
function* api_v1_homepage_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_homepage_update, action)
    yield put(actions.api_v1_homepage_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_homepage_updateFailed(err, action))
  }
}
function* api_v1_homepage_updateWatcher() {
  yield takeEvery(types.API_V1_HOMEPAGE_UPDATE, api_v1_homepage_updateWorker)
}
function* api_v1_homepage_partial_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_homepage_partial_update, action)
    yield put(actions.api_v1_homepage_partial_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_homepage_partial_updateFailed(err, action))
  }
}
function* api_v1_homepage_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_HOMEPAGE_PARTIAL_UPDATE,
    api_v1_homepage_partial_updateWorker
  )
}
function* api_v1_item_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_item_list, action)
    yield put(actions.api_v1_item_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_item_listFailed(err, action))
  }
}
function* api_v1_item_listWatcher() {
  yield takeEvery(types.API_V1_ITEM_LIST, api_v1_item_listWorker)
}
function* api_v1_item_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_item_create, action)
    yield put(actions.api_v1_item_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_item_createFailed(err, action))
  }
}
function* api_v1_item_createWatcher() {
  yield takeEvery(types.API_V1_ITEM_CREATE, api_v1_item_createWorker)
}
function* api_v1_item_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_item_read, action)
    yield put(actions.api_v1_item_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_item_readFailed(err, action))
  }
}
function* api_v1_item_readWatcher() {
  yield takeEvery(types.API_V1_ITEM_READ, api_v1_item_readWorker)
}
function* api_v1_item_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_item_update, action)
    yield put(actions.api_v1_item_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_item_updateFailed(err, action))
  }
}
function* api_v1_item_updateWatcher() {
  yield takeEvery(types.API_V1_ITEM_UPDATE, api_v1_item_updateWorker)
}
function* api_v1_item_partial_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_item_partial_update, action)
    yield put(actions.api_v1_item_partial_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_item_partial_updateFailed(err, action))
  }
}
function* api_v1_item_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_ITEM_PARTIAL_UPDATE,
    api_v1_item_partial_updateWorker
  )
}
function* api_v1_item_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_item_delete, action)
    yield put(actions.api_v1_item_deleteSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_item_deleteFailed(err, action))
  }
}
function* api_v1_item_deleteWatcher() {
  yield takeEvery(types.API_V1_ITEM_DELETE, api_v1_item_deleteWorker)
}
function* api_v1_itemvariant_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_itemvariant_list, action)
    yield put(actions.api_v1_itemvariant_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_itemvariant_listFailed(err, action))
  }
}
function* api_v1_itemvariant_listWatcher() {
  yield takeEvery(types.API_V1_ITEMVARIANT_LIST, api_v1_itemvariant_listWorker)
}
function* api_v1_itemvariant_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_itemvariant_create, action)
    yield put(actions.api_v1_itemvariant_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_itemvariant_createFailed(err, action))
  }
}
function* api_v1_itemvariant_createWatcher() {
  yield takeEvery(
    types.API_V1_ITEMVARIANT_CREATE,
    api_v1_itemvariant_createWorker
  )
}
function* api_v1_itemvariant_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_itemvariant_read, action)
    yield put(actions.api_v1_itemvariant_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_itemvariant_readFailed(err, action))
  }
}
function* api_v1_itemvariant_readWatcher() {
  yield takeEvery(types.API_V1_ITEMVARIANT_READ, api_v1_itemvariant_readWorker)
}
function* api_v1_itemvariant_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_itemvariant_update, action)
    yield put(actions.api_v1_itemvariant_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_itemvariant_updateFailed(err, action))
  }
}
function* api_v1_itemvariant_updateWatcher() {
  yield takeEvery(
    types.API_V1_ITEMVARIANT_UPDATE,
    api_v1_itemvariant_updateWorker
  )
}
function* api_v1_itemvariant_partial_updateWorker(action) {
  try {
    const result = yield call(
      apiService.api_v1_itemvariant_partial_update,
      action
    )
    yield put(
      actions.api_v1_itemvariant_partial_updateSucceeded(result, action)
    )
  } catch (err) {
    yield put(actions.api_v1_itemvariant_partial_updateFailed(err, action))
  }
}
function* api_v1_itemvariant_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_ITEMVARIANT_PARTIAL_UPDATE,
    api_v1_itemvariant_partial_updateWorker
  )
}
function* api_v1_itemvariant_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_itemvariant_delete, action)
    yield put(actions.api_v1_itemvariant_deleteSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_itemvariant_deleteFailed(err, action))
  }
}
function* api_v1_itemvariant_deleteWatcher() {
  yield takeEvery(
    types.API_V1_ITEMVARIANT_DELETE,
    api_v1_itemvariant_deleteWorker
  )
}
function* api_v1_login_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_login_create, action)
    yield put(actions.api_v1_login_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_login_createFailed(err, action))
  }
}
function* api_v1_login_createWatcher() {
  yield takeEvery(types.API_V1_LOGIN_CREATE, api_v1_login_createWorker)
}
function* api_v1_order_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_order_list, action)
    yield put(actions.api_v1_order_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_order_listFailed(err, action))
  }
}
function* api_v1_order_listWatcher() {
  yield takeEvery(types.API_V1_ORDER_LIST, api_v1_order_listWorker)
}
function* api_v1_order_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_order_create, action)
    yield put(actions.api_v1_order_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_order_createFailed(err, action))
  }
}
function* api_v1_order_createWatcher() {
  yield takeEvery(types.API_V1_ORDER_CREATE, api_v1_order_createWorker)
}
function* api_v1_order_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_order_read, action)
    yield put(actions.api_v1_order_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_order_readFailed(err, action))
  }
}
function* api_v1_order_readWatcher() {
  yield takeEvery(types.API_V1_ORDER_READ, api_v1_order_readWorker)
}
function* api_v1_order_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_order_update, action)
    yield put(actions.api_v1_order_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_order_updateFailed(err, action))
  }
}
function* api_v1_order_updateWatcher() {
  yield takeEvery(types.API_V1_ORDER_UPDATE, api_v1_order_updateWorker)
}
function* api_v1_order_partial_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_order_partial_update, action)
    yield put(actions.api_v1_order_partial_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_order_partial_updateFailed(err, action))
  }
}
function* api_v1_order_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_ORDER_PARTIAL_UPDATE,
    api_v1_order_partial_updateWorker
  )
}
function* api_v1_order_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_order_delete, action)
    yield put(actions.api_v1_order_deleteSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_order_deleteFailed(err, action))
  }
}
function* api_v1_order_deleteWatcher() {
  yield takeEvery(types.API_V1_ORDER_DELETE, api_v1_order_deleteWorker)
}
function* api_v1_paymentmethod_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_paymentmethod_list, action)
    yield put(actions.api_v1_paymentmethod_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_paymentmethod_listFailed(err, action))
  }
}
function* api_v1_paymentmethod_listWatcher() {
  yield takeEvery(
    types.API_V1_PAYMENTMETHOD_LIST,
    api_v1_paymentmethod_listWorker
  )
}
function* api_v1_paymentmethod_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_paymentmethod_create, action)
    yield put(actions.api_v1_paymentmethod_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_paymentmethod_createFailed(err, action))
  }
}
function* api_v1_paymentmethod_createWatcher() {
  yield takeEvery(
    types.API_V1_PAYMENTMETHOD_CREATE,
    api_v1_paymentmethod_createWorker
  )
}
function* api_v1_paymentmethod_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_paymentmethod_read, action)
    yield put(actions.api_v1_paymentmethod_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_paymentmethod_readFailed(err, action))
  }
}
function* api_v1_paymentmethod_readWatcher() {
  yield takeEvery(
    types.API_V1_PAYMENTMETHOD_READ,
    api_v1_paymentmethod_readWorker
  )
}
function* api_v1_paymentmethod_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_paymentmethod_update, action)
    yield put(actions.api_v1_paymentmethod_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_paymentmethod_updateFailed(err, action))
  }
}
function* api_v1_paymentmethod_updateWatcher() {
  yield takeEvery(
    types.API_V1_PAYMENTMETHOD_UPDATE,
    api_v1_paymentmethod_updateWorker
  )
}
function* api_v1_paymentmethod_partial_updateWorker(action) {
  try {
    const result = yield call(
      apiService.api_v1_paymentmethod_partial_update,
      action
    )
    yield put(
      actions.api_v1_paymentmethod_partial_updateSucceeded(result, action)
    )
  } catch (err) {
    yield put(actions.api_v1_paymentmethod_partial_updateFailed(err, action))
  }
}
function* api_v1_paymentmethod_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_PAYMENTMETHOD_PARTIAL_UPDATE,
    api_v1_paymentmethod_partial_updateWorker
  )
}
function* api_v1_paymentmethod_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_paymentmethod_delete, action)
    yield put(actions.api_v1_paymentmethod_deleteSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_paymentmethod_deleteFailed(err, action))
  }
}
function* api_v1_paymentmethod_deleteWatcher() {
  yield takeEvery(
    types.API_V1_PAYMENTMETHOD_DELETE,
    api_v1_paymentmethod_deleteWorker
  )
}
function* api_v1_profile_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_profile_list, action)
    yield put(actions.api_v1_profile_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_profile_listFailed(err, action))
  }
}
function* api_v1_profile_listWatcher() {
  yield takeEvery(types.API_V1_PROFILE_LIST, api_v1_profile_listWorker)
}
function* api_v1_profile_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_profile_create, action)
    yield put(actions.api_v1_profile_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_profile_createFailed(err, action))
  }
}
function* api_v1_profile_createWatcher() {
  yield takeEvery(types.API_V1_PROFILE_CREATE, api_v1_profile_createWorker)
}
function* api_v1_profile_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_profile_read, action)
    yield put(actions.api_v1_profile_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_profile_readFailed(err, action))
  }
}
function* api_v1_profile_readWatcher() {
  yield takeEvery(types.API_V1_PROFILE_READ, api_v1_profile_readWorker)
}
function* api_v1_profile_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_profile_update, action)
    yield put(actions.api_v1_profile_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_profile_updateFailed(err, action))
  }
}
function* api_v1_profile_updateWatcher() {
  yield takeEvery(types.API_V1_PROFILE_UPDATE, api_v1_profile_updateWorker)
}
function* api_v1_profile_partial_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_profile_partial_update, action)
    yield put(actions.api_v1_profile_partial_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_profile_partial_updateFailed(err, action))
  }
}
function* api_v1_profile_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_PROFILE_PARTIAL_UPDATE,
    api_v1_profile_partial_updateWorker
  )
}
function* api_v1_profile_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_profile_delete, action)
    yield put(actions.api_v1_profile_deleteSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_profile_deleteFailed(err, action))
  }
}
function* api_v1_profile_deleteWatcher() {
  yield takeEvery(types.API_V1_PROFILE_DELETE, api_v1_profile_deleteWorker)
}
function* api_v1_review_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_review_list, action)
    yield put(actions.api_v1_review_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_review_listFailed(err, action))
  }
}
function* api_v1_review_listWatcher() {
  yield takeEvery(types.API_V1_REVIEW_LIST, api_v1_review_listWorker)
}
function* api_v1_review_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_review_create, action)
    yield put(actions.api_v1_review_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_review_createFailed(err, action))
  }
}
function* api_v1_review_createWatcher() {
  yield takeEvery(types.API_V1_REVIEW_CREATE, api_v1_review_createWorker)
}
function* api_v1_review_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_review_read, action)
    yield put(actions.api_v1_review_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_review_readFailed(err, action))
  }
}
function* api_v1_review_readWatcher() {
  yield takeEvery(types.API_V1_REVIEW_READ, api_v1_review_readWorker)
}
function* api_v1_review_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_review_update, action)
    yield put(actions.api_v1_review_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_review_updateFailed(err, action))
  }
}
function* api_v1_review_updateWatcher() {
  yield takeEvery(types.API_V1_REVIEW_UPDATE, api_v1_review_updateWorker)
}
function* api_v1_review_partial_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_review_partial_update, action)
    yield put(actions.api_v1_review_partial_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_review_partial_updateFailed(err, action))
  }
}
function* api_v1_review_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_REVIEW_PARTIAL_UPDATE,
    api_v1_review_partial_updateWorker
  )
}
function* api_v1_review_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_review_delete, action)
    yield put(actions.api_v1_review_deleteSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_review_deleteFailed(err, action))
  }
}
function* api_v1_review_deleteWatcher() {
  yield takeEvery(types.API_V1_REVIEW_DELETE, api_v1_review_deleteWorker)
}
function* api_v1_signup_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_signup_create, action)
    yield put(actions.api_v1_signup_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_signup_createFailed(err, action))
  }
}
function* api_v1_signup_createWatcher() {
  yield takeEvery(types.API_V1_SIGNUP_CREATE, api_v1_signup_createWorker)
}
function* rest_auth_login_createWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_login_create, action)
    yield put(actions.rest_auth_login_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.rest_auth_login_createFailed(err, action))
  }
}
function* rest_auth_login_createWatcher() {
  yield takeEvery(types.REST_AUTH_LOGIN_CREATE, rest_auth_login_createWorker)
}
function* rest_auth_logout_listWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_logout_list, action)
    yield put(actions.rest_auth_logout_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.rest_auth_logout_listFailed(err, action))
  }
}
function* rest_auth_logout_listWatcher() {
  yield takeEvery(types.REST_AUTH_LOGOUT_LIST, rest_auth_logout_listWorker)
}
function* rest_auth_logout_createWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_logout_create, action)
    yield put(actions.rest_auth_logout_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.rest_auth_logout_createFailed(err, action))
  }
}
function* rest_auth_logout_createWatcher() {
  yield takeEvery(types.REST_AUTH_LOGOUT_CREATE, rest_auth_logout_createWorker)
}
function* rest_auth_password_change_createWorker(action) {
  try {
    const result = yield call(
      apiService.rest_auth_password_change_create,
      action
    )
    yield put(actions.rest_auth_password_change_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.rest_auth_password_change_createFailed(err, action))
  }
}
function* rest_auth_password_change_createWatcher() {
  yield takeEvery(
    types.REST_AUTH_PASSWORD_CHANGE_CREATE,
    rest_auth_password_change_createWorker
  )
}
function* rest_auth_password_reset_createWorker(action) {
  try {
    const result = yield call(
      apiService.rest_auth_password_reset_create,
      action
    )
    yield put(actions.rest_auth_password_reset_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.rest_auth_password_reset_createFailed(err, action))
  }
}
function* rest_auth_password_reset_createWatcher() {
  yield takeEvery(
    types.REST_AUTH_PASSWORD_RESET_CREATE,
    rest_auth_password_reset_createWorker
  )
}
function* rest_auth_password_reset_confirm_createWorker(action) {
  try {
    const result = yield call(
      apiService.rest_auth_password_reset_confirm_create,
      action
    )
    yield put(
      actions.rest_auth_password_reset_confirm_createSucceeded(result, action)
    )
  } catch (err) {
    yield put(
      actions.rest_auth_password_reset_confirm_createFailed(err, action)
    )
  }
}
function* rest_auth_password_reset_confirm_createWatcher() {
  yield takeEvery(
    types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE,
    rest_auth_password_reset_confirm_createWorker
  )
}
function* rest_auth_registration_createWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_registration_create, action)
    yield put(actions.rest_auth_registration_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.rest_auth_registration_createFailed(err, action))
  }
}
function* rest_auth_registration_createWatcher() {
  yield takeEvery(
    types.REST_AUTH_REGISTRATION_CREATE,
    rest_auth_registration_createWorker
  )
}
function* rest_auth_registration_verify_email_createWorker(action) {
  try {
    const result = yield call(
      apiService.rest_auth_registration_verify_email_create,
      action
    )
    yield put(
      actions.rest_auth_registration_verify_email_createSucceeded(
        result,
        action
      )
    )
  } catch (err) {
    yield put(
      actions.rest_auth_registration_verify_email_createFailed(err, action)
    )
  }
}
function* rest_auth_registration_verify_email_createWatcher() {
  yield takeEvery(
    types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE,
    rest_auth_registration_verify_email_createWorker
  )
}
function* rest_auth_user_readWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_user_read, action)
    yield put(actions.rest_auth_user_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.rest_auth_user_readFailed(err, action))
  }
}
function* rest_auth_user_readWatcher() {
  yield takeEvery(types.REST_AUTH_USER_READ, rest_auth_user_readWorker)
}
function* rest_auth_user_updateWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_user_update, action)
    yield put(actions.rest_auth_user_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.rest_auth_user_updateFailed(err, action))
  }
}
function* rest_auth_user_updateWatcher() {
  yield takeEvery(types.REST_AUTH_USER_UPDATE, rest_auth_user_updateWorker)
}
function* rest_auth_user_partial_updateWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_user_partial_update, action)
    yield put(actions.rest_auth_user_partial_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.rest_auth_user_partial_updateFailed(err, action))
  }
}
function* rest_auth_user_partial_updateWatcher() {
  yield takeEvery(
    types.REST_AUTH_USER_PARTIAL_UPDATE,
    rest_auth_user_partial_updateWorker
  )
}
export default function* rootSaga() {
  const sagas = [
    api_v1_bill_listWatcher,
    api_v1_bill_createWatcher,
    api_v1_bill_readWatcher,
    api_v1_bill_updateWatcher,
    api_v1_bill_partial_updateWatcher,
    api_v1_bill_deleteWatcher,
    api_v1_category_listWatcher,
    api_v1_category_createWatcher,
    api_v1_category_readWatcher,
    api_v1_category_updateWatcher,
    api_v1_category_partial_updateWatcher,
    api_v1_category_deleteWatcher,
    api_v1_contactinfo_listWatcher,
    api_v1_contactinfo_createWatcher,
    api_v1_contactinfo_readWatcher,
    api_v1_contactinfo_updateWatcher,
    api_v1_contactinfo_partial_updateWatcher,
    api_v1_contactinfo_deleteWatcher,
    api_v1_country_listWatcher,
    api_v1_country_createWatcher,
    api_v1_country_readWatcher,
    api_v1_country_updateWatcher,
    api_v1_country_partial_updateWatcher,
    api_v1_country_deleteWatcher,
    api_v1_customtext_listWatcher,
    api_v1_customtext_readWatcher,
    api_v1_customtext_updateWatcher,
    api_v1_customtext_partial_updateWatcher,
    api_v1_driverorder_listWatcher,
    api_v1_driverorder_createWatcher,
    api_v1_driverorder_readWatcher,
    api_v1_driverorder_updateWatcher,
    api_v1_driverorder_partial_updateWatcher,
    api_v1_driverorder_deleteWatcher,
    api_v1_driverprofile_listWatcher,
    api_v1_driverprofile_createWatcher,
    api_v1_driverprofile_readWatcher,
    api_v1_driverprofile_updateWatcher,
    api_v1_driverprofile_partial_updateWatcher,
    api_v1_driverprofile_deleteWatcher,
    api_v1_homepage_listWatcher,
    api_v1_homepage_readWatcher,
    api_v1_homepage_updateWatcher,
    api_v1_homepage_partial_updateWatcher,
    api_v1_item_listWatcher,
    api_v1_item_createWatcher,
    api_v1_item_readWatcher,
    api_v1_item_updateWatcher,
    api_v1_item_partial_updateWatcher,
    api_v1_item_deleteWatcher,
    api_v1_itemvariant_listWatcher,
    api_v1_itemvariant_createWatcher,
    api_v1_itemvariant_readWatcher,
    api_v1_itemvariant_updateWatcher,
    api_v1_itemvariant_partial_updateWatcher,
    api_v1_itemvariant_deleteWatcher,
    api_v1_login_createWatcher,
    api_v1_order_listWatcher,
    api_v1_order_createWatcher,
    api_v1_order_readWatcher,
    api_v1_order_updateWatcher,
    api_v1_order_partial_updateWatcher,
    api_v1_order_deleteWatcher,
    api_v1_paymentmethod_listWatcher,
    api_v1_paymentmethod_createWatcher,
    api_v1_paymentmethod_readWatcher,
    api_v1_paymentmethod_updateWatcher,
    api_v1_paymentmethod_partial_updateWatcher,
    api_v1_paymentmethod_deleteWatcher,
    api_v1_profile_listWatcher,
    api_v1_profile_createWatcher,
    api_v1_profile_readWatcher,
    api_v1_profile_updateWatcher,
    api_v1_profile_partial_updateWatcher,
    api_v1_profile_deleteWatcher,
    api_v1_review_listWatcher,
    api_v1_review_createWatcher,
    api_v1_review_readWatcher,
    api_v1_review_updateWatcher,
    api_v1_review_partial_updateWatcher,
    api_v1_review_deleteWatcher,
    api_v1_signup_createWatcher,
    rest_auth_login_createWatcher,
    rest_auth_logout_listWatcher,
    rest_auth_logout_createWatcher,
    rest_auth_password_change_createWatcher,
    rest_auth_password_reset_createWatcher,
    rest_auth_password_reset_confirm_createWatcher,
    rest_auth_registration_createWatcher,
    rest_auth_registration_verify_email_createWatcher,
    rest_auth_user_readWatcher,
    rest_auth_user_updateWatcher,
    rest_auth_user_partial_updateWatcher
  ]
  yield all(
    sagas.map(saga =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga)
            break
          } catch (e) {
            console.log(e)
          }
        }
      })
    )
  )
}
