import React from "react";

const Stepper = ({ steps, currentStep }) => {
  const progress = ((currentStep - 1) / (steps.length - 1)) * 100;

  const getStepIcon = (index) => {
    const stepNumber = index + 1;
    if (stepNumber < currentStep) {
      return "✓";
    }
    return stepNumber;
  };

  const getStepStatus = (index) => {
    const stepNumber = index + 1;
    if (stepNumber < currentStep) {
      return "completed";
    } else if (stepNumber === currentStep) {
      return "active";
    }
    return "pending";
  };

  return (
    <div className="modern-stepper" style={{ width: '100%', maxWidth: '100%', boxSizing: 'border-box', overflow: 'hidden' }}>
      <div className="stepper-progress-bar" style={{ width: '100%', maxWidth: '100%', boxSizing: 'border-box' }}>
        <div 
          className="stepper-progress-fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="stepper-steps" style={{ width: '100%', maxWidth: '100%', boxSizing: 'border-box' }}>
        {steps.map((step, index) => {
          const status = getStepStatus(index);
          const icon = getStepIcon(index);
          
          return (
            <div key={index} className="stepper-step" style={{ flexShrink: 0, boxSizing: 'border-box' }}>
              <div className={`stepper-step-icon ${status}`} style={{ flexShrink: 0 }}>
                {icon}
              </div>
              <div className="stepper-step-label" style={{ boxSizing: 'border-box' }}>
                <span className="hidden sm:inline">{step.label}</span>
                <span className="sm:hidden">{step.label.split(' ')[0]}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stepper;
