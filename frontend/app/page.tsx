'use client'
import { useState, useEffect } from 'react';
import Nav from '../components/Nav';
import Card from '../components/Card';

export default function Home() {
  const [computerStats, setComputerStats] = useState(null);
  const [systemInfo, setSystemInfo] = useState(null);

  useEffect(() => {
    const fetchComputerStats = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/computer-stats');
        if (!response.ok) {
          throw new Error('Failed to fetch computer stats');
        }
        const data = await response.json();
        setComputerStats(data);
      } catch (error) {
        console.error('Error fetching computer stats:', error);
      }
    };

    const fetchSystemInfo = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/system-info');
        if (!response.ok) {
          throw new Error('Failed to fetch system info');
        }
        const data = await response.json();
        setSystemInfo(data);
      } catch (error) {
        console.error('Error fetching system info:', error);
      }
    };

    // Fetch initial computer stats and system info when component mounts
    fetchComputerStats();
    fetchSystemInfo();

    // Setup interval to fetch computer stats every half a second
    const intervalId = setInterval(fetchComputerStats, 500);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []); 

  return (
    <main className='bg-[#1f1f1f] text-white h-screen'>
      <Nav />

      {/* Display systemInfo */}
      {systemInfo && (
          <div className='rounded-xl p-5 mx-5 mt-5 bg-stone-900 border border-stone-700'>
            <h2 className='font-bold mb-5'>SYSTEM INFORMATION</h2>
            <p>System: {systemInfo[0]}</p>
            <p>IP: {systemInfo[1]}</p>
          </div>
        )}


      <div className='grid sm:grid-cols-2 px-5 mt-5 gap-3 mb-5'>
        {/* Render Card components */}
        <Card value={computerStats && computerStats[0]} name={'CPU'} type={'%'} />
        <Card value={computerStats && computerStats[1]} name={'MEMORY'} type={'%'} />
        <Card value={computerStats && computerStats[2]} name={'DISK'} type={'%'} />
        <Card value={computerStats && computerStats[3]} name={'BATTERY'} type={'%'} />
        <Card value={computerStats && computerStats[4]} name={'BOOT TIME'} type={''} />
      </div>
    </main>
  );
}
