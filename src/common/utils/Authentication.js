import isEmpty from 'lodash-es/isEmpty';
import isArray from 'lodash-es/isArray';

class Authentication {

    paramsSet = {};
    headersSet = {};
    configuration = {};
    method = {};
    callStack = [];
    authKey = '';

    /**
     * @param method Information about authentication method
     * @param method.code Unique method code
     * @param method.title Name of authentication method
     * @param method.icon Icon component
     * @param method.component Form for configuration
     */
    constructor(method = {}) {
        if (isEmpty(method)) {
            throw new Error('You should provide method data')
        }

        this.method = method;

        return this.parseConfig.bind(this);
    }

    /**
     * @param config
     * @param config.headers Static headers that should be exists in request
     * @param config.params Static params that should be exists in uri
     * @param config.key Key that will be provided with generated auth data
     * @param config.via Array of methods that should be called to generate credentials
     */
    parseConfig(config = {}) {
        if (isEmpty(config)) {
            throw new Error('You should provide source configuration');
        }

        const {
            headers,
            params,
            via,
            key
        } = config;

        if (typeof headers === 'object') {
            this.headersSet = headers;
        }

        switch (typeof params) {
            case 'string':
                this.paramsSet = params
                    .replace('?', '')
                    .split('&')
                    .map((param) =>
                        param
                            .split('=')
                    )
                    .reduce(
                        (acc, [key, value]) => ({
                            ...acc,
                            [key]: value
                        }),
                        {}
                    );
                break;
            case 'object':
                this.paramsSet = params;
                break;
            default:
                break;
        }

        if (isArray(via)) {
            this.callStack =
                via
                    .filter((method) => this[method])
                    .map((method) => this[method]);
        }

        this.authKey = key;

        return this;

    }

    /**
     * Method to add Basic authorization headers to set
     * @param data Form data with user credentials
     * @param data.login User login
     * @param data.password User password
     */
    basic({ login, password }) {
        const encodedCredentials = Authentication.encodeCredentials(
            login,
            password
        );

        this.headers({
            key: `Basic ${encodedCredentials}`
        });
    }

    /**
     * Method to add params to authorize on source
     * @param data Form data with user credentials
     * @param key User key (API key, param key)
     */
    params({ key }) {
        this.paramsSet = {
            ...this.paramsSet,
            [this.authKey]: key
        }
    }

    /**
     * Method to add headers to authorize on source
     * @param data Form data with user credentials
     * @param key User key (API key, header key)
     */
    headers({ key }) {
        this.headersSet = {
            ...this.headersSet,
            [this.authKey]: key
        }
    }

    /**
     * Generate configuration that will be used to configure request
     * @param data
     * @returns {{headers, params, method}} Config object for request
     */
    generate(data) {

        this.callStack.forEach((method) => {
            method.call(this, data);
        });

        return {
            headers: this.headersSet,
            params: this.paramsSet,
            method: this.method.code,
        };
    }

    get code() {
        return this.method.code;
    }

    get title() {
        return this.method.title;
    }

    get icon() {
        return this.method.icon;
    }

    get component() {
        return this.method.component;
    }

    static encodeCredentials(login, password) {
        return btoa(`${login}:${password}`);
    }

}

export default Authentication;
