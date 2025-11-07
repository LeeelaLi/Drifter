"use client";

export default function TestSimple() {
  const handleClick = async () => {
    try {
      const res = await fetch('/api/uploadthing');
      const data = await res.json();
      console.log('API Response:', data);
      alert(JSON.stringify(data));
    } catch (error) {
      console.error('Error:', error);
      alert('Error: ' + error);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl mb-4">Simple Test</h1>
      <button 
        onClick={handleClick}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Test API
      </button>
    </div>
  );
}