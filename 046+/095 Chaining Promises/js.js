const getTodos = (resourse) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject("error getting resource");
      }
    });

    request.open("GET", resourse);
    request.send();
  });
};

getTodos("todos/luigi.json").then((data) => {
    console.log("promise resolved:", data);
    return getTodos('todos/mario.json');
  }).then(data => {
    console.log('promise 2 resolverd:', data);
    return getTodos('todos/shaun.json');
  }).then(data => {
    console.log('promise 3 resolved:', data);
  }).catch((err) => {
    console.log("promise rejected:", err);
  });

// Promise example

// const getSomething = () => {
//   return new Promise((resolve, reject) => {
//     //fetch something
//     resolve("some data");
//     reject("some error");
//   });
// };

// getSomething().then((data) => {
//   console.log(data);
//  }, (err) => {
//   console.log(err);
//  })

// getSomething().then(data =>{
//   console.log(data);
// }).catch(err => {
//   console.log(err)
// })
