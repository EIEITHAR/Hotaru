let currentLang = 'en';

const translations = {
    en: {
        "main-title": "Healthy Daily Life",
        "nav-meals": "Today's Meals",
        "nav-sleep": "Sleep Time",
        "nav-drinking": "Drinking",
        "nav-memory": "Memory",
        "meals-title": "What did you eat today?",
        "meals-label": "Write what you ate today:",
        "meals-placeholder": "Enter the foods you ate today...",
        "meals-analyze": "Analyze Nutrition",
        "meals-other": "Or select from common foods:",
        "meals-other-btn": "Other Food Options",
        "sleep-title": "Sleep Time",
        "sleep-label": "How many hours did you sleep yesterday?",
        "sleep-placeholder": "Enter hours",
        "sleep-analyze": "Analyze Sleep",
        "drinking-title": "Drinking",
        "water-title": "Water",
        "water-label": "How much water did you drink today? (in liters)",
        "water-placeholder": "Enter liters",
        "water-analyze": "Analyze Water Intake",
        "memory-title": "Daily Memory",
        "memory-desc": "Review your past entries and see your health status.",
        "memory-save": "Save Today's Data",
        
        // Food group names
        "meats-group": "Meats (protein)",
        "fruits-group": "Fruits (carbohydrate and fiber)",
        "vegetables-group": "Vegetables (fiber)",
        "beans-group": "Beans (fiber)",
        "juices-group": "Juices (sugar and water)",
        
        // Analysis messages
        "adequate-nutrition": "Your nutrition appears adequate based on what you've eaten today.",
        "needs-more-protein": "Your diet could use more protein sources.",
        "needs-more-carbs": "You might need more carbohydrates for energy.",
        "needs-more-fiber": "Consider adding more fiber-rich foods.",
        "adequate-sleep": "You had adequate sleep last night.",
        "insufficient-sleep": "You didn't get enough sleep.",
        "adequate-water": "You drank enough water today.",
        "insufficient-water": "You should drink more water.",
        "healthy-day": "Healthy Day",
        "unhealthy-day": "Needs Improvement",
        "no-entries": "No entries yet. Save your first entry today!",
        
        // Common terms
        "meals": "Meals",
        "sleep": "Sleep",
        "water": "Water",
        "hours": "hours",
        "liters": "liters",
    },
    ja: {
        "main-title": "健康的な日常生活",
        "nav-meals": "今日の食事",
        "nav-sleep": "睡眠時間",
        "nav-drinking": "飲み物",
        "nav-memory": "記録",
        "meals-title": "今日何を食べましたか？",
        "meals-label": "今日食べたものを書いてください：",
        "meals-placeholder": "今日食べたものを入力してください...",
        "meals-analyze": "栄養分析",
        "meals-other": "または一般的な食品から選択：",
        "meals-other-btn": "その他の食品オプション",
        "sleep-title": "睡眠時間",
        "sleep-label": "昨日は何時間寝ましたか？",
        "sleep-placeholder": "時間を入力",
        "sleep-analyze": "睡眠分析",
        "drinking-title": "飲み物",
        "water-title": "水",
        "water-label": "今日はどれくらい水を飲みましたか？（リットル単位）",
        "water-placeholder": "リットルを入力",
        "water-analyze": "水分摂取量分析",
        "memory-title": "日々の記録",
        "memory-desc": "過去の記録を確認して健康状態を確認しましょう。",
        "memory-save": "今日のデータを保存",
        
        // Food group names in Japanese
        "meats-group": "お肉(たんぱく質)",
        "fruits-group": "果物(炭水化物と食物繊維)",
        "vegetables-group": "野菜(食物繊維)",
        "beans-group": "豆類(食物繊維)",
        "juices-group": "ジュース(糖分と水)",
        
        // Analysis messages in Japanese
        "adequate-nutrition": "今日食べたものから判断すると、栄養は十分なようです。",
        "needs-more-protein": "もっとタンパク質源を加えることを検討してください。",
        "needs-more-carbs": "もっと炭水化物が必要かもしれません。",
        "needs-more-fiber": "もっと食物繊維が豊富な食品を追加してみてください。",
        "adequate-sleep": "昨夜は十分な睡眠が取れました。",
        "insufficient-sleep": "睡眠が足りていません。",
        "adequate-water": "今日は十分な水分を摂取しました。",
        "insufficient-water": "もっと水を飲むべきです。",
        "healthy-day": "健康的な一日",
        "unhealthy-day": "改善の必要あり",
        "no-entries": "まだ記録がありません。今日最初の記録を保存しましょう！",
        
        // Common terms in Japanese
        "meals": "食事",
        "sleep": "睡眠",
        "water": "水",
        "hours": "時間",
        "liters": "リットル",
    }
};

