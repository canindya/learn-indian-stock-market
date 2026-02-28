/* Learn Indian Stock Market — Interactive Tutorial
 * Fun, colorful, kid-friendly explanations of ~110 stock market concepts.
 * Written so a 10-year-old can understand, with practical context for adults.
 */

let tutorialRendered = false;

// ═══════════════════════════════════════════════════════
// CHAPTER DATA — 10 chapters, ~110 terms
// ═══════════════════════════════════════════════════════

const CHAPTERS = [

// ──────── Chapter 1 ────────
{
    id: 'stock-market',
    emoji: '🏪',
    title: 'What is the Stock Market?',
    subtitle: 'The big shop where companies sell tiny pieces of themselves',
    color: '#FF6B6B',
    terms: [
        {
            name: 'Stock (Share)',
            emoji: '📄',
            simple: 'Imagine your friend opens a lemonade stand and needs money to buy lemons. They say "Give me ₹100 and you own a tiny piece of my stand!" That tiny piece is called a share. If the stand does well, your piece becomes worth more!',
            practice: 'Stock exchanges like NSE and BSE list thousands of companies. Analysts evaluate stocks using fundamental, technical, and quantitative methods.',
        },
        {
            name: 'NSE (National Stock Exchange)',
            emoji: '🏛️',
            simple: 'Think of a giant playground where everyone comes to buy and sell their tiny pieces of companies. The NSE is India\'s biggest such playground — it has rules so nobody cheats!',
            practice: 'The NSE lists over 2,000 actively traded companies and is home to the benchmark Nifty 50 index.',
        },
        {
            name: 'Market Capitalization',
            emoji: '💰',
            simple: 'If your lemonade stand has 100 pieces (shares) and each piece is worth ₹10, the whole stand is worth ₹1,000. That\'s the market cap — the total value of the entire company. Big companies = big market cap!',
            practice: 'SEBI classifies: Large Cap (top 100 by market cap), Mid Cap (101–250), Small Cap (251+). Common thresholds: Large ≥₹10,000 Cr, Mid ₹3,000–9,999 Cr, Small <₹3,000 Cr.',
        },
        {
            name: 'Large Cap',
            emoji: '🐘',
            simple: 'These are the biggest, most well-known companies — like the most popular ice cream brand everyone knows. They\'re safer but grow slower, like a big elephant — steady and strong.',
            practice: 'Market cap ≥₹10,000 Crore. Examples: Reliance, TCS, HDFC Bank. Lower risk, moderate growth potential.',
        },
        {
            name: 'Mid Cap',
            emoji: '🐕',
            simple: 'These are medium-sized companies — like a popular local restaurant that\'s growing. Not as safe as elephants, but they can run faster! More exciting but a bit more risky.',
            practice: 'Market cap ₹3,000–9,999 Crore. Balance of growth potential and stability. Often outperform in bull markets.',
        },
        {
            name: 'Small Cap',
            emoji: '🐇',
            simple: 'These are smaller companies — like a cool new food truck in your neighborhood. They can grow super fast (a rabbit!) but could also fail. High risk, high reward!',
            practice: 'Market cap <₹3,000 Crore. Higher growth potential but also higher volatility and liquidity risk.',
        },
        {
            name: 'Sector',
            emoji: '🏷️',
            simple: 'Just like school has different subjects (Math, Science, Art), the stock market groups companies by what they do. Banks go in "Banking", medicine companies in "Pharma", tech companies in "IT", and so on.',
            practice: 'Common Indian market sectors: Banking, IT, Pharma, FMCG, Auto, Energy, Metal, Realty, Telecom, and more. Each sector has different risk profiles and valuation norms.',
        },
        {
            name: 'Current Price',
            emoji: '🏷️',
            simple: 'The price right now — like checking the price tag on your favorite toy at the store. It changes every second when the market is open because people keep buying and selling!',
            practice: 'Stock prices update in real-time during market hours (9:15 AM – 3:30 PM IST). After-hours, the closing price is used.',
        },
        {
            name: 'Volume',
            emoji: '📊',
            simple: 'How many shares were bought and sold today. If lots of people are trading, volume is high — it\'s like a busy shop with a long queue. Low volume = quiet shop, not many interested.',
            practice: 'Analysts typically require minimum daily volume (e.g., 50,000+ shares) to ensure a stock is liquid enough to buy and sell easily.',
        },
        {
            name: '52-Week High / Low',
            emoji: '🎢',
            simple: 'The highest and lowest price in the last one year. Like your best and worst test scores this year! If the stock is near its high, it\'s been doing great. Near its low? It\'s been struggling.',
            practice: 'Stocks near their 52-week high may be due for a correction. Those near the low might be value opportunities — or falling for good reason.',
        },
        {
            name: 'Returns (1M, 3M, 6M, 1Y)',
            emoji: '📈',
            simple: 'How much money you would have made (or lost) if you bought the stock 1 month, 3 months, 6 months, or 1 year ago. Like checking "has my piggy bank grown?"',
            practice: 'Returns over multiple time frames (1M, 3M, 6M, 1Y) help assess both recent momentum and longer-term trends.',
        },
        {
            name: 'Nifty 50',
            emoji: '🏆',
            simple: 'The top 50 biggest companies in India, bundled together like an all-star cricket team. When people say "the market went up", they usually mean the Nifty 50 went up. It\'s the benchmark — the score to beat!',
            practice: 'The standard benchmark for Indian equity performance. If your portfolio beats the Nifty 50 return, you\'ve generated positive "alpha".',
        },
    ],
},

// ──────── Chapter 2 ────────
{
    id: 'fundamentals',
    emoji: '💪',
    title: 'Is This Company Any Good?',
    subtitle: 'Checking the health of a business — like a doctor\'s checkup',
    color: '#4ECDC4',
    terms: [
        {
            name: 'PE Ratio (Price-to-Earnings)',
            emoji: '🧮',
            simple: 'If a lemonade stand earns ₹10 per day and someone wants to buy the whole stand for ₹100, the PE is 100÷10 = 10. It means you\'d wait 10 days to earn back your money. Lower PE = cheaper deal! But some fast-growing stands deserve a higher price.',
            practice: 'A PE of 20 might be cheap for IT but expensive for metals. Always compare PE within the same sector. Typical screening range: 0–60.',
            gauge: { low: 0, high: 60, labels: ['Cheap', 'Fair', 'Expensive'] },
        },
        {
            name: 'PB Ratio (Price-to-Book)',
            emoji: '📚',
            simple: 'Imagine you have a toy box worth ₹50 (that\'s the "book value"). If someone offers to buy it for ₹100, the PB is 100÷50 = 2. A PB of 1 means you\'re paying exactly what the stuff is worth. Higher = you\'re paying extra for the brand name.',
            practice: 'PB below 1 might indicate undervaluation or distress. Banks and financial companies typically have lower PB ratios. Compare within sector.',
        },
        {
            name: 'PEG Ratio',
            emoji: '⚖️',
            simple: 'PE alone doesn\'t tell the full story. PEG adjusts PE by how fast the company is growing. It\'s like comparing two lemonade stands — one earns less but is doubling every year! PEG below 1 = you\'re getting growth at a bargain.',
            practice: 'PEG = PE ÷ earnings growth rate. PEG below 1 suggests the stock is undervalued relative to its growth. Commonly weighted heavily in valuation analysis.',
        },
        {
            name: 'ROE (Return on Equity)',
            emoji: '💡',
            simple: 'If you put ₹100 of your own money into your lemonade stand and earned ₹15 profit, your ROE is 15%. It answers: "How good is this company at turning the owner\'s money into more money?" Higher is better!',
            practice: 'ROE above 15% is generally considered excellent. Consistent ROE year-over-year is even more important than a single high number.',
            gauge: { low: 0, high: 30, labels: ['Weak', 'Good', 'Excellent'] },
        },
        {
            name: 'ROCE (Return on Capital Employed)',
            emoji: '⚡',
            simple: 'Like ROE but counts ALL the money used — both the owner\'s money AND borrowed money. It shows how efficiently the company uses every rupee, whether it\'s their own or borrowed. Think of it as "profit per rupee invested".',
            practice: 'ROCE above 12–15% is considered good. Unlike ROE, ROCE accounts for debt, making it harder to inflate through leverage.',
        },
        {
            name: 'Debt-to-Equity (D/E)',
            emoji: '🏗️',
            simple: 'If you borrowed ₹50 from your parents and put in ₹100 of your own, D/E = 50÷100 = 0.5. Some debt is okay (like borrowing for a bigger lemonade stand), but too much debt = risky! If things go wrong, you still have to pay back.',
            practice: 'Acceptable D/E varies by sector. Banks naturally have high D/E (10–15). IT companies should have very low D/E (<0.5). Manufacturing: <2.0 is typical.',
        },
        {
            name: 'Dividend Yield',
            emoji: '🎁',
            simple: 'Some companies share their profits with you every year — like getting pocket money just for owning the stock! Dividend yield tells you how much you get. 3% means for every ₹100 invested, you get ₹3 per year as a gift.',
            practice: 'Dividends signal financial health and management confidence. A consistent dividend track record often indicates a well-managed, profitable company.',
        },
        {
            name: 'Revenue Growth (3Y)',
            emoji: '📈',
            simple: 'How much bigger the company\'s sales got over 3 years. If a lemonade stand sold 100 glasses 3 years ago and sells 130 now, that\'s 30% growth. It shows the business is expanding!',
            practice: '3-year CAGR above 8–10% indicates healthy top-line growth. Sustained revenue growth is the foundation for earnings growth.',
        },
        {
            name: 'Earnings Growth (3Y)',
            emoji: '🚀',
            simple: 'Similar to revenue growth, but for profits specifically. The company is selling more AND keeping more money. This is the most important growth metric — it shows real profit is increasing.',
            practice: '3-year earnings CAGR above 10% is a strong sign. Earnings growth matters more than revenue growth — it shows profit is actually increasing.',
        },
        {
            name: 'EPS (Earnings Per Share)',
            emoji: '🪙',
            simple: 'If a company earned ₹1,000 total profit and has 100 shares, each share "earned" ₹10. That\'s EPS. It helps you compare companies of different sizes — bigger EPS = more profit packed into each share.',
            practice: 'Future stock price can be estimated as: EPS × (1 + growth)^years × projected PE. Higher EPS growth = higher future price potential.',
        },
        {
            name: 'Promoter Holding',
            emoji: '👨‍💼',
            simple: 'The promoter is the company\'s owner/founder. If they own 60% of the company, that means they believe in it so much they keep most of it! Like a chef who eats at their own restaurant — it must be good!',
            practice: 'Promoter holding above 50% is generally positive. Very low holding (<25%) can be a red flag. Watch for changes quarter-over-quarter.',
        },
        {
            name: 'Sector Median',
            emoji: '📏',
            simple: 'The "middle" value among all companies in the same sector. Like if you line up all the kids in your class by height — the one in the middle is the median. We compare each company against its sector\'s median to be fair.',
            practice: 'Always compare a stock\'s metrics against its sector median, not absolute benchmarks. A "high" PE for a metal company might be "low" for a tech company.',
        },
    ],
},

// ──────── Chapter 3 ────────
{
    id: 'screening',
    emoji: '📊',
    title: 'Report Card Time',
    subtitle: 'Filtering thousands of stocks down to the best candidates',
    color: '#45B7D1',
    terms: [
        {
            name: 'Screening (Hard Filters)',
            emoji: '🚪',
            simple: 'Imagine a school that gets 2,000+ applications. First, they check: "Can you read? Can you write? Do you have minimum marks?" If no — rejected! This is screening. Only a few hundred stocks pass all the basic tests.',
            practice: 'Common screening filters: Market cap >₹500 Cr, PE 0–60, ROE >10%, ROCE >12%, D/E <2, Volume >50k. Narrows thousands of stocks to hundreds.',
        },
        {
            name: 'Sector-Specific Screening',
            emoji: '🎯',
            simple: 'Different subjects have different passing marks! A PE of 30 might be "expensive" for a metal company but "normal" for a pharma company. So we use different rules for different sectors — that\'s fair!',
            practice: 'Smart screeners use sector-specific thresholds: Banking D/E <15, Metal/Energy PE <20, IT D/E <0.5, Pharma PE <50, Realty D/E <3.',
        },
        {
            name: 'Fundamental Score',
            emoji: '📝',
            simple: 'After passing the entrance test, each stock gets a score from 0 to 100. It\'s like a report card that combines Valuation (25%), Profitability (25%), Balance Sheet (15%), Growth (20%), and Quality (15%).',
            practice: 'Typically combines: Valuation (25%), Profitability (25%), Balance Sheet (15%), Growth (20%), and Quality (15%) into a 0–100 score.',
            gauge: { low: 0, high: 100, labels: ['Weak', 'Average', 'Strong'] },
        },
        {
            name: 'Valuation Sub-Score',
            emoji: '💲',
            simple: 'Is this stock cheap or expensive compared to others in its class? Like checking if the same toy costs less at one shop vs another. Uses PE, PB, and PEG ratios scored within each sector.',
            practice: 'Combines PE (30%), PB (30%), and PEG (40%). Best practice: rank by percentile within sector rather than using absolute thresholds.',
        },
        {
            name: 'Profitability Sub-Score',
            emoji: '💰',
            simple: 'How good is this company at making money? High ROE and ROCE mean the company squeezes more profit from every rupee. Like a lemonade stand that makes great lemonade AND doesn\'t waste lemons!',
            practice: 'ROE and ROCE above 15% typically score in the top bracket. Consistent profitability across multiple years is weighted higher.',
        },
        {
            name: 'Balance Sheet Sub-Score',
            emoji: '🏦',
            simple: 'Does this company owe too much money? A good balance sheet means low debt and enough cash. Like checking if your friend can actually afford to buy more lemons before lending them money!',
            practice: 'Low debt-to-equity ratio signals financial stability. Companies with strong balance sheets survive downturns better.',
        },
        {
            name: 'Growth Sub-Score',
            emoji: '🌱',
            simple: 'Is this company getting bigger year after year? Revenue growth (selling more) and earnings growth (earning more) show the company is moving in the right direction — like a plant growing taller!',
            practice: 'Revenue and earnings growth are typically capped (e.g., 30% and 40%) in scoring models to prevent outlier companies from distorting scores.',
        },
        {
            name: 'Quality Score',
            emoji: '⭐',
            simple: 'Is this a well-run company you can trust? Quality checks 4 things: (1) Consistent profits year after year, (2) Owner hasn\'t pledged shares, (3) Owner is buying more shares, (4) Company pays dividends. Like a restaurant with a 5-star hygiene rating!',
            practice: 'Quality factors: ROE consistency over years, low share pledge, increasing promoter holding, and regular dividend payouts.',
        },
        {
            name: 'Percentile Rank',
            emoji: '📊',
            simple: 'If you scored in the 80th percentile in class, it means you did better than 80% of students. We rank each stock within its sector the same way — 90th percentile in PE means cheaper than 90% of sector peers!',
            practice: 'The 80th percentile in PE means cheaper than 80% of sector peers. Percentile ranking ensures fair comparison across different sectors.',
        },
        {
            name: 'Candidates vs Universe',
            emoji: '🌍',
            simple: 'Universe = all 2,000+ stocks we know about. Candidates = the few hundred that passed screening. Think of it as the difference between "everyone who applied" vs "everyone who got shortlisted".',
            practice: 'Universe = all listed stocks. Candidates = those passing initial screening. Further analysis (ML, deep scoring) is typically applied only to candidates to save compute time.',
        },
    ],
},

// ──────── Chapter 4 ────────
{
    id: 'technical',
    emoji: '📈',
    title: 'Reading the Price Chart',
    subtitle: 'Like reading a treasure map — patterns that predict where the price goes next',
    color: '#96CEB4',
    terms: [
        {
            name: 'Price Chart (Candlestick)',
            emoji: '🕯️',
            simple: 'A picture that shows how the price moved each day. Each "candle" shows: the opening price, the highest, the lowest, and the closing price. Green candle = price went up. Red candle = price went down. Like a diary of the stock\'s day!',
            practice: 'Most charting platforms show candlestick charts with selectable time periods (1M, 3M, 6M, 1Y, 2Y). Essential for visual pattern recognition.',
        },
        {
            name: 'SMA (Simple Moving Average)',
            emoji: '〰️',
            simple: 'Add up the last 50 days of prices and divide by 50 — that\'s the 50-day SMA! It smooths out the ups and downs to show the real trend. Like taking your average test score instead of looking at each test.',
            practice: 'SMA 50 (short-term trend) and SMA 200 (long-term trend) are the two most widely watched moving averages on Wall Street and Dalal Street alike.',
        },
        {
            name: 'Golden Cross / Death Cross',
            emoji: '✨',
            simple: 'When the 50-day average crosses ABOVE the 200-day average, it\'s a "Golden Cross" — like a green traffic light! 🟢 When it crosses BELOW, it\'s a "Death Cross" — red light! 🔴 These are big trend signals.',
            practice: 'Golden Cross is one of the strongest bullish signals in technical analysis. Death Cross is the strongest bearish. Both are lagging indicators — they confirm, not predict.',
        },
        {
            name: 'RSI (Relative Strength Index)',
            emoji: '🌡️',
            simple: 'An excitement meter from 0 to 100! Imagine a cricket match: when everyone is jumping and screaming (RSI >70), the excitement might cool down soon. When the stadium is quiet (RSI <30), something exciting might happen! RSI measures buying excitement.',
            practice: 'RSI >70 = overbought (potential sell). RSI <30 = oversold (potential buy). Most powerful when combined with other indicators like MACD and volume.',
            gauge: { low: 0, high: 100, labels: ['Oversold 🥶', 'Normal 😊', 'Overbought 🥵'] },
        },
        {
            name: 'MACD',
            emoji: '📶',
            simple: 'Compares two speed measurements of the stock. If the fast speed is above the slow speed, the stock is accelerating (bullish!). If below, it\'s slowing down (bearish). The "histogram" bar shows the gap — bigger bar = stronger momentum.',
            practice: 'MACD crossing above signal line = bullish. Below = bearish. The histogram shows momentum strength. Widely used for trend-following strategies.',
        },
        {
            name: 'Bollinger Bands',
            emoji: '🎯',
            simple: 'Draw a line for the average price, then draw two lines above and below like train tracks. If the price touches the top track, it might be stretched too far up. Bottom track? Stretched too far down. The width of the tracks shows how wild the price has been.',
            practice: 'Price touching the lower band with RSI below 35 often signals an oversold bounce opportunity. The band width indicates volatility.',
        },
        {
            name: 'Volume Trend',
            emoji: '📢',
            simple: 'If a stock goes UP and lots of people are buying (high volume), that\'s a strong move. But if it goes up on low volume, it might be fake — like a party with only 3 people. Real moves have crowd support!',
            practice: 'Price moves confirmed by high volume (>1.5× average) are more reliable. Low-volume breakouts often fail.',
        },
        {
            name: 'Delivery Percentage',
            emoji: '📦',
            simple: 'When people buy stocks, some keep them (delivery) and some sell the same day (intraday). High delivery % means people are actually keeping the stock — they believe in it! Low delivery % means mostly day traders gambling.',
            practice: 'In India, high delivery % (vs intraday trading) indicates genuine buying interest. It\'s a unique signal not available in most Western markets.',
        },
        {
            name: 'Relative Strength (vs Nifty)',
            emoji: '🏃‍♂️',
            simple: 'Is this stock running faster than the whole market? If Nifty went up 5% and your stock went up 8%, it has positive relative strength — it\'s winning the race! Negative means it\'s falling behind.',
            practice: 'Stocks showing relative strength vs the broader market tend to continue outperforming. A key factor in momentum investing.',
        },
        {
            name: 'Mean Reversion (Z-Score)',
            emoji: '🔄',
            simple: 'Prices tend to come back to their average — like a rubber band. If you stretch it too far up, it snaps back down. Z-score measures how far the price is stretched. Z-score of +2 = very stretched up. Z-score of -2 = very stretched down.',
            practice: 'Z-score above +2 = statistically overextended (mean reversion likely). Below -2 = deeply undervalued. A contrarian signal.',
        },
        {
            name: 'ATR (Average True Range)',
            emoji: '📐',
            simple: 'How much the stock typically moves in one day. A stock that moves ₹5 daily has ATR of 5. A stock that moves ₹50 daily has ATR of 50. It\'s like measuring how hyper a puppy is — helps decide how much rope to give!',
            practice: 'ATR is used to set dynamic stop-losses and profit targets. Example: stop-loss at 2× ATR below entry, target at 3× ATR above entry.',
        },
        {
            name: 'Support & Resistance',
            emoji: '🧱',
            simple: 'Support is like a floor — the price bounces UP from it. Resistance is like a ceiling — the price bounces DOWN from it. Think of a ball bouncing between the floor and ceiling! When it breaks through, big moves happen.',
            practice: 'Calculated using pivot points, previous highs/lows, or Fibonacci levels. Key for setting entry points and stop-losses.',
        },
        {
            name: 'Technical Score',
            emoji: '🎯',
            simple: 'All 9 technical signals combined into one score from 0 to 100. Think of it as the stock\'s "chart report card" — high score means the price charts look healthy and trending up!',
            practice: 'A composite of 9+ signals: RSI, MACD, moving average crossovers, relative strength, volume trend, delivery %, and more. Typical weight: 15–25% of a final composite score.',
            gauge: { low: 0, high: 100, labels: ['Bearish', 'Neutral', 'Bullish'] },
        },
    ],
},

// ──────── Chapter 5 ────────
{
    id: 'momentum',
    emoji: '🏃',
    title: 'Who\'s Winning the Race?',
    subtitle: 'Measuring speed, smoothness, and acceleration of stock returns',
    color: '#FFEAA7',
    terms: [
        {
            name: 'Momentum',
            emoji: '💨',
            simple: 'A ball rolling downhill gets faster and faster — that\'s momentum! In stocks, if a stock has been going up for months, it often keeps going up (momentum). "Winners keep winning" is the basic idea.',
            practice: 'Academic research by Jegadeesh & Titman (1993) proved momentum works: stocks that went up tend to keep going up over 3–12 months.',
        },
        {
            name: 'Weighted Momentum',
            emoji: '⚖️',
            simple: 'Instead of just looking at the last month, we look at 1 month (15%), 3 months (35%), 6 months (35%), and 1 year (15%). Recent performance matters more — like how your latest test scores count more than old ones!',
            practice: 'The 3–6 month return window is the sweet spot for momentum. Too short = noise. Too long = mean reversion kicks in.',
        },
        {
            name: 'Sharpe Ratio',
            emoji: '🎢',
            simple: 'Two roller coasters both end at the same height. One goes straight up smoothly. The other goes up, crashes down, loops around, then shoots up. Same result, but one was way scarier! Sharpe Ratio = how good the return was FOR the amount of scary rides.',
            practice: 'Sharpe above 1.0 = good risk-adjusted returns. Above 2.0 = excellent. Named after Nobel laureate William Sharpe.',
        },
        {
            name: 'Max Drawdown',
            emoji: '🕳️',
            simple: 'The worst fall from the top. If your piggy bank went from ₹100 to ₹60, the max drawdown is -40%. It\'s the scariest drop you would have experienced. Smaller drawdown = less heart-attack moments!',
            practice: 'A stock with -50% max drawdown needs +100% to recover. Protecting against deep drawdowns is crucial for long-term wealth building.',
        },
        {
            name: 'Return Consistency',
            emoji: '📅',
            simple: 'Does this stock go up most months, or does it jump around randomly? If 8 out of 12 months were positive, consistency is 67%. Like a student who scores well in every exam vs one who aces some but fails others.',
            practice: 'A stock with 8/12 positive months (67% consistency) is more predictable and less stressful to hold than one that\'s highly volatile.',
        },
        {
            name: 'Momentum Acceleration',
            emoji: '🚀',
            simple: 'Is the stock getting faster or slowing down? If last month\'s gain was bigger than the 3-month average gain, momentum is accelerating — like a car pressing the gas pedal harder! Decelerating = foot off the gas.',
            practice: 'Accelerating momentum (recent returns > average returns) often precedes continued outperformance. Decelerating momentum = early warning sign.',
        },
        {
            name: 'Volume-Price Divergence',
            emoji: '🔀',
            simple: 'If the price is going up BUT volume is going down, something\'s fishy — fewer people are supporting the move. It\'s like a politician getting cheers from a shrinking crowd. Price and volume should agree!',
            practice: 'When price rises but volume falls, the rally may be losing steam. Volume-price confirmation is a core principle of technical analysis (Charles Dow, 1900s).',
        },
        {
            name: 'Serial Autocorrelation',
            emoji: '🔗',
            simple: 'Does this week predict next week? Positive autocorrelation means "if it went up this week, it\'ll probably go up next week too" — trends continue. Negative means it zig-zags. Like a weather pattern: sunny days tend to come in streaks!',
            practice: 'Positive autocorrelation = trending behavior. Negative = mean-reverting. Helps distinguish trending stocks from choppy ones.',
        },
        {
            name: 'Momentum Score',
            emoji: '🏅',
            simple: 'All 7 momentum signals rolled into one score from 0 to 100. Think of it as: "Is this stock on a hot winning streak AND running smoothly?" High score = yes on both counts!',
            practice: 'Combining multiple momentum signals (returns, risk, consistency, acceleration) into one score gives a more robust view than any single metric.',
            gauge: { low: 0, high: 100, labels: ['Losing', 'Mixed', 'Winning'] },
        },
    ],
},

// ──────── Chapter 6 ────────
{
    id: 'ml',
    emoji: '🤖',
    title: 'The Robot\'s Opinion',
    subtitle: 'Teaching computers to predict which stocks will do well',
    color: '#DDA0DD',
    terms: [
        {
            name: 'Machine Learning (ML)',
            emoji: '🧠',
            simple: 'Instead of writing rules like "buy if PE < 20", we show the computer thousands of examples: "Here\'s what good stocks looked like before they went up." The computer figures out the patterns by itself — like training a puppy with treats!',
            practice: 'ML models can process 20–30+ features simultaneously to predict which stocks will outperform over the next 60–90 days.',
        },
        {
            name: 'Random Forest',
            emoji: '🌲',
            simple: 'Imagine asking 200 friends whether a stock will go up. But each friend only sees part of the information (like different clue cards). They all vote, and the majority wins. That\'s Random Forest — wisdom of the crowd! Even if some friends are wrong, the group is usually right.',
            practice: 'Typically 100–500 trees. Each tree sees a random subset of features and data. Robust against overfitting and handles noisy financial data well.',
        },
        {
            name: 'XGBoost',
            emoji: '🎯',
            simple: 'A student who takes a test, sees what they got wrong, studies those mistakes, takes another test, studies new mistakes... and repeats 200 times! Each round, the student gets better at the questions they previously missed. That\'s XGBoost — learning from mistakes!',
            practice: 'The most popular algorithm in Kaggle competitions. Gradient boosting with regularization. Often the strongest individual model for tabular financial data.',
        },
        {
            name: 'Logistic Regression',
            emoji: '📏',
            simple: 'The simplest robot. It draws a straight line to separate "good stocks" from "bad stocks" based on their features. Like sorting apples by weight — everything above 200g goes to the "big apples" box. Simple but surprisingly effective!',
            practice: 'Despite its simplicity, logistic regression is a strong baseline. It\'s interpretable — you can see exactly which features drive predictions.',
        },
        {
            name: 'Ensemble (Voting)',
            emoji: '🗳️',
            simple: 'Instead of trusting one robot, we ask THREE robots and combine their answers. Random Forest (crowd wisdom), XGBoost (learns mistakes), and Logistic Regression (simple patterns). Three heads are better than one — the combined prediction is more reliable!',
            practice: 'Combining multiple models (ensemble) almost always outperforms any single model. Common blending: 35% RF + 45% XGB + 20% LR.',
        },
        {
            name: 'Feature',
            emoji: '🧩',
            simple: 'The clues (pieces of information) we give to the robots. Like giving a detective clues to solve a case: "PE is 15, momentum score is 80, 3-month return is 12%..." Each clue helps the robot make a better prediction.',
            practice: 'Typical features: returns at multiple timeframes, valuation ratios, profitability metrics, volume, sector. Feature selection matters as much as model choice.',
        },
        {
            name: 'AUC (Accuracy Measure)',
            emoji: '✅',
            simple: 'A score from 0 to 1 showing how good the robot is at predicting. 0.5 = random guessing (coin flip). 1.0 = perfect prediction (never wrong). Good stock prediction models score ~0.85–0.92, which means they\'re right about 85–92% of the time!',
            practice: 'AUC of 0.85–0.92 is achievable for stock prediction models. Perfect prediction (1.0) is impossible in financial markets due to inherent randomness.',
        },
        {
            name: 'ML Score',
            emoji: '🔮',
            simple: 'The robot\'s final answer: a number from 0 to 100 showing how likely this stock is to do well in the next 3 months. 80+ = "the robots love it!" 30 = "the robots are skeptical."',
            practice: 'Top predictive features are typically: recent returns (3M, 6M), momentum score, and technical score. Fundamental metrics add less predictive power but improve robustness.',
            gauge: { low: 0, high: 100, labels: ['Unlikely', 'Maybe', 'Likely'] },
        },
    ],
},

// ──────── Chapter 7 ────────
{
    id: 'insider',
    emoji: '🕵️',
    title: 'Secret Signals',
    subtitle: 'What the people who know the company best are doing with their money',
    color: '#F0B27A',
    terms: [
        {
            name: 'Promoter Holding',
            emoji: '👨‍💼',
            simple: 'The company\'s founder/owner holds shares too! If the owner of a candy shop is buying more of their own candy, they probably know it\'s good stuff! High promoter holding (>50%) = the boss has skin in the game.',
            practice: 'SEBI requires minimum 25% public holding (so max promoter = 75%). Promoter holding above 50% is generally seen as a positive signal.',
        },
        {
            name: 'Promoter Holding Change (QoQ)',
            emoji: '📊',
            simple: 'Is the owner buying MORE shares or selling? If they\'re buying = they think the stock will go up. If they\'re selling = maybe they know something bad is coming. Like watching if the chef orders more ingredients (bullish) or starts packing up (bearish).',
            practice: 'Increasing promoter holding = strong confidence signal. Decreasing = potential warning. SEBI requires quarterly disclosure.',
        },
        {
            name: 'Mutual Fund Holding Change',
            emoji: '🏛️',
            simple: 'Mutual funds are managed by professional investors (like the smart kids in class). If they\'re buying more of a stock = professional seal of approval. If they\'re selling = the experts are worried.',
            practice: 'Professional fund managers do deep research. When mutual funds increase holdings quarter-over-quarter, it\'s institutional validation of the stock.',
        },
        {
            name: 'Insider Buys vs Sells (90-day)',
            emoji: '🔍',
            simple: 'In the last 90 days, did company insiders buy more shares or sell more? More buys than sells = they expect good things ahead. Like employees buying their own company\'s products — they believe in what they\'re making!',
            practice: 'Insider buy/sell ratio above 0.5 = net buying. Studies show insider buying is a more reliable signal than selling (insiders sell for many non-fundamental reasons).',
        },
        {
            name: 'Pledge Percentage',
            emoji: '⚠️',
            simple: 'Sometimes owners use their shares as collateral (like pawning jewelry) to borrow money. High pledge % is a WARNING sign — if the stock falls, the lender can force-sell those shares, pushing the price down further! It\'s a red flag.',
            practice: 'Pledge above 20% is a major red flag. During market crashes, pledged shares get force-sold, creating a vicious downward spiral. Several Indian companies have collapsed this way.',
        },
        {
            name: 'Unconventional Score',
            emoji: '🔑',
            simple: 'Combining all the insider secret signals into one score from 0 to 100. It answers: "Are the people who know this company best acting like it\'s going to do well?"',
            practice: 'These "smart money" signals complement traditional analysis. Typically weighted 5–10% in composite scoring models.',
            gauge: { low: 0, high: 100, labels: ['Insiders worried', 'Neutral', 'Insiders confident'] },
        },
    ],
},

// ──────── Chapter 8 ────────
{
    id: 'ranking',
    emoji: '🏆',
    title: 'The Final Grade',
    subtitle: 'Combining everything into one score — and checking for tricks',
    color: '#E74C3C',
    terms: [
        {
            name: 'Final Score (Composite)',
            emoji: '📊',
            simple: 'The ultimate report card! Like in school where your final grade combines Math (25%), Science (20%), English (20%), Computer (25%), and Art (10%) — the final score combines all five types of analysis into one number from 0 to 100.',
            practice: 'A common blended approach: Fundamental (25%), Technical (20%), Momentum (20%), ML/Quantitative (25%), Alternative signals (10%).',
            gauge: { low: 0, high: 100, labels: ['Avoid', 'Average', 'Top Pick'] },
        },
        {
            name: 'Regime Tilt',
            emoji: '🎚️',
            simple: 'In sunny weather (Bull market), we give bonus points to fast, exciting stocks (momentum). In stormy weather (Bear market), we give bonus points to safe, steady stocks (value & quality). The market weather affects what type of stocks do best!',
            practice: 'In bull markets, momentum and growth stocks outperform. In bear markets, value and quality factors dominate. Adjusting weights to the regime improves returns.',
        },
        {
            name: 'Cyclicality Penalty',
            emoji: '🎡',
            simple: 'Some businesses go up and down with the economy — like an ice cream shop that\'s busy in summer but empty in winter. These "cyclical" stocks can look cheap at the peak (trap!). If a cyclical stock seems too cheap with too-high growth, we cut its score.',
            practice: 'Cyclical sectors: Metals, Energy, Chemicals, Infrastructure. A "cheap" PE during peak earnings is a classic value trap. Analysts apply 20–30% haircuts.',
        },
        {
            name: 'Run-Up Risk Penalty',
            emoji: '⚡',
            simple: 'If a stock has already gone up 80% from its lowest point this year, it might be tired and due for a rest. Like a runner who sprinted too fast — they might need to catch their breath (price correction).',
            practice: 'Stocks up 80%+ from their 52-week low face elevated correction risk. A 10–15% score penalty helps avoid buying at the top.',
        },
        {
            name: 'Divergence Penalty',
            emoji: '🔀',
            simple: 'Something smells fishy: a cyclical stock looks super cheap (low PE) but has super high momentum. That\'s unusual and often means the market knows something bad is coming. A caution cut is applied.',
            practice: 'When a cyclical stock looks "cheap" but has high momentum, the market may be pricing in a downturn that fundamentals haven\'t reflected yet.',
        },
        {
            name: 'Risk Flags',
            emoji: '🚩',
            simple: 'Three red flags that show up next to a stock: 🎡 Cyclicality risk, ⚡ Run-up risk, 🔀 Divergence risk. Like warning labels on food — the stock might still be good, but proceed with caution!',
            practice: 'Visual risk flags help investors quickly identify stocks with elevated risk, even if the overall score is high.',
        },
        {
            name: 'Sector Cap',
            emoji: '🧢',
            simple: 'We don\'t want all 50 top picks to be from the same sector! That\'s like putting all your eggs in one basket. Sector cap limits how many stocks from one sector can appear — so your picks are diversified across different industries.',
            practice: 'Limiting any single sector to ~30% of portfolio weight ensures diversification. Without sector caps, top picks often cluster in one hot sector.',
        },
        {
            name: 'Top 50 Picks',
            emoji: '👑',
            simple: 'The 50 highest-scoring stocks out of all the candidates — the cream of the crop! Like the top 50 students in a school of thousands. These are the recommended picks.',
            practice: 'Typically, analysts select the top 30–50 stocks as their "buy list", ensuring representation across market cap segments.',
        },
        {
            name: 'Rank',
            emoji: '🥇',
            simple: 'Each stock\'s position in the top list. Rank 1 = the best stock according to the scoring model. Rank 50 = still in the top 50, but the 50th best. Like class rank — everyone wants to be #1!',
            practice: 'Rankings are computed separately for each market cap segment (Large/Mid/Small) to ensure balanced representation.',
        },
    ],
},

// ──────── Chapter 9 ────────
{
    id: 'economy',
    emoji: '🌤️',
    title: 'Weather Forecast for Markets',
    subtitle: 'Checking if it\'s sunny, cloudy, or stormy for investing',
    color: '#85C1E9',
    terms: [
        {
            name: 'GDP Growth',
            emoji: '🏗️',
            simple: 'How fast the whole country\'s economy is growing. If India\'s GDP grows 7%, it means the country produced 7% more stuff this year. Fast growth = companies sell more = stocks go up! Slow growth = harder times.',
            practice: 'India\'s GDP growth averaging 6–7% is considered healthy. Above 7.5% = strong expansion. Below 4% = slowdown warning.',
        },
        {
            name: 'Inflation (CPI)',
            emoji: '🎈',
            simple: 'When prices keep going up — your ₹10 ice cream now costs ₹12! A little inflation (3-5%) is normal and healthy. Too much (>7%) is bad because everything gets expensive and the central bank has to raise rates.',
            practice: 'RBI targets 4% (±2%). Inflation above 6% typically triggers rate hikes, which hurt stock markets.',
        },
        {
            name: 'Repo Rate',
            emoji: '🏦',
            simple: 'The interest rate at which banks borrow from the RBI (India\'s central bank). When it\'s low, loans are cheap → people buy more → businesses grow → stocks go up! When it\'s high, everything slows down.',
            practice: 'RBI\'s repo rate directly affects borrowing costs. Rate cuts are bullish for stocks; rate hikes are bearish.',
        },
        {
            name: 'FII / DII Flows',
            emoji: '💸',
            simple: 'FII = Foreign investors (people from other countries). DII = Indian investors. When foreigners pour money INTO India, it pushes stock prices up. When they pull money OUT, prices drop. It\'s like tourists visiting vs leaving a city!',
            practice: 'FII outflows often precede market corrections. Sustained FII selling is one of the strongest bear market warning signals.',
        },
        {
            name: 'India VIX (Fear Index)',
            emoji: '😱',
            simple: 'A fear meter for the market! Low VIX (<15) = everyone is calm and relaxed (sometimes TOO relaxed — complacency!). High VIX (>25) = people are scared and panicking. Very low VIX before a rise might mean the calm before a storm.',
            practice: 'India VIX below 12 = complacency (calm before storm). Above 20 = high fear. Extreme spikes often coincide with market bottoms.',
        },
        {
            name: 'Crude Oil Price',
            emoji: '🛢️',
            simple: 'India imports most of its oil. When oil is expensive, companies pay more for fuel and transportation, cutting into profits. Cheap oil = good for India! Like gas prices — when fuel is expensive, running your lemonade delivery truck costs more.',
            practice: 'India imports ~85% of its crude oil. Prices above $85/barrel squeeze corporate margins and weaken the rupee.',
        },
        {
            name: 'USD/INR (Rupee Strength)',
            emoji: '💱',
            simple: 'How many rupees you need to buy 1 US dollar. If the rupee weakens (needs MORE rupees per dollar), imports get expensive and foreign investors leave. Like if your currency becomes worth less at the game shop exchange counter.',
            practice: 'A weakening rupee hurts importers, triggers FII outflows, and increases inflation. Depreciation >3.5% annually is a warning sign.',
        },
        {
            name: 'Economy Score',
            emoji: '📊',
            simple: 'All the economic weather signals combined into one number from 0 to 100. High score = sunny economy, great for investing! Low score = stormy economy, be careful with your money.',
            practice: 'A composite macro score typically weights: GDP (20%), Inflation (20%), Interest rates (15%), Capital flows (20%), Currency (10%), Commodities (15%).',
            gauge: { low: 0, high: 100, labels: ['Stormy 🌧️', 'Cloudy ☁️', 'Sunny ☀️'] },
        },
        {
            name: 'Market Regime (Bull / Bear / Neutral)',
            emoji: '🐂',
            simple: 'Bull market 🐂 = prices rising, everyone happy (like a charging bull lifting prices with its horns). Bear market 🐻 = prices falling, everyone worried (like a bear swiping prices down). Neutral = neither, just waiting.',
            practice: 'Knowing the current regime (Bull/Bear/Neutral) helps you adjust your strategy — aggressive in bull markets, defensive in bear markets.',
        },
        {
            name: 'Bear Probability',
            emoji: '🐻',
            simple: 'A percentage (0-100%) showing how likely a bear market is in the next few months. Like a weather app saying "60% chance of rain tomorrow." Below 20% = relax. Above 60% = carry an umbrella (be defensive)!',
            practice: 'Combining 8+ macro warning signals gives a probabilistic estimate. When 3+ signals turn red simultaneously, the warning strengthens significantly.',
            gauge: { low: 0, high: 100, labels: ['LOW 😎', 'MODERATE 🤔', 'HIGH 😰'] },
        },
        {
            name: 'Sector Rotation',
            emoji: '🔄',
            simple: 'Different sectors take turns doing well — like seasons. First banks do well (spring), then IT (summer), then metals (autumn). Smart investors try to rotate into the sector that\'s about to bloom next!',
            practice: 'The four phases: ACCUMULATION (smart money buying), MARKUP (prices rising), DISTRIBUTION (smart money selling), MARKDOWN (prices falling).',
        },
    ],
},

// ──────── Chapter 10 ────────
{
    id: 'toolkit',
    emoji: '🧰',
    title: 'Your Money Toolkit',
    subtitle: 'Essential tools and strategies every investor should know',
    color: '#82E0AA',
    terms: [
        {
            name: 'Portfolio Builder',
            emoji: '🏗️',
            simple: 'Tell a tool how much money you want to invest and for how long, and it builds a dream team of stocks for you! Like a cricket coach picking the best 11 players for a match — balanced across batting, bowling, and fielding.',
            practice: 'Key principles: diversify across sectors, weight by conviction, match to your time horizon. Short-term favors momentum; long-term favors fundamentals.',
        },
        {
            name: 'Moonshot Picks',
            emoji: '🌙',
            simple: 'Risky but exciting stocks that could double your money (or lose a lot!). These are the underdogs — smaller companies that have explosive potential. Like betting on a newcomer who might become the next superstar!',
            practice: 'Small-cap stocks with strong momentum and technical signals can deliver outsized returns (2–10×). Limit moonshots to 5–10% of your total portfolio.',
        },
        {
            name: 'Swing Trades',
            emoji: '🏄',
            simple: 'Short-term trades lasting 1-25 days. Like surfing — you catch a wave (a short price move) and ride it for profit! Four types: Oversold Bounce 🔵 (catching a fall), Breakout 🟢 (riding a surge), Mean Reversion 🟡 (rubber band snap-back), Momentum 🟠 (riding the trend).',
            practice: '4 common setups: Oversold Bounce (RSI <35), Breakout (new highs + volume), Mean Reversion (Z-score <-1), Momentum Continuation (trending + moderate RSI).',
        },
        {
            name: 'Backtesting',
            emoji: '⏪',
            simple: 'Testing "would my strategy have worked in the past?" Like rewinding time: "If I had picked these stocks 6 months ago, would I have beaten the market?" It validates that the scoring system actually predicts good returns!',
            practice: 'Always backtest before deploying a strategy. Common approaches: Equal Weight, Score Weighted, and Sector Capped. Compare against Nifty 50 at multiple time horizons.',
        },
        {
            name: 'Alpha',
            emoji: '🏅',
            simple: 'How much you beat the benchmark (Nifty 50) by. If Nifty returned 10% and your picks returned 15%, your alpha is +5%. It\'s the bragging number — "I beat the market by 5%!" Negative alpha = market beat you.',
            practice: 'Alpha is the holy grail of investing. Consistent positive alpha over multiple time periods validates any stock-picking methodology.',
        },
        {
            name: 'Hit Rate',
            emoji: '🎯',
            simple: 'Out of all your picks, how many went up? If 35 out of 50 stocks made money, hit rate is 70%. It doesn\'t measure HOW MUCH you made, just how often you were right. A good hit rate above 50% means more picks went up than down.',
            practice: 'A hit rate above 55% with good risk-reward per trade is enough to be profitable. Even top fund managers have hit rates of 55–65%.',
        },
        {
            name: 'Hold / Sell / Accumulate',
            emoji: '💼',
            simple: 'For each stock you own, the analysis tells you what to do! HOLD 🟡 = keep it, wait and watch. SELL 🔴 = the signals say it\'s time to exit. ACCUMULATE 🟢 = buy more, it looks great!',
            practice: 'Systematic hold/sell/accumulate decisions use: trend (SMA), RSI, MACD, Z-score, fundamentals, momentum, and market regime signals.',
        },
        {
            name: '5-Year Projection',
            emoji: '🔭',
            simple: 'Where could this stock\'s price be in 5 years? Three scenarios: Pessimistic (if things go badly), Base (most likely), and Optimistic (if everything goes great). Like a weather forecast but for your stock\'s price!',
            practice: 'Projection formula: Future Price = Current EPS × (1 + growth rate)^years × projected PE. Always model 3 scenarios: pessimistic, base, optimistic.',
        },
        {
            name: 'Rebalancing',
            emoji: '⚖️',
            simple: 'Over time, some stocks grow faster than others, making your portfolio lopsided. Rebalancing is like rearranging books on a shelf so each gets equal space. Sell some of the ones that grew too big, buy more of the small ones!',
            practice: 'Rebalance when any position drifts >5% from target. Two popular approaches: Equal Weight and Score Weighted. Rebalancing forces you to buy low and sell high.',
        },
        {
            name: 'Mutual Funds',
            emoji: '🏦',
            simple: 'Instead of picking individual stocks yourself, you give money to a professional fund manager who picks for you! It\'s like hiring a chef instead of cooking yourself. India has over 1,500 mutual funds to choose from.',
            practice: 'Over 1,500 Direct Growth mutual funds available in India. Scored by returns (45%), consistency (25%), and risk-adjusted performance (30%) within sub-category.',
        },
        {
            name: 'Goal Planner',
            emoji: '🎯',
            simple: 'Tell a tool "I have ₹1 lakh and want ₹5 lakh in 10 years" and it tells you if that\'s achievable, what mix of investments you need (stocks, mutual funds, FDs), and shows a year-by-year projection chart!',
            practice: 'Goal-based investing: define target amount and timeline → compute required CAGR → check feasibility → allocate across FDs, debt MFs, equity MFs, and direct equity.',
        },
        {
            name: 'Alerts',
            emoji: '🔔',
            simple: 'Like a notification on your phone! Alerts tell you when something important happens: a stock\'s score changed a lot, a stock fell enough to buy, earnings results are coming up, or your portfolio needs rebalancing.',
            practice: 'Key alerts to track: significant score changes, rank movements, price drops on fundamentally strong stocks, regime changes, and upcoming earnings dates.',
        },
    ],
},

]; // end CHAPTERS

