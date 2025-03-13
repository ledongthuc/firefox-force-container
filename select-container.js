// Helper function to convert container icon names to emoji
function getContainerIcon(iconName) {
    const icons = {
        'fingerprint': '👆',
        'briefcase': '💼',
        'dollar': '💵',
        'cart': '🛒',
        'circle': '⭕',
        'gift': '🎁',
        'vacation': '🏖️',
        'food': '🍽️',
        'fruit': '🍎',
        'pet': '🐾',
        'tree': '🌳',
        'chill': '🎮'
    };
    return icons[iconName] || '📦';
}

// Get URL parameters
const urlParams = new URLSearchParams(window.location.search);
const targetUrl = urlParams.get('url');

// Display target URL
const targetUrlElement = document.querySelector('.target-url');
targetUrlElement.textContent = `Target URL: ${targetUrl || 'No URL provided'}`;

// Get containers and create selection UI
browser.contextualIdentities.query({})
    .then(containers => {
        const containerList = document.querySelector('.container-list');
        
        containers.forEach(container => {
            const item = document.createElement('div');
            item.className = 'container-item';
            
            const icon = document.createElement('span');
            icon.className = 'container-icon';
            icon.textContent = getContainerIcon(container.icon);
            
            const name = document.createElement('span');
            name.className = 'container-name';
            name.textContent = container.name;
            
            const color = document.createElement('span');
            color.className = 'container-color';
            color.style.backgroundColor = container.colorCode;
            
            item.appendChild(icon);
            item.appendChild(name);
            item.appendChild(color);
            
            item.addEventListener('click', () => {
                if (targetUrl) {
                    // Create new tab in selected container
                    browser.tabs.create({
                        url: targetUrl,
                        cookieStoreId: container.cookieStoreId
                    }).then(() => {
                        // Close the current tab after successful navigation
                        browser.tabs.getCurrent().then(tab => {
                            browser.tabs.remove(tab.id);
                        });
                    });
                }
            });
            
            containerList.appendChild(item);
        });
    })
    .catch(error => {
        console.error('Error fetching containers:', error);
        const containerList = document.querySelector('.container-list');
        containerList.textContent = 'Error loading containers. Please try again.';
    }); 