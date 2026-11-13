/**
 * YouTube Playables SDK (ytgame) Wrapper
 * Handles official lifecycle hooks, pause/resume, audio state, cloud save/load,
 * and falls back gracefully when testing in a local browser outside YouTube.
 */
(function (global) {
  const isYTEnvironment =
    typeof global.ytgame !== "undefined" &&
    global.ytgame !== null &&
    typeof global.ytgame.game !== "undefined";

  const STORAGE_KEY = "puli_meka_save_v1";

  const YTWrapper = {
    isYouTube: isYTEnvironment,
    isPaused: false,
    isAudioEnabled: true,
    firstFrameSent: false,
    gameReadySent: false,

    onPauseCallbacks: [],
    onResumeCallbacks: [],
    onAudioChangeCallbacks: [],

    init() {
      if (this.isYouTube) {
        try {
          // Check initial audio setting from YouTube host
          if (
            global.ytgame.system &&
            typeof global.ytgame.system.isAudioEnabled === "function"
          ) {
            this.isAudioEnabled = Boolean(global.ytgame.system.isAudioEnabled());
          }

          // Subscribe to YouTube audio mute/unmute events
          if (
            global.ytgame.system &&
            typeof global.ytgame.system.onAudioEnabledChange === "function"
          ) {
            global.ytgame.system.onAudioEnabledChange((isEnabled) => {
              this.isAudioEnabled = Boolean(isEnabled);
              this.onAudioChangeCallbacks.forEach((cb) => cb(this.isAudioEnabled));
            });
          }

          // Subscribe to YouTube system pause events
          if (
            global.ytgame.system &&
            typeof global.ytgame.system.onPause === "function"
          ) {
            global.ytgame.system.onPause(() => {
              this.isPaused = true;
              this.onPauseCallbacks.forEach((cb) => cb());
            });
          }

          // Subscribe to YouTube system resume events
          if (
            global.ytgame.system &&
            typeof global.ytgame.system.onResume === "function"
          ) {
            global.ytgame.system.onResume(() => {
              this.isPaused = false;
              this.onResumeCallbacks.forEach((cb) => cb());
            });
          }
        } catch (err) {
          this.logError("SDK init error", err);
        }
      } else {
        // Browser visibility fallback when testing outside YouTube
        document.addEventListener("visibilitychange", () => {
          if (document.hidden) {
            this.isPaused = true;
            this.onPauseCallbacks.forEach((cb) => cb());
          } else {
            this.isPaused = false;
            this.onResumeCallbacks.forEach((cb) => cb());
          }
        });
      }
    },

    notifyFirstFrameReady() {
      if (this.firstFrameSent) return;
      this.firstFrameSent = true;
      if (
        this.isYouTube &&
        global.ytgame.game &&
        typeof global.ytgame.game.firstFrameReady === "function"
      ) {
        try {
          global.ytgame.game.firstFrameReady();
        } catch (err) {
          this.logError("firstFrameReady failed", err);
        }
      }
    },

    notifyGameReady() {
      if (this.gameReadySent) return;
      this.gameReadySent = true;
      if (
        this.isYouTube &&
        global.ytgame.game &&
        typeof global.ytgame.game.gameReady === "function"
      ) {
        try {
          global.ytgame.game.gameReady();
        } catch (err) {
          this.logError("gameReady failed", err);
        }
      }
    },

    async saveData(dataObj) {
      const serialized = JSON.stringify(dataObj);
      if (
        this.isYouTube &&
        global.ytgame.game &&
        typeof global.ytgame.game.saveData === "function"
      ) {
        try {
          await global.ytgame.game.saveData(serialized);
          return;
        } catch (err) {
          this.logError("saveData failed", err);
        }
      }
      // Fallback for local testing (wrapped in try/catch for strict sandboxed iframes)
      try {
        global.localStorage.setItem(STORAGE_KEY, serialized);
      } catch (_) {
        // Ignore storage error in restricted iframe
      }
    },

    async loadData(defaultObj) {
      if (
        this.isYouTube &&
        global.ytgame.game &&
        typeof global.ytgame.game.loadData === "function"
      ) {
        try {
          const raw = await global.ytgame.game.loadData();
          if (raw && typeof raw === "string" && raw.trim().length > 0) {
            return Object.assign({}, defaultObj, JSON.parse(raw));
          }
        } catch (err) {
          this.logError("loadData failed", err);
        }
      }
      try {
        const localRaw = global.localStorage.getItem(STORAGE_KEY);
        if (localRaw) {
          return Object.assign({}, defaultObj, JSON.parse(localRaw));
        }
      } catch (_) {
        // Ignore storage error
      }
      return Object.assign({}, defaultObj);
    },

    async sendScore(scoreValue) {
      if (
        this.isYouTube &&
        global.ytgame.engagement &&
        typeof global.ytgame.engagement.sendScore === "function"
      ) {
        try {
          await global.ytgame.engagement.sendScore({ value: Number(scoreValue) || 0 });
        } catch (err) {
          this.logError("sendScore failed", err);
        }
      }
    },

    logError(msg, err) {
      if (
        this.isYouTube &&
        global.ytgame.health &&
        typeof global.ytgame.health.logError === "function"
      ) {
        try {
          global.ytgame.health.logError();
        } catch (_) {}
      }
      console.warn("[YTPlayablesWrapper]", msg, err || "");
    },

    onPause(cb) {
      this.onPauseCallbacks.push(cb);
    },

    onResume(cb) {
      this.onResumeCallbacks.push(cb);
    },

    onAudioChange(cb) {
      this.onAudioChangeCallbacks.push(cb);
    }
  };

  YTWrapper.init();
  global.YTWrapper = YTWrapper;
})(window);