// Food data for both languages
const foodData = {
    en: {
        "meats": ["Chicken", "Salmon", "Tuna", "Beef", "Pork", "Eggs", "Tofu", "Turkey", "Lamb", "Duck", "Shrimp", "Crab", "Squid","Mussels", "Sardines", "Mackerel", "Lean beef", "Pork chop", "Ground beef", "Bacon", "Egg","Octopus","Squid","Sausage","Ham","Hamburger"],
        "fruits": ["Apple", "Banana", "Orange", "Strawberry", "Blueberry", "Grapes", "Watermelon", "Pineapple", "Mango", "Peach", "Pear", "Kiwi", "Cherry", "Plum", "Raspberry", "Blackberry", "Cantaloupe", "Honeydew", "Papaya", "Avocado"],
        "vegetables": ["Broccoli", "Spinach", "Carrot", "Tomato", "Cucumber", "Bell pepper", "Onion", "Garlic", "Potato", "Sweet potato", "Lettuce", "Cabbage", "Cauliflower", "Zucchini", "Eggplant", "Asparagus", "Green beans", "Peas", "Corn", "Mushroom"],
        "beans": ["Black beans", "Kidney beans", "Chickpeas", "Lentils", "Pinto beans", "Soybeans", "Navy beans", "Black-eyed peas", "Adzuki beans", "Mung beans", "Cannellini beans", "Great Northern beans", "Fava beans", "Lima beans", "Red beans", "White beans", "Broad beans", "Cranberry beans", "Anasazi beans", "Appaloosa beans"],
        "juices": ["Orange juice", "Apple juice", "Grape juice", "Pineapple juice", "Tomato juice", "Carrot juice", "Cranberry juice", "Pomegranate juice", "Grapefruit juice", "Lemon juice", "Lime juice", "Watermelon juice", "Mango juice", "Peach juice", "Pear juice", "Cherry juice", "Strawberry juice", "Blueberry juice", "Mixed fruit juice", "Vegetable juice"]
    },
    ja: {
        "meats": ["鶏肉", "サーモン", "マグロ", "牛肉", "豚肉", "卵", "豆腐", "七面鳥", "ラム肉", "鴨肉", "エビ", "カニ","いか", "ムール貝", "イワシ", "サバ", "赤身牛肉", "ポークチョップ", "挽肉", "ベーコン", "卵","たこ","ソーセージ","ハム","ハンバーガー"],
        "fruits": ["りんご", "バナナ", "オレンジ", "いちご", "ブルーベリー", "ぶどう", "スイカ", "パイナップル", "マンゴー", "桃", "梨", "キウイ", "さくらんぼ", "プラム", "ラズベリー", "ブラックベリー", "メロン", "ハネデューメロン", "パパイヤ", "アボカド"],
        "vegetables": ["ブロッコリー", "ほうれん草", "にんじん", "トマト", "きゅうり", "ピーマン", "玉ねぎ", "にんにく", "じゃがいも", "さつまいも", "レタス", "キャベツ", "カリフラワー", "ズッキーニ", "ナス", "アスパラガス", "インゲン", "グリーンピース", "とうもろこし", "きのこ"],
        "beans": ["黒豆", "キドニービーンズ", "ひよこ豆", "レンズ豆", "ピントビーンズ", "大豆", "白インゲン豆", "ササゲ", "小豆", "緑豆", "白いんげん豆", "グレートノーザンビーンズ", "そら豆", "ライマビーンズ", "赤豆", "白豆", "空豆", "クランベリービーンズ", "アナサジビーンズ", "アパルーサビーンズ"],
        "juices": ["オレンジジュース", "りんごジュース", "ぶどうジュース", "パイナップルジュース", "トマトジュース", "にんじんジュース", "クランベリージュース", "ザクロジュース", "グレープフルーツジュース", "レモンジュース", "ライムジュース", "スイカジュース", "マンゴージュース", "ピーチジュース", "梨ジュース", "さくらんぼジュース", "いちごジュース", "ブルーベリージュース", "ミックスフルーツジュース", "野菜ジュース"]
    }
};

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initLanguage();
    initFoodGroups();
    initEventListeners();
    loadMemory();
    updateLanguage();
});

