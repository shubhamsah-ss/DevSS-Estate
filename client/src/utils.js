export const title_name = (params) => {
    const title = document.title = "DevSS || " + params
    return title;
}

export const LSData = {
    setItem: (key, value) => {
       localStorage.setItem(key, value);
    },
    getItem: (key) => {
       return localStorage.getItem(key);
    },
    removeItem: (key) => {
        localStorage.removeItem(key);
    },
    clearItem: () => {
        localStorage.clear();
    }
}