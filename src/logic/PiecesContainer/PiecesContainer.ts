import { World } from "cannon-es";
import { PieceColor } from "chess.js";
import { Bishop } from "objects/Pieces/Bishop/Bishop";
import { ChessBoard } from "objects/ChessBoard/ChessBoard";
import { King } from "objects/Pieces/King/King";
import { Knight } from "objects/Pieces/Knight/Knight";
import { Pawn } from "objects/Pieces/Pawn/Pawn";
import { Piece } from "objects/Pieces/Piece/Piece";
import { PieceChessPosition } from "objects/Pieces/Piece/types";
import { Queen } from "objects/Pieces/Queen/Queen";
import { Rook } from "objects/Pieces/Rook/Rook";
import { Vector3 } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Pieces, PieceSet, PromotablePieces } from "./types";

export const CHESS_BOARD_NAME = "ChessBoard";
export const PAWN_NAME = "Pawn";
export const ROOK_NAME = "Rook";
export const KNIGHT_NAME = "Knight";
export const BISHOP_NAME = "Bishop";
export const QUEEN_NAME = "Queen";
export const KING_NAME = "King";

export class PiecesContainer {
  private pieces: Pieces;

  constructor(
    private chessBoard: ChessBoard,
    private loader: GLTFLoader,
    private world: World
  ) {}

  private initPawns(color: PieceColor): Pawn[] {
    const pawns: Pawn[] = [];
    const row = color === "w" ? 1 : 6;

    for (let i = 7; i >= 0; i--) {
      const name = this.concatPieceName(PAWN_NAME, color, i);
      const pawn = new Pawn(name, {
        initialChessPosition: { row, column: i },
        color,
      });

      this.setupPiecePosition(pawn, { row, column: i });
      pawns.push(pawn);
    }
    return pawns;
  }

  private initRooks(color: PieceColor): Rook[] {
    const rooks: Rook[] = [];
    const row = this.getMajorPieceInitialRow(color);

    rooks.push(this.createRook(color, { row, column: 0 }));
    rooks.push(this.createRook(color, { row, column: 7 }));

    return rooks;
  }

  private createRook(
    color: PieceColor,
    chessPosition: PieceChessPosition,
    promoted?: boolean
  ): Rook {
    const name = this.concatPieceName(
      ROOK_NAME,
      color,
      chessPosition.column,
      promoted
    );

    const rook = new Rook(name, {
      initialChessPosition: chessPosition,
      color,
    });

    this.setupPiecePosition(rook, chessPosition);
    return rook;
  }

  private initKnights(color: PieceColor): Knight[] {
    const row = this.getMajorPieceInitialRow(color);
    const knights = [];

    knights.push(this.createKnight(color, { row, column: 1 }));
    knights.push(this.createKnight(color, { row, column: 6 }));

    return knights;
  }

  private createKnight(
    color: PieceColor,
    chessPosition: PieceChessPosition,
    promoted?: boolean
  ): Knight {
    const name = this.concatPieceName(
      KNIGHT_NAME,
      color,
      chessPosition.column,
      promoted
    );

    const knight = new Knight(name, {
      initialChessPosition: chessPosition,
      color,
    });

    this.setupPiecePosition(knight, chessPosition);

    if (color === "b") {
      knight.body.quaternion.set(0, Math.PI, 0, 0);
    }

    return knight;
  }

  private initBishops(color: PieceColor): Bishop[] {
    const row = this.getMajorPieceInitialRow(color);
    const bishops = [];

    bishops.push(this.createBishop(color, { row, column: 2 }));
    bishops.push(this.createBishop(color, { row, column: 5 }));

    return bishops;
  }

  private createBishop(
    color: PieceColor,
    chessPosition: PieceChessPosition,
    promoted?: boolean
  ): Bishop {
    const name = this.concatPieceName(
      BISHOP_NAME,
      color,
      chessPosition.column,
      promoted
    );

    const bishop = new Bishop(name, {
      initialChessPosition: chessPosition,
      color,
    });

    this.setupPiecePosition(bishop, chessPosition);

    bishop.body.quaternion.y = Math.PI / 3;

    return bishop;
  }

  private initQueen(color: PieceColor): Queen[] {
    const column = 4;
    const row = this.getMajorPieceInitialRow(color);

    const queen = this.createQueen(color, { row, column });
    return [queen];
  }

  private createQueen(
    color: PieceColor,
    position: PieceChessPosition,
    promoted?: boolean
  ): Queen {
    const name = this.concatPieceName(
      QUEEN_NAME,
      color,
      position.column,
      promoted
    );

    const queen = new Queen(name, {
      initialChessPosition: position,
      color,
    });

    this.setupPiecePosition(queen, position);

    return queen;
  }