// Navigation
function initNavigation() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelectorAll('.page, .nav-link').forEach(el => el.classList.remove('active'));
            document.getElementById(link.dataset.page).classList.add('active');
            link.classList.add('active');
            window.scrollTo(0, 0);
        });
    });
}

// Language
function initLanguage() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentLang = btn.id === 'lang-en' ? 'en' : 'ja';
            updateLanguage();
        });
    });
}

function updateLanguage() {
    // Update all elements with data-key attribute
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.dataset.key;
        if (translations[currentLang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[currentLang][key];
            } else {
                el.textContent = translations[currentLang][key];
            }
        }
    });
    
    // Update food groups with new language
    updateFoodGroups();
    
    // Reload memory entries with current language
    loadMemory();
}

function updateFoodGroups() {
    const container = document.getElementById('food-groups-container');
    if (!container) return;
    
    // Clear container
    container.innerHTML = '';
    
    // Create row for food group titles
    const groupsRow = document.createElement('div');
    groupsRow.className = 'food-groups-row';
    
    // Get food groups for current language
    const foodGroups = foodData[currentLang];
    
    // Create each food group title
    Object.keys(foodGroups).forEach(groupKey => {
        const groupTitle = document.createElement('div');
        groupTitle.className = 'food-group-title';
        groupTitle.dataset.group = groupKey;
        groupTitle.textContent = translations[currentLang][`${groupKey}-group`];
        
        groupTitle.addEventListener('click', () => {
            // Remove active class from all titles
            document.querySelectorAll('.food-group-title').forEach(el => {
                el.classList.remove('active');
            });
            
            // Add active class to clicked title
            groupTitle.classList.add('active');
            
            // Show food items for this group
            showFoodItems(groupKey);
        });
        
        groupsRow.appendChild(groupTitle);
    });
    
    // Create container for food items
    const itemsContainer = document.createElement('div');
    itemsContainer.className = 'food-items-container';
    itemsContainer.id = 'food-items-display';
    
    // Append to container
    container.appendChild(groupsRow);
    container.appendChild(itemsContainer);
    
    // Initially hide the container (it will be shown when button is clicked)
    container.style.display = 'none';
}

function showFoodItems(groupKey) {
    const container = document.getElementById('food-items-display');
    if (!container) return;
    
    // Clear container
    container.innerHTML = '';
    
    // Get food items for current group and language
    const foodGroups = foodData[currentLang];
    const foodItems = foodGroups[groupKey] || [];
    
    // Create food items
    foodItems.forEach(foodItem => {
        const itemEl = document.createElement('div');
        itemEl.className = 'food-item';
        itemEl.textContent = foodItem;
        itemEl.addEventListener('click', () => {
            const input = document.getElementById('meal-input');
            if (input) {
                if (input.value.trim()) {
                    input.value = input.value + ', ' + foodItem;
                } else {
                    input.value = foodItem;
                }
            }
        });
        container.appendChild(itemEl);
    });
}

function initFoodGroups() {
    // Initialize food groups
    updateFoodGroups();
}

