import type { Challenge } from '@/type'

/**
 * Returns the challenge object with the specified key ID.
 * @param keyId The key ID of the challenge to retrieve.
 * @returns The challenge object with the specified key ID, or undefined if not found.
 */
export const getChallengeByKey = (
  keyId: string,
  allChallenges: Challenge[]
) => {
  return (
    allChallenges.find(challenge => challenge.id === keyId) || allChallenges[0]
  )
}

/**
 * Returns the index of the current challenge in the mainChallenges array.
 * @param currentChallenge The current challenge to find the index of.
 * @returns The index of the current challenge in the mainChallenges array.
 */
export const getCurrentChallengeNum = (
  currentChallenge: Challenge,
  allChallenges: Challenge[]
) => {
  return allChallenges.findIndex(
    challenge => challenge.id === currentChallenge.id
  )
}

/**
 * Returns the previous challenge object based on the current challenge object.
 * @param currentChallenge - The current challenge object.
 * @returns The previous challenge object.
 */
export const getPrevChallenge = (
  currentChallenge: Challenge,
  allChallenges: Challenge[]
) => {
  const currentChallengeNum = getCurrentChallengeNum(
    currentChallenge,
    allChallenges
  )
  if (currentChallengeNum <= 0) return allChallenges[0]
  return allChallenges[currentChallengeNum - 1]
}

/**
 * Returns the next challenge object based on the current challenge object.
 * @param currentChallenge - The current challenge object.
 * @returns The next challenge object.
 */
export const getNextChallenge = (
  currentChallenge: Challenge,
  allChallenges: Challenge[]
) => {
  const currentChallengeNum = getCurrentChallengeNum(
    currentChallenge,
    allChallenges
  )
  if (currentChallengeNum >= allChallenges.length - 1)
    return allChallenges[allChallenges.length - 1]
  return allChallenges[currentChallengeNum + 1]
}
