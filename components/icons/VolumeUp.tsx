import React from 'react';

interface VolumeUpProps {
  width?: number;
  height?: number;
  color?: string;
}

const VolumeUp = ({
  width = 24,
  height = 24,
  color = '#fff',
}: VolumeUpProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      width={width}
      viewBox="0 -960 960 960"
      fill={color}
    >
      <path d="M552-152v-75q86-23 139-93.26 53-70.25 53-159.5 0-89.24-53.5-158.74Q637-708 552-734v-75q116 25 190 117t74 211q0 119-73.5 211.5T552-152ZM144-385v-192h144l192-192v576L288-385H144Zm408 55v-302q45.12 20.4 70.56 61.2Q648-530 648-480.52q0 48.52-25.44 89.23Q597.12-350.59 552-330ZM408-595l-90 90H216v48h102l90 90v-228Zm-91 113Z" />
    </svg>
  );
};

export default VolumeUp;
