// Villa Perfumes Analytics Tracker
// Tracks page views and visitor data using localStorage

(function() {
    'use strict';

    // Initialize analytics data structure
    function initAnalytics() {
        const analytics = localStorage.getItem('villaAnalytics');
        if (!analytics) {
            const initialData = {
                totalVisits: 0,
                uniqueVisitors: [],
                pageViews: {},
                dailyStats: {},
                referrers: {},
                firstVisit: new Date().toISOString()
            };
            localStorage.setItem('villaAnalytics', JSON.stringify(initialData));
            return initialData;
        }
        return JSON.parse(analytics);
    }

    // Get or create visitor ID
    function getVisitorId() {
        let visitorId = localStorage.getItem('villaVisitorId');
        if (!visitorId) {
            visitorId = 'visitor_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
            localStorage.setItem('villaVisitorId', visitorId);
        }
        return visitorId;
    }

    // Track page view
    function trackPageView() {
        const analyticsData = initAnalytics();
        const visitorId = getVisitorId();
        const pageName = getPageName();
        const today = new Date().toISOString().split('T')[0];
        const referrer = document.referrer || 'Direct';

        // Increment total visits
        analyticsData.totalVisits++;

        // Track unique visitors
        if (!analyticsData.uniqueVisitors.includes(visitorId)) {
            analyticsData.uniqueVisitors.push(visitorId);
        }

        // Track page views
        if (!analyticsData.pageViews[pageName]) {
            analyticsData.pageViews[pageName] = 0;
        }
        analyticsData.pageViews[pageName]++;

        // Track daily stats
        if (!analyticsData.dailyStats[today]) {
            analyticsData.dailyStats[today] = {
                visits: 0,
                uniqueVisitors: []
            };
        }
        analyticsData.dailyStats[today].visits++;
        if (!analyticsData.dailyStats[today].uniqueVisitors.includes(visitorId)) {
            analyticsData.dailyStats[today].uniqueVisitors.push(visitorId);
        }

        // Track referrers
        if (referrer !== 'Direct' && !referrer.includes(window.location.hostname)) {
            if (!analyticsData.referrers[referrer]) {
                analyticsData.referrers[referrer] = 0;
            }
            analyticsData.referrers[referrer]++;
        }

        // Save analytics data
        localStorage.setItem('villaAnalytics', JSON.stringify(analyticsData));
    }

    // Get page name from current URL
    function getPageName() {
        const path = window.location.pathname;
        const page = path.split('/').pop() || 'index.html';
        return page.replace('.html', '') || 'home';
    }

    // Track page view on load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', trackPageView);
    } else {
        trackPageView();
    }

})();
