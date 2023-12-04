export const validationLang = (object, lang) => {
    if (object[lang]) {
        return object[lang];
    } else {
        const keys = Object.keys(object);
        if (keys.length > 0) {
            const firstLanguage = keys[0];
            return object[firstLanguage];
        } else {
            return "";
        }
    }
};