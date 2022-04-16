import { render, screen } from '@testing-library/react';
import App from './App';

describe("App component functionality",()=>{

  test('should render my name', () => {
    render(<App />);
    const nameElement = screen.getByText(/Pawan Kotak/i);
    expect(nameElement).toBeInTheDocument();

  });
  
  test('should render skills header',() =>{
    render(<App></App>);
    const skillsElement = screen.getByRole("heading",  {name: "Skills"});
    expect(skillsElement).toBeInTheDocument();
  });
  
  test('should render skill item', () =>{
    render(<App></App>);
    const skillTestElement = screen.getByTestId('skill-test-id-0');
    expect(skillTestElement).toBeInTheDocument();
  });

  test('should render social item', () => {
    render(<App></App>);
    const socialTestElement = screen.getByTestId("social-test-id-0");
    expect(socialTestElement).toBeInTheDocument();
  });
})
