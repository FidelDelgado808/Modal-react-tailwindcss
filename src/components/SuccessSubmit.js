import { useState } from "react";

function isSuccess() {
  const [ status, setStatus] = useState(undefined);

  const handleSubmit = (e) => {
    db.collection('contacts')
    .add ({
      name: name,
      email: email,

    })
    .then (() => {
      setStatus({ type: 'success'});
    })
    .catch ((error) => {
      setStatus ({ type: 'error', error});
    });
  };

  
  return (
		<>
			{status?.type === 'success' && (
				<p>"Du har nu tilmeldt dig vores nyhedsbrev."</p>
			)}
			{status?.type === 'error' && <p>"Der skete en fejl."</p>}
		</>
	);
}

export default isSuccess;