export type PlayerType = 'human' | 'bot'

export class Player {
  public type: PlayerType = 'human'
 
  constructor(playerType?: PlayerType) {
    if (playerType) this.type = playerType
  }

  public nextHand () {
    return 0
  } 
  
}