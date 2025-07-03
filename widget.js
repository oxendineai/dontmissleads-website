// DontMissLeads Chat Widget
// Version 1.0

(function() {
    'use strict';

    // Auto-initialize from script tag data attributes
    function initializeWidget() {
        const scripts = document.querySelectorAll('script[src*="widget.js"]');
        const script = scripts[scripts.length - 1]; // Get the current script tag
        
        const config = {
            apiKey: script.getAttribute('data-api-key') || 'demo-key',
            apiUrl: script.getAttribute('data-api-url') || 'https://your-n8n-webhook-url.com/webhook/chat',
            position: script.getAttribute('data-position') || 'bottom-right',
            theme: script.getAttribute('data-theme') || 'default'
        };

        // Create widget container if it doesn't exist
        let container = document.getElementById('dontmissleads-chat');
        if (!container) {
            container = document.createElement('div');
            container.id = 'dontmissleads-chat';
            document.body.appendChild(container);
        }

        // Load CSS and create widget
        loadCSS();
        createWidget(container, config);
    }

    function loadCSS() {
        const css = `
        .dml-widget {
            position: fixed;
            bottom: 20px;
            right: 20px;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            z-index: 9999;
        }
        
        .dml-chat-button {
            width: 60px;
            height: 60px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 50%;
            border: none;
            cursor: pointer;
            box-shadow: 0 4px 20px rgba(0,0,0,0.15);
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
        }
        
        .dml-chat-button:hover {
            transform: scale(1.1);
            box-shadow: 0 6px 25px rgba(0,0,0,0.2);
        }
        
        .dml-chat-button svg {
            width: 24px;
            height: 24px;
            fill: white;
        }`;

        const style = document.createElement('style');
        style.textContent = css;
        document.head.appendChild(style);
    }

    function createWidget(container, config) {
        container.innerHTML = `
            <div class="dml-widget">
                <button class="dml-chat-button" onclick="alert('Chat widget loaded! Ready to connect to n8n webhook.')">
                    <svg viewBox="0 0 24 24">
                        <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
                    </svg>
                </button>
            </div>
        `;
    }

    // Auto-initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeWidget);
    } else {
        initializeWidget();
    }

})();
