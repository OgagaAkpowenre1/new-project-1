import React, { useState } from "react";
import Modal from "./modal";
import "./modal.css";

export default function ModalTest() {
	const [showModalPopup, setShowModalPopup] = React.useState(false);

	function handleModalPopup() {
		setShowModalPopup(!showModalPopup);
	}

 function onClose(){
  setShowModalPopup(false);
 }

	return (
		<div>
			<button onClick={handleModalPopup}>Open Modal Popups</button>
			{showModalPopup && <Modal onClose={onClose} body={<div>Customized body</div>}/>}
		</div>
	);
}
