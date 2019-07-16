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

export function exportApplyDataToExcel(params) {
    return request({
        url: '/apply/exportApplyToExcelForBaosi',
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

