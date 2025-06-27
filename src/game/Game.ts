import { ChessInstance, PieceColor } from "chess.js";
import { CustomLoadingManager } from "logic/LoadingManager/LoadingManager";
import { BasicScene } from "scenes/BasicScene/BasicScene";
import { ChessScene } from "scenes/ChessScene/ChessScene";
import { ReinhardToneMapping, sRGBEncoding, WebGLRenderer } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { GameOptions } from "./types";

export class Game {
  private width = window.innerWidth;
  private height = window.innerHeight;

  private loadingManager: CustomLoadingManager;
  private loader: GLTFLoader;
  private renderer: WebGLRenderer;
  private activeScene: BasicScene | null;

  private options: GameOptions;

  private resizeListener: () => void;

  constructor(options?: GameOptions) {
    this.options = options || {};

    this.setupLoader();
    this.setupRenderer();

    this.addListenerOnResize(this.renderer);

    this.activeScene = this.createChessScene();
  }

  private setupLoader(): void {
    this.loadingManager = new CustomLoadingManager();
    this.loader = new GLTFLoader(this.loadingManager);
  }

  private setupRenderer(): void {
    this.renderer = new WebGLRenderer({
      canvas: document.getElementById("app") as HTMLCanvasElement,
      alpha: false,
      antialias: true,
      powerPreference: "high-performance",
    });

    this.renderer.setSize(this.width, this.height);

    this.renderer.toneMapping = ReinhardToneMapping;
    this.renderer.toneMappingExposure = 3;
    this.renderer.physicallyCorrectLights = true;
    this.renderer.outputEncoding = sRGBEncoding;
    this.renderer.shadowMap.enabled = true;
  }

  private addListenerOnResize(renderer: WebGLRenderer): void {
    this.resizeListener = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", this.resizeListener, false);
  }

  private createChessScene(): ChessScene {
    return new ChessScene({
      renderer: this.renderer,
      loader: this.loader,
      options: {
        addGridHelper: this.options.addGridHelper,
        lightHelpers: this.options.lightHelpers,
        cannonDebugger: this.options.cannonDebugger,
      },
    });
  }

  private createEndPopup(endMsg: string): void {
    const div = document.createElement("DIV");
    const btnDiv = document.createElement("DIV");
    const restartBtn = document.createElement("BUTTON");
    const span = document.createElement("SPAN");

    restartBtn.onclick = () => {
      this.restartGame();
      div.remove();
    };

    restartBtn.innerHTML = "Restart Game";
    span.innerHTML = endMsg;

    btnDiv.classList.add("end-popup-btn");
    restartBtn.classList.add("btn-small");

    div.classList.add("center-mid");
    div.classList.add("end-popup");

    div.appendChild(span);
    btnDiv.appendChild(restartBtn);
    div.appendChild(btnDiv);

    document.body.appendChild(div);
  }

  private restartGame(): void {
    this.activeScene.cleanup();
    this.activeScene = this.createChessScene();
    this.activeScene.init();
    this.activeScene.start(
      (chessInstance: ChessInstance, playerColor: PieceColor) => {
        this.onEndGame(chessInstance, playerColor);
      }
    );
  }

  private onEndGame(chessInstance: ChessInstance, playerColor: PieceColor) {
    const endMsg = this.getEndGameMessage(chessInstance, playerColor);

    this.createEndPopup(endMsg);
  }

  private getEndGameMessage(
    chessInstance: ChessInstance,
    playerColor: PieceColor
  ): string {
    const isPlayerColor = chessInstance.turn() === playerColor;

    if (chessInstance.in_checkmate()) {
      return isPlayerColor
        ? "You lost the game by checkmate"
        : "You won the game by checkmate";
    }

    if (chessInstance.in_stalemate()) {
      return "The game ended with draw by stalemate";
    }

    if (chessInstance.in_threefold_repetition()) {
      return "The game ended with threefold repetition";
    }

    if (chessInstance.in_draw()) {
      return "The game ended with draw";
    }
  }

  private initGame(): void {
    if (!this.activeScene) {
      throw new Error("There is no active scene at the moment");
    }

    this.activeScene.init();

    this.addStartButton();
  }

  private addStartButton(): void {
    const div = document.createElement("DIV");
    const startBtn = document.createElement("BUTTON");
    startBtn.classList.add("btn");
    startBtn.innerHTML = "Start Game";

    startBtn.onclick = () => {
      this.activeScene.start(
        (chessInstance: ChessInstance, playerColor: PieceColor) => {
          this.onEndGame(chessInstance, playerColor);
        }
      );
      div.remove();
    };

    div.classList.add("center-mid");
    div.appendChild(startBtn);

    document.body.appendChild(div);
  }

  private updateGame(): void {
    if (!this.activeScene) {
      throw new Error("There is no active scene at the moment");
    }

    this.activeScene.world.fixedStep();
    this.activeScene.cannonDebugger?.update();
    this.activeScene.update();
  }

  init(): void {
    try {
      this.initGame();
    } catch (e) {
      console.error(e?.message);
    }
  }

  update(): void {
    try {
      this.updateGame();
    } catch (e) {
      console.error(e?.message);
    }
  }

  cleanup(): void {
    window.removeEventListener("resize", this.resizeListener);
  }
}
