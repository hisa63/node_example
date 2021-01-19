import { Player, PlayerType } from "./player.model";

export class Game {
  public players: Player[]

  constructor (playerTypes: PlayerType[]) {
    this.players = this.createPlayers(playerTypes)
  }

  private createPlayers (playerTypes: PlayerType[]): Player[] {
    return playerTypes.map(playerType => {
      return new Player(playerType)
    })
  }
}
