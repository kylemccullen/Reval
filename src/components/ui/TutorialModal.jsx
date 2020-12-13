import React, { useState, useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import { AiFillThunderbolt } from "react-icons/ai";

import { ThemeContext } from "../../context/ThemeContext";

const TutorialModal = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="div-link px-2 mx-2" onClick={handleShow}>
        tutorial
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className={isDarkMode ? "dark" : ""}>
          <Modal.Title>Tutorial</Modal.Title>
        </Modal.Header>
        <Modal.Body className={isDarkMode ? "dark" : ""}>
          <p>A rental property evaluator with sharable links.</p>
          <h4>Editing Fields</h4>
          <p>
            All non static fields are editable. Static fields are denoted with a{" "}
            <AiFillThunderbolt /> icon next to the label. To edit a field click
            on the displayed text, make changes in the text input and hit ENTER
            on your keyboard to submit the changes. Notice that all calculations
            a re-run, and corresponding fields are updated.
          </p>
          <p>
            There are two types of editable fields. Single value, and fixed
            value and percent. Fixed value and percent fields contain a toggle
            switch that allows you to quickly switch between a fixed value or a
            percent.
          </p>
          <h4>Sharing links</h4>
          <p>
            Want to share your calculations with someone? Each edit updates the
            link with the new value. Just send them the link after you make all
            your changes.
          </p>
        </Modal.Body>
        <Modal.Footer className={isDarkMode ? "dark" : ""}>
          <Button variant="secondary" onClick={handleClose}>
            Got it
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TutorialModal;
