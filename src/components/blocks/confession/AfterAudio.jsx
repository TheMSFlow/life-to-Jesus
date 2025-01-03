import React from 'react'
import Button from '../../global/Button'

const AfterAudio = ({handleFinish, handleReplay}) => {

    

  return (
    <>
        <div className="fixed inset-0 m-auto z-10 flex flex-col md:flex-row gap-1 h-[3rem] max-w-[20rem] px-4">
              <Button
                type="primary"
                cta={'Finish'}
                onClick={handleFinish}
                icon={<img src="/confetti.svg" alt="Finish Icon" />}
              />
              <Button
                type="tertiary"
                cta={'Replay'}
                onClick={handleReplay}
                icon={
                  <svg
                    width="15"
                    height="14"
                    viewBox="0 0 15 14"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5.62451 0.207886C3.00116 0.207886 0.874512 2.33453 0.874512 4.95789V7.56463C0.874512 9.89012 2.7597 11.7753 5.08519 11.7753V10.2753C3.58812 10.2753 2.37451 9.06169 2.37451 7.56463V4.95789C2.37451 3.16296 3.82959 1.70789 5.62451 1.70789H10.2088C12.0037 1.70789 13.4588 3.16296 13.4588 4.95789V7.0253C13.4588 8.82023 12.0037 10.2753 10.2088 10.2753H9.41281L10.0202 9.66795C10.3131 9.37506 10.3131 8.90019 10.0202 8.60729C9.72727 8.3144 9.2524 8.3144 8.9595 8.60729L6.54153 11.0253L8.9595 13.4432C9.2524 13.7361 9.72727 13.7361 10.0202 13.4432C10.3131 13.1503 10.3131 12.6755 10.0202 12.3826L9.41289 11.7753H10.2088C12.8321 11.7753 14.9588 9.64865 14.9588 7.0253V4.95789C14.9588 2.33453 12.8321 0.207886 10.2088 0.207886H5.62451Z" />
                  </svg>
                }
              />
            </div>
    </>
  )
}

export default AfterAudio