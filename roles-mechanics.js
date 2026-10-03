/**
 * 角色專屬機制、動作外掛與主機結算模組
 */
(function (global) {
  // 定義具備專屬互動動作的角色外掛
  const ROLE_PLUGINS = {
    // 1. 燙手山芋：可隨時發起身分交換，無名單限制
    hot_potato: {
      getActionButton: (ctx) => ({
        label: '🔄 發起身分交換',
        badge: '燙手山芋 專屬',
        style: 'from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 border-amber-300/40 text-zinc-950',
        onClick: () => {
          ctx.openSwapModal({
            ruleDesc: '🥔 燙手山芋規則：交換給和你進行任何分享行為的玩家。',
            isTargetDisabled: () => false
          });
        }
      })
    },

    // 2. 小妖精：曾當過小妖精的玩家不可再次交換
    leprechaun: {
      getActionButton: (ctx) => ({
        label: '🔄 發起身分交換',
        badge: '小妖精 專屬',
        style: 'from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 border-emerald-300/40 text-zinc-950',
        onClick: () => {
          ctx.openSwapModal({
            ruleDesc: '🍀 小妖精規則：曾當過小妖精的玩家不可再次交換。',
            isTargetDisabled: (target) => Boolean(target.hasBeenLeprechaun),
            disabledBadge: '曾當過小妖精'
          });
        }
      })
    },

    // 3. 酒鬼：僅限最後一輪且有埋葬卡時，可與埋葬卡對調身分
    drunk: {
      getActionButton: (ctx) => {
        const isLastRound = ctx.currentRoundIndex === ctx.roundSettings.length - 1;
        if (!ctx.buriedCard || !isLastRound) return null;

        return {
          label: '🍺 與埋葬卡互換身分',
          badge: '最後一輪專屬',
          style: 'from-purple-500 to-amber-500 hover:from-purple-400 hover:to-amber-400 border-purple-300/40 text-zinc-950',
          onClick: () => {
            ctx.openDrunkModal();
          }
        };
      }
    }
  };

  const RoleMechanics = {
    /**
     * 取得玩家當前身分可觸發的動作按鈕配置，無符合動作時返回 null
     */
    getRoleAction(myRole, context) {
      if (!myRole || !ROLE_PLUGINS[myRole.id]) return null;
      return ROLE_PLUGINS[myRole.id].getActionButton(context);
    },

    /**
     * [房長主機端] 執行兩名玩家身分對調與歷史標記
     */
    applyPlayerSwap(playersList, p1Id, p2Id) {
      const p1 = playersList.find(p => p.id === p1Id);
      const p2 = playersList.find(p => p.id === p2Id);
      if (!p1 || !p2) return playersList;

      const role1 = p1.role;
      const team1 = p1.team;
      const role2 = p2.role;
      const team2 = p2.team;

      return playersList.map(p => {
        if (p.id === p1Id) {
          return {
            ...p,
            role: role2,
            team: team2,
            hasBeenLeprechaun: p.hasBeenLeprechaun || (role2?.id === 'leprechaun')
          };
        }
        if (p.id === p2Id) {
          return {
            ...p,
            role: role1,
            team: team1,
            hasBeenLeprechaun: p.hasBeenLeprechaun || (role1?.id === 'leprechaun')
          };
        }
        return p;
      });
    },

    /**
     * [房長主機端] 執行酒鬼與未分配埋葬卡的對調
     */
    applyDrunkBuriedSwap(playersList, curBuried, drunkPlayerId) {
      if (!curBuried) return { nextPlayers: playersList, newBuried: curBuried };

      const drunkPlayer = playersList.find(p => p.id === drunkPlayerId);
      if (!drunkPlayer) return { nextPlayers: playersList, newBuried: curBuried };

      const oldRole = drunkPlayer.role;
      const newRole = curBuried;
      const newBuried = oldRole;

      const nextPlayers = playersList.map(p => {
        if (p.id === drunkPlayerId) {
          return {
            ...p,
            role: newRole,
            team: newRole.team,
            hasBeenLeprechaun: p.hasBeenLeprechaun || (newRole?.id === 'leprechaun')
          };
        }
        return p;
      });

      return { nextPlayers, newBuried };
    }
  };

  global.RoleMechanics = RoleMechanics;
})(window);
