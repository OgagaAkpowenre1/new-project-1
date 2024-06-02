import React from "react";


export default function Modal({ id, header, body, footer, onClose }) {
	return (
		<div id={id || "Modal"} className="modal">
			<div className="content">
				<div className="header">
					<span className="close-modal-icon" onClick={onClose}>&times;</span>
					<h2>{header ? header : "header"}</h2>
				</div>
				<div className="body">
					{body ? (
						body
					) : (
						<div>
							<p>This is our Modal body</p>
						</div>
					)}
				</div>
				<div className="footer">
					<h2>{footer ? footer : "footer"}</h2>
				</div>
			</div>
		</div>
	);
}
