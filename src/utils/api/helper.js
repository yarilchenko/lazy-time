import isEmpty from 'lodash-es/isEmpty';

export function buildQueryParams(params) {
    if (isEmpty(params)) {
        return '';
    }

    return Object.keys(params).reduce(function(ret, key) {
        let value = params[key];

        if (value == null || value === undefined) {
            return ret;
        }

        if (!Array.isArray(value)) {
            value = [value];
        }

        value.forEach(function (val) {
            if(String(val).length > 0) {
                ret.push(
                    encodeURIComponent(key) + '=' +
                    encodeURIComponent(val)
                );
            }

        });

        return ret;
    }, []).join('&');
}
