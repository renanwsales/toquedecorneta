// Cookie Consent Banner
(function() {
    'use strict';
    
    // Check if consent already given
    if (localStorage.getItem('cookieConsent') === 'accepted') {
        return;
    }
    
    // Create banner
    const banner = document.createElement('div');
    banner.id = 'cookie-banner';
    banner.innerHTML = `
        <div style="
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background: #333;
            color: white;
            padding: 15px;
            text-align: center;
            z-index: 1000;
            font-family: Arial, sans-serif;
            font-size: 14px;
        ">
            <p style="margin: 0 0 10px 0;">
                Este site usa cookies para melhorar sua experiência e exibir anúncios personalizados.
            </p>
            <button id="accept-cookies" style="
                background: #007BFF;
                color: white;
                border: none;
                padding: 8px 16px;
                margin-right: 10px;
                border-radius: 4px;
                cursor: pointer;
            ">Aceitar</button>
            <button id="decline-cookies" style="
                background: #666;
                color: white;
                border: none;
                padding: 8px 16px;
                border-radius: 4px;
                cursor: pointer;
            ">Recusar</button>
        </div>
    `;
    
    document.body.appendChild(banner);
    
    // Accept cookies
    document.getElementById('accept-cookies').addEventListener('click', function() {
        localStorage.setItem('cookieConsent', 'accepted');
        banner.remove();
    });
    
    // Decline cookies
    document.getElementById('decline-cookies').addEventListener('click', function() {
        localStorage.setItem('cookieConsent', 'declined');
        banner.remove();
        // Disable AdSense if declined
        window.adsbygoogle = window.adsbygoogle || [];
        window.adsbygoogle.push({
            google_ad_client: getAdSenseClientId(),
            enable_page_level_ads: false
        });
    });
})();
