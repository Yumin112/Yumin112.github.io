/**
 * 遊戲屬性/狀態 (Conditions & Properties) 清單
 */
window.OFFICIAL_PROPERTIES_CATALOG = [
  {
    id: 'coy',
    name: '害羞 (Coy)',
    icon: '👁️‍🗨️',
    description: '具有此狀態的玩家只能進行「顏色分享 (Color Share)」。即使其他角色的能力強制要求，也不能進行換牌、私下展示或公開展示。'
  },
  {
    id: 'honest',
    name: '誠實 (Honest)',
    icon: '😇',
    description: '具有此狀態的玩家口頭發言必須說真話（除非受其他狀態如誘惑或催眠影響）。允許透過非口頭方式（如肢體語言）說謊。'
  },
  {
    id: 'liar',
    name: '說謊 (Liar)',
    icon: '🤥',
    description: '具有此狀態的玩家口頭發言必須說假話。允許透過非口頭方式傳達事實真相。'
  },
  {
    id: 'immune',
    name: '免疫 (Immune)',
    icon: '🛡️',
    description: '免疫所有角色能力與狀態的影響，無一例外。免疫者不被視為房間人口，不參與任何投票，也不能被選為人質。'
  },
  {
    id: 'blind',
    name: '盲目 (Blind)',
    icon: '🙈',
    description: '具有此狀態的玩家在遊戲過程中必須盡可能閉上雙眼。仍會獲得狀態或被使用能力，但其他玩家不可對其說謊。'
  },
  {
    id: 'shy',
    name: '羞澀 (Shy)',
    icon: '😳',
    description: '具有此狀態的玩家不得展示卡片的任何部分給任何人（除非心理學家向其私下展示後，才可以與心理學家換牌）。'
  },
  {
    id: 'foolish',
    name: '愚蠢 (Foolish)',
    icon: '🤪',
    description: '具有此狀態的玩家絕不能拒絕任何人的換牌 (Card Share) 或換顏色 (Color Share) 邀請。'
  },
  {
    id: 'dead',
    name: '死亡 (Dead)',
    icon: '💀',
    description: '遊戲結束時與炸彈客在同一房間的所有玩家皆獲得此狀態。獲得此狀態者視為死亡，可能直接導致該隊伍輸掉遊戲。'
  },
  {
    id: 'attached',
    name: '附著 (Attached)',
    icon: '🔗',
    description: '與蜈蚣 (Centipede) 換牌後獲得。只要與蜈蚣分開（不在同一個房間），就會失去此狀態並獲得「撕裂 (Torn)」狀態。'
  },
  {
    id: 'torn',
    name: '撕裂 (Torn)',
    icon: '💔',
    description: '無視所有能力或已獲得的狀態，必須永久公開展示卡片（如同黏在額頭上）。'
  },
  {
    id: 'traitor',
    name: '叛徒 (Traitor)',
    icon: '🗡️',
    description: '勝利目標被替換為對立隊伍的勝利目標（例如藍隊玩家獲得此狀態後，若總統死亡則該玩家獲勝）。'
  },
  {
    id: 'cultist',
    name: '邪教徒 (Cultist)',
    icon: '🕯️',
    description: '與邪教領袖或邪教徒換牌/換顏色後獲得。若邪教領袖死亡，所有邪教徒一併死亡並輸掉遊戲。'
  },
  {
    id: 'in_love',
    name: '熱戀 (In Love)',
    icon: '😍',
    description: '勝利目標被替換：遊戲結束時必須與墜入愛河的對象位於「同一個房間」，否則失敗。'
  },
  {
    id: 'in_hate',
    name: '敵視 (In Hate)',
    icon: '😡',
    description: '勝利目標被替換：遊戲結束時必須與敵視的對象位於「不同的房間」，否則失敗。'
  },
  {
    id: 'toast',
    name: '烤焦 (Toast)',
    icon: '🔥',
    description: '遊戲結束時與飛龍 (Dragon) 在同一房間者獲得。若國王獲得此狀態，紅隊獲勝。'
  },
  {
    id: 'stoned',
    name: '石化 (Stoned)',
    icon: '🗿',
    description: '失去投票權。發起任何投票（如提名或廢黜領袖）時，必須保持手臂打直下垂的僵硬姿勢。'
  },
  {
    id: 'hypnotized',
    name: '催眠 (Hypnotized)',
    icon: '🌀',
    description: '必須扮演催眠師所指定的角色（但實際陣營與能力並未改變）。'
  },
  {
    id: 'flashing',
    name: '露癖 (Flashing)',
    icon: '🫣',
    description: '只能進行公開展示 (Public Reveal)。即使被能力強制，也不能進行換牌或私下展示。'
  },
  {
    id: 'fireproof',
    name: '防火 (Fireproof)',
    icon: '🧯',
    description: '具有此狀態者免受「縱火 (Firebomb)」狀態導致的死亡效果。與消防員換牌的總統會獲得此狀態。'
  },
  {
    id: 'firebomb',
    name: '縱火 (Firebomb)',
    icon: '💣',
    description: '若炸彈客在遊戲結束時帶有此狀態，則不論位於哪間房間，全場所有玩家皆獲得「死亡」狀態。'
  },
  {
    id: 'cursed',
    name: '詛咒 (Cursed)',
    icon: '🧟',
    description: '必須盡可能不發出任何聲音，因此無法使用任何需要口頭發言的能力。'
  },
  {
    id: 'savvy',
    name: '精明 (Savvy)',
    icon: '🧠',
    description: '只能進行換牌 (Card Share)。無法進行私下展示、公開展示或換顏色。'
  },
  {
    id: 'paranoid',
    name: '偏執 (Paranoid)',
    icon: '😰',
    description: '只能進行換牌 (Card Share)，且全場遊戲僅限換牌一次。'
  },
  {
    id: 'piped',
    name: '笛音吹奏 (Piped)',
    icon: '🪈',
    description: '獲得額外勝利目標：遊戲結束時若未與為其施加笛音狀態的吹笛人位於同一房間，則失敗。'
  },
  {
    id: 'blasted',
    name: '砲轟 (Blasted)',
    icon: '💥',
    description: '當回合結束時，必須作為人質之一被交換至另一房間。'
  },
  {
    id: 'tackled',
    name: '攔截 (Tackled)',
    icon: '🏉',
    description: '當回合結束時，無法作為人質被交換至另一房間。'
  },
  {
    id: 'bitten',
    name: '咬傷 (Bitten)',
    icon: '🐺',
    description: '必須盡可能誠實且詳盡地回答狼人 (Alpha Wolf) 所提出的任何問題。'
  },
  {
    id: 'impregnated',
    name: '寄生 (Impregnated)',
    icon: '👾',
    description: '遊戲結束時，與持有寄生狀態（持有異形卡）的藍隊玩家位於同一房間的所有玩家皆獲得「死亡」狀態。'
  },
  {
    id: 'zombie',
    name: '喪屍 (Zombie)',
    icon: '🧟',
    description: '陣營轉變為喪屍隊。勝利目標變更為：遊戲結束時所有未死亡的玩家皆屬於喪屍隊。'
  }
];
