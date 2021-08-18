import { render, screen } from '@testing-library/react';
import Student from './Student';

test('Renders Student', async () => {
  const student = {
    "id": "1",
    "name": "test"
  }

  render(<Student student={student} />);
  const studentElement = screen.getByText(/test/i);
  expect(studentElement).toBeInTheDocument();
});
