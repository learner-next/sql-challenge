import SqlChallengePage from '@components/common/SqlChallengePage'
import allChallenges from '@/challenges/createChallenges'

const CreateChallenge = () => {
  return (
    <SqlChallengePage
      fromPath="/create-challenge"
      allChallenges={allChallenges}
    />
  )
}

export default CreateChallenge
