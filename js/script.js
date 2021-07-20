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
};

const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list',
  optArticleAuthorSelector = '.post-author',
  optTagsListSelector = '.tags.list';
      
function generateTitleLinks(customSelector = ''){
  
  /* remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = '';
  
  /* for each article */
  const articles = document.querySelectorAll(optArticleSelector + customSelector);
  
  let html = '';

  for (let article of articles){  
    /* get the article id */
    const articleId = article.getAttribute('id');
    /* find the title element */
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;
  
    /* get the title from the title element */
    
    /* create HTML of the link */
    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
      
    /* insert link into titleList */
    html = html + linkHTML;
      
  }  
  titleList.innerHTML = html;
}
  
generateTitleLinks();

const links = document.querySelectorAll('.titles a');
for(let link of links){
  link.addEventListener('click', titleClickHandler);
}

function generateTags(){
  /* [NEW] create a new variable allTags with an empty object */
  let allTags = {};
  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);
  /* START LOOP: for every article: */
  for(let article of articles){
    /* find tags wrapper */
    const tagsWrapper = article.querySelector(optArticleTagsSelector);

    /* make html variable with empty string */
    let html = '';

    /* get tags from data-tags attribute */
    const articleTags = article.getAttribute('data-tags');
    /* split tags into array */
    const articleTagsArray = articleTags.split(' ');
    /* START LOOP: for each tag */
    for(let tag of articleTagsArray){

      /* generate HTML of the link */
      const linkHTML = '<a href="#tag-'+ tag +'">'+ tag +'</a> ';
      /* add generated code to html variable */
      html = html + linkHTML;
      /* [NEW] check if this link is NOT already in allTags */
      if(!allTags[tag]) {
        /* [NEW] add tag to allTags object */
        allTags[tag] = 1;
      } else {
        allTags[tag]++;
      }
      
    /* END LOOP: for each tag */
    }
    /* insert HTML of all the links into the tags wrapper */
    tagsWrapper.innerHTML = html;
  /* END LOOP: for every article: */
  }
  /* [NEW] find list of tags in right column */
  const tagList = document.querySelector(optTagsListSelector);

  /* [NEW] create variable for all links HTML code */
  let allTagsHTML = '';
  
  /* [NEW] START LOOP: for each tag in allTags: */
  for(let tag in allTags){
    console.log(tag);
    /* [NEW] generate code of a link and add it to allTagsHTML */
    allTagsHTML += tag + ' (' + allTags[tag] + ') ';
    
  /* [NEW] END LOOP: for each tag in allTags: */
  }
  /*[NEW] add HTML from allTagsHTML to tagList */
  tagList.innerHTML = allTagsHTML;
}

generateTags();


function tagClickHandler(event){
  /* prevent default action for this event */
  event.preventDefault();
  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;
  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href');
  /* make a new constant "tag" and extract tag from the "href" constant */
  /*const tag = href.replace('#tag-', ''); */
  /* find all tag links with class active */
  const tagLinks = document.querySelectorAll('a.active[href^="#tag-"]');
  /* START LOOP: for each active tag link */
  for(let tagLink of tagLinks){
    /* remove class active */
    tagLink.classActive.remove('active');
  /* END LOOP: for each active tag link */
  }
  /* find all tag links with "href" attribute equal to the "href" constant */
  const tagLinksHref = document.querySelectorAll('a[href="' + href + '"]');
  /* START LOOP: for each found tag link */
  for(let tagLinkHref of tagLinksHref){
    /* add class active */
    tagLinkHref.classListActive.add('active');
  /* END LOOP: for each found tag link */
  }
  /* execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-tags~="' + 'tag' + '"]');
}


function addClickListenersToTags(){
  /* find all links to tags */
  const links = document.querySelectorAll('a.active[href^="#tag-"]');
  /* START LOOP: for each link */
  for(let link of links){
    /* add tagClickHandler as event listener for that link */
    link.addEventListener('click', tagClickHandler);
  /* END LOOP: for each link */
  }
  
}
addClickListenersToTags();

function generateAuthors(){
  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);
  /* LOOP: for every article find author wrapper */
  for (let article of articles){
    const wrapperAuthors = article.querySelector(optArticleAuthorSelector);
    /* make html variable with empty string */
    let html = '';
    /* get author from data-author attribute */
    const articleAuthors = article.getAttribute('data-author');
    /* for each author generate HTML of the link */
    const linkHTMLAuthor = '<a href="#author-'+ articleAuthors +'">'+ articleAuthors +'</a>';
    /* add generated code to html variable */
    html = linkHTMLAuthor;
    /* insert HTML of all the links into the tags wrapper */
    wrapperAuthors.innerHTML = html;
  }
}
generateAuthors();

  
function authorClickHandler(event){
  /* prevent default action for this event */
  event.preventDefault(); 
  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;
  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href');
  /* make a new constant "author" and extract author from the "href" constant */
  const author = href.replace('#author-', '');
  /* find all author links with class active */
  const authorLinks = document.querySelectorAll('a.active[href^="#author-"]');
  /* START LOOP: for each active author link remove class active */
  for(let authorLink of authorLinks){
    authorLink.classList.remove('active');
  }
  /* find all author links with "href" attribute equal to the "href" constant */
  const authorLinksHref = document.querySelectorAll('a[href="' + href + '"]');
  /* START LOOP: for each found tag link add class active */
  for (let authorLinkHref of authorLinksHref){
    authorLinkHref.classList.add('active');
  }
  /* execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-author="' + author + '"]');

}


function addClickListenersToAuthors(){
  /* find all links to authors */
  const links = document.querySelectorAll('a[href^="#author-"]');
  /* LOOP: for each link add authorClickHandler as event listener for that link */
  for(let link of links){
    link.addEventListener('click', authorClickHandler);
  }
}
addClickListenersToAuthors();
