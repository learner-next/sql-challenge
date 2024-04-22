import SqlChallengePage from '@components/common/SqlChallengePage'
import allChallenges from '@/challenges/selectChallenges'

const SelectChallenge = () => {
  return (
    <SqlChallengePage
      fromPath="/select-challenge"
      allChallenges={allChallenges}
    />
  )
}

export default SelectChallenge
