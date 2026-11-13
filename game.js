/**
 * పులి మేక (Puli Meka - Tigers & Goats)
 * Traditional 23-Node Telugu Strategy Board Game for YouTube Playables
 */
(function () {
  "use strict";

  // =========================================================================
  // 1. BILINGUAL LOCALIZATION (TELUGU + ENGLISH)
  // =========================================================================
  const I18N = {
    te: {
      titleMain: "పులి మేక",
      titleSub: "TIGERS & GOATS",
      langBtn: "తెలుగు | EN",
      goatsInHand: "చేతిలో మేకలు",
      capturedGoats: "చిక్కిన మేకలు",
      phasePlace: "మేకను ఖాళీ గడిలో ఉంచండి",
      phaseMove: "పావును కదపండి",
      turnGoat: "🐐 మేకల వంతు",
      turnTiger: "🐅 పులుల వంతు",
      turnAI: "🤖 AI ఆలోచిస్తోంది...",
      btnHint: "సూచన",
      btnRestart: "కొత్త ఆట",
      modeGoatAI: "🐐 మీరు: మేకలు vs AI",
      modeTigerAI: "🐅 మీరు: పులులు vs AI",
      mode2P: "👥 ఇద్దరు ఆటగాళ్ళు (2P)",
      menuHeading: "పులి మేక (Puli Meka)",
      menuSubheading: "సాంప్రదాయ తెలుగు మేధో ఆట • Traditional Strategy Game",
      chooseRole: "మీ పాత్రను ఎంచుకోండి (Choose Your Side):",
      roleGoat: "మేకలు (Goats)",
      roleGoatDesc: "3 పులులను బంధించండి",
      roleTiger: "పులులు (Tigers)",
      roleTigerDesc: "5 మేకలను వేటాడండి",
      role2P: "ఇద్దరు (2 Players)",
      role2PDesc: "స్నేహితుడితో ఆడండి",
      chooseDiff: "AI స్థాయి (AI Difficulty):",
      diffEasy: "సులభం (Easy)",
      diffMedium: "మధ్యస్థం (Medium)",
      diffHard: "కఠినం (Master)",
      statPlayed: "ఆడినవి:",
      statGoatWins: "🐐 విజయాలు:",
      statTigerWins: "🐅 విజయాలు:",
      btnStartGame: "ఆట ప్రారంభించండి • PLAY NOW",
      rulesHeading: "ఆట నియమాలు • How to Play",
      btnCloseRules: "అర్థమైంది • GOT IT",
      goatVictoryTitle: "మేకల ఘన విజయం! 🐐🎉",
      goatVictoryReason: "అద్భుతం! 3 పులులూ కదల్లేకుండా బంధించబడ్డాయి!",
      tigerVictoryTitle: "పులుల ఘన విజయం! 🐅🔥",
      tigerVictoryReason: "పులులు 5 మేకలను వేటాడి విజయం సాధించాయి!",
      endMoves: "మొత్తం ఎత్తులు:",
      endCaptured: "చిక్కిన మేకలు:",
      btnChangeMode: "మోడ్ మార్చు",
      btnPlayAgain: "మళ్ళీ ఆడండి",
      toastSelectGoat: "ముందుగా బోర్డుపై ఉన్న మేకను ఎంచుకోండి!",
      toastPlaceAllFirst: "ముందుగా చేతిలో ఉన్న 15 మేకలను బోర్డుపై ఉంచాలి!",
      toastCaptured: "పులి మేకను వేటాడింది! 🐅💥",
      toastHintShown: "💡 ఉత్తమ ఎత్తు బోర్డుపై మెరుస్తోంది!",
      rulesHTML: `
        <div class="rule-item"><strong>1. ఆట లక్ష్యం (Objective):</strong><br/>
        • <strong>మేకలు (15):</strong> 3 పులులు అసలు కదల్లేకుండా చుట్టుముట్టి బంధిస్తే మేకలు గెలుస్తాయి.<br/>
        • <strong>పులులు (3):</strong> మేకలను దాటుకుంటూ దూకి <strong>5 మేకలను</strong> చంపితే పులులు గెలుస్తాయి.</div>
        <div class="rule-item"><strong>2. మేకల కదలిక (Goats - 15):</strong><br/>
        • మొదటి దశలో చేతిలో ఉన్న 15 మేకలను ఒక్కొక్కటిగా ఖాళీ చుక్కలపై ఉంచాలి.<br/>
        • 15 మేకలు పెట్టిన తర్వాతే బోర్డుపై ఉన్న మేకలను పక్కనే ఉన్న ఖాళీ చుక్కకు కదపగలరు. మేకలు పులులపై నుండి దూకలేవు.</div>
        <div class="rule-item"><strong>3. పులుల వేట (Tigers - 3):</strong><br/>
        • పులి పక్కనే ఉన్న ఖాళీ చుక్కకు వెళ్ళగలదు.<br/>
        • లేదా ఒకే సరళ రేఖలో పక్కనే ఉన్న మేకపై నుండి ఆవల ఉన్న ఖాళీ చుక్కలోకి దూకి ఆ మేకను చంపగలదు!</div>
      `
    },
    en: {
      titleMain: "PULI MEKA",
      titleSub: "పులి మేక • TIGERS & GOATS",
      langBtn: "EN | తెలుగు",
      goatsInHand: "Goats in Hand",
      capturedGoats: "Captured Goats",
      phasePlace: "Tap empty spot to place Goat",
      phaseMove: "Select & move a piece",
      turnGoat: "🐐 Goats' Turn",
      turnTiger: "🐅 Tigers' Turn",
      turnAI: "🤖 AI Thinking...",
      btnHint: "Hint",
      btnRestart: "New Game",
      modeGoatAI: "🐐 You: Goats vs AI",
      modeTigerAI: "🐅 You: Tigers vs AI",
      mode2P: "👥 2 Players (Pass & Play)",
      menuHeading: "Puli Meka (పులి మేక)",
      menuSubheading: "Classic Telugu Asymmetric Strategy Game",
      chooseRole: "Choose Your Side:",
      roleGoat: "Goats (మేకలు)",
      roleGoatDesc: "Surround & trap all 3 Tigers",
      roleTiger: "Tigers (పులులు)",
      roleTigerDesc: "Jump & capture 5 Goats",
      role2P: "2 Players",
      role2PDesc: "Play with a friend",
      chooseDiff: "AI Difficulty:",
      diffEasy: "Easy",
      diffMedium: "Medium",
      diffHard: "Master",
      statPlayed: "Played:",
      statGoatWins: "🐐 Wins:",
      statTigerWins: "🐅 Wins:",
      btnStartGame: "START GAME • ఆట ప్రారంభించండి",
      rulesHeading: "How to Play • ఆట నియమాలు",
      btnCloseRules: "GOT IT • అర్థమైంది",
      goatVictoryTitle: "Goats Win! 🐐🎉",
      goatVictoryReason: "All 3 Tigers are completely trapped with no legal moves!",
      tigerVictoryTitle: "Tigers Win! 🐅🔥",
      tigerVictoryReason: "The Tigers hunted 5 Goats and conquered the board!",
      endMoves: "Total Moves:",
      endCaptured: "Captured Goats:",
      btnChangeMode: "Change Mode",
      btnPlayAgain: "Play Again",
      toastSelectGoat: "Select one of your pieces on the board first!",
      toastPlaceAllFirst: "Place all 15 Goats from your hand before moving them!",
      toastCaptured: "Tiger leaped and captured a Goat! 🐅💥",
      toastHintShown: "💡 Best move highlighted on the board!",
      rulesHTML: `
        <div class="rule-item"><strong>1. Goal of the Game:</strong><br/>
        • <strong>Goats (15):</strong> Surround and block all 3 Tigers so they have zero legal moves.<br/>
        • <strong>Tigers (3):</strong> Capture <strong>5 Goats</strong> by jumping over them.</div>
        <div class="rule-item"><strong>2. Playing as Goats:</strong><br/>
        • Goats move first. Drop 1 Goat per turn onto any empty intersection until all 15 Goats are placed.<br/>
        • Only after all 15 Goats are placed can Goats slide 1 step along a line to an adjacent empty point.</div>
        <div class="rule-item"><strong>3. Playing as Tigers:</strong><br/>
        • A Tiger can move 1 step to an adjacent empty point, OR jump in a straight line over 1 adjacent Goat into an empty point immediately beyond it to capture that Goat.</div>
      `
    }
  };

  // =========================================================================
  // 2. AUTHENTIC 23-VERTEX PULI MEKA BOARD TOPOLOGY
  // =========================================================================
  // Node indices:
  // 0: Apex (top vertex of the triangle)
  // 1..6:   Row 1 (left wing 1, inner rays 2,3,4,5, right wing 6)
  // 7..12:  Row 2 (left wing 7, inner rays 8,9,10,11, right wing 12)
  // 13..18: Row 3 (left wing 13, inner rays 14,15,16,17, right wing 18)
  // 19..22: Row 4 (base of the 4 inner rays)
  const NORMALIZED_NODES = [
    // 0: Apex
    { id: 0, x: 0.50, y: 0.08 },

    // Row 1 (y = 0.30)
    { id: 1, x: 0.09, y: 0.30 },
    { id: 2, x: 0.33, y: 0.30 },
    { id: 3, x: 0.443, y: 0.30 },
    { id: 4, x: 0.557, y: 0.30 },
    { id: 5, x: 0.67, y: 0.30 },
    { id: 6, x: 0.91, y: 0.30 },

    // Row 2 (y = 0.50)
    { id: 7,  x: 0.06, y: 0.50 },
    { id: 8,  x: 0.25, y: 0.50 },
    { id: 9,  x: 0.417, y: 0.50 },
    { id: 10, x: 0.583, y: 0.50 },
    { id: 11, x: 0.75, y: 0.50 },
    { id: 12, x: 0.94, y: 0.50 },

    // Row 3 (y = 0.70)
    { id: 13, x: 0.03, y: 0.70 },
    { id: 14, x: 0.17, y: 0.70 },
    { id: 15, x: 0.39, y: 0.70 },
    { id: 16, x: 0.61, y: 0.70 },
    { id: 17, x: 0.83, y: 0.70 },
    { id: 18, x: 0.97, y: 0.70 },

    // Row 4 Base (y = 0.91)
    { id: 19, x: 0.08, y: 0.91 },
    { id: 20, x: 0.36, y: 0.91 },
    { id: 21, x: 0.64, y: 0.91 },
    { id: 22, x: 0.92, y: 0.91 }
  ];

  // Straight lines on the Puli Meka board.
  // Consecutive points on any line are adjacent; 3 consecutive points on the same line form a valid Tiger jump!
  const BOARD_LINES = [
    // 4 Rays descending from Apex (0) to Base (19..22)
    [0, 2, 8, 14, 19],
    [0, 3, 9, 15, 20],
    [0, 4, 10, 16, 21],
    [0, 5, 11, 17, 22],

    // 3 Horizontal rows across the wings and inner triangle
    [1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18],

    // Left & Right outer wing edges
    [1, 7, 13],
    [6, 12, 18],

    // Bottom base edge
    [19, 20, 21, 22]
  ];

  // Precompute adjacency list and jump triples
  const ADJACENCY = Array.from({ length: 23 }, () => []);
  const JUMP_TRIPLES = []; // { from, over, to }

  BOARD_LINES.forEach((line) => {
    for (let i = 0; i < line.length - 1; i++) {
      const a = line[i];
      const b = line[i + 1];
      if (!ADJACENCY[a].includes(b)) ADJACENCY[a].push(b);
      if (!ADJACENCY[b].includes(a)) ADJACENCY[b].push(a);
    }
    for (let i = 0; i < line.length - 2; i++) {
      const a = line[i];
      const mid = line[i + 1];
      const c = line[i + 2];
      JUMP_TRIPLES.push({ from: a, over: mid, to: c });
      JUMP_TRIPLES.push({ from: c, over: mid, to: a });
    }
  });

  const EMPTY = 0;
  const GOAT = 1;
  const TIGER = 2;
  const TOTAL_GOATS = 15;
  const TIGERS_WIN_CAPTURES = 5;

  // =========================================================================
  // 3. GAME STATE & PERSISTENCE
  // =========================================================================
  const state = {
    lang: "te", // 'te' or 'en'
    mode: "goat_ai", // 'goat_ai', 'tiger_ai', 'pass_play'
    difficulty: "medium", // 'easy', 'medium', 'hard'

    board: new Array(23).fill(EMPTY),
    goatsToPlace: TOTAL_GOATS,
    goatsCaptured: 0,
    turn: GOAT, // Goats always start first in Puli Meka
    moveCount: 0,
    selectedNode: -1,
    legalMovesForSelected: [], // [{ from, to, captureNode }]
    hintMove: null, // { from, to, captureNode }
    gameOver: false,
    winner: null,
    aiThinking: false,

    // Visual animation state
    animPiece: null, // { type, fromX, fromY, toX, toY, progress, targetNode }
    captureRipples: [], // [{ x, y, radius, alpha }]
    pulsePhase: 0,

    // Persistent stats saved via YouTube Playables SDK
    stats: {
      played: 0,
      goatWins: 0,
      tigerWins: 0,
      lang: "te"
    }
  };

  // =========================================================================
  // 4. CORE RULES & MOVE GENERATION
  // =========================================================================
  function getLegalGoatMoves(board, goatsToPlace) {
    const moves = [];
    if (goatsToPlace > 0) {
      // Placement phase: can place on any empty node
      for (let i = 0; i < 23; i++) {
        if (board[i] === EMPTY) {
          moves.push({ type: "place", from: -1, to: i, captureNode: -1 });
        }
      }
    } else {
      // Movement phase: slide any Goat to an adjacent empty node
      for (let i = 0; i < 23; i++) {
        if (board[i] === GOAT) {
          for (const adj of ADJACENCY[i]) {
            if (board[adj] === EMPTY) {
              moves.push({ type: "move", from: i, to: adj, captureNode: -1 });
            }
          }
        }
      }
    }
    return moves;
  }

  function getLegalTigerMovesForNode(board, nodeIdx) {
    if (board[nodeIdx] !== TIGER) return [];
    const moves = [];

    // 1. Simple step to adjacent empty node
    for (const adj of ADJACENCY[nodeIdx]) {
      if (board[adj] === EMPTY) {
        moves.push({ type: "move", from: nodeIdx, to: adj, captureNode: -1 });
      }
    }

    // 2. Capture jumps over an adjacent Goat along a straight line
    for (const jt of JUMP_TRIPLES) {
      if (jt.from === nodeIdx && board[jt.over] === GOAT && board[jt.to] === EMPTY) {
        moves.push({ type: "capture", from: nodeIdx, to: jt.to, captureNode: jt.over });
      }
    }

    return moves;
  }

  function getAllLegalTigerMoves(board) {
    const moves = [];
    for (let i = 0; i < 23; i++) {
      if (board[i] === TIGER) {
        moves.push(...getLegalTigerMovesForNode(board, i));
      }
    }
    return moves;
  }

  function countTrappedTigers(board) {
    let trapped = 0;
    for (let i = 0; i < 23; i++) {
      if (board[i] === TIGER) {
        if (getLegalTigerMovesForNode(board, i).length === 0) {
          trapped++;
        }
      }
    }
    return trapped;
  }

  // =========================================================================
  // 5. SMART AI ENGINE (MINIMAX WITH ALPHA-BETA PRUNING)
  // =========================================================================
  function cloneSimState(sim) {
    return {
      board: sim.board.slice(),
      goatsToPlace: sim.goatsToPlace,
      goatsCaptured: sim.goatsCaptured,
      turn: sim.turn
    };
  }

  function applyMoveSim(sim, move) {
    const next = cloneSimState(sim);
    if (next.turn === GOAT) {
      if (move.type === "place") {
        next.board[move.to] = GOAT;
        next.goatsToPlace--;
      } else {
        next.board[move.from] = EMPTY;
        next.board[move.to] = GOAT;
      }
      next.turn = TIGER;
    } else {
      next.board[move.from] = EMPTY;
      next.board[move.to] = TIGER;
      if (move.captureNode !== -1) {
        next.board[move.captureNode] = EMPTY;
        next.goatsCaptured++;
      }
      next.turn = GOAT;
    }
    return next;
  }

  // Positive score favors TIGERS; Negative score favors GOATS
  function evaluateBoard(sim) {
    if (sim.goatsCaptured >= TIGERS_WIN_CAPTURES) return 10000;

    const tigerMoves = getAllLegalTigerMoves(sim.board);
    if (tigerMoves.length === 0) return -10000;

    const trappedCount = countTrappedTigers(sim.board);
    let captureOpportunities = 0;
    for (const m of tigerMoves) {
      if (m.captureNode !== -1) captureOpportunities++;
    }

    // Count vulnerable goats (goats that could be jumped if one side opens)
    let vulnerableGoats = 0;
    for (const jt of JUMP_TRIPLES) {
      if (
        sim.board[jt.from] === TIGER &&
        sim.board[jt.over] === GOAT &&
        sim.board[jt.to] === EMPTY
      ) {
        vulnerableGoats++;
      }
    }

    let score = 0;
    score += sim.goatsCaptured * 650;
    score += tigerMoves.length * 24;
    score += captureOpportunities * 220;
    score += vulnerableGoats * 90;
    score -= trappedCount * 380;

    // Tigers prefer central multi-degree intersections (nodes 2,3,4,5,8,9,10,11)
    for (let i = 0; i < 23; i++) {
      if (sim.board[i] === TIGER) {
        score += ADJACENCY[i].length * 8;
      } else if (sim.board[i] === GOAT) {
        // Goats prefer safe wing/edge spots or protected clusters
        let neighborGoats = 0;
        for (const adj of ADJACENCY[i]) {
          if (sim.board[adj] === GOAT) neighborGoats++;
        }
        score -= neighborGoats * 6;
      }
    }

    return score;
  }

  function minimax(sim, depth, alpha, beta, maximizingTiger) {
    if (sim.goatsCaptured >= TIGERS_WIN_CAPTURES) return 10000 + depth;
    const tigerMoves = getAllLegalTigerMoves(sim.board);
    if (tigerMoves.length === 0) return -10000 - depth;
    if (depth === 0) return evaluateBoard(sim);

    if (maximizingTiger) {
      // Order capture moves first for faster pruning
      tigerMoves.sort((a, b) => b.captureNode - a.captureNode);
      let maxEval = -Infinity;
      for (const move of tigerMoves) {
        const child = applyMoveSim(sim, move);
        const ev = minimax(child, depth - 1, alpha, beta, false);
        if (ev > maxEval) maxEval = ev;
        if (ev > alpha) alpha = ev;
        if (beta <= alpha) break;
      }
      return maxEval;
    } else {
      const goatMoves = getLegalGoatMoves(sim.board, sim.goatsToPlace);
      if (goatMoves.length === 0) return 9000;
      let minEval = Infinity;
      for (const move of goatMoves) {
        const child = applyMoveSim(sim, move);
        const ev = minimax(child, depth - 1, alpha, beta, true);
        if (ev < minEval) minEval = ev;
        if (ev < beta) beta = ev;
        if (beta <= alpha) break;
      }
      return minEval;
    }
  }

  function chooseBestMove(forTurn, difficultyOverride) {
    const diff = difficultyOverride || state.difficulty;
    const sim = {
      board: state.board.slice(),
      goatsToPlace: state.goatsToPlace,
      goatsCaptured: state.goatsCaptured,
      turn: forTurn
    };

    const legalMoves =
      forTurn === TIGER
        ? getAllLegalTigerMoves(sim.board)
        : getLegalGoatMoves(sim.board, sim.goatsToPlace);

    if (legalMoves.length === 0) return null;

    // Easy mode occasionally plays a semi-random move
    if (diff === "easy" && Math.random() < 0.42) {
      return legalMoves[Math.floor(Math.random() * legalMoves.length)];
    }

    const searchDepth = diff === "hard" ? 4 : diff === "medium" ? 3 : 2;
    const isTiger = forTurn === TIGER;

    let bestMove = legalMoves[0];
    let bestScore = isTiger ? -Infinity : Infinity;

    // Slight random tie-breaker so games feel fresh
    const shuffled = legalMoves.slice().sort(() => Math.random() - 0.5);
    if (isTiger) {
      shuffled.sort((a, b) => b.captureNode - a.captureNode);
    }

    for (const move of shuffled) {
      const nextSim = applyMoveSim(sim, move);
      const score = minimax(
        nextSim,
        searchDepth - 1,
        -Infinity,
        Infinity,
        !isTiger
      );

      if (isTiger) {
        if (score > bestScore) {
          bestScore = score;
          bestMove = move;
        }
      } else {
        if (score < bestScore) {
          bestScore = score;
          bestMove = move;
        }
      }
    }

    return bestMove;
  }

  // =========================================================================
  // 6. CANVAS RENDERER (HIGH-DPI + TRADITIONAL KALAMKARI/RANGOLI STYLING)
  // =========================================================================
  const canvas = document.getElementById("game-canvas");
  const ctx = canvas.getContext("2d");
  let canvasWidth = 0;
  let canvasHeight = 0;
  let pixelNodes = [];

  function resizeCanvas() {
    const rect = canvas.parentElement.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2.5);
    canvasWidth = Math.max(280, rect.width);
    canvasHeight = Math.max(280, rect.height);

    canvas.width = Math.round(canvasWidth * dpr);
    canvas.height = Math.round(canvasHeight * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    // Maintain comfortable padding and aspect ratio inside the stage
    const padX = Math.max(24, canvasWidth * 0.06);
    const padY = Math.max(24, canvasHeight * 0.06);
    const usableW = canvasWidth - padX * 2;
    const usableH = canvasHeight - padY * 2;

    pixelNodes = NORMALIZED_NODES.map((n) => ({
      id: n.id,
      x: padX + n.x * usableW,
      y: padY + n.y * usableH
    }));
  }

  function getPieceRadius() {
    const minDim = Math.min(canvasWidth, canvasHeight);
    return Math.max(14, Math.min(24, minDim * 0.044));
  }

  function drawBoardLines() {
    ctx.save();

    // Outer decorative shadow glow for board lines
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = "rgba(0, 0, 0, 0.55)";
    ctx.lineWidth = 6;
    BOARD_LINES.forEach((line) => {
      ctx.beginPath();
      line.forEach((nodeId, idx) => {
        const pt = pixelNodes[nodeId];
        if (idx === 0) ctx.moveTo(pt.x, pt.y);
        else ctx.lineTo(pt.x, pt.y);
      });
      ctx.stroke();
    });

    // Main golden-chalk traditional lines
    ctx.strokeStyle = "#e6b86a";
    ctx.lineWidth = 3;
    BOARD_LINES.forEach((line) => {
      ctx.beginPath();
      line.forEach((nodeId, idx) => {
        const pt = pixelNodes[nodeId];
        if (idx === 0) ctx.moveTo(pt.x, pt.y);
        else ctx.lineTo(pt.x, pt.y);
      });
      ctx.stroke();
    });

    ctx.restore();
  }

  function drawIntersections() {
    const r = getPieceRadius();
    const pulse = 0.5 + 0.5 * Math.sin(state.pulsePhase * 4);

    // Draw empty intersection rings
    for (let i = 0; i < 23; i++) {
      const pt = pixelNodes[i];
      ctx.save();
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, 5.5, 0, Math.PI * 2);
      ctx.fillStyle = "#5c341d";
      ctx.fill();
      ctx.lineWidth = 2;
      ctx.strokeStyle = "#f5b942";
      ctx.stroke();
      ctx.restore();
    }

    // Highlight Hint move if active
    if (state.hintMove) {
      const hm = state.hintMove;
      ctx.save();
      if (hm.from !== -1) {
        const fromPt = pixelNodes[hm.from];
        const toPt = pixelNodes[hm.to];
        ctx.beginPath();
        ctx.setLineDash([6, 5]);
        ctx.moveTo(fromPt.x, fromPt.y);
        ctx.lineTo(toPt.x, toPt.y);
        ctx.strokeStyle = "#48ff9b";
        ctx.lineWidth = 4;
        ctx.stroke();
      }
      const targetPt = pixelNodes[hm.to];
      ctx.beginPath();
      ctx.arc(targetPt.x, targetPt.y, r + 5 + pulse * 4, 0, Math.PI * 2);
      ctx.strokeStyle = "#48ff9b";
      ctx.lineWidth = 3;
      ctx.stroke();
      ctx.restore();
    }

    // Highlight legal destinations for selected piece
    for (const move of state.legalMovesForSelected) {
      const pt = pixelNodes[move.to];
      const isCapture = move.captureNode !== -1;
      ctx.save();
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, r * (0.58 + pulse * 0.14), 0, Math.PI * 2);
      ctx.fillStyle = isCapture
        ? "rgba(255, 82, 56, 0.42)"
        : "rgba(72, 255, 155, 0.36)";
      ctx.fill();
      ctx.lineWidth = 2.5;
      ctx.strokeStyle = isCapture ? "#ff6b52" : "#48ff9b";
      ctx.stroke();
      ctx.restore();
    }
  }

  function drawPieceToken(x, y, type, isSelected, radius) {
    ctx.save();

    if (isSelected) {
      ctx.beginPath();
      ctx.arc(x, y, radius + 6, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255, 217, 125, 0.35)";
      ctx.fill();
      ctx.lineWidth = 2.5;
      ctx.strokeStyle = "#ffd97d";
      ctx.stroke();
    }

    // Drop shadow
    ctx.beginPath();
    ctx.arc(x, y + 3, radius, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(0, 0, 0, 0.55)";
    ctx.fill();

    // Token disc gradient
    const grad = ctx.createRadialGradient(
      x - radius * 0.3,
      y - radius * 0.3,
      radius * 0.15,
      x,
      y,
      radius
    );

    if (type === TIGER) {
      grad.addColorStop(0, "#ffb347");
      grad.addColorStop(0.7, "#d9531e");
      grad.addColorStop(1, "#7a2009");
    } else {
      grad.addColorStop(0, "#ffffff");
      grad.addColorStop(0.65, "#d8f3dc");
      grad.addColorStop(1, "#40916c");
    }

    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = grad;
    ctx.fill();

    ctx.lineWidth = 2.5;
    ctx.strokeStyle = type === TIGER ? "#ffe082" : "#95d5b2";
    ctx.stroke();

    // Inner ring
    ctx.beginPath();
    ctx.arc(x, y, radius * 0.78, 0, Math.PI * 2);
    ctx.lineWidth = 1;
    ctx.strokeStyle = "rgba(255, 255, 255, 0.35)";
    ctx.stroke();

    // Crisp Icon
    ctx.font = `${Math.round(radius * 1.15)}px "Segoe UI Emoji", "Apple Color Emoji", "Noto Color Emoji", sans-serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(type === TIGER ? "🐅" : "🐐", x, y + 1);

    ctx.restore();
  }

  function renderFrame() {
    state.pulsePhase += 0.025;
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    drawBoardLines();
    drawIntersections();

    const r = getPieceRadius();

    // Draw stationary pieces
    for (let i = 0; i < 23; i++) {
      const piece = state.board[i];
      if (piece === EMPTY) continue;
      if (state.animPiece && state.animPiece.targetNode === i) continue;

      const pt = pixelNodes[i];
      const isSelected = state.selectedNode === i;
      drawPieceToken(pt.x, pt.y, piece, isSelected, r);
    }

    // Draw moving piece animation if active
    if (state.animPiece) {
      const ap = state.animPiece;
      ap.progress = Math.min(1, ap.progress + 0.14);
      const t = 1 - Math.pow(1 - ap.progress, 3); // Ease out cubic
      const curX = ap.fromX + (ap.toX - ap.fromX) * t;
      const curY = ap.fromY + (ap.toY - ap.fromY) * t - Math.sin(t * Math.PI) * 14;
      drawPieceToken(curX, curY, ap.type, true, r * 1.08);

      if (ap.progress >= 1) {
        state.animPiece = null;
      }
    }

    // Draw capture ripples
    for (let i = state.captureRipples.length - 1; i >= 0; i--) {
      const rp = state.captureRipples[i];
      rp.radius += 2.2;
      rp.alpha -= 0.04;
      if (rp.alpha <= 0) {
        state.captureRipples.splice(i, 1);
        continue;
      }
      ctx.save();
      ctx.beginPath();
      ctx.arc(rp.x, rp.y, rp.radius, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(255, 107, 82, ${rp.alpha})`;
      ctx.lineWidth = 3;
      ctx.stroke();
      ctx.restore();
    }

    // Notify YouTube Playables SDK on the very first rendered frame
    if (window.YTWrapper) {
      window.YTWrapper.notifyFirstFrameReady();
    }

    requestAnimationFrame(renderFrame);
  }

  // =========================================================================
  // 7. GAMEPLAY CONTROLLER & TURN EXECUTION
  // =========================================================================
  function isHumanTurn() {
    if (state.gameOver || state.aiThinking) return false;
    if (state.mode === "pass_play") return true;
    if (state.mode === "goat_ai" && state.turn === GOAT) return true;
    if (state.mode === "tiger_ai" && state.turn === TIGER) return true;
    return false;
  }

  function executeMove(move) {
    state.hintMove = null;
    state.selectedNode = -1;
    state.legalMovesForSelected = [];

    const movingPiece = state.turn;
    const toPt = pixelNodes[move.to];
    const fromPt = move.from !== -1 ? pixelNodes[move.from] : { x: toPt.x, y: toPt.y - 35 };

    state.animPiece = {
      type: movingPiece,
      fromX: fromPt.x,
      fromY: fromPt.y,
      toX: toPt.x,
      toY: toPt.y,
      progress: 0,
      targetNode: move.to
    };

    if (state.turn === GOAT) {
      if (move.type === "place") {
        state.board[move.to] = GOAT;
        state.goatsToPlace--;
      } else {
        state.board[move.from] = EMPTY;
        state.board[move.to] = GOAT;
      }
      window.SoundFX.playPlace();
      state.turn = TIGER;
    } else {
      state.board[move.from] = EMPTY;
      state.board[move.to] = TIGER;
      if (move.captureNode !== -1) {
        const capPt = pixelNodes[move.captureNode];
        state.captureRipples.push({ x: capPt.x, y: capPt.y, radius: 10, alpha: 1 });
        state.board[move.captureNode] = EMPTY;
        state.goatsCaptured++;
        window.SoundFX.playCapture();
        showToast(I18N[state.lang].toastCaptured);
      } else {
        window.SoundFX.playPlace();
      }
      state.turn = GOAT;
    }

    state.moveCount++;
    updateHUD();

    // Check win conditions
    if (checkGameEnd()) {
      return;
    }

    // Trigger AI if next turn belongs to AI
    if (!isHumanTurn()) {
      state.aiThinking = true;
      updateHUD();
      setTimeout(() => {
        if (state.gameOver) return;
        const aiMove = chooseBestMove(state.turn);
        state.aiThinking = false;
        if (aiMove) {
          executeMove(aiMove);
        } else {
          checkGameEnd();
        }
      }, 420);
    }
  }

  function checkGameEnd() {
    // 1. Did Tigers capture 5 Goats?
    if (state.goatsCaptured >= TIGERS_WIN_CAPTURES) {
      finishGame(TIGER);
      return true;
    }

    // 2. Are all 3 Tigers trapped with 0 legal moves?
    const tigerMoves = getAllLegalTigerMoves(state.board);
    if (tigerMoves.length === 0) {
      finishGame(GOAT);
      return true;
    }

    // 3. On Goat turn, do Goats have 0 legal moves?
    if (state.turn === GOAT) {
      const goatMoves = getLegalGoatMoves(state.board, state.goatsToPlace);
      if (goatMoves.length === 0) {
        finishGame(TIGER);
        return true;
      }
    }

    return false;
  }

  function finishGame(winnerPiece) {
    state.gameOver = true;
    state.winner = winnerPiece;
    state.aiThinking = false;

    window.SoundFX.playVictory();

    state.stats.played++;
    if (winnerPiece === GOAT) state.stats.goatWins++;
    else state.stats.tigerWins++;

    if (window.YTWrapper) {
      window.YTWrapper.saveData(state.stats);
      // Send a score to YouTube Playables engagement API
      const score =
        winnerPiece === GOAT
          ? Math.max(100, 1000 - state.goatsCaptured * 150)
          : 1000;
      window.YTWrapper.sendScore(score);
    }

    const t = I18N[state.lang];
    document.getElementById("victory-emoji").textContent =
      winnerPiece === GOAT ? "🐐🏆" : "🐅👑";
    document.getElementById("victory-title").textContent =
      winnerPiece === GOAT ? t.goatVictoryTitle : t.tigerVictoryTitle;
    document.getElementById("victory-reason").textContent =
      winnerPiece === GOAT ? t.goatVictoryReason : t.tigerVictoryReason;
    document.getElementById("val-end-moves").textContent = String(state.moveCount);
    document.getElementById("val-end-captured").textContent = `${state.goatsCaptured} / ${TIGERS_WIN_CAPTURES}`;

    setTimeout(() => {
      document.getElementById("modal-gameover").classList.remove("hidden");
    }, 450);
  }

  function handleBoardTap(clientX, clientY) {
    if (!isHumanTurn() || (window.YTWrapper && window.YTWrapper.isPaused)) return;

    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    const hitRadius = getPieceRadius() * 1.55;

    let tappedNode = -1;
    let bestDist = Infinity;
    for (let i = 0; i < 23; i++) {
      const pt = pixelNodes[i];
      const dist = Math.hypot(x - pt.x, y - pt.y);
      if (dist <= hitRadius && dist < bestDist) {
        bestDist = dist;
        tappedNode = i;
      }
    }

    if (tappedNode === -1) return;

    const t = I18N[state.lang];

    // GOAT TURN
    if (state.turn === GOAT) {
      if (state.goatsToPlace > 0) {
        // Phase 1: Placing Goats from hand
        if (state.board[tappedNode] === EMPTY) {
          executeMove({ type: "place", from: -1, to: tappedNode, captureNode: -1 });
        } else if (state.board[tappedNode] === GOAT) {
          showToast(t.toastPlaceAllFirst);
        }
      } else {
        // Phase 2: Moving existing Goats on board
        if (state.board[tappedNode] === GOAT) {
          state.selectedNode = tappedNode;
          state.legalMovesForSelected = ADJACENCY[tappedNode]
            .filter((adj) => state.board[adj] === EMPTY)
            .map((adj) => ({ type: "move", from: tappedNode, to: adj, captureNode: -1 }));
          window.SoundFX.playSelect();
        } else if (state.selectedNode !== -1) {
          const found = state.legalMovesForSelected.find((m) => m.to === tappedNode);
          if (found) {
            executeMove(found);
          }
        } else {
          showToast(t.toastSelectGoat);
        }
      }
    }
    // TIGER TURN
    else if (state.turn === TIGER) {
      if (state.board[tappedNode] === TIGER) {
        state.selectedNode = tappedNode;
        state.legalMovesForSelected = getLegalTigerMovesForNode(state.board, tappedNode);
        window.SoundFX.playSelect();
      } else if (state.selectedNode !== -1) {
        const found = state.legalMovesForSelected.find((m) => m.to === tappedNode);
        if (found) {
          executeMove(found);
        }
      }
    }
  }

  // =========================================================================
  // 8. UI & HUD SYNCHRONIZATION
  // =========================================================================
  let toastTimer = null;
  function showToast(msg) {
    const el = document.getElementById("toast-msg");
    el.textContent = msg;
    el.classList.remove("hidden");
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      el.classList.add("hidden");
    }, 2200);
  }

  function startNewGame() {
    state.board.fill(EMPTY);
    // Traditional Puli Meka starting positions for the 3 Tigers:
    // Apex (0) and the 2 central nodes of Row 1 (nodes 3 and 4)
    state.board[0] = TIGER;
    state.board[3] = TIGER;
    state.board[4] = TIGER;

    state.goatsToPlace = TOTAL_GOATS;
    state.goatsCaptured = 0;
    state.turn = GOAT;
    state.moveCount = 0;
    state.selectedNode = -1;
    state.legalMovesForSelected = [];
    state.hintMove = null;
    state.gameOver = false;
    state.winner = null;
    state.aiThinking = false;

    document.getElementById("modal-menu").classList.add("hidden");
    document.getElementById("modal-gameover").classList.add("hidden");

    updateHUD();

    // If Player chose Tigers vs AI, AI plays Goats first
    if (state.mode === "tiger_ai" && state.turn === GOAT) {
      state.aiThinking = true;
      updateHUD();
      setTimeout(() => {
        const firstMove = chooseBestMove(GOAT);
        state.aiThinking = false;
        if (firstMove) executeMove(firstMove);
      }, 450);
    }
  }

  function updateHUD() {
    const t = I18N[state.lang];

    document.getElementById("val-goats-hand").textContent = String(state.goatsToPlace);
    document.getElementById("val-captured").textContent = String(state.goatsCaptured);

    const cardGoat = document.getElementById("card-goat");
    const cardTiger = document.getElementById("card-tiger");
    cardGoat.classList.toggle("active-turn", state.turn === GOAT);
    cardTiger.classList.toggle("active-turn", state.turn === TIGER);

    const phaseEl = document.getElementById("lbl-phase");
    const turnEl = document.getElementById("lbl-turn");

    if (state.aiThinking) {
      phaseEl.textContent = "•••";
      turnEl.textContent = t.turnAI;
    } else if (state.turn === GOAT) {
      phaseEl.textContent = state.goatsToPlace > 0 ? t.phasePlace : t.phaseMove;
      turnEl.textContent = t.turnGoat;
    } else {
      phaseEl.textContent = t.phaseMove;
      turnEl.textContent = t.turnTiger;
    }

    const modeBadge = document.getElementById("lbl-current-mode");
    if (state.mode === "goat_ai") modeBadge.textContent = t.modeGoatAI;
    else if (state.mode === "tiger_ai") modeBadge.textContent = t.modeTigerAI;
    else modeBadge.textContent = t.mode2P;

    document.getElementById("stat-played").textContent = String(state.stats.played);
    document.getElementById("stat-goat-wins").textContent = String(state.stats.goatWins);
    document.getElementById("stat-tiger-wins").textContent = String(state.stats.tigerWins);
  }

  function applyLanguage() {
    const t = I18N[state.lang];
    document.getElementById("ui-title-main").textContent = t.titleMain;
    document.getElementById("ui-title-sub").textContent = t.titleSub;
    document.getElementById("lang-label").textContent = t.langBtn;
    document.getElementById("lbl-goats-hand").textContent = t.goatsInHand;
    document.getElementById("lbl-captured").textContent = t.capturedGoats;
    document.getElementById("lbl-btn-hint").textContent = t.btnHint;
    document.getElementById("lbl-btn-restart").textContent = t.btnRestart;

    document.getElementById("menu-heading").textContent = t.menuHeading;
    document.getElementById("menu-subheading").textContent = t.menuSubheading;
    document.getElementById("lbl-choose-role").textContent = t.chooseRole;
    document.getElementById("txt-role-goat").textContent = t.roleGoat;
    document.getElementById("txt-role-goat-desc").textContent = t.roleGoatDesc;
    document.getElementById("txt-role-tiger").textContent = t.roleTiger;
    document.getElementById("txt-role-tiger-desc").textContent = t.roleTigerDesc;
    document.getElementById("txt-role-2p").textContent = t.role2P;
    document.getElementById("txt-role-2p-desc").textContent = t.role2PDesc;

    document.getElementById("lbl-choose-diff").textContent = t.chooseDiff;
    document.getElementById("diff-easy").textContent = t.diffEasy;
    document.getElementById("diff-medium").textContent = t.diffMedium;
    document.getElementById("diff-hard").textContent = t.diffHard;

    document.getElementById("lbl-stat-played").textContent = t.statPlayed;
    document.getElementById("lbl-stat-goat-wins").textContent = t.statGoatWins;
    document.getElementById("lbl-stat-tiger-wins").textContent = t.statTigerWins;
    document.getElementById("btn-start-game").textContent = t.btnStartGame;

    document.getElementById("rules-heading").textContent = t.rulesHeading;
    document.getElementById("rules-content").innerHTML = t.rulesHTML;
    document.getElementById("btn-close-rules").textContent = t.btnCloseRules;

    document.getElementById("lbl-end-moves").textContent = t.endMoves;
    document.getElementById("lbl-end-captured").textContent = t.endCaptured;
    document.getElementById("lbl-btn-change-mode").textContent = t.btnChangeMode;
    document.getElementById("lbl-btn-play-again").textContent = t.btnPlayAgain;

    updateHUD();
  }

  // =========================================================================
  // 9. EVENT LISTENERS & YOUTUBE PLAYABLES INITIALIZATION
  // =========================================================================
  function bindEvents() {
    window.addEventListener("resize", resizeCanvas);

    canvas.addEventListener("pointerdown", (e) => {
      e.preventDefault();
      handleBoardTap(e.clientX, e.clientY);
    });

    // Language toggle
    document.getElementById("btn-lang").addEventListener("click", () => {
      state.lang = state.lang === "te" ? "en" : "te";
      state.stats.lang = state.lang;
      if (window.YTWrapper) window.YTWrapper.saveData(state.stats);
      applyLanguage();
      window.SoundFX.playSelect();
    });

    // Audio mute/unmute toggle
    document.getElementById("btn-audio").addEventListener("click", () => {
      window.SoundFX.userMuted = !window.SoundFX.userMuted;
      document.getElementById("audio-icon").textContent =
        window.SoundFX.isAllowed() ? "🔊" : "🔇";
      if (window.SoundFX.isAllowed()) window.SoundFX.playSelect();
    });

    // Rules modal
    document.getElementById("btn-help").addEventListener("click", () => {
      window.SoundFX.playSelect();
      document.getElementById("modal-rules").classList.remove("hidden");
    });
    document.getElementById("btn-close-rules").addEventListener("click", () => {
      window.SoundFX.playSelect();
      document.getElementById("modal-rules").classList.add("hidden");
    });

    // Menu modal
    document.getElementById("btn-menu").addEventListener("click", () => {
      window.SoundFX.playSelect();
      document.getElementById("modal-menu").classList.remove("hidden");
    });

    // Role buttons
    document.querySelectorAll(".role-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        window.SoundFX.playSelect();
        document.querySelectorAll(".role-btn").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        state.mode = btn.dataset.mode;
        document.getElementById("difficulty-group").style.display =
          state.mode === "pass_play" ? "none" : "block";
      });
    });

    // Difficulty buttons
    document.querySelectorAll(".diff-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        window.SoundFX.playSelect();
        document.querySelectorAll(".diff-btn").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        state.difficulty = btn.dataset.diff;
      });
    });

    // Start / Restart / Hint buttons
    document.getElementById("btn-start-game").addEventListener("click", () => {
      window.SoundFX.playPlace();
      startNewGame();
    });

    document.getElementById("btn-restart").addEventListener("click", () => {
      window.SoundFX.playPlace();
      startNewGame();
    });

    document.getElementById("btn-hint").addEventListener("click", () => {
      if (!isHumanTurn()) return;
      const suggested = chooseBestMove(state.turn, "hard");
      if (suggested) {
        state.hintMove = suggested;
        if (suggested.from !== -1) {
          state.selectedNode = suggested.from;
          state.legalMovesForSelected =
            state.turn === TIGER
              ? getLegalTigerMovesForNode(state.board, suggested.from)
              : ADJACENCY[suggested.from]
                  .filter((adj) => state.board[adj] === EMPTY)
                  .map((adj) => ({ type: "move", from: suggested.from, to: adj, captureNode: -1 }));
        }
        window.SoundFX.playSelect();
        showToast(I18N[state.lang].toastHintShown);
      }
    });

    // Game Over modal buttons
    document.getElementById("btn-play-again").addEventListener("click", () => {
      window.SoundFX.playPlace();
      startNewGame();
    });
    document.getElementById("btn-change-mode").addEventListener("click", () => {
      window.SoundFX.playSelect();
      document.getElementById("modal-gameover").classList.add("hidden");
      document.getElementById("modal-menu").classList.remove("hidden");
    });

    // YouTube Playables Pause / Resume / Audio hooks
    if (window.YTWrapper) {
      window.YTWrapper.onPause(() => {
        document.getElementById("modal-pause").classList.remove("hidden");
      });
      window.YTWrapper.onResume(() => {
        document.getElementById("modal-pause").classList.add("hidden");
      });
      window.YTWrapper.onAudioChange((enabled) => {
        document.getElementById("audio-icon").textContent =
          enabled && !window.SoundFX.userMuted ? "🔊" : "🔇";
      });
    }

    document.getElementById("btn-resume").addEventListener("click", () => {
      document.getElementById("modal-pause").classList.add("hidden");
    });
  }

  async function bootstrap() {
    resizeCanvas();
    bindEvents();

    // Load saved stats from YouTube Playables SDK (or localStorage fallback)
    if (window.YTWrapper) {
      const loaded = await window.YTWrapper.loadData(state.stats);
      state.stats = loaded;
      if (loaded.lang === "en" || loaded.lang === "te") {
        state.lang = loaded.lang;
      }
    }

    applyLanguage();
    startNewGame();
    // Show mode selection modal on initial launch so player can pick Goats/Tigers/2P
    document.getElementById("modal-menu").classList.remove("hidden");

    requestAnimationFrame(renderFrame);

    // Signal to YouTube Playables host that the game is fully interactive
    if (window.YTWrapper) {
      window.YTWrapper.notifyGameReady();
    }
  }

  window.addEventListener("DOMContentLoaded", bootstrap);
})();