// ═══════════════════════════════════════════════════════
// RENDERING FUNCTIONS
// ═══════════════════════════════════════════════════════

function loadTutorial() {
    if (tutorialRendered) return;
    tutorialRendered = true;

    const container = document.getElementById('learnContent');
    if (!container) return;

    let html = '';

    // Chapter navigation grid
    html += renderChapterNav();

    // Full chapter sections
    CHAPTERS.forEach((ch, idx) => {
        html += renderChapter(ch, idx);
    });

    container.innerHTML = html;
}

function renderChapterNav() {
    let html = '<div class="tut-chapter-grid">';
    CHAPTERS.forEach((ch, idx) => {
        html += `<div class="tut-chapter-card" style="--tut-color:${ch.color}"
                      onclick="scrollToChapter(${idx})">
            <span class="tut-chapter-emoji">${ch.emoji}</span>
            <div class="tut-chapter-num">Chapter ${idx + 1}</div>
            <div class="tut-chapter-title">${ch.title}</div>
            <div class="tut-chapter-subtitle">${ch.subtitle}</div>
            <span class="tut-chapter-badge">${ch.terms.length} terms</span>
        </div>`;
    });
    html += '</div>';
    return html;
}

function renderChapter(ch, idx) {
    let html = `<div class="tut-chapter-section" id="tut-chapter-${idx}">`;

    // Header (clickable to toggle)
    html += `<div class="tut-chapter-section-header" style="--tut-color:${ch.color}" onclick="toggleChapter(${idx})">
        <span class="tut-section-emoji">${ch.emoji}</span>
        <div class="tut-section-info">
            <div class="tut-section-title">Chapter ${idx + 1}: ${ch.title}</div>
            <div class="tut-section-subtitle">${ch.subtitle}</div>
        </div>
        <span class="tut-section-badge">${ch.terms.length} terms</span>
        <span class="tut-section-chevron">&#9660;</span>
    </div>`;

    // Collapsible body (hidden by default)
    html += '<div class="tut-chapter-body">';

    // Term cards grid
    html += '<div class="tut-term-grid">';
    for (const term of ch.terms) {
        html += renderTermCard(term, ch.color);
    }
    html += '</div>';

    // Back to chapters link
    html += `<a class="tut-back-link" onclick="backToChapterNav()">&#11014; Back to chapters</a>`;

    html += '</div>'; // end body

    html += '</div>';
    return html;
}

