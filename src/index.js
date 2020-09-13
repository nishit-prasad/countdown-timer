import React from 'react';
import ReactDOM from 'react-dom';

class Label extends React.Component {
    render() {
        return (
            <label>
                {this.props.label}
            </label>
        );
    }
}

class Input extends React.Component {
    render() {
        return(
            <div>
                <input
                    type={this.props.typeName}
                    value={this.props.value}
                />
            </div>
        );
    }
}

class TimerDisplay extends React.Component {
    render() {
        return (
            <div>
                <h3>MM : DD : HH : MM : SS</h3>
            </div>
        );
    }
}

class Button extends React.Component {
    render() {
        return (
            <button type="button">{this.props.value}</button>
        );
    }
}

class TimerBoard extends React.Component {
    renderButton(buttonName) {
        return (
            <Button
                value={buttonName}
            />
        );
    }
    
    renderLabel(label) {
        return (
            <Label label={label} />
        );
    }

    renderInput() {
        return (
            <Input
                typeName="input"
            />
        );
    }

    renderDateInput() {
        return (
            <Input
                typeName="date"
            />
        );
    }

    renderTimeInput(defaultValue) {
        return (
            <Input
                typeName="time"
                value={defaultValue}
            />
        );
    }

    render() {
        return (
            <div>
                <div>
                    {this.renderLabel("Event Name")}
                    {this.renderInput()}
                    {this.renderDateInput()}
                    {this.renderTimeInput("00:00:00")}
                </div>
                <div>
                    <TimerDisplay />
                </div>
                <div>
                    {this.renderButton("Reset")}
                    {this.renderButton("Start")}
                </div>
            </div>
            
        );
    }
}

// ==========================================
ReactDOM.render(
    <TimerBoard />,
    document.getElementById('root')
);