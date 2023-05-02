const getTodos = (resourse, callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
    } else if (request.readyState === 4) {
      callback("coud not fetch data", undefined);
    }
  });

  request.open("GET", resourse);
  request.send();
};

// Promise example

const getSomething = () => {
  return new Promise((resolve, reject) => {
    //fetch something
    resolve("some data");
    reject("some error");
  });
};

// getSomething().then((data) => {
//   console.log(data);
//  }, (err) => {
//   console.log(err);
//  })


getSomething().then(data =>{
  console.log(data);
}).catch(err => {
  console.log(err)
})