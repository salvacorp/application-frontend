import { Button, Input } from '../../../../components'
import { useForms } from '../../../../hooks'

import styles from './CreateCandidateForm.module.scss';

type Props = {};

const CreateCandidateForm = ({}: Props): JSX.Element => {
  const { handleInputChange, data } = useForms();

  const handelSubmit = () => {
    console.log({ data})
  }

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} action="">
        <h4>Personal Info</h4>

        <div className={styles['two-cols']}>
          <Input label="name" onChange={handleInputChange('name')} />
          <Input label="last name" onChange={handleInputChange('last')} />
          <Input label="birth" type="date" onChange={handleInputChange('birth')} />
        </div>

        <h4>Contact Info</h4>

        <div className={styles['two-cols']}>
          <Input label="phone" type="tel" onChange={handleInputChange('phone')} />
          <Input label="email" type="email" onChange={handleInputChange('email')} />
          <Input label="linkedin" type="url" onChange={handleInputChange('linkedin')} />
        </div>

        <h4>Career</h4>
        
        <div className={styles['two-cols']}>
          <Input label="title" onChange={handleInputChange('career_title')} />
          <Input label="experience" onChange={handleInputChange('career_experience')} />
          <Input label="skills" onChange={handleInputChange('skills')} />
        </div>
      </form>

      <Button title="Create Candidate" onClick={handelSubmit} />
    </div>
  )
};

export { CreateCandidateForm };
