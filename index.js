import{a as L,S as b,i as h}from"./assets/vendor-tnUJPedx.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(a){if(a.ep)return;a.ep=!0;const s=t(a);fetch(a.href,s)}})();const v="48773957-0ff53b0d4b6397cb99259d9c5";async function m(o,e){const t="https://pixabay.com",i="/api/",a={key:v,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40,page:e};return await L.get(t+i,{params:a})}const w="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_602_210)'%3e%3cpath%20d='M6.81%200.219C6.95056%200.0787966%207.14097%204.21785e-05%207.3395%200L16.6605%200C16.859%204.21785e-05%2017.0494%200.0787966%2017.19%200.219L23.781%206.81C23.9212%206.95056%2024%207.14097%2024%207.3395V16.6605C24%2016.859%2023.9212%2017.0494%2023.781%2017.19L17.19%2023.781C17.0494%2023.9212%2016.859%2024%2016.6605%2024H7.3395C7.14097%2024%206.95056%2023.9212%206.81%2023.781L0.219%2017.19C0.0787966%2017.0494%204.21785e-05%2016.859%200%2016.6605L0%207.3395C4.21785e-05%207.14097%200.0787966%206.95056%200.219%206.81L6.81%200.219ZM7.65%201.5L1.5%207.65V16.35L7.65%2022.5H16.35L22.5%2016.35V7.65L16.35%201.5H7.65Z'%20fill='%23FAFAFB'/%3e%3cpath%20d='M6.969%206.969C7.03867%206.89916%207.12143%206.84374%207.21255%206.80593C7.30366%206.76812%207.40135%206.74866%207.5%206.74866C7.59865%206.74866%207.69633%206.76812%207.78745%206.80593C7.87857%206.84374%207.96133%206.89916%208.031%206.969L12%2010.9395L15.969%206.969C16.0387%206.89927%2016.1215%206.84395%2016.2126%206.80622C16.3037%206.76848%2016.4014%206.74905%2016.5%206.74905C16.5986%206.74905%2016.6963%206.76848%2016.7874%206.80622C16.8785%206.84395%2016.9613%206.89927%2017.031%206.969C17.1007%207.03873%2017.156%207.12152%2017.1938%207.21263C17.2315%207.30374%2017.2509%207.40139%2017.2509%207.5C17.2509%207.59862%2017.2315%207.69627%2017.1938%207.78738C17.156%207.87849%2017.1007%207.96127%2017.031%208.031L13.0605%2012L17.031%2015.969C17.1007%2016.0387%2017.156%2016.1215%2017.1938%2016.2126C17.2315%2016.3037%2017.2509%2016.4014%2017.2509%2016.5C17.2509%2016.5986%2017.2315%2016.6963%2017.1938%2016.7874C17.156%2016.8785%2017.1007%2016.9613%2017.031%2017.031C16.9613%2017.1007%2016.8785%2017.156%2016.7874%2017.1938C16.6963%2017.2315%2016.5986%2017.2509%2016.5%2017.2509C16.4014%2017.2509%2016.3037%2017.2315%2016.2126%2017.1938C16.1215%2017.156%2016.0387%2017.1007%2015.969%2017.031L12%2013.0605L8.031%2017.031C7.96127%2017.1007%207.87848%2017.156%207.78737%2017.1938C7.69626%2017.2315%207.59861%2017.2509%207.5%2017.2509C7.40138%2017.2509%207.30373%2017.2315%207.21262%2017.1938C7.12151%2017.156%207.03873%2017.1007%206.969%2017.031C6.89927%2016.9613%206.84395%2016.8785%206.80621%2016.7874C6.76847%2016.6963%206.74905%2016.5986%206.74905%2016.5C6.74905%2016.4014%206.76847%2016.3037%206.80621%2016.2126C6.84395%2016.1215%206.89927%2016.0387%206.969%2015.969L10.9395%2012L6.969%208.031C6.89915%207.96133%206.84374%207.87857%206.80593%207.78745C6.76812%207.69633%206.74866%207.59865%206.74866%207.5C6.74866%207.40135%206.76812%207.30367%206.80593%207.21255C6.84374%207.12143%206.89915%207.03867%206.969%206.969Z'%20fill='%23FAFAFB'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_602_210'%3e%3crect%20width='24'%20height='24'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",F=new b(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}),S=document.querySelector(".gallery");function f(o){const e=o.map(t=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${t.largeImageURL}">
        <img class="gallery-image" src="${t.webformatURL}" alt="${t.tags}" />
        <figcaption class="thumb-data">
          <dl class="thumb-data-list">
            <div class="thumb-data-item">
              <dt class="thumb-data-title">Likes</dt>
              <dd class="thumb-data-data">${t.likes}</dd>
            </div>
            <div class="thumb-data-item">
              <dt class="thumb-data-title">Views</dt>
              <dd class="thumb-data-data">${t.views}</dd>
            </div>
            <div class="thumb-data-item">
              <dt class="thumb-data-title">Comments</dt>
              <dd class="thumb-data-data">${t.comments}</dd>
            </div>
            <div class="thumb-data-item">
              <dt class="thumb-data-title">Downloads</dt>
              <dd class="thumb-data-data">${t.downloads}</dd>
            </div>
          </dl>
        </figcaption>
      </a>
    </li>
  `).join("");S.insertAdjacentHTML("beforeend",e),F.refresh()}const x=document.querySelector(".search-form"),l=document.querySelector(".search-input"),u=document.querySelector(".js-btn-load-more"),g=document.querySelector(".js-loader"),P=document.querySelector(".js-gallery");let n=1;const d=40;let r=0;x.addEventListener("submit",q);async function q(o){o.preventDefault(),p();const e=l.value.trim();if(e){try{const t=await m(e,1,d);l.value="",t.data.hits.length===0?h.show({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FFFFFF",messageSize:"16px",backgroundColor:"#EF4040",maxWidth:"432px",iconUrl:w}):(f(t.data.hits),r=t.data.totalHits,r>d&&y())}catch(t){console.log(t)}C()}}u.addEventListener("click",B);async function B(){p(),n+=1;const o=l.value.trim();try{const e=await m(o,n,d);r=e.data.totalHits,f(e.data.hits),n>=r?(M(),h.show({position:"topRight",message:"We're sorry, but you've reached the end of search results.",messageColor:"#000000",messageSize:"16px",backgroundColor:"#6c8cff",maxWidth:"432px"})):y()}catch(e){console.log(e)}C(),_()}function p(){g.classList.remove("hidden")}function C(){g.classList.add("hidden")}function y(){u.classList.remove("hidden")}function M(){u.classList.add("hidden")}function _(){const e=P.firstElementChild.getBoundingClientRect().height;scrollBy({behavior:"smooth",top:e*2})}
//# sourceMappingURL=index.js.map
