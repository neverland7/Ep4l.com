<!--浏览器搞笑标题-->
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/images/failure.ico");
         document.title = '(● ∀ ●)快看我';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "/images/favicon.ico");
         document.title = ' \\^o^/ 其实没事  ' ;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });