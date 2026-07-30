import './Spinner.css';

// Dumb component / stateless
export function Spinner() {
  return (
    <div className='spinner-center'>
      <div
        className="spinner"
        role="status"
        aria-label="Loading"
      />
    </div>
    
  );
}
