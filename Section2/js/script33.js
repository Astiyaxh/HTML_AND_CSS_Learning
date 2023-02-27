(() => {
  const form = document.getElementById("autoform");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    console.clear();
    console.log("Submit disabled. Data:");

    const data = new FormData(form);

    for (let nv of data.entries()) {
      console.log(`${nv[0]}: ${nv[1]}`);
    }
  });
})();
