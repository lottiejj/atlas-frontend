import { render, screen } from '@testing-library/react';
import Students from './Students';
import data from './__mocks__/student-data.js'

beforeEach(() => {
  global.fetch = jest.fn(() => Promise.resolve({ json: () => Promise.resolve(data) }))
})

test('Renders Students', async () => {
  render(<Students />);
  const lastnameHeader = screen.getElementById("lastNameHeader")
  expect(lastnameHeader).toBeInTheDocument()
  // const firstnameHeader = screen.getByTestId("firstNameHeader")
  // expect(firstnameHeader).toBeInTheDocument()
  // const studentElement = await screen.findByText(/MOCK name/i);
  // expect(studentElement).toBeInTheDocument();
});
