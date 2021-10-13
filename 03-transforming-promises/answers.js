/**
 *
 * EXERCISE 1
 *
 * @param {*} promise
 * @param {*} transformer
 * @returns {Promise}
 */
function mapPromise(promise, transformer) {
  return new Promise((resolve, reject) => {
    promise
      .then((result) => {
        try {
          resolve(transformer(result));
        } catch (error) {
          reject(error);
        }
      })
      .catch(reject);
  });
}

/**
 *
 * EXERCISE 2
 *
 * @param {Promise<number | string>} numberPromise
 * @returns {Promise<number>}
 */
function squarePromise(numberPromise) {
  return numberPromise.then((num) => {
    return new Promise((resolve, reject) => {
      if (isNaN(num)) {
        reject("Cannot convert '" + num + "' to a number!");
      }
      resolve(num * num);
    });
  });
}

/**
 * EXERCISE 3
 *
 * @param {Promise<number | string>} numberPromise
 * @returns {Promise<number>}
 */
function squarePromiseOrZero(promise) {
  return squarePromise(promise).catch(() => {
    return 0;
  });
}

/**
 * EXERCISE 4
 *
 * @param {Promise} promise
 * @returns {Promise}
 */
function switcheroo(promise) {
  return new Promise((resolve, reject) => {
    promise
      .then((value) => {
        reject(value);
      })
      .catch((err) => {
        resolve(err);
      });
  });
}
/**
 * @callback consumer
 * @param {*} value
 */

/**
 * @callback handler
 * @param {*} error
 */

module.exports = {
  mapPromise,
  squarePromise,
  squarePromiseOrZero,
  switcheroo,
};
