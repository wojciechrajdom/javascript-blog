
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

  const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles';
  
  function generateTitleLinks(){
  
    /* remove contents of titleList */
    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = '';
  
    /* for each article */
    const articles = document.querySelectorAll(optArticleSelector);

    html = html + linkHTML;

    for (let article of articles){  
      /* get the article id */
      const articleId = article.getAttribute('id');
      /* find the title element */
      const articleTitle = article.querySelector(optTitleSelector).innerHTML;
  
      /* get the title from the title element */
      const getTitle = article.getAttribute(optTitleSelector);
      /* create HTML of the link */
      const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
      let html = '';
      /* insert link into titleList */
      
      console.log = html;
    }  
    
      const links = document.querySelectorAll('.titles a');
      for(let link of links){
        link.addEventListener('click', titleClickHandler);
    }
  }    

  generateTitleLinks();
