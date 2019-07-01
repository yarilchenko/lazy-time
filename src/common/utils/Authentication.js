const Authentication = (authKey) => {
    const base64 = (login, password) =>
        btoa(`${login}:${password}`);

    return {
        basic: (login, password) => ({
            [authKey]: `Basic ${base64(login, password)}`
        }),
        params: (token) => ({
            [authKey]: token
        })
    }
};

export default Authentication;
