<!-- 검색 결과 -->
<!DOCTYPE html>

<html lang="ko"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" name="viewport"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
<link as="style" crossorigin="" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Pretendard:wght@100..900&display=swap" rel="stylesheet"/>
<style>
        body {
            font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .balance-gradient {
            background: linear-gradient(90deg, #000000 70%, #eeeeee 70%);
        }
        /* Custom hide scrollbar */
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
    </style>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "secondary-fixed": "#e4e2e2",
                        "secondary": "#5e5e5e",
                        "on-secondary-fixed-variant": "#464747",
                        "tertiary-fixed": "#e2e2e2",
                        "tertiary-container": "#1b1b1b",
                        "surface-container": "#eeeeee",
                        "on-secondary": "#ffffff",
                        "on-surface-variant": "#4c4546",
                        "surface-dim": "#dadada",
                        "on-error-container": "#93000a",
                        "secondary-fixed-dim": "#c7c6c6",
                        "on-background": "#1b1b1b",
                        "on-tertiary": "#ffffff",
                        "on-error": "#ffffff",
                        "outline-variant": "#cfc4c5",
                        "on-tertiary-fixed-variant": "#474747",
                        "surface-bright": "#f9f9f9",
                        "on-primary-container": "#848484",
                        "inverse-primary": "#c6c6c6",
                        "surface-container-lowest": "#ffffff",
                        "surface": "#f9f9f9",
                        "on-secondary-fixed": "#1b1c1c",
                        "primary": "#000000",
                        "surface-container-high": "#e8e8e8",
                        "on-primary-fixed-variant": "#474747",
                        "surface-variant": "#e2e2e2",
                        "inverse-surface": "#303030",
                        "error-container": "#ffdad6",
                        "on-tertiary-fixed": "#1b1b1b",
                        "on-secondary-container": "#636262",
                        "on-tertiary-container": "#848484",
                        "tertiary-fixed-dim": "#c6c6c6",
                        "tertiary": "#000000",
                        "primary-container": "#1b1b1b",
                        "on-surface": "#1b1b1b",
                        "on-primary-fixed": "#1b1b1b",
                        "primary-fixed-dim": "#c6c6c6",
                        "inverse-on-surface": "#f1f1f1",
                        "surface-tint": "#5e5e5e",
                        "surface-container-low": "#f3f3f3",
                        "background": "#f9f9f9",
                        "surface-container-highest": "#e2e2e2",
                        "primary-fixed": "#e2e2e2",
                        "secondary-container": "#e1dfdf",
                        "outline": "#7e7576",
                        "error": "#ba1a1a",
                        "on-primary": "#ffffff"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                    "spacing": {
                        "gutter": "16px",
                        "margin-mobile": "0px",
                        "md": "16px",
                        "xs": "4px",
                        "sm": "8px",
                        "xl": "32px",
                        "lg": "24px",
                        "xxl": "48px"
                    },
                    "fontFamily": {
                        "display-xl": ["Pretendard"],
                        "body-sm": ["Pretendard"],
                        "body-lg": ["Pretendard"],
                        "display-md-mobile": ["Pretendard"],
                        "display-md": ["Pretendard"],
                        "display-xxl": ["Pretendard"],
                        "body-md": ["Pretendard"],
                        "body-md-strong": ["Pretendard"]
                    },
                    "fontSize": {
                        "display-xl": ["36px", {"lineHeight": "1.3", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                        "body-sm": ["14px", {"lineHeight": "1.5", "letterSpacing": "0", "fontWeight": "400"}],
                        "body-lg": ["18px", {"lineHeight": "1.6", "letterSpacing": "-0.01em", "fontWeight": "500"}],
                        "display-md-mobile": ["20px", {"lineHeight": "1.4", "letterSpacing": "-0.01em", "fontWeight": "700"}],
                        "display-md": ["24px", {"lineHeight": "1.4", "letterSpacing": "-0.01em", "fontWeight": "700"}],
                        "display-xxl": ["52px", {"lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                        "body-md": ["16px", {"lineHeight": "1.6", "letterSpacing": "0", "fontWeight": "400"}],
                        "body-md-strong": ["16px", {"lineHeight": "1.6", "letterSpacing": "0", "fontWeight": "500"}]
                    }
                },
            },
        }
    </script>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background text-on-surface min-h-screen pb-24">
<!-- TopAppBar -->
<header class="fixed top-0 w-full z-50 flex items-center justify-between px-gutter h-14 bg-surface dark:bg-on-background border-b border-surface-container-highest dark:border-inverse-surface">
<div class="flex items-center gap-4">
<button class="material-symbols-outlined text-primary hover:opacity-80 transition-opacity active:scale-95 duration-150">arrow_back</button>
<h1 class="font-display-md-mobile text-display-md-mobile font-bold text-primary dark:text-on-primary tracking-tighter">SUL-BAL</h1>
</div>
<button class="material-symbols-outlined text-primary hover:opacity-80 transition-opacity active:scale-95 duration-150">search</button>
</header>
<main class="mt-14 p-gutter max-w-2xl mx-auto">
<!-- Balance Summary Section -->
<section class="mb-8">
<div class="flex justify-between items-end mb-3">
<div>
<p class="text-secondary font-body-sm mb-1">설정된 밸런스</p>
<h2 class="font-display-md-mobile text-display-md-mobile text-primary">음주 70% : 비음주 30%</h2>
</div>
<button class="text-primary font-body-md-strong border-b border-primary pb-0.5 hover:opacity-70 transition-opacity">변경</button>
</div>
<!-- Progress Bar Visualization -->
<div class="w-full h-3 bg-surface-container rounded-full overflow-hidden flex">
<div class="h-full bg-primary" style="width: 70%"></div>
<div class="h-full bg-surface-container-highest" style="width: 30%"></div>
</div>
<div class="flex justify-between mt-2 font-body-sm text-secondary">
<span>Alcohol-Friendly</span>
<span>Non-Alcohol-Ready</span>
</div>
</section>
<!-- Sorting Info -->
<div class="flex items-center justify-between mb-6">
<span class="text-secondary font-body-sm">총 128개의 검색 결과</span>
<div class="flex items-center gap-1 text-primary font-body-md-strong cursor-pointer">
<span>밸런스 점수순</span>
<span class="material-symbols-outlined text-[18px]">keyboard_arrow_down</span>
</div>
</div>
<!-- Restaurant List -->
<div class="space-y-4">
<!-- Card 1 -->
<div class="bg-surface-container-lowest rounded-xl p-4 shadow-[0px_2px_8px_rgba(0,0,0,0.05)] border border-surface-container-highest transition-transform active:scale-[0.98]">
<div class="flex gap-4">
<div class="w-24 h-24 rounded-lg bg-surface-container flex-shrink-0 relative">
<img class="w-full h-full object-cover rounded-lg" data-alt="A high-end modern Korean restaurant interior with minimalist black wooden furniture and soft warm ambient lighting. The atmosphere is sophisticated and clean, reflecting a luxury dining experience in Seoul. The image is captured with professional architectural photography techniques, emphasizing texture and space." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1lFtTgM3-JlwhCh_NLErRa72uQcC5D57dHAkkGMEmlbcHIPx35ioivAIOCipJK-szmPgLndlFLGLZ1MigYb7FHhmB8aO1FlrrWOCTm_saKVVF5GFcEK1X6yonyksOMhvs54M6aDyW_-Rjm_CeV-uu4JSMEf83WgjTkJuTndpbBe3Fc6gh5WnrUs2640cWBBCeeyEAMbJo0z5IlR6YtL31diSIRp2Z4p2mwooxR-EueZ-_hZSfSTUw_srARUSdDC53aSDuCFVRtm3J"/>
<div class="absolute top-1 right-1 bg-white/90 backdrop-blur-sm rounded-full p-1 shadow-sm">
<span class="material-symbols-outlined text-[16px] text-primary" style="font-variation-settings: 'FILL' 1;">favorite</span>
</div>
</div>
<div class="flex-1 flex flex-col justify-between">
<div>
<div class="flex justify-between items-start">
<h3 class="font-display-md-mobile text-display-md-mobile text-primary">미도인 성수</h3>
<div class="flex flex-col items-end">
<span class="text-[24px] font-bold text-primary leading-none">98</span>
<span class="text-[10px] text-secondary uppercase tracking-tighter">Score</span>
</div>
</div>
<div class="flex gap-2 mt-1 items-center text-secondary font-body-sm">
<span class="material-symbols-outlined text-[14px]">location_on</span>
<span>성수동1가 · 320m</span>
</div>
</div>
<div class="flex flex-wrap gap-1.5 mt-2">
<span class="px-2 py-0.5 bg-surface-container-low text-on-surface-variant font-body-sm rounded-full text-[12px]">#논알콜와인</span>
<span class="px-2 py-0.5 bg-surface-container-low text-on-surface-variant font-body-sm rounded-full text-[12px]">#콜키지프리</span>
<span class="px-2 py-0.5 bg-surface-container-low text-on-surface-variant font-body-sm rounded-full text-[12px]">#무알콜맥주</span>
</div>
</div>
</div>
</div>
<!-- Card 2 -->
<div class="bg-surface-container-lowest rounded-xl p-4 shadow-[0px_2px_8px_rgba(0,0,0,0.05)] border border-surface-container-highest transition-transform active:scale-[0.98]">
<div class="flex gap-4">
<div class="w-24 h-24 rounded-lg bg-surface-container flex-shrink-0 relative">
<img class="w-full h-full object-cover rounded-lg" data-alt="Close-up of a premium fusion dish served on a handcrafted ceramic plate. The dish features vibrant colors of fresh ingredients with artistic garnishes. The background is a blurred dark slate table in a chic Seoul bistro. High-contrast lighting highlights the textures of the food, creating a premium and appetizing aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2J5BgVnoxgeYE7xAK2QA9mmSJso76K2as5dHz3pK4f0tNfsidHI4t0pZS6ooowJyPUslb6kSFe_tJpcXIIFtH-5JIqmjtrIMD7AvYlxLn-iaXE_DFg5vvhHXmD1yqwJxQa7VFh_hHQKurBzJBEh0tVUZ6MEtJlCOl7466mgybu02s6qwTOBr3MTPKTqKRScb8NXJJBrFhjAC6cx5nDmRKJBj9OQX5_hsCSpdkwMGtEH4iM4XvAtgfsKiXvZ0TgvHxveIP75d9CzKH"/>
</div>
<div class="flex-1 flex flex-col justify-between">
<div>
<div class="flex justify-between items-start">
<h3 class="font-display-md-mobile text-display-md-mobile text-primary">아연 다이닝</h3>
<div class="flex flex-col items-end">
<span class="text-[24px] font-bold text-primary leading-none">94</span>
<span class="text-[10px] text-secondary uppercase tracking-tighter">Score</span>
</div>
</div>
<div class="flex gap-2 mt-1 items-center text-secondary font-body-sm">
<span class="material-symbols-outlined text-[14px]">location_on</span>
<span>성수동2가 · 450m</span>
</div>
</div>
<div class="flex flex-wrap gap-1.5 mt-2">
<span class="px-2 py-0.5 bg-surface-container-low text-on-surface-variant font-body-sm rounded-full text-[12px]">#수제콤부차</span>
<span class="px-2 py-0.5 bg-surface-container-low text-on-surface-variant font-body-sm rounded-full text-[12px]">#하이볼맛집</span>
</div>
</div>
</div>
</div>
<!-- Card 3 -->
<div class="bg-surface-container-lowest rounded-xl p-4 shadow-[0px_2px_8px_rgba(0,0,0,0.05)] border border-surface-container-highest transition-transform active:scale-[0.98]">
<div class="flex gap-4">
<div class="w-24 h-24 rounded-lg bg-surface-container flex-shrink-0 relative">
<img class="w-full h-full object-cover rounded-lg" data-alt="A minimalist bar counter with a focus on non-alcoholic beverage presentation. Elegant glassware filled with colorful mocktails and garnished with dried citrus. Behind the counter, a sleek black shelf displays premium bottled non-alcoholic spirits. The lighting is moody and focused, with a clean architectural feel typical of Seoul's trendiest neighborhoods." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCP6iF1Xf4_D2DyCk2gOSJgNJxAPJOOj_1qvDXzg-XSoJ8CZzxPQN7JdfeZlQ_gWyh3RYkekt57GDQs1AKi6y9ORhKTCRrOnCysfnFLF8sdH9WHYgUaIrjr3PIRUJWsNWVYjhr1mHuLHoUup7cRpPJKYy9gBdy9lbmJ315lClG_enX9e79Ek58PSg3qKKpu5si4hQ43jsbyZY1T1n1lYFSGuOBvwqeCQryGCcustTjw0sGVzmz_jnaw0Ce2l2DLRaZEVr3AsvWVXEN2"/>
</div>
<div class="flex-1 flex flex-col justify-between">
<div>
<div class="flex justify-between items-start">
<h3 class="font-display-md-mobile text-display-md-mobile text-primary">누적 성수</h3>
<div class="flex flex-col items-end">
<span class="text-[24px] font-bold text-primary leading-none">91</span>
<span class="text-[10px] text-secondary uppercase tracking-tighter">Score</span>
</div>
</div>
<div class="flex gap-2 mt-1 items-center text-secondary font-body-sm">
<span class="material-symbols-outlined text-[14px]">location_on</span>
<span>성수동1가 · 1.1km</span>
</div>
</div>
<div class="flex flex-wrap gap-1.5 mt-2">
<span class="px-2 py-0.5 bg-surface-container-low text-on-surface-variant font-body-sm rounded-full text-[12px]">#비건옵션</span>
<span class="px-2 py-0.5 bg-surface-container-low text-on-surface-variant font-body-sm rounded-full text-[12px]">#프라이빗룸</span>
</div>
</div>
</div>
</div>
<!-- Card 4 (Slightly different layout to show variety) -->
<div class="bg-surface-container-lowest rounded-xl p-4 shadow-[0px_2px_8px_rgba(0,0,0,0.05)] border border-surface-container-highest transition-transform active:scale-[0.98]">
<div class="flex gap-4">
<div class="w-24 h-24 rounded-lg bg-surface-container flex-shrink-0 relative">
<img class="w-full h-full object-cover rounded-lg" data-alt="A birds-eye view of a modern Korean table setting featuring charcoal-grilled dishes and a selection of small side plates in elegant white porcelain. The layout is symmetrical and clean, with black metal chopsticks placed neatly. The scene is bright and airy, representing a balanced and healthy dining choice for group gatherings." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6RyFQEruBcu7q67-v2PlxoDaNT-0qKFUKI9G1JxE5LwxtXZ7ccpPzDbuNkEj_m_9bXz-zRKtQJUkukbbD3RthGMjsLzILE5aMsUDYMJ0AVMCm_RmBxzalXtaXs8BvEK-nxgp7XIsojZVYqMnxZQQLpfIa1B6z-WlNq77WONs6CaV1lJRjNTz5WeI0tEZcH1M0OWHByZBBQ9mrQIT5ZiMNIsD8p_mo5BN590ZeEIn3BX94IndYt9RreIycT2ysWXRTWpb5D12UE-kE"/>
</div>
<div class="flex-1 flex flex-col justify-between">
<div>
<div class="flex justify-between items-start">
<h3 class="font-display-md-mobile text-display-md-mobile text-primary">그리드 키친</h3>
<div class="flex flex-col items-end">
<span class="text-[24px] font-bold text-primary leading-none">88</span>
<span class="text-[10px] text-secondary uppercase tracking-tighter">Score</span>
</div>
</div>
<div class="flex gap-2 mt-1 items-center text-secondary font-body-sm">
<span class="material-symbols-outlined text-[14px]">location_on</span>
<span>자양동 · 1.5km</span>
</div>
</div>
<div class="flex flex-wrap gap-1.5 mt-2">
<span class="px-2 py-0.5 bg-surface-container-low text-on-surface-variant font-body-sm rounded-full text-[12px]">#내추럴와인</span>
<span class="px-2 py-0.5 bg-surface-container-low text-on-surface-variant font-body-sm rounded-full text-[12px]">#다양한논알콜</span>
</div>
</div>
</div>
</div>
</div>
</main>
<!-- BottomNavBar -->
<nav class="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-gutter py-2 pb-safe bg-surface dark:bg-on-background border-t border-surface-container-highest dark:border-inverse-surface shadow-sm">
<button class="flex flex-col items-center justify-center text-primary dark:text-on-primary font-body-md-strong hover:bg-surface-container-low dark:hover:bg-inverse-surface transition-transform active:scale-95 duration-200 p-2">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">search</span>
<span class="font-body-sm text-body-sm">탐색</span>
</button>
<button class="flex flex-col items-center justify-center text-secondary dark:text-secondary-fixed-dim hover:bg-surface-container-low dark:hover:bg-inverse-surface transition-transform active:scale-95 duration-200 p-2">
<span class="material-symbols-outlined">favorite</span>
<span class="font-body-sm text-body-sm">저장</span>
</button>
<button class="flex flex-col items-center justify-center text-secondary dark:text-secondary-fixed-dim hover:bg-surface-container-low dark:hover:bg-inverse-surface transition-transform active:scale-95 duration-200 p-2">
<span class="material-symbols-outlined">calendar_today</span>
<span class="font-body-sm text-body-sm">예약</span>
</button>
<button class="flex flex-col items-center justify-center text-secondary dark:text-secondary-fixed-dim hover:bg-surface-container-low dark:hover:bg-inverse-surface transition-transform active:scale-95 duration-200 p-2">
<span class="material-symbols-outlined">person</span>
<span class="font-body-sm text-body-sm">내 정보</span>
</button>
</nav>
<script>
        // Simple micro-interaction for cards
        document.querySelectorAll('.bg-surface-container-lowest').forEach(card => {
            card.addEventListener('click', () => {
                // Future navigation logic
                console.log('Navigating to detail page...');
            });
        });
    </script>
</body></html>

<!-- 밸런스 필터 -->
<!DOCTYPE html>

<html class="light" lang="ko"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" name="viewport"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
<link as="style" crossorigin="" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Pretendard:wght@100..900&display=swap" rel="stylesheet"/>
<style>
        body {
            font-family: 'Pretendard', sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            overflow-x: hidden;
        }

        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }

        /* Custom range slider styling for brutalist feel */
        input[type=range] {
            -webkit-appearance: none;
            width: 100%;
            background: transparent;
        }

        input[type=range]:focus {
            outline: none;
        }

        input[type=range]::-webkit-slider-runnable-track {
            width: 100%;
            height: 12px;
            cursor: pointer;
            background: #EEEEEE;
            border-radius: 999px;
            border: none;
        }

        input[type=range]::-webkit-slider-thumb {
            height: 32px;
            width: 32px;
            border-radius: 999px;
            background: #000000;
            cursor: pointer;
            -webkit-appearance: none;
            margin-top: -10px;
            box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
            transition: transform 0.1s ease;
        }

        input[type=range]:active::-webkit-slider-thumb {
            transform: scale(1.1);
        }

        .hide-scrollbar::-webkit-scrollbar {
            display: none;
        }

        @keyframes pulse-subtle {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.6; }
        }
        .animate-pulse-subtle {
            animation: pulse-subtle 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
    </style>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "secondary-fixed": "#e4e2e2",
                        "secondary": "#5e5e5e",
                        "on-secondary-fixed-variant": "#464747",
                        "tertiary-fixed": "#e2e2e2",
                        "tertiary-container": "#1b1b1b",
                        "surface-container": "#eeeeee",
                        "on-secondary": "#ffffff",
                        "on-surface-variant": "#4c4546",
                        "surface-dim": "#dadada",
                        "on-error-container": "#93000a",
                        "secondary-fixed-dim": "#c7c6c6",
                        "on-background": "#1b1b1b",
                        "on-tertiary": "#ffffff",
                        "on-error": "#ffffff",
                        "outline-variant": "#cfc4c5",
                        "on-tertiary-fixed-variant": "#474747",
                        "surface-bright": "#f9f9f9",
                        "on-primary-container": "#848484",
                        "inverse-primary": "#c6c6c6",
                        "surface-container-lowest": "#ffffff",
                        "surface": "#f9f9f9",
                        "on-secondary-fixed": "#1b1c1c",
                        "primary": "#000000",
                        "surface-container-high": "#e8e8e8",
                        "on-primary-fixed-variant": "#474747",
                        "surface-variant": "#e2e2e2",
                        "inverse-surface": "#303030",
                        "error-container": "#ffdad6",
                        "on-tertiary-fixed": "#1b1b1b",
                        "on-secondary-container": "#636262",
                        "on-tertiary-container": "#848484",
                        "tertiary-fixed-dim": "#c6c6c6",
                        "tertiary": "#000000",
                        "primary-container": "#1b1b1b",
                        "on-surface": "#1b1b1b",
                        "on-primary-fixed": "#1b1b1b",
                        "primary-fixed-dim": "#c6c6c6",
                        "inverse-on-surface": "#f1f1f1",
                        "surface-tint": "#5e5e5e",
                        "surface-container-low": "#f3f3f3",
                        "background": "#f9f9f9",
                        "surface-container-highest": "#e2e2e2",
                        "primary-fixed": "#e2e2e2",
                        "secondary-container": "#e1dfdf",
                        "outline": "#7e7576",
                        "error": "#ba1a1a",
                        "on-primary": "#ffffff"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                    "spacing": {
                        "gutter": "16px",
                        "margin-mobile": "0px",
                        "md": "16px",
                        "xs": "4px",
                        "sm": "8px",
                        "xl": "32px",
                        "lg": "24px",
                        "xxl": "48px"
                    },
                    "fontFamily": {
                        "display-xl": ["Pretendard"],
                        "body-sm": ["Pretendard"],
                        "body-lg": ["Pretendard"],
                        "display-md-mobile": ["Pretendard"],
                        "display-md": ["Pretendard"],
                        "display-xxl": ["Pretendard"],
                        "body-md": ["Pretendard"],
                        "body-md-strong": ["Pretendard"]
                    },
                    "fontSize": {
                        "display-xl": ["36px", {"lineHeight": "1.3", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                        "body-sm": ["14px", {"lineHeight": "1.5", "letterSpacing": "0", "fontWeight": "400"}],
                        "body-lg": ["18px", {"lineHeight": "1.6", "letterSpacing": "-0.01em", "fontWeight": "500"}],
                        "display-md-mobile": ["20px", {"lineHeight": "1.4", "letterSpacing": "-0.01em", "fontWeight": "700"}],
                        "display-md": ["24px", {"lineHeight": "1.4", "letterSpacing": "-0.01em", "fontWeight": "700"}],
                        "display-xxl": ["52px", {"lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                        "body-md": ["16px", {"lineHeight": "1.6", "letterSpacing": "0", "fontWeight": "400"}],
                        "body-md-strong": ["16px", {"lineHeight": "1.6", "letterSpacing": "0", "fontWeight": "500"}]
                    }
                },
            },
        }
    </script>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background text-on-surface min-h-screen flex flex-col">
<!-- TopAppBar -->
<header class="fixed top-0 w-full z-50 flex items-center justify-between px-gutter h-14 bg-surface border-b border-surface-container-highest">
<button class="text-primary hover:opacity-80 transition-opacity active:scale-95 transition-transform duration-150">
<span class="material-symbols-outlined">arrow_back</span>
</button>
<h1 class="font-display-md-mobile text-display-md-mobile font-bold text-primary tracking-tighter">SUL-BAL</h1>
<div class="w-6"></div> <!-- Spacer for centering -->
</header>
<main class="flex-1 mt-14 mb-24 px-gutter flex flex-col justify-center max-w-lg mx-auto w-full">
<!-- Instruction Section -->
<div class="mb-12 text-center">
<h2 class="font-display-md text-display-md mb-2">원터치 밸런스 필터</h2>
<p class="font-body-md text-secondary">함께하는 멤버들의 성향을 조절해주세요</p>
</div>
<!-- Ratio Display -->
<div class="flex items-end justify-between mb-8 px-2">
<div class="text-left">
<span class="font-body-sm text-secondary uppercase block mb-1">DRINKING</span>
<span class="font-display-xxl text-display-xxl leading-none" id="drinking-ratio">50</span><span class="text-display-md font-bold">%</span>
</div>
<div class="pb-2">
<span class="font-display-md text-display-md text-surface-container-highest">:</span>
</div>
<div class="text-right">
<span class="font-body-sm text-secondary uppercase block mb-1">NON-DRINKING</span>
<span class="font-display-xxl text-display-xxl leading-none" id="non-drinking-ratio">50</span><span class="text-display-md font-bold">%</span>
</div>
</div>
<!-- Slider Container -->
<div class="relative bg-surface-container-low rounded-xl p-8 mb-8 border border-surface-container-highest">
<div class="flex justify-between mb-4 font-body-sm text-secondary px-1">
<span>음주 선호</span>
<span>비음주 선호</span>
</div>
<input class="mb-2" id="balance-slider" max="100" min="0" type="range" value="50"/>
<div class="mt-8 flex items-center justify-center space-x-2">
<div class="w-2 h-2 rounded-full bg-primary animate-pulse-subtle"></div>
<p class="font-body-sm text-secondary">밸런스 매칭 알고리즘 가중치 반영 중</p>
</div>
</div>
<!-- Visual Context Card -->
<div class="grid grid-cols-2 gap-4 mb-8">
<div class="bg-surface-container rounded-xl p-4 flex flex-col items-center justify-center aspect-square border border-surface-container-highest group hover:bg-white transition-colors duration-300">
<span class="material-symbols-outlined text-4xl mb-2 text-primary">local_bar</span>
<span class="font-body-md-strong">술자리 중심</span>
<p class="font-body-sm text-secondary text-center mt-1">안주 맛집 & 분위기</p>
</div>
<div class="bg-surface-container rounded-xl p-4 flex flex-col items-center justify-center aspect-square border border-surface-container-highest group hover:bg-white transition-colors duration-300">
<span class="material-symbols-outlined text-4xl mb-2 text-primary">restaurant</span>
<span class="font-body-md-strong">식사 중심</span>
<p class="font-body-sm text-secondary text-center mt-1">카페 & 프리미엄 다이닝</p>
</div>
</div>
<!-- CTA Button -->
<button class="w-full bg-primary text-on-primary h-14 rounded-full font-body-md-strong hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center space-x-2 shadow-sm">
<span>매칭 결과 보기</span>
<span class="material-symbols-outlined">chevron_right</span>
</button>
</main>
<!-- BottomNavBar -->
<nav class="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-gutter py-2 pb-safe bg-surface border-t border-surface-container-highest shadow-sm">
<a class="flex flex-col items-center justify-center text-primary font-body-md-strong hover:bg-surface-container-low transition-colors duration-200 active:scale-95" href="#">
<span class="material-symbols-outlined">search</span>
<span class="font-body-sm text-body-sm">탐색</span>
</a>
<a class="flex flex-col items-center justify-center text-secondary hover:bg-surface-container-low transition-colors duration-200 active:scale-95" href="#">
<span class="material-symbols-outlined">favorite</span>
<span class="font-body-sm text-body-sm">저장</span>
</a>
<a class="flex flex-col items-center justify-center text-secondary hover:bg-surface-container-low transition-colors duration-200 active:scale-95" href="#">
<span class="material-symbols-outlined">calendar_today</span>
<span class="font-body-sm text-body-sm">예약</span>
</a>
<a class="flex flex-col items-center justify-center text-secondary hover:bg-surface-container-low transition-colors duration-200 active:scale-95" href="#">
<span class="material-symbols-outlined">person</span>
<span class="font-body-sm text-body-sm">내 정보</span>
</a>
</nav>
<script>
        const slider = document.getElementById('balance-slider');
        const drinkingRatio = document.getElementById('drinking-ratio');
        const nonDrinkingRatio = document.getElementById('non-drinking-ratio');

        slider.addEventListener('input', (e) => {
            const val = e.target.value;
            const drinking = 100 - val;
            const nonDrinking = val;
            
            // Updating numbers
            drinkingRatio.innerText = drinking;
            nonDrinkingRatio.innerText = nonDrinking;

            // Micro-interaction: scale effect on text based on dominance
            if (drinking > nonDrinking) {
                drinkingRatio.style.transform = `scale(${1 + (drinking - 50) / 200})`;
                nonDrinkingRatio.style.transform = `scale(1)`;
                drinkingRatio.classList.add('text-primary');
                nonDrinkingRatio.classList.add('text-secondary');
                nonDrinkingRatio.classList.remove('text-primary');
            } else if (nonDrinking > drinking) {
                nonDrinkingRatio.style.transform = `scale(${1 + (nonDrinking - 50) / 200})`;
                drinkingRatio.style.transform = `scale(1)`;
                nonDrinkingRatio.classList.add('text-primary');
                drinkingRatio.classList.add('text-secondary');
                drinkingRatio.classList.remove('text-primary');
            } else {
                drinkingRatio.style.transform = `scale(1)`;
                nonDrinkingRatio.style.transform = `scale(1)`;
                drinkingRatio.classList.remove('text-secondary');
                nonDrinkingRatio.classList.remove('text-secondary');
            }
        });

        // Initialize display
        slider.dispatchEvent(new Event('input'));
    </script>
</body></html>

<!-- 검색 홈 -->
<!DOCTYPE html>

<html lang="ko"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0, viewport-fit=cover" name="viewport"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
<link as="style" crossorigin="" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.css" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Pretendard:wght@100..900&display=swap" rel="stylesheet"/>
<title>SUL-BAL | 검색</title>
<script id="tailwind-config">
        tailwind.config = {
          darkMode: "class",
          theme: {
            extend: {
              "colors": {
                "secondary-fixed": "#e4e2e2",
                "secondary": "#5e5e5e",
                "on-secondary-fixed-variant": "#464747",
                "tertiary-fixed": "#e2e2e2",
                "tertiary-container": "#1b1b1b",
                "surface-container": "#eeeeee",
                "on-secondary": "#ffffff",
                "on-surface-variant": "#4c4546",
                "surface-dim": "#dadada",
                "on-error-container": "#93000a",
                "secondary-fixed-dim": "#c7c6c6",
                "on-background": "#1b1b1b",
                "on-tertiary": "#ffffff",
                "on-error": "#ffffff",
                "outline-variant": "#cfc4c5",
                "on-tertiary-fixed-variant": "#474747",
                "surface-bright": "#f9f9f9",
                "on-primary-container": "#848484",
                "inverse-primary": "#c6c6c6",
                "surface-container-lowest": "#ffffff",
                "surface": "#f9f9f9",
                "on-secondary-fixed": "#1b1c1c",
                "primary": "#000000",
                "surface-container-high": "#e8e8e8",
                "on-primary-fixed-variant": "#474747",
                "surface-variant": "#e2e2e2",
                "inverse-surface": "#303030",
                "error-container": "#ffdad6",
                "on-tertiary-fixed": "#1b1b1b",
                "on-secondary-container": "#636262",
                "on-tertiary-container": "#848484",
                "tertiary-fixed-dim": "#c6c6c6",
                "tertiary": "#000000",
                "primary-container": "#1b1b1b",
                "on-surface": "#1b1b1b",
                "on-primary-fixed": "#1b1b1b",
                "primary-fixed-dim": "#c6c6c6",
                "inverse-on-surface": "#f1f1f1",
                "surface-tint": "#5e5e5e",
                "surface-container-low": "#f3f3f3",
                "background": "#f9f9f9",
                "surface-container-highest": "#e2e2e2",
                "primary-fixed": "#e2e2e2",
                "secondary-container": "#e1dfdf",
                "outline": "#7e7576",
                "error": "#ba1a1a",
                "on-primary": "#ffffff"
              },
              "borderRadius": {
                "DEFAULT": "0.25rem",
                "lg": "0.5rem",
                "xl": "0.75rem",
                "full": "9999px"
              },
              "spacing": {
                "gutter": "16px",
                "margin-mobile": "0px",
                "md": "16px",
                "xs": "4px",
                "sm": "8px",
                "xl": "32px",
                "lg": "24px",
                "xxl": "48px"
              },
              "fontFamily": {
                "display-xl": ["Pretendard"],
                "body-sm": ["Pretendard"],
                "body-lg": ["Pretendard"],
                "display-md-mobile": ["Pretendard"],
                "display-md": ["Pretendard"],
                "display-xxl": ["Pretendard"],
                "body-md": ["Pretendard"],
                "body-md-strong": ["Pretendard"]
              },
              "fontSize": {
                "display-xl": ["36px", { "lineHeight": "1.3", "letterSpacing": "-0.02em", "fontWeight": "700" }],
                "body-sm": ["14px", { "lineHeight": "1.5", "letterSpacing": "0", "fontWeight": "400" }],
                "body-lg": ["18px", { "lineHeight": "1.6", "letterSpacing": "-0.01em", "fontWeight": "500" }],
                "display-md-mobile": ["20px", { "lineHeight": "1.4", "letterSpacing": "-0.01em", "fontWeight": "700" }],
                "display-md": ["24px", { "lineHeight": "1.4", "letterSpacing": "-0.01em", "fontWeight": "700" }],
                "display-xxl": ["52px", { "lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "700" }],
                "body-md": ["16px", { "lineHeight": "1.6", "letterSpacing": "0", "fontWeight": "400" }],
                "body-md-strong": ["16px", { "lineHeight": "1.6", "letterSpacing": "0", "fontWeight": "500" }]
              }
            },
          },
        }
    </script>
<style>
        body { font-family: 'Pretendard', sans-serif; -webkit-font-smoothing: antialiased; }
        .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background text-on-surface">
<!-- TopAppBar -->
<header class="fixed top-0 w-full z-50 flex items-center justify-between px-gutter h-14 bg-surface dark:bg-on-background border-b border-surface-container-highest dark:border-inverse-surface">
<div class="flex items-center gap-2">
<button class="hover:opacity-80 transition-opacity active:scale-95 transition-transform duration-150">
<span class="material-symbols-outlined text-primary dark:text-on-primary">arrow_back</span>
</button>
<h1 class="font-display-md-mobile text-display-md-mobile font-bold text-primary dark:text-on-primary tracking-tighter">SUL-BAL</h1>
</div>
<div class="w-6"></div> <!-- Spacer for balance -->
</header>
<main class="pt-20 pb-32 px-gutter max-w-md mx-auto">
<section class="mb-xxl">
<h2 class="font-display-md text-display-md text-primary mb-lg">모임을 위한<br/>기본 정보를 알려주세요</h2>
<!-- Input Fields Cluster -->
<div class="space-y-md">
<!-- Location Input -->
<div class="space-y-xs">
<label class="font-body-sm text-secondary px-1">모임 장소</label>
<div class="relative flex items-center">
<span class="material-symbols-outlined absolute left-4 text-secondary">location_on</span>
<input class="w-full h-14 pl-12 pr-4 bg-surface-container-low rounded-lg border-none focus:ring-2 focus:ring-primary text-body-md transition-all" placeholder="예: 강남역, 홍대" type="text"/>
</div>
</div>
<!-- Date & People (Grid) -->
<div class="grid grid-cols-2 gap-md">
<div class="space-y-xs">
<label class="font-body-sm text-secondary px-1">날짜</label>
<div class="relative flex items-center">
<span class="material-symbols-outlined absolute left-4 text-secondary">calendar_today</span>
<input class="w-full h-14 pl-12 pr-4 bg-surface-container-low rounded-lg border-none focus:ring-2 focus:ring-primary text-body-md transition-all" placeholder="오늘" type="text"/>
</div>
</div>
<div class="space-y-xs">
<label class="font-body-sm text-secondary px-1">전체 인원수</label>
<div class="relative flex items-center">
<span class="material-symbols-outlined absolute left-4 text-secondary">group</span>
<input class="w-full h-14 pl-12 pr-4 bg-surface-container-low rounded-lg border-none focus:ring-2 focus:ring-primary text-body-md transition-all" placeholder="4명" type="number"/>
</div>
</div>
</div>
</div>
</section>
<!-- Quick Suggestions -->
<section class="mb-xxl">
<div class="flex items-center justify-between mb-sm">
<h3 class="font-body-md-strong text-primary">최근 검색어</h3>
<button class="text-body-sm text-secondary underline">전체 삭제</button>
</div>
<div class="flex flex-wrap gap-xs">
<button class="px-4 py-2 bg-surface-container-low text-on-surface rounded-full text-body-sm hover:bg-surface-container-high transition-colors active:scale-95">강남역</button>
<button class="px-4 py-2 bg-surface-container-low text-on-surface rounded-full text-body-sm hover:bg-surface-container-high transition-colors active:scale-95">홍대입구</button>
<button class="px-4 py-2 bg-surface-container-low text-on-surface rounded-full text-body-sm hover:bg-surface-container-high transition-colors active:scale-95">이태원</button>
<button class="px-4 py-2 bg-surface-container-low text-on-surface rounded-full text-body-sm hover:bg-surface-container-high transition-colors active:scale-95">성수</button>
</div>
</section>
<!-- Recommended Destinations (Bento Style) -->
<section class="mb-xxl">
<h3 class="font-body-md-strong text-primary mb-md">추천 핫플레이스</h3>
<div class="grid grid-cols-2 gap-sm">
<div class="relative h-32 rounded-xl overflow-hidden group cursor-pointer active:scale-[0.98] transition-transform">
<div class="absolute inset-0 bg-black/40 z-10"></div>
<div class="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500" data-alt="A cinematic, high-contrast photograph of a vibrant Seoul street at night, specifically the bustling Gangnam district with neon signs reflecting off rainy asphalt. The image follows a strict minimalist aesthetic with deep blacks and sharp highlights, capturing the sophisticated energy of urban Korean nightlife in a premium light-mode UI context." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBGk4frC1SG1q9sIBMiOUPi6M54DeHIe5dQ7tzzv098u5y4-tP6DU6A9ppT8PVeLgjdTAuvk7CXvW6bC3mBkgFtjur1tFst7yE-GkKK2ooNynG9cVLfQwvPHyQ625bsmF2L44EKR1ZW2BIlwn0oshjxzE4YcwxukOWqgc2DEHFIxhfWwM3_t9ieBEH2evz535d8Md18ipyk2aK6JI_x95TQLfpm8GJFb9c2MZO135IR-tb9Xl4bUviBFMN5H6alNYu_Dgj_0NC0njW9')"></div>
<span class="absolute bottom-3 left-3 z-20 text-white font-body-md-strong">강남역</span>
</div>
<div class="relative h-32 rounded-xl overflow-hidden group cursor-pointer active:scale-[0.98] transition-transform">
<div class="absolute inset-0 bg-black/40 z-10"></div>
<div class="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500" data-alt="A stylish, minimalist view of a traditional Korean Hanok village at dusk, blending ancient architecture with modern lighting. The composition is clean and orderly, emphasizing high-contrast textures of wood and tile against a pale sky. The mood is serene and upscale, reflecting the premium Seoul lifestyle brand identity." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCgRkR0aVCyViCJfn-0GfRICEbF8BvVBIuFm3Qfep1tbDvkLF12MlHuOCgExA40IXB-Cw2VLReNn4UzCtYA32L_KBa4mHDlJOa8PWhZZWpt-dd-S_ZuGO2ljhgVHowAusSA1iyKbFymaQeV2LKWAOGFuzSV4d9vQ46nn_mZKR6shymx_UqAcu7H2yctmvQW9apvhlPNuQYKM2VCXjjbF9-AJ0p1WQbPwKxU7wQiRJE8eWHlfVPqpumxas_ZUPdli6X-0BX_SG__Ehh4')"></div>
<span class="absolute bottom-3 left-3 z-20 text-white font-body-md-strong">종로/익선</span>
</div>
</div>
</section>
</main>
<!-- Bottom Action Area -->
<div class="fixed bottom-0 left-0 w-full p-gutter bg-gradient-to-t from-background via-background to-transparent pt-8">
<button class="w-full h-14 bg-primary text-on-primary rounded-full font-body-lg flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-transform duration-150">
<span>다음 단계</span>
<span class="material-symbols-outlined">arrow_forward</span>
</button>
</div>
<!-- BottomNavBar -->
<nav class="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-gutter py-2 pb-safe bg-surface dark:bg-on-background border-t border-surface-container-highest dark:border-inverse-surface shadow-sm md:hidden">
<div class="flex flex-col items-center justify-center text-primary dark:text-on-primary font-body-md-strong">
<span class="material-symbols-outlined">search</span>
<span class="font-body-sm text-body-sm">탐색</span>
</div>
<div class="flex flex-col items-center justify-center text-secondary dark:text-secondary-fixed-dim hover:bg-surface-container-low transition-colors">
<span class="material-symbols-outlined">favorite</span>
<span class="font-body-sm text-body-sm">저장</span>
</div>
<div class="flex flex-col items-center justify-center text-secondary dark:text-secondary-fixed-dim hover:bg-surface-container-low transition-colors">
<span class="material-symbols-outlined">calendar_today</span>
<span class="font-body-sm text-body-sm">예약</span>
</div>
<div class="flex flex-col items-center justify-center text-secondary dark:text-secondary-fixed-dim hover:bg-surface-container-low transition-colors">
<span class="material-symbols-outlined">person</span>
<span class="font-body-sm text-body-sm">내 정보</span>
</div>
</nav>
<script>
        // Simple Micro-interaction for input fields
        const inputs = document.querySelectorAll('input');
        inputs.forEach(input => {
            input.addEventListener('focus', () => {
                input.parentElement.querySelector('.material-symbols-outlined').style.color = '#000000';
            });
            input.addEventListener('blur', () => {
                input.parentElement.querySelector('.material-symbols-outlined').style.color = '#5e5e5e';
            });
        });

        // Click interaction for chips
        const chips = document.querySelectorAll('.flex-wrap button');
        chips.forEach(chip => {
            chip.addEventListener('click', () => {
                const targetInput = document.querySelector('input[placeholder="예: 강남역, 홍대"]');
                targetInput.value = chip.textContent;
                targetInput.focus();
            });
        });
    </script>
</body></html>