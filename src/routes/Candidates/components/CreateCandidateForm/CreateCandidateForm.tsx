import { Button, Input } from '../../../../components'

import styles from './CreateCandidateForm.module.scss';

type Props = {};

const CreateCandidateForm = ({}: Props): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <form action="">
        <h4>Personal Info</h4>

        <div className={styles['two-cols']}>
          <Input label="name" />
          <Input label="last name" />
          <Input label="birth" />
        </div>

        <h4>Contact Info</h4>

        <div className={styles['two-cols']}>
          <Input label="phone" />
          <Input label="email" />
          <Input label="linkedin" />
        </div>

        <h4>Career</h4>
        
        <div className={styles['two-cols']}>
          <Input label="title" />
          <Input label="experience" />
          <Input label="skills" />
        </div>
      </form>

      <Button title="Create Candidate" />
    </div>
  )
};

export { CreateCandidateForm };
