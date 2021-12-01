import styled from 'styled-components';


function NewsLetterSignUp(props) {
  return (
		<form action='' method='get'>
		    <input type='email' name='email' id='email' required />
		    <input type="submit" value="Sign Up" />
		</form>
	)
};

let NewsLetterForm = styled.form``;

let NewsLetterFormEmail = styled.input``;

let NewsLetterFormButton = styled.input``;

export default NewsLetterSignUp;