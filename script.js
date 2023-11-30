/*
window.onload = addPageNumbers;

          function addPageNumbers() {
            var totalPages = Math.ceil(document.body.scrollHeight / 455);  //842px A4 pageheight for 72dpi, 1123px A4 pageheight for 96dpi, 
            for (var i = 1; i <= totalPages; i++) {
              var pageNumberDiv = document.createElement("div");
              var pageNumber = document.createTextNode(i);
              pageNumberDiv.style.position = "absolute";
              pageNumberDiv.style.transform  = "translateY(calc((" + i + " * (187.79mm - 0.5px)) - 15px))"; //297mm A4 pageheight;
                
              pageNumberDiv.style.height = "16px";
              pageNumberDiv.appendChild(pageNumber);
              document.querySelector("main").insertBefore(pageNumberDiv, document.getElementById("content"));
              pageNumberDiv.style.left = "calc(100% - (" + pageNumberDiv.offsetWidth + "px + 240px))";
            }
          }
       */