import SqlChallengePage from '@components/common/SqlChallengePage'
import allChallenges from '@/challenges/updateChallenges'
const UpdateChallenge = () => {
  return (
    <SqlChallengePage
      fromPath="/update-challenge"
      allChallenges={allChallenges}
    />
  )
}

export default UpdateChallenge
