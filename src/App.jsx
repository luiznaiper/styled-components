import styled, { keyframes } from 'styled-components';

const Content = styled.div`
  padding: 20px 25px;
`;

const P = styled.p`
  font-size: 24px;
  color: red;
`;

const Button = styled.button`
  transition: box-shadow 0.2s ease;
  background-color: ${(props) => (props.primary ? 'red' : 'white')};
  color: ${(props) => (props.primary ? 'white' : 'red')};
  padding: 10px 15px;
  border: 2px solid red;
  border-radius: 4px;

  &:hover {
    box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.3);
  }

  &.secondary {
    background-color: salmon;
    border: 2px solid salmon;
    color: white;

    .info {
      color: green;
    }
  }
`;

const BlockButton = styled(Button)`
  width: 12rem;
  font-size: 24px;
`;

const Link = ({ className, ...props }) => {
  return <a className={className} {...props}></a>;
};

const StyledLink = styled(Link)`
  color: blue;
`;

const Input = styled.input.attrs((props) => ({
  type: 'text',
  color: props.color || 'red',
}))`
  font-size: 20px;
  border: 1px solid green;
  color: ${(props) => props.color};
`;

const Password = styled(Input).attrs({
  type: 'password',
})``;

const spin = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  display: inline-block;
  animation: ${spin} 2s linear infinite;
`;

function App() {
  return (
    <Content>
      <P>Sup bro</P>
      <Button>Send</Button>
      <Button className="secondary">
        Sender
        <p className="info">Hola</p>
      </Button>
      <Button primary>Receive</Button>
      <BlockButton primary as="a" href="#">
        Intercept
      </BlockButton>
      <Link>Link</Link>
      <StyledLink>Styled Link</StyledLink>
      <Input color="salmon" />
      <Password />
      <br />
      <Spinner>I am a spinner</Spinner>
    </Content>
  );
}

export default App;
