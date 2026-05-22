(function() {
    var themeKey = 'blog-theme';

    function getSystemTheme() {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    function getStoredTheme() { return localStorage.getItem(themeKey); }
    function getCurrentTheme() { return getStoredTheme() || getSystemTheme(); }

    var moonIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
    var sunIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>';

    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        var btn = document.querySelector('.nav-theme-btn');
        if (btn) {
            btn.innerHTML = theme === 'dark' ? sunIcon : moonIcon;
            btn.setAttribute('aria-label', theme === 'dark' ? '切换到浅色模式' : '切换到深色模式');
        }
    }
    function toggleTheme() {
        var next = getCurrentTheme() === 'dark' ? 'light' : 'dark';
        localStorage.setItem(themeKey, next);
        applyTheme(next);
    }
    function initTheme() {
        applyTheme(getCurrentTheme());
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
            if (!getStoredTheme()) applyTheme(e.matches ? 'dark' : 'light');
        });
    }

    var menuOpen = false;
    function initMobileMenu() {
        var menuBtn = document.querySelector('.nav-menu-btn');
        var navLinks = document.querySelector('.nav-links');
        if (!menuBtn || !navLinks) return;

        function updateIcon() {
            menuBtn.innerHTML = menuOpen
                ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>'
                : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>';
        }

        menuBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            menuOpen = !menuOpen;
            navLinks.classList.toggle('active', menuOpen);
            updateIcon();
        });

        navLinks.addEventListener('click', function(e) {
            e.stopPropagation();
        });

        document.addEventListener('click', function() {
            if (menuOpen) {
                menuOpen = false;
                navLinks.classList.remove('active');
                updateIcon();
            }
        });
    }

    function initSearch() {
        var searchBtns = document.querySelectorAll('.nav-search-btn');
        var searchOverlay = document.querySelector('.search-overlay');
        var searchModalInput = document.querySelector('.search-modal-input');
        var searchResults = document.querySelector('.search-results');
        var searchClose = document.querySelector('.search-modal-close');
        var sidebarSearch = document.querySelector('.search-input');
        if (!searchOverlay) return;

        function openSearch() {
            searchOverlay.classList.add('active');
            if (searchModalInput) { searchModalInput.value = ''; searchModalInput.focus(); }
            if (searchResults) searchResults.innerHTML = '';
        }
        function closeSearch() { searchOverlay.classList.remove('active'); }

        searchBtns.forEach(function(btn) { btn.addEventListener('click', openSearch); });
        if (searchClose) searchClose.addEventListener('click', closeSearch);
        searchOverlay.addEventListener('click', function(e) { if (e.target === searchOverlay) closeSearch(); });
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') closeSearch();
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); openSearch(); }
        });
        if (searchModalInput) {
            searchModalInput.addEventListener('input', function() {
                var q = this.value.trim();
                if (!q) { searchResults.innerHTML = ''; return; }
                renderSearchResults(searchArticles(q), searchResults);
            });
        }
        if (sidebarSearch) {
            sidebarSearch.addEventListener('input', function() {
                var q = this.value.trim();
                renderArticleList(q ? searchArticles(q) : getArticles());
            });
        }
    }

    function renderSearchResults(results, container) {
        if (!container) return;
        if (results.length === 0) { container.innerHTML = '<div class="search-no-results">未找到相关文章</div>'; return; }
        container.innerHTML = results.map(function(a) {
            return '<a href="article.html?id=' + a.id + '" class="search-result-item">' +
                '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>' +
                '<div><div class="search-result-title">' + a.title + '</div>' +
                '<div class="search-result-category">' + a.category + ' · ' + a.readTime + '</div></div></a>';
        }).join('');
    }

    function initTagFilter() {
        var container = document.querySelector('.tag-filter');
        if (!container) return;
        var categories = getCategories();
        container.innerHTML = categories.map(function(cat) {
            return '<button class="tag-filter-btn' + (cat === 'All' ? ' active' : '') + '" data-category="' + cat + '">' + (cat === 'All' ? '全部' : cat) + '</button>';
        }).join('');
        container.addEventListener('click', function(e) {
            var btn = e.target.closest('.tag-filter-btn');
            if (!btn) return;
            container.querySelectorAll('.tag-filter-btn').forEach(function(b) { b.classList.remove('active'); });
            btn.classList.add('active');
            renderArticleList(getArticlesByCategory(btn.dataset.category));
        });
    }

    function renderArticleList(articles) {
        var c = document.querySelector('.article-list');
        if (!c) return;
        c.innerHTML = articles.map(function(a) {
            return '<a href="article.html?id=' + a.id + '" class="article-item fade-in">' +
                '<img src="' + a.image + '" alt="" class="article-item-image" loading="lazy">' +
                '<div class="article-item-content">' +
                '<div class="article-item-badge">' + a.category + '</div>' +
                '<h3 class="article-item-title">' + a.title + '</h3>' +
                '<p class="article-item-excerpt">' + a.excerpt + '</p>' +
                '<div class="article-item-meta">' + formatDate(a.date) + ' · ' + a.readTime + '</div>' +
                '</div></a>';
        }).join('');
    }

    function renderCardGrid(articles, container) {
        if (!container) return;
        container.innerHTML = articles.map(function(a) {
            return '<a href="article.html?id=' + a.id + '" class="today-card fade-in">' +
                '<img src="' + a.image + '" alt="" class="today-card-image" loading="lazy">' +
                '<div class="today-card-content">' +
                '<div class="today-card-badge">' + a.category + '</div>' +
                '<h3 class="today-card-title">' + a.title + '</h3>' +
                '<p class="today-card-excerpt">' + a.excerpt + '</p>' +
                '<div class="today-card-meta">' +
                '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>' +
                a.readTime + '</div></div></a>';
        }).join('');
    }

    function initHomePage() {
        var heroContainer = document.querySelector('.hero-section');
        var todaySection = document.querySelector('.today-section');
        var heroArticleId = BLOG_DATA.heroArticleId;
        var heroTitleColor = BLOG_DATA.heroTitleColor || 'white';
        var heroArticle = heroArticleId ? getArticleById(heroArticleId) : null;

        if (heroContainer && heroArticle) {
            heroContainer.innerHTML =
                '<a href="article.html?id=' + heroArticle.id + '" class="hero-card">' +
                '<img src="' + (heroArticle.heroImage || heroArticle.image) + '" alt="" class="hero-card-image">' +
                '<div class="hero-card-overlay">' +
                '<h2 class="hero-card-title" style="color:' + heroTitleColor + '">' + heroArticle.title + '</h2>' +
                '</div></a>';
        } else if (heroContainer) {
            heroContainer.innerHTML = '';
        }

        if (todaySection) {
            var todayContainer = todaySection.querySelector('.today-cards');
            if (todayContainer) {
                renderCardGrid(getArticles().slice(0, 4), todayContainer);
            }
        }

        initTagFilter();
        renderArticleList(getArticles());
    }

    function initArticlePage() {
        var params = new URLSearchParams(window.location.search);
        var id = params.get('id');
        if (!id) return;
        var article = getArticleById(id);
        if (!article) {
            document.querySelector('.article-page').innerHTML = '<h1>文章未找到</h1><p><a href="index.html">返回首页</a></p>';
            return;
        }
        document.title = article.title + ' — 我的博客';
        var badge = document.querySelector('.article-page-badge');
        var title = document.querySelector('.article-page-title');
        var meta = document.querySelector('.article-page-meta');
        var hero = document.querySelector('.article-page-hero');
        var content = document.querySelector('.article-content');
        var tags = document.querySelector('.article-tags');
        if (badge) badge.textContent = article.category;
        if (title) title.textContent = article.title;
        if (meta) {
            meta.innerHTML =
                '<img src="' + BLOG_DATA.author.avatar + '" alt="" class="author-avatar">' +
                '<span>' + BLOG_DATA.author.name + '</span><span>·</span>' +
                '<span>' + formatDate(article.date) + '</span><span>·</span>' +
                '<span>' + article.readTime + '</span>';
        }
        if (hero) { hero.src = article.heroImage || article.image; hero.alt = article.title; }
        if (content) {
            var md = article.contentMd || article.content || '';
            content.innerHTML = renderMarkdown(md);
        }
        if (tags) {
            tags.innerHTML = (article.tags || []).map(function(t) {
                return '<a href="index.html?tag=' + encodeURIComponent(t) + '" class="article-tag">' + t + '</a>';
            }).join('');
        }
        var relatedSection = document.querySelector('.related-articles');
        if (relatedSection) {
            var related = getArticles().filter(function(a) { return a.id !== article.id && a.category === article.category; }).slice(0, 3);
            if (related.length > 0) {
                relatedSection.style.display = 'block';
                var list = relatedSection.querySelector('.article-list');
                if (list) {
                    list.innerHTML = related.map(function(a) {
                        return '<a href="article.html?id=' + a.id + '" class="article-item fade-in">' +
                            '<img src="' + a.image + '" alt="" class="article-item-image" loading="lazy">' +
                            '<div class="article-item-content">' +
                            '<div class="article-item-badge">' + a.category + '</div>' +
                            '<h3 class="article-item-title">' + a.title + '</h3>' +
                            '<p class="article-item-excerpt">' + a.excerpt + '</p>' +
                            '<div class="article-item-meta">' + formatDate(a.date) + ' · ' + a.readTime + '</div>' +
                            '</div></a>';
                    }).join('');
                }
            }
        }
    }

    function setActiveNav() {
        var search = window.location.search;
        var page = document.querySelector('[data-page]');
        var pageType = page ? page.dataset.page : '';

        document.querySelectorAll('.nav-link').forEach(function(link) {
            link.classList.remove('active');
        });

        if (pageType === 'home') {
            if (search.includes('featured=true')) {
                var el = document.querySelector('[data-nav="featured"]');
                if (el) el.classList.add('active');
            } else if (search.includes('tag=')) {
                var tagMatch = search.match(/tag=([^&]+)/);
                if (tagMatch) {
                    var decoded = decodeURIComponent(tagMatch[1]);
                    var catEl = document.querySelector('[data-nav="cat-' + decoded + '"]');
                    if (catEl) catEl.classList.add('active');
                }
            } else {
                var homeEl = document.querySelector('[data-nav="home"]');
                if (homeEl) homeEl.classList.add('active');
            }
        } else if (pageType === 'article') {
            var homeEl2 = document.querySelector('[data-nav="home"]');
            if (homeEl2) homeEl2.classList.add('active');
        } else if (pageType === 'about') {
            var aboutEl = document.querySelector('[data-nav="about"]');
            if (aboutEl) aboutEl.classList.add('active');
        } else if (pageType === 'admin') {
            var adminEl = document.querySelector('[data-nav="admin"]');
            if (adminEl) adminEl.classList.add('active');
        } else if (pageType === 'vault') {
            var vaultEl = document.querySelector('[data-nav="vault"]');
            if (vaultEl) vaultEl.classList.add('active');
        }
    }

    function renderMarkdown(md) {
        if (!md) return '';
        var html = md
            .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
            .replace(/```(\w*)\n([\s\S]*?)```/g, function(m, lang, code) {
                return '<pre><code class="lang-' + lang + '">' + code.trim() + '</code></pre>';
            })
            .replace(/^&gt;\s?(.*)$/gm, '<blockquote>$1</blockquote>')
            .replace(/`([^`]+)`/g, '<code>$1</code>')
            .replace(/^### (.+)$/gm, '<h3>$1</h3>')
            .replace(/^## (.+)$/gm, '<h2>$1</h2>')
            .replace(/^# (.+)$/gm, '<h1>$1</h1>')
            .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.+?)\*/g, '<em>$1</em>')
            .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1">')
            .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
            .replace(/^\- (.+)$/gm, '<li>$1</li>')
            .replace(/^\d+\. (.+)$/gm, '<li>$1</li>')
            .replace(/\n{2,}/g, '</p><p>')
            .replace(/\n/g, '<br>');
        html = '<p>' + html + '</p>';
        html = html.replace(/<p>\s*<(h[1-3]|pre|blockquote|ul|ol|li)/g, '<$1');
        html = html.replace(/<\/(h[1-3]|pre|blockquote|ul|ol|li)>\s*<\/p>/g, '</$1>');
        html = html.replace(/<p>\s*<\/p>/g, '');
        html = html.replace(/(<li>.*?<\/li>)+/g, function(m) { return '<ul>' + m + '</ul>'; });
        html = html.replace(/<\/blockquote><blockquote>/g, '<br>');
        return html;
    }

    function init() {
        initTheme();
        initMobileMenu();
        initSearch();
        setActiveNav();
        var themeBtn = document.querySelector('.nav-theme-btn');
        if (themeBtn) themeBtn.addEventListener('click', toggleTheme);
        var page = document.querySelector('[data-page]');
        if (page) {
            switch (page.dataset.page) {
                case 'home': initHomePage(); break;
                case 'article': initArticlePage(); break;
            }
        }

        var urlTag = new URLSearchParams(window.location.search).get('tag');
        var urlFeatured = new URLSearchParams(window.location.search).get('featured');
        var heroSection = document.querySelector('.hero-section');
        var todaySection = document.querySelector('.today-section');
        var allSection = document.querySelector('.all-articles-section');
        var sectionTitle = allSection ? allSection.querySelector('.section-title') : null;
        var tagFilter = document.querySelector('.tag-filter');
        var articleList = document.querySelector('.article-list');

        if (urlFeatured === 'true') {
            if (heroSection) heroSection.style.display = 'none';
            if (todaySection) todaySection.style.display = 'none';
            if (sectionTitle) sectionTitle.textContent = '精选文章';
            if (tagFilter) tagFilter.style.display = 'none';
            if (articleList) articleList.style.display = 'none';
            var cardContainer = allSection ? allSection.querySelector('.category-cards') : null;
            if (cardContainer) {
                cardContainer.style.display = '';
                renderCardGrid(getFeaturedArticles(), cardContainer);
            }
        } else if (urlTag) {
            if (heroSection) heroSection.style.display = 'none';
            if (todaySection) todaySection.style.display = 'none';
            if (sectionTitle) sectionTitle.textContent = urlTag;
            if (tagFilter) tagFilter.style.display = 'none';
            if (articleList) articleList.style.display = 'none';
            var cardContainer2 = allSection ? allSection.querySelector('.category-cards') : null;
            if (cardContainer2) {
                cardContainer2.style.display = '';
                renderCardGrid(getArticlesByCategory(urlTag), cardContainer2);
            }
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    window.BlogAdmin = {
        renderMarkdown: renderMarkdown,
        BLOG_DATA: BLOG_DATA,
        saveOverrides: saveOverrides,
        getArticles: getArticles,
        getArticleById: getArticleById,
        getCategories: getCategories
    };
})();
