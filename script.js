 // const fromCurrency = document.getElementById("fromCurrency");
// const toCurrency = document.getElementById("toCurrency");
// const amountInput = document.getElementById("amount");
// const convertBtn = document.getElementById("convertBtn");
// const swapBtn = document.getElementById("swapBtn");
// const exchangeRateTxt = document.getElementById("exchangeRateTxt");
// const loader = document.getElementById("loader");

// const API_KEY = "d6793c75850f5f35e5a0d9ab"; 
// // const API_KEY = "fca_live_PFdkOBhjpeEdj4f84JEnrKc7IkNYTeOIOcp59ava"; 


// async function getExchangeRate() {
//     const amountVal = amountInput.value;
//     if (amountVal === "" || amountVal <= 0) {
//         alert("有効な金額を入力してください");
//         return;
//     }

//     exchangeRateTxt.innerText = "換算中...";
//     loader.style.display = "block";

//     const url = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${fromCurrency.value}`;
//     // const url = `https://api.freecurrencyapi.com/v1/latest?apikey=${API_KEY}&base_currency=${from}&currencies=${to}`;

//     try {
//         const response = await fetch(url);
//         const data = await response.json();
        
//         if (data.result === "success") {
//             const rate = data.conversion_rates[toCurrency.value];
//             const totalResult = (amountVal * rate).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            
//             exchangeRateTxt.innerText = `${amountVal} ${fromCurrency.value} = ${totalResult} ${toCurrency.value}`;
//         } else {
//             exchangeRateTxt.innerText = "エラーが発生しました。";
//         }
//     } catch (error) {
//         exchangeRateTxt.innerText = "通信エラーが発生しました。";
//     } finally {
//         loader.style.display = "none";
//     }
// }

// swapBtn.addEventListener("click", () => {
//     const temp = fromCurrency.value;
//     fromCurrency.value = toCurrency.value;
//     toCurrency.value = temp;
//     getExchangeRate();
// });

// convertBtn.addEventListener("click", (e) => {
//     e.preventDefault();
//     getExchangeRate();
// });

// amountInput.addEventListener("keypress", (e) => {
//     if (e.key === "Enter") {
//         getExchangeRate();
//     }
//  });


const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const amountInput = document.getElementById("amount");
const convertBtn = document.getElementById("convertBtn");
const swapBtn = document.getElementById("swapBtn");
const exchangeRateTxt = document.getElementById("exchangeRateTxt");
const resultAmount = document.getElementById("resultAmount"); // 追加
const loader = document.getElementById("loader");

// APIキー
const API_KEY = "d6793c75850f5f35e5a0d9ab"; 

async function getExchangeRate() {
    const amountVal = amountInput.value;
    
    // 入力チェック
    if (amountVal === "" || amountVal <= 0) {
        alert("有効な金額を入力してください");
        return;
    }

    // 表示の初期化
    exchangeRateTxt.innerText = "換算中...";
    resultAmount.innerText = "";
    loader.style.display = "block";

    const url = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${fromCurrency.value}`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("ネットワーク応答が正常ではありません");
        
        const data = await response.json();
        
        if (data.result === "success") {
            const rate = data.conversion_rates[toCurrency.value];
            const totalResult = (amountVal * rate).toLocaleString(undefined, { 
                minimumFractionDigits: 2, 
                maximumFractionDigits: 2 
            });
            
            // 1単位あたりのレートを表示
            exchangeRateTxt.innerText = `1 ${fromCurrency.value} = ${rate.toFixed(4)} ${toCurrency.value}`;
            // 合計金額を表示
            resultAmount.innerText = `${totalResult} ${toCurrency.value}`;
        } else {
            exchangeRateTxt.innerText = "APIエラー: " + data["error-type"];
        }
    } catch (error) {
        console.error(error);
        exchangeRateTxt.innerText = "通信エラーが発生しました。";
    } finally {
        loader.style.display = "none";
    }
}

// 通貨入れ替えボタン
swapBtn.addEventListener("click", () => {
    const temp = fromCurrency.value;
    fromCurrency.value = toCurrency.value;
    toCurrency.value = temp;
    getExchangeRate();
});

// 換算ボタン
convertBtn.addEventListener("click", (e) => {
    e.preventDefault();
    getExchangeRate();
});

// エンターキーでも実行
amountInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        getExchangeRate();
    }
});

// ページ読み込み時に一度実行（初期表示用）
window.addEventListener("load", getExchangeRate);