// Event listeners
function initEventListeners() {
    // Meal analysis
    const analyzeMealBtn = document.getElementById('analyze-meal');
    if (analyzeMealBtn) {
        analyzeMealBtn.addEventListener('click', analyzeMeals);
    }
    
    // Other food options button - toggles food groups container
    const showFoodGroupsBtn = document.getElementById('show-food-groups');
    if (showFoodGroupsBtn) {
        showFoodGroupsBtn.addEventListener('click', () => {
            const container = document.getElementById('food-groups-container');
            if (container) {
                // Toggle display
                const isHidden = container.style.display === 'none' || container.style.display === '';
                container.style.display = isHidden ? 'block' : 'none';
                
                // If showing and no group is selected, select first group
                if (isHidden) {
                    const firstGroup = Object.keys(foodData[currentLang])[0];
                    if (firstGroup) {
                        // Remove active class from all
                        document.querySelectorAll('.food-group-title').forEach(el => {
                            el.classList.remove('active');
                        });
                        
                        // Add active to first group
                        const firstTitle = document.querySelector(`.food-group-title[data-group="${firstGroup}"]`);
                        if (firstTitle) {
                            firstTitle.classList.add('active');
                        }
                        
                        // Show items for first group
                        showFoodItems(firstGroup);
                    }
                }
            }
        });
    }

    // Sleep analysis
    const analyzeSleepBtn = document.getElementById('analyze-sleep');
    if (analyzeSleepBtn) {
        analyzeSleepBtn.addEventListener('click', analyzeSleep);
    }
    
    // Water analysis
    const analyzeWaterBtn = document.getElementById('analyze-water');
    if (analyzeWaterBtn) {
        analyzeWaterBtn.addEventListener('click', analyzeWater);
    }
    
    // Save today's data
    const saveTodayBtn = document.getElementById('save-today');
    if (saveTodayBtn) {
        saveTodayBtn.addEventListener('click', saveToday);
    }

    // Return to top
    const returnToTopBtn = document.getElementById('return-to-top');
    if (returnToTopBtn) {
        window.addEventListener('scroll', () => {
            returnToTopBtn.classList.toggle('show', window.pageYOffset > 300);
        });
        returnToTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }
}

// Analysis functions
function analyzeMeals() {
    const input = document.getElementById('meal-input');
    const result = document.getElementById('meal-result');

    if (!input || !result) return;

    const inputValue = input.value.toLowerCase();
    
    if (!inputValue.trim()) {
        const message = currentLang === 'en' ? 'Please enter what you ate today.' : '今日食べたものを入力してください。';
        showResult(result, message, 'warning');
        return;
    }

    const currentFoodData = foodData[currentLang];
    let hasProtein = false, hasCarbs = false, hasFiber = false, hasCarbohydrate = false;

    // Check for each food item in the input
    Object.values(currentFoodData).flat().forEach(food => {
        if (inputValue.includes(food.toLowerCase())) {
            if (currentFoodData.meats.includes(food)) hasProtein = true;
            if (currentFoodData.fruits.includes(food) || currentFoodData.vegetables.includes(food)) hasCarbs = true;
            if (currentFoodData.fruits.includes(food) || currentFoodData.vegetables.includes(food) || currentFoodData.beans.includes(food)) hasFiber = true;
            if (currentFoodData.fruits.includes(food) || currentFoodData.vegetables.includes(food) || currentFoodData.beans.includes(food) || currentFoodData.juices.includes(food)) hasCarbohydrate = true;
        }
    });

    let feedback = '', resultClass = 'success';

    if (hasProtein && hasCarbs && hasFiber && hasCarbohydrate) {
        feedback = translations[currentLang]['adequate-nutrition'];
    } else {
        resultClass = 'warning';
        if (!hasProtein) feedback += translations[currentLang]['needs-more-protein'] + ' ';
        if (!hasCarbs) feedback += translations[currentLang]['needs-more-carbs'] + ' ';
        if (!hasFiber) feedback += translations[currentLang]['needs-more-fiber'] + ' ';
        if (!feedback.trim()) {
            feedback = currentLang === 'en' 
                ? "We couldn't identify specific foods. Make sure you're eating a balanced diet."
                : "特定の食品を識別できませんでした。バランスの取れた食事を心がけましょう。";
        }
    }

    showResult(result, feedback, resultClass);
}

function analyzeSleep() {
    const sleepInput = document.getElementById('sleep-hours');
    const result = document.getElementById('sleep-result');

    if (!sleepInput || !result) return;

    const hours = parseFloat(sleepInput.value);

    if (isNaN(hours) || hours < 0) {
        const message = currentLang === 'en' ? 'Please enter valid hours.' : '有効な時間を入力してください。';
        showResult(result, message, 'warning');
        return;
    }

    let feedback = '', resultClass = 'success';

    if (hours >= 7 && hours <= 9) {
        feedback = translations[currentLang]['adequate-sleep'];
    } else if (hours < 7) {
        resultClass = 'warning';
        feedback = translations[currentLang]['insufficient-sleep'];
    } else {
        resultClass = 'warning';
        feedback = currentLang === 'en' 
            ? "You slept more than recommended."
            : "推奨以上の睡眠をとりました。";
    }

    showResult(result, feedback, resultClass);
}

