var BLOG_DATA = {
    siteName: "我的博客",
    siteDescription: "一个受 Apple 设计哲学启发的个人博客",
    heroArticleId: "building-modern-web-apps",
    heroTitleColor: "white",
    author: {
        name: "陈明远",
        avatar: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20headshot%20portrait%20of%20a%20young%20creative%20person%2C%20minimalist%20style%2C%20soft%20lighting&image_size=square",
        bio: "设计师与开发者，书写技术、设计与创造力交汇的故事。"
    },
    categories: ["开发", "设计", "创意", "生活"],
    articles: [
        {
            id: "building-modern-web-apps",
            title: "使用 Svelte 构建现代 Web 应用",
            excerpt: "探索 Svelte 的编译优先方法如何改变我们对前端开发的思考方式，以及为什么它可能是你下一个项目的正确选择。",
            category: "开发",
            tags: ["Svelte", "JavaScript", "Web 开发"],
            date: "2026-05-18",
            readTime: "8 分钟阅读",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=abstract%20code%20on%20dark%20screen%20with%20blue%20and%20purple%20glowing%20elements%2C%20modern%20tech%20aesthetic&image_size=landscape_16_9",
            heroImage: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=abstract%20code%20on%20dark%20screen%20with%20blue%20and%20purple%20glowing%20elements%2C%20modern%20tech%20aesthetic%2C%20cinematic&image_size=landscape_16_9",
            featured: true,
            contentMd: "前端开发的格局在过去十年中发生了巨大变化。从 jQuery 到 React，从单体应用到微前端，我们见证了从根本上改变 Web 构建方式的范式转变。Svelte 代表了这一演进的下一步。\n\n## 编译优先方法\n\n与在浏览器中完成大部分工作的传统框架不同，Svelte 将这些工作转移到了编译步骤中。这意味着你的组件会被转换为高效的原生代码，精确地更新 DOM。\n\n结果是什么？更小的包体积、更快的运行时性能，以及令人耳目一新的简洁开发体验。没有虚拟 DOM 对比，没有运行时框架开销——只有纯粹、优化过的 JavaScript。\n\n> 最好的框架是那个让你感觉不到它存在的框架。Svelte 的哲学是框架应该在构建时承担重任，而不是在运行时。\n\n## 无需样板代码的响应式\n\n在 Svelte 中，响应式是组件语言的一部分。你不需要调用 `setState` 或使用钩子——只需给变量赋值，UI 就会更新。就是这么简单。\n\n```javascript\nlet count = 0;\n\nfunction increment() {\n    count += 1;\n}\n```\n\n这种简洁性延伸到整个 Svelte 生态系统。从 store 到 context，从过渡到动画，一切都设计得直观且需要最少的样板代码。\n\n## SvelteKit：全景视角\n\nSvelteKit 提供了 Svelte 与 Next.js 或 Nuxt 竞争所需的应用框架。基于文件的路由、服务端渲染和 API 路由，它是构建现代 Web 应用的完整解决方案。\n\n适配器系统意味着你可以部署到任何地方——Vercel、Netlify、Cloudflare Workers，甚至简单的 Node 服务器。这种灵活性无与伦比。\n\n## 何时选择 Svelte\n\nSvelte 在性能至关重要的场景中大放异彩：内容密集型网站、交互式仪表板和渐进式 Web 应用。它的小包体积和低运行时开销使其特别适合移动优先的体验。\n\n但即使对于大型应用，SvelteKit 的架构也能优雅地扩展。编译步骤意味着你只需为实际使用的功能付出代价，而且开发体验始终保持快速和愉悦。"
        },
        {
            id: "design-systems-at-scale",
            title: "大规模设计系统：来自 Apple 的启示",
            excerpt: "我们可以从 Apple 跨平台设计一致性的方法中学到什么，以及如何将这些原则应用到自己的设计系统中。",
            category: "设计",
            tags: ["设计系统", "UI/UX", "Apple"],
            date: "2026-05-15",
            readTime: "6 分钟阅读",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=clean%20minimal%20UI%20design%20system%20components%20layout%20with%20cards%20buttons%20and%20typography%2C%20white%20background&image_size=landscape_16_9",
            heroImage: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=clean%20minimal%20UI%20design%20system%20components%20layout%20with%20cards%20buttons%20and%20typography%2C%20white%20background%2C%20cinematic&image_size=landscape_16_9",
            featured: true,
            contentMd: "Apple 长期以来一直是设计一致性的黄金标准。从 iOS 的圆角到 macOS 的半透明，每一个细节都经过深思熟虑，每一次交互都经过精心设计。但他们是如何在如此庞大的规模下保持这种一致性的？\n\n## 字体与色彩基础\n\n每个优秀设计系统的核心都是一个稳健的字体排版体系和精心策划的调色板。Apple 的 San Francisco 字体家族专为屏幕可读性而设计，具有根据文字大小自动调整字形的光学尺寸功能。\n\n他们的色彩系统不仅仅是品牌色——它包含适应浅色和深色模式的语义色彩，确保在各种场景下的无障碍性和一致性。\n\n## 组件即词汇\n\n把组件想象成语言中的词汇。词汇越一致，沟通就越连贯。Apple 的人机界面指南不仅定义了组件的外观，还定义了它们的行为、使用时机以及如何适应不同场景。\n\n> 设计系统不是约束——它是一种共享语言，在一致性中释放创造力。\n\n## 动效与交互\n\nApple 对动效的处理可能是他们最独特的品质。动画不是装饰性的——它们是功能性的。它们提供空间上下文，指示关系，并让用户对自己的操作充满信心。\n\n弹簧动画、精心设计的缓动曲线、元素对触摸的响应方式——这些细节累积成一种鲜活而灵敏的体验。\n\n## 应用这些经验\n\n你不需要 Apple 的资源来构建一个优秀的设计系统。从基础开始：定义你的字体排版，建立你的色彩令牌，记录你的间距体系。然后构建可组合、可访问且文档完善的组件。\n\n最重要的是，把你的设计系统当作一个产品，而不是一个项目。它需要持续投入、定期更新和清晰的治理。"
        },
        {
            id: "dark-mode-best-practices",
            title: "暗色模式的正确做法：超越颜色反转",
            excerpt: "暗色模式不仅仅是反转颜色。了解有效暗色主题背后的原则，在减少视觉疲劳的同时保持视觉层次。",
            category: "设计",
            tags: ["暗色模式", "CSS", "无障碍"],
            date: "2026-05-12",
            readTime: "5 分钟阅读",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=dark%20mode%20interface%20design%20with%20deep%20blacks%20and%20subtle%20blue%20accents%2C%20modern%20minimal&image_size=landscape_16_9",
            contentMd: "暗色模式已经从开发者的偏好演变为大众的期望。但太多实现只是简单反转浅色主题，导致对比度差、图像失真，以及一种像是事后补充的体验。\n\n## 纯反转的问题\n\n纯颜色反转会带来几个问题：阴影变成高光，彩色文字变得难以阅读，为浅色背景设计的图像看起来格格不入。一个合适的暗色主题需要在每个层面做出深思熟虑的设计决策。\n\n## 通过亮度表达层级\n\n在 Material Design 的暗色主题中，层级通过表面亮度来表达——较高的表面比较低的表面略亮。这创造了一种微妙的深度感，而不依赖在深色背景上效果较差的阴影。\n\n## 色彩饱和度与鲜艳度\n\n在白色背景上看起来很棒的颜色，在深色表面上可能显得过度饱和甚至产生振动感。解决方案是在暗色模式中稍微降低强调色的饱和度，在保持其特征的同时减少视觉噪音。\n\n```css\n:root {\n    --color-accent: #0071e3;\n}\n\n@media (prefers-color-scheme: dark) {\n    :root {\n        --color-accent: #2997ff;\n    }\n}\n```\n\n## 纯黑 vs 深灰\n\nApple 在 OLED 设备上使用纯黑（#000000），这可以节省电量并创造更深的对比度。然而，深灰（#1c1c1e）感觉更柔和，可以减少散光用户的光晕效应。最好的方法是同时提供两种选择。\n\n## 测试与验证\n\n始终在真实条件下测试你的暗色主题：夜间、低光环境以及不同类型的内容。使用对比度检查工具确保符合 WCAG 标准，并特别关注文字可读性和交互元素的可见性。"
        },
        {
            id: "typescript-patterns-2026",
            title: "2026 年高级 TypeScript 模式",
            excerpt: "深入了解最有用的 TypeScript 模式和技术，从品牌类型到模板字面量类型，提升你的代码库。",
            category: "开发",
            tags: ["TypeScript", "JavaScript", "设计模式"],
            date: "2026-05-08",
            readTime: "10 分钟阅读",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=typescript%20code%20editor%20with%20syntax%20highlighting%20and%20type%20annotations%2C%20dark%20theme&image_size=landscape_16_9",
            contentMd: "TypeScript 持续演进，每次发布都带来新的模式，让我们的代码更安全、更具表现力、更易维护。让我们探索在生产代码库中被证明最有价值的模式。\n\n## 品牌类型实现领域安全\n\n品牌类型（也称为不透明类型）允许你创建结构相同但名义上不同的类型。这防止了混淆共享相同底层类型但代表不同领域概念的值。\n\n```typescript\ntype Brand<T, B> = T & { __brand: B };\n\ntype USD = Brand<number, 'USD'>;\ntype EUR = Brand<number, 'EUR'>;\n\nfunction processPayment(amount: USD): void { ... }\n\nconst price: USD = 100 as USD;\nconst euroPrice: EUR = 85 as EUR;\n\nprocessPayment(euroPrice); // 类型错误！\n```\n\n## 模板字面量类型\n\n模板字面量类型允许你在类型层面创建字符串模式。它们对于定义 API 路由、CSS 类名和事件名称非常有用。\n\n## 可辨识联合实现状态机\n\n将应用状态建模为可辨识联合，可以获得穷尽的模式匹配，并使不可能的状态无法表示。这种模式与 reducer 模式结合时尤其强大。\n\n> 最好的 TypeScript 代码不仅防止运行时错误——它让错误的代码根本无法编写。\n\n## 带类型的构建器模式\n\nTypeScript 的类型系统足够强大，可以在编译时强制执行构建器模式。你可以创建只允许按正确顺序调用方法的构建器，每一步返回不同类型的对象。\n\n## 实用建议\n\n从解决你代码库中实际问题的模式开始。不要因为某个模式很巧妙就采用它——采用它是因为它能防止 bug、提高可读性或使重构更安全。最好的类型是能清晰传达意图的类型。"
        },
        {
            id: "creative-coding-with-webgl",
            title: "创意编程：使用 WebGL 生成艺术",
            excerpt: "探索艺术与代码的交汇，通过生成式视觉创作。学习如何使用 WebGL 着色器创建令人惊叹的程序化艺术作品。",
            category: "创意",
            tags: ["WebGL", "创意编程", "着色器"],
            date: "2026-05-04",
            readTime: "7 分钟阅读",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=generative%20art%20with%20colorful%20geometric%20patterns%20and%20flowing%20shapes%2C%20abstract%20digital%20art&image_size=landscape_16_9",
            contentMd: "创意编程位于艺术与技术的交汇处。它关乎的不是将代码作为构建产品的工具，而是将其作为表达的媒介。WebGL 着色器为生成艺术提供了独特的画布。\n\n## 为什么选择着色器\n\n片段着色器在每个像素上同时运行，使其非常适合创建用传统 CPU 渲染会慢得不可能的复杂有机图案。GPU 计算的并行特性是一个特性，而不是限制。\n\n## 从噪声开始\n\nPerlin 噪声和 Simplex 噪声是生成艺术的基石。它们提供平滑、连续的随机性，可以被分层、扭曲和组合，创造出从云景到流动液体的各种效果。\n\n```glsl\nfloat noise(vec2 p) {\n    return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);\n}\n```\n\n## 色彩调色板\n\n生成艺术之美往往在于色彩调色板。基于余弦的调色板由 Inigo Quilez 推广，允许你仅用几个参数创建平滑、和谐的色彩渐变。\n\n## 交互与时间\n\n最引人入胜的生成艺术会响应其环境。添加鼠标交互、音频响应，或仅仅是时间的流逝，就能将静态图像转变为鲜活、有呼吸的体验。\n\n> 代码是有史以来最灵活的艺术媒介。每个参数都可调整，每条规则都可打破，每个输出都独一无二。\n\n## 入门指南\n\n从 The Book of Shaders 和 Shadertoy 开始。复制现有的着色器，修改它们，打破它们，理解它们为什么有效。然后创造属于你自己的东西。入门门槛很低，但天花板无限。"
        },
        {
            id: "minimalist-productivity",
            title: "极简主义生产力方法",
            excerpt: "做得更少如何实际上帮你完成更多。一份简化工作流程、专注重要事项的实用指南。",
            category: "生活",
            tags: ["生产力", "极简主义", "工作流"],
            date: "2026-05-01",
            readTime: "4 分钟阅读",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=minimalist%20clean%20desk%20workspace%20with%20a%20laptop%20and%20plant%2C%20soft%20natural%20lighting&image_size=landscape_16_9",
            contentMd: "我们生活在一个生产力色情的时代——无尽的工具、框架和系统承诺帮助我们做更多事。但我认识的最有生产力的人有一个共同特征：他们做得更少，而不是更多。\n\n## 选择悖论\n\n每增加一个工具、每增加一个工作流、每增加一个生产力技巧，都会增加认知负担。维护这些系统所花的时间往往超过了它们节省的时间。解决方案不是更好的工具——而是更少的工具。\n\n## 三工具法则\n\n试着将自己限制在三个主要工具：一个用于沟通，一个用于任务，一个用于笔记。任何不属于这些类别的东西都是干扰。这种约束迫使你明确什么才是真正重要的。\n\n> 简约是终极的精致。最强大的系统是你真正持续使用的系统。\n\n## 深度工作块\n\nCal Newport 的深度工作概念仍然是我遇到过的最有效的生产力策略。每天留出 2-4 小时不受打扰的时间用于最重要的工作。没有通知，没有会议，没有例外。\n\n## 每周回顾\n\n每周花 30 分钟回顾你完成了什么、没完成什么，以及下周将专注什么。这个简单的实践创造了一个随时间复利的反馈循环，将小的调整转化为重大改进。\n\n## 拒绝的艺术\n\n你做出的每一个承诺都是对其他事情的承诺。学会根据核心优先级来评估机会。如果某件事不符合你的核心方向，就拒绝它——即使它是一个好机会。你的时间和注意力是有限的资源。"
        },
        {
            id: "css-container-queries",
            title: "CSS 容器查询：响应式设计的未来",
            excerpt: "容器查询终于让组件能够响应其容器的大小，而不仅仅是视口。以下是有效使用它们的方法。",
            category: "开发",
            tags: ["CSS", "响应式设计", "Web 标准"],
            date: "2026-04-28",
            readTime: "6 分钟阅读",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=responsive%20web%20design%20layout%20adapting%20to%20different%20screen%20sizes%2C%20modern%20clean%20interface&image_size=landscape_16_9",
            contentMd: "十多年来，响应式设计只意味着一件事：基于视口的媒体查询。但组件并不生活在视口中——它们生活在容器中。容器查询改变了一切。\n\n## 媒体查询的问题\n\n媒体查询是以视口为中心的。侧边栏组件在窄侧边栏和宽内容区域中可能需要不同的外观，而不管视口大小如何。媒体查询无法表达这一点。\n\n## 容器查询登场\n\n容器查询允许组件响应其父容器的大小。这意味着卡片组件可以根据它是在侧边栏、主内容区域还是模态框中来调整其布局。\n\n```css\n.card-container {\n    container-type: inline-size;\n    container-name: card;\n}\n\n@container card (min-width: 400px) {\n    .card {\n        display: grid;\n        grid-template-columns: 200px 1fr;\n    }\n}\n```\n\n## 容器查询单位\n\n伴随容器查询而来的还有容器查询单位：cqw、cqh、cqi、cqb、cqmin 和 cqmax。这些单位相对于容器的大小，使得创建流畅的、容器响应式的字体排版和间距变得容易。\n\n> 容器查询不会取代媒体查询——它们是互补的。页面级布局使用媒体查询，组件级适配使用容器查询。\n\n## 实用模式\n\n最有效的模式是以\"容器优先\"的思维方式设计组件。定义组件在不同容器宽度下应该是什么样子，然后让页面布局决定显示哪种变体。这创造了真正可复用的、上下文感知的组件。\n\n## 浏览器支持与渐进增强\n\n容器查询现在已有出色的浏览器支持。对于旧浏览器，使用移动优先的方法作为基线——组件将简单地使用其默认布局，通常就是窄版布局。这种增强是优雅且自然的。"
        },
        {
            id: "photography-and-code",
            title: "摄影如何让我成为更好的开发者",
            excerpt: "构图与架构软件之间意想不到的相似之处，以及这两门学科能教给我们关于匠心的东西。",
            category: "生活",
            tags: ["摄影", "软件匠心", "创造力"],
            date: "2026-04-24",
            readTime: "5 分钟阅读",
            image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=photographer%20with%20camera%20in%20urban%20setting%20at%20golden%20hour%2C%20cinematic%20warm%20light&image_size=landscape_16_9",
            contentMd: "我在职业生涯中一段特别紧张的时期开始把摄影当作爱好。最初只是想远离屏幕，结果却教会了我比任何技术书籍都多的关于软件开发的知识。\n\n## 构图与架构\n\n在摄影中，构图是关于决定包含什么和排除什么。最好的照片往往由被排除的内容来定义。软件架构也是如此——最好的系统由其边界来定义，由它们选择不做的事情来定义。\n\n## 光与清晰度\n\n摄影本质上是对光的研究。好的光线揭示纹理，创造深度，引导视线。在代码中，清晰度起着同样的作用。命名良好的变量、清晰的抽象和明显的控制流就是软件中的好光线。\n\n> 相机是一种教会人们如何不用相机去观察的工具。——多萝西娅·兰格\n\n## 耐心与时机\n\n最优秀的摄影师会等待合适的时刻。他们提前到达，勘察地点，多次回到同一个位置。在开发中，这转化为花时间理解需求、原型化解决方案，在确定实现方案之前进行迭代。\n\n## 后期处理与重构\n\n原始照片就像代码的初稿——它们包含基本结构但需要精炼。摄影中的后期处理就像软件中的重构：它是在不改变基本构图的情况下增强已有的内容。\n\n## 决定性瞬间\n\n卡蒂埃-布列松谈到了\"决定性瞬间\"——所有元素对齐的那一瞬间。在软件中也有决定性时刻：你选择架构的那一刻，你发布功能的那一刻，你决定重写的那一刻。学会识别并把握这些时刻是一种超越任何单一学科的技能。"
        }
    ]
};

