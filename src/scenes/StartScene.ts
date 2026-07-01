import Phaser from 'phaser';
import { GAME_WIDTH, GAME_HEIGHT } from '../constants/gameConfig';

export class StartScene extends Phaser.Scene {
    constructor() {
        super('StartScene');
    }

    create() {
        this.add.text(GAME_WIDTH / 2, 120, '잔소리 피하기 런', {
            fontSize: '48px',
            color: '#ffffff',
            fontFamily: 'Arial',
        }).setOrigin(0.5);

        this.add.text(GAME_WIDTH / 2, 190, '엄마의 잔소리를 피해 최대한 오래 달려라!', {
            fontSize: '24px',
            color: '#dddddd',
            fontFamily: 'Arial',
        }).setOrigin(0.5);

        this.add.rectangle(GAME_WIDTH / 2, 290, 280, 70, 0x333333)
            .setStrokeStyle(3, 0xffffff);

        this.add.text(GAME_WIDTH / 2, 290, '게임 시작', {
            fontSize: '32px',
            color: '#ffffff',
            fontFamily: 'Arial',
        }).setOrigin(0.5);

        this.add.text(GAME_WIDTH / 2, 400, '↑ / Space : 점프    ↓ : 숙이기', {
            fontSize: '22px',
            color: '#bbbbbb',
            fontFamily: 'Arial',
        }).setOrigin(0.5);
    }
}