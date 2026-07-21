Backendless.initApp('16FFD132-607E-43A7-8EBE-10A4FC1D0A95', '17F7CF5F-EC5A-41A9-854E-16C03097888A');

Backendless.Data.of('TestTable').save({ message: 'Hello from my app' })
  .then(result => console.log('Saved:', result))
  .catch(err => console.error('Error:', err));
