import { FilesLetters } from '../constants';
import { TilePosition } from '../models';

export class PositionUtils {

    static splitString(position: string | undefined): TilePosition {
        if (position === undefined) {
            return { file: -1, rank: -1 };
        }

        const [fileSelectedString, rankSelectedString] = position.split('');
        const file = fileSelectedString ? FilesLetters[fileSelectedString as keyof typeof FilesLetters] : -1;
        const rank = rankSelectedString ? (parseInt(rankSelectedString) - 1) : -1;
    
        return { file: file, rank: rank };
    }

    static getString(tilePosition: TilePosition) {
        if (tilePosition.file === -1 || tilePosition.rank === -1) {
            return '';
        }

        return '' + FilesLetters[tilePosition.file] + (tilePosition.rank + 1);
    }
}