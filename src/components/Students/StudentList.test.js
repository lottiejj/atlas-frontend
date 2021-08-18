import { render, screen } from '@testing-library/react';
import StudentList from './StudentList';

test('Renders StudentList', async () => {
  const students = [
    {
      "id": "1",
      "firstName": "test",
      "lastName": "testerson",
      "githubUsername": "justyourstandardghuser",
      "email": "real@email.com"
    }
  ]
  render(<StudentList students={students} />);
  const studentElement = screen.getByText(/test/i);
  expect(studentElement).toBeInTheDocument();
});