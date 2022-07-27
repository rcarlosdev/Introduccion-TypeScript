// import { name, age, isCool } from "./bases/01-types";
// import { pikachu } from "./bases/02-objects";
// import { charmander } from "./bases/03-classes";
// import { charmander } from "./bases/04-injection";
// import { charmander } from "./bases/05-decorators";
import { charmander } from "./bases/06-decorator2";

import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Hello ${charmander.name}</h1>
  </div>
`;
