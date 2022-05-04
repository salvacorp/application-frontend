import { ChangeEvent } from "react";
import { Button, Input } from "../../../../components";
import { Candidate } from "../../../../types/Candidate";

import styles from "./CreateCandidateForm.module.scss";

type Props = {
  handelSubmit: () => void;
  handleInputChange: (
    s: string
  ) => (event: ChangeEvent<HTMLInputElement>) => void;
  data: Candidate;
};

const CreateCandidateForm = ({
  handelSubmit,
  handleInputChange,
  data,
}: Props): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <form className={styles.form} action="">
        <h4>Personal Info</h4>

        <div className={styles["two-cols"]}>
          <Input
            label="name"
            onChange={handleInputChange("name")}
            value={data?.name}
          />
          <Input
            label="last name"
            onChange={handleInputChange("last")}
            value={data?.last}
          />
          <Input
            label="birth"
            type="date"
            onChange={handleInputChange("birth")}
            value={data?.birth}
          />
        </div>

        <h4>Contact Info</h4>

        <div className={styles["two-cols"]}>
          <Input
            label="phone"
            type="tel"
            onChange={handleInputChange("phone")}
            value={data?.phone}
          />
          <Input
            label="email"
            type="email"
            onChange={handleInputChange("email")}
            value={data?.email}
          />
          <Input
            label="linkedin"
            type="url"
            onChange={handleInputChange("linkedin")}
            value={data?.linkedin}
          />
        </div>

        <h4>Career</h4>

        <div className={styles["two-cols"]}>
          <Input
            label="title"
            onChange={handleInputChange("career_title")}
            value={data?.career_title}
          />
          <Input
            label="experience"
            onChange={handleInputChange("career_experience")}
            value={data?.career_experience}
          />
          <Input
            label="skills"
            onChange={handleInputChange("skills")}
            value={data?.skills}
          />
        </div>
      </form>

      <Button title="Create Candidate" onClick={handelSubmit} />
    </div>
  );
};

export { CreateCandidateForm };
