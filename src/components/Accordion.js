import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Accordion = (props) => {
  const notify = () => toast.success("Copied successfully",{
    position:"bottom-right",
    closeButton:false,
    className:"copied-message",
  });
  const { data } = props;
  const copyToClipboard = (text) => {
    console.log('text', text)
    var textField = document.createElement('textarea')
    textField.innerText = text
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
  }
  return (
    <>
    <ToastContainer />
      <div className="accordion" id="accordionExample">
        {data.map((accodion, i) => {
          return (
            <>
              <div key={i} className="accordion-item">
                <h2 className="accordion-header" id={`heading${i}`}>
                  <button
                    className="accordion-button collapsed simple-btn"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${i}`}
                    aria-expanded="false"
                    aria-controls={`collapse${i}`}
                  >
                    {accodion.title}
                  </button>
                </h2>
                <div
                  id={`collapse${i}`}
                  className="accordion-collapse collapse "
                  aria-labelledby={`heading${i}`}
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                  {
                    accodion.title === 'Share' ? <a href="javascript:void(0)" onClick={()=>{copyToClipboard(accodion.details);notify()}}>Copy Product Link</a>:accodion.details
                  }
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
      
        
    </>
  );
};

export default Accordion;
