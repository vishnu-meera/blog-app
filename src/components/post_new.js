import React, { Component } from 'react'
import {Field,reduxForm} from 'redux-form';

class PostNew extends Component{
    renderField(field){
        const {meta:{touched,error}} = field;
        const className = `form-control ${touched && error? 'is-invalid' : 'is-valid'}`
        return(
            <div className="form-group">
                <label>{field.label}</label>
                <input
                    className={className}
                    type="text"
                    {...field.input}
                />
                <div className="invalid-feedback">
                    {touched ? error: ''}
                </div>
            </div>
        );
    }

    onSubmit(values){
        console.log(values);
    }
    //three states of form pristine touched and invaid
    render(){
        const {handleSubmit} = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>  
                <Field
                    label="Title"
                    typeName = "input"
                    name = "title"
                    component={this.renderField}
                />
                <Field
                    label="Tags"
                    name = "tags"
                    component={this.renderField}
                />
                <Field
                    label="Post Content"
                    name = "content"
                    component={this.renderField}
                />
                <button type="submit" className="btn btn-primary">
                Submit
                </button>
            </form>);
    }
}

function validate(values){
    const errors = {};

    if(!values.title){
        errors.title = "Enter a title !";
    }

    if(!values.tags){
        errors.tags = "Enter a category !";
    }

    if(!values.content){
        errors.content = "Enter some content !";
    }

    return errors;
}

export default reduxForm({
    validate,
    form:'PostNewForm'
})(PostNew);