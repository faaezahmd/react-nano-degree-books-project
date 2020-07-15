import React from 'react';
import BookList from '../components/BookList';

class MainPage extends React.Component {
    render() {
        return (
            <BookList
                isLoading={this.props.isLoading}
                updateShelf={this.props.updateShelf}
                currentlyReading={this.props.currentlyReading}
                wantToRead={this.props.wantToRead}
                read={this.props.read}
            />
        )
    }
}

export default MainPage;