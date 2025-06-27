import { PieceColor } from "chess.js";
import { Bishop } from "objects/Pieces/Bishop/Bishop";
import { King } from "objects/Pieces/King/King";
import { Knight } from "objects/Pieces/Knight/Knight";
import { Pawn } from "objects/Pieces/Pawn/Pawn";
import { Queen } from "objects/Pieces/Queen/Queen";
import { Rook } from "objects/Pieces/Rook/Rook";

export type PromotablePieces = "r" | "n" | "q" | "b";

// for simplicity queen and knight are also in arrays to not provide new methods for updating in scene
export interface PieceSet {
  p: Pawn[];
  r: Rook[];
  n: Knight[];
  b: Bishop[];
  q: Queen[];
  k: King[];
}

export type Pieces = {
  [key in PieceColor]: PieceSet;
} & {
  b: PieceSet;
  w: PieceSet;
};
