import React from 'react';
import { Button } from 'react-bootstrap';

const SendButton = ({ handleClick, isDisabled }) => (
  <Button
    type="submit"
    className="btn-group-vertical"
    variant="light"
    onClick={handleClick}
    disabled={isDisabled}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width="20"
      height="20"
      fill="currentColor"
    >
      <path
        d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
        fillRule="evenodd"
      />
    </svg>
    <span className="visually-hidden">Отправить</span>
  </Button>
);

export default SendButton;
