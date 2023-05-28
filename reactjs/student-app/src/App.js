import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  // const [isLoading, setIsLoading] = useState(true);
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const datesheet = await axios.get('http://localhost:7777/datesheet');
  //     const marks = await axios.get('http://localhost:7777/marks');
  //     const bonacert = await axios.get('http://localhost:7777/bonacert');
  //     const marksheet = await axios.get('http://localhost:7777/marksheet');

  //     setData([datesheet.data, marks.data, bonacert.data, marksheet.data]);
  //     setIsLoading(false);
  //   };
  

  //   fetchData();
  // }, []);

  const [datesheetUrl, setDatesheetUrl] = useState('');
  const [showDatesheet, setShowDatesheet] = useState(false);

  const [marksUrl, setMarksUrl] = useState('');
  const [showMarks, setShowMarks] = useState(false);

  const [bonaUrl, setBonaUrl] = useState('');
  const [showBona, setShowBona] = useState(false);

  const [marksheetUrl, setMarksheetUrl] = useState('');
  const [showMarksheet, setShowMarksheet] = useState(false);

  const handleShowDatesheet = () => {
    fetch('http://localhost:7777/datesheet')
      .then(response => response.blob())
      .then(blob => {
      const url = URL.createObjectURL(blob);
      setDatesheetUrl(url);
      setShowDatesheet(true);
    })
    .catch(error => {
      console.error('Error downloading Datesheet: ', error);
    });
  };

  const handleShowMarks = () => {
    fetch('http://localhost:7777/marks')
      .then(response => response.blob())
      .then(blob => {
        const url = URL.createObjectURL(blob);
        setMarksUrl(url);
        setShowMarks(true);
      })
      .catch(error => {
        console.error('Error downloading Marks: ', error);
      });
    };

    const handleShowBona = () => {
        fetch('http://localhost:7777/bonacert')
          .then(response => response.blob())
          .then(blob => {
            const url = URL.createObjectURL(blob);
            setBonaUrl(url);
            setShowBona(true);
          })
          .catch(error => {
            console.error('Error downloading Bonafide Certificate: ', error);
          });
        };
    
    const handleShowMarksheet = () => {
          fetch('http://localhost:7777/marksheet')
            .then(response => response.blob())
            .then(blob => {
              const url = URL.createObjectURL(blob);
              setMarksheetUrl(url);
              setShowMarksheet(true);
            })
            .catch(error => {
              console.error('Error downloading Marksheet: ', error);
            });
          };

  const handleCloseDatesheet = () => {
    setDatesheetUrl('');
    setShowDatesheet(false);
  };

  const handleCloseMarks = () => {
    setMarksUrl('');
    setShowMarks(false);
  };

  const handleCloseBona = () => {
    setBonaUrl('');
    setShowBona(false);
  };

  const handleCloseMarksheet = () => {
    setMarksheetUrl('');
    setShowMarksheet(false);
  };

  return (
      <div className='container'>
        <h1>Student Examination Module</h1>
        <div>
        <div className=''>
        <button className='button' onClick={showDatesheet ? handleCloseDatesheet : handleShowDatesheet}>
          {showDatesheet ? 'Close Datesheet' : 'Show Datesheet'}
        </button>
        {
          showDatesheet && 
          <div>
            <embed className='output' src={datesheetUrl} type="application/pdf" width="100%" height="777px" />
          </div>
        }
        </div>
        <div>
        <button className='button' onClick={showMarks ? handleCloseMarks : handleShowMarks}>
          {showMarks ? 'Close Marks' : 'Show Marks'}
        </button>
        {
          showMarks && 
          <div>
            <embed className='output' src={marksUrl} type="application/pdf" width="100%" height="777px" />
          </div>
        }
        </div>
        <div>
        <button className='button' onClick={showBona ? handleCloseBona : handleShowBona}>
          {showBona ? 'Close Bonafide Certificate' : 'Show Bonafide Certificate'}
        </button>
        {
          showBona && 
          <div>
            <embed className='output' src={bonaUrl} type="application/pdf" width="100%" height="777px" />
          </div>
        }
        </div>
        <div>
        <button className='button' onClick={showMarksheet ? handleCloseMarksheet : handleShowMarksheet}>
          {showMarksheet ? 'Close Digital Marksheet' : 'Show Digital Marksheet'}
        </button>
        {
          showMarksheet && 
          <div>
            <embed className='output' src={marksheetUrl} type="application/pdf" width="100%" height="777px" />
          </div>
        }
        </div>
        </div>
      </div>
  );
  //   return (
  //     <div>
  //       {isLoading ? (
  //         <h1>Loading...</h1>
  //       ) : (
  //         <div>
  //           <h1>{data[0]}</h1>
  //           <h1>{data[1]}</h1>
  //           <h1>{data[2]}</h1>
  //           <h1>{data[3]}</h1>
  //         </div>
  //       )}
  //     </div>
  //   );
  // }
}


export default App;
