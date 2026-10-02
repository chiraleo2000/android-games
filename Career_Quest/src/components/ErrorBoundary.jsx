import { Component } from 'react';
import PropTypes from 'prop-types';
import { logError } from '../utils/ErrorLogger.js';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import './ErrorBoundary.css';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null
        };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // Log error to ErrorLogger
        logError(error, {
            componentStack: errorInfo.componentStack,
            boundaryName: this.props.name || 'ErrorBoundary'
        });

        this.setState({
            error,
            errorInfo
        });
    }

    handleReset = () => {
        this.setState({
            hasError: false,
            error: null,
            errorInfo: null
        });
        
        if (this.props.onReset) {
            this.props.onReset();
        }
    };

    handleGoHome = () => {
        window.location.href = '/';
    };

    render() {
        if (this.state.hasError) {
            return (
                <div className="error-boundary">
                    <div className="error-boundary-content">
                        <AlertTriangle size={64} className="error-icon" />
                        <h1 className="error-title">Oops! Something went wrong</h1>
                        <p className="error-message">
                            {this.props.fallbackMessage || 
                             "We're sorry, but something unexpected happened. Please try again."}
                        </p>
                        
                        {import.meta.env.DEV && this.state.error && (
                            <details className="error-details">
                                <summary>Error Details (Development Only)</summary>
                                <pre className="error-stack">
                                    {this.state.error.toString()}
                                    {this.state.errorInfo?.componentStack}
                                </pre>
                            </details>
                        )}

                        <div className="error-actions">
                            <button 
                                className="error-btn error-btn-primary" 
                                onClick={this.handleReset}
                            >
                                <RefreshCw size={20} />
                                Try Again
                            </button>
                            <button 
                                className="error-btn error-btn-secondary" 
                                onClick={this.handleGoHome}
                            >
                                <Home size={20} />
                                Go Home
                            </button>
                        </div>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.node.isRequired,
    name: PropTypes.string,
    fallbackMessage: PropTypes.string,
    onReset: PropTypes.func
};

export default ErrorBoundary;