  private initKing(color: PieceColor): King[] {
    const column = 3;
    const name = this.concatPieceName(KING_NAME, color, column);
    const row = this.getMajorPieceInitialRow(color);

    const king = new King(name, {
      initialChessPosition: { row, column },
      color,
    });

    this.setupPiecePosition(king, { row, column });

    return [king];
  }

  private concatPieceName(
    name: string,
    color: PieceColor,
    column: number,
    promoted?: boolean
  ): string {
    const promotedMsg = promoted ? "Promoted" : "";
    return `${name}${column}${color === "w" ? "White" : "Black"}` + promotedMsg;
  }

  private getMajorPieceInitialRow(color: PieceColor): number {
    return color === "w" ? 0 : 7;
  }

  private setupPiecePosition(
    piece: Piece,
    chessPosition: PieceChessPosition
  ): void {
    const initialPosition = this.getFieldPosition(chessPosition);
    const pieceBody = piece.init(initialPosition, this.loader);

    this.world.addBody(pieceBody);
  }

  private getFieldPosition(chessPosition: PieceChessPosition): Vector3 {
    const { row, column } = chessPosition;
    const field = this.chessBoard.getField(row, column);
    const position = new Vector3();

    field.getWorldPosition(position);

    return position;
  }

  private reducePieces(color: PieceColor): Piece[] {
    const pieceSet = this.pieces[color];
    let pieces: Piece[] = [];

    for (const value of Object.values(pieceSet)) {
      pieces = [...pieces, ...value];
    }

    return pieces;
  }

  private updateWhitePieces(): void {
    this.updatePieces("w");
  }

  private updateBlackPieces(): void {
    this.updatePieces("b");
  }

  private updatePieces(color: PieceColor): void {
    for (const pieceSet of Object.values(this.pieces[color])) {
      pieceSet.forEach((el: Piece) => el.update());
    }
  }

  removePiece(
    color: PieceColor,
    type: keyof PieceSet,
    chessPosition: PieceChessPosition
  ): number | undefined {
    const pieceSet: Piece[] = this.pieces[color][type];
    const { row: rowToRemove, column: columnToRemove } = chessPosition;

    const removedPieceIndex = pieceSet.findIndex((piece) => {
      const { row, column } = piece.chessPosition;

      return row === rowToRemove && column === columnToRemove;
    });

    if (removedPieceIndex === -1) {
      return;
    }
    const removedPiece = pieceSet[removedPieceIndex];
    this.world.removeBody(removedPiece.body);
    pieceSet.splice(removedPieceIndex, 1);

    removedPiece.dispose();
    return removedPiece.id;
  }

  addPromotedPiece(
    color: PieceColor,
    type: PromotablePieces,
    chessPosition: PieceChessPosition
  ): Piece {
    let promotedPiece: Piece;
    switch (type) {
      case "q":
        promotedPiece = this.createQueen(color, chessPosition, true);
        break;
      case "n":
        promotedPiece = this.createKnight(color, chessPosition, true);
        break;
      case "b":
        promotedPiece = this.createBishop(color, chessPosition, true);
        break;
      case "r":
        promotedPiece = this.createRook(color, chessPosition, true);
        break;
    }

    this.pieces[color][type].push(promotedPiece);

    return promotedPiece;
  }

  initPieces(): void {
    this.pieces = {
      b: {
        p: this.initPawns("b"),
        r: this.initRooks("b"),
        n: this.initKnights("b"),
        b: this.initBishops("b"),
        q: this.initQueen("b"),
        k: this.initKing("b"),
      },
      w: {
        p: this.initPawns("w"),
        r: this.initRooks("w"),
        n: this.initKnights("w"),
        b: this.initBishops("w"),
        q: this.initQueen("w"),
        k: this.initKing("w"),
      },
    };
  }

  getPiece(
    color: PieceColor,
    type: keyof PieceSet,
    chessPosition: PieceChessPosition
  ): Piece | undefined {
    const pieceSet: Piece[] = this.pieces[color][type];
    const { row: rowToFind, column: columnToFind } = chessPosition;

    return pieceSet.find((el) => {
      const { row, column } = el.chessPosition;

      return row === rowToFind && column === columnToFind;
    });
  }

  getAllPieces(): Piece[] {
    return [...this.reducePieces("w"), ...this.reducePieces("b")];
  }

  update(): void {
    this.updateBlackPieces();
    this.updateWhitePieces();
  }

  cleanup(): void {
    const pieces = this.getAllPieces();

    pieces.forEach((piece) => {
      piece.dispose();
    });
  }
}
