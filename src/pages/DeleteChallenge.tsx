import SqlChallengePage from '@components/common/SqlChallengePage'
import allChallenges from '@/challenges/deleteChallenges'
const DeleteChallenge = () => {
  return (
    <SqlChallengePage
      fromPath="/create-challenge"
      allChallenges={allChallenges}
    />
  )
}

export default DeleteChallenge
