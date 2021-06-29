
const titleClickHandler = function(){
  console.log('Link was clicked!');
  const clickedlink = this;
  
  /*  remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll('.titles a.active');
  for(let activeLink of activeLinks){
    activeLink.classList.remove('active');  
  }
  /* add class 'active' to the clicked link */
  
    clickedlink.classList.add('active');
 

  /* remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll('article');
  for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
  }

  /* get 'href' attribute from the clicked link */
  const href = clickedlink.getAttribute('href');


  /* find the correct article using the selector (value of 'href' attribute) */
  const correctArticle = document.querySelector(href);


  /* add class 'active' to the correct article */
  correctArticle.classList.add('active');
} 

const links = document.querySelectorAll('.titles a');
console.log(links);
for(let link of links){
  link.addEventListener('click', titleClickHandler);
    
}