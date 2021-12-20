import { Button, Modal, FloatingLabel, Form } from 'react-bootstrap';
import React from "react";
import RangeSlider from "react-bootstrap-range-slider";
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';

class ModalTimeline extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            form: {...this.props.value},
        };

        this.onDateChange = this.onDateChange.bind(this);

    }

    onDateChange(event) {
        const form = {...this.state.form};
        form.date = event.target.value;
        this.setState({form})
    }

    onFormElementChange(event, elementKey) {
        const form = {...this.state.form};
        form[elementKey] = event.target.value;
        this.setState({form})
    }

    render() {
        return (
            <Modal show={this.props.isActive} onHide={() => this.props.changeModalState(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{(this.props.value ? 'Edit' : 'Create') + ' milestone'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FloatingLabel
                        controlId="title"
                        label="Title"
                        className="mb-3"
                    >
                        <Form.Control
                            value={this.state.form.title}
                            onChange={(e) => this.onFormElementChange(e, 'title')}
                        />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="comment"
                        label="Comment">
                        <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                            value={this.state.form.comment}
                            onChange={(e) => this.onFormElementChange(e, 'comment')}
                        />
                    </FloatingLabel>

                    <div className="col-12 mt-3">
                        <Form.Label>Happiness level</Form.Label>
                        <RangeSlider
                            value={this.state.form.happiness}
                            min={1}
                            max={10}
                            onChange={e => this.onFormElementChange(e, 'happiness')}
                        />
                    </div>

                    <FloatingLabel
                        controlId="weight"
                        label="Body Weight"
                        className="mt-3"
                    >
                        <Form.Control
                            type="number" value={this.state.form.weight}
                            onChange={e => this.onFormElementChange(e, 'weight')}
                        />
                    </FloatingLabel>



                    <FloatingLabel
                        controlId="floatingTextarea3"
                        label="Date"
                        className="mt-3"
                    >
                        <Form.Control
                            type="date" value={this.state.form.date}
                            onChange={this.onDateChange}
                        />
                    </FloatingLabel>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => this.props.changeModalState(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => this.props.submitForm(this.state.form)}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default ModalTimeline;