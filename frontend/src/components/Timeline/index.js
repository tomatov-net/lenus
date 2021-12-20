import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import { CloseButton, ProgressBar } from 'react-bootstrap';

import Crud from "./crud";
import React from 'react';
import ModalEditCreate from "./ModalEditCreate";
import moment from "moment";

const CRUD = new Crud();

class UserTimeline extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isModalActive: false,
            selectedItem: {},
        };

        this.changeModalState = this.changeModalState.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    async componentDidMount() {
        const items = await CRUD.get();
        this.setState({items});
    }

    changeModalState(isActive, item = null) {
        this.setState({isModalActive: isActive});

        this.setState({
            selectedItem: item
        });
    }

    async deleteItem(id) {
        await CRUD.delete(id);
        const items = this.state.items.filter(item => item.id !== id);
        this.setState({items});
    }

    async submitForm(form) {
        const items = this.state.items;

        if (form.id) {
            await CRUD.update(form);
            const formItem = items.find(item => item.id === form.id);

            if (!formItem) {
                return;
            }

            for (const [formKey, formValue] of Object.entries(formItem)) {
                formItem[formKey] = form[formKey];
            }

        } else {
            const newItem = await CRUD.create(form);
            items.push(newItem);
        }

        this.changeModalState(false);

        this.setState({items});
    }

    formatDate(date) {
        return moment(date).format('DD-MM-YYYY')
    }

    render() {
        return (
            <div className="row">
                <div className="col-12">
                    <a onClick={() => this.changeModalState(true)} className="btn btn-success">Create new</a>
                </div>
                <div className="col-12">
                    <Timeline  lineColor={'#ddd'}>
                        {this.state.items && this.state.items.map(item => (
                            <TimelineItem
                                key={item.id}
                                dateText={this.formatDate(item.date)}
                                dateInnerStyle={{ background: '#76bb7f' }}
                            >
                                <CloseButton style={{float:'right'}} onClick={() => this.deleteItem(item.id)} />
                                <h3 className="mb-3">{item.title}</h3>
                                <p className="mb-3"><b>Weight:</b> {item.weight}</p>
                                <ProgressBar className="mb-3" now={item.happiness} label='Happiness level' max="10" />
                                <p className="mb-3">{item.comment}</p>

                                <div className="row gx-7">
                                    <div className="col-6">
                                        <a onClick={() => this.changeModalState(true, item)} className="btn btn-info">Edit</a>
                                    </div>
                                </div>
                            </TimelineItem>
                        ))}
                    </Timeline>
                </div>

                {this.state.isModalActive && (
                    <ModalEditCreate
                        isActive={this.state.isModalActive}
                        changeModalState={this.changeModalState}
                        submitForm={this.submitForm}
                        value={this.state.selectedItem}
                    />
                )}

            </div>
        );
    }
}

export default UserTimeline;
