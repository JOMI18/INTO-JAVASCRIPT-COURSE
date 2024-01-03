// 1. PROMISE

let prom = new Promise((resolve, reject) => {
  setTimeout(() => {
    return resolve("PROMISE FULFILLED");
  }, 5000);
})
  .then((respon) => {
    console.log(respon);
  })
  .catch((err) => {
    console.log(err.message);
  })
  .finally(() => {
    console.log("finished");
  });
//   finally runs irrespectively
console.log(prom);

// 2. FETCH

fetch("https://jsonplaceholder.typicode.com/posts")
  // method:post
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
    json.forEach((el) => {
      console.log(el.title);
      document.getElementById("PhotosDiv").innerHTML = `
      title:  <p>${el.title}</p>

        `;
    });
    //   .catch((err) => {
    //     alert(err.message);
    //   });
  });

//   3. AXIOS

async function getPosts() {
  await fetch("https://jsonplaceholder.typicode.com/posts");
  await ((resp) => {
    resp.json();
    // console.log(resp);
  });
}

getPosts();
