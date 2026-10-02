<!DOCTYPE html>
<html lang="zh-TW">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <title>陣營風雲：20人隨機分隊與身分抽卡器</title>
  
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  
  <!-- React 18 & ReactDOM -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js"></script>
  
  <!-- Babel Standalone (瀏覽器即時編譯 JSX) -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/7.23.10/babel.min.js"></script>
  
  <!-- Lucide Icons (Vanilla) -->
  <script src="https://unpkg.com/lucide@latest"></script>

  <!-- Google Fonts: Inter & Noto Sans TC -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800;900&family=Noto+Sans+TC:wght@400;600;700;900&display=swap" rel="stylesheet">

  <style>
    body {
      font-family: 'Inter', 'Noto Sans TC', -apple-system, BlinkMacSystemFont, sans-serif;
      user-select: none;
      -webkit-user-select: none;
      -webkit-touch-callout: none;
    }
    
    @keyframes pulse-glow {
      0%, 100% { opacity: 0.6; transform: scale(1); }
      50% { opacity: 0.9; transform: scale(1.03); }
    }
    .animate-pulse-glow {
      animation: pulse-glow 3s infinite ease-in-out;
    }

    /* 隱藏滾動條但保持滑動 */
    .no-scrollbar::-webkit-scrollbar {
      display: none;
    }
    .no-scrollbar {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  </style>
</head>
<body class="bg-slate-950 text-slate-100 min-h-screen selection:bg-amber-500 selection:text-black">
  <div id="root"></div>

  <script type="text/babel">
    const { useState, useEffect, useMemo, useRef } = React;

    // 音效合成器 (使用 Web Audio API，無需外載任何音訊檔)
    const playAudio = (type = 'click') => {
      try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (!AudioCtx) return;
        const ctx = new AudioCtx();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);

        const now = ctx.currentTime;
        if (type === 'click') {
          osc.frequency.setValueAtTime(600, now);
          osc.frequency.exponentialRampToValueAtTime(800, now + 0.05);
          gain.gain.setValueAtTime(0.12, now);
          gain.gain.exponentialRampToValueAtTime(0.01, now + 0.05);
          osc.start(now);
          osc.stop(now + 0.05);
        } else if (type === 'reveal') {
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(260, now);
          osc.frequency.exponentialRampToValueAtTime(520, now + 0.2);
          gain.gain.setValueAtTime(0.15, now);
          gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
          osc.start(now);
          osc.stop(now + 0.25);
        } else if (type === 'deal') {
          osc.type = 'sine';
          osc.frequency.setValueAtTime(520, now);
          osc.frequency.exponentialRampToValueAtTime(260, now + 0.15);
          gain.gain.setValueAtTime(0.2, now);
          gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
          osc.start(now);
          osc.stop(now + 0.15);
        } else if (type === 'bell') {
          osc.frequency.setValueAtTime(880, now);
          gain.gain.setValueAtTime(0.25, now);
          gain.gain.exponentialRampToValueAtTime(0.01, now + 0.6);
          osc.start(now);
          osc.stop(now + 0.6);
        }
      } catch (e) {
        // 音訊被瀏覽器安全性政策阻擋時安全靜音
      }
    };

    // 內建三種經典陣營主題角色庫
    const PRESET_DECKS = {
      cyber_agents: {
        id: 'cyber_agents',
        name: '特工諜影 (科技對決)',
        desc: '紅隊指揮部 vs 藍隊暗影組織，暗藏刺客、駭客與雙面間諜。',
        roles: [
          { name: '總指揮官', team: 'A', count: 1, power: '隊伍最高領袖，全體會議投票享雙倍票權。', desc: '隊伍核心大腦，需隱藏身分防止刺客擊殺。' },
          { name: '先鋒武裝', team: 'A', count: 2, power: '配備合金護盾，免疫首輪公決淘汰。', desc: '衝鋒在前掩護重要隊友。' },
          { name: '天眼駭客', team: 'A', count: 1, power: '每輪可查驗一名目標玩家的所屬陣營。', desc: '收集情報的關鍵特工。' },
          { name: '生化醫官', team: 'A', count: 1, power: '可指定守護一名隊員免於負面效果。', desc: '維持隊伍生存力的關鍵。' },
          { name: '外勤特工', team: 'A', count: 6, power: '一般人員，以集體智慧與觀察找出破綻。', desc: '紅隊堅固基石。' },
          
          { name: '暗影首領', team: 'B', count: 1, power: '每局有一次夜間強制指名對決權限。', desc: '敵對陣營的最高統帥。' },
          { name: '幽靈刺客', team: 'B', count: 2, power: '終局若能精準猜中敵方總指揮官，直接逆轉勝。', desc: '致命的精準狙擊者。' },
          { name: '信號干擾者', team: 'B', count: 1, power: '可封鎖一位玩家在該輪的技能發動。', desc: '戰術干擾核心。' },
          { name: '臥底間諜', team: 'B', count: 1, power: '向對手偽裝成對方的陣營成員。', desc: '雙面特工，挑撥敵方內部。' },
          { name: '深淵部隊', team: 'B', count: 6, power: '一般戰鬥員，配合首領號令展開伏擊。', desc: '藍隊隱密獠牙。' }
        ]
      },
      fantasy_kingdoms: {
        id: 'fantasy_kingdoms',
        name: '聖輝與暗月 (奇幻陣營)',
        desc: '聖輝王國 vs 暗月教團，經典王道奇幻職業陣營。',
        roles: [
          { name: '光輝聖騎士', team: 'A', count: 1, power: '神聖護盾：替身旁一人承受一次負面效果。', desc: '純白信條的捍衛者。' },
          { name: '大魔導士', team: 'A', count: 2, power: '真理之眼：查驗任意一人的真實身分。', desc: '洞察戰局的高階智者。' },
          { name: '光明祭司', team: 'A', count: 2, power: '神聖復甦：給予隊友額外發言與辯護時間。', desc: '治癒與信賴之源。' },
          { name: '皇家守衛', team: 'A', count: 6, power: '忠誠之刃：誓死保衛聖騎士。', desc: '堅毅勇敢的王國士兵。' },
          
          { name: '暗月領主', team: 'B', count: 1, power: '支配意志：在關鍵裁決時有一票否決權。', desc: '隱居暗處的月之王。' },
          { name: '夜幕死士', team: 'B', count: 2, power: '影刃突襲：可強迫指定目標進行一對一質詢。', desc: '穿梭黑夜的奪命者。' },
          { name: '狂亂術士', team: 'B', count: 2, power: '心靈迷霧：交換兩名玩家的發言順序。', desc: '操弄混亂的邪術師。' },
          { name: '暗夜追隨者', team: 'B', count: 6, power: '暗黑狂潮：集體行使審判投票。', desc: '冷酷無情的暗月信徒。' }
        ]
      },
      party_fun: {
        id: 'party_fun',
        name: '派對歡樂大亂鬥 (團康破冰)',
        desc: '幽默好玩的互動懲罰與任務，適合聚會、迎新破冰！',
        roles: [
          { name: '熾熱廚神', team: 'A', count: 1, power: '本回合指定一人替你喝一杯或做鬼臉。', desc: '紅隊掌杓老大。' },
          { name: '熱情麥克風', team: 'A', count: 2, power: '發言時必須用RAP或唱歌腔調表達。', desc: '氣氛擔當。' },
          { name: '爆米花達人', team: 'A', count: 8, power: '看熱鬧不嫌事大，投票只能跟風。', desc: '歡樂吃瓜群眾。' },
          
          { name: '冰霜調酒師', team: 'B', count: 1, power: '有權調配一杯懲罰特調或指定神秘指令。', desc: '藍隊冷面笑匠。' },
          { name: '冷面解說員', team: 'B', count: 2, power: '發言全程不能笑，笑了要接受小處罰。', desc: '極度嚴肅角色。' },
          { name: '氣氛破壞狂', team: 'B', count: 8, power: '發言時必須反對上一位講話的人。', desc: '專門唱反調。' }
        ]
      }
    };

    // 主要應用程式
    function App() {
      const [appMode, setAppMode] = useState('welcome'); // welcome, room_lobby, room_game, pass_play
      const [playerName, setPlayerName] = useState(() => '特工_' + Math.floor(100 + Math.random() * 900));
      const [soundEnabled, setSoundEnabled] = useState(true);

      // 房間連線與資料
      const [roomId, setRoomId] = useState('');
      const [inputRoomId, setInputRoomId] = useState('');
      const [isHost, setIsHost] = useState(true);
      const [selectedDeckKey, setSelectedDeckKey] = useState('cyber_agents');
      const [teamAName, setTeamAName] = useState('熾焰赤紅隊');
      const [teamBName, setTeamBName] = useState('深淵湛藍隊');

      // 玩家陣列 (預設產生 20 個槽位，隨時可增減)
      const [players, setPlayers] = useState([
        { id: 'p1', name: '特工阿豪 (房主)', team: null, role: null, seen: false, isHost: true },
        { id: 'p2', name: '特工小櫻', team: null, role: null, seen: false },
        { id: 'p3', name: '特工凱文', team: null, role: null, seen: false },
        { id: 'p4', name: '特工小雅', team: null, role: null, seen: false },
        { id: 'p5', name: '特工大飛', team: null, role: null, seen: false },
        { id: 'p6', name: '特工露露', team: null, role: null, seen: false },
        { id: 'p7', name: '特工阿傑', team: null, role: null, seen: false },
        { id: 'p8', name: '特工婷婷', team: null, role: null, seen: false },
        { id: 'p9', name: '特工小明', team: null, role: null, seen: false },
        { id: 'p10', name: '特工阿華', team: null, role: null, seen: false },
        { id: 'p11', name: '特工威廉', team: null, role: null, seen: false },
        { id: 'p12', name: '特工麗莎', team: null, role: null, seen: false },
        { id: 'p13', name: '特工安迪', team: null, role: null, seen: false },
        { id: 'p14', name: '特工晴晴', team: null, role: null, seen: false },
        { id: 'p15', name: '特工雷克斯', team: null, role: null, seen: false },
        { id: 'p16', name: '特工小雨', team: null, role: null, seen: false },
        { id: 'p17', name: '特工艾倫', team: null, role: null, seen: false },
        { id: 'p18', name: '特工潔西卡', team: null, role: null, seen: false },
        { id: 'p19', name: '特工浩克', team: null, role: null, seen: false },
        { id: 'p20', name: '特工茱莉亞', team: null, role: null, seen: false },
      ]);

      // 當前檢視玩家 (方便單機預覽或切換身分)
      const [activePlayerIndex, setActivePlayerIndex] = useState(0);
      const [peekCard, setPeekCard] = useState(false);
      const [showGodEye, setShowGodEye] = useState(false);
      const [copied, setCopied] = useState(false);

      // 計時器
      const [timerSec, setTimerSec] = useState(120);
      const [timerRunning, setTimerRunning] = useState(false);

      // 單機傳閱模式 (Pass & Play)
      const [passTotalCount, setPassTotalCount] = useState(20);
      const [passCurrentIdx, setPassCurrentIdx] = useState(0);
      const [passRevealed, setPassRevealed] = useState(false);
      const [passStage, setPassStage] = useState('passing'); // passing, finish
      const [passAssignedList, setPassAssignedList] = useState([]);

      const sound = (type) => {
        if (soundEnabled) playAudio(type);
      };

      // 計時器倒數邏輯
      useEffect(() => {
        let interval = null;
        if (timerRunning && timerSec > 0) {
          interval = setInterval(() => {
            setTimerSec(prev => {
              if (prev <= 1) {
                sound('bell');
                setTimerRunning(false);
                return 0;
              }
              return prev - 1;
            });
          }, 1000);
        }
        return () => clearInterval(interval);
      }, [timerRunning, timerSec]);

      // 產生 6 位隨機房間號
      const generateRoomCode = () => {
        return Math.floor(100000 + Math.random() * 900000).toString();
      };

      // 隨機洗牌均分兩隊 & 發放身分卡核心演算法
      const dealCardsAndTeams = (currentPlayersList) => {
        const total = currentPlayersList.length;
        if (total < 2) return currentPlayersList;

        // 1. 打亂玩家順序
        const shuffledPlayers = [...currentPlayersList].sort(() => Math.random() - 0.5);
        const half = Math.ceil(total / 2);

        // 2. 展開所選卡包的陣營角色池
        const currentDeck = PRESET_DECKS[selectedDeckKey]?.roles || PRESET_DECKS.cyber_agents.roles;
        const poolA = [];
        const poolB = [];

        currentDeck.forEach(role => {
          const count = role.count || 1;
          for (let i = 0; i < count; i++) {
            if (role.team === 'A') poolA.push({ ...role });
            else if (role.team === 'B') poolB.push({ ...role });
          }
        });

        // 隨機打亂卡池
        poolA.sort(() => Math.random() - 0.5);
        poolB.sort(() => Math.random() - 0.5);

        // 備用基本卡 (若人數超過預設卡包)
        const defaultRoleA = { name: '紅隊主力戰鬥員', team: 'A', power: '普通陣營成員，發揮投票權。', desc: '為紅隊奮勇作戰。' };
        const defaultRoleB = { name: '藍隊精英先鋒', team: 'B', power: '普通陣營成員，查察周遭線索。', desc: '為藍隊隱匿出擊。' };

        // 3. 分配隊伍與卡片（前 half 為紅隊，其餘為藍隊）
        const assigned = shuffledPlayers.map((player, idx) => {
          const isA = idx < half;
          const assignedRole = isA 
            ? (poolA.pop() || defaultRoleA)
            : (poolB.pop() || defaultRoleB);

          return {
            ...player,
            team: isA ? 'A' : 'B',
            teamName: isA ? teamAName : teamBName,
            role: assignedRole,
            seen: false
          };
        });

        return assigned;
      };

      // 啟動開房
      const handleCreateRoom = () => {
        sound('click');
        const code = generateRoomCode();
        setRoomId(code);
        setIsHost(true);
        // 替換第一名為自己輸入的暱稱
        setPlayers(prev => {
          const updated = [...prev];
          updated[0].name = playerName + ' (房主)';
          return updated;
        });
        setAppMode('room_lobby');
      };

      // 加入房間
      const handleJoinRoom = () => {
        sound('click');
        const code = inputRoomId.trim();
        if (!code) return;
        setRoomId(code);
        setIsHost(false);
        setAppMode('room_lobby');
      };

      // 房主啟動洗牌與分隊
      const handleStartGame = () => {
        sound('deal');
        const assigned = dealCardsAndTeams(players);
        setPlayers(assigned);
        setActivePlayerIndex(0);
        setTimerSec(180);
        setTimerRunning(false);
        setAppMode('room_game');
      };

      // 單機傳閱抽卡初始化
      const handleStartPassAndPlay = () => {
        sound('deal');
        const count = Math.max(4, Math.min(24, passTotalCount));
        const dummyPlayers = Array.from({ length: count }, (_, i) => ({
          id: `p_local_${i + 1}`,
          name: `玩家 #${i + 1}`
        }));

        const assigned = dealCardsAndTeams(dummyPlayers);
        // 打亂展示順序，避免先看的都是紅隊
        assigned.sort(() => Math.random() - 0.5);

        setPassAssignedList(assigned);
        setPassCurrentIdx(0);
        setPassRevealed(false);
        setPassStage('passing');
        setAppMode('pass_play');
      };

      // 複製房間代碼
      const copyCode = () => {
        sound('click');
        const text = `【陣營風雲】遊戲房間碼：${roomId}\n快開啟網頁一起抽卡對決！`;
        try {
          const el = document.createElement('textarea');
          el.value = text;
          document.body.appendChild(el);
          el.select();
          document.execCommand('copy');
          document.body.removeChild(el);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        } catch (e) {
          console.error(e);
        }
      };

      // ==========================================
      // 頁面 1：歡迎首頁
      // ==========================================
      if (appMode === 'welcome') {
        return (
          <div className="min-h-screen flex flex-col justify-between p-4 sm:p-6 max-w-4xl mx-auto">
            {/* 頂部 Header */}
            <header className="flex items-center justify-between py-4 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-rose-600 via-amber-500 to-indigo-600 p-[2px] flex items-center justify-center shadow-lg shadow-rose-900/30">
                  <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                    <span className="text-xl">⚔️</span>
                  </div>
                </div>
                <div>
                  <h1 className="font-black text-xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-amber-200 to-sky-400">
                    陣營風雲：身分對決
                  </h1>
                  <p className="text-xs text-slate-400">20人隨機均等分隊 & 機密防窺抽卡器</p>
                </div>
              </div>
              <button
                onClick={() => setSoundEnabled(!soundEnabled)}
                className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-xs font-semibold text-slate-300 transition"
              >
                {soundEnabled ? '🔊 音效開' : '🔇 靜音'}
              </button>
            </header>

            {/* 中間主體 */}
            <main className="my-8 flex-1 flex flex-col justify-center">
              <div className="text-center mb-8">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-rose-500/10 text-rose-300 border border-rose-500/20 mb-3">
                  🔥 支援 2 ~ 24 人（最佳 20 人 10 vs 10 陣營戰）
                </span>
                <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-3">
                  隨機平衡分隊，抽取你的<span className="text-amber-400">王牌身分</span>！
                </h2>
                <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto">
                  免下載安裝，瀏覽器直接開玩。一鍵均分成兩大陣營，隱密翻牌防窺機制讓臥底、刺客與指揮官滴水不漏！
                </p>
              </div>

              {/* 暱稱設定欄 */}
              <div className="max-w-md mx-auto w-full mb-8 bg-slate-900/80 border border-slate-800 rounded-2xl p-4 shadow-xl">
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  設定你的玩家暱稱
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    maxLength={10}
                    value={playerName}
                    onChange={(e) => setPlayerName(e.target.value)}
                    className="flex-1 bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-white font-bold focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="輸入暱稱..."
                  />
                  <button
                    onClick={() => {
                      sound('click');
                      setPlayerName('特工_' + Math.floor(100 + Math.random() * 900));
                    }}
                    className="px-3.5 py-2.5 bg-slate-800 hover:bg-slate-700 text-xs font-bold rounded-xl text-slate-300 transition"
                  >
                    隨機名
                  </button>
                </div>
              </div>

              {/* 模式卡片 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto w-full">
                {/* 模式 A：連線多機房模式 */}
                <div className="bg-gradient-to-b from-slate-900 to-slate-900/60 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-amber-500/40 transition">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center text-2xl mb-4">
                      🌐
                    </div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl font-black text-white">多人連線房間</h3>
                      <span className="text-[10px] font-bold bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded">
                        推薦
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                      建立 6 碼遊戲房，讓 20 位朋友用各自的手機加入。房主一鍵分隊，各自防窺抽卡！
                    </p>
                  </div>

                  <div className="space-y-3">
                    <button
                      onClick={handleCreateRoom}
                      className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-sm shadow-lg shadow-amber-500/20 active:scale-98 transition flex items-center justify-center gap-2"
                    >
                      👑 建立新房間 (當房主/主持)
                    </button>

                    <div className="flex gap-2 pt-2 border-t border-slate-800/80">
                      <input
                        type="text"
                        maxLength={6}
                        value={inputRoomId}
                        onChange={(e) => setInputRoomId(e.target.value.toUpperCase())}
                        placeholder="輸入 6 位房間碼"
                        className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-center font-mono tracking-widest text-white text-sm focus:outline-none focus:ring-1 focus:ring-sky-500"
                      />
                      <button
                        onClick={handleJoinRoom}
                        className="px-5 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs active:scale-98 transition"
                      >
                        加入
                      </button>
                    </div>
                  </div>
                </div>

                {/* 模式 B：單機輪流傳閱模式 */}
                <div className="bg-gradient-to-b from-slate-900 to-slate-900/60 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-indigo-500/40 transition">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center text-2xl mb-4">
                      📱
                    </div>
                    <h3 className="text-xl font-black text-white mb-1">單機傳閱抽卡</h3>
                    <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                      線下聚會或無網路環境時，只需 1 台手機，輪流傳給 20 位玩家長按翻牌確認身分。
                    </p>

                    <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-3 mb-4">
                      <div className="flex justify-between items-center text-xs mb-1">
                        <span className="text-slate-400">總參與人數：</span>
                        <span className="font-black text-indigo-400 text-sm">{passTotalCount} 人</span>
                      </div>
                      <input
                        type="range"
                        min={4}
                        max={24}
                        step={2}
                        value={passTotalCount}
                        onChange={(e) => setPassTotalCount(parseInt(e.target.value, 10))}
                        className="w-full accent-indigo-500 cursor-pointer"
                      />
                      <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                        <span>4人</span>
                        <span>12人</span>
                        <span className="text-indigo-400 font-bold">20人 (10v10)</span>
                        <span>24人</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleStartPassAndPlay}
                    className="w-full py-3.5 px-4 rounded-xl bg-slate-800 hover:bg-indigo-600 text-white font-bold text-sm active:scale-98 transition flex items-center justify-center gap-2"
                  >
                    ▶️ 開始單機傳閱分隊
                  </button>
                </div>
              </div>

              {/* 卡包切換 Bar */}
              <div className="mt-8 max-w-3xl mx-auto w-full bg-slate-900/50 border border-slate-800/80 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🃏</span>
                  <div>
                    <p className="text-[11px] text-slate-400">當前身分卡池包：</p>
                    <p className="text-sm font-black text-white">{PRESET_DECKS[selectedDeckKey]?.name}</p>
                  </div>
                </div>
                <div className="flex gap-1.5 flex-wrap">
                  {Object.keys(PRESET_DECKS).map(key => (
                    <button
                      key={key}
                      onClick={() => {
                        sound('click');
                        setSelectedDeckKey(key);
                      }}
                      className={`text-xs px-3 py-1.5 rounded-lg border transition font-bold ${
                        selectedDeckKey === key
                          ? 'bg-amber-500/20 border-amber-500/60 text-amber-300'
                          : 'border-slate-800 bg-slate-950/60 text-slate-400 hover:text-white'
                      }`}
                    >
                      {PRESET_DECKS[key].name.split(' ')[0]}
                    </button>
                  ))}
                </div>
              </div>
            </main>

            <footer className="text-center py-3 text-xs text-slate-600 border-t border-slate-900">
              陣營對決系統 • 支援純瀏覽器獨立運行 • 20人高彈性即時平衡分隊
            </footer>
          </div>
        );
      }

      // ==========================================
      // 頁面 2：等待大廳 (Room Lobby)
      // ==========================================
      if (appMode === 'room_lobby') {
        const total = players.length;

        return (
          <div className="min-h-screen flex flex-col justify-between bg-slate-950 p-4 sm:p-6">
            {/* Top Bar */}
            <header className="max-w-5xl mx-auto w-full flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    sound('click');
                    setAppMode('welcome');
                  }}
                  className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400 hover:text-white"
                >
                  ← 返回首頁
                </button>
                <div>
                  <span className="text-[10px] text-slate-500 uppercase tracking-widest">當前房間號</span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-2xl font-black text-amber-400">{roomId}</span>
                    <button
                      onClick={copyCode}
                      className="text-xs px-2.5 py-1 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 hover:bg-amber-500/20 font-bold"
                    >
                      {copied ? '✓ 已複製' : '複製代碼'}
                    </button>
                  </div>
                </div>
              </div>

              <div className="text-right">
                <p className="text-xs text-slate-400">目前就位人數</p>
                <p className="text-lg font-black text-emerald-400">
                  {total} <span className="text-xs text-slate-500">/ 20 人滿編</span>
                </p>
              </div>
            </header>

            {/* 大廳 20 人席位總覽 */}
            <main className="max-w-5xl mx-auto w-full my-6 flex-1 flex flex-col lg:flex-row gap-6">
              <div className="flex-1 bg-slate-900/50 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 mb-4">
                    <h2 className="font-black text-white text-base flex items-center gap-2">
                      👥 20 位玩家準備名冊
                    </h2>
                    <span className="text-xs text-slate-400">
                      兩隊將自動均分為 {Math.ceil(total / 2)} vs {Math.floor(total / 2)}
                    </span>
                  </div>

                  {/* 20人網格 */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-2.5 max-h-[460px] overflow-y-auto pr-1">
                    {players.map((p, idx) => (
                      <div
                        key={p.id}
                        className={`p-2.5 rounded-xl border flex flex-col justify-between ${
                          idx === 0
                            ? 'bg-amber-500/10 border-amber-500/40'
                            : 'bg-slate-950/70 border-slate-800/80'
                        }`}
                      >
                        <div className="flex items-center justify-between text-[10px] text-slate-500 mb-1">
                          <span className="font-mono">#{idx + 1}</span>
                          {idx === 0 && <span className="text-amber-400 font-bold">房主</span>}
                        </div>
                        <input
                          type="text"
                          value={p.name}
                          onChange={(e) => {
                            const val = e.target.value;
                            setPlayers(prev => prev.map((pl, i) => i === idx ? { ...pl, name: val } : pl));
                          }}
                          className="w-full bg-transparent text-xs font-bold text-white focus:outline-none focus:border-b border-amber-500 truncate"
                        />
                        <div className="mt-2 flex items-center gap-1.5 text-[9px] text-emerald-400 font-bold">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                          <span>準備就緒</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 房主啟動分隊按鈕 */}
                <div className="mt-6 pt-4 border-t border-slate-800">
                  <button
                    onClick={handleStartGame}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-rose-500 via-amber-500 to-orange-500 hover:from-rose-400 hover:to-orange-400 text-slate-950 font-black text-base shadow-xl shadow-orange-500/20 active:scale-98 transition flex items-center justify-center gap-2"
                  >
                    🎲 立即隨機分隊並發放身分卡！ (10 vs 10)
                  </button>
                </div>
              </div>

              {/* 右側：陣營名稱自訂 */}
              <div className="w-full lg:w-80 bg-slate-900/50 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between">
                <div>
                  <h3 className="font-black text-white text-sm pb-3 border-b border-slate-800 mb-4 flex items-center gap-2">
                    ⚙️ 兩軍陣營自訂
                  </h3>

                  <div className="space-y-4 mb-6">
                    <div>
                      <label className="text-xs font-bold text-rose-400 uppercase tracking-wider block mb-1">
                        🔴 陣營 A (紅隊名稱)
                      </label>
                      <input
                        type="text"
                        value={teamAName}
                        onChange={(e) => setTeamAName(e.target.value)}
                        className="w-full bg-slate-950 border border-rose-500/40 rounded-xl px-3 py-2 text-rose-200 text-xs font-bold focus:outline-none focus:ring-1 focus:ring-rose-500"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-sky-400 uppercase tracking-wider block mb-1">
                        🔵 陣營 B (藍隊名稱)
                      </label>
                      <input
                        type="text"
                        value={teamBName}
                        onChange={(e) => setTeamBName(e.target.value)}
                        className="w-full bg-slate-950 border border-sky-500/40 rounded-xl px-3 py-2 text-sky-200 text-xs font-bold focus:outline-none focus:ring-1 focus:ring-sky-500"
                      />
                    </div>
                  </div>

                  <div className="bg-slate-950/80 border border-slate-800/80 rounded-xl p-3">
                    <p className="text-xs font-bold text-slate-300 mb-1">已選卡包：</p>
                    <p className="text-xs font-black text-amber-400 mb-1">{PRESET_DECKS[selectedDeckKey]?.name}</p>
                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      {PRESET_DECKS[selectedDeckKey]?.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-4 p-3 rounded-xl bg-slate-950/40 border border-slate-800/50 text-[11px] text-slate-500">
                  ✨ 提示：若 20 人在現場，可讓每個人在清單上修改自己的名字，點擊分隊後即可依序或各自翻牌！
                </div>
              </div>
            </main>
          </div>
        );
      }

      // ==========================================
      // 頁面 3：遊戲進行與防窺抽卡 (Room Game)
      // ==========================================
      if (appMode === 'room_game') {
        const currentPlayer = players[activePlayerIndex] || players[0];
        const isTeamA = currentPlayer.team === 'A';
        const role = currentPlayer.role;

        return (
          <div className="min-h-screen flex flex-col justify-between bg-slate-950 p-4 sm:p-6">
            {/* Top Bar: Timer & DM Controls */}
            <header className="max-w-4xl mx-auto w-full flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="font-mono text-sm text-amber-400 font-bold">房間 #{roomId}</span>
              </div>

              {/* DM 倒數計時器 */}
              <div className="flex items-center gap-2">
                <div className="bg-slate-900 border border-slate-800 rounded-xl px-3 py-1 flex items-center gap-2 text-xs font-mono font-bold text-white">
                  <span>⏱️ {Math.floor(timerSec / 60)}:{(timerSec % 60).toString().padStart(2, '0')}</span>
                  <button
                    onClick={() => {
                      sound('click');
                      setTimerRunning(!timerRunning);
                    }}
                    className="px-1.5 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-[10px]"
                  >
                    {timerRunning ? '暫停' : '開始'}
                  </button>
                </div>

                <button
                  onClick={() => {
                    sound('click');
                    setShowGodEye(!showGodEye);
                  }}
                  className={`px-3 py-1 rounded-xl border text-xs font-bold transition ${
                    showGodEye
                      ? 'bg-rose-500/20 border-rose-500 text-rose-300'
                      : 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  {showGodEye ? '👁️ 關閉上帝視角' : '👁️ 上帝視角 (DM)'}
                </button>
              </div>
            </header>

            {/* 主內容：防窺卡牌 */}
            <main className="max-w-lg mx-auto w-full my-6 flex-1 flex flex-col items-center justify-center">
              {/* 切換檢視席位 (方便主持或單機切換) */}
              <div className="w-full flex items-center justify-between bg-slate-900/60 border border-slate-800 rounded-xl p-2.5 mb-4">
                <span className="text-xs text-slate-400 font-medium">當前檢視席位：</span>
                <select
                  value={activePlayerIndex}
                  onChange={(e) => {
                    sound('click');
                    setActivePlayerIndex(parseInt(e.target.value, 10));
                    setPeekCard(false);
                  }}
                  className="bg-slate-950 border border-slate-700 rounded-lg px-2.5 py-1 text-xs font-bold text-amber-400 focus:outline-none"
                >
                  {players.map((p, idx) => (
                    <option key={p.id} value={idx}>
                      #{idx + 1} {p.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* 翻牌保護提示 */}
              <div className="mb-3 text-center">
                <span className="inline-flex items-center gap-1 text-[11px] text-slate-400 bg-slate-900 border border-slate-800 px-3 py-1 rounded-full">
                  🛡️ 防窺保護：請按住卡片不放翻閱，鬆開立刻隱藏！
                </span>
              </div>

              {/* 卡牌本體 */}
              <div
                onMouseDown={() => {
                  sound('reveal');
                  setPeekCard(true);
                }}
                onMouseUp={() => setPeekCard(false)}
                onTouchStart={() => {
                  sound('reveal');
                  setPeekCard(true);
                }}
                onTouchEnd={() => setPeekCard(false)}
                className={`w-full max-w-sm rounded-3xl p-1 transition-all duration-300 select-none shadow-2xl cursor-pointer ${
                  peekCard
                    ? (isTeamA ? 'bg-gradient-to-tr from-rose-600 via-orange-500 to-amber-500 scale-[1.02]' : 'bg-gradient-to-tr from-sky-600 via-indigo-500 to-blue-500 scale-[1.02]')
                    : 'bg-gradient-to-tr from-slate-700 via-slate-800 to-slate-900 hover:scale-[1.01]'
                }`}
              >
                <div className="w-full bg-slate-950 rounded-[22px] p-6 min-h-[400px] flex flex-col justify-between text-center border border-slate-800">
                  {!peekCard ? (
                    /* 卡背：遮蔽狀態 */
                    <div className="flex-1 flex flex-col items-center justify-center py-6">
                      <div className="w-20 h-20 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-4xl mb-6 shadow-inner">
                        🔒
                      </div>
                      <h3 className="text-xl font-black text-white mb-2">機密身分已鎖定</h3>
                      <p className="text-xs text-slate-400 max-w-xs mb-8">
                        請確認身旁無人偷窺，長按下方按鈕翻開查看您的陣營與身分技能。
                      </p>
                      <div className="px-6 py-3 rounded-xl bg-amber-500 text-slate-950 font-black text-sm tracking-wider shadow-lg shadow-amber-500/20 animate-pulse">
                        按住查看身分
                      </div>
                    </div>
                  ) : (
                    /* 卡面：揭示狀態 */
                    <div className="flex-1 flex flex-col justify-between py-2">
                      <div>
                        {/* 陣營標籤 */}
                        <div
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black tracking-wider uppercase mb-4"
                          style={{
                            backgroundColor: isTeamA ? 'rgba(244, 63, 94, 0.2)' : 'rgba(14, 165, 233, 0.2)',
                            color: isTeamA ? '#fb7185' : '#38bdf8',
                            border: isTeamA ? '1px solid rgba(244, 63, 94, 0.4)' : '1px solid rgba(14, 165, 233, 0.4)'
                          }}
                        >
                          {isTeamA ? '🔥' : '💧'} {currentPlayer.teamName}
                        </div>

                        {/* 角色名稱 */}
                        <h2 className="text-3xl font-black text-white mb-2">{role?.name || '特工隊員'}</h2>
                        <p className="text-xs text-slate-400 italic mb-5">"{role?.desc}"</p>
                      </div>

                      {/* 技能與任務目標 */}
                      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 text-left mb-4 shadow-inner">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block mb-1">
                          ⚡ 專屬技能 / 陣營目標
                        </span>
                        <p className="text-xs text-slate-200 leading-relaxed font-medium">
                          {role?.power || '與隊友配合，在公決投票時找出潛伏的敵方特工！'}
                        </p>
                      </div>

                      <p className="text-[10px] text-slate-500 font-semibold">
                        ⚠️ 鬆開手指立即重新遮蔽
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* 上帝視角 (DM 面板) */}
              {showGodEye && (
                <div className="w-full mt-6 bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-2xl">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800 mb-3">
                    <h4 className="font-bold text-white text-xs flex items-center gap-1.5">
                      👁️ 上帝視角全覽名冊 (共 20 人)
                    </h4>
                    <span className="text-[10px] text-slate-400">10 vs 10</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    {/* 紅隊名冊 */}
                    <div className="bg-rose-950/20 border border-rose-900/40 rounded-xl p-2.5">
                      <p className="font-bold text-rose-400 mb-1.5 pb-1 border-b border-rose-900/40">
                        🔥 {teamAName} ({players.filter(p => p.team === 'A').length}人)
                      </p>
                      <div className="space-y-1 max-h-40 overflow-y-auto pr-1">
                        {players.filter(p => p.team === 'A').map(p => (
                          <div key={p.id} className="flex justify-between py-0.5">
                            <span className="text-white">{p.name}</span>
                            <span className="font-bold text-rose-300">{p.role?.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 藍隊名冊 */}
                    <div className="bg-sky-950/20 border border-sky-900/40 rounded-xl p-2.5">
                      <p className="font-bold text-sky-400 mb-1.5 pb-1 border-b border-sky-900/40">
                        💧 {teamBName} ({players.filter(p => p.team === 'B').length}人)
                      </p>
                      <div className="space-y-1 max-h-40 overflow-y-auto pr-1">
                        {players.filter(p => p.team === 'B').map(p => (
                          <div key={p.id} className="flex justify-between py-0.5">
                            <span className="text-white">{p.name}</span>
                            <span className="font-bold text-sky-300">{p.role?.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </main>

            {/* Footer 控制列 */}
            <footer className="max-w-4xl mx-auto w-full flex items-center justify-between pt-3 border-t border-slate-900">
              <button
                onClick={() => {
                  sound('click');
                  setAppMode('room_lobby');
                }}
                className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-bold text-slate-300 hover:text-white"
              >
                ← 返回大廳重新調度
              </button>
              <button
                onClick={handleStartGame}
                className="px-4 py-2 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/30 text-xs font-bold"
              >
                🔄 重新洗牌分隊
              </button>
            </footer>
          </div>
        );
      }

      // ==========================================
      // 頁面 4：單機傳閱抽卡 (Pass & Play)
      // ==========================================
      if (appMode === 'pass_play') {
        const total = passAssignedList.length;
        const current = passAssignedList[passCurrentIdx];
        const isTeamA = current?.team === 'A';

        return (
          <div className="min-h-screen flex flex-col justify-between bg-slate-950 p-4 sm:p-6">
            <header className="max-w-md mx-auto w-full flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="text-xs font-black text-indigo-400">📱 單機傳閱抽卡模式</span>
              <button
                onClick={() => setAppMode('welcome')}
                className="text-xs px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-400"
              >
                結束模式
              </button>
            </header>

            <main className="max-w-md mx-auto w-full my-6 flex-1 flex flex-col justify-center">
              {passStage === 'passing' ? (
                <div className="space-y-4">
                  <div className="bg-slate-900 border border-slate-800 rounded-xl p-2.5 flex items-center justify-between text-xs">
                    <span className="text-slate-400">傳閱進度：</span>
                    <span className="font-black text-indigo-400">
                      第 {passCurrentIdx + 1} 位 / 共 {total} 位玩家
                    </span>
                  </div>

                  {!passRevealed ? (
                    <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 text-center shadow-xl">
                      <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center text-3xl mx-auto mb-4">
                        🤝
                      </div>
                      <h3 className="text-xl font-black text-white mb-2">
                        請交給【第 {passCurrentIdx + 1} 位玩家】
                      </h3>
                      <p className="text-xs text-slate-400 mb-6">
                        請其他人不要偷看！由本人接過手機親自點擊按鈕查看身分。
                      </p>
                      <button
                        onClick={() => {
                          sound('reveal');
                          setPassRevealed(true);
                        }}
                        className="w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-sky-500 text-white font-black text-sm shadow-lg shadow-indigo-500/20 active:scale-98 transition"
                      >
                        我是本人，翻開我的身分
                      </button>
                    </div>
                  ) : (
                    <div
                      className="rounded-3xl p-1 shadow-2xl"
                      style={{
                        background: isTeamA
                          ? 'linear-gradient(to top right, #e11d48, #f59e0b)'
                          : 'linear-gradient(to top right, #0284c7, #6366f1)'
                      }}
                    >
                      <div className="bg-slate-950 rounded-[22px] p-6 text-center border border-slate-800">
                        <div
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase mb-3"
                          style={{
                            backgroundColor: isTeamA ? 'rgba(244, 63, 94, 0.2)' : 'rgba(14, 165, 233, 0.2)',
                            color: isTeamA ? '#fb7185' : '#38bdf8'
                          }}
                        >
                          {isTeamA ? '🔥' : '💧'} {current.teamName}
                        </div>

                        <h2 className="text-2xl font-black text-white mb-1">{current.role?.name}</h2>
                        <p className="text-xs text-slate-400 italic mb-4">"{current.role?.desc}"</p>

                        <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 text-left mb-6">
                          <span className="text-[10px] font-bold text-amber-400 block mb-1">⚡ 技能 / 目標</span>
                          <p className="text-xs text-slate-200">{current.role?.power}</p>
                        </div>

                        <button
                          onClick={() => {
                            sound('click');
                            if (passCurrentIdx + 1 < total) {
                              setPassCurrentIdx(passCurrentIdx + 1);
                              setPassRevealed(false);
                            } else {
                              setPassStage('finish');
                            }
                          }}
                          className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs"
                        >
                          記住身分了，交給下一位玩家 →
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 text-center shadow-xl">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center text-3xl mx-auto mb-4">
                    🎉
                  </div>
                  <h3 className="text-2xl font-black text-white mb-2">全體 {total} 位玩家已就位！</h3>
                  <p className="text-xs text-slate-400 mb-6">
                    兩大陣營身分均已發放完畢，勢均力敵！現在可以正式開始你們的桌遊對決或辯論審判。
                  </p>
                  <div className="space-y-2.5">
                    <button
                      onClick={handleStartPassAndPlay}
                      className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs"
                    >
                      重新分隊洗牌
                    </button>
                    <button
                      onClick={() => setAppMode('welcome')}
                      className="w-full py-3 rounded-xl bg-slate-800 text-slate-300 font-bold text-xs"
                    >
                      返回首頁
                    </button>
                  </div>
                </div>
              )}
            </main>

            <footer className="text-center py-2 text-xs text-slate-600 border-t border-slate-900">
              單機傳閱模式 • 適合線下聚會、露營無網路環境
            </footer>
          </div>
        );
      }

      return null;
    }

    // 啟動 React
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<App />);
  </script>
</body>
</html>
