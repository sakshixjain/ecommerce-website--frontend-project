import { useState, useEffect } from 'react';
import Skeleton from '../website/Skeleton';
import './chat.css';

export default function Chat_box() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay for demonstration purposes
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className='body1'>
      <div className="chat_paper top-48">
        {loading ? (
          <Skeleton width="100%" height="40px" borderRadius="6px" />
        ) : (
          <h2 className="text-xl font-semibold bg-blue-950 rounded-t-xl p-4 text-zinc-50">
            Eastern Standard Provisions
          </h2>
        )}

        <div className="chat_content"> {/* This container will now have a scrollbar */}
          {loading ? (
            <>
              <Skeleton width="60%" height="30px" />
              <Skeleton width="80%" height="100px" borderRadius="6px" />
            </>
          ) : (
            <>
              <h3 className="pt-11 ml-3 text-lg font-semibold">
                Eastern Standard Provisions Bot
              </h3>
              <div className="bg-slate-200 p-3 m-4 text-lg text-gray-800 rounded-xl">
                <p className="border-spacing-2">
                  Welcome! Please enter your email and send us a message to connect with our team.
                </p>
              </div>
            </>
          )}

          {loading ? (
            <Skeleton width="100%" height="60px" borderRadius="6px" />
          ) : (
            <div className="bg-slate-200 p-4 m-2 rounded-xl">
              <label htmlFor="exampleInputEmail1" className="text-lg">
                Email*
              </label>
              <input name="email" required type="text" className="inputc" placeholder="email@..." />
              <button>
                <i className="fa-solid fa-arrow-right bg-slate-600 hover:bg-slate-800 text-gray-50 p-1 pl-2 pr-2 text-lg"></i>
              </button>
            </div>
          )}

          <div className="text-center items-end flex flex-wrap justify-end m-7 chatp">
            {loading ? (
              Array(6)
                .fill(0)
                .map((_, index) => (
                  <Skeleton key={index} width="130px" height="35px" borderRadius="4px" />
                ))
            ) : (
              <>
                <p style={{ border: '2px solid black', width: '130px', height: '35px', padding: '5px', margin: '7px', fontSize: '17px' }}>
                  Track Order
                </p>
                <p style={{ border: '2px solid black', width: '130px', height: '35px', padding: '5px', margin: '7px', fontSize: '17px' }}>
                  Report Issue
                </p>
                <p style={{ border: '2px solid black', width: '130px', height: '35px', padding: '5px', margin: '7px', fontSize: '17px' }}>
                  Cancel Order
                </p>
                <p style={{ border: '2px solid black', width: '150px', height: '35px', padding: '5px', margin: '7px', fontSize: '17px' }}>
                  Product Question
                </p>
                <p style={{ border: '2px solid black', width: '130px', height: '35px', padding: '5px', margin: '7px', fontSize: '17px' }}>
                  Order
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

