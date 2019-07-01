export default (url) => {
    if(url[url.length - 1] === '/') {
        return url.substr(0, url.length - 1);
    }

    return url;
}