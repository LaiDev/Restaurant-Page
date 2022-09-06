let content = document.querySelector("#content");

export function initalLoad() {

    //Creates all the content on the main page when the site is first loaded
    
  const navBar = document.createElement("nav");
  content.append(navBar);
  const leftNav = document.createElement("div");
  navBar.append(leftNav);
  
  const logo = document.createElement("a");
  logo.href = "#";
  logo.innerHTML = "Lai`Cafe";
  leftNav.append(logo);
  const rightNav = document.createElement("div");
  rightNav.classList.add("rightNav")
  navBar.append(rightNav);
  const menuBtn = document.createElement("a");
  menuBtn.innerText = "Menu";
  menuBtn.href = "#"
  rightNav.append(menuBtn);
  const reviewsBtn = document.createElement("a");
  reviewsBtn.href = "#";
  reviewsBtn.innerText = "Reviews";
  rightNav.append(reviewsBtn);
  const storyBtn = document.createElement("a");
  storyBtn.href = "#";
  storyBtn.innerText = "Our Story";
  rightNav.append(storyBtn);

  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");
  content.append(wrapper);

  const title = document.createElement("h1");
  title.classList.add("title")
  title.innerText = "Lai`Cafe";
  wrapper.append(title);

  const description = document.createElement("h2");
  description.innerHTML = `Coffee & Sweets`;
  wrapper.append(description);

  const seeMenuBtn = document.createElement("button");
  seeMenuBtn.classList.add("menuBtn")
  seeMenuBtn.innerHTML = "Our Menu";
  wrapper.append(seeMenuBtn);
}
