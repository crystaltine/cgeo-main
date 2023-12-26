/**
 * Formats a timestamp into the format: "<Short Month> <Day>, <Year>"
 * @param timestamp timestamp in milliseconds
 */
export function fDate(timestamp: number) {
    const date = new Date(timestamp);
    const month = date.toLocaleString('default', { month: 'short' });
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month} ${day}, ${year}`;
}
export function isDevEnv(): boolean {
    if (
        process.env.APPSETTING_ENVTYPE === 'prod' ||
        process.env.ENVTYPE === 'prod' ||
        process.env.NODE_ENV === 'production'
    ) return false;

    let data;
    try {
        data = require('./env.json');
    } catch (e) {
        return false;
    }
    return data.ENVTYPE === 'dev';
}

/**
 * @returns {boolean} True if the user is logged in, false otherwise; derived from cookies
 */
export function loggedIn(): boolean {
    // Check if LoggedIn cookie is 'true'
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
      const [key, value] = cookie.split('=');
      if (key.trim() === 'LoggedIn' && value.trim() === 'true') return true;
    }

    return false;
}

export function logOut() {
    // Send logout request to server. It should clear the cookie that stores the JWT token
    fetch(API('/logout'), {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(() => {
        localStorage.removeItem('displayName');
        localStorage.removeItem('username');
        localStorage.removeItem('avatarRef');
        
        // Set cookie 'LoggedIn=true; path=/' to false
        document.cookie = 'LoggedIn=false; path=/';
        
        window.location.href = '/?loggedOut=true';
    })
    .catch(err => {
        console.error(err);
        alert('Error logging out. Try again in a bit!');
    });
}

/**
 * Returns a string for the requested dev API fetch URL
 * @param {String} endpoint e.g. /login (must start with /)
 * @param {Object} queryParams Object e.g. {email: "abc", password: "def"}
 * @returns {String} e.g. http://localhost:8080/login?email=abc&password=def
 */
export function API(endpoint: string = "", queryParams: object = {}): string {

    let str = isDevEnv()?
    `http://localhost:8080${endpoint}` :
    `https://floracosm-server.azurewebsites.net${endpoint}`;

    if (Object.keys(queryParams).length > 0) str += "?";

    for (const [key, value] of Object.entries(queryParams)) {
        str += `&${key}=${value}`
    }
    
    return str;
}

export function setTabInfo(pageTitle: string): void {
    document.title = pageTitle;
    try {
        const headTag = document.querySelector("head");
    
        const icon = document.createElement("link");
        const attributeRel = document.createAttribute("rel");
        attributeRel.value = "icon";
        const attributeHref = document.createAttribute("href");
        attributeHref.value = "./logo_v6_square.png";
    
        icon.setAttributeNode(attributeRel);
        icon.setAttributeNode(attributeHref);
    
        headTag?.appendChild(icon);
    } catch (e) { /* ignore on mobile since no tabs */ }
}