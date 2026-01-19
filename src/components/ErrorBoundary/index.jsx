import React from 'react';
import styled from 'styled-components';

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #e9e9e9;
  padding: 20px;
  text-align: center;
`;

const ErrorIcon = styled.div`
  font-size: 64px;
  margin-bottom: 20px;
`;

const ErrorTitle = styled.h1`
  font-family: 'Montserrat', sans-serif;
  color: #e74c3c;
  margin-bottom: 16px;
  font-size: 32px;
`;

const ErrorMessage = styled.p`
  font-family: 'Inter', sans-serif;
  color: #666;
  margin-bottom: 24px;
  font-size: 16px;
  max-width: 500px;
  line-height: 1.5;
`;

const RetryButton = styled.button`
  background-color: #3498db;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 6px;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }
`;

const ErrorDetails = styled.details`
  margin-top: 20px;
  max-width: 600px;
  text-align: left;

  summary {
    cursor: pointer;
    font-family: 'Inter', sans-serif;
    color: #666;
    margin-bottom: 10px;
  }

  pre {
    background-color: #f8f9fa;
    padding: 16px;
    border-radius: 4px;
    overflow-x: auto;
    font-size: 12px;
    color: #333;
  }
`;

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    // Log error para serviço externo em produção
    if (process.env.NODE_ENV === 'production') {
      this.logErrorToService(error, errorInfo);
    }

    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  logErrorToService = (error, errorInfo) => {
    // Implementar integração com serviço de logging
    // Ex: Sentry, LogRocket, etc.
    try {
      console.warn('Error logged to service:', {
        error: error.toString(),
        stack: error.stack,
        componentStack: errorInfo.componentStack
      });
    } catch (logError) {
      console.error('Failed to log error:', logError);
    }
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <ErrorContainer>
          <ErrorIcon>⚠️</ErrorIcon>
          <ErrorTitle>Ops! Algo deu errado</ErrorTitle>
          <ErrorMessage>
            Ocorreu um erro inesperado. Nossa equipe foi notificada e está trabalhando para resolver o problema.
          </ErrorMessage>
          <RetryButton onClick={this.handleRetry}>
            Tentar novamente
          </RetryButton>
          
          {process.env.NODE_ENV === 'development' && (
            <ErrorDetails>
              <summary>Detalhes do erro (desenvolvimento)</summary>
              <pre>
                {this.state.error && this.state.error.toString()}
                <br />
                {this.state.errorInfo.componentStack}
              </pre>
            </ErrorDetails>
          )}
        </ErrorContainer>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
