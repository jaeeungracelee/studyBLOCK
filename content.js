(function() {
    const academicKeywords = ["tutorial", "lecture", "education", "course"];
    const url = window.location.href;
  
    const isAcademicVideo = academicKeywords.some(keyword => url.toLowerCase().includes(keyword));
  
    if (url.includes("youtube.com/shorts") || (!isAcademicVideo && !url.includes("results"))) {
      document.documentElement.innerHTML = '<h1>content is blocked by studyBLOCK</h1>';
      document.documentElement.scrollTop = 0;
    }
    
    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (!isAcademicVideo) {
          document.documentElement.innerHTML = '<h1>content is blocked by studyBLOCK</h1>';
          document.documentElement.scrollTop = 0;
        }
      });
    });
  
    observer.observe(document.documentElement, { childList: true, subtree: true });
  })();
  