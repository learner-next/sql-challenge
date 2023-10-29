import mainChallenges from './selectChallenges'
import type { Challenge } from '@/type'

/**
 * Returns the challenge object with the specified key ID.
 * @param keyId The key ID of the challenge to retrieve.
 * @returns The challenge object with the specified key ID, or undefined if not found.
 */
export const getChallengeByKey = (keyId: string) => {
  return (
    mainChallenges.find(challenge => challenge.id === keyId) ||
    mainChallenges[0]
  )
}

/**
 * Returns the index of the current challenge in the mainChallenges array.
 * @param currentChallenge The current challenge to find the index of.
 * @returns The index of the current challenge in the mainChallenges array.
 */
export const getCurrentChallengeNum = (currentChallenge: Challenge) => {
  return mainChallenges.findIndex(
    challenge => challenge.id === currentChallenge.id
  )
}

/**
 * Returns the previous challenge object based on the current challenge object.
 * @param currentChallenge - The current challenge object.
 * @returns The previous challenge object.
 */
export const getPrevChallenge = (currentChallenge: Challenge) => {
  const currentChallengeNum = getCurrentChallengeNum(currentChallenge)
  if (currentChallengeNum <= 0) return mainChallenges[0]
  return mainChallenges[currentChallengeNum - 1]
}

/**
 * Returns the next challenge object based on the current challenge object.
 * @param currentChallenge - The current challenge object.
 * @returns The next challenge object.
 */
export const getNextChallenge = (currentChallenge: Challenge) => {
  const currentChallengeNum = getCurrentChallengeNum(currentChallenge)
  if (currentChallengeNum >= mainChallenges.length - 1)
    return mainChallenges[mainChallenges.length - 1]
  return mainChallenges[currentChallengeNum + 1]
}
