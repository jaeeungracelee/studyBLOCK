(function() {
    const academicKeywords = ["tutorial", "lecture", "education", "course"];
    const url = window.location.href;
  
    function isAcademicVideo(url) {
      return academicKeywords.some(keyword => url.toLowerCase().includes(keyword));
    }
  
    function blockContent() {
      if (url.includes("youtube.com/shorts") || !isAcademicVideo(url)) {
        document.documentElement.innerHTML = '<h1>content is blocked by studyBLOCK</h1>';
        document.documentElement.scrollTop = 0;
      }
    }
  
    blockContent();
  
    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        blockContent();
      });
    });
  
    observer.observe(document.documentElement, { childList: true, subtree: true });
  })();
  