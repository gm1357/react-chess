# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build and Development Commands

```bash
yarn start      # Run dev server at http://localhost:3000
yarn build      # Production build to /build
yarn test       # Run tests in interactive watch mode
yarn test --watchAll=false  # Run tests once (CI mode)
```

## Architecture Overview

This is a React + TypeScript chess game using Create React App.

### State Flow

- **App** (`src/components/App/`) - Manages turn state (`isBlackTurn`) and check status (`isCheck`)
- **Board** (`src/components/Board/`) - Manages piece positions (`piecesPositions`), selection state, and move execution
- State flows down: App → Board → Tile → Piece

### Piece Movement System

Each piece type implements the `PieceController` interface (`src/models/pieceController.ts`):

```typescript
interface PieceController {
    pieceType: PIECE_TYPES;
    isBlack: boolean;
    getValidMoves(position, piecesPosition, isBlackTurn): string[];
}
```

Controllers live alongside their piece components (e.g., `src/components/Pawn/pawnController.ts`). The Queen reuses Rook and Bishop controller logic.

### Position System

- Board uses algebraic notation strings ("e4", "a1")
- `PositionUtils` (`src/utils/positionUtils.ts`) converts between string notation and `{file, rank}` coordinates
- File: 0-7 (a-h), Rank: 0-7 (1-8)

### Key Files

- `src/constants/initialPositions.tsx` - Initial board setup with all piece positions
- `src/utils/getValidMoves.ts` - Entry point for move validation
- `src/utils/isCheck.ts` - Check detection after moves
