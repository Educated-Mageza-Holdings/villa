// Villa Perfumes Analytics Dashboard
// Handles admin authentication and data visualization

(function() {
    'use strict';

    // Admin password (in production, this should be handled server-side)
    const ADMIN_PASSWORD = 'villa2024admin'; // Change this to your desired password

    // DOM Elements
    const loginContainer = document.getElementById('loginContainer');
    const dashboardContainer = document.getElementById('dashboardContainer');
    const loginForm = document.getElementById('loginForm');
    const adminPassword = document.getElementById('adminPassword');
    const errorMessage = document.getElementById('errorMessage');
    const logoutBtn = document.getElementById('logoutBtn');
    const refreshBtn = document.getElementById('refreshBtn');
    const exportBtn = document.getElementById('exportBtn');
    const clearBtn = document.getElementById('clearBtn');

    // Check if already logged in
    function checkAuth() {
        const isAuthenticated = sessionStorage.getItem('villaAdminAuth');
        if (isAuthenticated === 'true') {
            showDashboard();
        }
    }

    // Login handler
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const password = adminPassword.value;

        if (password === ADMIN_PASSWORD) {
            sessionStorage.setItem('villaAdminAuth', 'true');
            errorMessage.classList.remove('show');
            showDashboard();
        } else {
            errorMessage.classList.add('show');
            adminPassword.value = '';
            adminPassword.focus();
        }
    });

    // Logout handler
    logoutBtn.addEventListener('click', function() {
        sessionStorage.removeItem('villaAdminAuth');
        loginContainer.style.display = 'block';
        dashboardContainer.classList.remove('active');
        adminPassword.value = '';
    });

    // Show dashboard
    function showDashboard() {
        loginContainer.style.display = 'none';
        dashboardContainer.classList.add('active');
        loadAnalyticsData();
    }

    // Load and display analytics data
    function loadAnalyticsData() {
        const analyticsData = getAnalyticsData();

        if (!analyticsData) {
            console.log('No analytics data available yet.');
            return;
        }

        // Update stat cards
        document.getElementById('totalVisits').textContent = analyticsData.totalVisits.toLocaleString();
        document.getElementById('uniqueVisitors').textContent = analyticsData.uniqueVisitors.length.toLocaleString();
        document.getElementById('pagesTracked').textContent = Object.keys(analyticsData.pageViews).length;
        document.getElementById('daysActive').textContent = Object.keys(analyticsData.dailyStats).length;

        // Display page views
        displayPageViews(analyticsData.pageViews);

        // Display daily statistics
        displayDailyStats(analyticsData.dailyStats);

        // Display referrers
        displayReferrers(analyticsData.referrers);
    }

    // Get analytics data from localStorage
    function getAnalyticsData() {
        const data = localStorage.getItem('villaAnalytics');
        return data ? JSON.parse(data) : null;
    }

    // Display page views
    function displayPageViews(pageViews) {
        const container = document.getElementById('pageViewsList');
        container.innerHTML = '';

        if (Object.keys(pageViews).length === 0) {
            container.innerHTML = '<p style="color: var(--text-light); text-align: center;">No page views recorded yet.</p>';
            return;
        }

        // Sort by views (descending)
        const sortedPages = Object.entries(pageViews).sort((a, b) => b[1] - a[1]);

        sortedPages.forEach(([page, views]) => {
            const item = document.createElement('div');
            item.className = 'page-view-item';
            item.innerHTML = `
                <span class="page-name"><i class="fas fa-file"></i> ${page}</span>
                <span class="view-count">${views.toLocaleString()} views</span>
            `;
            container.appendChild(item);
        });
    }

    // Display daily statistics
    function displayDailyStats(dailyStats) {
        const tbody = document.getElementById('dailyStatsBody');
        tbody.innerHTML = '';

        if (Object.keys(dailyStats).length === 0) {
            tbody.innerHTML = '<tr><td colspan="3" style="text-align: center; color: var(--text-light);">No daily statistics available yet.</td></tr>';
            return;
        }

        // Sort by date (most recent first)
        const sortedDates = Object.entries(dailyStats).sort((a, b) => new Date(b[0]) - new Date(a[0]));

        // Show last 30 days
        sortedDates.slice(0, 30).forEach(([date, stats]) => {
            const row = document.createElement('tr');
            const formattedDate = new Date(date).toLocaleDateString('en-ZA', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            });

            row.innerHTML = `
                <td><i class="fas fa-calendar"></i> ${formattedDate}</td>
                <td><strong>${stats.visits.toLocaleString()}</strong></td>
                <td><strong>${stats.uniqueVisitors.length.toLocaleString()}</strong></td>
            `;
            tbody.appendChild(row);
        });
    }

    // Display referrers
    function displayReferrers(referrers) {
        const container = document.getElementById('referrersList');
        container.innerHTML = '';

        if (Object.keys(referrers).length === 0) {
            container.innerHTML = '<p style="color: var(--text-light); text-align: center;">No referrer data available. Most visitors came directly to the site.</p>';
            return;
        }

        // Sort by count (descending)
        const sortedReferrers = Object.entries(referrers).sort((a, b) => b[1] - a[1]);

        sortedReferrers.forEach(([referrer, count]) => {
            const item = document.createElement('div');
            item.className = 'page-view-item';

            // Shorten long URLs
            let displayReferrer = referrer;
            if (referrer.length > 50) {
                displayReferrer = referrer.substring(0, 47) + '...';
            }

            item.innerHTML = `
                <span class="page-name"><i class="fas fa-external-link-alt"></i> ${displayReferrer}</span>
                <span class="view-count">${count.toLocaleString()} visits</span>
            `;
            container.appendChild(item);
        });
    }

    // Refresh data
    refreshBtn.addEventListener('click', function() {
        loadAnalyticsData();

        // Visual feedback
        refreshBtn.innerHTML = '<i class="fas fa-check"></i> Refreshed!';
        setTimeout(() => {
            refreshBtn.innerHTML = '<i class="fas fa-sync-alt"></i> Refresh Data';
        }, 2000);
    });

    // Export data as JSON
    exportBtn.addEventListener('click', function() {
        const analyticsData = getAnalyticsData();

        if (!analyticsData) {
            alert('No data to export yet.');
            return;
        }

        const dataStr = JSON.stringify(analyticsData, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `villa-analytics-${new Date().toISOString().split('T')[0]}.json`;
        link.click();
        URL.revokeObjectURL(url);

        // Visual feedback
        exportBtn.innerHTML = '<i class="fas fa-check"></i> Exported!';
        setTimeout(() => {
            exportBtn.innerHTML = '<i class="fas fa-download"></i> Export Data';
        }, 2000);
    });

    // Clear all analytics data
    clearBtn.addEventListener('click', function() {
        if (confirm('Are you sure you want to clear ALL analytics data? This action cannot be undone.')) {
            if (confirm('This will permanently delete all visitor statistics. Continue?')) {
                localStorage.removeItem('villaAnalytics');
                loadAnalyticsData();
                alert('All analytics data has been cleared.');
            }
        }
    });

    // Initialize on page load
    checkAuth();

})();
