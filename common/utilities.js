const $gds = '27AD777A810E7D38F53742FDB0872505|333-S|201810270852|mobile 465b9f878461420|FFFF'

export function httprequest_get(url, isGds=false) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, true)
    isGds && xhttp.setRequestHeader("access-token", $gds)
    xhttp.send()
    return xhttp
}

export function httprequest_post(url, isGds=false) {
    var xhttp = new XMLHttpRequest()
    xhttp.open("POST", url, true)
    isGds && xhttp.setRequestHeader("access-token", $gds)
    xhttp.send()
    return xhttp
}

export function getQueryParams() {
    const srchParams = window.location.search
    const queryParams = {}
    const queryString = decodeURIComponent(srchParams).split('?').length > 1 ? decodeURIComponent(srchParams).split('?')[1] : false
    if (queryString !== false) {
        const keys = queryString.split('&')
        for (let i = 0; i < keys.length; i++) {
            keys[i] = keys[i].split('=')
            queryParams[keys[i][0]] = keys[i][1]
        }
    }
    return queryParams
}