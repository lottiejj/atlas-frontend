import { render, screen } from '@testing-library/react';
import StudentList from './StudentList';

test('Renders StudentList', async () => {
  const students = [
    {
      "id": "1",
      "firstName": "Test",
      "lastName": "Testerson",
      "githubUsername": "iTest",
      "email": "real@email.com"
    },
    {
      "id": "2",
      "firstName": "Anonymous",
      "lastName": "User",
      "githubUsername": "ucantseeme",
      "email": "invisible@email.com"
    }
  ]
  render(<StudentList students={students} />);
  const studentElement = screen.getByText(/test/i);
  expect(studentElement).toBeInTheDocument();
});