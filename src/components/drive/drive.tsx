import React from 'react';
// Added BsPlugFill for the "mount" action
import { FiHardDrive, FiCode } from 'react-icons/fi';
import { BsEjectFill, BsPlugFill } from 'react-icons/bs';

// Assuming DriveItem.css from the previous example is used for styling
import './drive.css';

type DriveProps = {
  driveName: string;
  usedSpace: number;
  totalSpace: number;
  isMounted: boolean;
  onMount: (path: string) => void;
  onUnmount: (path: string) => void;
  onClick: (path: string) => void;
  // ADDED: Re-added theme and isSelected to match the visuals and logic
  theme?: 'light' | 'dark';
  isSelected?: boolean;
};

const Drive: React.FC<DriveProps> = ({
  driveName = "Local Disk (C:)",
  usedSpace = 120,
  totalSpace = 256,
  isMounted = true,
  theme = 'light', // Added default
  isSelected = false, // Added default
  onMount,
  onUnmount,
  onClick,
}) => {
  // --- Component Logic ---
  const usedPercentage = (usedSpace / totalSpace) * 100;
  const availableSpace = totalSpace - usedSpace;

  // --- Event Handlers ---
  // These wrapper functions prevent the main onClick from firing when an icon is clicked.
  const handleUnmountClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevents the event from "bubbling" up to the parent div
    onUnmount(driveName);
  };
  
  const handleMountClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onMount(driveName);
  };
  
  // A generic handler for the "Code" icon, could be for opening a terminal, etc.
  const handleCodeClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    // You could create a new prop for this, but reusing onClick is fine for an example.
    console.log(`Code action for: ${driveName}`);
  };

  // --- JSX Structure ---
  const componentClasses = `drive-item ${isSelected ? 'selected' : ''}`;

  return (
    // The main onClick handler is attached here
    <div className={componentClasses} data-theme={theme} onClick={() => onClick(driveName)}>
      <div className="drive-icon-container">
        <FiHardDrive size={24} />
      </div>

      <div className="drive-info">
        <span className="drive-name">{driveName}</span>
        <div className="progress-bar-container">
          <div
            className="progress-bar-used"
            style={{ width: `${usedPercentage}%` }}
            role="progressbar"
            aria-valuenow={usedPercentage}
            aria-valuemin={0}
            aria-valuemax={100}
          ></div>
        </div>
        <div className="drive-stats">
          <div className="stat-used">
            <span className="dot"></span>
            Used: {usedSpace.toFixed(1)} GB
          </div>
          <div className="stat-available">
            <span className="dot"></span>
            Available: {availableSpace.toFixed(1)} GB
          </div>
        </div>
      </div>

      <div className="drive-actions">
        <FiCode size={20} onClick={handleCodeClick} />
        
        {/* CORRECTED: Conditionally render Eject or Mount icon based on isMounted prop */}
        {isMounted ? (
          <BsEjectFill title="Unmount" size={20} onClick={handleUnmountClick} />
        ) : (
          <BsPlugFill title="Mount" size={20} onClick={handleMountClick} />
        )}
      </div>
    </div>
  );
};

export default Drive;