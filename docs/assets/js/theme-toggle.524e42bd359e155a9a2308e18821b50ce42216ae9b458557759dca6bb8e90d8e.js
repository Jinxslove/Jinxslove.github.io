(()=>{var t=document.getElementById("theme-toggle-btn"),e=document.documentElement.getAttribute("data-theme");t.textContent=e==="dark"?"\u967D":"\u9670";t.addEventListener("click",()=>{document.documentElement.getAttribute("data-theme")==="dark"?(document.documentElement.setAttribute("data-theme","light"),t.textContent="\u9670",localStorage.setItem("theme","light")):(document.documentElement.setAttribute("data-theme","dark"),t.textContent="\u967D",localStorage.setItem("theme","dark"))});})();