function analyzeWater() {
    const waterInput = document.getElementById('water-amount');
    const result = document.getElementById('water-result');

    if (!waterInput || !result) return;

    const liters = parseFloat(waterInput.value);

    if (isNaN(liters) || liters < 0) {
        const message = currentLang === 'en' ? 'Please enter valid amount.' : '有効な量を入力してください。';
        showResult(result, message, 'warning');
        return;
    }

    const feedback = liters >= 2 ?
        translations[currentLang]['adequate-water'] :
        translations[currentLang]['insufficient-water'];

    showResult(result, feedback, liters >= 2 ? 'success' : 'warning');
}

function showResult(element, message, type) {
    if (!element) return;
    
    element.innerHTML = message;
    element.className = `result ${type}`;
    element.style.display = 'block';
}

// Memory functions
function saveToday() {
    const today = new Date().toISOString().split('T')[0];
    const mealInput = document.getElementById('meal-input');
    const sleepInput = document.getElementById('sleep-hours');
    const waterInput = document.getElementById('water-amount');
    
    const entry = {
        date: today,
        meals: mealInput ? mealInput.value : '',
        sleep: sleepInput ? sleepInput.value : '',
        water: waterInput ? waterInput.value : '',
        isHealthy: true,
        reasons: []
    };

    // Simple health check
    if (entry.sleep && parseFloat(entry.sleep) < 7) {
        entry.isHealthy = false;
        entry.reasons.push(translations[currentLang]['insufficient-sleep']);
    }
    if (entry.water && parseFloat(entry.water) < 2) {
        entry.isHealthy = false;
        entry.reasons.push(translations[currentLang]['insufficient-water']);
    }

    let memory = JSON.parse(localStorage.getItem('healthMemory') || '[]');
    const existingIndex = memory.findIndex(e => e.date === today);

    if (existingIndex !== -1) {
        memory[existingIndex] = entry;
    } else {
        memory.push(entry);
    }
    
    // Keep only last 30 days
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    memory = memory.filter(entry => new Date(entry.date) >= thirtyDaysAgo);

    // Save to localStorage
    localStorage.setItem('healthMemory', JSON.stringify(memory));
    loadMemory();

    // Show success message
    const saveMessage = currentLang === 'en' ? 'Today\'s data saved!' : '今日のデータを保存しました！';
    alert(saveMessage);
}

function loadMemory() {
    const container = document.getElementById('memory-entries');
    if (!container) return;
    
    let memory = JSON.parse(localStorage.getItem('healthMemory') || '[]');

    memory.sort((a, b) => new Date(b.date) - new Date(a.date));

    if (memory.length === 0) {
        container.innerHTML = `<p>${translations[currentLang]['no-entries']}</p>`;
        return;
    }

    container.innerHTML = memory.map(entry => {
        const date = new Date(entry.date).toLocaleDateString(currentLang === 'en' ? 'en-US' : 'ja-JP');
        const healthy = entry.isHealthy ? 'memory-healthy' : 'memory-unhealthy';
        const healthyText = entry.isHealthy ? translations[currentLang]['healthy-day'] : translations[currentLang]['unhealthy-day'];

        let details = '';
        if (entry.meals) details += `<div><strong>${translations[currentLang]['meals']}:</strong> ${entry.meals}</div>`;
        if (entry.sleep) details += `<div><strong>${translations[currentLang]['sleep']}:</strong> ${entry.sleep} ${translations[currentLang]['hours']}</div>`;
        if (entry.water) details += `<div><strong>${translations[currentLang]['water']}:</strong> ${entry.water} ${translations[currentLang]['liters']}</div>`;
        if (entry.reasons.length) details += `<div><strong>${currentLang === 'en' ? 'Areas for improvement:' : '改善点：'}</strong> ${entry.reasons.join(', ')}</div>`;

        return `
            <div class="memory-entry">
                <div class="memory-date">${date} <span class="${healthy}">${healthyText}</span></div>
                <div class="memory-details">${details}</div>
            </div>
        `;
    }).join('');
}

