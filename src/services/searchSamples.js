export default {
    search: (term, samples, opcInput) => {
        const cutSamples = samples.filter(item => containsString(item[opcInput], term));
        return cutSamples;
    }
}

function containsString(str, substr) {
    if (str != null || str != undefined) {
        for (let i = 0; i < str.length; i++) {
            if (str.substring(i, i + substr.length) === substr) {
                return str;
            }
        }
        return false;
    }
    return false;
}