import styled from "styled-components";

export type SkillBarProps = {
  topScore: number;
  skillLevel: number;
};

export const SkillBar = ({ skillLevel, topScore }: SkillBarProps) => {
  return (
    <StyledSkillBar>
      <div className="skills level">{skillLevel}</div>
    </StyledSkillBar>
  );
};

const StyledSkillBar = styled.div`
  width: {topScore};                            // change to inline style of div
  background-color: var(--custom-color-grey);
  border-radius: 13px;

  .skills {
    text-align: right;
    padding-top: 10px;
    padding-bottom: 10px;
    color: var(--custom-color-white);
  }

  .level {
    width: {skillLevel};                        // change to inline style of div
    background-color: var(--custom-color-green);
  }
`;