function renderTermCard(term, color) {
    let html = `<div class="tut-term-card" style="--tut-color:${color}">`;

    // Header
    html += `<div class="tut-term-header">
        <span class="tut-term-emoji">${term.emoji}</span>
        <span class="tut-term-name">${term.name}</span>
    </div>`;

    // Simple explanation
    html += `<div class="tut-term-simple-label">In simple words:</div>
             <div class="tut-term-simple">${term.simple}</div>`;

    // Optional gauge
    if (term.gauge) {
        const g = term.gauge;
        html += `<div class="tut-gauge">
            <div class="tut-gauge-track">
                <div class="tut-gauge-bar"></div>
                <div class="tut-gauge-labels">
                    <span>${g.labels[0]}</span>
                    <span>${g.labels[1]}</span>
                    <span>${g.labels[2]}</span>
                </div>
            </div>
        </div>`;
    }

    // Why it matters (practical context)
    html += `<div class="tut-term-app">
        <div class="tut-term-app-label">Why it matters:</div>
        ${term.practice}
    </div>`;

    html += '</div>';
    return html;
}

function scrollToChapter(idx) {
    // Called from chapter nav cards — scroll first, then expand
    const section = document.getElementById('tut-chapter-' + idx);
    if (!section) return;

    if (section.classList.contains('tut-open')) {
        section.classList.remove('tut-open');
        return;
    }

    // Scroll while section is still collapsed (stable document height)
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // Open AFTER scroll settles — avoids fighting the height transition
    setTimeout(() => {
        section.classList.add('tut-open');
    }, 400);
}

function toggleChapter(idx) {
    // Called from section headers — user is already here, just toggle
    const section = document.getElementById('tut-chapter-' + idx);
    if (!section) return;
    section.classList.toggle('tut-open');
}

function backToChapterNav() {
    // Collapse the chapter we're in
    const openSections = document.querySelectorAll('.tut-chapter-section.tut-open');
    openSections.forEach(s => s.classList.remove('tut-open'));
    // Scroll to top
    const el = document.getElementById('learnContent');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Expose globally for index.html to call with IntersectionObserver wrapping
// If loaded standalone (no custom init), auto-initialize on DOM ready
if (typeof window !== 'undefined' && !window.__tutorialInitOverride) {
    document.addEventListener('DOMContentLoaded', loadTutorial);
}
