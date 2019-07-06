import request from '@/utils/request'

export function getList(params) {
    return request({
        url: '/order/ordersByBaosi',
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

export function getCusInsureDetails(params) {
    return request({
        url: '/merchant/merchantOrderList',
        method: 'get',
        params: params
    })
}

export function findCiCompanyLoanList(data) {
    return request({
        url: `/apply/applyMerchantForBaosi   `,
        method: 'post',
        data: data
    })
}

export function getCiCompanyLoanById(params) {
    return request({
        url: '/apply/applyClaim',
        method: 'get',
        params: params
    })
}

export function documentInfo(params) {
    return request({
        url: 'apply/documentInfo',
        method: 'post',
        data: params
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

export function exportOrderToExcelForBaosi(params) {
    return request({
        url: '/order/exportOrderToExcelForBaosi ',
        method: 'get',
        params: params,
        responseType: 'arraybuffer'
    })
}

export function ordersByBatchForBaosi(params) {
    return request({
        url: '/order/ordersByBatchForBaosi',
        method: 'post',
        data: params,
    })
}



export function toExamineCompanyLoan(data) {
    return request({
        url: '/toExamineCompanyLoan',
        method: 'post',
        data: data
    })
}

export function editCompanyLoan(data) {
    return request({
        url: '/editCompanyLoan',
        method: 'post',
        data: data
    })
}

export function findCiRepaymentRecordList(data,params={}) {
    return request({
        url: `/findCiRepaymentRecordList?ciCompanyId=${params.ciCompanyId}&loanNo=${params.loanNo}`,
        method: 'post',
        data: data
    })
}

export function editRepaymentRecord(data) {
    return request({
        url: '/editRepaymentRecord',
        method: 'post',
        data: data
    })
}

export function toBatchExamineCompanyLoan(data) {
    return request({
        url: '/toBatchExamineCompanyLoan',
        method: 'post',
        data: data
    })
}





export function combinationsByProductId(params) {
    return request({
        url: `/apply/combinationsByProductId`,
        method: 'post',
        data: params
    })
}

export function getInsuranceInformation(params) {
    return request({
        url: `/order/getInsuranceInformation`,
        method: 'post',
        data: params
    })
}

export function addOrder(params) {
    return request({
        url: `/order/addOrderApi`,
        method: 'post',
        data: params
    })
}

export function getBalance(params) {
    return request({
        url: `/company/getBalance`,
        method: 'post',
        data: params
    })
}

export function accountInfo(params) {
    return request({
        url: `/account/info`,
        method: 'post',
        data: params
    })
}

export function goPay(data) {
    return request({
        url: `/order/updateOrderById/${data.ticketNo}/${data.source}`,
        method: 'get'
    })
}