function loadOverrides() {
    try {
        var saved = localStorage.getItem('blog-data-overrides');
        if (saved) {
            var overrides = JSON.parse(saved);
            if (overrides.siteName) BLOG_DATA.siteName = overrides.siteName;
            if (overrides.siteDescription) BLOG_DATA.siteDescription = overrides.siteDescription;
            if (overrides.heroArticleId !== undefined) BLOG_DATA.heroArticleId = overrides.heroArticleId;
            if (overrides.heroTitleColor) BLOG_DATA.heroTitleColor = overrides.heroTitleColor;
            if (overrides.author) Object.assign(BLOG_DATA.author, overrides.author);
            if (overrides.categories) BLOG_DATA.categories = overrides.categories;
            if (overrides.articles) BLOG_DATA.articles = overrides.articles;
        }
    } catch (e) {}
}

loadOverrides();

function getArticles() {
    return BLOG_DATA.articles;
}

function getArticleById(id) {
    return BLOG_DATA.articles.find(function(a) { return a.id === id; });
}

function getFeaturedArticles() {
    return BLOG_DATA.articles.filter(function(a) { return a.featured; });
}

function getArticlesByCategory(category) {
    if (!category || category === '全部') return BLOG_DATA.articles;
    return BLOG_DATA.articles.filter(function(a) { return a.category === category; });
}

function getCategories() {
    return ['全部'].concat(BLOG_DATA.categories || []);
}

function searchArticles(query) {
    var q = query.toLowerCase().trim();
    if (!q) return [];
    return BLOG_DATA.articles.filter(function(a) {
        return a.title.toLowerCase().includes(q) ||
            a.excerpt.toLowerCase().includes(q) ||
            a.tags.some(function(t) { return t.toLowerCase().includes(q); }) ||
            a.category.toLowerCase().includes(q);
    });
}

function formatDate(dateStr) {
    var d = new Date(dateStr);
    return d.toLocaleDateString('zh-CN', { month: 'long', day: 'numeric', year: 'numeric' });
}

function saveOverrides() {
    localStorage.setItem('blog-data-overrides', JSON.stringify({
        siteName: BLOG_DATA.siteName,
        siteDescription: BLOG_DATA.siteDescription,
        heroArticleId: BLOG_DATA.heroArticleId,
        heroTitleColor: BLOG_DATA.heroTitleColor,
        author: BLOG_DATA.author,
        categories: BLOG_DATA.categories,
        articles: BLOG_DATA.articles
    }));
}