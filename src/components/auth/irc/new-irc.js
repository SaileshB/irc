import React, {Component} from 'react'
import {Form, Field, reduxForm} from 'redux-form'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Navbar from '../../../components/navbar'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';


class NewIrc extends Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
        this.handleToggle = this._handleToggle.bind(this);


    }


    // renderDatePicker(field) {
    //     const {meta: {touched, error}} = field;
    //     return(
    //         <div>
    //             <DatePicker
    //                 hintText={field.hintText}
    //                 floatingLabelText={field.floatingLabelText}
    //                 errorText = {touched && error}
    //                 {...field.input}
    //                 value = {field.input.value !== ''? new Date(field.input.value) : null}
    //                 onChange = {(event, value) => {console.log(value); field.input.onChange(value)}} />
    //         </div>
    //     );
    // }


    renderField = field => {
        const {meta: {touched, error}} = field;
        return (
            <div>
                <TextField
                    hintText={field.hintText}
                    floatingLabelText={field.floatingLabelText}
                    type={field.type}
                    errorText={touched && error ? error : ''}
                    {...field.input}
                    fullWidth={true}
                />
            </div>
        );
    };


    onSubmit = values => {
        console.log(values);
        alert(JSON.stringify(values));
    };

    _handleToggle = () => {
        this.setState({open: !this.state.open});
    };

    render() {

        const {handleSubmit, reset} = this.props;
        // const email = value =>
        //     value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        //         ? 'Invalid email address'
        //         : undefined;
        //
        //  const phoneNumber = value =>
        //     value && !/^(0|[1-9][0-9]{9})$/i.test(value)
        //         ? 'Invalid phone number, must be 10 digits'
        //         : undefined;

        return (
            <div>
                <Navbar/>
                <br/>

                <div className="container">
                    <RaisedButton label="Modal Dialog" onTouchTap={this.handleToggle}/>
                    <Dialog
                        title="Dialog With Actions"
                        modal={false}
                        open={this.state.open}
                        autoScrollBodyContent={true}


                    >


                        <Form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                            <Field
                                hintText="Institution Name"
                                floatingLabelText="Institution Name"
                                type="text"
                                name="institutionName"
                                component={this.renderField}
                            />
                            <Field
                                hintText="Location"
                                floatingLabelText="Location"
                                type="text"
                                name="location"
                                component={this.renderField}
                            />
                            <Field
                                hintText="Contact Number"
                                floatingLabelText="Contact Number"
                                type="number"
                                name="contact"
                                component={this.renderField}

                            />
                            <Field
                                hintText="Username"
                                floatingLabelText="Username"
                                type="text"
                                name="username"
                                component={this.renderField}
                            />
                            <Field
                                hintText="@"
                                floatingLabelText="Email"
                                type="email"
                                name="email"
                                component={this.renderField}

                            />

                            <Field
                                hintText="Password"
                                floatingLabelText="Password"
                                type="password"
                                name="password"
                                component={this.renderField}
                            />
                            <Field
                                hintText="Web Address"
                                floatingLabelText="Web Address"
                                type="text"
                                name="webAddress"
                                component={this.renderField}

                            />
                            <FlatButton
                                label="Cancel"
                                primary={true}
                                type="reset"
                                onTouchTap={this.handleToggle}
                                onClick={reset}
                            />
                            <RaisedButton
                                label="Submit"
                                primary={true}
                                type="submit"
                            />

                            {/*<Link to="/" className="btn btn-danger">Cancel</Link>*/}


                            {/*<RaisedButton label="Submit" type="submit" primary={true}/>*/}

                            {/*<Field*/}
                            {/*name="estDate"*/}
                            {/*component={this.renderDatePicker}*/}
                            {/*floatingLabelText="IRC Established Date"*/}
                            {/*hintText="IRC Established Date"*/}
                            {/*/>*/}


                        </Form>
                    </Dialog>

                </div>


            </div>



        );
    }
}

const validate = values => {
    const errors = {};
    if (!values.institutionName) {
        errors.institutionName = 'You can\'t leave this empty.';
    }
    if (!values.webAddress) {
        errors.webAddress = 'You can\'t leave this empty.';
    }
    if (!values.username) {
        errors.username = 'You can\'t leave this empty.';
    }
    if (!values.contact) {
        errors.contact = 'You can\'t leave this empty.';
    }
    if (!values.location) {
        errors.location = 'You can\'t leave this empty.';
    }
    if (!values.email) {
        errors.email = "You can't leave this empty.";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.password) {
        errors.password = "You can't leave this empty.";
    }

    //if errors = null submit form
    return errors;
};

export default reduxForm({

    form: 'LoginForm',
    validate
})(NewIrc);