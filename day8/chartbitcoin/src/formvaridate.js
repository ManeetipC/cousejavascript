import React, { Component } from 'react';
import './App.css';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

class App extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }
    render() {
        return (
            <div className="App" style={{ margin: 'auto', width: '50%', marginTop: 20 }} >
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem>

                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />

                    </FormItem>
                    <FormItem>

                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />

                    </FormItem>

                </Form>

            </div>
        );
    }
}

export default App;
