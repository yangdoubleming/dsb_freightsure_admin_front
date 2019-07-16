import request from '@/utils/request'

export function getList(params) {
    return request({
        url: '/adminTs/findTsCompanyInfoList',
        method: 'post',
        data: params
    })
}

export function getCompanyListName(params) {
    return request({
        url: '/company/getCompanyListName',
        method: 'post',
        data: params
    })
}

export function getTsCompanyAndPlatformById(params) {
    return request({
        url: '/adminTs/getTsCompanyAndPlatformById',
        method: 'get',
        params: params
    })
}

export function getAllProductCategoryForTrustsure(param) {
    return request({
        url: '/adminTs/getAllProductCategoryForTrustsure',
        method: 'post',
        data: param
    })
}

export function editTsCompanyInfoAndOthers(param) {
    return request({
        url: '/adminTs/editTsCompanyInfoAndOthers',
        method: 'post',
        data: param
    })
}

export function addTsApprovalRecord(param) {
    return request({
        url: '/adminTs/addTsApprovalRecord',
        method: 'post',
        data: param
    })
}

export function findRejectRecordList(param) {
    return request({
        url: '/adminTs/findRejectRecordList',
        method: 'post',
        data: param
    })
}

export function downloadExcelForCompanyInfo(params) {
    return request({
        url: '/adminTs/downloadExcelForCompanyInfo',
        method: 'get',
        params: params,
        responseType: 'arraybuffer'
    })
}

export function findAdoptRecordList(params) {
    return request({
        url: '/adminTs/findAdoptRecordList',
        method: 'post',
        data: params
    })
}

export function getTsApprovalRecordAndOthersById(params) {
    return request({
        url: '/adminTs/getTsApprovalRecordAndOthersById',
        method: 'get',
        params: params
    })
}

export function findCompanyItemList(data,params) {
    return request({
        url: `/adminTs/findCompanyItemList?tsCompanyId=${params.tsCompanyId}&recordId=${params.id}`,
        method: 'post',
        data:data
    })
}

export function downloadExcelForRejectRecord(params) {
    return request({
        url: '/adminTs/downloadExcelForRejectRecord',
        method: 'get',
        params: params,
        responseType: 'arraybuffer'
    })
}

export function downloadExcelForAdoptRecord(params) {
    return request({
        url: '/adminTs/downloadExcelForAdoptRecord',
        method: 'get',
        params: params,
        responseType: 'arraybuffer'
    })
}
