// Listen for tab updates
browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  // Only check when the tab has finished loading
  if (changeInfo.status === 'complete' && tab.url) {
    // Skip our own container selection page and about: pages
    if (tab.url.includes('select-container.html') || tab.url.startsWith('about:')) {
      return;
    }

    // Check if the tab is in a container
    if (tab.cookieStoreId === 'firefox-default') {
      // Redirect to container selection page with the current URL
      browser.tabs.update(tabId, {
        url: browser.runtime.getURL('select-container.html') + '?url=' + encodeURIComponent(tab.url)
      });
    }
  }
});