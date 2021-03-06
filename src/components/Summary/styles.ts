import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 2rem;
  margin-top: -10rem;

  div{
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);

    border-left: 0px solid var(--blue-light);
    transition: border-left 0.15s;

    &:hover {
      border-left: 10px solid var(--blue-light);
    }

    header{
      display: flex;
      gap: 1rem;
      align-items: center;
      justify-content: space-between;
    }

    strong{
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }

    &.highlight-background{
      background: var(--green);
      color: #FFF;
    }
  }
`;