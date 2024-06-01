import React, { Component } from "react";

const WithLogging = (WrappedComponent) => {
	return class extends Component {
		componentDidMount() {
			console.log(
				`Component ${
					WrappedComponent.displayName ||
					WrappedComponent.name ||
					"Component"
				} is mounted`
			);
        }
        
        componentWillUnmount() {
            console.log(
				`Component ${
					WrappedComponent.displayName ||
					WrappedComponent.name ||
					"Component"
				} is going to unmount`
			);
        }

        render() {
            return <WrappedComponent {...this.props} />
        }
	};
};
