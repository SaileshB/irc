import React, {Component} from 'react'
import AppBar from 'material-ui/AppBar';
import {Field, reduxForm} from 'redux-form';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


class Login extends Component {

    renderField(field) {
        const {meta: {touched, error}} = field;
        return (
            <div>
                <label>{field.label}</label>
                <TextField
                    hintText={field.hintText}
                    floatingLabelText={field.floatingLabelText}
                    type={field.type}
                    errorText={touched ? error : ''}
                    {...field.input}
                    fullWidth={true}
                />
            </div>
        );
    }

    onSubmit(values) {
        console.log(values);
    }

    render() {
        const {handleSubmit} = this.props;

        return (
            <div>
                <AppBar
                title="IRC"/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3">

                            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
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

                                <br/>

                                <RaisedButton label="Submit" type="submit" primary={true}/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

function validate(values) {
    const errors = {};
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
}

export default reduxForm({
    validate,
    form: 'LoginForm'
})(Login)