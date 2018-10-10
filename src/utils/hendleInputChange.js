export const handleInputChange = (setState) => (event) => {
  const target = event.target;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  const name = target.name;
  setState({
    [name]: value
  });
}
