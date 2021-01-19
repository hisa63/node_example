import { describe } from 'mocha'
import * as chai from 'chai'
import {Game} from '../../../src/lib/models/game.model'
import {Player} from '../../../src/lib/models/player.model'


const assert = chai.assert
const expect = chai.expect

describe('Game', () => {
  it('should pass', () => {
    expect(true).to.equal(true)
  })

  it('should create game properly', () => {
    const game = new Game(['human', 'bot'])
    expect(game).to.instanceOf(Game)
    expect(game.players.length).to.equal(2)

    expect(game.players[0].type).to.equal('human')
    expect(game.players[1].type).to.equal('bot')
  })

  it('should create new player instances successfully', () => {
    const player = new Player()    
    console.log(player.nextHand())
  })

})
