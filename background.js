chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
      const url = new URL(details.url);
      if (url.hostname.includes('instagram.com') ||
          (url.hostname.includes('youtube.com') && !isAcademicYouTubeVideo(url))) {
        return { cancel: true };
      }
    },
    { urls: ["<all_urls>"] },
    ["blocking"]
  );
  
  function isAcademicYouTubeVideo(url) {
    const academicKeywords = ["tutorial", "lecture", "education", "course"];
    return academicKeywords.some(keyword => url.pathname.includes(keyword));
    // whoops gotta make this better
  }
  