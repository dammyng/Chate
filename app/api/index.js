
function timeoutCall(ms, promise) {
    return new Promise((resolve, reject) => {
      const timeoutId = setTimeout(() => {
        reject(new Error("promise timeout"))
      }, ms);
      promise.then(
        (res) => {
          clearTimeout(timeoutId);
          resolve(res.json());
        },
        (err) => {
          clearTimeout(timeoutId);
          reject(err);
        }
      );
    })
  }




  export{
      timeoutCall
  }