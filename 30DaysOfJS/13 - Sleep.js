/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    const delay = delayMS => new Promise(res => setTimeout(res, delayMS));
    return delay(millis);
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
