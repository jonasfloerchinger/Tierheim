export async function fetchAllDogs() {
    return await fetch("http://localhost:4000/dogs", {
      mode: "cors",
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        return res;
      });
  }

export async function fetchAllCats() {
    return await fetch("http://localhost:4000/cats", {
      mode: "cors",
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        return res;
      });
  }

export async function fetchAllHamsters() {
    return await fetch("http://localhost:4000/hamsters", {
      mode: "cors",
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        return res;
      });
  }