// Start Ge Main Variabels
let input = document.querySelector("input");
let button = document.querySelector(".get-button");
let mainShowData = document.querySelector(".show-data");
let theRemovedPart = document.querySelector(".get-repos");
let theRemovedPart2 = document.querySelector(".information");

button.onclick = function () {
  theRemovedPart.style.display = "none";
  theRemovedPart2.style.display = "none";
  getRepos();
};

function getRepos() {
  if (input.value === "") {
    console.log("Please Enter Avalid User name");
  } else {
    fetch(`https://api.github.com/users/${input.value}/repos`)
      .then((rebos) => rebos.json())

      .then((repostries) => {
        console.log(repostries);
        repostries.forEach((repo) => {
          //creat Elements
          let div = document.createElement("div");
          let pName = document.createElement("p");
          pName.className = "name";
          pName.appendChild(document.createTextNode(`Name ${repo["name"]}`));

          let pid = document.createElement("p");
          pid.className = "id";
          pid.appendChild(document.createTextNode(`Id =>  ${repo["id"]}`));

          let anqour = document.createElement("a");
          anqour.className = "classFora-fa-solid fa-link";
          anqour.appendChild(document.createTextNode(`Link`));
          anqour.href = `https://github.com/${input.value}/${repo["name"]}`;
          anqour.setAttribute("target", "_blank");

          let pDate = document.createElement("p");
          pDate.className = "date";
          pDate.appendChild(
            document.createTextNode(
              `Publish ${repo["pushed_at"].slice(0, 10)}`,
            ),
          );

          // Append Part
          div.appendChild(pName);
          div.appendChild(pid);
          div.appendChild(anqour);
          div.appendChild(pDate);

          mainShowData.appendChild(div);
        });
      });
  }
}

let footer = document.querySelector(".year");
let yeraDate = new Date();
footer.innerHTML = yeraDate.getFullYear();
