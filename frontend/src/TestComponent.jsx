function TestComponent() {
  return (
    <div style={{ 
      padding: '2rem', 
      textAlign: 'center',
      backgroundColor: '#0a0f1c',
      color: 'white',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <h1 style={{ color: '#0070f3' }}>React App is Working!</h1>
      <p>If you can see this, React is rendering correctly.</p>
      <button style={{ 
        backgroundColor: '#0070f3',
        color: 'white',
        padding: '0.5rem 1rem',
        border: 'none',
        borderRadius: '0.25rem',
        cursor: 'pointer',
        marginTop: '1rem'
      }}>
        Test Button
      </button>
    </div>
  );
}

export default TestComponent;